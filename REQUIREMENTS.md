# NovaBrew Coffee Taste Profile Quiz — Requirements

## Overview
A web-based personality quiz for NovaBrew that matches subscribers to a coffee personality and recommends a signature coffee based on their result. The goal is to make the subscriber experience feel personal, premium, and memorable from day one.

## Personality Types

### Bold Explorer
Adventurous, intense, and drawn to strong points of view. Loves dramatic experiences, richer flavors, and coffees that feel like a story worth chasing. Does not want safe when something unforgettable is on the table.

### Smooth Operator
Polished, balanced, and effortlessly composed. Values refinement and consistency over chaos or intensity. Appreciates quality without shouting about it — the friend everyone likes.

### Cozy Classic
Comfort-first, warm, and ritual-oriented. Wants familiar pleasure, emotional ease, and a coffee experience that feels grounding and dependable. Comfort is not boring — it is a craft.

### Wild Card
Curious, creative, and drawn to the unexpected. Energized by novelty and beauty that does not look like everyone else's. Orders whatever is weirdest on the menu and loves it.

## Coffee Pairings

- **Bold Explorer → Double Down**
  Extra-bold espresso roast, thick crema, no apologies. The coffee equivalent of committing fully — no hedging, maximum presence in the cup.

- **Smooth Operator → Velvet Fog**
  Medium-light, creamy mouthfeel, almond and cocoa notes. Refined, polished, never overreaches. Quietly excellent.

- **Cozy Classic → Sunday Paper**
  Medium roast, hazelnut and vanilla, comfort in a cup. Dependable every morning. The name alone does the work.

- **Wild Card → Off the Map**
  Experimental processing, funky fruit notes, surprises every time. Rotating micro-lot — unpredictability is the whole point.

## Quiz Questions

### Question 1
**How do you usually take your coffee?**
- A) Black, no hesitation → Bold Explorer
- B) A splash of milk, nothing more → Smooth Operator
- C) Creamy and a little sweet → Cozy Classic
- D) Whatever the barista recommends today → Wild Card

### Question 2
**What does your ideal morning look like?**
- A) Up early, moving fast, agenda already set → Bold Explorer
- B) Unhurried, a good routine, everything in its place → Smooth Operator
- C) Slow, quiet, no alarm if possible → Cozy Classic
- D) Depends entirely on the day → Wild Card

### Question 3
**When you try a new coffee, what are you hoping for?**
- A) Something intense that makes an impression → Bold Explorer
- B) Balanced and reliable, something I'd order again → Smooth Operator
- C) Familiar and comforting, like a good habit → Cozy Classic
- D) Something I've never tasted before → Wild Card

### Question 4
**How do you make decisions?**
- A) Quickly and confidently → Bold Explorer
- B) Carefully, with all the information → Smooth Operator
- C) I trust what has worked before → Cozy Classic
- D) I go with whatever feels right in the moment → Wild Card

### Question 5
**Pick the weekend that sounds best.**
- A) A long hike somewhere remote and demanding → Bold Explorer
- B) A well-planned city trip with great restaurants → Smooth Operator
- C) A slow day at home with no real agenda → Cozy Classic
- D) Booking something last-minute and figuring it out → Wild Card

### Question 6
**What do you look for in a great product?**
- A) It's the best at what it does, no compromises → Bold Explorer
- B) Consistent quality, every single time → Smooth Operator
- C) It feels familiar and dependable → Cozy Classic
- D) It surprises me in some way → Wild Card

### Question 7
**How do you feel about trying something completely new?**
- A) I seek it out → Bold Explorer
- B) Only if it comes recommended → Smooth Operator
- C) I prefer to stick with what I know → Cozy Classic
- D) New is always better than familiar → Wild Card

## Quiz Logic
- Each answer maps to one personality type
- Track a running tally across all questions
- At the end, the personality with the highest count is the final result
- Display a single result only
- In the event of a tie, break the tie by favoring the personality selected most recently in the quiz flow

## Visual Style
Minimal layout with a light warm background (cream/linen tones). Clean white card with generous padding and breathing room. Bold serif typography (Georgia) for headlines and answer text. Sans-serif for supporting copy. No labels or letters on answer options — just text and a subtle arrow. Layered shadow for depth. Thin 1px progress line at the top. Premium, editorial feel.

Design notes:
- Light warm background, not dark
- Bold serif headlines, large and tight line-height
- Answer cards are clean white with subtle hover state and arrow
- No A/B/C/D labels on answer options
- No emoji and no icons anywhere in the quiz
- Clean transitions between questions
- Mobile-responsive

## Extra Features
- **Images:** No — text only for the first version
- **Icons/emoji:** No
- **Results page:** Single result, visually satisfying and shareable
- **Experience goal:** Make the result feel personal enough that a subscriber would remember it and want to share it

## Technical Notes
- Build with Next.js and Tailwind CSS
- Single-page quiz flow with smooth transitions between questions
- Mobile-responsive layout
- Results page includes personality name, description, and coffee pairing
- Optimize for clarity, polish, and speed of implementation
