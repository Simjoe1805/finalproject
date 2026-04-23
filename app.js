const serviceIcons = {
  plumbing: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>`,
  electrician: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  locksmith: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  hvac: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>`,
  appliance: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  handyman: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
};

const services = {
  plumbing: {
    id: "plumbing",
    name: "Plumber",
    icon: serviceIcons.plumbing,
    estimate: [129, 179],
    summary: "Burst pipes, leaks, clogs, water heater issues",
    keywords: ["leak", "pipe", "sink", "drain", "toilet", "water heater"],
  },
  electrician: {
    id: "electrician",
    name: "Electrician",
    icon: serviceIcons.electrician,
    estimate: [149, 229],
    summary: "Outages, panel issues, outlets, fixture installs",
    keywords: ["power", "outlet", "breaker", "panel", "light", "sparks"],
  },
  locksmith: {
    id: "locksmith",
    name: "Locksmith",
    icon: serviceIcons.locksmith,
    estimate: [89, 149],
    summary: "Lockouts, rekeying, smart locks, broken keys",
    keywords: ["lock", "door", "key", "locked out", "smart lock"],
  },
  hvac: {
    id: "hvac",
    name: "HVAC",
    icon: serviceIcons.hvac,
    estimate: [169, 269],
    summary: "No cooling, no heat, thermostat, airflow",
    keywords: ["ac", "heat", "hvac", "furnace", "thermostat", "air"],
  },
  appliance: {
    id: "appliance",
    name: "Appliance",
    icon: serviceIcons.appliance,
    estimate: [119, 199],
    summary: "Washer, dryer, fridge, dishwasher service",
    keywords: ["washer", "dryer", "fridge", "dishwasher", "appliance"],
  },
  handyman: {
    id: "handyman",
    name: "Handyman",
    icon: serviceIcons.handyman,
    estimate: [109, 169],
    summary: "Assembly, mounting, patching, minor repairs",
    keywords: ["mount", "assemble", "repair", "patch", "furniture"],
  },
};

// ─── Persistence ───────────────────────────────────────────────────────────

const LS = {
  users:    "fn_users",
  partners: "fn_partners",
  bookings: "fn_bookings",
};

function lsGet(key) {
  try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; }
}

function lsSet(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

function saveUser(record) {
  const users = lsGet(LS.users);
  users.unshift({ id: Date.now(), createdAt: new Date().toISOString(), status: "pending", ...record });
  lsSet(LS.users, users);
}

function savePartner(record) {
  const partners = lsGet(LS.partners);
  partners.unshift({ id: Date.now(), createdAt: new Date().toISOString(), status: "pending", ...record });
  lsSet(LS.partners, partners);
}

function saveBooking(record) {
  const bookings = lsGet(LS.bookings);
  bookings.unshift({ id: Date.now(), createdAt: new Date().toISOString(), ...record });
  lsSet(LS.bookings, bookings);
}

// ───────────────────────────────────────────────────────────────────────────

const defaultLocation = {
  latitude: 40.7465,
  longitude: -73.9965,
  label: "Chelsea, New York",
};

const professionals = [
  {
    id: 1,
    name: "Marcus Reed",
    initials: "MR",
    category: "plumbing",
    rating: 4.9,
    reviews: 238,
    badges: ["Verified", "Licensed", "Background check"],
    skills: ["Leak repair", "Drain cleaning", "Water heaters"],
    description: "Licensed plumber focused on emergency leaks, clogged drains, and clean first-visit repairs.",
    experience: "8 years",
    price: "$120/hr",
    eta: 10,
    vehicle: "White Transit Van",
    code: "FN-2841",
    colors: ["#0e766e", "#0b4f5f"],
    offset: { latitude: 0.011, longitude: -0.006 },
    map: { x: "72%", y: "34%" },
  },
  {
    id: 2,
    name: "Selena Park",
    initials: "SP",
    category: "plumbing",
    rating: 4.8,
    reviews: 174,
    badges: ["Verified", "Licensed", "Insured"],
    skills: ["Pipe repair", "Fixture installs", "Sump pumps"],
    description: "Handles residential plumbing repairs with a strong record on fixture swaps and sump pump issues.",
    experience: "6 years",
    price: "$115/hr",
    eta: 12,
    vehicle: "Teal Utility Van",
    code: "FN-1924",
    colors: ["#7f9a71", "#0b4f5f"],
    offset: { latitude: 0.006, longitude: 0.004 },
    map: { x: "62%", y: "49%" },
  },
  {
    id: 3,
    name: "Omar Blake",
    initials: "OB",
    category: "plumbing",
    rating: 4.7,
    reviews: 119,
    badges: ["Verified", "Licensed", "Background check"],
    skills: ["Emergency shutoff", "Toilets", "Leak tracing"],
    description: "Emergency-first plumber who specializes in leak tracing and fast shutoff support.",
    experience: "9 years",
    price: "$109/hr",
    eta: 17,
    vehicle: "Red Service Pickup",
    code: "FN-4253",
    colors: ["#c94e43", "#c76b44"],
    offset: { latitude: -0.004, longitude: 0.012 },
    map: { x: "80%", y: "46%" },
  },
  {
    id: 4,
    name: "Alina Torres",
    initials: "AT",
    category: "electrician",
    rating: 4.8,
    reviews: 194,
    badges: ["Verified", "Licensed", "Insured"],
    skills: ["Panels", "Outlet repair", "Fixture installs"],
    description: "Residential electrician for panel issues, dead outlets, and safe fixture replacements.",
    experience: "7 years",
    price: "$145/hr",
    eta: 14,
    vehicle: "Blue Service SUV",
    code: "FN-3118",
    colors: ["#d7aa55", "#c76b44"],
    offset: { latitude: 0.008, longitude: -0.014 },
    map: { x: "30%", y: "42%" },
  },
  {
    id: 5,
    name: "Nico Alvarez",
    initials: "NA",
    category: "electrician",
    rating: 4.9,
    reviews: 287,
    badges: ["Verified", "Licensed", "Insured"],
    skills: ["Breaker panels", "Outages", "EV chargers"],
    description: "High-experience electrician with strong ratings for outage diagnosis and breaker panel work.",
    experience: "11 years",
    price: "$158/hr",
    eta: 9,
    vehicle: "Black Cargo Van",
    code: "FN-5308",
    colors: ["#25343a", "#d7aa55"],
    offset: { latitude: 0.017, longitude: -0.011 },
    map: { x: "24%", y: "28%" },
  },
  {
    id: 6,
    name: "Devon Price",
    initials: "DP",
    category: "locksmith",
    rating: 4.9,
    reviews: 321,
    badges: ["Verified", "Background check", "24/7"],
    skills: ["Lockouts", "Rekeying", "Smart locks"],
    description: "24/7 locksmith for lockouts, rekeying, and quick entry support without property damage.",
    experience: "10 years",
    price: "$99 flat",
    eta: 8,
    vehicle: "Grey Compact Van",
    code: "FN-1177",
    colors: ["#c94e43", "#912d3a"],
    offset: { latitude: -0.013, longitude: 0.003 },
    map: { x: "58%", y: "64%" },
  },
  {
    id: 7,
    name: "Harper Quinn",
    initials: "HQ",
    category: "locksmith",
    rating: 4.8,
    reviews: 205,
    badges: ["Verified", "Background check", "Insured"],
    skills: ["House lockouts", "Deadbolts", "Mailbox keys"],
    description: "Trusted locksmith with strong customer reviews on deadbolts, mailboxes, and home entry jobs.",
    experience: "5 years",
    price: "$109 flat",
    eta: 11,
    vehicle: "Slate Hatchback",
    code: "FN-9131",
    colors: ["#4f6a78", "#0b4f5f"],
    offset: { latitude: -0.018, longitude: -0.004 },
    map: { x: "47%", y: "74%" },
  },
  {
    id: 8,
    name: "Priya Shah",
    initials: "PS",
    category: "hvac",
    rating: 4.7,
    reviews: 162,
    badges: ["Verified", "Licensed", "EPA certified"],
    skills: ["AC repair", "Thermostats", "Airflow issues"],
    description: "HVAC technician for no-cool calls, thermostat faults, and low-airflow problems.",
    experience: "8 years",
    price: "$155/hr",
    eta: 18,
    vehicle: "Silver Sprinter",
    code: "FN-6672",
    colors: ["#0b4f5f", "#7f9a71"],
    offset: { latitude: 0.021, longitude: 0.002 },
    map: { x: "42%", y: "25%" },
  },
  {
    id: 9,
    name: "Jonah Ellis",
    initials: "JE",
    category: "appliance",
    rating: 4.8,
    reviews: 142,
    badges: ["Verified", "Factory trained", "Insured"],
    skills: ["Dishwashers", "Refrigerators", "Laundry"],
    description: "Appliance repair specialist for refrigerators, dishwashers, and laundry systems.",
    experience: "7 years",
    price: "$125/hr",
    eta: 16,
    vehicle: "Black Wagon",
    code: "FN-8022",
    colors: ["#4f6a78", "#25343a"],
    offset: { latitude: -0.006, longitude: -0.017 },
    map: { x: "18%", y: "58%" },
  },
  {
    id: 10,
    name: "Maya Collins",
    initials: "MC",
    category: "handyman",
    rating: 4.8,
    reviews: 207,
    badges: ["Verified", "Insured", "Top rated"],
    skills: ["TV mounting", "Assembly", "Drywall patching"],
    description: "Versatile handyman for furniture assembly, mounting, and clean drywall touch-up work.",
    experience: "6 years",
    price: "$110/hr",
    eta: 12,
    vehicle: "Copper Utility Truck",
    code: "FN-5409",
    colors: ["#c76b44", "#0e766e"],
    offset: { latitude: -0.009, longitude: 0.016 },
    map: { x: "82%", y: "62%" },
  },
];

const state = {
  flowStep: 0,
  flowCompleted: false,
  authStep: 2,
  hasBooking: false,
  paymentCompleted: false,
  partnerApplicationSubmitted: false,
  selectedCategory: "plumbing",
  urgency: "asap",
  selectedProfessionalId: 1,
  paymentMethod: "card",
  tip: 0,
  rating: 5,
  photoName: "",
  accountName: "",
  accountEmail: "",
  accountPhone: "",
  savedCard: null,
  showNewCardEntry: false,
  userLocation: { ...defaultLocation, accuracy: null, source: "fallback" },
  currentLocationText: "Detecting location...",
  favorites: new Set([1, 6]),
  history: [
    { title: "Garbage disposal reset", detail: "Marcus Reed - March 4", category: "plumbing" },
    { title: "Front door rekey", detail: "Devon Price - February 21", category: "locksmith" },
  ],
  notifications: [
    { title: "Marcus accepted the job", detail: "Arriving in 10 minutes." },
    { title: "Dispatch secured", detail: "Technician identity has been verified." },
  ],
  chat: [{ author: "pro", text: "I have the replacement fittings in the van. See you shortly." }],
  eta: 10,
  trackingStage: 0,
};


const statusSteps = [
  "Booked",
  "On the way",
  "Arrived",
  "Job in progress",
  "Job complete",
];

const emergencyMap = {
  "water leak": {
    category: "plumbing",
    prompt: "Emergency water leak in the kitchen. Need shutoff support and leak repair immediately.",
  },
  "power outage": {
    category: "electrician",
    prompt: "Power outage in part of the house. Breakers checked already. Need urgent electrical diagnosis.",
  },
  "locked out": {
    category: "locksmith",
    prompt: "Locked out of the home and need immediate entry assistance.",
  },
};

const categoryGrid = document.getElementById("category-grid");
const profilesList = document.getElementById("profiles-list");
const issueInput = document.getElementById("issue-input");
const searchInput = document.getElementById("search-input");
const photoInput = document.getElementById("photo-input");
const photoName = document.getElementById("photo-name");
const urgencyToggle = document.getElementById("urgency-toggle");
const scheduleInput = document.getElementById("schedule-input");
const estimateValue = document.getElementById("estimate-value");
const aiSuggestion = document.getElementById("ai-suggestion");
const matchSummary = document.getElementById("match-summary");
const profilesSummary = document.getElementById("profiles-summary");
const trackingTitle = document.getElementById("tracking-title");
const statusPill = document.getElementById("status-pill");
const etaValue = document.getElementById("eta-value");
const heroEta = document.getElementById("hero-eta");
const heroPro = document.getElementById("hero-pro");
const vehicleValue = document.getElementById("vehicle-value");
const codeValue = document.getElementById("code-value");
const statusList = document.getElementById("status-list");
const trackerLocation = document.getElementById("tracker-location");
const trackerDistance = document.getElementById("tracker-distance");
const trackerEta = document.getElementById("tracker-eta");
const trackerProgressBar = document.getElementById("tracker-progress-bar");
const chatThread = document.getElementById("chat-thread");
const chatInput = document.getElementById("chat-input");
const paymentMethods = document.getElementById("payment-methods");
const tipRow = document.getElementById("tip-row");
const serviceCost = document.getElementById("service-cost");
const laborCost = document.getElementById("labor-cost");
const platformCost = document.getElementById("platform-cost");
const tipCost = document.getElementById("tip-cost");
const payButton = document.getElementById("pay-button");
const reviewPanel = document.getElementById("review-panel");
const starRow = document.getElementById("star-row");
const favoritesList = document.getElementById("favorites-list");
const historyList = document.getElementById("history-list");
const notificationsList = document.getElementById("notifications-list");
const mapPins = document.getElementById("map-pins");
const userLocationMarker = document.getElementById("user-location-marker");
const vanMarker = document.getElementById("van-marker");
const routeLine = document.querySelector(".route-line");
const locationPill = document.getElementById("location-pill");
const bookingFooterPro = document.getElementById("booking-footer-pro");
const mapBookProName = document.getElementById("map-book-pro-name");
const flowShell = document.getElementById("flow-shell");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const guestForm = document.getElementById("guest-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const signupName = document.getElementById("signup-name");
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const openLoginButton = document.getElementById("open-login");
const openGuestButton = document.getElementById("open-guest");
const openSignupButton = document.getElementById("open-signup");
const openPartnerButton = document.getElementById("open-partner");
const guestName = document.getElementById("guest-name");
const guestPhone = document.getElementById("guest-phone");
const guestEmail = document.getElementById("guest-email");
const partnerForm = document.getElementById("partner-form");
const partnerName = document.getElementById("partner-name");
const partnerBusiness = document.getElementById("partner-business");
const partnerEmail = document.getElementById("partner-email");
const partnerPhone = document.getElementById("partner-phone");
const partnerTrade = document.getElementById("partner-trade");
const partnerExperience = document.getElementById("partner-experience");
const partnerArea = document.getElementById("partner-area");
const partnerLicense = document.getElementById("partner-license");
const partnerNotes = document.getElementById("partner-notes");
const partnerSuccess = document.getElementById("partner-success");
const flowServiceGrid = document.getElementById("flow-service-grid");
const servicesBackButton = document.getElementById("services-back");
const servicesContinueButton = document.getElementById("services-continue");
const flowLocationText = document.getElementById("flow-location-text");
const locationSummary = document.getElementById("location-summary");
const nearbyPreview = document.getElementById("nearby-preview");
const refreshLocationButton = document.getElementById("refresh-location");
const enterAppButton = document.getElementById("enter-app");
const mapDetailName = document.getElementById("map-detail-name");
const mapDetailService = document.getElementById("map-detail-service");
const mapDetailBio = document.getElementById("map-detail-bio");
const mapDetailRating = document.getElementById("map-detail-rating");
const mapDetailPrice = document.getElementById("map-detail-price");
const mapDetailExperience = document.getElementById("map-detail-experience");
const mapDetailBook = document.getElementById("map-detail-book");
const reviewInput = document.getElementById("review-input");

let trackingTimer;

function getSelectedService() {
  return services[state.selectedCategory];
}

function getFilteredProfessionals() {
  return professionals
    .filter((pro) => pro.category === state.selectedCategory)
    .sort((first, second) => getDistanceMiles(first) - getDistanceMiles(second));
}

function getSelectedProfessional() {
  return professionals.find((pro) => pro.id === state.selectedProfessionalId) ?? getFilteredProfessionals()[0];
}

function getReferenceLocation() {
  return state.userLocation ?? defaultLocation;
}

function getProfessionalLocation(professional) {
  const base = getReferenceLocation();
  return {
    latitude: base.latitude + professional.offset.latitude,
    longitude: base.longitude + professional.offset.longitude,
  };
}

function getDistanceMiles(professional) {
  const origin = getReferenceLocation();
  const target = getProfessionalLocation(professional);
  const toRadians = (value) => (value * Math.PI) / 180;
  const earthRadiusMiles = 3958.8;
  const dLat = toRadians(target.latitude - origin.latitude);
  const dLng = toRadians(target.longitude - origin.longitude);
  const lat1 = toRadians(origin.latitude);
  const lat2 = toRadians(target.latitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);

  return earthRadiusMiles * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

function formatDistanceMiles(value) {
  return `${value.toFixed(1)} mi away`;
}

function getMapBounds() {
  const locations = [getReferenceLocation(), ...professionals.map((pro) => getProfessionalLocation(pro))];
  const latitudes = locations.map((item) => item.latitude);
  const longitudes = locations.map((item) => item.longitude);
  const latPadding = 0.01;
  const lngPadding = 0.01;

  return {
    minLatitude: Math.min(...latitudes) - latPadding,
    maxLatitude: Math.max(...latitudes) + latPadding,
    minLongitude: Math.min(...longitudes) - lngPadding,
    maxLongitude: Math.max(...longitudes) + lngPadding,
  };
}

function projectLocationToMap(latitude, longitude) {
  const bounds = getMapBounds();
  const xRatio =
    (longitude - bounds.minLongitude) / Math.max(bounds.maxLongitude - bounds.minLongitude, 0.0001);
  const yRatio =
    (latitude - bounds.minLatitude) / Math.max(bounds.maxLatitude - bounds.minLatitude, 0.0001);

  return {
    x: `${14 + xRatio * 72}%`,
    y: `${78 - yRatio * 56}%`,
  };
}

function getServiceCountLabel(count) {
  return `${count} ${getSelectedService().name.toLowerCase()}${count === 1 ? "" : "s"}`;
}

function formatMoney(value) {
  return `$${value}`;
}

function getPaymentMethodLabel(method) {
  const labels = {
    card: "Card",
    applepay: "Apple Pay",
    wallet: "Wallet",
  };
  return labels[method] ?? method;
}

function showPage(pageId) {
  document.querySelectorAll(".app-page").forEach((page) => {
    page.classList.remove("page-active");
  });
  const target = document.getElementById(pageId);
  if (target) target.classList.add("page-active");
}

function getBookButtonLabel(profileId) {
  if (state.paymentCompleted && state.selectedProfessionalId === profileId) {
    return "Open tracker";
  }
  if (state.hasBooking && state.selectedProfessionalId === profileId) {
    return "Continue to payment";
  }
  return "Book and continue";
}

function getEstimateRange() {
  const service = getSelectedService();
  const issue = issueInput.value.toLowerCase();
  let [min, max] = service.estimate;

  if (state.urgency === "asap") {
    min += 18;
    max += 24;
  }

  if (issue.includes("emergency") || issue.includes("burst") || issue.includes("smoke")) {
    min += 22;
    max += 40;
  }

  return [min, max];
}

function getStatusDetail(index) {
  const details = [
    "Your pro is selected and the job details are locked in.",
    "Payment cleared and live tracking is active while your pro heads over.",
    "Technician has checked in at your location.",
    "Work is being completed and status updates stay live here.",
    "The visit is complete and you can leave a review when you're ready.",
  ];
  return details[index];
}

function renderFlow() {
  flowShell.classList.toggle("completed", state.flowCompleted);
  document.body.classList.toggle("flow-active", !state.flowCompleted);
  [...flowShell.querySelectorAll(".flow-layer")].forEach((layer) => {
    layer.classList.toggle("active", Number(layer.dataset.step) === state.flowStep);
  });
}


function renderPartnerState() {
  partnerSuccess.classList.toggle("hidden-panel", !state.partnerApplicationSubmitted);
}

function renderFlowServices() {
  flowServiceGrid.innerHTML = Object.values(services)
    .map((service) => {
      const active = service.id === state.selectedCategory ? "active" : "";
      return `
        <button class="layer-service-option ${active}" data-flow-service="${service.id}" type="button">
          <span class="category-icon">${service.icon}</span>
          <strong>${service.name}</strong>
          <span class="muted">${service.summary}</span>
        </button>
      `;
    })
    .join("");
}

function renderLocationLayer() {
  const pros = getFilteredProfessionals();
  flowLocationText.textContent = state.currentLocationText;
  const nearestDistance = pros[0] ? formatDistanceMiles(getDistanceMiles(pros[0])) : "nearby";
  locationSummary.textContent = `We found ${getServiceCountLabel(pros.length)} near ${state.currentLocationText}. Closest option is ${nearestDistance}.`;

  nearbyPreview.innerHTML = pros
    .slice(0, 3)
    .map(
      (pro) => `
        <article class="nearby-card nearby-card-pick" data-pick-pro="${pro.id}" role="button" tabindex="0">
          <div>
            <strong>${pro.name}</strong>
            <p class="muted">${getSelectedService().name} &middot; ${pro.experience} &middot; ${formatDistanceMiles(getDistanceMiles(pro))}</p>
          </div>
          <div class="nearby-card-meta">
            <span>${pro.price}</span>
            <span>&#9733; ${pro.rating}</span>
            <button class="flow-pick-btn" data-pick-pro="${pro.id}" type="button">Book</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderMapDetail() {
  const pro = getSelectedProfessional();
  mapDetailName.textContent = pro.name;
  mapDetailService.textContent = `${services[pro.category].name} - ${pro.experience} - ${formatDistanceMiles(getDistanceMiles(pro))}`;
  mapDetailBio.textContent = pro.description;
  mapDetailRating.textContent = `${pro.rating} / 5`;
  mapDetailPrice.textContent = pro.price;
  mapDetailExperience.textContent = pro.experience;
  mapDetailBook.textContent = getBookButtonLabel(pro.id);
  if (bookingFooterPro) bookingFooterPro.textContent = pro.name;
  if (mapBookProName) mapBookProName.textContent = pro.name;
}

function renderCategories() {
  categoryGrid.innerHTML = Object.values(services)
    .map((service) => {
      const active = service.id === state.selectedCategory ? "active" : "";
      return `
        <button class="category-button ${active}" data-category="${service.id}" type="button">
          <span class="category-icon">${service.icon}</span>
          <strong>${service.name}</strong>
          <span class="muted">${service.summary}</span>
        </button>
      `;
    })
    .join("");
}

function renderProfiles() {
  const pros = getFilteredProfessionals();
  const nearestDistance = pros[0] ? formatDistanceMiles(getDistanceMiles(pros[0])) : "nearby";
  profilesSummary.textContent = `Showing ${pros.length} ${getSelectedService().name.toLowerCase()}${pros.length > 1 ? "s" : ""} available near you. Nearest is ${nearestDistance}.`;
  matchSummary.textContent = `${pros.length} verified ${getSelectedService().name.toLowerCase()}${pros.length > 1 ? "s" : ""} are sorted from your current location.`;

  profilesList.innerHTML = pros
    .map((pro) => {
      const selected = pro.id === state.selectedProfessionalId ? "selected" : "";
      const saved = state.favorites.has(pro.id) ? "Saved" : "Save";
      const bookLabel = getBookButtonLabel(pro.id);
      return `
        <article class="profile-card ${selected}" data-profile="${pro.id}">
          <div class="avatar" style="--avatar-a:${pro.colors[0]}; --avatar-b:${pro.colors[1]};">${pro.initials}</div>
          <div>
            <div class="profile-head">
              <h3>${pro.name}</h3>
              <span class="verified-chip">&#10003; ${pro.badges[0]}</span>
            </div>
            <div class="meta-row">
              <span>&#9733; ${pro.rating} &middot; ${pro.reviews} reviews</span>
              <span>${pro.badges.slice(1).join(" &middot; ")}</span>
              <span>${formatDistanceMiles(getDistanceMiles(pro))}</span>
              <span>ETA ${pro.eta} mins</span>
            </div>
            <div class="skills-row">
              ${pro.skills.map((skill) => `<span>${skill}</span>`).join("")}
            </div>
          </div>
          <div class="profile-actions">
            <div class="price-tag">${pro.price}</div>
            <button class="favorite-button" data-favorite="${pro.id}" type="button">${saved}</button>
            <button class="primary-button" data-book="${pro.id}" type="button">${bookLabel}</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function getCurrentTravelDistanceMiles(pro) {
  const baselineDistance = getDistanceMiles(pro);
  if (!state.paymentCompleted) {
    return baselineDistance;
  }
  if (state.trackingStage >= 2) {
    return 0;
  }
  const etaRatio = Math.max(Math.min(state.eta / Math.max(pro.eta, 1), 1), 0);
  return Math.max(baselineDistance * etaRatio, 0.1);
}

function getTrackingProgressPercent() {
  if (!state.paymentCompleted) {
    return 0;
  }
  const progressByStage = [10, 36, 62, 84, 100];
  return progressByStage[state.trackingStage] ?? 0;
}

function renderTracking() {
  const pro = getSelectedProfessional();
  const trackingUnlocked = state.paymentCompleted;
  const activeStage = trackingUnlocked ? state.trackingStage : 0;
  const liveDistance = getCurrentTravelDistanceMiles(pro);

  trackingTitle.textContent = trackingUnlocked
    ? `${pro.name} is ${getTrackingCopy()}.`
    : `${pro.name} is ready once payment is confirmed.`;
  statusPill.textContent = trackingUnlocked ? statusSteps[activeStage] : "Awaiting payment";
  etaValue.textContent = trackingUnlocked ? `${state.eta} mins` : "--";
  heroEta.textContent = trackingUnlocked ? `${state.eta} mins` : "Awaiting payment";
  heroPro.textContent = pro.name;
  vehicleValue.textContent = pro.vehicle;
  codeValue.textContent = pro.code;
  trackerLocation.textContent = trackingUnlocked
    ? `${pro.name} to ${state.currentLocationText}`
    : `${pro.name} waiting for dispatch`;
  trackerEta.textContent = trackingUnlocked ? `${state.eta} mins` : "--";
  trackerProgressBar.style.width = `${getTrackingProgressPercent()}%`;
  routeLine.style.display = trackingUnlocked ? "block" : "none";
  vanMarker.style.display = trackingUnlocked ? "grid" : "none";

  if (!trackingUnlocked) {
    trackerDistance.textContent = "Complete payment to unlock the live route, distance from you, and ETA tracker.";
  } else if (state.trackingStage === 1) {
    trackerDistance.textContent = `${formatDistanceMiles(liveDistance)} from you and moving now.`;
  } else if (state.trackingStage === 2) {
    trackerDistance.textContent = `${pro.name} has arrived at your location.`;
  } else if (state.trackingStage === 3) {
    trackerDistance.textContent = `${pro.name} is working on the job right now.`;
  } else {
    trackerDistance.textContent = "The visit is complete. You can leave a review below.";
  }

  statusList.innerHTML = statusSteps
    .map((step, index) => {
      let className = "";
      if (index < activeStage) className = "done";
      if (index === activeStage) className = "current";
      return `
        <div class="status-item ${className}">
          <span class="status-dot"></span>
          <div>
            <strong>${step}</strong>
            <div class="muted">${getStatusDetail(index)}</div>
          </div>
        </div>
      `;
    })
    .join("");

  if (trackingUnlocked) {
    const travelProgress = Math.max(18 - state.eta, 0) / 18;
    const x = 72 - travelProgress * 38;
    const y = 34 + travelProgress * 12;
    vanMarker.style.setProperty("--van-x", `${x}%`);
    vanMarker.style.setProperty("--van-y", `${y}%`);
  }

  reviewPanel.classList.toggle("hidden-panel", !(trackingUnlocked && state.trackingStage === statusSteps.length - 1));
}

function getTrackingCopy() {
  const copy = {
    0: "booked",
    1: "on the way",
    2: "at your location",
    3: "working on the job",
    4: "finished the visit",
  };
  return copy[state.trackingStage];
}

function renderChat() {
  chatThread.innerHTML = state.chat
    .map((message) => `<div class="bubble ${message.author}">${message.text}</div>`)
    .join("");
  chatThread.scrollTop = chatThread.scrollHeight;
}

function renderCosts() {
  const [low] = getEstimateRange();
  const serviceCall = Math.round(low * 0.52);
  const labor = Math.round(low * 0.36);
  const platform = Math.round(low * 0.12);
  const total = serviceCall + labor + platform + state.tip;

  serviceCost.textContent = formatMoney(serviceCall);
  laborCost.textContent = formatMoney(labor);
  platformCost.textContent = formatMoney(platform);
  tipCost.textContent = formatMoney(state.tip);
  payButton.disabled = !state.hasBooking || state.paymentCompleted;
  payButton.textContent = state.paymentCompleted ? `Paid ${formatMoney(total)}` : `Pay ${formatMoney(total)} to dispatch`;
}

function renderFavorites() {
  const savedPros = professionals.filter((pro) => state.favorites.has(pro.id));
  favoritesList.innerHTML = savedPros
    .map(
      (pro) => `
        <div class="favorite-item">
          <span class="mini-title">${pro.name}</span>
          <div class="muted">${pro.category} &middot; ${pro.price} &middot; ETA ${pro.eta} mins</div>
          <button class="ghost-button" data-book="${pro.id}" type="button">Book again</button>
        </div>
      `
    )
    .join("");
}

function renderHistory() {
  historyList.innerHTML = state.history
    .map(
      (job, index) => `
        <div class="history-item">
          <span class="mini-title">${job.title}</span>
          <div class="muted">${job.detail}</div>
          <button class="ghost-button" data-rebook="${job.category}" data-history-index="${index}" type="button">Rebook service</button>
        </div>
      `
    )
    .join("");
}

function renderNotifications() {
  notificationsList.innerHTML = state.notifications
    .slice(0, 6)
    .map(
      (notice) => `
        <div class="notice-item">
          <span class="mini-title">${notice.title}</span>
          <div class="muted">${notice.detail}</div>
        </div>
      `
    )
    .join("");
}

// ── MapLibre real markers ─────────────────────────────────────────────────
let _mapReady = false;
let _mapUserMarker = null;
const _mapProMarkers = new Map(); // proId → { marker, el }

function _createUserMarkerEl() {
  const el = document.createElement("div");
  el.className = "user-location-marker";
  el.setAttribute("aria-label", "Your current location");
  el.innerHTML = "<span>You</span>";
  return el;
}

function _createProMarkerEl(pro) {
  const el = document.createElement("button");
  el.type = "button";
  el.className = "map-pin";
  el.setAttribute("data-profile", pro.id);
  el.innerHTML = `<span>${services[pro.category].icon}</span><div class="pin-label">${pro.name.split(" ")[0]}</div>`;
  el.addEventListener("click", () => selectProfessional(pro.id));
  return el;
}

function renderMapPins() {
  if (!_mapReady) return; // will be called again after map loads
  const proLoc = professionals.map((pro) => ({
    pro,
    loc: getProfessionalLocation(pro),
  }));

  // Remove markers for pros no longer needed (shouldn't happen but guard anyway)
  for (const [id, { marker }] of _mapProMarkers) {
    if (!professionals.find((p) => p.id === id)) {
      marker.remove();
      _mapProMarkers.delete(id);
    }
  }

  proLoc.forEach(({ pro, loc }) => {
    const active = pro.id === state.selectedProfessionalId;
    if (_mapProMarkers.has(pro.id)) {
      const { marker, el } = _mapProMarkers.get(pro.id);
      el.className = `map-pin${active ? " active" : ""}`;
      marker.setLngLat([loc.longitude, loc.latitude]);
    } else {
      const el = _createProMarkerEl(pro);
      el.className = `map-pin${active ? " active" : ""}`;
      const marker = new maplibregl.Marker({ element: el, anchor: "center" })
        .setLngLat([loc.longitude, loc.latitude])
        .addTo(liveMap);
      _mapProMarkers.set(pro.id, { marker, el });
    }
  });
}

function renderUserLocationMarker() {
  if (!_mapReady) return;
  const origin = getReferenceLocation();
  if (_mapUserMarker) {
    _mapUserMarker.setLngLat([origin.longitude, origin.latitude]);
  } else {
    const el = _createUserMarkerEl();
    _mapUserMarker = new maplibregl.Marker({ element: el, anchor: "center" })
      .setLngLat([origin.longitude, origin.latitude])
      .addTo(liveMap);
  }
}

function updateEstimate() {
  const [min, max] = getEstimateRange();
  estimateValue.textContent = `${formatMoney(min)} - ${formatMoney(max)}`;
  renderCosts();
}

function updateSuggestion() {
  const issue = issueInput.value.trim().toLowerCase();
  const search = searchInput.value.trim().toLowerCase();
  const service = getSelectedService();
  const combined = `${issue} ${search}`;

  if (state.photoName) {
    aiSuggestion.textContent = `Photo attached. AI suggests ${service.name.toLowerCase()} dispatch with a likely first-visit fix kit.`;
    return;
  }

  const keyword = service.keywords.find((item) => combined.includes(item));
  if (keyword) {
    aiSuggestion.textContent = `AI suggests a ${service.name.toLowerCase()} because it detected "${keyword}" in your request.`;
    return;
  }

  aiSuggestion.textContent = `AI is leaning toward ${service.name.toLowerCase()} help. Add a symptom, location, or photo for a tighter estimate.`;
}

function syncSearchToIssue() {
  if (!issueInput.value.trim() && searchInput.value.trim()) {
    issueInput.value = searchInput.value.trim();
  }
}

function resetCheckoutProgress() {
  window.clearInterval(trackingTimer);
  state.hasBooking = false;
  state.paymentCompleted = false;
  state.trackingStage = 0;
  reviewPanel.classList.add("hidden-panel");
}

function selectCategory(categoryId) {
  const categoryChanged = state.selectedCategory !== categoryId;
  if (categoryChanged) {
    resetCheckoutProgress();
  }
  state.selectedCategory = categoryId;
  const matching = getFilteredProfessionals();
  if (!matching.some((pro) => pro.id === state.selectedProfessionalId)) {
    state.selectedProfessionalId = matching[0].id;
    state.eta = matching[0].eta;
    state.trackingStage = 0;
  }
  renderAll();
}

function setFlowStep(step) {
  state.flowStep = step;
  renderFlow();
}

function completeFlow() {
  state.flowCompleted = true;
  renderFlow();
}

function selectProfessional(profileId, syncCategory = true) {
  const pro = professionals.find((item) => item.id === profileId);
  if (!pro) return;

  if (state.selectedProfessionalId !== profileId || (syncCategory && state.selectedCategory !== pro.category)) {
    resetCheckoutProgress();
  }
  state.selectedProfessionalId = profileId;
  if (syncCategory) {
    state.selectedCategory = pro.category;
  }
  state.eta = pro.eta;
  renderAll();
}

function toggleFavorite(profileId) {
  if (state.favorites.has(profileId)) {
    state.favorites.delete(profileId);
  } else {
    state.favorites.add(profileId);
  }
  renderProfiles();
  renderFavorites();
}

function bookProfessional(profileId) {
  const pro = professionals.find((item) => item.id === profileId);
  if (!pro) return;

  if (state.paymentCompleted && state.selectedProfessionalId === profileId) {
    showPage("page-tracking");
    return;
  }

  if (state.hasBooking && !state.paymentCompleted && state.selectedProfessionalId === profileId) {
    showPage("page-payment");
    return;
  }

  window.clearInterval(trackingTimer);
  state.selectedProfessionalId = profileId;
  state.selectedCategory = pro.category;
  state.eta = pro.eta;
  state.trackingStage = 0;
  state.hasBooking = true;
  state.paymentCompleted = false;
  reviewPanel.classList.add("hidden-panel");

  state.notifications.unshift({
    title: `${pro.name} booked`,
    detail: `Complete payment now to dispatch ${pro.name} and open live tracking.`,
  });

  state.chat = [{ author: "pro", text: "I'm ready to head out as soon as payment is confirmed." }];

  renderAll();
  showPage("page-payment");
}

function formatCardNumber(raw) {
  return raw.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiry(raw) {
  const digits = raw.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)} / ${digits.slice(2)}`;
}

function getCardBrand(number) {
  const n = number.replace(/\s/g, "");
  if (/^4/.test(n)) return "Visa";
  if (/^5[1-5]/.test(n)) return "Mastercard";
  if (/^3[47]/.test(n)) return "Amex";
  if (/^6/.test(n)) return "Discover";
  return "Card";
}

function renderCardFormVisibility() {
  const cardForm = document.getElementById("card-form");
  const savedCardDisplay = document.getElementById("saved-card-display");
  const newCardFields = document.getElementById("new-card-fields");
  if (!cardForm) return;

  const isCard = state.paymentMethod === "card";
  cardForm.classList.toggle("hidden-panel", !isCard);

  if (isCard) {
    const useSaved = state.savedCard !== null && !state.showNewCardEntry;
    savedCardDisplay.classList.toggle("hidden-panel", !useSaved);
    newCardFields.classList.toggle("hidden-panel", useSaved);
    if (state.savedCard) {
      const label = document.getElementById("saved-card-label");
      if (label) {
        label.textContent = `${getCardBrand(state.savedCard.number)} •••• ${state.savedCard.number.slice(-4)}`;
      }
    }
  }
}

function renderProfile() {
  const nameEl = document.getElementById("profile-name");
  const emailEl = document.getElementById("profile-email");
  const phoneEl = document.getElementById("profile-phone");
  if (nameEl) nameEl.value = state.accountName;
  if (emailEl) emailEl.value = state.accountEmail;
  if (phoneEl) phoneEl.value = state.accountPhone;

  const savedCardBlock = document.getElementById("profile-saved-card");
  const noCardMsg = document.getElementById("profile-no-card-msg");
  if (!savedCardBlock || !noCardMsg) return;

  if (state.savedCard) {
    const brand = getCardBrand(state.savedCard.number);
    savedCardBlock.classList.remove("hidden-panel");
    noCardMsg.classList.add("hidden-panel");
    savedCardBlock.innerHTML = `
      <div class="profile-card-row">
        <div class="profile-card-chip">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
          <div>
            <span class="field-label" style="margin-bottom:0.15rem;">${brand}</span>
            <strong>•••• •••• •••• ${state.savedCard.number.slice(-4)}</strong>
            <span class="muted" style="font-size:0.82rem;">Expires ${state.savedCard.expiry} &middot; ${state.savedCard.name}</span>
          </div>
        </div>
        <button id="remove-saved-card" class="ghost-button" type="button">Remove</button>
      </div>
    `;
    document.getElementById("remove-saved-card")?.addEventListener("click", () => {
      state.savedCard = null;
      state.showNewCardEntry = false;
      renderProfile();
      renderCardFormVisibility();
    });
  } else {
    savedCardBlock.classList.add("hidden-panel");
    noCardMsg.classList.remove("hidden-panel");
  }

  const profileCardForm = document.getElementById("profile-card-form");
  if (profileCardForm) profileCardForm.classList.add("hidden-panel");

  const addCardBtn = document.getElementById("add-card-btn");
  if (addCardBtn) addCardBtn.textContent = state.savedCard ? "Replace card" : "Add card";
}

function renderAll() {
  renderFlow();
  renderPartnerState();
  renderFlowServices();
  renderLocationLayer();
  renderCategories();
  renderProfiles();
  renderTracking();
  renderChat();
  renderCosts();
  renderFavorites();
  renderHistory();
  renderNotifications();
  renderMapPins();
  renderUserLocationMarker();
  renderMapDetail();
  updateEstimate();
  updateSuggestion();
  renderCardFormVisibility();
  renderProfile();
}

function advanceTracking() {
  const pro = getSelectedProfessional();

  if (!state.paymentCompleted) {
    return;
  }

  if (state.trackingStage === 1) {
    if (state.eta > 2) {
      state.eta = Math.max(state.eta - 2, 2);
    } else {
      state.trackingStage = 2;
      state.eta = 1;
      state.chat.push({ author: "pro", text: "I'm outside and walking up now." });
      state.notifications.unshift({ title: `${pro.name} arrived`, detail: "Your technician has checked in." });
    }
  } else if (state.trackingStage === 2) {
    state.trackingStage = 3;
    state.eta = 0;
    state.chat.push({ author: "pro", text: "I've started the repair. I'll confirm once the issue is fixed." });
    state.notifications.unshift({ title: "Job in progress", detail: "Work has started and pricing remains locked." });
  } else if (state.trackingStage === 3) {
    state.trackingStage = 4;
    state.chat.push({ author: "pro", text: "All set. The job is complete." });
    state.notifications.unshift({ title: "Job complete", detail: "The visit is finished and your review is ready below." });
    state.history.unshift({
      title: `${services[state.selectedCategory].name} visit completed`,
      detail: `${pro.name} - ${new Date().toLocaleDateString("en-US", { month: "long", day: "numeric" })}`,
      category: state.selectedCategory,
    });
  } else if (state.trackingStage < statusSteps.length - 1) {
    state.trackingStage += 1;
  }

  renderTracking();
  renderChat();
  renderHistory();
  renderNotifications();
}

function startTrackingDemo() {
  window.clearInterval(trackingTimer);
  trackingTimer = window.setInterval(() => {
    if (state.trackingStage >= statusSteps.length - 1) {
      window.clearInterval(trackingTimer);
      return;
    }
    advanceTracking();
  }, 7000);
}

function submitPayment() {
  if (!state.hasBooking) {
    showPage("page-booking");
    return;
  }

  if (state.paymentCompleted) {
    showPage("page-tracking");
    return;
  }

  const pro = getSelectedProfessional();
  const [estimate] = getEstimateRange();
  const total = Math.round(estimate * 0.52) + Math.round(estimate * 0.36) + Math.round(estimate * 0.12) + state.tip;

  // Capture and optionally save card data
  if (state.paymentMethod === "card" && !state.savedCard) {
    const cardNumberEl = document.getElementById("card-number");
    const cardExpiryEl = document.getElementById("card-expiry");
    const cardNameEl = document.getElementById("card-name");
    const saveCardEl = document.getElementById("save-card");
    if (cardNumberEl && saveCardEl && saveCardEl.checked) {
      const rawNumber = cardNumberEl.value.replace(/\s/g, "");
      if (rawNumber.length >= 4) {
        state.savedCard = {
          number: rawNumber,
          expiry: cardExpiryEl?.value ?? "",
          name: cardNameEl?.value?.trim() || state.accountName || "Cardholder",
        };
        state.showNewCardEntry = false;
      }
    }
  }

  saveBooking({
    userName:      state.accountName || "Guest",
    userEmail:     state.accountEmail || "",
    proName:       pro.name,
    proCategory:   pro.category,
    service:       services[pro.category].name,
    amount:        total,
    paymentMethod: getPaymentMethodLabel(state.paymentMethod),
    tip:           state.tip,
  });

  state.paymentCompleted = true;
  state.trackingStage = 1;
  state.chat.push({ author: "pro", text: "Payment confirmed. I'm on the way now." });

  state.notifications.unshift({
    title: "Payment complete",
    detail: `${formatMoney(total)} paid with ${getPaymentMethodLabel(state.paymentMethod)}. Live tracking is now active.`,
  });

  renderAll();
  showPage("page-tracking");
  startTrackingDemo();
}

function submitReview() {
  state.notifications.unshift({
    title: "Review posted",
    detail: `${state.rating} stars submitted: "${reviewInput.value.trim() || "Great experience."}"`,
  });
  renderNotifications();
  reviewInput.value = "";
}

function setRating(rating) {
  state.rating = rating;
  [...starRow.querySelectorAll(".star")].forEach((star) => {
    const starValue = Number(star.dataset.rating);
    star.classList.toggle("inactive", starValue > rating);
  });
}

function setPaymentMethod(method) {
  state.paymentMethod = method;
  [...paymentMethods.querySelectorAll(".method")].forEach((button) => {
    button.classList.toggle("active", button.dataset.payment === method);
  });
  renderCardFormVisibility();
}

function setTip(value) {
  state.tip = value;
  [...tipRow.querySelectorAll(".tip")].forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.tip) === value);
  });
  renderCosts();
}

function setUrgency(mode) {
  state.urgency = mode;
  [...urgencyToggle.querySelectorAll(".toggle")].forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
  scheduleInput.classList.toggle("visible", mode === "schedule");
  updateEstimate();
  renderProfiles();
}

function runInstantMatch() {
  syncSearchToIssue();
  updateSuggestion();

  const issue = `${searchInput.value} ${issueInput.value}`.toLowerCase();
  const matchingCategory =
    Object.values(services).find((service) => service.keywords.some((keyword) => issue.includes(keyword)))?.id ??
    state.selectedCategory;

  resetCheckoutProgress();
  state.selectedCategory = matchingCategory;
  const fastest = getFilteredProfessionals().slice().sort((a, b) => a.eta - b.eta)[0];
  state.selectedProfessionalId = fastest.id;
  state.eta = fastest.eta;
  state.trackingStage = 0;

  state.notifications.unshift({
    title: "Instant match ready",
    detail: `${fastest.name} was selected for speed, rating, and service fit. Book to continue to payment.`,
  });

  renderAll();
}

function triggerEmergency(type) {
  const emergency = emergencyMap[type];
  if (!emergency) return;
  searchInput.value = emergency.prompt;
  issueInput.value = emergency.prompt;
  setUrgency("asap");
  selectCategory(emergency.category);
  runInstantMatch();
}

function detectLocation() {
  function applyLocation(latitude, longitude, accuracy, label, source) {
    state.userLocation = { latitude, longitude, accuracy, label, source };
    state.currentLocationText = label;
    locationPill.textContent = label;
    flyMapToUser(latitude, longitude);
    const nearest = getFilteredProfessionals()[0];
    if (nearest && !state.hasBooking && !state.paymentCompleted) {
      state.selectedProfessionalId = nearest.id;
      state.eta = nearest.eta;
    }
    renderAll();
  }

  async function reverseGeocode(latitude, longitude, accuracy) {
    try {
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=14&addressdetails=1`;
      const res = await fetch(url, { headers: { "Accept-Language": "en" } });
      if (!res.ok) throw new Error("geocode failed");
      const data = await res.json();
      const a = data.address || {};
      const neighbourhood = a.neighbourhood || a.suburb || a.quarter || a.village || a.hamlet || "";
      const city = a.city || a.town || a.county || a.state_district || a.state || "";
      const label = neighbourhood && city ? `${neighbourhood}, ${city}` : city || data.display_name.split(",")[0];
      applyLocation(latitude, longitude, accuracy, label, "device");
    } catch {
      const label = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
      applyLocation(latitude, longitude, accuracy, label, "device");
    }
  }

  function flyMapToUser(latitude, longitude) {
    if (typeof liveMap !== "undefined" && _mapReady) {
      liveMap.flyTo({ center: [longitude, latitude], zoom: 14, essential: true, duration: 1400 });
    }
  }

  if (!("geolocation" in navigator)) {
    applyLocation(defaultLocation.latitude, defaultLocation.longitude, null, defaultLocation.label, "fallback");
    return;
  }

  locationPill.textContent = "Detecting location…";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const accuracy = Math.round(position.coords.accuracy);
      reverseGeocode(latitude, longitude, accuracy);
    },
    () => {
      applyLocation(defaultLocation.latitude, defaultLocation.longitude, null, defaultLocation.label, "fallback");
    },
    { enableHighAccuracy: true, maximumAge: 30000, timeout: 8000 }
  );
}

function handleCategoryClicks(event) {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  selectCategory(button.dataset.category);
}

function handleProfileClicks(event) {
  const card = event.target.closest("[data-profile]");
  const bookButton = event.target.closest("[data-book]");
  const favoriteButton = event.target.closest("[data-favorite]");

  if (card && !bookButton && !favoriteButton) {
    selectProfessional(Number(card.dataset.profile));
  }

  if (bookButton) {
    bookProfessional(Number(bookButton.dataset.book));
  }

  if (favoriteButton) {
    toggleFavorite(Number(favoriteButton.dataset.favorite));
  }
}

function handleMapPinClicks(event) {
  const pin = event.target.closest("[data-profile]");
  if (!pin) return;
  selectProfessional(Number(pin.dataset.profile));
}

function handleHubClicks(event) {
  const rebookButton = event.target.closest("[data-rebook]");
  const bookButton = event.target.closest("[data-book]");

  if (rebookButton) {
    selectCategory(rebookButton.dataset.rebook);
    runInstantMatch();
  }

  if (bookButton) {
    bookProfessional(Number(bookButton.dataset.book));
  }
}

function handleSignupSubmit(event) {
  event.preventDefault();
  state.authStep = 2;
  state.accountName = signupName.value.trim();
  state.accountEmail = signupEmail.value.trim();
  state.accountPhone = "";

  if (!state.accountName || !state.accountEmail || !signupPassword.value.trim()) {
    return;
  }

  saveUser({ type: "signup", name: state.accountName, email: state.accountEmail, phone: "" });
  setFlowStep(4);
}

function handleLoginSubmit(event) {
  event.preventDefault();
  state.authStep = 1;
  state.accountEmail = loginEmail.value.trim();
  state.accountName = state.accountEmail.split("@")[0] || "Member";
  state.accountPhone = "";

  if (!state.accountEmail || !loginPassword.value.trim()) {
    return;
  }

  saveUser({ type: "login", name: state.accountName, email: state.accountEmail, phone: "" });
  setFlowStep(4);
}

function openLogin() {
  state.authStep = 1;
  setFlowStep(1);
}

function handleGuestSubmit(event) {
  event.preventDefault();
  state.authStep = 3;
  state.accountName = guestName.value.trim();
  state.accountPhone = guestPhone.value.trim();
  state.accountEmail = guestEmail.value.trim();

  if (!state.accountName || !state.accountPhone) {
    return;
  }

  saveUser({ type: "guest", name: state.accountName, email: state.accountEmail, phone: state.accountPhone });
  setFlowStep(4);
}

function openGuest() {
  state.authStep = 3;
  setFlowStep(3);
}

function openPartner() {
  state.partnerApplicationSubmitted = false;
  partnerForm.reset();
  renderPartnerState();
  setFlowStep(6);
}

function openSignup() {
  state.authStep = 2;
  setFlowStep(2);
}

function goBackToAuth() {
  setFlowStep(state.authStep);
}

function handlePartnerSubmit(event) {
  event.preventDefault();

  if (
    !partnerName.value.trim() ||
    !partnerBusiness.value.trim() ||
    !partnerEmail.value.trim() ||
    !partnerPhone.value.trim() ||
    !partnerTrade.value ||
    !partnerExperience.value.trim() ||
    !partnerArea.value.trim()
  ) {
    return;
  }

  state.partnerApplicationSubmitted = true;
  savePartner({
    name:       partnerName.value.trim(),
    business:   partnerBusiness.value.trim(),
    email:      partnerEmail.value.trim(),
    phone:      partnerPhone.value.trim(),
    trade:      partnerTrade.value,
    experience: partnerExperience.value.trim(),
    area:       partnerArea.value.trim(),
    license:    partnerLicense.value.trim(),
    notes:      partnerNotes.value.trim(),
  });
  renderPartnerState();
}

function handleFlowServiceClicks(event) {
  const option = event.target.closest("[data-flow-service]");
  if (!option) return;
  selectCategory(option.dataset.flowService);
}

function showLocationStep() {
  setFlowStep(5);
  detectLocation();
  renderLocationLayer();
}

function openLiveMap() {
  completeFlow();
  showPage("page-map");
}

nearbyPreview.addEventListener("click", (event) => {
  const target = event.target.closest("[data-pick-pro]");
  if (!target) return;
  const proId = Number(target.dataset.pickPro);
  selectProfessional(proId);
  openLiveMap();
});

nearbyPreview.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const target = event.target.closest("[data-pick-pro]");
  if (!target) return;
  const proId = Number(target.dataset.pickPro);
  selectProfessional(proId);
  openLiveMap();
});

categoryGrid.addEventListener("click", handleCategoryClicks);
profilesList.addEventListener("click", handleProfileClicks);
favoritesList.addEventListener("click", handleHubClicks);
historyList.addEventListener("click", handleHubClicks);
mapPins.addEventListener("click", handleMapPinClicks);
flowServiceGrid.addEventListener("click", handleFlowServiceClicks);
loginForm.addEventListener("submit", handleLoginSubmit);
signupForm.addEventListener("submit", handleSignupSubmit);
guestForm.addEventListener("submit", handleGuestSubmit);
partnerForm.addEventListener("submit", handlePartnerSubmit);
openLoginButton.addEventListener("click", openLogin);
openGuestButton.addEventListener("click", openGuest);
openSignupButton.addEventListener("click", openSignup);
openPartnerButton.addEventListener("click", openPartner);
servicesBackButton.addEventListener("click", goBackToAuth);
servicesContinueButton.addEventListener("click", showLocationStep);
refreshLocationButton.addEventListener("click", detectLocation);
enterAppButton.addEventListener("click", openLiveMap);
mapDetailBook.addEventListener("click", () => {
  selectProfessional(state.selectedProfessionalId);
  showPage("page-booking");
});

[...document.querySelectorAll("[data-flow-back]")].forEach((button) => {
  button.addEventListener("click", () => setFlowStep(Number(button.dataset.flowBack)));
});

issueInput.addEventListener("input", () => {
  updateEstimate();
  updateSuggestion();
});

searchInput.addEventListener("input", updateSuggestion);

photoInput.addEventListener("change", () => {
  state.photoName = photoInput.files[0]?.name ?? "";
  photoName.textContent = state.photoName || "No file selected";
  updateSuggestion();
});

urgencyToggle.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mode]");
  if (!button) return;
  setUrgency(button.dataset.mode);
});

paymentMethods.addEventListener("click", (event) => {
  const button = event.target.closest("[data-payment]");
  if (!button) return;
  setPaymentMethod(button.dataset.payment);
});

document.getElementById("go-to-booking").addEventListener("click", () => showPage("page-booking"));
document.getElementById("back-to-map").addEventListener("click", () => showPage("page-map"));
document.getElementById("go-to-payment").addEventListener("click", () => {
  bookProfessional(state.selectedProfessionalId);
  if (state.hasBooking) showPage("page-payment");
});
document.getElementById("back-to-booking").addEventListener("click", () => showPage("page-booking"));

tipRow.addEventListener("click", (event) => {
  const button = event.target.closest("[data-tip]");
  if (!button) return;
  setTip(Number(button.dataset.tip));
});

starRow.addEventListener("click", (event) => {
  const button = event.target.closest("[data-rating]");
  if (!button) return;
  setRating(Number(button.dataset.rating));
});

starRow.addEventListener("mouseover", (event) => {
  const button = event.target.closest("[data-rating]");
  if (!button) return;
  const hoverValue = Number(button.dataset.rating);
  [...starRow.querySelectorAll(".star")].forEach((star) => {
    const v = Number(star.dataset.rating);
    star.classList.toggle("preview", v <= hoverValue);
    star.classList.toggle("inactive", v > hoverValue);
  });
});

starRow.addEventListener("mouseleave", () => {
  [...starRow.querySelectorAll(".star")].forEach((star) => {
    star.classList.remove("preview");
  });
  setRating(state.rating);
});

document.getElementById("match-button").addEventListener("click", runInstantMatch);
document.getElementById("panic-fab").addEventListener("click", () => triggerEmergency("water leak"));
locationPill.addEventListener("click", detectLocation);
document.querySelector(".emergency-dock").addEventListener("click", (event) => {
  const button = event.target.closest("[data-emergency]");
  if (!button) return;
  triggerEmergency(button.dataset.emergency);
});

document.getElementById("advance-button").addEventListener("click", advanceTracking);
document.getElementById("call-button").addEventListener("click", () => {
  state.notifications.unshift({ title: "Secure relay call started", detail: "Your number remains hidden from the technician." });
  renderNotifications();
});

document.getElementById("message-button").addEventListener("click", () => {
  state.chat.push({ author: "user", text: "Please use the side entrance when you arrive." });
  state.chat.push({ author: "pro", text: "Received. I'll head to the side entrance." });
  renderChat();
});

document.getElementById("chat-send").addEventListener("click", () => {
  const value = chatInput.value.trim();
  if (!value) return;
  state.chat.push({ author: "user", text: value });
  state.chat.push({ author: "pro", text: "Thanks, I've got it." });
  chatInput.value = "";
  renderChat();
});

payButton.addEventListener("click", submitPayment);
document.getElementById("submit-review").addEventListener("click", submitReview);

// Card number formatting
document.getElementById("card-number").addEventListener("input", (e) => {
  const cursor = e.target.selectionStart;
  const prev = e.target.value;
  e.target.value = formatCardNumber(e.target.value);
  const diff = e.target.value.length - prev.length;
  e.target.setSelectionRange(cursor + diff, cursor + diff);
});

document.getElementById("card-expiry").addEventListener("input", (e) => {
  e.target.value = formatExpiry(e.target.value);
});

document.getElementById("card-cvv").addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4);
});

// "Use different card" button in payment panel
document.getElementById("use-new-card").addEventListener("click", () => {
  state.showNewCardEntry = true;
  renderCardFormVisibility();
});

// Profile save
document.getElementById("save-profile-btn").addEventListener("click", () => {
  const n = document.getElementById("profile-name").value.trim();
  const e = document.getElementById("profile-email").value.trim();
  const p = document.getElementById("profile-phone").value.trim();
  if (n) state.accountName = n;
  if (e) state.accountEmail = e;
  if (p) state.accountPhone = p;
  const confirm = document.getElementById("profile-save-confirm");
  confirm.classList.remove("hidden-panel");
  setTimeout(() => confirm.classList.add("hidden-panel"), 2500);
  locationPill.textContent = state.accountName || locationPill.textContent;
});

// Add / replace card from profile panel
document.getElementById("add-card-btn").addEventListener("click", () => {
  const profileCardForm = document.getElementById("profile-card-form");
  profileCardForm.classList.toggle("hidden-panel");
  // Pre-fill from saved card if replacing
  if (state.savedCard) {
    document.getElementById("p-card-number").value = state.savedCard.number;
    document.getElementById("p-card-expiry").value = state.savedCard.expiry;
    document.getElementById("p-card-name").value = state.savedCard.name;
  }
});

document.getElementById("cancel-card-btn").addEventListener("click", () => {
  document.getElementById("profile-card-form").classList.add("hidden-panel");
});

document.getElementById("save-card-btn").addEventListener("click", () => {
  const num = document.getElementById("p-card-number").value.replace(/\s/g, "");
  const exp = document.getElementById("p-card-expiry").value;
  const name = document.getElementById("p-card-name").value.trim();
  if (num.length < 4) return;
  state.savedCard = { number: num, expiry: exp, name: name || state.accountName || "Cardholder" };
  state.showNewCardEntry = false;
  renderProfile();
  renderCardFormVisibility();
});

// Profile card number + expiry formatting
document.getElementById("p-card-number").addEventListener("input", (e) => {
  e.target.value = formatCardNumber(e.target.value);
});
document.getElementById("p-card-expiry").addEventListener("input", (e) => {
  e.target.value = formatExpiry(e.target.value);
});
document.getElementById("p-card-cvv").addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4);
});

renderAll();
setPaymentMethod(state.paymentMethod);
setTip(state.tip);
setRating(state.rating);

const liveMap = new maplibregl.Map({
  container: "map",
  style: "https://tiles.openfreemap.org/styles/liberty",
  center: [-71.0589, 42.3601],
  zoom: 13,
  attributionControl: false,
});

liveMap.on("load", () => {
  _mapReady = true;
  // Hide the old CSS overlay markers — real MapLibre markers take over
  userLocationMarker.style.display = "none";
  mapPins.style.display = "none";
  renderUserLocationMarker();
  renderMapPins();
  // If geolocation resolved before the map finished loading, fly now
  const loc = state.userLocation;
  if (loc && loc.source !== "fallback") {
    liveMap.flyTo({ center: [loc.longitude, loc.latitude], zoom: 14, essential: true, duration: 1400 });
  }
});

detectLocation();
