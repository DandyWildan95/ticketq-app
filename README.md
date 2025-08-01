# TicketQ Indonesia - Event Ticket Management App

A frontend-only React application for managing event tickets with a clean, responsive UI/UX.

## Features

- Display a list of event tickets in a card layout
- Mark tickets as "Used" or "Available" with toggle functionality
- Filter tickets by status (All, Used, Available)
- Responsive design that works on desktop and mobile devices
- Dark mode support
- "About Us" section with company information

## Technologies Used

- React (TypeScript)
- Vite
- Tailwind CSS
- React Hooks for state management

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd ticketq-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and visit `http://localhost:5173` (or the port shown in the terminal)

### Building for Production

To create a production build:

```bash
npm run build
```

### Previewing the Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
ticketq-app/
├── src/
│   ├── components/
│   │   ├── Ticket.tsx
│   │   ├── TicketList.tsx
│   │   └── AboutUs.tsx
│   ├── data/
│   │   └── tickets.ts
│   ├── types/
│   │   └── ticket.ts
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── public/
│   └── vite.svg
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── postcss.config.js
```

## Data Model

Tickets are represented with the following structure:

```typescript
interface Ticket {
  id: number;
  eventName: string;
  location: string;
  time: string; // ISO 8601 format
  isUsed: boolean;
}
```

## Features Implementation

### Ticket Display
Tickets are displayed in a responsive card layout with:
- Event name and location
- Date and time in Indonesian format
- Status indicator (Used/Available)
- Toggle button to change status

### Filtering
Users can filter tickets by:
- All tickets (default)
- Used tickets only
- Available tickets only

### Responsive Design
The application is fully responsive and works on:
- Desktop browsers
- Tablet devices
- Mobile phones

## Development

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint to check for code issues

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License.

## Author

TicketQ Indonesia Development Team
