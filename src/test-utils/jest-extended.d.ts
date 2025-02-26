import "@testing-library/jest-dom";

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveClass(className: string): R;
      toHaveAttribute(attr: string, value?: string): R;
      toBeDisabled(): R;
      toBeEnabled(): R;
      toBeChecked(): R;
      toHaveValue(value: string | string[] | number): R;
      toBeVisible(): R;
      toBeRequired(): R;
      toHaveTextContent(text: string | RegExp): R;
      toHaveStyle(css: string): R;
      toContainElement(element: HTMLElement | null): R;
      toContainHTML(htmlText: string): R;
      toHaveFocus(): R;
    }
  }
}

// This export is needed to make TypeScript treat this as a module
export {};
