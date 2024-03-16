import { type Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const metadata: Prisma.MetadataCreateInput[] = [
  {
    redirect: "/setup",
    description: "User login succeeded.",
    x_request_id: "req_W1Y13QOHMI5H",
  },
  {
    redirect: "/setup",
    description: "User login succeeded.",
    x_request_id: "req_W1Y13QOHMI5H",
  },
  {
    redirect: "/login",
    description: "User login failed due to incorrect credentials.",
    x_request_id: "req_8ZM7N6Y3K2B1",
  },
  {
    redirect: "/login",
    description: "User login failed due to incorrect credentials.",
    x_request_id: "req_8ZM7N6Y3K2B1",
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const currentMeta of metadata) {
    const meta = await prisma.metadata.create({
      data: currentMeta,
    });
    console.log(`Created metadata with id: ${meta.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
