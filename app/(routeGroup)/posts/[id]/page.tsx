import { posts }from '../../../../data/post'
import styles from './page.module.css'
import Link from 'next/link'

export async function generateStaticParams() {
    const ids: string[] = ["1", "2"]
    return ids.map(id => ({id: id}))
}

async function getPost(id: string) {
    const post = posts.find(post => post.id === id);
    return post
}

export default async function Post({ params }: {params: {id:string}}) {
    const { id } = params;
    const post = await getPost(id);
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div>
          <h1>{post!.title}</h1>
          <br />
          <p>{post!.date}</p>
          <br />
          <p>{post!.knowledge}</p>
          <br />
        </div>
      </div>
      <div>
        <Link href="/"><h3>Back to home</h3></Link>
      </div>
    </main>
  )
}