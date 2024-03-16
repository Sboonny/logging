import { type Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const actionData: Prisma.EventActionCreateInput[] = [
  {
    action_id: "evt_action_PGTD81NCAOQ2",
    object: "event_action",
    name: "user.login_succeeded",
  },
  {
    action_id: "evt_action_K9V7E4X2P1Q4",
    object: "event_action",
    name: "user.login_failed",
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const currentAction of actionData) {
    const action = await prisma.eventAction.create({
        data: currentAction,
    });
    console.log(`Created action with id: ${action.id}`);
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

