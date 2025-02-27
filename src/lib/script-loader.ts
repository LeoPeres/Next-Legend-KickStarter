/**
 * Script loading strategies
 */
export type ScriptLoadingStrategy = "defer" | "async" | "blocking" | "lazy";

/**
 * Script attributes interface
 */
export interface ScriptAttributes {
  id?: string;
  src: string;
  strategy?: ScriptLoadingStrategy;
  onLoad?: () => void;
  onError?: () => void;
  onReady?: () => void;
  preload?: boolean;
  integrity?: string;
  crossOrigin?: "anonymous" | "use-credentials";
  nonce?: string;
  type?: string;
  referrerPolicy?: string;
  dangerouslySetInnerHTML?: string;
}

/**
 * Load a script with the specified attributes
 */
export function loadScript(attributes: ScriptAttributes): void {
  const {
    id,
    src,
    strategy = "defer",
    onLoad,
    onError,
    onReady,
    preload = false,
    integrity,
    crossOrigin,
    nonce,
    type = "text/javascript",
    referrerPolicy,
    dangerouslySetInnerHTML,
  } = attributes;

  // Check if the script already exists
  const existingScript = document.getElementById(id || src);
  if (existingScript) {
    if (onReady) onReady();
    return;
  }

  // Preload the script if specified
  if (preload) {
    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.as = "script";
    preloadLink.href = src;
    if (crossOrigin) preloadLink.crossOrigin = crossOrigin;
    if (integrity) preloadLink.integrity = integrity;
    if (nonce) preloadLink.nonce = nonce;
    if (referrerPolicy) preloadLink.referrerPolicy = referrerPolicy;
    document.head.appendChild(preloadLink);
  }

  // Create the script element
  const script = document.createElement("script");
  script.src = src;
  script.type = type;
  if (id) script.id = id;
  if (integrity) script.integrity = integrity;
  if (crossOrigin) script.crossOrigin = crossOrigin;
  if (nonce) script.nonce = nonce;
  if (referrerPolicy) script.referrerPolicy = referrerPolicy;
  if (dangerouslySetInnerHTML) script.innerHTML = dangerouslySetInnerHTML;

  // Set loading strategy
  if (strategy === "defer") {
    script.defer = true;
  } else if (strategy === "async") {
    script.async = true;
  } else if (strategy === "lazy") {
    // For lazy loading, we'll use Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When the element is in view, load the script
          const lazyScript = document.createElement("script");
          Object.keys(script).forEach((key) => {
            if (key !== "src") {
              // @ts-ignore
              lazyScript[key] = script[key];
            }
          });
          lazyScript.src = src;
          document.body.appendChild(lazyScript);
          observer.disconnect();
        }
      });
    });

    // Create a placeholder element to observe
    const placeholder = document.createElement("div");
    placeholder.style.display = "none";
    document.body.appendChild(placeholder);
    observer.observe(placeholder);
    return;
  }

  // Add event listeners
  if (onLoad) script.onload = onLoad;
  if (onError) script.onerror = onError;

  // Append the script to the document
  document.body.appendChild(script);

  // Call onReady if provided
  if (onReady) onReady();
}

/**
 * Load multiple scripts in sequence
 */
export function loadScriptsSequentially(scripts: ScriptAttributes[]): Promise<void> {
  return scripts.reduce(
    (promise, script) =>
      promise.then(
        () =>
          new Promise<void>((resolve, reject) => {
            loadScript({
              ...script,
              onLoad: () => {
                if (script.onLoad) script.onLoad();
                resolve();
              },
              onError: () => {
                if (script.onError) script.onError();
                reject(new Error(`Failed to load script: ${script.src}`));
              },
            });
          })
      ),
    Promise.resolve()
  );
}

/**
 * Load multiple scripts in parallel
 */
export function loadScriptsInParallel(scripts: ScriptAttributes[]): Promise<void[]> {
  return Promise.all(
    scripts.map(
      (script) =>
        new Promise<void>((resolve, reject) => {
          loadScript({
            ...script,
            onLoad: () => {
              if (script.onLoad) script.onLoad();
              resolve();
            },
            onError: () => {
              if (script.onError) script.onError();
              reject(new Error(`Failed to load script: ${script.src}`));
            },
          });
        })
    )
  );
}

/**
 * Create a React hook for loading scripts
 */
export function createScriptLoader(scripts: ScriptAttributes[]) {
  let loaded = false;

  return () => {
    if (typeof window !== "undefined" && !loaded) {
      loaded = true;
      loadScriptsInParallel(scripts).catch(console.error);
    }
  };
}
