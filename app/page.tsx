export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-50">
        <h1 className="text-4xl font-bold mb-4">AdNexus — Your Unified Ads Management Platform</h1>
        <p className="text-lg mb-6">Monitor, manage, and optimize Google & Facebook Ads from a single dashboard.</p>
        
      </section>

      {/* About Section */}
      <section className="px-8 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">What is AdNexus?</h2>
        <p className="mb-4">
          AdNexus is a centralized ad operations platform built for internal marketing teams. It connects with multiple Google Ads accounts and Facebook Ad accounts to streamline campaign creation, budget monitoring, and performance reporting — all in one place.
        </p>
        <p>
          <strong>Our Goal:</strong> To simplify ad management across platforms and help teams make data-driven decisions faster.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-8">
        <h2 className="text-3xl font-semibold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Feature title="Multi-Platform Integration" description="Manage multiple Google Ads and Facebook Ads accounts with unified access and reporting." />
          <Feature title="Budget Monitoring" description="Get real-time visibility into your ad spend, daily budgets, and campaign performance." />
          <Feature title="Campaign Management" description="Create and manage ad campaigns directly from AdNexus using Google Ads API v19 and Facebook API v21." />
          <Feature title="PDF Reporting" description="Generate on-demand reports for internal stakeholders with campaign summaries and budget analytics." />
          <Feature title="Recent Activity Logs" description="Track every campaign change and activity performed by your team in a structured log." />
          <Feature title="Secure & Token-Based Access" description="OAuth 2.0 authentication and token management for secure platform access." />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-8 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li><strong>Connect Your Accounts</strong> — Add your Google Ads Manager account and Facebook Ad Account using secure OAuth2 flow.</li>
          <li><strong>View & Monitor Campaigns</strong> — Instantly fetch campaign budgets and performance metrics with one click.</li>
          <li><strong>Create Campaigns</strong> — Launch campaigns from within AdNexus using a simplified form — no need to switch platforms.</li>
          <li><strong>Generate Reports</strong> — Get downloadable PDF reports summarizing KPIs and budget usage.</li>
        </ol>
      </section>

      {/* API Usage Section */}
      <section className="bg-blue-50 px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">API Usage</h2>
          <p className="mb-4"><strong>Google Ads API (v19)</strong> — Used to retrieve customers, fetch campaign data, create campaigns and budgets, and sync campaign statuses in real time.</p>
          <p><strong>Facebook Marketing API (v21)</strong> — Retrieves ad set data, budgets, campaign IDs, and statuses for budget monitoring and reporting.</p>
        </div>
      </section>

      {/* Placeholder for Mockups */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Product Preview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* You can replace these with <Image src="/mockup1.png" ... /> */}
          <div className="h-64 bg-gray-200 rounded-xl shadow-inner flex items-center justify-center"><img src="/Screenshot 2025-05-08 233103.png" alt="Mockup1" /></div>
          <div className="h-64 bg-gray-200 rounded-xl shadow-inner flex items-center justify-center"><img src="/Screenshot 2025-05-08 233233.png" alt="Mockup2" /></div>
          <div className="h-64 bg-gray-200 rounded-xl shadow-inner flex items-center justify-center"><img src="/Screenshot 2025-05-08 233334.png" alt="Mockup3" /></div>
          <div className="h-64 bg-gray-200 rounded-xl shadow-inner flex items-center justify-center"><img src="/Screenshot 2025-05-08 233415.png" alt="Mockup4" /></div>
          <div className="h-64 bg-gray-200 rounded-xl shadow-inner flex items-center justify-center"><img src="/Screenshot 2025-05-08 233506.png" alt="Mockup5" /></div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-2">📧 Email: ad.nexus.official@gmail.com</p>
        <p className="mb-2">🌐 Website: https://adnexus-landing.vercel.app</p>
        <p>📍 Location: Karachi, Pakistan</p>
      </section>
    </main>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
