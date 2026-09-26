import { trip, days, paceGuide, optionGroups, bookings, transportOptions, travelApps, edinburghFoodAreas, prepTasks, sources } from './data.js'

const app = document.querySelector('#app')
const store = {
  get(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback } catch { return fallback }
  },
  set(key, value) { localStorage.setItem(key, JSON.stringify(value)) }
}

const iconPaths = {
  compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-2.3 5.7L8 16l2.3-5.7z"/>',
  home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  wallet: '<path d="M20 7V5a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v12H5a3 3 0 0 1-3-3V6"/><path d="M16 13h4"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  plane: '<path d="M22 2 9.6 14.4M15 6l-7-3-2 2 5 5M18 13l3 7-2 2-5-5M9.5 14.5 5 19"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4"/>',
  download: '<path d="M12 3v12m0 0 5-5m-5 5-5-5"/><path d="M5 21h14"/>',
  map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/>',
  route: '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M6 17c0-5 12-5 12-10"/>',
  cloud: '<path d="M17.5 19H6a4 4 0 1 1 1.1-7.85A6 6 0 0 1 18.6 9.5 4.8 4.8 0 0 1 17.5 19Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/>',
  alert: '<path d="M12 3 2.5 20h19z"/><path d="M12 9v4M12 17h.01"/>',
  train: '<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M8 21l3-4M16 21l-3-4M8 8h8M8 12h.01M16 12h.01"/>',
  walk: '<circle cx="13" cy="4" r="2"/><path d="m10 22 1-7-3-3 2-5 5 2 2 4M7 22l3-5M14 15l4 7"/>',
  car: '<path d="m5 17-2-2V9l2-5h14l2 5v6l-2 2z"/><path d="M5 17v3M19 17v3M3 10h18M7 14h.01M17 14h.01"/>',
  pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  ticket: '<path d="M3 7a2 2 0 0 0 0 4v6h18v-6a2 2 0 0 0 0-4V3H3z"/><path d="M13 5v2M13 11v2M13 15v2"/>',
  external: '<path d="M15 3h6v6M10 14 21 3"/><path d="M18 13v7H4V6h7"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  upload: '<path d="M12 16V4m0 0L7 9m5-5 5 5"/><path d="M5 20h14"/>',
  x: '<path d="m6 6 12 12M18 6 6 18"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M7 7l1 14h8l1-14M10 11v6M14 11v6"/>',
  refresh: '<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  locate: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><circle cx="12" cy="12" r="8"/>',
  spark: '<path d="m12 3-1.2 4.2L7 9l3.8 1.8L12 15l1.2-4.2L17 9l-3.8-1.8zM5 15l-.7 2.3L2 18l2.3.7L5 21l.7-2.3L8 18l-2.3-.7z"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>'
}

const icon = (name) => `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name] || iconPaths.compass}</svg>`
const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char])
const parseDate = date => new Date(`${date}T12:00:00`)
const dateLabel = date => parseDate(date).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })
const longDate = date => parseDate(date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
const currency = value => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 2 }).format(value)
const inr = value => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value)
const todayISO = () => new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/London' })
const diffDays = (a, b) => Math.ceil((parseDate(a) - parseDate(b)) / 86400000)
const googleDirections = (destination, mode = 'walking') => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}&travelmode=${mode === 'transit' ? 'transit' : mode}`
const googlePlace = location => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`
const safeUrl = value => {
  try {
    const url = new URL(value)
    return ['http:', 'https:'].includes(url.protocol) ? url.href : ''
  } catch { return '' }
}

const currentDate = todayISO()
const exactDay = days.findIndex(day => day.date === currentDate)
const initialDay = exactDay >= 0 ? exactDay : currentDate < trip.start ? 0 : days.length - 1
const rateCache = store.get('northbound-fx', null)
const photoCache = store.get('northbound-photos-v4', {})
const photoRequests = new Map()
const curatedPhotos = new Map([
  ['Apple Market London', { src: 'https://live.staticflickr.com/6118/6311460049_2682a7f653.jpg', page: 'https://www.flickr.com/photos/93682235@N00/6311460049', title: 'The Covent Garden Apple Market', credit: 'chocobos · CC BY-SA 2.0' }],
  ['FRAMELESS London', { src: 'https://live.staticflickr.com/65535/54149577212_ecd17fcded_b.jpg', page: 'https://www.flickr.com/photos/50576141@N03/54149577212', title: 'FRAMELESS Immersive Art Experience', credit: "Clive G' · CC BY-NC-SA 2.0" }],
  ['Kalpna Restaurant Edinburgh', { src: 'https://live.staticflickr.com/5767/20783574782_12ccf0c6f3_b.jpg', page: 'https://www.flickr.com/photos/8026448@N06/20783574782', title: 'Kalpna Vegetarian Restaurant', credit: 'Karen V Bryan · CC BY-ND 2.0' }],
  ['The Milkman Edinburgh Cockburn Street', { src: 'https://live.staticflickr.com/4460/37878441272_571c37a895_b.jpg', page: 'https://www.flickr.com/photos/7512717@N06/37878441272', title: 'The Milkman Café, Cockburn Street', credit: 'byronv2 · CC BY-NC 2.0' }]
])
const photoSearchAliases = new Map([
  ['Apple Market London', 'Covent Garden London'],
  ['Outernet London The Now Building', 'Outernet London'],
  ['Tyndrum café break Highlands', 'Tyndrum Scotland'],
  ['Magic Potions Tavern Edinburgh', null],
  ['Department of Magic Edinburgh', null],
  ['FRAMELESS London', null],
  ['Kalpna Restaurant Edinburgh', null],
  ['Soul Vegan Edinburgh', null],
  ['Sora Diana Edinburgh', null],
  ['Black Rabbit Edinburgh Brougham Street', null],
  ['Hendersons Restaurant Edinburgh', null],
  ['Paradise Palms Edinburgh', null],
  ['FacePlant Foods Leith Edinburgh', null],
  ['Morningside Larder Edinburgh', null],
  ['Lannan Bakery Edinburgh', null]
])
const verifiedPhotoQueries = new Set([
  'Big Ben Westminster London', 'Edinburgh Castle Scotland', 'St Katharine Docks London', 'Big Ben London',
  "St James's Park London", 'Buckingham Palace London', 'The National Gallery London', 'Covent Garden London',
  'Tower of London', 'Tower Bridge London', 'Borough Market London', "Shakespeare's Globe London", 'London Eye',
  'Westminster Pier London', 'Battersea Power Station Pier', 'Battersea Power Station', "Neal's Yard London",
  'Westminster Abbey', 'Horse Guards Parade London', 'Churchill War Rooms London', 'Camden Market London',
  'Kyoto Garden Holland Park London', 'Sherlock Holmes Statue London', 'Marble Arch London',
  'Tottenham Court Road Station London', 'Outernet London The Now Building', 'Soho London', 'Royal Mile Edinburgh',
  'Calton Hill Edinburgh', 'Victoria Street Edinburgh', 'Pitlochry Scotland', 'Loch Morlich Beach', 'Aviemore Scotland',
  'Urquhart Castle', 'Glencoe Visitor Centre', 'Rannoch Moor Viewpoint A82', 'Inveruglas Pyramid',
  'Ross Fountain Edinburgh', 'The Vennel Viewpoint Edinburgh Castle', 'Edinburgh Castle', 'Cockburn Street Edinburgh',
  "Advocate's Close Edinburgh", 'St Andrew Square Edinburgh', 'Grassmarket Edinburgh', "Arthur's Seat Edinburgh",
  'Dean Village Edinburgh', 'National Gallery London', 'King’s Life Guard London', 'Kyoto Garden London',
  'Tyndrum café break Highlands', 'Edinburgh Castle Edinburgh', 'Arthur’s Seat Edinburgh'
])
const photoTones = ['sky', 'sage', 'clay', 'lavender']
const revealedItems = new Set()
let activeTransition = null

const state = {
  view: store.get('northbound-view', 'today'),
  selectedDay: store.get('northbound-day', initialDay),
  doneStops: new Set(store.get('northbound-stops', [])),
  booked: new Set(store.get('northbound-bookings', []).filter(id => bookings.some(item => item.id === id))),
  checked: new Set(store.get('northbound-prep', []).filter(key => prepTasks.some(group => group.items.some(item => key === `${group.group}:${item}`)))),
  optionSelections: store.get('northbound-options', {}),
  groupCount: Math.min(20, Math.max(1, store.get('northbound-group', 4))),
  prepTab: 'tasks',
  weather: {},
  weatherLoading: new Set(),
  rate: rateCache?.rate || null,
  rateDate: rateCache?.date || null,
  rateLoading: false,
  flights: store.get('northbound-flights', []),
  modal: null,
  installPrompt: null,
  location: null,
  online: navigator.onLine
}

function motionAllowed() {
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function transitionRender(update, direction = 'forward') {
  const apply = () => { update(); render() }
  if (!document.startViewTransition || !motionAllowed()) { apply(); return Promise.resolve() }
  activeTransition?.skipTransition()
  document.documentElement.dataset.transition = direction
  const transition = document.startViewTransition(apply)
  activeTransition = transition
  return transition.finished.finally(() => {
    if (activeTransition !== transition) return
    activeTransition = null
    delete document.documentElement.dataset.transition
  })
}

function navItems() {
  return [
    ['today', 'home', 'Today'],
    ['trip', 'calendar', 'Trip'],
    ['money', 'wallet', 'Money'],
    ['prep', 'check', 'Prepare'],
    ['flights', 'plane', 'Flights']
  ]
}

function navMarkup(side = false) {
  return navItems().map(([id, glyph, label]) => `<button class="nav-item ${state.view === id ? 'active' : ''}" data-action="nav" data-view="${id}" aria-label="${label}">${icon(glyph)}<span>${label}</span></button>`).join('')
}

function shell(content) {
  return `<div class="app-shell">
    <aside class="sidebar">
      <a class="brand" href="#" data-action="nav" data-view="today"><span class="brand-mark">${icon('compass')}</span><span class="brand-copy"><strong>Northbound</strong><span>UK · 2026</span></span></a>
      <nav class="side-nav" aria-label="Primary">${navMarkup(true)}</nav>
      <div class="sidebar-journey"><span>London</span><i></i><span>Highlands</span><i></i><span>Edinburgh</span></div>
      <div class="side-foot"><span class="online-dot ${state.online ? '' : 'offline'}"></span>${state.online ? 'Live services available' : 'Offline mode'}<br>24–31 October · 8 days</div>
    </aside>
    <main class="main-shell" id="main">
      <header class="mobile-topbar"><a class="brand" href="#" data-action="nav" data-view="today"><span class="brand-mark">${icon('compass')}</span><span class="brand-copy"><strong>Northbound</strong><span>UK · 2026</span></span></a><button class="icon-button" data-action="share" aria-label="Share trip">${icon('share')}</button></header>
      <div class="page">${content}</div>
    </main>
    <nav class="bottom-nav" aria-label="Primary">${navMarkup()}</nav>
    ${renderModal()}
    <div class="toast" id="toast" role="status" aria-live="polite"></div>
  </div>`
}

function progressMarkup() {
  const total = prepTasks.reduce((sum, group) => sum + group.items.length, 0) + bookings.length
  const done = state.checked.size + state.booked.size
  const pct = Math.round((done / total) * 100)
  return `<div class="progress-row"><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div><span class="progress-label">${done}/${total} ready</span></div>`
}

function weatherMarkup(dayIndex = state.selectedDay) {
  const day = days[dayIndex]
  const data = state.weather[weatherKey(day)]
  if (state.weatherLoading.has(weatherKey(day)) && !data) return `<div class="card weather-card"><div class="card-top"><div><div class="eyebrow">Weather watch</div><h3>${day.city}</h3></div>${icon('cloud')}</div><div class="skeleton" style="margin-top:28px;height:40px"></div><div class="skeleton" style="margin-top:16px;width:50%"></div></div>`
  if (!data) return `<div class="card weather-card"><div class="card-top"><div><div class="eyebrow">Weather watch</div><h3>${day.city}</h3></div><span class="card-icon sun">${icon('sun')}</span></div><div class="weather-main"><div class="weather-desc"><strong>${day.weather.climate}</strong><br>Live data will refresh when connected.</div></div><div class="weather-details"><span>${icon('info')} 16-day forecast window</span></div></div>`
  const isTripForecast = data.target
  const shown = isTripForecast ? data.target : data.current
  return `<div class="card weather-card"><div class="card-top"><div><div class="eyebrow">${isTripForecast ? 'Trip forecast' : 'Live there now'}</div><h3>${day.city}</h3></div><span class="card-icon sun">${icon(weatherIcon(shown.code))}</span></div>
    <div class="weather-main"><div class="weather-temp">${Math.round(shown.temp)}°</div><div class="weather-desc">${weatherText(shown.code)}<br>${isTripForecast ? `${Math.round(shown.low)}° low` : `Feels ${Math.round(shown.feels)}°`}</div></div>
    <div class="weather-details"><span>Rain ${shown.rain ?? '—'}${typeof shown.rain === 'number' ? '%' : ''}</span><span>Wind ${Math.round(shown.wind)} km/h</span><span>${data.updated}</span></div>
    ${!isTripForecast ? `<p>Trip forecast unlocks within 16 days. ${day.weather.climate}</p>` : ''}</div>`
}

function miniConverter() {
  const converted = state.rate ? inr(10 * state.rate) : 'Connect to refresh'
  return `<div class="card"><div class="card-top"><div><div class="eyebrow">Live exchange</div><h3>£10 in rupees</h3></div><span class="card-icon coral">${icon('wallet')}</span></div><div class="stat" style="margin-top:22px">${converted}</div><p>${state.rate ? `£1 = ${state.rate.toFixed(2)} INR · ${escapeHtml(state.rateDate || 'latest')}` : 'Keyless live rate from official-source aggregator.'}</p><button class="button text" data-action="nav" data-view="money">Open converter ${icon('arrow')}</button></div>`
}

function tripStatus() {
  const until = diffDays(trip.start, currentDate)
  const after = diffDays(currentDate, trip.end)
  if (until > 0) return { eyebrow: `${until} days to departure`, title: 'The UK, thoughtfully planned.', copy: 'One calm, practical home for every route, reservation, weather call and shared decision.' }
  if (after > 0) return { eyebrow: 'Journey complete', title: 'Eight days, beautifully kept.', copy: 'Your route, saved details and memories remain available offline.' }
  const day = days[exactDay >= 0 ? exactDay : state.selectedDay]
  return { eyebrow: `Day ${(exactDay >= 0 ? exactDay : state.selectedDay) + 1} · ${day.city}`, title: day.focus, copy: day.summary }
}

function renderToday() {
  const status = tripStatus()
  const dayIndex = exactDay >= 0 ? exactDay : state.selectedDay
  const day = days[dayIndex]
  const nextBookings = bookings.filter(item => !state.booked.has(item.id)).slice(0, 3)
  return `<section class="hero">
    <div class="hero-copy"><div class="eyebrow">${status.eyebrow}</div><h1>${status.title}</h1><p>${status.copy}</p>
    <div class="hero-actions"><button class="button" data-action="nav" data-view="trip">Explore the days ${icon('arrow')}</button><button class="button ghost" data-action="share">${icon('share')} Share</button><button class="button ghost" data-action="install">${icon('download')} Install app</button></div>
    <div class="hero-meta"><span class="meta-pill">${icon('calendar')} 24–31 October 2026</span><span class="meta-pill">${icon('users')} Group-ready</span><span class="meta-pill">${icon('shield')} Offline access</span></div></div>
    <div class="hero-visual" aria-label="Iconic views of London and Edinburgh">${photoFigure('Big Ben Westminster London', 'Big Ben in London', 'hero-place-photo hero-london')}${photoFigure('Edinburgh Castle Scotland', 'Edinburgh Castle', 'hero-place-photo hero-edinburgh')}<div class="hero-route-badge"><span>London</span>${icon('arrow')}<span>Edinburgh</span></div></div>
  </section>
  <section class="section"><div class="quick-actions">
    <button class="quick-action" data-action="nav" data-view="trip"><span class="card-icon coral">${icon('route')}</span>Today’s route</button>
    <button class="quick-action" data-action="nav" data-view="money"><span class="card-icon sun">${icon('wallet')}</span>Convert money</button>
    <button class="quick-action" data-action="nav" data-view="prep"><span class="card-icon">${icon('ticket')}</span>Reservations</button>
    <button class="quick-action" data-action="nav" data-view="flights"><span class="card-icon">${icon('plane')}</span>Flight details</button>
  </div></section>
  <section class="section"><div class="grid three">${weatherMarkup(dayIndex)}${miniConverter()}
    <div class="card"><div class="card-top"><div><div class="eyebrow">Trip readiness</div><h3>Before you go</h3></div><span class="card-icon">${icon('check')}</span></div><div style="margin-top:24px">${progressMarkup()}</div><p>Bookings, documents, packing and final checks stay synced on this device.</p><button class="button text" data-action="nav" data-view="prep">Continue checklist ${icon('arrow')}</button></div>
  </div></section>
  <section class="section"><div class="section-head"><div><div class="eyebrow">Day ${(dayIndex + 1).toString().padStart(2, '0')}</div><h2>${longDate(day.date)}</h2><p>${day.focus}</p></div><button class="section-link" data-action="nav" data-view="trip">Full day</button></div>
    <div class="grid three">${day.stops.slice(0, 3).map(stop => `<div class="card flat"><div class="card-top"><div><span class="stop-time">${stop.time}</span><h3 style="margin-top:5px">${stop.title}</h3></div><span class="stop-type">${stop.type}</span></div><p>${stop.route}</p></div>`).join('')}</div>
  </section>
  <section class="section"><div class="section-head"><div><div class="eyebrow">Do next</div><h2>Priority bookings</h2></div><button class="section-link" data-action="prep-tab" data-tab="bookings">See all</button></div>
    <div class="grid three">${nextBookings.length ? nextBookings.map(bookingCard).join('') : `<div class="card"><h3>All key bookings marked done</h3><p>Keep confirmations downloaded and reconfirm hours 48 hours before.</p></div>`}</div>
  </section>
  <section class="section"><div class="grid two">
    <div class="card highlight"><div class="card-top"><div><div class="eyebrow">Use your location</div><h3>${state.location ? locationSummary(dayIndex) : 'Navigate from wherever you are'}</h3></div><span class="card-icon coral">${icon('locate')}</span></div><p>Location is only used in this browser and is never uploaded by Northbound.</p><div class="stop-actions"><button class="button secondary small" data-action="locate">${icon('locate')} ${state.location ? 'Refresh location' : 'Use my location'}</button>${state.location ? `<a class="button secondary small" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=vegetarian+food&query_place_id=">${icon('map')} Nearby food</a>` : ''}</div></div>
    <div class="card"><div class="card-top"><div><div class="eyebrow">Practical correction</div><h3>Plan changed for daylight</h3></div><span class="card-icon sun">${icon('sun')}</span></div><p>Calton Hill now lands at the 16:43 sunset, and FRAMELESS moves to Monday to avoid a cross-London backtrack and Sunday closing conflict.</p><button class="button text" data-action="nav" data-view="trip">Review smart itinerary ${icon('arrow')}</button></div>
  </div></section>`
}

function renderDateStrip() {
  return `<div class="day-switcher"><div class="day-switcher-label"><span>8-day field guide</span><strong>${state.selectedDay + 1} / ${days.length}</strong></div><div class="date-strip" role="tablist" aria-label="Trip days">${days.map((day, index) => `<button class="date-chip ${state.selectedDay === index ? 'active' : ''}" data-action="select-day" data-index="${index}" role="tab" aria-selected="${state.selectedDay === index}"><span class="dow">${parseDate(day.date).toLocaleDateString('en-GB', { weekday: 'short' })}</span><span class="num">${parseDate(day.date).getDate()}</span><span class="city">${day.city}</span></button>`).join('')}</div></div>`
}

function renderDayNavigator() {
  const day = days[state.selectedDay]
  const previous = state.selectedDay - 1
  const next = state.selectedDay + 1
  return `<nav class="day-navigator" aria-label="Change itinerary day"><button data-action="select-day" data-index="${previous}" ${previous < 0 ? 'disabled' : ''} aria-label="Previous day">${icon('chevron')}<span>Previous</span></button><button class="day-navigator-current" data-action="scroll-day-top"><small>Day ${state.selectedDay + 1} of ${days.length}</small><strong>${dateLabel(day.date)} · ${day.city}</strong></button><button data-action="select-day" data-index="${next}" ${next >= days.length ? 'disabled' : ''} aria-label="Next day"><span>Next</span>${icon('chevron')}</button></nav>`
}

function stopKey(day, stop) { return `${day.date}:${stop.time}:${stop.title}` }
function modeIcon(mode) { return mode === 'driving' ? 'car' : mode === 'transit' ? 'train' : 'walk' }
function dayOptionGroups(date) { return optionGroups.filter(group => group.date === date) }
function selectedOptionCost(date) {
  return dayOptionGroups(date).reduce((total, group) => {
    const selected = state.optionSelections[group.id]
    const option = group.options.find(item => item.id === selected)
    return total + (typeof option?.cost === 'number' ? option.cost : 0)
  }, 0)
}
function visibleStops(day) {
  const groups = dayOptionGroups(day.date)
  return day.stops.filter(stop => {
    const optionId = stop.branch || stop.optionId
    if (!optionId) return true
    const group = groups.find(item => item.options.some(option => option.id === optionId))
    if (!group) return true
    const selected = state.optionSelections[group.id]
    if (!selected) return true
    if (selected === 'skip') return false
    return selected === optionId
  })
}
function photoEligible(stop) {
  return !['Tube', 'Bus', 'Transfer', 'Drive', 'Deadline', 'Stay', 'Prepaid'].includes(stop.type) && !stop.title.includes('→')
}
function photoTone(value) {
  const hash = [...value].reduce((total, char) => total + char.charCodeAt(0), 0)
  return photoTones[hash % photoTones.length]
}
function photoFigure(query, title, extraClass = '') {
  return `<figure class="place-photo ${extraClass}" data-photo-query="${escapeHtml(query)}" data-photo-title="${escapeHtml(title)}" data-photo-tone="${photoTone(title)}"><div class="photo-placeholder">${icon('spark')}<span>Loading place photo</span></div></figure>`
}
function optionCostMarkup(option) {
  if (option.costLabel) return option.costLabel
  if (option.cost === 0) return 'Free'
  if (typeof option.cost === 'number') return `£${option.cost.toFixed(option.cost % 1 ? 2 : 0)}${state.rate ? ` · ${inr(option.cost * state.rate)}` : ''}`
  return 'Check live price'
}
function optionsMarkup(day) {
  const groups = dayOptionGroups(day.date)
  if (!groups.length) return ''
  return `<section class="section option-section"><div class="section-head"><div><div class="eyebrow">Build your version</div><h2>Optional choices</h2><p>Open a card to compare time, walking and trade-offs. Your selection stays on this device and exclusive branches automatically filter the timeline.</p></div></div>${groups.map(group => {
    const selected = state.optionSelections[group.id]
    const selectedOption = group.options.find(option => option.id === selected)
    return `<article class="option-group"><div class="option-group-head"><div><h3>${group.title}</h3><p>${group.description}</p></div><span class="selection-status ${selected ? 'decided' : ''}">${selected === 'skip' ? 'Skipping' : selectedOption ? `Selected: ${selectedOption.name}` : 'Undecided'}</span></div><div class="option-grid option-deck" role="list" aria-label="${escapeHtml(group.title)}">${group.options.map(option => {
      const expanded = selected === option.id
      return `<article class="choice-card motion-reveal ${expanded ? 'selected expanded' : ''}" data-motion-key="option:${group.id}:${option.id}" role="listitem">${photoFigure(`${option.name} ${day.city}`, option.name, 'choice-photo')}<div class="choice-body"><div class="card-top"><div><span class="stop-type">${option.setting}</span><h3>${option.name}</h3></div>${option.recommended ? '<span class="winner">Recommended</span>' : ''}</div><div class="choice-cost">${optionCostMarkup(option)}</div><button class="choice-card-toggle" data-action="toggle-option-card" aria-expanded="${expanded}"><span>${expanded ? 'Hide details' : 'View details'}</span>${icon('chevron')}</button><div class="choice-details" aria-hidden="${!expanded}"><div class="choice-details-inner"><div class="choice-meta"><span>${icon('clock')} ${option.duration}</span><span>${icon('walk')} ${option.walking}</span></div><p><strong>Best for:</strong> ${option.bestFor}</p><p><strong>Trade-off:</strong> ${option.tradeoff}</p><button class="button ${expanded ? 'secondary' : ''} small full" data-action="choose-option" data-group="${group.id}" data-option="${option.id}" tabindex="${expanded ? '0' : '-1'}">${icon(expanded ? 'check' : 'plus')} ${expanded ? 'Selected' : 'Choose this'}</button></div></div></div></article>`
    }).join('')}</div><div class="option-group-actions">${group.allowSkip !== false ? `<button class="button text small" data-action="choose-option" data-group="${group.id}" data-option="skip">Skip this optional choice</button>` : ''}${selected ? `<button class="button text small" data-action="reset-option" data-group="${group.id}">Reset to undecided</button>` : ''}</div></article>`
  }).join('')}</section>`
}

function foodGuideMarkup(day) {
  if (day.city !== 'Edinburgh') return ''
  return `<section class="section food-section"><div class="section-head"><div><div class="eyebrow">No-egg food guide</div><h2>Eat beyond the Royal Mile</h2><p>Route-aware options around Nicolson Street, Lothian Road, Leith and Morningside. Fully vegan menus contain no egg ingredients; mixed kitchens are labelled separately.</p></div></div><div class="privacy">${icon('info')}<span>“No egg ingredients” is not the same as an allergy guarantee. If this is an allergy, contact the restaurant directly about cross-contact before ordering.</span></div><div class="food-grid">${edinburghFoodAreas.map(place => `<article class="food-card">${photoFigure(place.location, place.name, 'food-photo')}<div class="food-body"><div class="food-top"><div><span class="food-area">${place.area}</span><h3>${place.name}</h3></div><span class="food-price">${place.price}</span></div><span class="food-assurance ${place.strict ? 'strict' : 'mixed'}">${place.assurance}</span><p><strong>Best for:</strong> ${place.best}</p><p><strong>Hours:</strong> ${place.hours}</p><p class="route-fit">${icon('route')} ${place.route}</p><p class="note">${place.note}</p><div class="stop-actions"><a class="button secondary small" href="${place.url}" target="_blank" rel="noopener">Official menu ${icon('external')}</a><a class="button secondary small" href="${googleDirections(place.location, 'walking')}" target="_blank" rel="noopener">${icon('map')} Directions</a></div></div></article>`).join('')}</div></section>`
}

function photoResultRelevant(query, page) {
  const ignored = new Set(['the', 'and', 'london', 'edinburgh', 'scotland', 'restaurant', 'cafe'])
  const terms = (query.toLowerCase().match(/[a-z0-9]+/g) || []).filter(term => term.length >= 3 && !ignored.has(term))
  const result = `${page.title} ${page.thumbnail?.source || ''}`.toLowerCase()
  return !terms.length || terms.some(term => result.includes(term))
}

async function resolvePhoto(query) {
  if (curatedPhotos.has(query)) return curatedPhotos.get(query)
  if (!verifiedPhotoQueries.has(query)) return null
  const searchQuery = photoSearchAliases.has(query) ? photoSearchAliases.get(query) : query
  if (!searchQuery) return null
  if (photoCache[query] && /^https:\/\/(thumb|upload)\.wikimedia\.org\//.test(photoCache[query].src) && safeUrl(photoCache[query].page)) return photoCache[query]
  if (photoRequests.has(query)) return photoRequests.get(query)
  const request = (async () => {
    try {
      const params = new URLSearchParams({ action: 'query', generator: 'search', gsrsearch: searchQuery, gsrlimit: '3', prop: 'pageimages|info', piprop: 'thumbnail', pithumbsize: '960', inprop: 'url', format: 'json', origin: '*' })
      const response = await fetch(`https://en.wikipedia.org/w/api.php?${params}`)
      if (!response.ok) throw new Error('Photo unavailable')
      const data = await response.json()
      const pages = Object.values(data.query?.pages || {}).sort((a, b) => (a.index ?? 99) - (b.index ?? 99))
      const page = pages.find(item => item.thumbnail?.source && /^https:\/\/(thumb|upload)\.wikimedia\.org\//.test(item.thumbnail.source) && photoResultRelevant(searchQuery, item) && !/(logo|wordmark|icon|coat of arms|flag)/i.test(`${item.title} ${item.thumbnail.source}`))
      if (!page) return null
      const photo = { src: page.thumbnail.source, page: page.fullurl, title: page.title, credit: 'Wikimedia' }
      photoCache[query] = photo
      const trimmed = Object.fromEntries(Object.entries(photoCache).slice(-100))
      store.set('northbound-photos-v4', trimmed)
      return photo
    } catch { return null }
    finally { photoRequests.delete(query) }
  })()
  photoRequests.set(query, request)
  return request
}

function illustratedPhotoMarkup(figure) {
  const title = figure.dataset.photoTitle
  return `<div class="photo-placeholder"><span class="photo-placeholder-mark">${icon('spark')}</span><strong>${escapeHtml(title)}</strong><small>Illustrated location card</small><a href="${googlePlace(figure.dataset.photoQuery)}" target="_blank" rel="noopener">${icon('map')} View on map</a></div>`
}

async function loadPhoto(figure) {
  if (!figure?.isConnected || figure.dataset.loading) return
  figure.dataset.loading = 'true'
  const photo = await resolvePhoto(figure.dataset.photoQuery)
  if (!figure.isConnected) return
  if (!photo) { figure.classList.add('photo-unavailable', 'photo-ready'); figure.innerHTML = illustratedPhotoMarkup(figure); return }
  figure.innerHTML = `<img class="photo-backdrop" src="${escapeHtml(photo.src)}" alt="" aria-hidden="true" loading="lazy" referrerpolicy="no-referrer"><img class="photo-main" src="${escapeHtml(photo.src)}" alt="${escapeHtml(figure.dataset.photoTitle)}" loading="lazy" referrerpolicy="no-referrer"><figcaption><span>${escapeHtml(photo.title)}</span><a href="${escapeHtml(safeUrl(photo.page))}" target="_blank" rel="noopener">${escapeHtml(photo.credit || 'Source')} ${icon('external')}</a></figcaption>`
  const image = figure.querySelector('.photo-main')
  const reveal = () => requestAnimationFrame(() => figure.classList.add('photo-ready'))
  if (image.complete) reveal()
  else image.addEventListener('load', reveal, { once: true })
}

function hydratePhotos() {
  const figures = [...document.querySelectorAll('[data-photo-query]')]
  if (!('IntersectionObserver' in window)) { figures.forEach(loadPhoto); return }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return
    observer.unobserve(entry.target)
    loadPhoto(entry.target)
  }), { rootMargin: '300px' })
  figures.forEach(figure => observer.observe(figure))
}

function hydrateMotion() {
  const items = [...document.querySelectorAll('[data-motion-key]')]
  if (!motionAllowed() || !('IntersectionObserver' in window)) {
    items.forEach(item => item.classList.add('is-visible'))
    return
  }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return
    observer.unobserve(entry.target)
    revealedItems.add(entry.target.dataset.motionKey)
    entry.target.classList.add('is-visible')
  }), { rootMargin: '0px 0px -8% 0px', threshold: .08 })
  items.forEach((item, index) => {
    if (revealedItems.has(item.dataset.motionKey)) item.classList.add('is-visible')
    else {
      item.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 55}ms`)
      observer.observe(item)
    }
  })
}

function centerActiveDay() {
  document.querySelector('.date-chip.active')?.scrollIntoView({ behavior: motionAllowed() ? 'smooth' : 'auto', block: 'nearest', inline: 'center' })
}

function stopMarkup(day, stop) {
  const key = stopKey(day, stop)
  const done = state.doneStops.has(key)
  const hasPhoto = photoEligible(stop)
  const optionId = stop.branch || stop.optionId
  const selected = optionId && Object.values(state.optionSelections).includes(optionId)
  return `<article class="stop-card motion-reveal ${done ? 'done' : ''} ${selected ? 'selected-option' : ''} ${hasPhoto ? 'image-stop' : 'compact-stop'}" data-motion-key="stop:${escapeHtml(key)}">
    <div class="stop-clock">${stop.time}<br><span style="color:var(--muted);font-weight:500">${stop.end || ''}</span></div>
    <div class="stop-dot">${icon(done ? 'check' : modeIcon(stop.mode))}</div>
    <div class="stop-body"><div class="stop-head"><div><span class="stop-time">${stop.time}–${stop.end || ''}</span><h3 class="stop-title">${stop.title}</h3></div><span class="stop-type">${stop.type}</span></div>
      ${hasPhoto ? photoFigure(stop.location, stop.title, 'stop-photo') : ''}
      ${stop.arriveBy || stop.startsAt ? `<div class="timing-strip">${stop.arriveBy ? `<span>${icon('pin')}<small>Be there by</small><strong>${stop.arriveBy}</strong></span>` : ''}${stop.startsAt ? `<span>${icon('clock')}<small>Starts / closes</small><strong>${stop.startsAt}</strong></span>` : ''}</div>` : ''}
      <div class="stop-route">${icon('route')}<span><strong>How to get there</strong><br>${stop.route}</span></div>
      <p class="stop-detail">${stop.detail}${stop.cost ? ` <strong>Cost: ${stop.cost}.</strong>` : ''}</p>
      ${stop.dropOptions ? `<div class="boat-fares"><div class="boat-fares-head"><div><strong>Where can you get off?</strong><span>Fare order: Sunday contactless / online or app / pier machine</span></div><span class="winner">Current 2026 fares</span></div><div class="boat-fare-list">${stop.dropOptions.map(option => `<div class="boat-fare-row ${option.recommended ? 'recommended' : ''}"><div><strong>${option.name}${option.recommended ? ' · Recommended' : ''}</strong><span>${option.time} · ${option.ride} · ${option.zone}</span></div><div class="boat-price">${option.fare}</div><p>${option.note}</p></div>`).join('')}</div><p class="note">Prices are current adult references for 25 October 2026. River travel is not included in TfL daily capping. Groups of 10 or more can request an advance 10% group discount.</p></div>` : ''}
      <div class="stop-actions"><a class="button secondary small" href="${googleDirections(stop.location, stop.mode)}" target="_blank" rel="noopener">${icon('route')} Directions</a><a class="button secondary small" href="${googlePlace(stop.location)}" target="_blank" rel="noopener">${icon('map')} Map</a>${stop.booking ? `<button class="button small" data-action="booking-link" data-booking="${stop.booking}">${icon('ticket')} Official booking</button>` : ''}<button class="done-toggle" data-action="toggle-stop" data-key="${escapeHtml(key)}">${icon(done ? 'check' : 'plus')} ${done ? 'Completed' : 'Mark done'}</button></div>
    </div>
  </article>`
}

function renderTrip() {
  const day = days[state.selectedDay]
  const pace = paceGuide[day.date]
  const visible = visibleStops(day)
  const finish = visible[visible.length - 1]?.end || visible[visible.length - 1]?.time || '—'
  const theme = day.city.toLowerCase().replaceAll(' ', '-')
  const atmosphere = weatherMood(day)
  const forecastCode = state.weather[weatherKey(day)]?.target?.code
  return `<div class="trip-view theme-${theme} weather-${atmosphere.mood}" data-weather-source="${atmosphere.forecast ? 'forecast' : 'seasonal'}">${renderDateStrip()}
    <section class="day-hero">${weatherAtmosphere()}<div class="day-hero-copy"><div class="day-number"><span>${state.selectedDay + 1}</span>${day.kicker} · ${longDate(day.date)}</div><h1>${day.focus}</h1><p>${day.summary}</p><div class="day-facts"><span>${icon('pin')} ${day.city}</span><span>${icon('clock')} ${visible.length} planned stops</span><span>${icon('spark')} Finish around ${finish}</span><span class="forecast-fact">${icon(weatherIcon(forecastCode))} ${atmosphere.label}</span></div><div class="hero-actions"><a class="button" href="${googleDirections(day.stops[0].location, day.stops[0].mode)}" target="_blank" rel="noopener">${icon('route')} Start route</a><button class="button secondary" data-action="share-day">${icon('share')} Share day</button></div></div><div class="day-hero-aside"><div class="day-stamp"><small>Field note</small><strong>${String(state.selectedDay + 1).padStart(2, '0')}</strong><span>Northbound<br>UK · 2026</span></div>${weatherMarkup(state.selectedDay)}</div></section>
    ${optionsMarkup(day)}
    <section class="day-brief-grid"><details class="trip-notes"><summary><span class="card-icon">${icon('info')}</span><span><strong>Trip notes</strong><small>${day.alerts.length} practical checks</small></span>${icon('chevron')}</summary><div class="trip-notes-body">${day.alerts.map(note => `<div>${icon('check')}<span>${note}</span></div>`).join('')}</div></details>
    <section class="pace-card pace-${pace.level.toLowerCase().replace(' ', '-')}"><div class="pace-title"><span class="pace-level">${pace.level} pace</span><strong>${pace.label}</strong></div><p>${pace.note}</p><div class="pace-action">${icon('spark')}<span><strong>Best pressure valve</strong>${pace.action}</span></div></section>
    <section class="skip-card"><div class="skip-head"><span class="card-icon coral">${icon('check')}</span><div><div class="eyebrow">Decision ladder</div><h2>If time is tight</h2><p>Remove these in order before rushing a priority stop.</p></div></div><div class="skip-list">${pace.skip.map((item, index) => `<div class="skip-item"><span>${index + 1}</span><div><strong>${item.name}</strong><p>${item.reason}</p></div></div>`).join('')}</div></section></section>
    <section class="section route-section"><div class="section-head"><div><div class="eyebrow">One step at a time</div><h2>Your day, in motion</h2><p>Selected branches appear automatically. Timed stops show when to arrive—not only when they begin.</p></div><span class="progress-label">${visible.filter(stop => state.doneStops.has(stopKey(day, stop))).length}/${visible.length} done</span></div><div class="timeline">${visible.map(stop => stopMarkup(day, stop)).join('')}</div></section>
    ${foodGuideMarkup(day)}
    <section class="section day-outro"><div class="grid two"><div class="card highlight"><div class="card-top"><div><div class="eyebrow">Weather alternative</div><h3>When conditions turn</h3></div><span class="card-icon coral">${icon('cloud')}</span></div><p>${day.weather.fallback}</p></div>${budgetSummaryCard(day)}</div></section>${renderDayNavigator()}</div>`
}

function converterMarkup() {
  const value = state.rate ? 10 * state.rate : null
  return `<div class="converter"><div class="converter-title"><div><div class="eyebrow">GBP → INR</div><h2>Quick converter</h2></div><span class="rate-badge">${state.rate ? `£1 = ₹${state.rate.toFixed(2)}` : state.rateLoading ? 'Refreshing…' : 'Rate unavailable'}</span></div>
    <div class="money-input"><span>£</span><input id="gbp-amount" inputmode="decimal" type="number" min="0" step="0.01" value="10" aria-label="Amount in British pounds"></div>
    <div class="converted"><span class="converted-label">Indian rupees</span><strong class="converted-value" id="inr-output">${value ? inr(value) : '—'}</strong></div>
    <div class="quick-amounts">${[1,5,10,20,50,100].map(amount => `<button data-action="quick-amount" data-amount="${amount}">£${amount}</button>`).join('')}<button data-action="refresh-rate">${icon('refresh')} Refresh</button></div>
    <div class="note" style="color:rgba(255,255,255,.55)">Live mid-market reference from Frankfurter · ${state.rateDate || 'connect to load'}. Your card or cash rate may include a markup.</div></div>`
}

function dayBudget(day) {
  const perPerson = day.budget.food + day.budget.local + day.budget.sights + day.budget.flex + selectedOptionCost(day.date) + (day.budget.shared / state.groupCount)
  return { perPerson, group: perPerson * state.groupCount }
}

function budgetSummaryCard(day) {
  const budget = dayBudget(day)
  return `<div class="card"><div class="card-top"><div><div class="eyebrow">Day estimate</div><h3>${currency(budget.perPerson)} per person</h3></div><span class="card-icon sun">${icon('wallet')}</span></div><p>${state.rate ? `${inr(budget.perPerson * state.rate)} at the live reference rate. ` : ''}Includes food, local travel, listed sights and a small buffer. Prepaid accommodation, London–Edinburgh rail and rental-car hire are excluded; Highlands days retain estimated fuel and parking.</p></div>`
}

function renderMoney() {
  const budgets = days.map(dayBudget)
  const perPersonTotal = budgets.reduce((sum, value) => sum + value.perPerson, 0)
  const groupTotal = budgets.reduce((sum, value) => sum + value.group, 0)
  return `<div class="section-head"><div><div class="eyebrow">Money</div><h2>Spend with context</h2><p>Live conversion and honest planning estimates for the whole group.</p></div></div>
    <div class="grid two">${converterMarkup()}<div class="card"><div class="card-top"><div><div class="eyebrow">Group settings</div><h3>How many travellers?</h3></div><span class="card-icon">${icon('users')}</span></div><div class="inline-control" style="margin-top:20px"><input id="group-count" type="number" min="1" max="20" value="${state.groupCount}" aria-label="Number of travellers"><span>people</span></div><p>Only remaining shared Highlands fuel and parking are divided across the group. Prepaid stays, rail and car hire are not counted.</p><div class="total-card" style="margin-top:18px"><div class="total-block"><span>Per person</span><strong>${currency(perPersonTotal)}</strong>${state.rate ? `<small>${inr(perPersonTotal * state.rate)}</small>` : ''}</div><div class="total-block"><span>Whole group</span><strong>${currency(groupTotal)}</strong>${state.rate ? `<small>${inr(groupTotal * state.rate)}</small>` : ''}</div></div></div></div>
    <section class="section"><div class="section-head"><div><div class="eyebrow">Daily guardrails</div><h2>Estimated budget</h2><p>Planning ranges, not quoted prices. Only estimated Highlands fuel and parking are split across ${state.groupCount}.</p></div></div><div class="card"><div class="budget-day"><div class="date" style="color:var(--muted)">Day</div><div class="budget-number" style="color:var(--muted)">Per person</div><div class="budget-number" style="color:var(--muted)">Group</div></div>${days.map((day, index) => `<div class="budget-day"><div class="date">${dateLabel(day.date)}<span>${day.city}</span></div><div class="budget-number">${currency(budgets[index].perPerson)}<span>${state.rate ? inr(budgets[index].perPerson * state.rate) : 'GBP estimate'}</span></div><div class="budget-number">${currency(budgets[index].group)}<span>${state.groupCount} travellers</span></div></div>`).join('')}</div><p class="note">Estimates cover vegetarian meals, local transport, selected paid sights, Highlands fuel/parking and contingency. Prepaid hostels, London–Edinburgh rail and rental-car hire are excluded, as are flights, visa, insurance and shopping. Selected optional choices with known prices are added automatically. Unselected choices and live-price options are not included.</p></section>`
}

function taskProgress() {
  const total = prepTasks.reduce((sum, group) => sum + group.items.length, 0)
  return `${state.checked.size}/${total}`
}

function prepTaskMarkup() {
  return `<div class="grid two">${prepTasks.map(group => `<section class="check-group"><h3>${group.group}</h3>${group.items.map(item => { const key = `${group.group}:${item}`; const done = state.checked.has(key); return `<label class="check-item ${done ? 'done' : ''}"><input type="checkbox" data-action="prep-check" data-key="${escapeHtml(key)}" ${done ? 'checked' : ''}><span>${item}</span></label>` }).join('')}</section>`).join('')}</div>`
}

function bookingCard(item) {
  const done = state.booked.has(item.id)
  return `<article class="card booking-card"><div class="card-top"><div><span class="stop-time">${done ? 'CONFIRMED' : item.deadline}</span><h3 style="margin-top:5px">${item.title}</h3></div><span class="card-icon ${done ? '' : 'coral'}">${icon(done ? 'check' : 'ticket')}</span></div><div class="booking-meta"><span>${item.when}</span><span>${item.price}</span></div><p>${item.note}</p><div class="booking-actions"><a class="button small" href="${item.url}" target="_blank" rel="noopener">Official site ${icon('external')}</a><button class="button secondary small" data-action="toggle-booking" data-booking="${item.id}">${icon(done ? 'check' : 'plus')} ${done ? 'Confirmed' : 'Mark booked'}</button></div></article>`
}

function transportMarkup() {
  return `<div class="grid three">${transportOptions.map(item => `<article class="card transport-card"><div class="eyebrow">${item.best}</div><h3>${item.title}</h3><span class="winner">Best: ${item.winner}</span><div class="option-list">${item.options.map(option => `<div class="option"><div class="option-head"><span>${option.name}</span><span>${option.time}</span></div><p><strong>${option.cost}</strong> · ${option.note}</p></div>`).join('')}</div></article>`).join('')}</div><div class="alert" style="margin-top:14px">${icon('info')}<span>TfL fares shown are current references and can change before October 2026. Verify in TfL’s single fare finder. Uber Boat fares do not count toward TfL Tube/bus caps.</span></div>`
}

function appsMarkup() {
  return `<div class="privacy" style="margin-bottom:14px">${icon('download')}<span>Install and sign in before departure, enable only useful notifications, and download maps or tickets while on Wi-Fi. No single app replaces the official operator during disruption.</span></div><div class="grid three">${travelApps.map(item => `<article class="card app-card"><div class="card-top"><div><span class="winner">${item.priority}</span><h3 style="margin-top:10px">${item.name}</h3></div><span class="card-icon">${icon(item.name.includes('Weather') ? 'cloud' : item.name.includes('Maps') || item.name.includes('City') ? 'map' : item.name.includes('airline') ? 'plane' : 'download')}</span></div><div class="booking-meta" style="margin-top:12px"><span>${item.tag}</span></div><p><strong>Why:</strong> ${item.why}</p><div class="app-how"><strong>How to use it</strong><span>${item.how}</span></div>${item.url ? `<a class="button secondary small" href="${item.url}" target="_blank" rel="noopener">Official page ${icon('external')}</a>` : ''}</article>`).join('')}</div>`
}

function sourcesMarkup() {
  return `<div class="card"><div class="privacy">${icon('shield')}<span>Research prioritises official operator and government pages. Opening hours, prices and timetables still need a final check near the trip because October 2026 exceptions may be added later.</span></div><div class="sources" style="margin-top:12px">${sources.map(([name, url]) => `<a class="source-link" href="${url}" target="_blank" rel="noopener"><span>${name}</span>${icon('external')}</a>`).join('')}</div></div>`
}

function renderPrep() {
  const tabs = [['tasks', `Checklist ${taskProgress()}`], ['apps', 'Apps to install'], ['bookings', `Bookings ${state.booked.size}/${bookings.length}`], ['transport', 'Transport'], ['sources', 'Verified sources']]
  let content = prepTaskMarkup()
  if (state.prepTab === 'apps') content = appsMarkup()
  if (state.prepTab === 'bookings') content = `<div class="grid three">${bookings.map(bookingCard).join('')}</div>`
  if (state.prepTab === 'transport') content = transportMarkup()
  if (state.prepTab === 'sources') content = sourcesMarkup()
  return `<div class="section-head"><div><div class="eyebrow">Before the trip</div><h2>Ready, without the scramble</h2><p>Everything important, saved locally and available offline.</p></div></div><div class="tabs" role="tablist">${tabs.map(([id,label]) => `<button class="tab ${state.prepTab === id ? 'active' : ''}" data-action="prep-tab" data-tab="${id}">${label}</button>`).join('')}</div><section class="section" style="margin-top:18px">${content}</section>`
}

function formatFlightDate(value) {
  if (!value) return 'Departure time not set'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

function checkinText(flight) {
  if (!flight.departure) return 'Add departure time to calculate check-in'
  const opens = new Date(new Date(flight.departure).getTime() - (Number(flight.checkinHours) || 24) * 3600000)
  const diff = opens - new Date()
  if (diff <= 0) return `Check-in opened ${formatFlightDate(opens.toISOString())}`
  const hours = Math.floor(diff / 3600000)
  const daysLeft = Math.floor(hours / 24)
  return `Check-in opens ${formatFlightDate(opens.toISOString())} · ${daysLeft ? `${daysLeft}d ` : ''}${hours % 24}h away`
}

function flightCard(flight, index) {
  return `<article class="card flight-card"><div class="flight-code">${escapeHtml(flight.airline || 'AIRLINE')} · ${escapeHtml(flight.flightNumber || 'FLIGHT')}</div><div class="flight-route"><span class="airport">${escapeHtml(flight.from || 'FROM')}</span><span class="route-line"></span>${icon('plane')}<span class="airport">${escapeHtml(flight.to || 'TO')}</span></div><div class="flight-date">${formatFlightDate(flight.departure)}</div><div class="countdown">${icon('clock')} ${checkinText(flight)}</div><div class="stop-actions"><button class="button ghost small" data-action="calendar-flight" data-index="${index}">${icon('calendar')} Add calendar</button>${safeUrl(flight.airlineUrl) ? `<a class="button ghost small" href="${escapeHtml(safeUrl(flight.airlineUrl))}" target="_blank" rel="noopener">Airline ${icon('external')}</a>` : ''}<button class="button ghost small" data-action="delete-flight" data-index="${index}">${icon('trash')} Remove</button></div></article>`
}

function renderFlights() {
  return `<div class="section-head"><div><div class="eyebrow">Flight desk</div><h2>Check in on time</h2><p>Import, paste or enter flight details. Countdown and calendar reminders work without an account.</p></div></div><div class="privacy">${icon('lock')}<span>Flight details and booking references stay only in this browser’s local storage. Northbound does not transmit them to a server. Live flight status requires the airline’s own link or app.</span></div><div class="hero-actions" style="margin-top:16px"><button class="button" data-action="open-flight">${icon('plus')} Add flight</button><button class="button secondary" data-action="open-import">${icon('upload')} Paste or import</button></div><section class="section">${state.flights.length ? `<div class="grid two">${state.flights.map(flightCard).join('')}</div>` : `<div class="empty"><span class="card-icon">${icon('plane')}</span><h3>No flights added yet</h3><p>Add details manually, paste an itinerary, or import an .ics/.txt file. We’ll calculate the check-in window.</p><button class="button" data-action="open-import">Import details</button></div>`}</section><section class="section"><div class="grid three"><div class="card"><div class="card-icon coral">${icon('clock')}</div><h3 style="margin-top:13px">Check-in reminder</h3><p>Uses the airline’s opening window you set, usually 24 or 48 hours.</p></div><div class="card"><div class="card-icon sun">${icon('calendar')}</div><h3 style="margin-top:13px">Calendar file</h3><p>Download a private .ics reminder for Apple, Google or Outlook calendars.</p></div><div class="card"><div class="card-icon">${icon('shield')}</div><h3 style="margin-top:13px">Local by design</h3><p>No account and no booking data sent to Northbound.</p></div></div></section>`
}

function renderModal() {
  if (!state.modal) return ''
  if (state.modal === 'flight') return `<div class="modal-backdrop" data-action="close-modal"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="flight-title" data-modal-body><div class="modal-head"><div><div class="eyebrow">Private on this device</div><h2 id="flight-title">Add flight</h2></div><button class="icon-button" data-action="close-modal" aria-label="Close">${icon('x')}</button></div><form id="flight-form"><div class="form-row two"><div class="field"><label for="airline">Airline</label><input id="airline" name="airline" placeholder="British Airways" required></div><div class="field"><label for="flightNumber">Flight number</label><input id="flightNumber" name="flightNumber" placeholder="BA142" required></div><div class="field"><label for="from">From airport</label><input id="from" name="from" placeholder="DEL" maxlength="4" required></div><div class="field"><label for="to">To airport</label><input id="to" name="to" placeholder="LHR" maxlength="4" required></div><div class="field"><label for="departure">Local departure</label><input id="departure" name="departure" type="datetime-local" required></div><div class="field"><label for="checkinHours">Check-in opens before</label><select id="checkinHours" name="checkinHours"><option value="24">24 hours</option><option value="48">48 hours</option><option value="72">72 hours</option></select></div></div><div class="form-row two" style="margin-top:12px"><div class="field"><label for="bookingRef">Booking reference (optional)</label><input id="bookingRef" name="bookingRef" autocomplete="off"></div><div class="field"><label for="airlineUrl">Airline manage-booking URL</label><input id="airlineUrl" name="airlineUrl" type="url" placeholder="https://…"></div></div><button class="button full" type="submit" style="margin-top:18px">Save flight</button></form></div></div>`
  return `<div class="modal-backdrop" data-action="close-modal"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="import-title" data-modal-body><div class="modal-head"><div><div class="eyebrow">Import assistant</div><h2 id="import-title">Paste itinerary</h2></div><button class="icon-button" data-action="close-modal" aria-label="Close">${icon('x')}</button></div><div class="field"><label for="import-text">Booking email, plain text or ICS content</label><textarea id="import-text" placeholder="Paste your flight confirmation here…"></textarea><span class="field-help">The parser looks for airline/flight number, airport codes and an ICS departure date. Always verify parsed details before saving.</span></div><div class="field" style="margin-top:12px"><label for="flight-file">Or choose .ics or .txt</label><input id="flight-file" type="file" accept=".ics,.txt,text/calendar,text/plain"></div><button class="button full" data-action="parse-flight" style="margin-top:18px">Parse into flight form</button></div></div>`
}

function render() {
  let content = renderToday()
  if (state.view === 'trip') content = renderTrip()
  if (state.view === 'money') content = renderMoney()
  if (state.view === 'prep') content = renderPrep()
  if (state.view === 'flights') content = renderFlights()
  app.innerHTML = shell(content)
  queueMicrotask(() => { hydratePhotos(); hydrateMotion(); if (state.view === 'trip') centerActiveDay() })
}

function toast(message) {
  const node = document.querySelector('#toast')
  if (!node) return
  node.textContent = message
  node.classList.add('show')
  clearTimeout(toast.timer)
  toast.timer = setTimeout(() => node.classList.remove('show'), 2600)
}

function navigate(view) {
  if (view === state.view) {
    window.scrollTo({ top: 0, behavior: motionAllowed() ? 'smooth' : 'auto' })
    return
  }
  const current = navItems().findIndex(item => item[0] === state.view)
  const next = navItems().findIndex(item => item[0] === view)
  transitionRender(() => {
    state.view = view
    store.set('northbound-view', view)
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, next >= current ? 'forward' : 'backward').then(refreshAsync)
}

function showPrepTab(tab) {
  if (state.view === 'prep' && state.prepTab === tab) return
  transitionRender(() => {
    state.view = 'prep'
    state.prepTab = tab
    store.set('northbound-view', 'prep')
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, 'soft')
}

function weatherText(code) {
  if (code === 0) return 'Clear sky'
  if ([1,2].includes(code)) return 'Partly cloudy'
  if (code === 3) return 'Overcast'
  if ([45,48].includes(code)) return 'Foggy'
  if ([51,53,55,56,57].includes(code)) return 'Drizzle'
  if ([61,63,65,66,67,80,81,82].includes(code)) return 'Rain likely'
  if ([71,73,75,77,85,86].includes(code)) return 'Snow possible'
  if ([95,96,99].includes(code)) return 'Thunderstorms'
  return 'Changeable'
}

function weatherIcon(code) { return code === 0 ? 'sun' : 'cloud' }
function weatherKey(day) { return day.date }

function moodFromCode(code) {
  if (code === 0) return 'clear'
  if ([1,2].includes(code)) return 'partly'
  if (code === 3) return 'cloudy'
  if ([45,48].includes(code)) return 'mist'
  if ([51,53,55,56,57,61,63,65,66,67,80,81,82].includes(code)) return 'rain'
  if ([71,73,75,77,85,86].includes(code)) return 'snow'
  if ([95,96,99].includes(code)) return 'storm'
  return 'cloudy'
}

function weatherMood(day) {
  const forecast = state.weather[weatherKey(day)]?.target
  if (forecast) return { mood: moodFromCode(forecast.code), label: `Forecast: ${weatherText(forecast.code)}`, forecast: true }
  return { mood: day.city === 'Highlands' ? 'mist' : 'cloudy', label: 'Seasonal weather palette', forecast: false }
}

function weatherAtmosphere() {
  return `<div class="weather-atmosphere" aria-hidden="true"><i class="atmosphere-sun"></i><i class="atmosphere-cloud cloud-one"></i><i class="atmosphere-cloud cloud-two"></i><i class="atmosphere-haze"></i><i class="atmosphere-rain rain-one"></i><i class="atmosphere-rain rain-two"></i></div>`
}

function refreshTripWeather(dayIndex) {
  if (state.view !== 'trip' || state.selectedDay !== dayIndex) return
  const day = days[dayIndex]
  const atmosphere = weatherMood(day)
  const tripView = document.querySelector('.trip-view')
  if (!tripView) return
  const moods = ['clear','partly','cloudy','mist','rain','snow','storm']
  moods.forEach(mood => tripView.classList.remove(`weather-${mood}`))
  tripView.classList.add(`weather-${atmosphere.mood}`)
  tripView.dataset.weatherSource = atmosphere.forecast ? 'forecast' : 'seasonal'
  const fact = tripView.querySelector('.forecast-fact')
  if (fact) fact.innerHTML = `${icon(weatherIcon(state.weather[weatherKey(day)]?.target?.code))} ${atmosphere.label}`
  const currentCard = tripView.querySelector('.day-hero-aside .weather-card')
  if (currentCard) {
    const template = document.createElement('template')
    template.innerHTML = weatherMarkup(dayIndex).trim()
    const nextCard = template.content.firstElementChild
    nextCard.classList.add('weather-refreshed')
    currentCard.replaceWith(nextCard)
  }
  if (motionAllowed()) tripView.querySelector('.day-hero')?.animate([{ opacity: .86 }, { opacity: 1 }], { duration: 320, easing: 'cubic-bezier(.16,1,.3,1)' })
}

async function loadWeather(dayIndex = state.selectedDay, force = false) {
  const day = days[dayIndex]
  const key = weatherKey(day)
  if ((state.weather[key] && !force) || state.weatherLoading.has(key)) return
  state.weatherLoading.add(key)
  try {
    const params = new URLSearchParams({
      latitude: day.weather.lat,
      longitude: day.weather.lon,
      current: 'temperature_2m,apparent_temperature,weather_code,precipitation,wind_speed_10m',
      daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,sunrise,sunset',
      timezone: 'Europe/London',
      forecast_days: '16'
    })
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`)
    if (!response.ok) throw new Error('Weather unavailable')
    const data = await response.json()
    const targetIndex = data.daily.time.indexOf(day.date)
    state.weather[key] = {
      current: { temp: data.current.temperature_2m, feels: data.current.apparent_temperature, code: data.current.weather_code, rain: data.current.precipitation ? 100 : 0, wind: data.current.wind_speed_10m },
      target: targetIndex >= 0 ? { temp: data.daily.temperature_2m_max[targetIndex], low: data.daily.temperature_2m_min[targetIndex], code: data.daily.weather_code[targetIndex], rain: data.daily.precipitation_probability_max[targetIndex], wind: data.daily.wind_speed_10m_max[targetIndex], sunrise: data.daily.sunrise[targetIndex], sunset: data.daily.sunset[targetIndex] } : null,
      updated: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
    }
  } catch {
    state.weather[key] = null
  } finally {
    state.weatherLoading.delete(key)
    if (state.view === 'trip') refreshTripWeather(dayIndex)
    else if (state.view === 'today') render()
  }
}

async function loadRate(force = false) {
  if (state.rateLoading || (state.rate && !force)) return
  state.rateLoading = true
  if (state.view === 'money') render()
  try {
    const response = await fetch('https://api.frankfurter.dev/v2/rate/GBP/INR')
    if (!response.ok) throw new Error('Rate unavailable')
    const data = await response.json()
    state.rate = Number(data.rate)
    state.rateDate = data.date || new Date().toLocaleDateString('en-CA')
    store.set('northbound-fx', { rate: state.rate, date: state.rateDate, cachedAt: Date.now() })
  } catch {
    toast('Live rate unavailable. Try again when connected.')
  } finally {
    state.rateLoading = false
    render()
  }
}

function refreshAsync() {
  if (state.view === 'today' || state.view === 'trip') loadWeather(state.view === 'today' && exactDay >= 0 ? exactDay : state.selectedDay)
  if (!state.rate || state.view === 'money' || state.view === 'today') loadRate()
}

function locationSummary(dayIndex) {
  if (!state.location) return 'Location ready'
  const day = days[dayIndex]
  const distance = haversine(state.location.latitude, state.location.longitude, day.weather.lat, day.weather.lon)
  return distance < 1 ? `You’re in central ${day.city}` : `${Math.round(distance)} km from ${day.city}`
}

function haversine(lat1, lon1, lat2, lon2) {
  const rad = value => value * Math.PI / 180
  const earth = 6371
  const dLat = rad(lat2 - lat1)
  const dLon = rad(lon2 - lon1)
  const value = Math.sin(dLat / 2) ** 2 + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLon / 2) ** 2
  return earth * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value))
}

async function shareTrip(dayOnly = false) {
  const day = days[state.selectedDay]
  const shareData = dayOnly ? { title: `${longDate(day.date)} · ${day.city}`, text: `${day.focus}\n${visibleStops(day).map(stop => `${stop.time} ${stop.title}`).join('\n')}`, url: location.href } : { title: 'Northbound · UK 2026', text: 'Our practical London and Scotland itinerary, 24–31 October 2026.', url: location.href }
  try {
    if (navigator.share) await navigator.share(shareData)
    else { await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`); toast('Trip link copied') }
  } catch (error) {
    if (error.name !== 'AbortError') toast('Could not share from this browser')
  }
}

function parseImport(text) {
  const unfolded = text.replace(/\r?\n[ \t]/g, '')
  const flightMatch = unfolded.match(/(?:flight(?:\s*(?:number|no\.?))?[:\s#-]*)?\b([A-Z0-9]{2,3})\s?-?\s?(\d{2,4})\b/i)
  const codes = [...unfolded.toUpperCase().matchAll(/\b[A-Z]{3}\b/g)].map(match => match[0]).filter(code => !['THE','AND','FOR','UTC','GMT','ARR','DEP','FROM'].includes(code))
  const dtMatch = unfolded.match(/DTSTART(?:;[^:]+)?:([0-9]{8}T[0-9]{4,6}Z?)/i)
  const summary = unfolded.match(/SUMMARY:(.+)/i)?.[1]?.trim() || ''
  let departure = ''
  if (dtMatch) {
    const raw = dtMatch[1]
    departure = `${raw.slice(0,4)}-${raw.slice(4,6)}-${raw.slice(6,8)}T${raw.slice(9,11)}:${raw.slice(11,13)}`
  } else {
    const isoMatch = unfolded.match(/\b(2026-[01]\d-[0-3]\d)[ T](\d{2}):?(\d{2})\b/)
    if (isoMatch) departure = `${isoMatch[1]}T${isoMatch[2]}:${isoMatch[3]}`
  }
  return {
    airline: summary.split(/[-–|]/)[0]?.trim() || '',
    flightNumber: flightMatch ? `${flightMatch[1].toUpperCase()}${flightMatch[2]}` : '',
    from: codes[0] || '',
    to: codes[1] || '',
    departure,
    checkinHours: '24', bookingRef: '', airlineUrl: ''
  }
}

function prefillFlightForm(data) {
  state.modal = 'flight'
  render()
  Object.entries(data).forEach(([key, value]) => {
    const input = document.querySelector(`[name="${key}"]`)
    if (input) input.value = value
  })
}

function saveFlight(form) {
  const data = Object.fromEntries(new FormData(form).entries())
  data.from = data.from.toUpperCase()
  data.to = data.to.toUpperCase()
  state.flights.push(data)
  store.set('northbound-flights', state.flights)
  state.modal = null
  render()
  toast('Flight saved locally')
}

function calendarFlight(index) {
  const flight = state.flights[index]
  if (!flight?.departure) return toast('Add a departure time first')
  const departure = new Date(flight.departure)
  const end = new Date(departure.getTime() + 3 * 3600000)
  const checkin = new Date(departure.getTime() - (Number(flight.checkinHours) || 24) * 3600000)
  const icsDate = value => value.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
  const body = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Northbound//UK 2026//EN','BEGIN:VEVENT',`UID:${Date.now()}@northbound`,`DTSTAMP:${icsDate(new Date())}`,`DTSTART:${icsDate(departure)}`,`DTEND:${icsDate(end)}`,`SUMMARY:${flight.flightNumber} ${flight.from} to ${flight.to}`,`DESCRIPTION:Check-in opens ${checkin.toLocaleString('en-GB')}. Verify times with ${flight.airline || 'the airline'}.`,'BEGIN:VALARM',`TRIGGER:-PT${Number(flight.checkinHours) || 24}H`,'ACTION:DISPLAY','DESCRIPTION:Online check-in opens','END:VALARM','END:VEVENT','END:VCALENDAR'].join('\r\n')
  const url = URL.createObjectURL(new Blob([body], { type: 'text/calendar' }))
  const link = document.createElement('a')
  link.href = url
  link.download = `${flight.flightNumber || 'flight'}-${flight.from}-${flight.to}.ics`
  link.click()
  URL.revokeObjectURL(url)
  toast('Calendar file downloaded')
}

app.addEventListener('pointerdown', event => {
  if (!motionAllowed()) return
  const surface = event.target.closest('button, a.button')
  if (!surface || surface.disabled) return
  const bounds = surface.getBoundingClientRect()
  const size = Math.max(bounds.width, bounds.height) * 1.65
  const ripple = document.createElement('span')
  ripple.className = 'tap-ripple'
  ripple.style.width = `${size}px`
  ripple.style.height = `${size}px`
  ripple.style.left = `${event.clientX - bounds.left - size / 2}px`
  ripple.style.top = `${event.clientY - bounds.top - size / 2}px`
  surface.classList.add('ripple-surface')
  surface.append(ripple)
  ripple.addEventListener('animationend', () => {
    ripple.remove()
    if (!surface.querySelector('.tap-ripple')) surface.classList.remove('ripple-surface')
  }, { once: true })
})

app.addEventListener('click', event => {
  const target = event.target.closest('[data-action]')
  if (!target) return
  const action = target.dataset.action
  if (action === 'nav') { event.preventDefault(); navigate(target.dataset.view); return }
  if (action === 'share') return shareTrip(false)
  if (action === 'share-day') return shareTrip(true)
  if (action === 'install') {
    if (state.installPrompt) state.installPrompt.prompt()
    else toast('Use your browser menu and choose “Add to Home Screen” or “Install app”.')
    return
  }
  if (action === 'scroll-day-top') {
    document.querySelector('.day-switcher')?.scrollIntoView({ behavior: motionAllowed() ? 'smooth' : 'auto', block: 'start' })
    return
  }
  if (action === 'select-day') {
    const selectedDay = Math.min(days.length - 1, Math.max(0, Number(target.dataset.index)))
    if (selectedDay === state.selectedDay) {
      document.querySelector('.day-hero')?.scrollIntoView({ behavior: motionAllowed() ? 'smooth' : 'auto', block: 'start' })
      return
    }
    const direction = selectedDay > state.selectedDay ? 'forward' : 'backward'
    transitionRender(() => {
      state.selectedDay = selectedDay
      store.set('northbound-day', state.selectedDay)
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }, direction).then(() => loadWeather(selectedDay))
    return
  }
  if (action === 'toggle-option-card') {
    const card = target.closest('.choice-card')
    const deck = card?.closest('.option-deck')
    if (!card || !deck) return
    const willOpen = !card.classList.contains('expanded')
    deck.querySelectorAll('.choice-card').forEach(item => {
      item.classList.remove('expanded')
      item.querySelector('.choice-card-toggle')?.setAttribute('aria-expanded', 'false')
      item.querySelector('.choice-card-toggle span').textContent = 'View details'
      item.querySelector('.choice-details')?.setAttribute('aria-hidden', 'true')
      item.querySelector('[data-action="choose-option"]')?.setAttribute('tabindex', '-1')
    })
    if (willOpen) {
      card.classList.add('expanded')
      target.setAttribute('aria-expanded', 'true')
      target.querySelector('span').textContent = 'Hide details'
      card.querySelector('.choice-details')?.setAttribute('aria-hidden', 'false')
      card.querySelector('[data-action="choose-option"]')?.setAttribute('tabindex', '0')
      requestAnimationFrame(() => card.scrollIntoView({ behavior: motionAllowed() ? 'smooth' : 'auto', block: 'nearest', inline: 'center' }))
    }
    return
  }
  if (action === 'choose-option') {
    transitionRender(() => {
      state.optionSelections[target.dataset.group] = target.dataset.option
      store.set('northbound-options', state.optionSelections)
    }, 'soft').then(() => toast(target.dataset.option === 'skip' ? 'Optional choice skipped' : 'Your itinerary choice was saved'))
    return
  }
  if (action === 'reset-option') {
    transitionRender(() => {
      delete state.optionSelections[target.dataset.group]
      store.set('northbound-options', state.optionSelections)
    }, 'soft').then(() => toast('Choice reset to undecided'))
    return
  }
  if (action === 'toggle-stop') {
    const key = target.dataset.key
    state.doneStops.has(key) ? state.doneStops.delete(key) : state.doneStops.add(key)
    store.set('northbound-stops', [...state.doneStops])
    render()
    return
  }
  if (action === 'booking-link') {
    const booking = bookings.find(item => item.id === target.dataset.booking)
    if (booking) window.open(booking.url, '_blank', 'noopener')
    return
  }
  if (action === 'toggle-booking') {
    const id = target.dataset.booking
    state.booked.has(id) ? state.booked.delete(id) : state.booked.add(id)
    store.set('northbound-bookings', [...state.booked])
    render()
    return
  }
  if (action === 'prep-tab') return showPrepTab(target.dataset.tab)
  if (action === 'quick-amount') {
    const input = document.querySelector('#gbp-amount')
    if (input) { input.value = target.dataset.amount; updateConversion(input.value) }
    return
  }
  if (action === 'refresh-rate') return loadRate(true)
  if (action === 'locate') {
    if (!navigator.geolocation) return toast('Geolocation is not available in this browser')
    navigator.geolocation.getCurrentPosition(position => { state.location = position.coords; render(); toast('Location ready for nearby navigation') }, () => toast('Location permission was not granted'), { enableHighAccuracy: true, timeout: 10000 })
    return
  }
  if (action === 'open-flight') { state.modal = 'flight'; render(); return }
  if (action === 'open-import') { state.modal = 'import'; render(); return }
  if (action === 'close-modal') {
    if (target.classList.contains('modal-backdrop') && event.target !== target) return
    state.modal = null; render(); return
  }
  if (action === 'parse-flight') {
    const text = document.querySelector('#import-text')?.value.trim()
    if (!text) return toast('Paste or choose an itinerary first')
    prefillFlightForm(parseImport(text))
    return
  }
  if (action === 'calendar-flight') return calendarFlight(Number(target.dataset.index))
  if (action === 'delete-flight') {
    const index = Number(target.dataset.index)
    if (!confirm(`Remove ${state.flights[index]?.flightNumber || 'this flight'} from this device?`)) return
    state.flights.splice(index, 1)
    store.set('northbound-flights', state.flights)
    render()
  }
})

app.addEventListener('change', event => {
  const target = event.target
  if (target.dataset.action === 'prep-check') {
    target.checked ? state.checked.add(target.dataset.key) : state.checked.delete(target.dataset.key)
    store.set('northbound-prep', [...state.checked])
    render()
  }
  if (target.id === 'group-count') {
    state.groupCount = Math.min(20, Math.max(1, Number(target.value) || 1))
    store.set('northbound-group', state.groupCount)
    render()
  }
  if (target.id === 'flight-file' && target.files?.[0]) {
    const reader = new FileReader()
    reader.onload = () => {
      const area = document.querySelector('#import-text')
      if (area) area.value = reader.result
      toast('File loaded. Review and parse it.')
    }
    reader.readAsText(target.files[0])
  }
})

app.addEventListener('input', event => {
  if (event.target.id === 'gbp-amount') updateConversion(event.target.value)
})

app.addEventListener('submit', event => {
  if (event.target.id === 'flight-form') { event.preventDefault(); saveFlight(event.target) }
})

function updateConversion(amount) {
  const output = document.querySelector('#inr-output')
  if (output) output.textContent = state.rate ? inr((Number(amount) || 0) * state.rate) : '—'
}

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault()
  state.installPrompt = event
})
window.addEventListener('online', () => { state.online = true; render(); refreshAsync() })
window.addEventListener('offline', () => { state.online = false; render(); toast('Offline mode: saved trip remains available') })

if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'))

render()
refreshAsync()
