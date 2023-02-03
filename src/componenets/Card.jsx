import React from 'react'
import { download } from '../assets/index'
import { downloadImage } from '../utils'


const Card = ({ ...post }) => {

  const { _id, name, prompt, photo } = post;



  return (
    <div className='rounded-xl group relative shadow-card hover:shadow-cardhover card'>


      <img className='w-full h-auto object-cover rounded-xl' src={photo} alt={prompt} />
      <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md' >
        <p className='text-white mt-5 overflow-y-auto prompt' >{prompt}</p>

        <div className='mt-5 flex justify-between items-center gap-2' >
          <div className='flex justify-center itmes-center gap-2' >
            <div className='w-7 h-7 rounded-full object-cover bg-green-700 justify-center items-center text-center text-white text-xs font-bold pt-1.5' >
              {name[0]}
            </div>
            <h1 className='text-[#9fbf93] pt-1'>{name}</h1>
          </div>
          <img
            className='w-7 h-7 rounded-md bg-stone-400 hover:cursor-pointer hover:bg-lime-600 ' src={download} alt='download ' onClick={() => downloadImage(_id, photo)}
          />


        </div>


      </div>

    </div>
  )
}

export default Card
