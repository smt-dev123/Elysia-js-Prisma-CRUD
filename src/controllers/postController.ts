import { prisma } from "../db/client";

export const getAllPost = async()=>{
    return await prisma.post.findMany({
        orderBy:{
            id: "desc"
        }
    })
}

export const getPostId = async(req: any)=>{
    const { id } = req.params
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(id, 10)
        }
    })
    return post
}

export const createPost = async(req: any)=>{
    const { title, content } = req.body
    const post = await prisma.post.create({
        data: {
            title,
            content
        }
    })
    return post
}

export const updatePost = async(req: any)=>{
    const { id } = req.params
    const { title, content } = req.body
    const post = await prisma.post.update({
        where: {
            id: parseInt(id, 10)
        },
        data: {
            title,
            content
        }
    })
    return post
}

export const deletePost = async(req: any)=>{
    const { id } = req.params
    const post = await prisma.post.delete({
        where: {
            id: parseInt(id, 10)
        }
    })
    return post
}