import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </div>
  )
}

export async function getStaticPaths() {
  // 在实际应用中，这里通常会从 API 或数据库获取数据
  const posts = [
    { id: 1, title: 'First Blog Post', content: 'This is the first blog post content.' },
    { id: 2, title: 'Second Blog Post', content: 'This is the second blog post content.' },
    { id: 3, title: 'Third Blog Post', content: 'This is the third blog post content.' },
  ]

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // 在实际应用中，这里通常会从 API 或数据库获取数据
  const posts = [
    { id: 1, title: 'First Blog Post', content: 'This is the first blog post content.' },
    { id: 2, title: 'Second Blog Post', content: 'This is the second blog post content.' },
    { id: 3, title: 'Third Blog Post', content: 'This is the third blog post content.' },
  ]

  const post = posts.find((p) => p.id.toString() === params.id)

  return {
    props: {
      post,
    },
  }
}

