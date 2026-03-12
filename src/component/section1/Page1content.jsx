import React from 'react'
import Card from './card'

const Page1content = () => {
    const data = [
  {
    id: 1,
    name: "Satisfied",
    description: "Prime customers that have access to bank credit and are satisfied with the current product.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    button: {
      bg: "bg-blue-500",
      text: "text-white"
    }
  },
  {
    id: 2,
    name: "Underbanked",
    description: "Customers who have limited access to financial services and need better banking solutions.",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    button: {
      bg: "bg-yellow-400",
      text: "text-black"
    }
  },
  {
    id: 3,
    name: "Unbanked",
    description: "People who do not have access to any traditional banking services.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    button: {
      bg: "bg-green-500",
      text: "text-white"
    }
  }
];
  return (
    <div className='max-w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-fit'>
        <div className='flex justify-between flex-col bg-green-400 rounded-2xl p-5 space-y-20'>
            <div className='space-y-4'>
                <h1 className='text-3xl font-bold'>Prospective customer segmentation</h1>
                <p>Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups</p>
            </div>
            <p className='text-3xl'><i class="fa-solid fa-up-right-from-square"></i></p>
        </div>

        {
            data.map(v => <Card {...v}></Card>)
        }

    </div>
  )
}

export default Page1content