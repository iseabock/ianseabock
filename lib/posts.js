import { connectToDatabase } from '../util/mongodb';

export async function getPostData(limit = 20) {
    const { db } = await connectToDatabase();
    const posts = await db
        .collection('posts')
        .find({})
        .sort({ metacritic: -1 })
        .limit(limit)
        .toArray();

    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts))
        }
    };
}
