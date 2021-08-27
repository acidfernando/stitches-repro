import type { NextPage } from "next";
import Head from "next/head";
import { Child, HomeRoot } from "../components/Home.styles";

const Home: NextPage = () => {
  return (
    <div>
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
