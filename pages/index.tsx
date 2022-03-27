import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Main from "../containers/Main/index";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SolStore</title>
        <meta name="description" content="Solana E-commerce merch Site" />
      </Head>
      <Main />
    </>
  );
};

export default Home;
