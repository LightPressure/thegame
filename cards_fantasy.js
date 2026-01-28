// THE GAME - FANTASY THEME CARD DEFINITIONS
// Magical duel game - completely fictional for testing

// Card definitions with amounts
const CARD_DEFINITIONS = {

  // ============================================
  // MAIN DECK - Cast spells with these 3 types
  // ============================================

  mainDeck: {

    // SPELL TYPE CARDS (what spell to cast)
    position: [
      { type: 'position', name: 'Fire Blast', emoji: '🔥' },
      { type: 'position', name: 'Ice Storm', emoji: '❄️' },
      { type: 'position', name: 'Lightning Strike', emoji: '⚡' },
      { type: 'position', name: 'Earth Shake', emoji: '🌍' },
      { type: 'position', name: 'Wind Gust', emoji: '💨' },
      { type: 'position', name: 'Shadow Bolt', emoji: '🌑' },
      { type: 'position', name: 'Light Beam', emoji: '✨' },
      { type: 'position', name: 'Arcane Missile', emoji: '🔮' },
    ].map(card => ({ ...card, amount: 1 })),

    // POWER LEVEL CARDS (how strong)
    intensity: [
      { type: 'intensity', name: 'Cantrip', description: 'Weak spell', emoji: '✨', amount: 2 },
      { type: 'intensity', name: 'Spell', description: 'Medium power', emoji: '⭐', amount: 3 },
      { type: 'intensity', name: 'Ritual', description: 'Strong magic', emoji: '🌟', amount: 2 },
      { type: 'intensity', name: 'Legendary', description: 'Ultimate power', emoji: '💫', amount: 1 },
    ],

    // TIME CARDS (duration in seconds for visualization)
    time: [
      { type: 'time', name: '1 Minute', duration: 60, emoji: '⏱️', amount: 2 },
      { type: 'time', name: '3 Minutes', duration: 180, emoji: '⏰', amount: 3 },
      { type: 'time', name: '5 Minutes', duration: 300, emoji: '⌛', amount: 3 },
    ],

    // SPECIAL ACTION CARDS
    special: [
      { type: 'special', name: 'Steal Mana', action: 'steal', description: 'Take one random card from opponent', emoji: '🎴', amount: 2 },
      { type: 'special', name: 'Counter Spell', action: 'ask', description: 'Ask opponent for specific card type', emoji: '🛡️', amount: 2 },
    ]
  },

  // ============================================
  // EQUIPMENT DECK - Magical items (Player 1)
  // ============================================

  equipmentDeck: [
    { type: 'equipment', name: 'Wizard Hat', duration: 'During duel', cost: 1, emoji: '🎩', amount: 2 },
    { type: 'equipment', name: 'Magic Wand', duration: 'During duel', cost: 1, emoji: '🪄', amount: 2 },
    { type: 'equipment', name: 'Crystal Ball', duration: '5 min', cost: 1, emoji: '🔮', amount: 2 },
    { type: 'equipment', name: 'Enchanted Ring', duration: 'During duel', cost: 1, emoji: '💍', amount: 2 },
    { type: 'equipment', name: 'Spell Book', duration: '3 min', cost: 1, emoji: '📖', amount: 2 },
    { type: 'equipment', name: 'Potion of Focus', duration: '5 min', cost: 1, emoji: '🧪', amount: 2 },
    { type: 'equipment', name: 'Magic Cloak', duration: 'During duel', cost: 1, emoji: '🧥', amount: 2 },
    { type: 'equipment', name: 'Mystical Amulet', duration: 'During duel', cost: 1, emoji: '📿', amount: 1 },
    { type: 'equipment', name: 'Enchanted Staff', duration: 'During duel', cost: 1, emoji: '🦯', amount: 2 },
    { type: 'equipment', name: 'Rune Stone', duration: '5 min', cost: 1, emoji: '🗿', amount: 1 },
  ],

  // ============================================
  // TREASURE DECK - Rewards (Player 2)
  // ============================================

  pleasureDeck: [
    { type: 'pleasure', name: 'Gold Coins', duration: 'Instant', emoji: '🪙', amount: 3 },
    { type: 'pleasure', name: 'Magic Gem', duration: 'Instant', emoji: '💎', amount: 3 },
    { type: 'pleasure', name: 'Rare Artifact', duration: 'Instant', emoji: '🏺', amount: 3 },
    { type: 'pleasure', name: 'Dragon Scale', duration: 'Instant', emoji: '🐉', amount: 3 },
    { type: 'pleasure', name: 'Phoenix Feather', duration: 'Instant', emoji: '🦅', amount: 2 },
    { type: 'pleasure', name: 'Unicorn Hair', duration: 'Instant', emoji: '🦄', amount: 2 },
    { type: 'pleasure', name: 'Ancient Scroll', duration: 'Instant', emoji: '📜', amount: 2 },
    { type: 'pleasure', name: 'Enchanted Armor', duration: 'Instant', emoji: '🛡️', amount: 2 },
    { type: 'pleasure', name: 'Mana Crystal', duration: 'Instant', emoji: '💠', amount: 3 },
    { type: 'pleasure', name: 'Mystic Orb', duration: 'Instant', emoji: '🔵', amount: 3 },
    { type: 'pleasure', name: 'Legendary Sword', duration: 'Instant', emoji: '⚔️', amount: 3 },
    { type: 'pleasure', name: 'Remove Curse', duration: null, description: 'Remove one magical item from any challenge', emoji: '🔓', amount: 1 },
    { type: 'pleasure', name: 'Skip Challenge', duration: null, description: 'Remove one challenge from queue', emoji: '⏭️', amount: 2 },
    { type: 'pleasure', name: 'Bonus Victory', duration: null, description: 'Extra win token', emoji: '👑', amount: 2 },
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
