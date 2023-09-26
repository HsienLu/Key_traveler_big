import Head from 'next/head'
import Link from 'next/link'
// import styles from '@/styles/Home.module.sass'
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="editor">我的編輯器</Link>
      </main>
    </>
  )
}
