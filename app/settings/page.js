'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    theme: 'Dark',
    notifications: true,
    language: 'English',
  });

  const handleSaveSettings = () => {
    alert('Settings saved!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[color:var(--text-main)]">Settings</h1>
      </div>

      {/* Settings Form */}
      <div className="bg-[color:var(--bg-card)] p-6 rounded-md shadow space-y-4">
        <div>
          <h2 className="text-lg font-medium text-[color:var(--text-main)]">Theme</h2>
          <select
            value={settings.theme}
            onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
            className="input bg-[color:var(--bg-main)]"
          >
            <option value="Dark">Dark</option>
            <option value="Light">Light</option>
          </select>
        </div>

        <div>
          <h2 className="text-lg font-medium text-[color:var(--text-main)]">Notifications</h2>
          <div className="flex gap-4 items-center">
            <label htmlFor="notifications" className="text-[color:var(--text-muted)]">Enable Notifications</label>
            <input
              type="checkbox"
              id="notifications"
              checked={settings.notifications}
              onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
              className="checkbox"
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium text-[color:var(--text-main)]">Language</h2>
          <select
            value={settings.language}
            onChange={(e) => setSettings({ ...settings, language: e.target.value })}
            className="input bg-[color:var(--bg-main)]"
          >
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>

        {/* Save Changes */}
        <div className="flex gap-4">
          <button
            onClick={handleSaveSettings}
            className="bg-[color:var(--highlight-purple)] text-white px-4 py-2 rounded-md"
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Additional Settings (Optional) */}
      <div className="bg-[color:var(--bg-card)] p-6 rounded-md shadow space-y-4">
        <p className="text-[color:var(--text-muted)]">Coming soon: More settings for user preferences, privacy, and security.</p>
      </div>
    </div>
  );
}
