# Ride Norfolk — Brand & Style Guide

*The go-to source for all things bicycling in Norfolk, Nebraska.*

Version 1.0 · ridenorfolk.bike

---

## 1. Brand at a glance

Ride Norfolk is the home base for a real, welcoming group of cyclists in Norfolk, Nebraska. The brand is **warm and community-first with a clean athletic edge** — friendly enough that a brand-new rider feels invited to the 5:00 group, sharp enough that the Strava-logging, race-chasing crowd feels represented too.

**Tagline (primary):** **Where Norfolk Rides.**

Supporting lines (use situationally):
- *Two wheels, better together.* — community/social contexts
- *Log the miles. Find your people.* — Strava/athletic contexts
- *All paces. No drop. Always welcome.* — recruiting new riders

**Ethos (Larry's line, kept as a motto):**
> "Don't let life get too busy or too serious that you don't make time for recreation and friends."

---

## 2. Logo & wordmark

**Primary wordmark:** `RIDE NORFOLK` set in Barlow Semi Condensed ExtraBold, tight tracking, all caps. "RIDE" and "NORFOLK" may stack or sit inline.

**Mark:** a simple route line that loops into a bicycle wheel / rising-sun-over-trail. Represents the 14-mile loop, the Cowboy Trail, and a Nebraska sunrise. Provided as an inline SVG on the site (`src/components/Logo.astro`).

**Chipotle Ride sub-mark:** a rounded "badge" lockup used for the signature Tuesday ride, so it reads as an event brand of its own while staying in the family.

**Clear space & don'ts:** keep at least the height of the "R" as padding around the wordmark. Don't stretch, recolor outside the palette, add drop shadows, or place the orange wordmark on a busy photo without a scrim.

---

## 3. Color palette

Warm core, cool athletic accent, grounded in Nebraska heartland tones.

| Role | Name | Hex | Use |
|------|------|-----|-----|
| Primary | **Sunset Orange** | `#E8562D` | Brand, primary buttons, energy, links-on-dark |
| Secondary warm | **Prairie Gold** | `#F4A93C` | Highlights, badges, hover states, stat accents |
| Grounding | **Trail Green** | `#1F5C3D` | Footer, headers, nature/trail sections |
| Athletic accent | **Sky Blue** | `#1F7A9C` | Links, secondary buttons, "Strava/athletic" moments |
| Ink | **Asphalt** | `#1C1E22` | Body text, headings |
| Page | **Cream** | `#FBF6EC` | Default page background |
| Surface | **Sand** | `#EFE7D6` | Cards, section bands, borders |
| Base | **White** | `#FFFFFF` | Cards, contrast surfaces |

**Accessibility:** Sunset Orange and Trail Green both pass WCAG AA for white text at normal button sizes. Body text is always Asphalt on Cream/White. Prairie Gold is a highlight/background color — never use gold text on white for body copy.

**Ratios (rule of thumb):** ~60% cream/white neutral, ~25% ink text, ~10% orange, ~5% green/gold/blue accents.

---

## 4. Typography

Two open-source families (free, Cloudflare-friendly, self-hosted via Fontsource).

- **Display / Headings — Barlow Semi Condensed.** Athletic, jersey-like, friendly. Weights 600 / 700 / 800. Headlines in caps or title case with tight line-height.
- **Body / UI — Inter.** Neutral, highly legible modern sans. Weights 400 / 500 / 600.
- **Stats / numerals** reuse Barlow Semi Condensed for mileage, paces, ride counts, and countdowns.

**Type scale (desktop):** H1 3.25rem/800 · H2 2.25rem/700 · H3 1.5rem/700 · body 1.0625rem/400 · small 0.875rem. Body line-height 1.6, headings 1.1.

---

## 5. Brand voice

**Personality:** the encouraging friend who already ride-checks the weather for you. Plainspoken, warm, Nebraska-practical, safety-minded, quietly proud of the group. A little playful, never corporate.

**Do:**
- Speak to the reader directly — "you," "let's," "come roll with us."
- Lead with welcome. Every ride is no-drop and all-paces unless stated.
- Be safety-first without being preachy — helmets, water, lights, "look out for one another."
- Respect rider autonomy: "Weather-permitting. As always, you decide for yourself."
- Celebrate the group — attendance counts, new-rider welcomes, milestones.
- Keep logistics crisp: time, place, distance, pace, what to bring.

**Don't:**
- Don't gatekeep or imply you must be fast/fit to belong.
- Don't overhype or use marketing fluff ("epic," "unleash," "game-changing").
- Don't bury the practical details under personality.
- Don't make safety scolding; inform and trust.

**Voice examples**

> ✅ "New to riding? Start with the 5:00 group. It rolls 8–10 mph, it's no-drop, and someone always hangs back with you."
> ❌ "Unleash your inner athlete on Norfolk's most EPIC group ride!"

> ✅ "Full moon Friday. Lights charged, tires checked, we roll from Broken Bridge at 7. Nachos in Battle Creek at the turnaround."
> ❌ "Join us for an unforgettable nocturnal cycling experience."

---

## 6. Recurring content blocks

Patterns pulled from the weekly newsletter, useful as reusable site modules:
- **Weather callout** — projected temp + a pre-hydrate reminder.
- **Safety banner** — helmet/water/lights + Nebraska "Phones Down, Speeds Down, Move Over" law.
- **Strava plug** — most Norfolk riders use it; that's how the group stays in touch.
- **Shop card** — Norfork Bike (Jason), 321 W Norfolk Ave Ste 300 · 402-371-3325 · Tue–Fri 12–6, Sat 10–2.
- **Ride recap** — attendance count + welcome to new/returning riders.
- **Liability disclaimer** — "An unstructured group of individual cyclists… each rider is solely responsible for their own health and safety."

---

## 7. Design system notes

- Rounded corners (12–16px on cards, 8px on buttons), soft shadows, generous whitespace.
- Photo treatment: warm, candid group shots; apply a subtle dark scrim under white text.
- Buttons: solid Sunset Orange primary; outline/Sky Blue secondary; Trail Green for trail/full-moon contexts.
- Iconography: simple line icons, 1.5–2px stroke.
- Motion: subtle only (hover lifts, gentle fades). Nothing flashy.
