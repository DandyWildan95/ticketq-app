# TicketQ Indonesia
## Overview
TicketQ Indonesia is a modern web application for event ticket management in Indonesia. The application allows users to manage their event tickets, track ticket status, and access information about various events across the archipelago. TicketQ specializes in providing seamless access to tickets for concerts, festivals, exhibitions, and cultural events throughout Indonesia.

## Features
- Ticket Management : View, filter, and manage your event tickets
- Status Tracking : Mark tickets as used or available
- Search Functionality : Search tickets by event name or location
- Sorting Options : Sort tickets by date or name in ascending or descending order
- Responsive Design : User-friendly interface optimized for both desktop and mobile devices
- Digital Ticket Storage : Secure storage and management of your tickets
- Real-time Updates : Stay informed about event changes and updates
- QR Code Support : Integrated QR code functionality for ticket validation
## Technology Stack
- Frontend : React 19 with TypeScript
- Styling : Tailwind CSS
- Build Tool : Vite
- QR Code Generation : qrcode.react
## Installation
### Prerequisites
- Node.js (latest LTS version recommended)
- npm or yarn
### Setup
1. 1.
   Clone the repository:
   
   ```
   git clone https://github.com/
   DandyWildan95/ticketq-app.git
   cd ticketq-app
   ```
2. 2.
   Install dependencies:
   
   ```
   npm install
   ```
3. 3.
   Start the development server:
   
   ```
   npm run dev
   ```
4. 4.
   Build for production:
   
   ```
   npm run build
   ```
## Usage
### Running the Application
- Start the development server with npm run dev
- Access the application at http://localhost:5173 (or the port shown in your terminal)
### Available Scripts
- npm run dev - Start the development server
- npm run build - Build the application for production
- npm run lint - Run ESLint to check code quality
- npm run preview - Preview the production build locally
## Project Structure
```
├── public/              # Static 
assets
├── src/                 # Source 
code
│   ├── assets/          # Images 
and other assets
│   ├── components/      # React 
components
│   │   ├── AboutUs.tsx  # About 
page component
│   │   ├── Ticket.tsx   # 
Individual ticket component
│   │   └── TicketList.tsx # Ticket 
list component
│   ├── data/            # Mock data
│   │   └── tickets.ts   # Sample 
ticket data
│   ├── types/           # 
TypeScript type definitions
│   │   └── ticket.ts    # Ticket 
type definition
│   ├── App.css          # Main 
application styles
│   ├── App.tsx          # Main 
application component
│   ├── index.css        # Global 
styles
│   └── main.tsx         # 
Application entry point
├── .gitignore           # Git 
ignore file
├── index.html           # HTML 
entry point
├── package.json         # Project 
dependencies and scripts
├── tsconfig.json        # 
TypeScript configuration
└── vite.config.ts       # Vite 
configuration
```
## Design Guidelines
### Color Palette
- Background : #0D0D0D (Dark background)
- Primary Color : #A259FF (Purple accent)
- Secondary Text : #CCCCCC (Light gray for secondary text)
- Main Text : #FFFFFF (White for primary text)
- CTA Button : #E651FF (Bright purple for call-to-action)
- CTA Button Alt : #9F52FF (Alternative purple for buttons)
- Card Background : #1A1A1A (Slightly lighter than main background)
- Success : #4CAF50 (Green for available tickets)
- Danger : #F44336 (Red for used tickets)
### Typography
- Primary Font: 'Inter'
- Secondary Font: 'Poppins'
- Font weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
## Repository
The source code for TicketQ Indonesia is available on GitHub: https://github.com/DandyWildan95/ticketq-app.git

## Contact
For questions or assistance, contact our support team:

- Email : support@ticketq.co.id
- Phone : +62 21 1234 5678
- Address : Jl. Sudirman No. 52, Jakarta Selatan 12190
