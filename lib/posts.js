// import connectMongo from '../util/mongodb';

export async function getPostData() {
    // const { db } = await connectMongo();

    // console.log('db', db);
    console.log('process', process.env.NODE_ENV);
    // const posts = await db
    //     .collection('posts')
    //     .find({})
    //     .sort({ metacritic: -1 })
    //     .limit(limit)
    //     .toArray();

    // return {
    //     props: {
    //         posts: JSON.parse(JSON.stringify(posts))
    //     }
    // };
}
