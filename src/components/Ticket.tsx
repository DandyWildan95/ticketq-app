import type { Ticket } from "../types/ticket";

interface TicketProps {
  ticket: Ticket;
  onToggleUsed: (id: number) => void;
onClick: () => void;
}

export default function TicketComponent({ ticket, onToggleUsed, onClick }: TicketProps) {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 mb-4 border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{ticket.eventName}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-1">
            <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {ticket.location}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {new Date(ticket.time).toLocaleDateString('id-ID', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
        <div className="flex flex-col items-end ml-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium mb-3 ${
            ticket.isUsed
              ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
              : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
          }`}>
            {ticket.isUsed ? 'Used' : 'Available'}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleUsed(ticket.id);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              ticket.isUsed
                ? 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500'
                : 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800'
            }`}
          >
            {ticket.isUsed ? 'Mark as Available' : 'Mark as Used'}
          </button>
        </div>
      </div>
    </div>
  );
}