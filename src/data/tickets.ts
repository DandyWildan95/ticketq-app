import type { Ticket } from "../types/ticket";

export const mockTickets: Ticket[] = [
  {
    id: 1,
    eventName: "DWP 2025",
    location: "Jakarta",
    time: "2025-08-31T20:00:00Z",
    isUsed: false
  },
  {
    id: 2,
    eventName: "Java Jazz Festival",
    location: "Jakarta",
    time: "2025-03-15T18:00:00Z",
    isUsed: true
  },
  {
    id: 3,
    eventName: "Bali Arts Festival",
    location: "Bali",
    time: "2025-06-20T19:00:00Z",
    isUsed: false
  },
  {
    id: 4,
    eventName: "Surabaya Food Expo",
    location: "Surabaya",
    time: "2025-09-10T10:00:00Z",
    isUsed: false
  },
  {
    id: 5,
    eventName: "Yogyakarta Cultural Night",
    location: "Yogyakarta",
    time: "2025-07-25T17:00:00Z",
    isUsed: true
  }
];