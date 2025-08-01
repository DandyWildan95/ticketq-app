export interface Ticket {
  id: number;
  eventName: string;
  location: string;
  time: string; // ISO 8601 format
  isUsed: boolean;
}