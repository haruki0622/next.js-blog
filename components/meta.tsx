import Head from "next/head";
import { HOME_OG_IMAGE_URL } from "../lib/constants";

const Meta = () => {
  return (
    <Head>
      <meta
        name="description"
        content="フロントエンジニアを目指している泉原遥輝です。学習した技術や知識のアウトプットの内容を執筆しています！"
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  );
};

export default Meta;
