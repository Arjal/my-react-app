import React, { useState } from 'react'
import ButtonComponent from '../../components/ButtonComponent';
import { faker, Faker } from '@faker-js/faker';
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
  const [users, setUsers] = useState([]);
  const handleUser = () => {
    const user = {
      id: faker.string.ulid(),
      image: faker.image.avatarGitHub(),
      username: faker.internet.displayName(),
      email: faker.internet.email(),
      reaction: faker.internet.emoji()
    };

    setUsers((prev) => [...prev, user]);

  }
  const handleRemove = (index) => {
    // users.splice(index, 1);
    setUsers((prev) => prev.filter((_, i) => i !== index));
  }
  return (
    <div className='p-5 border-2 shadow-2xl'>
      <button onClick={handleUser}
        className='bg-amber-400 text-white px-5 py-1'>Add user</button>
      {users.map((use, i) => {
        return <div key={use.id} className='space-y-2 flex gap-7 items-start'>
          <div>
            <h2>{use.username}</h2>
            <img src={use.image} className='h-[100px]' alt="" />
          </div>
          <button onClick={() => handleRemove(i)} className='bg-amber-700 text-white'>Remove</button>

        </div>
      })}
      {/* <h1 className='text-2xl'>{count}&nbsp;{text}</h1>
      <button onClick={handleCount} className='bg-black text-white px-2 py-2 cursor-pointer'>Increment</button> */}
    </div>
  )
}
