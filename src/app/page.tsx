
import { type Event } from "~/interface";
import { columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Event[]> {
  return [
    {
      id: "evt_15B56WILKW5K",
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
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "evt_15B56WILKW5K",
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
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "evt_15B56WILKW5K",
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
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "evt_15B56WILKW5K",
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
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
}

export default async function HomePage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
