import { render, screen } from "@testing-library/react";
import PostDetail from "@/components/PostDetail";

test("shows post details", () => {
  const post = { title: "Sample", content: "Content" };
  render(<PostDetail post={post} />);

  expect(screen.getByText("Sample")).toBeInTheDocument();
  expect(screen.getByText("Content")).toBeInTheDocument();
});
