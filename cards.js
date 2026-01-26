// THE GAME - CARD DEFINITIONS
// Easy to modify card data structure

window.GAME_CARDS = window.GAME_CARDS || {
  
  // ============================================
  // MAIN DECK - Build sets from these 3 types
  // ============================================
  
  mainDeck: {
    
    // POSITION CARDS (where the spanking happens)
    position: [
      { id: 'pos_1', type: 'position', name: 'Over Knee', image: null },
      { id: 'pos_2', type: 'position', name: 'Bent Over Table', image: null },
      { id: 'pos_3', type: 'position', name: 'Against Wall', image: null },
      { id: 'pos_4', type: 'position', name: 'Over Pillow', image: null },
      { id: 'pos_5', type: 'position', name: 'Standing - Hands on Wall', image: null },
      { id: 'pos_6', type: 'position', name: 'Kneeling on Furniture', image: null },
      { id: 'pos_7', type: 'position', name: 'Lying Flat', image: null },
      { id: 'pos_8', type: 'position', name: 'On All Fours', image: null },
    ],
    
    // INTENSITY CARDS (how hard)
    intensity: [
      { id: 'int_1', type: 'intensity', name: 'Light', description: 'Gentle taps', image: null },
      { id: 'int_2', type: 'intensity', name: 'Light', description: 'Gentle taps', image: null },
      { id: 'int_3', type: 'intensity', name: 'Medium', description: 'Firm smacks', image: null },
      { id: 'int_4', type: 'intensity', name: 'Medium', description: 'Firm smacks', image: null },
      { id: 'int_5', type: 'intensity', name: 'Medium', description: 'Firm smacks', image: null },
      { id: 'int_6', type: 'intensity', name: 'Hard', description: 'Strong strikes', image: null },
      { id: 'int_7', type: 'intensity', name: 'Hard', description: 'Strong strikes', image: null },
      { id: 'int_8', type: 'intensity', name: 'Very Hard', description: 'Maximum intensity', image: null },
    ],
    
    // TIME CARDS (duration)
    time: [
      { id: 'time_1', type: 'time', name: '1 Minute', duration: 60, image: null },
      { id: 'time_2', type: 'time', name: '1 Minute', duration: 60, image: null },
      { id: 'time_3', type: 'time', name: '3 Minutes', duration: 180, image: null },
      { id: 'time_4', type: 'time', name: '3 Minutes', duration: 180, image: null },
      { id: 'time_5', type: 'time', name: '3 Minutes', duration: 180, image: null },
      { id: 'time_6', type: 'time', name: '5 Minutes', duration: 300, image: null },
      { id: 'time_7', type: 'time', name: '5 Minutes', duration: 300, image: null },
      { id: 'time_8', type: 'time', name: '5 Minutes', duration: 300, image: null },
    ],
    
    // SPECIAL ACTION CARDS
    special: [
      { id: 'spec_1', type: 'special', name: 'Steal Card', action: 'steal', description: 'Take one random card from opponent\'s hand', image: null },
      { id: 'spec_2', type: 'special', name: 'Steal Card', action: 'steal', description: 'Take one random card from opponent\'s hand', image: null },
      { id: 'spec_3', type: 'special', name: 'Ask For Card', action: 'ask', description: 'Request a specific card type from opponent (they must give if they have it)', image: null },
      { id: 'spec_4', type: 'special', name: 'Ask For Card', action: 'ask', description: 'Request a specific card type from opponent (they must give if they have it)', image: null },
    ]
  },
  
  // ============================================
  // EQUIPMENT DECK - Player 1 spends points here
  // ============================================
  
  equipmentDeck: [
    { id: 'eq_1', type: 'equipment', name: 'Nipple Clamps', duration: '5 min', cost: 1, image: null },
    { id: 'eq_2', type: 'equipment', name: 'Nipple Clamps', duration: '5 min', cost: 1, image: null },
    { id: 'eq_3', type: 'equipment', name: 'Small Plug', duration: '5 min', cost: 1, image: null },
    { id: 'eq_4', type: 'equipment', name: 'Small Plug', duration: '5 min', cost: 1, image: null },
    { id: 'eq_5', type: 'equipment', name: 'Medium Plug', duration: '5 min', cost: 1, image: null },
    { id: 'eq_6', type: 'equipment', name: 'Medium Plug', duration: '5 min', cost: 1, image: null },
    { id: 'eq_7', type: 'equipment', name: 'Large Plug', duration: '3 min', cost: 1, image: null },
    { id: 'eq_8', type: 'equipment', name: 'Sharpie - Body Writing', duration: 'Until washed', cost: 1, image: null },
    { id: 'eq_9', type: 'equipment', name: 'Sharpie - Body Writing', duration: 'Until washed', cost: 1, image: null },
    { id: 'eq_10', type: 'equipment', name: 'Vibrator - Low', duration: '5 min', cost: 1, image: null },
    { id: 'eq_11', type: 'equipment', name: 'Vibrator - Low', duration: '5 min', cost: 1, image: null },
    { id: 'eq_12', type: 'equipment', name: 'Vibrator - High', duration: '3 min', cost: 1, image: null },
    { id: 'eq_13', type: 'equipment', name: 'Vibrator - High', duration: '3 min', cost: 1, image: null },
    { id: 'eq_14', type: 'equipment', name: 'Ice Cubes', duration: 'Until melted', cost: 1, image: null },
    { id: 'eq_15', type: 'equipment', name: 'Ice Cubes', duration: 'Until melted', cost: 1, image: null },
    { id: 'eq_16', type: 'equipment', name: 'Blindfold', duration: 'During punishment', cost: 1, image: null },
    { id: 'eq_17', type: 'equipment', name: 'Blindfold', duration: 'During punishment', cost: 1, image: null },
    { id: 'eq_18', type: 'equipment', name: 'Gag', duration: 'During punishment', cost: 1, image: null },
    { id: 'eq_19', type: 'equipment', name: 'Restraints', duration: 'During punishment', cost: 1, image: null },
    { id: 'eq_20', type: 'equipment', name: 'Anal Beads', duration: '5 min', cost: 1, image: null },
  ],
  
  // ============================================
  // PLEASURE DECK - Player 2 earns these
  // ============================================
  
  pleasureDeck: [
    { id: 'pl_1', type: 'pleasure', name: 'Oral - Receive', duration: '5 min', image: null },
    { id: 'pl_2', type: 'pleasure', name: 'Oral - Receive', duration: '5 min', image: null },
    { id: 'pl_3', type: 'pleasure', name: 'Oral - Receive', duration: '5 min', image: null },
    { id: 'pl_4', type: 'pleasure', name: 'Vaginal Penetration', duration: '5 min', image: null },
    { id: 'pl_5', type: 'pleasure', name: 'Vaginal Penetration', duration: '5 min', image: null },
    { id: 'pl_6', type: 'pleasure', name: 'Vaginal Penetration', duration: '5 min', image: null },
    { id: 'pl_9', type: 'pleasure', name: 'Full Orgasm - Unrestricted', duration: null, image: null },
    { id: 'pl_10', type: 'pleasure', name: 'Full Orgasm - Unrestricted', duration: null, image: null },
    { id: 'pl_11', type: 'pleasure', name: 'Cuddle & Kiss', duration: '5 min', image: null },
    { id: 'pl_12', type: 'pleasure', name: 'Cuddle & Kiss', duration: '5 min', image: null },
    { id: 'pl_13', type: 'pleasure', name: 'Massage - Full Body', duration: '10 min', image: null },
    { id: 'pl_14', type: 'pleasure', name: 'Massage - Full Body', duration: '10 min', image: null },
    { id: 'pl_15', type: 'pleasure', name: 'Neck Kissing & Licking', duration: '3 min', image: null },
    { id: 'pl_16', type: 'pleasure', name: 'Neck Kissing & Licking', duration: '3 min', image: null },
    { id: 'pl_17', type: 'pleasure', name: 'Breast Play & Licking', duration: '5 min', image: null },
    { id: 'pl_18', type: 'pleasure', name: 'Breast Play & Licking', duration: '5 min', image: null },
    { id: 'pl_19', type: 'pleasure', name: 'Breast Play & Licking', duration: '5 min', image: null },
    { id: 'pl_20', type: 'pleasure', name: 'Fingering', duration: '5 min', image: null },
    { id: 'pl_21', type: 'pleasure', name: 'Fingering', duration: '5 min', image: null },
    { id: 'pl_22', type: 'pleasure', name: 'Stop Game - End Session', duration: null, image: null },
    { id: 'pl_23', type: 'pleasure', name: 'Remove Equipment', duration: null, description: 'Remove one equipment from any queued punishment', image: null },
    { id: 'pl_24', type: 'pleasure', name: 'Skip Punishment', duration: null, description: 'Remove one punishment from queue', image: null },
    { id: 'pl_25', type: 'pleasure', name: 'Skip Punishment', duration: null, description: 'Remove one punishment from queue', image: null },
  ],
  
};

// ============================================
// HELPER FUNCTION - Get all main deck cards combined
// ============================================
window.getAllMainDeckCards = window.getAllMainDeckCards || function() {
  return [
    ...window.GAME_CARDS.mainDeck.position,
    ...window.GAME_CARDS.mainDeck.intensity,
    ...window.GAME_CARDS.mainDeck.time,
    ...window.GAME_CARDS.mainDeck.special,
  ];
};

// ============================================
// HELPER FUNCTION - Shuffle deck
// ============================================
window.shuffleDeck = window.shuffleDeck || function(deck) {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Export for use in game
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GAME_CARDS: window.GAME_CARDS, getAllMainDeckCards: window.getAllMainDeckCards, shuffleDeck: window.shuffleDeck };
}