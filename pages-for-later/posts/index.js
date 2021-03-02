import Link from 'next/link';
import PropTypes from 'prop-types';
import { getPostData } from '../../lib/posts';

import Layout from '../../components/layout';

export default function Posts({ posts }) {
    return (
        <Layout>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post._id}>
                        <h2>{post.category}</h2>
                        <Link href={`/posts/${post.slug}`}>
                            <a>
                                <h3>{post.title}</h3>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}

export async function getServerSideProps() {
    return getPostData();
}

Posts.propTypes = {
    posts: PropTypes.array
};
