import React from 'react'
import { prisma } from "@/prisma/prismadb"
import Link from 'next/link'

async function page({params}: {params: {id:string}}) {
    const jobs = await prisma.product.findUnique({
        where: {
            id: params.id
        }
    }) 
  return (

    <div className="flex bg-slate-300 shadow-transparent flex-col mx-auto max-w-4xl p-2">
        <div className='flex flex-col '>
            <h1 className='flex items-center justify-center underline decoration-slate-300 p-1'>{jobs?.title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus harum ipsam reiciendis sint, consequuntur omnis accusantium tempore voluptates cum quos alias magni id enim itaque. Corporis minus optio doloremque deleniti.</p>
        </div>
        <div className='flex flex-col gap-2'>
            <h1>{jobs?.company}</h1>
            <h1><span className='mr-1'>$</span>{jobs?.salary}</h1>
        </div>
        <div className='flex items-center justify-around'>
            <Link href={'/jobs'}>Back</Link>
            <Link href='www.google.com ' target='_blank'>Apply</Link>
        </div>
       
    </div>
  )
}

export default page