import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  // 在实际应用中，这里通常会从 API 或数据库获取数据
  const posts = [
    { id: 1, title: 'First Blog Post' },
    { id: 2, title: 'Second Blog Post' },
    { id: 3, title: 'Third Blog Post' },
  ]

  return {
    props: {
      posts,
    },
  }
}

