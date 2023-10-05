"use client"
import React from 'react'
import CodeEditor from './CodeEditor'



const QuestionScreen = () => {
  return (
    <div className='flex flex-1 w-full h-full '>
        <div className='bg-blue-900 w-1/3 h-auto flex justify-center pl-4 py-4 flex flex-col '>
            <h1 className='text-3xl mb-4'>Two Sum</h1>
            <p className=' text-justify overflow-scroll px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam accusamus est perspiciatis hic eligendi culpa dolore reprehenderit voluptatum exercitationem unde ut, fuga at quas expedita in cumque eaque, suscipit natus aut tempore ipsam harum enim facere mollitia. Voluptate dolore nulla praesentium id eos. Veritatis nihil eligendi recusandae fuga natus assumenda, quas a, temporibus explicabo, quo architecto qui suscipit nostrum consequuntur velit rem sed cum vel? Quasi dolorem culpa fuga, voluptatibus cupiditate quidem ab ea sequi. Voluptatum unde aliquam, reiciendis molestiae ea aspernatur ex quod debitis, neque quasi adipisci expedita voluptatibus, aperiam eos veritatis! Similique distinctio impedit est, vel, sed ut qui, quisquam quaerat labore eaque unde rerum porro? Nemo delectus quia esse voluptatum quo ab ad veritatis aspernatur blanditiis molestiae cupiditate animi at, praesentium autem repudiandae pariatur quos dolorem veniam atque nihil corrupti. Consequuntur voluptatum mollitia doloremque commodi vitae atque, eos quae nisi! Quia voluptas temporibus architecto velit nobis autem voluptatibus! Eveniet, magnam, illum explicabo animi impedit consequuntur suscipit ducimus iste dolorem dolores nemo eaque voluptatem quasi ad! Architecto, nobis? Aspernatur suscipit quisquam sint expedita tenetur? Eveniet nisi, repellat quo beatae, neque autem tempore dignissimos nihil, vel laudantium illo accusantium laboriosam magnam cupiditate atque facere eligendi vero minus molestias deleniti! Odio quaerat minima laborum eligendi nam facilis veritatis laboriosam ab, quis illum fugit et exercitationem dolore dicta reprehenderit, suscipit pariatur impedit! Ex doloribus sunt cumque veritatis, id sit? Voluptate quo ab exercitationem soluta a similique cupiditate atque minus error blanditiis, porro dolorem, unde officia consequatur temporibus voluptatum? Exercitationem odio ipsa vel nemo doloremque quam nihil sapiente, vero molestiae eos repudiandae libero maiores saepe minus in facere ipsam doloribus dolor praesentium eum, quae dicta quaerat? Similique provident deserunt, esse ad dicta facere sint. Laboriosam, harum nihil. Quisquam aut, assumenda dicta, quod vitae cum eaque, consectetur ab recusandae repudiandae inventore voluptatum ipsam.</p>
        </div>
        <div className='flex flex-col w-2/3 h-full'>
            <div className='bg-red-100 h-2/3'> <CodeEditor/></div>
            <div className='bg-orange-400 h-1/3'></div>
        </div>
    </div>
  )
}

export default QuestionScreen


