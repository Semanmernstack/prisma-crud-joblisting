"use server"
import { revalidatePath } from "next/cache"
import {prisma} from "@/prisma/prismadb"

export default async function deleteJob(data: FormData) {
    const jobId = data.get('jobId') as string
    await prisma?.product.delete({
        where: {
            id:jobId
        }
    })
    revalidatePath("/jobs")
}