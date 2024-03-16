
type EventAction = {
    id: string;
    object: string;
    name: string;
  };

type Metadata = {
    redirect: string;
    description: string;
    x_request_id: string;
  };
  
  // This type is used to define the shape of our data.
  // We can use a Zod schema here.
  export type Event = {
    id: string;
    object: string;
    actor_id: string;
    actor_name: string;
    group: string;
    action_id: string;
    target_id: string;
    target_name: string;
    location: string;
    occurred_at: string;
    metadata_id: string;
    createdAt: Date;
    updatedAt: Date;
  }
  

  export type EventWithRelations = Event & {
    action: EventAction;
    metadata: Metadata;
  };