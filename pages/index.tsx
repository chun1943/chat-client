import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer";
import Table from "../components/table";
// import NextTutorial from "../components/nextTutorial";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chatroom</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <NextTutorial /> */}
        <h1 className={styles.title}>Welcome to Chatroom!</h1>
        <Table />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
