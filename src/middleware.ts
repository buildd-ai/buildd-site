import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const REDIRECTS: Record<string, string> = {
  '/install.sh': 'https://raw.githubusercontent.com/buildd-ai/buildd/main/apps/runner/install.sh',
  '/install.ps1': 'https://raw.githubusercontent.com/buildd-ai/buildd/main/apps/runner/install.ps1',
};

export function middleware(request: NextRequest) {
  const destination = REDIRECTS[request.nextUrl.pathname];
  if (destination) {
    return NextResponse.redirect(destination, 302);
  }
}

export const config = {
  matcher: ['/install.sh', '/install.ps1'],
};
