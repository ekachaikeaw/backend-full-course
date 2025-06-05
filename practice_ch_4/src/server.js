import { PrismaClient} from "@prisma/client"

const prisma= new PrismaClient()

async function serve() {
    const user = await prisma.user.create({
        data:{
            username: "John",
            password: "123123123",
            email: "test@mail.com"
        }
    })

    const count = await prisma.user.count({
        where: {
            id: {
                equals: 1
            }
        }
    })

    console.log(user);
    console.log(count);
    
    
}

serve()