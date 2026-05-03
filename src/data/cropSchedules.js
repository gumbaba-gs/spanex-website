// src/data/cropSchedules.js
// SRT authoritative crop schedules (per 2 hectares).
// Source: SRT Agro Science PDFs (Apr 2026).
// All applications are soil-based per SRT general notes.
// Per-application amounts vary by stage (5, 3, or 10 caps) — stored per application.

export const APPLICATION_METHODS = {
  broadcast: { label: 'Broadcast', color: '#388e3c', symbol: 'B' },
  topdress:  { label: 'Top Dress / Seed', color: '#1976d2', symbol: 'T' },
  soil:      { label: 'Soil Application', color: '#f57c00', symbol: 'S' },
  foliar:    { label: 'Foliar Spray', color: '#fbc02d', symbol: 'F' },
};

export const CATEGORIES = [
  { id: 'pasture',    label: 'Pastoral & Forage' },
  { id: 'cereal',     label: 'Cereals & Grains' },
  { id: 'industrial', label: 'Industrial Crops' },
  { id: 'tree',       label: 'Tree Crops' },
  { id: 'vine',       label: 'Vine Crops' },
  { id: 'berry',      label: 'Berries' },
  { id: 'vegetable',  label: 'Vegetables' },
];

// Helpers
export const formatAmount = (value, unit) => `${value} ${unit}`;

export const computeTotal = (product) => {
  const total = Object.values(product.applications).reduce(
    (sum, app) => sum + app.amount,
    0
  );
  return formatAmount(total, product.unit);
};

// SRT general notes — apply to all schedules
export const GENERAL_NOTES = [
  'All capsule dosage is for 2-hectare land.',
  'Apply in soil (drip / drench / irrigation / soil spray).',
  'Maintain a minimum 3–4 days gap from chemical fertilisers.',
  'Schedule prepared on average soil moisture and temperature conditions.',
  "Dosage and timing may vary with farmer's practice, weather, soil health, and crop condition.",
];

export const HORTICULTURE_NOTES = [
  'Schedule prepared based on an average crop life cycle.',
  'Application dosage and frequency can be increased or decreased depending on specific crop duration, growth stage, and field conditions.',
];

// ---------- CROPS ----------
// Per-application format: { stageIndex: { amount: N, method: 'soil' } }

export const CROPS = [
  // ===== PASTORAL & FORAGE =====
  {
    slug: 'pasture', name: 'Improved Pasture', icon: '🌾', category: 'pasture',
    cycleLength: 'Annual maintenance', cycleType: 'Wet-season aligned',
    description: 'Buffel grass, Rhodes grass, Mitchell grass — annual maintenance for breeding station pasture.',
    stages: ['Week 0', 'Week 1', 'Week 2', 'Week 4', 'Week 8', 'Week 12', 'Week 20+'],
    weeks:  ['Wk 0', 'Wk 1', 'Wk 2', 'Wk 4', 'Wk 8', 'Wk 12', 'Wk 20+'],
    products: [
      { name: 'NPK Grow',   desc: 'NPK Consortia', unit: 'caps', applications: { 1: { amount: 5, method: 'soil' }, 4: { amount: 5, method: 'soil' } } },
      { name: 'Azoto Caps', desc: 'N-fixer',       unit: 'caps', applications: { 0: { amount: 5, method: 'soil' } } },
      { name: 'PSB Plus',   desc: 'P-solubiliser', unit: 'caps', applications: { 0: { amount: 5, method: 'soil' }, 4: { amount: 3, method: 'soil' } } },
    ],
    notes: 'Apply with first effective rain (>25mm). Compatible with cattle on pasture — no withholding period.',
    notesList: GENERAL_NOTES,
  },
  {
    slug: 'leucaena', name: 'Leucaena', icon: '🌿', category: 'pasture',
    cycleLength: '24 weeks', cycleType: 'Perennial (Year 1 establishment)',
    description: 'QLD tropical legume for high-protein cattle finishing — strain-matched Rhizobium critical.',
    stages: ['Sowing', 'Week 2', 'Week 4', 'Week 8', 'Week 16', 'Week 24'],
    weeks:  ['Wk 0', 'Wk 2', 'Wk 4', 'Wk 8', 'Wk 16', 'Wk 24'],
    products: [
      { name: 'Rhizo Caps', desc: 'Leucaena strain', unit: 'caps', applications: { 0: { amount: 5, method: 'soil' } } },
      { name: 'NPK Grow',   desc: 'NPK Consortia',   unit: 'caps', applications: { 1: { amount: 5, method: 'soil' }, 3: { amount: 5, method: 'soil' } } },
      { name: 'PSB Plus',   desc: 'P-solubiliser',   unit: 'caps', applications: { 0: { amount: 5, method: 'soil' }, 3: { amount: 3, method: 'soil' } } },
    ],
    notes: 'Confirm Rhizo strain matches leucaena cultivar before order. Apply lime if soil pH <5.5.',
    notesList: GENERAL_NOTES,
  },
  {
    slug: 'lucerne', name: 'Lucerne', icon: '🍀', category: 'pasture',
    cycleLength: 'Per cutting cycle', cycleType: 'Perennial',
    description: 'Perennial legume — high-protein hay and finishing pasture.',
    stages: ['Week 0', 'Week 2', 'Week 4', 'Week 8', 'Week 10', 'Week 16'],
    weeks:  ['Wk 0', 'Wk 2', 'Wk 4', 'Wk 8', 'Wk 10', 'Wk 16'],
    products: [
      { name: 'Rhizo Caps',  desc: 'Lucerne strain',  unit: 'caps', applications: { 0: { amount: 5, method: 'soil' } } },
      { name: 'NPK Grow',    desc: 'NPK Consortia',   unit: 'caps', applications: { 1: { amount: 5, method: 'soil' }, 4: { amount: 5, method: 'soil' } } },
      { name: 'PSB Plus',    desc: 'P-solubiliser',   unit: 'caps', applications: { 0: { amount: 5, method: 'soil' }, 4: { amount: 3, method: 'soil' } } },
      { name: 'Potash Grow', desc: 'K-mobiliser',     unit: 'caps', applications: { 2: { amount: 5, method: 'soil' } } },
    ],
    notes: 'Lime to pH 6.5+ for best nodulation.',
    notesList: GENERAL_NOTES,
  },

  // ===== CEREALS & GRAINS =====
  {
    slug: 'wheat', name: 'Wheat', icon: '🌾', category: 'cereal',
    cycleLength: '12+ weeks', cycleType: 'Annual',
    description: 'Major Australian grain crop — broadacre cereal for feed and milling.',
    stages: ['Week 0', 'Week 2', 'Week 4', 'Week 8', 'Week 12'],
    weeks:  ['Wk 0', 'Wk 2', 'Wk 4', 'Wk 8', 'Wk 12'],
    products: [
      { name: 'NPK Grow',    desc: 'NPK Consortia', unit: 'caps', applications: { 3: { amount: 10, method: 'soil' } } },
      { name: 'Azoto Caps',  desc: 'N-fixer',       unit: 'caps', applications: { 1: { amount: 5,  method: 'soil' } } },
      { name: 'PSB Plus',    desc: 'P-solubiliser', unit: 'caps', applications: { 1: { amount: 5,  method: 'soil' } } },
      { name: 'Potash Grow', desc: 'K-mobiliser',   unit: 'caps', applications: { 1: { amount: 5,  method: 'soil' } } },
    ],
    notes: 'Supports tillering, root growth & grain yield.',
    notesList: GENERAL_NOTES,
  },
  {
    slug: 'barley', name: 'Barley', icon: '🌾', category: 'cereal',
    cycleLength: '12+ weeks', cycleType: 'Annual',
    description: 'Winter cereal for malting and stockfeed.',
    stages: ['Week 0', 'Week 2', 'Week 4', 'Week 8', 'Week 12'],
    weeks:  ['Wk 0', 'Wk 2', 'Wk 4', 'Wk 8', 'Wk 12'],
    products: [
      { name: 'NPK Grow',   desc: 'NPK Consortia', unit: 'caps', applications: { 1: { amount: 5, method: 'soil' }, 3: { amount: 5, method: 'soil' } } },
      { name: 'Azoto Caps', desc: 'N-fixer',       unit: 'caps', applications: { 0: { amount: 5, method: 'soil' } } },
      { name: 'PSB Plus',   desc: 'P-solubiliser', unit: 'caps', applications: { 0: { amount: 5, method: 'soil' } } },
    ],
    notes: 'Supports tillering, vegetative growth & grain filling.',
    notesList: GENERAL_NOTES,
  },
  {
    slug: 'sorghum', name: 'Sorghum', icon: '🌾', category: 'cereal',
    cycleLength: '13 weeks', cycleType: 'Annual',
    description: 'Forage and silage crop suited to hot, drier zones — feedlot fodder.',
    stages: ['Week 0', 'Week 1', 'Week 2', 'Week 6', 'Week 8', 'Week 10', 'Week 13'],
    weeks:  ['Wk 0', 'Wk 1', 'Wk 2', 'Wk 6', 'Wk 8', 'Wk 10', 'Wk 13'],
    products: [
      { name: 'NPK Grow', desc: 'NPK Consortia', unit: 'caps', applications: { 2: { amount: 5, method: 'soil' }, 4: { amount: 5, method: 'soil' } } },
      { name: 'Azoss',    desc: 'Azospirillum',  unit: 'caps', applications: { 0: { amount: 5, method: 'soil' } } },
      { name: 'PSB Plus', desc: 'P-solubiliser', unit: 'caps', applications: { 0: { amount: 5, method: 'soil' } } },
    ],
    notes: 'Forage and silage crop near feedlots.',
    notesList: GENERAL_NOTES,
  },
  {
    slug: 'oats', name: 'Oats', icon: '🌾', category: 'cereal',
    cycleLength: '14 weeks', cycleType: 'Annual',
    description: 'Winter forage crop — hay, standing graze, or grain.',
    stages: ['Week 0', 'Week 1', 'Week 2', 'Week 4', 'Week 8', 'Week 10', 'Week 14'],
    weeks:  ['Wk 0', 'Wk 1', 'Wk 2', 'Wk 4', 'Wk 8', 'Wk 10', 'Wk 14'],
    products: [
      { name: 'NPK Grow',   desc: 'NPK Consortia', unit: 'caps', applications: { 2: { amount: 5, method: 'soil' }, 4: { amount: 5, method: 'soil' } } },
      { name: 'Azoto Caps', desc: 'N-fixer',       unit: 'caps', applications: { 0: { amount: 5, method: 'soil' } } },
      { name: 'PSB Plus',   desc: 'P-solubiliser', unit: 'caps', applications: { 0: { amount: 5, method: 'soil' } } },
    ],
    notes: 'Sow Apr–May in southern Australian operations.',
    notesList: GENERAL_NOTES,
  },
  {
    slug: 'maize', name: 'Maize', icon: '🌽', category: 'cereal',
    cycleLength: '15 weeks', cycleType: 'Annual',
    description: 'Feedlot grain and silage crop.',
    stages: ['Week 0', 'Week 1', 'Week 4', 'Week 6', 'Week 9', 'Week 12', 'Week 15'],
    weeks:  ['Wk 0', 'Wk 1', 'Wk 4', 'Wk 6', 'Wk 9', 'Wk 12', 'Wk 15'],
    products: [
      { name: 'NPK Grow', desc: 'NPK Consortia', unit: 'caps', applications: { 2: { amount: 5, method: 'soil' }, 4: { amount: 5, method: 'soil' } } },
      { name: 'Azoss',    desc: 'Azospirillum',  unit: 'caps', applications: { 0: { amount: 5, method: 'soil' } } },
      { name: 'PSB Plus', desc: 'P-solubiliser', unit: 'caps', applications: { 0: { amount: 5, method: 'soil' } } },
    ],
    notes: 'Azospirillum particularly effective on maize — colonises maize root system.',
    notesList: GENERAL_NOTES,
  },
  {
    slug: 'paddy', name: 'Paddy / Rice', icon: '🌾', category: 'cereal',
    cycleLength: '12+ weeks', cycleType: 'Annual',
    description: 'Suitable for flooded conditions — supports tillering & yield.',
    stages: ['Week 0', 'Week 2', 'Week 4', 'Week 8', 'Week 12'],
    weeks:  ['Wk 0', 'Wk 2', 'Wk 4', 'Wk 8', 'Wk 12'],
    products: [
      { name: 'NPK Grow',    desc: 'NPK Consortia', unit: 'caps', applications: { 3: { amount: 10, method: 'soil' } } },
      { name: 'Azoss',       desc: 'Azospirillum',  unit: 'caps', applications: { 1: { amount: 5,  method: 'soil' } } },
      { name: 'PSB Plus',    desc: 'P-solubiliser', unit: 'caps', applications: { 1: { amount: 5,  method: 'soil' } } },
      { name: 'Potash Grow', desc: 'K-mobiliser',   unit: 'caps', applications: { 3: { amount: 5,  method: 'soil' } } },
    ],
    notes: 'Suitable for flooded conditions. Supports tillering & grain yield. Targets Riverina rice growers and SunRice supply chain.',
    notesList: GENERAL_NOTES,
  },

  // ===== INDUSTRIAL CROPS =====
  {
    slug: 'cotton', name: 'Cotton', icon: '☁️', category: 'industrial',
    cycleLength: '12+ weeks', cycleType: 'Annual',
    description: 'Heavy-feeding fibre crop — supports vegetative growth, boll formation & nutrient balance.',
    stages: ['Week 0', 'Week 2', 'Week 4', 'Week 8', 'Week 12'],
    weeks:  ['Wk 0', 'Wk 2', 'Wk 4', 'Wk 8', 'Wk 12'],
    products: [
      { name: 'NPK Grow',    desc: 'NPK Consortia', unit: 'caps', applications: { 1: { amount: 5, method: 'soil' }, 3: { amount: 5, method: 'soil' } } },
      { name: 'Azoto Caps',  desc: 'N-fixer',       unit: 'caps', applications: { 0: { amount: 5, method: 'soil' } } },
      { name: 'PSB Plus',    desc: 'P-solubiliser', unit: 'caps', applications: { 0: { amount: 5, method: 'soil' } } },
      { name: 'Potash Grow', desc: 'K-mobiliser',   unit: 'caps', applications: { 3: { amount: 5, method: 'soil' } } },
      { name: 'Zinc Grow',   desc: 'Zn-mobiliser',  unit: 'caps', applications: { 2: { amount: 5, method: 'soil' } } },
    ],
    notes: 'Supports vegetative growth, boll formation & nutrient balance. Avoid microbial products near defoliation chemicals.',
    notesList: GENERAL_NOTES,
  },
];

// Horticulture (Fruit Plants) generic schedule used for all tree/berry crops.
// Stages are MONTHS (not weeks).
const HORTICULTURE_SCHEDULE = {
  cycleLength: '5+ months', cycleType: 'Generic horticulture (per SRT)',
  stages: ['Month 0', 'Month 1', 'Month 3', 'Month 5'],
  weeks:  ['Mo 0', 'Mo 1', 'Mo 3', 'Mo 5'],
  products: [
    { name: 'NPK Grow',    desc: 'NPK Consortia', unit: 'caps', applications: { 1: { amount: 5, method: 'soil' }, 3: { amount: 5, method: 'soil' } } },
    { name: 'Azoto Caps',  desc: 'N-fixer',       unit: 'caps', applications: { 0: { amount: 5, method: 'soil' } } },
    { name: 'PSB Plus',    desc: 'P-solubiliser', unit: 'caps', applications: { 0: { amount: 5, method: 'soil' }, 3: { amount: 5, method: 'soil' } } },
    { name: 'Potash Grow', desc: 'K-mobiliser',   unit: 'caps', applications: { 2: { amount: 5, method: 'soil' } } },
    { name: 'Zinc Grow',   desc: 'Zn-mobiliser',  unit: 'caps', applications: { 1: { amount: 5, method: 'soil' } } },
  ],
};

// Vegetables generic schedule used for all vegetable crops.
const VEGETABLE_SCHEDULE = {
  cycleLength: '10+ weeks', cycleType: 'Generic vegetables (per SRT)',
  stages: ['Week 0', 'Week 2', 'Week 4', 'Week 6', 'Week 10'],
  weeks:  ['Wk 0', 'Wk 2', 'Wk 4', 'Wk 6', 'Wk 10'],
  products: [
    { name: 'NPK Grow',    desc: 'NPK Consortia', unit: 'caps', applications: { 1: { amount: 5, method: 'soil' }, 3: { amount: 10, method: 'soil' } } },
    { name: 'Azoss',       desc: 'Azospirillum',  unit: 'caps', applications: { 0: { amount: 5, method: 'soil' }, 4: { amount: 5,  method: 'soil' } } },
    { name: 'PSB Plus',    desc: 'P-solubiliser', unit: 'caps', applications: { 0: { amount: 5, method: 'soil' }, 4: { amount: 5,  method: 'soil' } } },
    { name: 'Potash Grow', desc: 'K-mobiliser',   unit: 'caps', applications: { 2: { amount: 5, method: 'soil' }, 4: { amount: 5,  method: 'soil' } } },
    { name: 'Zinc Grow',   desc: 'Zn-mobiliser',  unit: 'caps', applications: { 3: { amount: 5, method: 'soil' } } },
  ],
};

// ===== TREE CROPS (use Horticulture generic schedule) =====
['almonds', 'citrus', 'avocado', 'banana', 'apple'].forEach((slug) => {
  const meta = {
    almonds: { name: 'Almonds',  icon: '🌰', description: 'Tree nut crop — fertigation-compatible. Improves flowering, fruit set & long-term soil health.' },
    citrus:  { name: 'Citrus',   icon: '🍊', description: 'Oranges, mandarins, lemons. Improves flowering, fruit set & long-term soil health.' },
    avocado: { name: 'Avocado',  icon: '🥑', description: 'Subtropical tree fruit. Improves flowering, fruit set & long-term soil health.' },
    banana:  { name: 'Banana',   icon: '🍌', description: 'Heavy K-feeder. Improves flowering, fruit set & long-term soil health.' },
    apple:   { name: 'Apple',    icon: '🍎', description: 'Pome fruit grown across Goulburn Valley, Stanthorpe, Tasmania, Batlow and Pemberton. Improves flowering, fruit set & long-term soil health.' },
  }[slug];
  CROPS.push({
    slug, name: meta.name, icon: meta.icon, category: 'tree',
    description: meta.description,
    ...HORTICULTURE_SCHEDULE,
    notes: 'Schedule based on SRT generic Horticulture (Fruit Plants) protocol. Apply via fertigation if drip-irrigated.',
    notesList: [...GENERAL_NOTES, ...HORTICULTURE_NOTES],
  });
});

// ===== VINE CROPS (Grapes) — also use Horticulture generic schedule =====
CROPS.push({
  slug: 'grapes', name: 'Grapes (Wine & Table)', icon: '🍇', category: 'vine',
  description: 'Wine grapes (Barossa, McLaren Vale, Hunter, Margaret River) and table grapes (Sunraysia, Mildura). Schedule based on SRT generic Horticulture protocol — fertigation-compatible.',
  ...HORTICULTURE_SCHEDULE,
  notes: 'Schedule based on SRT generic Horticulture (Fruit Plants) protocol. Premium wine production benefits from biological nutrient program for sustainability disclosure (EU/Asia export).',
  notesList: [...GENERAL_NOTES, ...HORTICULTURE_NOTES],
});

// ===== BERRIES (also use Horticulture generic schedule) =====
['strawberry', 'blueberry', 'raspberry'].forEach((slug) => {
  const meta = {
    strawberry: { name: 'Strawberry', icon: '🍓', description: 'High-value berry crop — controlled-environment compatible. Schedule based on SRT generic Horticulture protocol.' },
    blueberry:  { name: 'Blueberry',  icon: '🫐', description: 'Acidic-soil berry crop (pH 4.5–5.5). Schedule based on SRT generic Horticulture protocol.' },
    raspberry:  { name: 'Raspberry',  icon: '🍇', description: 'Cane berry — biennial fruiting on second-year canes. Schedule based on SRT generic Horticulture protocol.' },
  }[slug];
  CROPS.push({
    slug, name: meta.name, icon: meta.icon, category: 'berry',
    description: meta.description,
    ...HORTICULTURE_SCHEDULE,
    notes: 'Schedule based on SRT generic Horticulture (Fruit Plants) protocol. Apply via drip irrigation.',
    notesList: [...GENERAL_NOTES, ...HORTICULTURE_NOTES],
  });
});

// ===== VEGETABLES =====
CROPS.push({
  slug: 'tomato', name: 'Tomato', icon: '🍅', category: 'vegetable',
  description: 'Field or protected cropping — heavy feeder. Schedule based on SRT generic Vegetables protocol.',
  ...VEGETABLE_SCHEDULE,
  notes: 'Apply through drip system in protected cropping. Calcium supplementation supports blossom-end-rot prevention.',
  notesList: [...GENERAL_NOTES, ...HORTICULTURE_NOTES],
});

export const getCropsByCategory = (categoryId) =>
  categoryId === 'all' ? CROPS : CROPS.filter((c) => c.category === categoryId);

export const getCropBySlug = (slug) => CROPS.find((c) => c.slug === slug);
