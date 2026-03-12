import React from 'react'
import Navbar from './Navbar';
import Page1content from './Page1content';
import Top from './Top';
import Page2content from './Page2content';

const section1 = () => {
  return (
    <div className='h-full w-full bg-gray-200 pb-10 pt-5'>
            
        <div className='py-7 max-w-[85%] mx-auto'>
            <Top></Top>
        </div>

        <div className='bg-white rounded-2xl py-10 max-w-[85%] mx-auto shadow-2xl'>
            <Navbar></Navbar>
            <Page1content></Page1content>
        </div>

        <div className='bg-white rounded-2xl py-10 max-w-[85%] mx-auto shadow-2xl mt-15'>
            <Navbar></Navbar>
            <Page2content></Page2content>
        </div>
    </div>
  )
}

export default section1;