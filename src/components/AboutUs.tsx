export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">About TicketQ Indonesia</h1>
        
        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5">
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
              TicketQ Indonesia is your premier destination for event ticket management in Indonesia.
              We specialize in providing seamless access to tickets for concerts, festivals, exhibitions,
              and cultural events across the archipelago.
            </p>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-5">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our mission is to connect Indonesian event-goers with their favorite experiences, making
              ticket purchasing and management effortless and secure. We aim to support local artists
              and event organizers by providing them with a robust platform to reach their audiences.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
              <li>Easy ticket booking for events across Indonesia</li>
              <li>Secure digital ticket storage and management</li>
              <li>Real-time event updates and notifications</li>
              <li>Support for multiple payment methods</li>
              <li>User-friendly interface with mobile optimization</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-5">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Have questions or need assistance? Our customer support team is here to help:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
              <li>Email: support@ticketq.co.id</li>
              <li>Phone: +62 21 1234 5678</li>
              <li>Address: Jl. Sudirman No. 52, Jakarta Selatan 12190</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}