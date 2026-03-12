import React from 'react'

const card = ({id,name,description,img,button}) => {
  return (
    <div>
        <div className='p-5 h-full rounded-2xl relative object-cover bg-cover bg-no-repeat bg-center'style={{ backgroundImage: `url(${img})` }}>
        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
            <div className='space-y-33 relative'>
                <h1 className='text-3xl bg-green-500 p-3 px-5 rounded-full w-fit'>{id}</h1>
                <div className='space-y-5'>
                    <p className='text-white'>{description}</p>
                    <div className='flex justify-between items-end'>
                        <h3 className={`text-xl font-bold py-3 ${button.text} px-4 ${button.bg} rounded-full text-white`}>{name}</h3>
                        <p className='bg-fuchsia-600 p-3 px-4 rounded-full'><i class="fa-solid fa-arrow-right-long"></i></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default card;