'use client';

import { createUser } from '@/utils/actions';

export default function Form() {
  const formStyle = 'max-w-lg flex flex-col gap-y-4 shadow rounded p-8';
  const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700 text-white';
  const btnStyle = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';

  return (
    <form 
      action={createUser}
      className={formStyle}
    >
      <input type='text' name='name' placeholder='Name' defaultValue='Sasha Cox' className={inputStyle} />
      <input type='text' name='email' placeholder='Email' defaultValue='sasha@sasha.sasha' className={inputStyle} />
      <button type='submit' className={btnStyle}>Go!</button>
    </form>
  )
}
