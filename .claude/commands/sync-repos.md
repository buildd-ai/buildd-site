# Sync Cross-Repo References

Audit and fix cross-repo URL references across the buildd ecosystem. All repos live under `/home/coder/project/`.

## Repos to check

| Repo | Path |
|------|------|
| buildd-site | `/home/coder/project/buildd-site` |
| memory | `/home/coder/project/memory` |
| buildd-docs | `/home/coder/project/buildd-docs` |
| buildd | `/home/coder/project/buildd` |

## URL rules

- **User-facing links** (buttons, nav, marketing copy, "learn more", "get started") → `buildd.dev/memory`
- **API/config URLs** (MCP config `MEMORY_API_URL`, curl examples, fetch calls, env vars) → `memory.buildd.dev`
- **Docs links** → `docs.buildd.dev`
- **Dashboard/app links** → `app.buildd.dev`
- **GitHub links** → `github.com/buildd-ai/<repo>`

## Steps

1. Search all repos for `memory.buildd` references:
   - `grep -r "memory\.buildd" /home/coder/project/buildd-site/src/`
   - `grep -r "memory\.buildd" /home/coder/project/memory/src/`
   - `grep -r "memory\.buildd" /home/coder/project/buildd-docs/content/ /home/coder/project/buildd-docs/lib/`
   - `grep -r "memory\.buildd" /home/coder/project/buildd/apps/web/src/`

2. For each match, classify as **user-facing** or **API URL** and verify it follows the rules above.

3. Also check for stale references:
   - `app.buildd.dev/api/memory/*` — this path doesn't exist, should be `memory.buildd.dev/api/*`
   - `memory.buildd.ai` — old domain, should be `memory.buildd.dev`

4. Report findings. Fix any mismatches. Commit changes per-repo.

5. Update `/home/coder/project/knowledge-base/runbooks/repo-architecture.md` if the URL reference table changed.
