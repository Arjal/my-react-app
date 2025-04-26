import React, { useEffect, useState, useRef } from 'react'
import ButtonComponent from '../../components/ButtonComponent';
import { faker, Faker } from '@faker-js/faker';
import axios from 'axios';
export default function Home() {
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState('');
  // const handleCount = () => {
  //   setCount((updated) => {
  //     const newupd = updated + 1;
  //     setText(newupd % 2 === 0 ? 'Even' : 'Odd');
  //     return newupd;
  //   })
  // }
  // const [users, setUsers] = useState([]);
  // const handleUser = () => {
  //   const user = {
  //     id: faker.string.ulid(),
  //     image: faker.image.avatarGitHub(),
  //     username: faker.internet.displayName(),
  //     email: faker.internet.email(),
  //     reaction: faker.internet.emoji()
  //   };

  //   setUsers((prev) => [...prev, user]);

  // }
  // const handleRemove = (index) => {
  //   users.splice(index, 1);
  //   setUsers((prev) => prev.filter((_, i) => i !== index));
  // }
  // const ref = useRef();
  // const videoRef = useRef();

  // async operation
  // setTimeout(() => {
  //   console.log('hello');
  // }, 1000);

  //sync operation
  // for loop  etc

  // const response = axios.get(
  //   'https://weatherapi-com.p.rapidapi.com/current.json',
  //   {
  //     headers: {
  //       'x-rapidapi-key': '89e53c72d7msh16aa8c041814a4cp1f3e79jsn333d7bcaf747'
  //     },
  //     params: {
  //       q: '27.7012718,85.3186394'
  //     }
  //   }

  // );

  // console.log(response);


  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      // console.log(response.data);

      setData((prev) => response.data);
    } catch (err) {
      console.log(err);

    }

  }

  useEffect(() => {
    getData();
    console.log('hello');
  }, []);
  console.log('sello jeee');


  // const handleFunc = () => {
  //   // ref.current.focus();
  //   videoRef.current.play();
  // }


  return (
    <div className='p-5 border-2 shadow-2xl'>
      {/* <button onClick={handleUser}
        className='bg-amber-400 text-white px-5 py-1'>Add user</button>
      {users.map((use, i) => {
        return <div key={use.id} className='space-y-2 flex gap-7 items-start'>
          <div>
            <h2>{use.username}</h2>
            <img src={use.image} className='h-[100px]' alt="" />
          </div>
          <button onClick={() => handleRemove(i)} className='bg-amber-700 text-white'>Remove</button>

        </div>
      })} */}
      {/* <input type="text" ref={ref} placeholder='hello jee' />

      <button onClick={handleFunc}>CLick To Increment</button>

      <video ref={videoRef} className='h-[200px]' src="https://flutter.github.io/assets-for-api-docs/assets/videos/butterfly.mp4"></video>

      <button onClick={handleFunc}>Play Video</button> */}
      {/* <h1 className='text-2xl'>{count}&nbsp;{text}</h1>
      <button onClick={handleCount} className='bg-black text-white px-2 py-2 cursor-pointer'>Increment</button> */}
    </div>
  )
}
