import Head from "next/head";
import { Inter } from "next/font/google";
import { useState } from "react";

// Styles
import styles from "@/styles/Home.module.css";

// Components
import Navbar from "../components/Navbar";
import About from "../components/About";
import Insights from "../components/Insights";
import Biases from "../components/Biases";
import Activity from "../components/Activity";

export default function Home() {
  const [menu, setMenu] = useState(false);

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
        <Navbar menu={menu} setMenu={setMenu} />
        <div
          className={styles.body}
          style={{ transition: "all 0.3s ease-in", opacity: menu ? 0.5 : 1 }}
        >
          <About />
          <Insights />
          <Biases />
          <Activity />
        </div>
        <footer className={styles["copyright-container"]}>
          <small className={styles["copyright-text"]}>&copy; Copyright 2023 Victor Wu, Shaishav Patel, Alexander Kung, Jaswin Hargun</small>{" "}
        </footer>
      </main>
    </>
  );
}
