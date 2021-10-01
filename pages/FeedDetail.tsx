import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const FeedDetail: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
       <h1>피드 상세</h1>
      </main>
    </div>
  )
}

export default FeedDetail
