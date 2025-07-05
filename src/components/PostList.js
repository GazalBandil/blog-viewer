
export default function PostList({ posts, onSelect }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <button onClick={() => onSelect(post)}>{post.title}</button>
        </li>
      ))}
    </ul>
  );
}
