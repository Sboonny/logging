import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const eventData = [
    {
      object: "event",
      actor_id: "user_3VG74289PUA2",
      actor_name: "Ali Salah",
      group: "instatus.com",
      action: {
        id: "evt_action_PGTD81NCAOQ2",
        object: "event_action",
        name: "user.login_succeeded",
      },
      target_id: "user_DOKVD1U3L030",
      target_name: "ali@instatus.com",
      location: "105.40.62.95",
      occurred_at: "2022-01-05T14:31:13.607Z",
      metadata: {
        redirect: "/setup",
        description: "User login succeeded.",
        x_request_id: "req_W1Y13QOHMI5H",
      },
    },
    {
      object: "event",
      actor_id: "user_3VG74289PUA2",
      actor_name: "Ali Salah",
      group: "instatus.com",
      action: {
        id: "evt_action_PGTD81NCAOQ2",
        object: "event_action",
        name: "user.searched_activity_log_events",
      },
      target_id: "user_DOKVD1U3L030",
      target_name: "ali@instatus.com",
      location: "105.40.62.95",
      occurred_at: "2022-01-05T14:31:13.607Z",
      metadata: {
        redirect: "/setup",
        description: "User login succeeded.",
        x_request_id: "req_W1Y13QOHMI5H",
      },
    },
    {
      object: "event",
      actor_id: "user_3VG74289PUA2",
      actor_name: "Omar",
      group: "instatus.com",
      action: {
        id: "evt_action_PGTD81NCAOQ2",
        object: "event_action",
        name: "incident.create_succeeded",
      },
      target_id: "user_DOKVD1U3L030",
      target_name: "omar@instatus.com",
      location: "105.40.62.95",
      occurred_at: "2022-01-05T14:31:13.607Z",
      metadata: {
        redirect: "/setup",
        description: "User login succeeded.",
        x_request_id: "req_W1Y13QOHMI5H",
      },
    },
    {
      object: "event",
      actor_id: "user_3VG74289PUA2",
      actor_name: "Barra",
      group: "instatus.com",
      action: {
        id: "evt_action_PGTD81NCAOQ2",
        object: "event_action",
        name: "user.invited_teammate",
      },
      target_id: "user_DOKVD1U3L030",
      target_name: "barra@instatus.com",
      location: "105.40.62.95",
      occurred_at: "2022-01-05T14:31:13.607Z",
      metadata: {
        redirect: "/setup",
        description: "User login succeeded.",
        x_request_id: "req_W1Y13QOHMI5H",
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