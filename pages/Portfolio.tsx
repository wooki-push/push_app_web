import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Portfolio: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>포트폴리오</h1>
      </main>
    </div>
  );
};

export default Portfolio;
