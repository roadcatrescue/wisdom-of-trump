# Trump Oracle — Build Notes

## Status
- Core generator working locally (trump.js, index.html, style.css)
- ~60 templates seeded from 1.4M chars of real transcripts
- Red/gold/navy gaudy theme, clearly labeled satire
- NOT yet deployed

## Tomorrow's Build Order
1. Pick a domain name (see options below)
2. Add Ko-fi $1 donate button (single embed, no setup)
3. Add "Share on X/Twitter" button with pre-filled text
4. Create GitHub repo and push
5. Wire up Cloudflare Pages (same process as roadcatrescue.org)
6. Done

## Domain Ideas (check availability)
- stablegenius.lol ← favorite, self-referential
- manypeople-aresaying.com ← very on-brand
- bigbeautifulwords.com ← references "big beautiful wall"
- tremendouswisdom.com ← clean
- thetrumporacle.com ← direct
- trumporacle.com ← check if taken

## Monetization Plan
- **Phase 1:** Ko-fi button — "$1 to keep the tremendous wisdom flowing"
  - Embed: one script tag, zero backend
  - URL: ko-fi.com (free account)
- **Phase 2 (if traffic grows):** Google AdSense
- **Viral mechanic is the real play:** Share button → Twitter/X → traffic

## Share Button Copy (pre-filled tweet)
> "{quote}" — Trump Oracle 🦅 [link] #MAGA #TrumpOracle

## Content Expansion Ideas
- "Sir story" generator (dedicated tab or section)
- "Trump's Take on [topic]" — user picks a topic, gets 3 quotes
- "Tweet this" with fake @realDonaldTrump styling
- Daily "Quote of the Day" (could post to social automatically)
- "Tremendous-ometer" — slider that adjusts how unhinged the output is

## Technical Notes
- Transcript corpus: alexmill/trump_transcripts (GitHub, 74 docs, 292K words)
- Source: UC Santa Barbara American Presidency Project (public record)
- Generator is purely template-based (no AI, no API, pure JS)
- Fully static site — free to host forever on Cloudflare Pages
- Ko-fi embed is client-side only, no backend needed

## Ko-fi Setup (do tomorrow)
1. Go to ko-fi.com, create account
2. Set up "$1 donation" page with Trump Oracle branding
3. Copy embed snippet → paste into index.html above footer
4. Done

## Deployment (do tomorrow)
- GitHub: create repo `trump-oracle` under Tristan's account
- Cloudflare Pages: connect repo, auto-deploy on push
- Domain: register via Cloudflare Registrar (same account as roadcatrescue)
