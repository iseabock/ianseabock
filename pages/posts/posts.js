import { connectToDatabase } from '../../util/mongodb';
import PropTypes from 'prop-types';

export default function Posts({ posts }) {
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post._id}>
                        <h2>{post.category}</h2>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getServerSideProps() {
    const { db } = await connectToDatabase();
    const posts = await db
        .collection('posts')
        .find({})
        .sort({ metacritic: -1 })
        .limit(20)
        .toArray();
    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts))
        }
    };
}

Posts.propTypes = {
    posts: PropTypes.array
};
