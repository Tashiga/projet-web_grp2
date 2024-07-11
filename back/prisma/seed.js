// import { PrismaClient } from '@prisma/client';

// // initialize Prisma Client
// const prisma = new PrismaClient();

// async function main(){
//     // create two dummy users
//   const user1 = await prisma.user.upsert({
//     where: { username: 'Naruto' },
//     update: {},
//     create: {
//       username: 'Naruto',
//       password: 'Uzumaki'
//     },
//   });

//   const user2 = await prisma.user.upsert({
//     where: { username: 'Sasuke' },
//     update: {},
//     create: {
//       username: 'Sasuke',
//       password: 'Uchiwa'
//     },
//   });

//   console.log({ user1, user2 });

//   // execute the main function
// main()
// .catch((e) => {
//   console.error(e);
//   process.exit(1);
// })
// .finally(async () => {
//   // close Prisma Client at the end
//   await prisma.$disconnect();
// });

// }

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        username: 'Minato',
        password: 'Namikaze'
      },
      {
        username: 'Itachi',
        password: 'Uchiwa'
      },
    ],
  });
  // console.log({ data });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    console.log("ok all user where added!");
    await prisma.$disconnect();
  });