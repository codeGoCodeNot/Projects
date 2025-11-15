type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

// Extract<T, U>
type ClickEvent = Extract<Event, { type: "click" }>;
const clickEvent: ClickEvent = {
  type: "click",
  event: {} as MouseEvent,
};

console.log(clickEvent);

// Exclude<UnionType, ExcludedMembers>
type NonKeyDownEvents = Exclude<Event, { type: "keydown" } | { type: "click" }>;
const exceptKeydown: NonKeyDownEvents = {
  type: "focus",
  event: {} as MouseEvent,
};

console.log(exceptKeydown);

// Extract Discriminator from a Discriminated Union
type EventType = Event["type"];
const eventType: EventType = "keydown";
console.log(eventType);
