import { act } from "@testing-library/react";

/**
 * Wait for a specified amount of time
 * @param ms Time to wait in milliseconds
 */
export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Wait for a specified amount of time within an act
 * @param ms Time to wait in milliseconds
 */
export const actWait = async (ms: number) => {
  await act(async () => {
    await wait(ms);
  });
};

/**
 * Mock the fetch API for testing
 * @param data The data to return from the fetch call
 * @param status The HTTP status code
 * @param headers Optional headers
 */
export const mockFetch = (data: any, status = 200, headers = {}) => {
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(data),
    text: jest.fn().mockResolvedValue(JSON.stringify(data)),
    status,
    headers: new Headers(headers),
    ok: status >= 200 && status < 300,
  });
};

/**
 * Mock the fetch API to reject with an error
 * @param error The error to throw
 */
export const mockFetchError = (error: Error) => {
  global.fetch = jest.fn().mockRejectedValue(error);
};

/**
 * Reset all mocks between tests
 */
export const resetMocks = () => {
  jest.clearAllMocks();
  global.fetch = jest.fn();
};
