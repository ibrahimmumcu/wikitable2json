import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css';
import rehypeRaw from 'rehype-raw';

export default class Home extends React.Component {
  static async getInitialProps() {
    const content = await require(`../README.md`);
    return { content };
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Wiki Table 2 JSON</title>
          <meta
            name="description"
            content="An API to get Wikipedia tables as JSON"
          />
          <link rel="icon" href="/favicon.ico" />

          <meta
            name="twitter:image"
            content="https://wikitable2json.vercel.app/wiki-table-2-json.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@ibrahimmumcu" />
          <meta name="twitter:title" content="Wiki Table 2 JSON" />
          <meta
            name="twitter:description"
            content="An API to get Wikipedia tables as JSON"
          />

          <meta
            property="og:image"
            content="https://wikitable2json.vercel.app/wiki-table-2-json.png"
          />
          <meta property="og:title" content="Wiki Table 2 JSON" />
          <meta
            property="og:description"
            content="An API to get Wikipedia tables as JSON"
          />
          <meta property="og:url" content="https://wikitable2json.vercel.app" />
        </Head>

        <main className={styles.main}>
          <div className="markdown-body">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              children={this.props.content.default}
            />
          </div>
        </main>

        <footer className={styles.footer}>
          <div>
            Developed by{' '}
            <a href="https://ibrahimmumcu.com" target="_blank">
              Ibrahim Mumcu
            </a>
          </div>
          <div>
            The source code is on{' '}
            <a
              href="https://github.com/ibrahimmumcu/wikitable2json"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{' '}
            - Service is deployed on{' '}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
