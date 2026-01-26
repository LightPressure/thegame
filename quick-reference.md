# The GAME - Quick Reference

## Game Structure

```
┌─────────────────────────────────────────────────────────────┐
│                         GAME SETUP                          │
├─────────────────────────────────────────────────────────────┤
│  Main Deck (Shuffled)     Equipment Deck     Pleasure Deck  │
│  [Position, Intensity,     [Player 1 only]   [Player 2 only]│
│   Time, Special cards]                                      │
│                                                             │
│  Player 1 Hand: [up to 5 cards]                             │
│  Player 2 Hand: [up to 5 cards]                             │
│                                                             │
│  Queue (Public): [ Empty at start ]                         │
│                                                             │
│  Player 1 Points: 0                                         │
│  Player 2 Pleasure Cards: 0                                 │
└─────────────────────────────────────────────────────────────┘
```

## Turn Flow

```
┌──────────────────────────┐
│   PLAYER 1 TURN          │
├──────────────────────────┤
│ 1. Have set?             │
│    YES: Play set         │
│         → Queue +1       │
│         → Earn 1 point   │
│         → Spend point?   │
│            YES: Draw     │
│                Equipment │
│    NO: Can't play?       │
│        - If <5 cards:    │
│          Draw 1 card     │
│        - If ≥5 cards:    │
│          Discard 1 card  │
│ 2. End turn              │
└──────────────────────────┘
           ↓
┌──────────────────────────┐
│   PLAYER 2 TURN          │
├──────────────────────────┤
│ 1. Have set?             │
│    YES: Play set         │
│         → Queue +1       │
│         → Draw Pleasure  │
│    NO: Can't play?       │
│        - If <5 cards:    │
│          Draw 1 card     │
│        - If ≥5 cards:    │
│          Discard 1 card  │
│ 2. End turn              │
└──────────────────────────┘
           ↓
      Check Win?
      P1: 5 in Queue
      P2: 5 Pleasures
```

## Set Formula

```
┌──────────┐   ┌───────────┐   ┌──────────┐
│ POSITION │ + │ INTENSITY │ + │   TIME   │  = COMPLETE SET
└──────────┘   └───────────┘   └──────────┘
     ↓              ↓               ↓
  Over Knee      Medium          5 Minutes
  Bent Over       Hard           10 Minutes  
  Against Wall    Light           2 Minutes
  etc.            etc.            etc.
```

## Win Conditions

```
Player 1 Wins:              Player 2 Wins:
┌────────────────┐         ┌────────────────┐
│ Queue has 5    │         │ Collected 5    │
│ punishments    │         │ pleasure cards │
└────────────────┘         └────────────────┘
```

## Card Types Reference

### Main Deck Cards
- **Position (8 cards):** Over Knee, Bent Over Table, Against Wall, Over Pillow, Standing, Kneeling, Lying Flat, On All Fours
- **Intensity (8 cards):** Light (x2), Medium (x3), Hard (x2), Very Hard (x1)
- **Time (8 cards):** 2min (x2), 5min (x3), 10min (x2), 15min (x1)
- **Special (4 cards):** Steal Card (x2), Ask For Card (x2)

### Equipment Cards (20 total)
Nipple Clamps, Plugs (Small/Med/Large), Sharpie, Vibrator (Low/High), Ice, Blindfold, Gag, Restraints, Anal Beads

### Pleasure Cards (25 total)
Oral, Vaginal/Anal Penetration, Orgasm, Cuddle, Massage, Neck/Breast Play, Fingering, Skip Punishment, Remove Equipment, Stop Game

---

## Image CDN Integration (Future)

### Card Image Structure
Each card object has an `image` property (currently `null`):

```javascript
{
  id: 'pos_1',
  type: 'position',
  name: 'Over Knee',
  image: null  // ← Future: CDN URL here
}
```

### Planned Implementation
Replace `null` with CDN URLs:

```javascript
{
  id: 'pos_1',
  type: 'position',
  name: 'Over Knee',
  image: 'https://cdn.example.com/kinky/positions/over-knee.jpg'
}
```

### Recommended CDN Structure
```
/kinky-images/
  ├── positions/
  │   ├── over-knee.jpg
  │   ├── bent-over-table.jpg
  │   └── ...
  ├── equipment/
  │   ├── nipple-clamps.jpg
  │   ├── small-plug.jpg
  │   └── ...
  └── pleasures/
      ├── oral.jpg
      ├── massage.jpg
      └── ...
```

### Usage in UI
```javascript
// If card has image, display it
if (card.image) {
  return <img src={card.image} alt={card.name} />;
} else {
  // Fallback to text-only card
  return <div className="card-text">{card.name}</div>;
}
```

---

## Point System

```
Player 1 Points:
┌─────────────────────────────┐
│ Earn: +1 per set completed  │
│ Spend: -1 per equipment     │
└─────────────────────────────┘

Player 2 Has No Points:
┌─────────────────────────────┐
│ Completes set = Draw 1      │
│ pleasure card directly      │
└─────────────────────────────┘
```

---

## Queue Example

```
PUBLIC QUEUE (Both players can see):

1. [Over Knee] + [Medium] + [5min]
   └─ Equipment: Small Plug

2. [Bent Over Table] + [Hard] + [10min]
   └─ Equipment: Nipple Clamps, Vibrator - High

3. [Against Wall] + [Light] + [2min]
   └─ No equipment

4. [On All Fours] + [Very Hard] + [15min]
   └─ Equipment: Blindfold, Gag, Ice Cubes

Total: 4 punishments (Need 5 for Player 1 to win)
```

---

## Special Card Effects

### Steal Card
```
┌──────────────────────────────┐
│ 1. Play "Steal Card"         │
│ 2. Take random card from     │
│    opponent's hand           │
│ 3. Add to your hand          │
│ 4. Discard down to 5 cards   │
└──────────────────────────────┘
```

### Ask For Card
```
┌──────────────────────────────┐
│ 1. Play "Ask For Card"       │
│ 2. Request card type:        │
│    - Position                │
│    - Intensity               │
│    - Time                    │
│    - Special                 │
│ 3. If opponent has it:       │
│    → They give you one       │
│ 4. If not: Nothing happens   │
└──────────────────────────────┘
```

---

## Gameplay Tips

### When to Spend Points (Player 1)
- ✓ Spend immediately if you want intense punishment
- ✓ Save points to stack multiple equipment on one punishment
- ✓ Consider how many punishments are in queue (close to 5?)

### When to Use Action Pleasures (Player 2)
- "Skip Punishment": Use on heavily-equipped punishments
- "Remove Equipment": Target the worst equipment cards
- "Stop Game": Emergency exit if things get too intense

### Strategic Timing
- Count cards: Know what opponent might have
- Watch the queue: Anticipate when win conditions approach
- Special cards: Use early for card advantage

---

## End Game Execution

```
┌─────────────────────────────────────┐
│ Someone Wins → Game Ends            │
├─────────────────────────────────────┤
│ 1. Execute Queue (in order):       │
│    - Perform each punishment        │
│    - Apply attached equipment       │
│                                     │
│ 2. Player 2 Claims Pleasures:      │
│    - Redeem all collected pleasure  │
│      cards (except already-used     │
│      action cards like Skip/Remove) │
│                                     │
│ 3. Game Complete                    │
└─────────────────────────────────────┘
```