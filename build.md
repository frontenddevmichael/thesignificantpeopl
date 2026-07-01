# Build Plan — The Significant Peoples Church Website

**Stack:** React + Vite + React Router + CSS Modules (no UI framework — custom
components styled against `tokens.css`)
**Design track:** Regal / Editorial — deep navy + gold, serif display type,
crest/seal ornament, photo-light
**Status:** Pre-development — content received, design track locked, photos
pending

---

## 1. Project Structure

```
src/
  assets/
    fonts/
    ornaments/          # SVGs: crest, rule-gold, laurel, corner-frame, scripture-mark
  components/
    layout/
      Header.jsx
      Footer.jsx
      Container.jsx
    ui/
      Button.jsx
      SectionHeading.jsx   # eyebrow + display heading + optional gold rule
      Crest.jsx
      ScriptureBlock.jsx
      StatBadge.jsx        # e.g. "500+ Members" with laurel ornament
      Accordion.jsx        # FAQ
      Card.jsx
    sections/
      Hero.jsx
      WelcomeBanner.jsx
      Timeline.jsx          # church history, 2007 → today
      LeadershipProfile.jsx
      MinistryGrid.jsx
      MinistryFilter.jsx
      EventCard.jsx
      EventCountdown.jsx
      SermonList.jsx        # Telegram-sourced
      TestimonialCarousel.jsx
      GivingPanel.jsx
      PrayerRequestForm.jsx
      ContactForm.jsx
      FaqAccordion.jsx
      ServiceTimesWidget.jsx
  data/
    leadership.js
    ministries.js
    events.js
    faq.js
    testimonials.js
  pages/
    Home.jsx
    About.jsx              # vision/mission/values/history/leadership
    Ministries.jsx
    Sermons.jsx
    Events.jsx
    Give.jsx
    Contact.jsx
    PrivacyPolicy.jsx
    TermsOfUse.jsx
  styles/
    tokens.css
    global.css
    reset.css
  App.jsx
  main.jsx
```

---

## 2. Routing Map

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Hero, welcome, service times, history teaser, leadership teaser, ministries teaser, CTA |
| `/about` | About | Vision, mission, core values, full history timeline, full leadership bios |
| `/ministries` | Ministries | Filterable grid of 6 ministries |
| `/sermons` | Sermons | Telegram-sourced audio list/player |
| `/events` | Events | Eagles of Destiny Congress, Fire in the Word Conference, countdown |
| `/give` | Give | Bank details, donation categories, online giving (if processor available) |
| `/contact` | Contact | Contact form, prayer request form, address, WhatsApp click-to-chat, map |
| `/privacy-policy` | Legal | Standard policy page |
| `/terms-of-use` | Legal | Standard policy page |

Sticky header includes service-times micro-widget always visible (next
service day/time), gold "Give" CTA button.

---

## 3. Data Architecture

All repeating content (leadership, ministries, events, FAQ) lives in
`/src/data/*.js` as plain arrays/objects — not hardcoded into JSX — so the
client can eventually hand this off to a CMS without a rewrite.

Example shape:

```js
// src/data/ministries.js
export const ministries = [
  {
    id: 'youth',
    name: 'Youth Ministry',
    leader: 'Min. Prayer James',
    meetingDay: '1st Sunday of every month',
    meetingTime: '4:00 PM',
    description: '...',
    tags: ['youth'],
  },
  // ...
];
```

---

## 4. Component Notes (Regal/Editorial, Photo-Light)

- **Crest.jsx**: SVG component derived from church logo/seal. Used in header
  (small), hero (large, centered above heading), and as a footer watermark
  at low opacity on navy.
- **SectionHeading.jsx**: Pattern used throughout — small gold letterspaced
  eyebrow label, then large serif heading, then thin gold rule with center
  diamond. This is the primary device that replaces photography for visual
  rhythm.
- **Timeline.jsx**: Vertical (mobile) / alternating horizontal (desktop)
  timeline for 2007 → 2008 → growth → today. Each waypoint: year in gold
  serif numerals, short copy, optional photo slot (empty/ornament-filled
  until real photos arrive).
- **LeadershipProfile.jsx**: Two-column layout. Photo or gold corner-frame
  placeholder on one side, pull-quote + full bio on the other. Pull-quote
  styled large serif italic in gold.
- **StatBadge.jsx**: For "500+ Members," "17 House Fellowships," "5
  Branches," "19 Years" — laurel ornament either side, serif numeral, label
  beneath in small caps. This is a major premium-feel driver and needs zero
  photography.
- **ScriptureBlock.jsx**: Reusable for featured scripture, pull quotes from
  vision/mission text. Gold quotation glyph, serif italic, centered, max
  width constrained for readability.
- **EventCountdown.jsx**: Live countdown to whichever of the two annual
  events is next (Eagles of Destiny — August; Fire in the Word — May).
  Computed client-side from current date.
- **PrayerRequestForm.jsx / ContactForm.jsx**: Controlled React forms,
  client-side validation, submit handler placeholder (to be wired to
  Formspree/EmailJS/backend — confirm with client which they prefer; no
  backend specified yet).
- **SermonList.jsx**: v1 displays an embedded/linked feed from the Telegram
  channel (`@Pst Wisdom Adeyemo Messages`) styled to match site chrome
  (gold-bordered cards, serif titles). Architected so a future CMS-backed
  player can swap in without restructuring the page.

---

## 5. Photo-Light Strategy

Per design direction, the build must look complete with zero photography:

- Hero: crest + serif heading + gold rule on navy ground (no hero image
  required to ship v1).
- Section dividers: gold hairline + ornament instead of image breaks.
- Leadership: corner-frame placeholder pattern that still looks intentional
  if a photo is dropped in later (frame becomes a true photo border).
- Ministries/Events: card backgrounds use navy/cream + gold borders, not
  photo thumbnails, as the default state.
- All photo slots built as named, swappable components
  (`<PhotoSlot id="leadership-wisdom" />`) so dropping in real photography
  later is a one-line change, not a redesign.

---

## 6. Feature Checklist (from intake)

- [ ] Prayer request form
- [ ] Contact form
- [ ] Live streaming page (embed — confirm platform: YouTube Live likely,
      given existing channel)
- [ ] Online giving (confirm processor — Paystack/Flutterwave likely for
      NGN; bank transfer details as fallback, already provided)
- [ ] WhatsApp click-to-chat (two numbers provided)
- [ ] Service-times widget (sticky/header)
- [ ] Event countdown
- [ ] FAQ accordion (content provided, verbatim)
- [ ] Privacy Policy / Terms of Use / Cookie Policy pages (client confirmed
      yes to all three — need source text or to draft from template)
- [ ] Testimonials section (structure ready, content not yet supplied)
- [ ] SEO: title/meta/keywords as provided, to be set per-page via
      React Helmet or equivalent

---

## 7. Open Items / Need From Client

- High-res logo (SVG/AI) — currently placeholder crest only
- Photography (church, events, worship, baptism) — site ships photo-light
  in the interim
- Brand font preference — defaulting to Cormorant Garamond / Source Sans 3
  pending confirmation
- Google Maps embed link/coordinates
- Domain registration (client does not yet own one)
- Giving processor preference (bank transfer only, or add Paystack/
  Flutterwave integration)
- Testimonial content
- Privacy Policy / Terms / Cookie Policy source text

---

## 8. Build Phases

1. **Scaffold**: Vite + React Router + tokens.css + global reset, deploy a
   blank-but-styled shell to verify type/color system reads correctly.
2. **Static pages**: Home, About, Ministries, Events, Contact — content-only,
   no forms wired yet.
3. **Interactive components**: Forms, countdown, ministry filter, FAQ
   accordion, sermon list.
4. **Integrations**: Form backend, giving processor (if confirmed), maps
   embed, live stream embed.
5. **Polish pass**: motion/transitions, responsive QA, performance audit
   (Lighthouse), accessibility pass (contrast on navy/gold, focus states).
6. **Legal pages + SEO metadata** finalize.
7. **Launch**: domain + hosting setup, final QA.
