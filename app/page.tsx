export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 flex flex-col items-center justify-center">
      <div className="max-w-2xl text-center">
        <div className="flex justify-center mb-4">
          <img src="/logo.svg" alt="Ad Nexus Logo" />
        </div>
        <h1 className="text-4xl font-bold mb-4">AdNexus – Unified Ad Campaign Management Tool</h1>
        <p className="text-lg mb-6">
          AdNexus is a Final Year Project developed at National University of Computer and Emerging Sciences(NUCES-FAST), Karachi, designed to help users manage and optimize their advertising campaigns across multiple platforms from a single dashboard.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">🌟 Key Features</h2>
        <ul className="list-disc list-inside text-left mb-6">
          <li>Centralized campaign management (Google Ads, Meta Ads)</li>
          <li>Real-time performance tracking</li>
          <li>Smart suggestions for budget allocation</li>
          <li>Clean and intuitive UI</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">🎓 About This Project</h2>
        <p className="mb-6">
          This project is currently under academic development and is not intended for commercial use. It serves as a prototype for learning and demonstration purposes only.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">📧 Contact</h2>
        <p>
          For any inquiries, please contact: <br />
          <a href="mailto:ad.nexus.official@gmail.com" className="text-blue-600 underline">ad.nexus.official@gmail.com</a> <br />
          or visit <a href="https://github.com/Ad-Nexus" className="text-blue-600 underline">GitHub</a>
        </p>
      </div>
    </main>
  );
}
