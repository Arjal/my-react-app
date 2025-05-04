
// const arr = [11, 12, 13, 14];

// const calc = (a) => {
//   let sum = 0;
//   for (let i = 0; i < a.length; i++) {
//     sum += a[i];
//   }
//   return sum;
// }
// console.log(calc(arr));
import { log } from "console";
import path from "path";
import os from "os";
import fs from "fs";
import express from 'express';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js';
import mongoose from "mongoose";
import morgan from "morgan";
import fileUpload from "express-fileupload";


const app = express();

mongoose.connect('mongodb+srv://Arjal:galaxyj2@cluster0.ligj2yv.mongodb.net/test').then((val) => {
  console.log('Connected to MongoDB');
  app.listen(5000, () => {
    console.log('database connected and server is listening');
  });
}).catch((err) => {
  console.log(err);
});

// const fileNAme = 'nice-pic.jpg'
// console.log(path.basename(fileNAme));
// console.log(path.extname(fileNAme))
// console.log(os);
// fs.readFile('./sample.txt', 'utf-8', (err, result) => {
//   console.log(result);
// });
// fs.writeFile('./sample.txt', 'hello', 'utf-8', (err, result) => {
//   console.log(result);
// });
// if (fs.existsSync('./n/sample.txt')) {
//   fs.unlink('./n/sample.txt', (err) => {
//     console.log(err);
//   });
// } else {
//   fs.writeFile('./n/sample.txt', 'hello everyone', 'utf-8', (err) => {
//     console.log(err);
//   })
// }
app.use(morgan('dev'));
app.use(express.json());
app.use(fileUpload({
  limits: { fileSize: 5 * 1024 * 1024 },
  abortOnLimit: true
}));

app.use(express.static('uploads'));

app.get('/', (req, res) => {
  return res.status(200).json({
    message: "welcome",
  });
});
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// app.get('/', (req, res) => {
//   return res.status(200).json({
//     message: "welcome"
//   });

//   const { q } = req.query;

//   if (parseFloat(q) % 2 === 0) {
//     return res.status(200).json({
//       message: 'This number is even'
//     })
//   } else {
//     return res.status(200).json({
//       message: 'This number is odd'
//     })
//   }
// });


// app.post('/', (req, res) => {
//   console.log(req.body);
//   const numbers = req.body;
//   const sum = numbers.reduce((acc, num) => acc + num, 0);
//   res.send({ sum });
// });

// app.get('/about', (req, res) => {
//   return res.status(200).json({
//     message: 'this is about page',
//   });
// });

// app.listen(5000, () => {
//   console.log('server is listening ');
// });
// console.log(app);
