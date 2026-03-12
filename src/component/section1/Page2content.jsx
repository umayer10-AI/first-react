import React from 'react'
import Card2 from './Card2';

const Page2content = () => {

    const progressData = [
  {
    id: 1,
    bg: "bg-blue-400",
    percentage: "56.7%"
  },
  {
    id: 2,
    bg: "bg-green-400",
    percentage: "72.3%"
  }
];

  return (
    <div className='max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 my-4'>
        <div className='space-y-8'>
            <h1 className='text-4xl font-bold'>E-com market is expected to exceed $300B in 2027</h1>
            <div className='flex gap-6'>
                <p className='text-4xl text-blue-500'><i class="fa-solid fa-bolt"></i></p>
                <p className='font-semibold text-xl'>In India MSME contribution to eTailing sales is expected to grow between 60-70% annually to reach USD50Bn by FY 2027.</p>
            </div>

            <div className='grid grid-cols-2 gap-5'>
                {
                    progressData.map(v => <Card2 key={v.id} {...v}></Card2>)
                }
            </div>

        </div>
        <div className='flex justify-center items-end'>
            <img className='w-[80%] h-[80%] object-cover' src="https://plus.unsplash.com/premium_photo-1682309543429-6aaa6d792dae?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    </div>
  )
}
export default Page2content;