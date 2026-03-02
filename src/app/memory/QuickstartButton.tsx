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
  const [copied, setCopied] = useState<'config' | 'invite' | 'cli' | null>(null);
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

  async function handleCopy(text: string, type: 'config' | 'invite' | 'cli') {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  }

  if (state.status === 'idle') {
    return (
      <button
        onClick={handleGenerate}
        className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-lg transition-colors text-sm"
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
      <div className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500/50 text-black font-semibold rounded-lg text-sm cursor-wait">
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
        <p className="text-red-400 text-sm">{state.message}</p>
        <button
          onClick={handleGenerate}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-lg transition-colors text-sm"
        >
          Try Again
        </button>
      </div>
    );
  }

  // Success
  const configJson = JSON.stringify(state.mcpConfig, null, 2);
  const cliCommand = `claude mcp add memory --transport stdio --env BUILDD_MEMORY_API_KEY=${state.key} -- npx -y @buildd/memory-plugin`;
  const inviteUrl = state.teamId
    ? `https://buildd.dev/memory?join=${state.teamId}`
    : null;

  return (
    <div className="mt-4 space-y-3">
      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
        <p className="text-green-400 text-sm font-medium mb-1">
          API key generated! Save this key — it won&apos;t be shown again.
        </p>
      </div>

      <div>
        <p className="text-gray-400 text-xs font-medium mb-1.5">Claude Code (one-liner)</p>
        <div className="relative">
          <pre className="text-sm text-gray-300 font-mono leading-relaxed bg-[#1a1c24] rounded-lg p-4 pr-16 border border-white/10 overflow-x-auto">
            <code>{cliCommand}</code>
          </pre>
          <button
            onClick={() => handleCopy(cliCommand, 'cli')}
            className="absolute top-2 right-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded text-xs text-gray-300 transition-colors"
          >
            {copied === 'cli' ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      <div>
        <p className="text-gray-400 text-xs font-medium mb-1.5">
          Or paste into{' '}
          <code className="bg-white/10 px-1 py-0.5 rounded text-xs">.mcp.json</code>
        </p>
        <div className="relative">
          <pre className="text-sm text-gray-300 font-mono leading-relaxed bg-[#1a1c24] rounded-lg p-4 border border-white/10 overflow-x-auto">
            <code>{configJson}</code>
          </pre>
          <button
            onClick={() => handleCopy(configJson, 'config')}
            className="absolute top-2 right-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded text-xs text-gray-300 transition-colors"
          >
            {copied === 'config' ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      {inviteUrl && (
        <div className="bg-white/5 border border-white/10 rounded-lg p-3">
          <p className="text-gray-300 text-sm font-medium mb-1">
            Share with your team
          </p>
          <p className="text-gray-500 text-xs mb-2">
            Teammates who open this link get their own key with shared memory.
          </p>
          <div className="flex items-center gap-2">
            <code className="flex-1 text-xs text-amber-400/80 bg-[#1a1c24] rounded px-3 py-2 border border-white/10 truncate">
              {inviteUrl}
            </code>
            <button
              onClick={() => handleCopy(inviteUrl, 'invite')}
              className="shrink-0 px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded text-xs text-gray-300 transition-colors"
            >
              {copied === 'invite' ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
