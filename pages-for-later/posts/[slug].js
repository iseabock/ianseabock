import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Layout from '../../components/layout';
// import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { connectToDatabase } from '../../util/mongodb';

export default function Post({ post }) {
    return (
        <Layout>
            <Head>
                <title>{post.title}</title>
            </Head>
            <h1 className={utilStyles.headingXl}>{post.title}</h1>
            <br />
            <p className={utilStyles.lightText}>{post.body}</p>
            <br />
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    console.log('params :', params);
    // params.id === slug
    const { db } = await connectToDatabase();
    const post = await db.collection('posts').findOne({ slug: params.slug });

    return {
        props: {
            post: JSON.parse(JSON.stringify(post))
        }
    };
}

export async function getStaticPaths() {
    const { db } = await connectToDatabase();
    const posts = await db
        .collection('posts')
        .find({})
        .sort({ metacritic: -1 })
        .limit(20)
        .toArray();

    const paths = posts.map((post) => `/posts/${post.slug}`);

    return {
        paths,
        fallback: true
    };
}

Post.propTypes = {
    post: PropTypes.object
    // post: PropTypes.array
};
