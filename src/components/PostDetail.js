export default function PostDetail({ post }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}