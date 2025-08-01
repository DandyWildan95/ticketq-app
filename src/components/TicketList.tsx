import { useState } from "react";
import type { Ticket } from "../types/ticket";
import TicketComponent from "./Ticket";
import { mockTickets } from "../data/tickets";

interface TicketListProps {
  tickets: Ticket[];
}

export default function TicketList({ tickets }: TicketListProps) {
  const [filter, setFilter] = useState<"all" | "used" | "available">("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"date" | "name">("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [ticketList, setTicketList] = useState<Ticket[]>(tickets);

  const handleToggleUsed = (id: number) => {
    setTicketList(prevTickets =>
      prevTickets.map(ticket =>
        ticket.id === id ? { ...ticket, isUsed: !ticket.isUsed } : ticket
      )
    );
  };

  const filteredTickets = [...ticketList].filter(ticket => {
    // Filter by status
    const statusMatch = filter === "all" ||
      (filter === "used" && ticket.isUsed) ||
      (filter === "available" && !ticket.isUsed);
    
    // Filter by search term
    const searchMatch = searchTerm === "" ||
      ticket.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return statusMatch && searchMatch;
  }).sort((a, b) => {
    // Sort by selected criteria
    let comparison = 0;
    
    switch (sortBy) {
      case "date":
        comparison = new Date(a.time).getTime() - new Date(b.time).getTime();
        break;
      case "name":
        comparison = a.eventName.localeCompare(b.eventName);
        break;
    }
    
    return sortOrder === "asc" ? comparison : -comparison;
  });

  return (
    <div>
      <div className="filter-bar">
        <input 
          type="text" 
          placeholder="Search tickets by event or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "date" | "name")}
        >
          <option value="date">Date</option>
          <option value="name">Name</option>
        </select>
        <button 
          className="btn"
          onClick={() => setSortOrder("asc")}
        >
          Ascending
        </button>
        <button 
          className="btn secondary"
          onClick={() => setSortOrder("desc")}
        >
          Descending
        </button>
        <button 
          className="btn"
          onClick={() => setFilter("all")}
        >
          All Tickets
        </button>
        <button 
          className="btn secondary"
          onClick={() => setFilter("available")}
        >
          Available
        </button>
        <button 
          className="btn secondary"
          onClick={() => setFilter("used")}
        >
          Used
        </button>
      </div>

      <div className="ticket-list">
        {filteredTickets.length > 0 ? (
          filteredTickets.map(ticket => (
            <div key={ticket.id} className="ticket-card">
              <div className="ticket-title">{ticket.eventName}</div>
              <div className={`ticket-status status ${ticket.isUsed ? 'used' : 'available'}`}>
                {ticket.isUsed ? 'Used' : 'Available'}
              </div>
              <div className="ticket-action">
                <button
                  className={`btn ${ticket.isUsed ? 'secondary' : 'primary'}`}
                  onClick={() => handleToggleUsed(ticket.id)}
                >
                  {ticket.isUsed ? 'Mark as Available' : 'Mark as Used'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="ticket-card">
            <div className="ticket-title">No tickets found</div>
            <div className="ticket-status">Try adjusting your filters</div>
          </div>
        )}
      </div>
    </div>
  );
}

export function TicketListWithData() {
  return <TicketList tickets={mockTickets} />;
}