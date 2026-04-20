# Orchestration cheat sheet (printable)

One page for tables. **Session frame:** intelligence needs **interfaces** (web, MCP, API, SDK)—orchestration is how you keep all of them honest to the same policies.

---

## Mental model

| Layer | What it is | What good looks like |
| ----- | ------------ | -------------------- |
| **Model** | Text / tool / vision engine | Right size per step; cached context where possible |
| **Orchestration** | Routing, state, tools, retries, eval | Deterministic boundaries around stochastic steps |
| **Data plane** | Sources of truth + MCP bridges | You own connections, permissions, and audit logs |
| **UX** | Where humans touch the system | Low friction for the role—not always chat |

---

## Off-the-shelf (speed)

| Tool | Best for | Pitfalls | When to avoid “default chat” |
| ---- | -------- | -------- | ---------------------------- |
| **Glean** (example enterprise search) | Finding docs fast across silos | Vendor ranking black box; permission drift | Field roles that will not type queries |
| **Zapier Central** (example) | Quick automations across SaaS | Throughput / governance for regulated data | Anything needing deep redlines or CAD truth |

---

## Middle ground (managed crews)

| Tool | Best for | Pitfalls | UX note |
| ---- | -------- | -------- | ------- |
| **CrewAI** | Role-based agent graphs in Python | Debugging multi-agent loops | Add a **thin UI** for inputs/outputs |
| **Pydantic AI** | Typed tools + structured outputs | You still design evaluation | Great when JSON contracts matter |

---

## Custom front end (power move)

| Tool | Best for | Pitfalls | UX note |
| ---- | -------- | -------- | ------- |
| **Vercel AI SDK** (example) | Streaming, tool UI, composable chat surfaces | You own auth, rate limits, logging | Build **task-shaped** screens: upload, compare, approve |

---

## Prompts for the room

1. Where is the **source of truth** for this workflow—not “the model said so”?
2. What is the **smallest model** that can own step A before you pay for step B?
3. If IT asks “where does data go?”, what is your **one-sentence** answer?
