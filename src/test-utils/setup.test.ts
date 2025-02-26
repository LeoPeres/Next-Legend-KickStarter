describe("Testing setup", () => {
  it("should work", () => {
    expect(1 + 1).toBe(2);
  });

  it("should handle async tests", async () => {
    const result = await Promise.resolve(42);
    expect(result).toBe(42);
  });
});
