import mongoose from 'mongoose';
// import { stdout } from 'process';

const connectMongo = async () =>
    mongoose
        .connect(process.env.MONGODB_URI)
        .then(() => console.log('Connected to MongoDB'))
        .catch((err) => console.error('Could not connect to MongoDB', err));

// console.log('process', process.env.NODE_ENV);
console.log('process 2', process);
export default connectMongo;
