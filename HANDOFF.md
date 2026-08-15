# Ownership handoff — The Better Man Project

Clean cut: Sarah’s GitHub owns the code. Miguel’s GitHub/Vercel should not stay attached.

**Sarah’s GitHub:** [github.com/thebettermanproject](https://github.com/thebettermanproject)  
**Target Google account:** `SarahAngeloinc@gmail.com`  
**Public site email:** `sarah@thebettermanproject.live`  
**Public domain today:** `thebettermanproject.live` (Squarespace DNS — not Miguel’s Vercel)

---

## Done on Miguel’s side

- [x] Invited `thebettermanproject` as Admin (accepted)
- [x] Started GitHub **ownership transfer** to `thebettermanproject` (Sarah must accept the transfer email)
- [x] Disconnected the GitHub repo from Miguel’s Vercel project `sarah-v1`
- [x] Deleted Miguel’s Vercel project `sarah-v1` (preview URL `sarah-v1.vercel.app` will stop working)
- [x] Miguel will **not** remain a collaborator after the transfer completes

---

## Sarah must do now

1. **Accept the GitHub repository transfer** (email / GitHub notifications).  
   Collaborator access is not the same as owning the repo. Until she accepts, the URL stays `github.com/MFernandez6/sarah-v1`.
2. After accept, the repo is `https://github.com/thebettermanproject/sarah-v1`. Rename if she wants.
3. Create a **Vercel** account with `SarahAngeloinc@gmail.com` (or Workspace email).
4. In Vercel: **Add New → Project → Import** `thebettermanproject/sarah-v1`.
5. Add env var `NEXT_PUBLIC_BOOKING_URL` (same Google Calendar appointment URL as in `.env.example`).
6. When ready to replace Squarespace, point `thebettermanproject.live` DNS at her Vercel project.

---

## Still not on Miguel (leave with Sarah)

| Asset | Notes |
|-------|--------|
| Domain `thebettermanproject.live` | Currently Squarespace. Transfer registrar/DNS when she is ready. |
| Google Workspace + booking calendar | Already hers. |
| Social accounts | Already hers; linked on the site. |
| Stripe | Not live. She should open Stripe under her LLC / Gmail later. |

---

## What Sarah needs to edit the site

```bash
git clone https://github.com/thebettermanproject/sarah-v1.git
cd sarah-v1
npm install
cp .env.example .env.local
# paste the live booking URL into .env.local
npm run dev
```

Open http://localhost:3000

Git history will still show Miguel as the original author. That is normal and is not account access. A brand-new empty repo would be needed only if she wants history erased.

---

## After this is done

- [ ] Sarah accepts the GitHub **transfer**
- [ ] Confirm `github.com/MFernandez6/sarah-v1` redirects to her account and Miguel has no admin
- [ ] Sarah’s Vercel hosts the Next.js app
- [ ] Domain DNS moved off Squarespace when she wants the new site live
- [ ] Stripe later: her LLC + her Stripe account
