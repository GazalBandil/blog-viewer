import { render, screen, fireEvent } from "@testing-library/react";
import PostList from "@/components/PostList";

const mockPosts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
];

test("renders posts and handles click", () => {
  const mockSelect = jest.fn();
  render(<PostList posts={mockPosts} onSelect={mockSelect} />);

  const postBtn = screen.getByText("Post 1");
  fireEvent.click(postBtn);

  expect(postBtn).toBeInTheDocument();
  expect(mockSelect).toHaveBeenCalledWith(mockPosts[0]);
});
