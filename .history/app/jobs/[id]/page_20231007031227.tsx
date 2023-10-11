import React from 'react'
import { prisma } from "@/prisma/prismadb"

async function page({params}: {params: {id:string}}) {
    const jobs = await prisma.product.findUnique({
        where: {
            id: params.id
        }
    }) 
  return (

    <div>
        <div>
            <h1>{jobs?.title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus harum ipsam reiciendis sint, consequuntur omnis accusantium tempore voluptates cum quos alias magni id enim itaque. Corporis minus optio doloremque deleniti.</p>
        </div>
       
    </div>
  )
}

export default page