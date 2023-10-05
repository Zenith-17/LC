import React from 'react'
import questions from '@/utilities/questions'
const ProblemPage = () => {
  
    return (
    <div className='flex flex-col mt-20'>
        <h1 className=' text-5xl flex justify-center min-w-full '>
            Problems
        </h1>
        <div className='flex justify-evenly min-w-full mt-10'>
           <p className=' text-xl'>TITLE</p>
           <p className=' text-xl'>DIFFICULTY</p>
           <p className=' text-xl'>CATEGORY</p>
      
        </div>
        
       <div className=' border-t-4 border-white px-6 h-auto w-3/4 ml-[12%]'>
        {
            
            questions.map((question)=>(
                <div key={question.number} className=' flex row gap-48 ml-[5%] pl-8  h-12 items-center w-full bg-gray-300  odd:bg-gray-200 '>
                <p className='w-1/3'>{question.number}.) {question.title}</p>
                <p  className='w-1/3'>{question.difficulty}</p>
                <p  className='w-1/3'>{question.category}</p>
                </div>
            ))
        }
       </div>
      
    </div>
  )
}

export default ProblemPage