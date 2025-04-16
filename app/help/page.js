'use client';

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[color:var(--text-main)]">Help & Support</h1>
      </div>

      <div className="bg-[color:var(--bg-card)] p-6 rounded-md shadow space-y-4">
        <p className="text-[color:var(--text-muted)]">Need help with something? Contact support or check out our documentation and FAQs.</p>
        <div className="flex gap-4">
          <button className="bg-[color:var(--accent-orange)] text-black px-4 py-2 rounded-md font-medium">
            Contact Support
          </button>
          <button className="bg-[color:var(--highlight-purple)] text-white px-4 py-2 rounded-md">
            View Docs
          </button>
        </div>
      </div>
    </div>
  );
}
