import Head from 'next/head';
import Image from 'next/image';

import styles from '@/pages/index.module.css';

import tw, { styled } from 'twin.macro';

const StyledFooter = styled.footer`
  p {
    ${tw`text-purple-500`};
  }
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <StyledFooter>
        <p>I'm the footer and I should be purple.</p>
      </StyledFooter>
    </div>
  );
}
