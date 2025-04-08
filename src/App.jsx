import React from 'react'
import PostCard from './components/PostCard'
import { posts } from './data'
import ButtonComponent from './components/ButtonComponent';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
// import { age, data } from './data';
// import * as some from './data';

export default function App() {
  // const movie = {
  //   "Title": "The Godfather",
  //   "Year": "1972",
  //   "Rated": "R",
  //   "Released": "24 Mar 1972",
  //   "Runtime": "175 min",
  //   "Genre": "Crime, Drama",
  //   "Director": "Francis Ford Coppola",
  //   "Writer": "Mario Puzo, Francis Ford Coppola",
  //   "Actors": "Marlon Brando, Al Pacino, James Caan",
  //   "Plot": "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.", "Language": "English, Italian, Latin", "Country": "United States", "Awards": "Won 3 Oscars. 31 wins & 30 nominations total",
  //   "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  // };
  // const person = 'hello';
  // const age = 30;
  // const per = {
  //   name: 'ram',
  //   habits: []
  // };
  // const numbers = [11, 22, 33, 44, 55];
  // const isLogin = true;
  // const pers = [
  //   { id: 1, name: 'ram' },
  //   { id: 2, name: 'shyam' },
  //   { id: 3, name: 'rita' },
  // ];
  // console.log(some.data);

  // const [{ name, username }] = data;
  // console.log(name);
  // const handleEvent = () => {
  //   const age = prompt("enter your age");
  //   if (age > 18) {
  //     alert('adult');
  //   } else {
  //     alert('young');
  //   }
  // }
  // const greetEvent = (username) => {
  //   alert(username);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'contact',
      element: <Contact />
    }
  ]);


  return <RouterProvider router={router} />
}

// return (
//   <div>
//     {/* <h1>{person}</h1>
//       <h1>{age}</h1>
//       <p>{`${person} my name is arjal i am ${age} years old.`}</p>
//       <p>{per.name}</p>
//       <p>{numbers}</p>
//       {numbers.map((a, index) => {
//         return <div key={index}>
//           <h1>{`hello ${a}`}</h1>
//           <p>everyone</p>
//         </div>
//       })}
//       {pers.map(({ id, name }) => {
//         return <div key={id}>
//           <h1>{name}</h1>
//         </div>
//       })}
//       <div className='h-[400px] w-[200px] bg-amber-300 '>
//         <img src={movie.Poster} alt={movie.Title} className='h-[50%] w-[100%]' />
//         <h1>{movie.Title}</h1>
//         <h2>{movie.Genre}</h2>
//         <p>{movie.Plot}</p>
//       </div> */}
//     {/* <h1 style={{ color: 'red' }}>hello</h1> */}
//     {/* <h1 className='text-[20px] text-red-400 font-bold'>hello</h1>
//       <div className='h-[200px] w-[200px] border-2 m-2 bg-amber-100 animate-spin rounded-2xl shadow-2xl'></div> */}
//     {/* <div className='h-[100px] w-[100px] bg-amber-100'></div>
//       <div className='h-[100px] w-[100px] bg-amber-300'></div>
//       <div className='h-[100px] w-[100px] bg-amber-700'></div>
//       <div className='h-[100px] w-[100px] bg-amber-950'></div> */}

//     {/* <PostCard /> */}

//     {/* {posts.map(({ title, detail, id, imageUrl }) => {
//         return <PostCard key={id} title={title} detail={detail} imageUrl={imageUrl} />
//       })} */}
//     {/* <button onClick={() => greetEvent('ram')}
//         className='bg-amber-300 text-white px-2 hover:bg-amber-800'>click to view</button> */}
//     {/* <ButtonComponent greetEvent={greetEvent} />
//       <p onCopy={() => {
//         alert('do not copy!');
//       }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia tenetur facilis cupiditate et. Possimus at dolorum ullam fugit perferendis.</p> */}
//   </div>
// )

// const App = () => {
//   console.log(data[1].username);
//   console.log(data[1].email);
// }

// export default App;
