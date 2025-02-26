// Mock data for tests

// Example user data
export const mockUser = {
  id: "user-1",
  name: "Test User",
  email: "test@example.com",
  image: "https://example.com/avatar.jpg",
};

// Example post data
export const mockPosts = [
  {
    id: "post-1",
    title: "First Post",
    content: "This is the first post content",
    authorId: "user-1",
    createdAt: new Date("2023-01-01").toISOString(),
  },
  {
    id: "post-2",
    title: "Second Post",
    content: "This is the second post content",
    authorId: "user-1",
    createdAt: new Date("2023-01-02").toISOString(),
  },
];

// Add more mock data as needed for your application
