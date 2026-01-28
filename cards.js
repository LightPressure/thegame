// THE GAME - CARD DEFINITIONS
// Easy to modify card data structure

// Card definitions with amounts
const CARD_DEFINITIONS = {

  // ============================================
  // MAIN DECK - Build sets from these 3 types
  // ============================================

  mainDeck: {

    // POSITION CARDS (where the spanking happens)
    position: [
      { type: 'position', name: 'Over Knee', emoji: '🏓', amount: 1 },
      { type: 'position', name: 'Lying on the table', emoji: '📦️', amount: 1 },
      { type: 'position', name: 'Against Wall', emoji: '🧱', amount: 1 },
      { type: 'position', name: 'Over Pillow', emoji: '🛏️', amount: 1 },
      { type: 'position', name: 'Standing - Hands on Wall', emoji: '🧱', amount: 1 },
      { type: 'position', name: 'Kneeling on Furniture', emoji: '🪑', amount: 1 },
      { type: 'position', name: 'Lying Flat', emoji: '😴', amount: 1 },
      { type: 'position', name: 'On All Fours', emoji: '🐕️', amount: 1 },
    ],

    // INTENSITY CARDS (how hard)
    intensity: [
      { type: 'intensity', name: 'Light', description: 'Gentle taps', emoji: '🤚', amount: 2 },
      { type: 'intensity', name: 'Medium', description: 'Firm smacks', emoji: '✋', amount: 3 },
      { type: 'intensity', name: 'Hard', description: 'Strong strikes', emoji: '👋', amount: 2 },
      { type: 'intensity', name: 'Very Hard', description: 'Maximum intensity', emoji: '💥', amount: 1 },
    ],

    // TIME CARDS (duration)
    time: [
      { type: 'time', name: '1 Minute', duration: 60, emoji: '⏱️', amount: 5 },
      { type: 'time', name: '3 Minutes', duration: 180, emoji: '⏰', amount: 3 },
      { type: 'time', name: '5 Minutes', duration: 300, emoji: '⌛', amount: 3 },
    ],

    // SPECIAL ACTION CARDS
    special: [
      { type: 'special', name: 'Steal Card', action: 'steal', description: 'Take one random card from opponent\'s hand', emoji: '🃏', amount: 2 },
      { type: 'special', name: 'Ask For Card', action: 'ask', description: 'Request a specific card type from opponent (they must give if they have it)', emoji: '❓', amount: 2 },
    ]
  },

  // ============================================
  // EQUIPMENT DECK - Player 1 spends points here
  // ============================================

  equipmentDeck: [
    { type: 'equipment', name: 'Nipple Clamps', duration: '5 min', cost: 1, emoji: '📎', amount: 2 },
    { type: 'equipment', name: 'Plug', duration: '5 min', cost: 1, emoji: '🔌', amount: 2 },
    { type: 'equipment', name: 'Sharpie', duration: '5 min', cost: 1, emoji: '🖊️', amount: 2 },
    { type: 'equipment', name: 'Vibrator', duration: '5 min', cost: 1, emoji: '📳', amount: 2 },
    { type: 'equipment', name: 'Ice Cubes', duration: 'Until melted', cost: 1, emoji: '🧊', amount: 2 },
    { type: 'equipment', name: 'Blindfold', duration: 'During punishment', cost: 1, emoji: '😎', amount: 2 },
    { type: 'equipment', name: 'Gag', duration: 'During punishment', cost: 1, emoji: '🤐', amount: 1 },
    { type: 'equipment', name: 'Restraints', duration: 'During punishment', cost: 1, emoji: '⛓️', amount: 2 },
    { type: 'equipment', name: 'Anal Beads', duration: '5 min', cost: 1, emoji: '📿', amount: 1 },
  ],

  // ============================================
  // PLEASURE DECK - Player 2 earns these
  // ============================================

  pleasureDeck: [
    { type: 'pleasure', name: 'Oral - Receive', duration: '5 min', emoji: '👅🐈️', amount: 3 },
    { type: 'pleasure', name: 'Oral - Receive', duration: '5 min', emoji: '👅✴️', amount: 3 },
    { type: 'pleasure', name: 'Oral - Give', duration: '5 min', emoji: '👅🍆', amount: 3 },
    { type: 'pleasure', name: 'Vaginal Penetration', duration: '5 min', emoji: '🍆', amount: 3 },
    { type: 'pleasure', name: 'Full Orgasm - Unrestricted', duration: null, emoji: '💦', amount: 2 },
    { type: 'pleasure', name: 'Cuddle & Kiss', duration: '5 min', emoji: '💋', amount: 2 },
    { type: 'pleasure', name: 'Massage - Full Body', duration: '10 min', emoji: '💆', amount: 2 },
    { type: 'pleasure', name: 'Neck Kissing & Licking', duration: '3 min', emoji: '💏', amount: 2 },
    { type: 'pleasure', name: 'Breast Play & Licking', duration: '5 min', emoji: '🍒', amount: 3 },
    { type: 'pleasure', name: 'Fingering', duration: '5 min', emoji: '👇🏻', amount: 3 },
    { type: 'pleasure', name: 'Fingering ass', duration: '5 min', emoji: '👇🏻🍑', amount: 3 },
    { type: 'pleasure', name: 'Remove Equipment', duration: null, description: 'Remove one equipment from any queued punishment', emoji: '🔓', amount: 1 },
    { type: 'pleasure', name: 'Skip Punishment', duration: null, description: 'Remove one punishment from queue', emoji: '⏭️', amount: 2 },
    { type: 'pleasure', name: '69', duration: null, description: 'Double oral pleasure', emoji: '☯️', amount: 2 },
  ],

};

// Generate cards with unique IDs based on amount
function generateCards(definitions) {
  const result = {
    mainDeck: {
      position: [],
      intensity: [],
      time: [],
      special: []
    },
    equipmentDeck: [],
    pleasureDeck: []
  };

  // Generate main deck cards
  let posId = 1, intId = 1, timeId = 1, specId = 1;

  definitions.mainDeck.position.forEach(card => {
    for (let i = 0; i < card.amount; i++) {
      result.mainDeck.position.push({ ...card, id: `pos_${posId++}` });
    }
  });

  definitions.mainDeck.intensity.forEach(card => {
    for (let i = 0; i < card.amount; i++) {
      result.mainDeck.intensity.push({ ...card, id: `int_${intId++}` });
    }
  });

  definitions.mainDeck.time.forEach(card => {
    for (let i = 0; i < card.amount; i++) {
      result.mainDeck.time.push({ ...card, id: `time_${timeId++}` });
    }
  });

  definitions.mainDeck.special.forEach(card => {
    for (let i = 0; i < card.amount; i++) {
      result.mainDeck.special.push({ ...card, id: `spec_${specId++}` });
    }
  });

  // Generate equipment deck cards
  let eqId = 1;
  definitions.equipmentDeck.forEach(card => {
    for (let i = 0; i < card.amount; i++) {
      result.equipmentDeck.push({ ...card, id: `eq_${eqId++}` });
    }
  });

  // Generate pleasure deck cards
  let plId = 1;
  definitions.pleasureDeck.forEach(card => {
    for (let i = 0; i < card.amount; i++) {
      result.pleasureDeck.push({ ...card, id: `pl_${plId++}` });
    }
  });

  return result;
}

// Export generated cards
window.GAME_CARDS = window.GAME_CARDS || generateCards(CARD_DEFINITIONS);
