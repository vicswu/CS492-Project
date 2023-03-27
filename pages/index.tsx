import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

// Styles
import styles from "@/styles/Home.module.css";

// Components
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>CS 492 Project: AI Model Biases Visualizer</title>
        <meta
          name="description"
          content="Term project aiming to help users visualize the biases present in AI models for CS 492: Social Implications of Computing"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.description}>{/* TODO About Section */}</div>

        <div className={styles.center}>
          {/* TODO Center Image */}
          {/* <Image
            className={styles.logo}
            src="/ai.jpeg"
            alt="AI Image"
            width={180}
            height={180}
            priority
          /> */}
        </div>

        <div className={styles.grid}>
          {/* TODO Info Section (Race, Gender, Religion) */}
        </div>
      </main>
    </>
  );
}
