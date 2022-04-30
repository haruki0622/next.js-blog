import Image from "next/image";
import Head from "next/head";

import Sns from "../components/Sns";
import Layout from "../components/layout";
import Container from "../components/container";

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>About</title>
        </Head>
        <Container>
          <Image src="/images/profile-1.jpg" width={400} height={400} objectFit="contain" className="rounded-full"/>
          <h3 className="text-lg lg:text-3xl font-bold">泉原 遥輝 | Haruki Izumihara</h3>
          <p className="mt-4">Web制作やLP作成をしています！美しくて、ミニマムな物が好きです！</p>
          <Sns /> 
        </Container>
      </Layout>
    </>
  );
}
