'use client';

import { useState, useEffect } from 'react';

type QuickstartState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; key: string; mcpConfig: object; teamId?: string }
  | { status: 'error'; message: string };

const API_BASE = 'https://memory.buildd.dev';

export function QuickstartButton() {
  const [state, setState] = useState<QuickstartState>({ status: 'idle' });
  const [copied, setCopied] = useState<'config' | 'http' | 'invite' | 'cli' | null>(null);
  const [showAlt, setShowAlt] = useState(false);
  const [joinTeam, setJoinTeam] = useState<string | null>(null);

  // Check for ?join=<teamId> in URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const team = params.get('join');
    if (team) {
      setJoinTeam(team);
    }
  }, []);

  async function handleGenerate() {
    setState({ status: 'loading' });
    try {
      let res: Response;

      if (joinTeam) {
        res = await fetch(`${API_BASE}/api/quickstart/join`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ team: joinTeam }),
        });
      } else {
        res = await fetch(`${API_BASE}/api/quickstart`, { method: 'POST' });
      }

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setState({
          status: 'error',
          message: body.error || `Request failed (${res.status})`,
        });
        return;
      }
      const data = await res.json();
      setState({
        status: 'success',
        key: data.key,
        mcpConfig: data.mcpConfig,
        teamId: data.teamId,
      });
    } catch {
      setState({ status: 'error', message: 'Network error. Please try again.' });
    }
  }

  async function handleCopy(text: string, type: 'config' | 'http' | 'invite' | 'cli') {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  }

  if (state.status === 'idle') {
    return (
      <button
        onClick={handleGenerate}
        className="btn-copper mt-4 inline-flex items-center gap-2 px-5 py-2.5 text-white font-medium rounded-md transition-colors text-sm"
      >
        {joinTeam ? 'Join Team & Get API Key' : 'Generate API Key'}
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </button>
    );
  }

  if (state.status === 'loading') {
    return (
      <div className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 text-sm cursor-wait" style={{ backgroundColor: 'rgba(200, 149, 106, 0.5)', color: '#ede8e2', borderRadius: '6px' }}>
        <svg
          className="w-4 h-4 animate-spin"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
        Generating...
      </div>
    );
  }

  if (state.status === 'error') {
    return (
      <div className="mt-4 space-y-2">
        <p className="text-sm" style={{ color: '#d4736a' }}>{state.message}</p>
        <button
          onClick={handleGenerate}
          className="btn-copper inline-flex items-center gap-2 px-5 py-2.5 text-white font-medium rounded-md transition-colors text-sm"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Success
  const configJson = JSON.stringify(state.mcpConfig, null, 2);
  const httpConfigJson = JSON.stringify({
    mcpServers: {
      memory: {
        type: "url",
        url: "https://memory.buildd.dev/api/mcp",
        headers: { "x-api-key": state.key },
      },
    },
  }, null, 2);
  const cliCommand = `claude mcp add memory --transport stdio --env BUILDD_MEMORY_API_KEY=${state.key} -- npx -y @buildd/memory-plugin`;
  const inviteUrl = state.teamId
    ? `https://buildd.dev/memory?join=${state.teamId}`
    : null;

  return (
    <div className="mt-4 space-y-3">
      <div className="rounded-lg p-3" style={{ backgroundColor: 'rgba(94, 196, 149, 0.1)', border: '1px solid rgba(94, 196, 149, 0.3)' }}>
        <p className="text-sm font-medium mb-1" style={{ color: '#5ec495' }}>
          API key generated! Save this key — it won&apos;t be shown again.
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-xs font-medium" style={{ color: '#a89f96' }}>
            Paste into{' '}
            <code className="px-1 py-0.5 rounded text-xs" style={{ backgroundColor: 'rgba(255, 245, 230, 0.08)' }}>.mcp.json</code>
          </p>
          <button
            onClick={() => handleCopy(httpConfigJson, 'http')}
            className="px-3 py-1 rounded text-xs transition-colors"
            style={{ backgroundColor: 'rgba(255, 245, 230, 0.08)', border: '1px solid rgba(255, 245, 230, 0.12)', color: '#a89f96' }}
          >
            {copied === 'http' ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div>
          <pre className="text-sm font-mono leading-relaxed rounded-lg p-4 overflow-x-auto" style={{ backgroundColor: '#211f1c', border: '1px solid rgba(255, 245, 230, 0.07)', color: '#a89f96' }}>
            <code>{httpConfigJson}</code>
          </pre>
        </div>
      </div>

      <div>
        <button
          onClick={() => setShowAlt(!showAlt)}
          className="text-xs transition-colors flex items-center gap-1"
          style={{ color: '#5e5850' }}
        >
          <svg
            className={`w-3 h-3 transition-transform ${showAlt ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Other setup methods
        </button>

        {showAlt && (
          <div className="mt-2 space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-xs font-medium" style={{ color: '#a89f96' }}>Claude Code (one-liner)</p>
                <button
                  onClick={() => handleCopy(cliCommand, 'cli')}
                  className="px-3 py-1 rounded text-xs transition-colors"
                  style={{ backgroundColor: 'rgba(255, 245, 230, 0.08)', border: '1px solid rgba(255, 245, 230, 0.12)', color: '#a89f96' }}
                >
                  {copied === 'cli' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div>
                <pre className="text-sm font-mono leading-relaxed rounded-lg p-4 overflow-x-auto" style={{ backgroundColor: '#211f1c', border: '1px solid rgba(255, 245, 230, 0.07)', color: '#a89f96' }}>
                  <code>{cliCommand}</code>
                </pre>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-xs font-medium" style={{ color: '#a89f96' }}>
                  <code className="px-1 py-0.5 rounded text-xs" style={{ backgroundColor: 'rgba(255, 245, 230, 0.08)' }}>.mcp.json</code>
                  {' '}(stdio)
                </p>
                <button
                  onClick={() => handleCopy(configJson, 'config')}
                  className="px-3 py-1 rounded text-xs transition-colors"
                  style={{ backgroundColor: 'rgba(255, 245, 230, 0.08)', border: '1px solid rgba(255, 245, 230, 0.12)', color: '#a89f96' }}
                >
                  {copied === 'config' ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <div>
                <pre className="text-sm font-mono leading-relaxed rounded-lg p-4 overflow-x-auto" style={{ backgroundColor: '#211f1c', border: '1px solid rgba(255, 245, 230, 0.07)', color: '#a89f96' }}>
                  <code>{configJson}</code>
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>

      {inviteUrl && (
        <div className="rounded-lg p-3" style={{ backgroundColor: 'rgba(255, 245, 230, 0.04)', border: '1px solid rgba(255, 245, 230, 0.07)' }}>
          <p className="text-sm font-medium mb-1" style={{ color: '#ede8e2' }}>
            Share with your team
          </p>
          <p className="text-xs mb-2" style={{ color: '#5e5850' }}>
            Teammates who open this link get their own key with shared memory.
          </p>
          <div className="flex items-center gap-2">
            <code className="flex-1 text-xs rounded px-3 py-2 truncate" style={{ color: '#c8956a', backgroundColor: '#211f1c', border: '1px solid rgba(255, 245, 230, 0.07)' }}>
              {inviteUrl}
            </code>
            <button
              onClick={() => handleCopy(inviteUrl, 'invite')}
              className="shrink-0 px-3 py-2 rounded text-xs transition-colors"
              style={{ backgroundColor: 'rgba(255, 245, 230, 0.08)', border: '1px solid rgba(255, 245, 230, 0.12)', color: '#a89f96' }}
            >
              {copied === 'invite' ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
