import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import { getPostData } from '../lib/posts';

export default function Home({ posts }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>&ldquo;Thinking&ldquo; out loud</p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {posts.map(({ _id, slug, title }) => (
                        <li className={utilStyles.listItem} key={_id}>
                            <Link href={`/posts/${slug}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    return getPostData(10);
}

Home.propTypes = {
    posts: PropTypes.array
};
