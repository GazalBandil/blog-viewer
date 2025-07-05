import { useState } from 'react';
import PostList from '@/components/PostList';
import PostDetail from '@/components/PostDetail';

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();
  return { props: { posts } };
}

export default function PostsPage({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blog Viewer</h1>
      <PostList posts={posts} onSelect={setSelectedPost} />
      {selectedPost && <PostDetail post={selectedPost} />}
    </div>
  );
}
// get static props are used