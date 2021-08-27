import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Child, HomeRoot } from "./Home.styles";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <HomeRoot>
        <Child>Red text in blue background!</Child>
      </HomeRoot>
    </div>
  );
};

export default Home;
