import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const WritePost: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <h1>글 쓰기</h1>
      </main>
    </div>
  )
}

export default WritePost
