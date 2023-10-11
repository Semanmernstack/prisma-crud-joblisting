import {prisma} from "@/prisma/prismadb"



export default async function create(data: FormData ) {
    const title = data.get('title') as string
    const company  = data.get('company') as string
    const salary = data.get('salary') as string
    const location  = data.get('location') as string
    const value  = data.get('value') as string


    const pro = await prisma.product.create({
        data:  {
            title, company, salary, location, value
        }


    })


}