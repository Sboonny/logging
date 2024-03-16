import { type Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const eventData: Prisma.EventCreateInput[] = [
  {
    event_id: "evt_15B56WILKW5K",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
        connect: {
            id: 1,
        }
    },
    target_id: "user_DOKVD1U3L030",
    target_name: "ali@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2022-01-05T14:31:13.607Z",
    metadata: {
      connect: {
        id: 1,
      },
    },
  },
  {
    event_id: "evt_15B56WILKW5K",
    object: "event",
    actor_id: "user_3VG74289PUA2",
    actor_name: "Ali Salah",
    group: "instatus.com",
    action: {
        connect: {
            id: 2,
        }
    },
    target_id: "user_DOKVD1U3L030",
    target_name: "ali@instatus.com",
    location: "105.40.62.95",
    occurred_at: "2022-01-05T14:31:13.607Z",
    metadata: {
        connect: {
            id: 2
        }
    },
  },
  {
    event_id: "evt_7YX9Z3Q2K1A8",
    object: "event",
    actor_id: "user_9JF5B2X4R3D6",
    actor_name: "Baraa",
    group: "instatus.com",
    action: {
        connect: {
            id: 1
        }
    },
    target_id: "user_5LW2F1U8D9V0",
    target_name: "baraa@instatus.com",
    location: "192.168.1.10",
    occurred_at: "2024-03-15T09:27:59.123Z",
    metadata: {
        connect: {
            id: 1
        }
    },
  },
  {
    event_id: "evt_7YX9Z3Q2K1A8",
    object: "event",
    actor_id: "user_9JF5B2X4R3D6",
    actor_name: "Omar",
    group: "instatus.com",
    action: {
        connect: {
            id: 1
        }
    },
    target_id: "user_5LW2F1U8D9V0",
    target_name: "omar@instatus.com",
    location: "192.168.1.10",
    occurred_at: "2024-03-15T09:27:59.123Z",
    metadata: {
        connect: {
            id: 1
        }
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const currentEvent of eventData) {
    const event = await prisma.event.create({
        data: currentEvent,
    });
    console.log(`Created event with id: ${event.id}`);
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
