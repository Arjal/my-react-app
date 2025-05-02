import axios from 'axios';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import Category from './Category';
import SearchItem from './SearchItem';

export default function Home() {

  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState(null);


  const getData = async () => {
    setLoad(true);
    try {
      if (search) {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php', {
          params: {
            s: search
          }
        });
        setData((prev) => response.data);
      } else {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setData((prev) => response.data);
      }

      setLoad(false);
    } catch (err) {
      setLoad(false);
      console.log(err);
    }

  }
  useEffect(() => {
    getData();
  }, [search]);

  if (load) {
    return <h1>Loading....</h1>
  }


  return (
    <div className='p-5'>


      <Formik
        initialValues={{
          query: ''
        }}

        onSubmit={(val) => {
          setSearch(val.query);
        }}

      >


        {({ handleChange, handleSubmit, values }) => {

          return <form onSubmit={handleSubmit} className='space-y-2 flex gap-4 items-baseline'>
            <div>
              <input
                className='border-2 border-gray-500 px-2 w-[300px] py-1'
                value={values.query}
                onChange={handleChange}
                type="text" name='query'
                placeholder='search for meals'
              />
            </div>


            <button className='bg-black text-white text-sm px-5 py-2 rounded-sm' type='submit'>Submit</button>

          </form>
        }}


      </Formik>

      {search ? <SearchItem data={data} /> : <Category data={data} />
      }



    </div>
  )
}


// import React, { useEffect, useState, useRef } from 'react'
// import ButtonComponent from '../../components/ButtonComponent';
// import { faker, Faker } from '@faker-js/faker';
// import axios from 'axios';
// import { useNavigate } from 'react-router';
// import { useApiHooks } from '../../hooks/apiHooks';
// export default function Home() {
//   // const [count, setCount] = useState(0);
//   // const [text, setText] = useState('');
//   // const handleCount = () => {
//   //   setCount((updated) => {
//   //     const newupd = updated + 1;
//   //     setText(newupd % 2 === 0 ? 'Even' : 'Odd');
//   //     return newupd;
//   //   })
//   // }
//   // const [users, setUsers] = useState([]);
//   // const handleUser = () => {
//   //   const user = {
//   //     id: faker.string.ulid(),
//   //     image: faker.image.avatarGitHub(),
//   //     username: faker.internet.displayName(),
//   //     email: faker.internet.email(),
//   //     reaction: faker.internet.emoji()
//   //   };

//   //   setUsers((prev) => [...prev, user]);

//   // }
//   // const handleRemove = (index) => {
//   //   users.splice(index, 1);
//   //   setUsers((prev) => prev.filter((_, i) => i !== index));
//   // }
//   // const ref = useRef();
//   // const videoRef = useRef();

//   // async operation
//   // setTimeout(() => {
//   //   console.log('hello');
//   // }, 1000);

//   //sync operation
//   // for loop  etc

//   // const response = axios.get(
//   //   'https://weatherapi-com.p.rapidapi.com/current.json',
//   //   {
//   //     headers: {
//   //       'x-rapidapi-key': '89e53c72d7msh16aa8c041814a4cp1f3e79jsn333d7bcaf747'
//   //     },
//   //     params: {
//   //       q: '27.7012718,85.3186394'
//   //     }
//   //   }

//   // );

//   // console.log(response);

//   const nav = useNavigate();
//   const [load, data, err] = useApiHooks('https://www.themealdb.com/api/json/v1/1/categories.php');


//   // const getData = async () => {
//   //   try {
//   //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//   //     // console.log(response.data);

//   //     setData((prev) => response.data);
//   //   } catch (err) {
//   //     console.log(err);

//   //   }

//   // }

//   // useEffect(() => {
//   //   getData();
//   //   console.log('hello');
//   // }, []);
//   // console.log('sello jeee');



//   if (load) {
//     return <h1>loading....</h1>
//   }

//   // const handleFunc = () => {
//   //   // ref.current.focus();
//   //   videoRef.current.play();
//   // }


//   return (
//     <div className='p-5 border-2 shadow-2xl'>
//       {/* <button onClick={handleUser}
//         className='bg-amber-400 text-white px-5 py-1'>Add user</button>
//       {users.map((use, i) => {
//         return <div key={use.id} className='space-y-2 flex gap-7 items-start'>
//           <div>
//             <h2>{use.username}</h2>
//             <img src={use.image} className='h-[100px]' alt="" />
//           </div>
//           <button onClick={() => handleRemove(i)} className='bg-amber-700 text-white'>Remove</button>

//         </div>
//       })} */}
//       {/* <input type="text" ref={ref} placeholder='hello jee' />

//       <button onClick={handleFunc}>CLick To Increment</button>

//       <video ref={videoRef} className='h-[200px]' src="https://flutter.github.io/assets-for-api-docs/assets/videos/butterfly.mp4"></video>

//       <button onClick={handleFunc}>Play Video</button> */}
//       {/* <h1 className='text-2xl'>{count}&nbsp;{text}</h1>
//       <button onClick={handleCount} className='bg-black text-white px-2 py-2 cursor-pointer'>Increment</button> */}


//       <h1>Meals Caategory</h1>

//       {data && data.categories.map((cata) => {
//         return <div
//           onClick={() => nav(`/category-items/${cata.strCategory}`)}
//           className='cursor-pointer'
//           key={cata.idCategory}>
//           <h1>{cata.strCategory}</h1>
//           <img src={cata.strCategoryThumb} alt="" />
//           <p>{cata.strCategoryDescription}</p>

//         </div>
//       })}
//     </div>
//   )
// }
