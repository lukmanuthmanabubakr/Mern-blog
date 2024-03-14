import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://Legend:Legend@legend-mern-blog.okhygpw.mongodb.net/mern-blog?retryWrites=true&w=majority&appName=Legend-Mern-Blog').then(() => {
    console.log('Legend is connected to database');
}).catch((err) => {
    console.log(err);
})

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});