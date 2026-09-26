export const trip = {
  name: 'London to the Highlands',
  start: '2026-10-24',
  end: '2026-10-31',
  stays: [
    { city: 'London', dates: '24–27 Oct', name: "Wombat’s City Hostel", address: '7 Dock Street, London E1 8LL' },
    { city: 'Edinburgh', dates: '27–31 Oct', name: 'Castle Rock Hostel', address: '15 Johnston Terrace, Edinburgh EH1 2PW' },
    { city: 'Fort Augustus', dates: '28–29 Oct', name: 'Overnight stay', address: 'Fort Augustus, Scotland' }
  ]
}

export const days = [
  {
    date: '2026-10-24', city: 'London', kicker: 'Arrival + skyline', focus: 'Land softly, regroup and see London light up from above.',
    summary: 'The full group starts only after the later arrival: check in, recover, then keep the evening within walking distance of Wombat’s.',
    weather: { lat: 51.5072, lon: -0.1276, climate: 'Typical 9–15°C · sunset 17:48', fallback: 'If the shuttle is delayed or rain is heavy, skip the riverfront loop and have an early dinner near the hostel.' },
    alerts: ['Two friends arrive around 10:00, while the other two land around 12:30 and target Wombat’s around 15:00 by pre-arranged airport shuttle.', 'Sky Garden is the only timed attraction. Book 18:00, arrive for security by 17:40 and allow one hour inside.', 'Jet lag is expected: keep dinner light and return to the hostel by about 21:00.'],
    budget: { stay: 0, food: 38, local: 0, sights: 0, flex: 15, shared: 0 },
    stops: [
      { time: '12:30', end: '15:00', title: 'Heathrow → hostel', type: 'Shuttle', location: "Wombat's City Hostel London", mode: 'driving', route: 'Use the planned airport shuttle directly to Wombat’s at 7 Dock Street.', detail: 'Allow for immigration, baggage collection and traffic. The earlier-arriving pair should rest or eat independently until everyone regroups.', cost: 'shuttle quote separate' },
      { time: '15:00', end: '17:00', title: 'Check in + recover', type: 'Reset', location: "Wombat's City Hostel London", mode: 'walking', route: 'Check in and stay at the hostel.', detail: 'Shower, unpack, charge devices and have a late lunch. Do not shorten this recovery block to add sightseeing.' },
      { time: '17:15', end: '17:40', title: 'Hostel → Sky Garden', type: 'Walk', location: 'Sky Garden London', mode: 'walking', route: 'Walk west via Tower Hill and Monument to 1 Sky Garden Walk.', detail: 'Leave enough time for security and ticket checks.' },
      { time: '17:40', end: '18:00', title: 'Sky Garden security', type: 'Arrival buffer', location: 'Sky Garden London', mode: 'walking', route: 'Join the ticketed entrance queue at 1 Sky Garden Walk.', detail: 'Tickets are time-specific; late entry is not guaranteed.', arriveBy: '17:40', startsAt: '18:00 ticket slot' },
      { time: '18:00', end: '19:00', title: 'Sky Garden', type: 'Booked · free', location: 'Sky Garden London', mode: 'walking', route: 'Use the booked public-garden entrance.', detail: 'The weekend public garden is currently open into the evening. This slot should give twilight and illuminated skyline views.', booking: 'skyGarden', cost: 'Free', arriveBy: '17:40', startsAt: '18:00 entry · one-hour visit' },
      { time: '19:10', end: '19:35', title: 'Tower exterior + bridge views', type: 'Night landmark', location: 'Tower of London', mode: 'walking', route: 'Walk east from Sky Garden toward Tower Hill and the north side of Tower Bridge.', detail: 'Keep this to exterior photographs; the full Tower visit remains on Sunday.' },
      { time: '19:35', end: '20:00', title: 'St Katharine Docks', type: 'Scenic pause', location: 'St Katharine Docks London', mode: 'walking', route: 'Continue beside Tower Hill into the marina.', detail: 'A short illuminated waterfront stop close to the hostel.' },
      { time: '20:00', end: '20:45', title: 'Light dinner near the hostel', type: 'Food', location: "Wombat's City Hostel London", mode: 'walking', route: 'Choose a simple vegetarian meal around the docks, Tower Hill or the hostel.', detail: 'Return to Wombat’s immediately afterward and sleep early.' }
    ]
  },
  {
    date: '2026-10-25', city: 'London', kicker: 'Fortress + Thames', focus: 'Old stone, riverside London and a skyline after dark.',
    summary: 'A continuous east-to-west river day: Tower Bridge, Borough Market, Shakespeare’s Globe exterior, the full South Bank walk and a night boat from Westminster to Battersea.',
    weather: { lat: 51.5072, lon: -0.1276, climate: 'Typical 9–14°C · sunset 16:49', fallback: 'Shorten the exposed South Bank walk with riverside café stops, but still reach Westminster Pier before the confirmed sailing.' },
    alerts: ['Clocks go back one hour at 02:00 today: the UK switches from BST to GMT.', 'Sunset is around 16:49 and civil twilight ends around 17:24. The current 17:31 Westminster sailing reaches Battersea around 17:48 with the skyline illuminated.', 'Borough Market closes at 16:00 on Sundays.', 'Tate Modern is not an itinerary attraction—FRAMELESS remains the chosen immersive-art experience.'],
    budget: { stay: 0, food: 40, local: 23, sights: 37, flex: 15, shared: 0 },
    stops: [
      { time: '08:00', end: '09:15', title: 'Breakfast near the Tower', type: 'Food', location: 'WatchHouse Tower Bridge', mode: 'walking', route: 'Walk 12–18 min from the hostel.', detail: 'WatchHouse is route-efficient. The Breakfast Club Spitalfields adds a detour.' },
      { time: '09:30', end: '12:00', title: 'Tower of London', type: 'Booked', location: 'Tower of London', mode: 'walking', route: 'Walk to the main entrance on Tower Hill.', detail: 'Reserve the earliest available Sunday slot and reconfirm the date-specific opening time. The timeline assumes 09:30; if October Sunday opening is 10:00, shift Tower Bridge and lunch by 30 minutes and shorten Bankside.', booking: 'tower', cost: '£37 adult reference', arriveBy: '15 min before booked slot', startsAt: 'Earliest released Sunday slot' },
      { time: '12:05', end: '12:50', title: 'Tower Bridge', type: 'Landmark', location: 'Tower Bridge London', mode: 'walking', route: 'Exit toward the river and cross the bridge southbound.', detail: 'Free to cross; the paid exhibition is not included in this timing.' },
      { time: '13:05', end: '14:15', title: 'Borough Market lunch', type: 'Food', location: 'Borough Market London', mode: 'walking', route: '18 min west along Tooley Street or the Thames path.', detail: 'Market closes 16:00. Try Gujarati Rasoi, Horn OK Please, Ethiopian vegan options or Mallow; trader days vary.' },
      { time: '14:20', end: '14:45', title: 'Shakespeare’s Globe exterior', type: 'Quick look', location: "Shakespeare's Globe London", mode: 'walking', route: 'Walk about 12 minutes west along the Thames from Borough Market.', detail: 'This is the reconstructed open-air Shakespeare theatre at 21 New Globe Walk. The plan is only a free exterior and riverfront look—no tour, performance or ticket.' },
      { time: '14:45', end: '16:40', title: 'South Bank riverside walk', type: 'Leisurely walk', location: 'London Eye', mode: 'walking', route: 'Continue west beside the Thames past the Globe, Millennium Bridge, Blackfriars, the OXO area, National Theatre and Jubilee Gardens to the London Eye.', detail: 'Tate Modern is only a landmark you pass outside, not a scheduled visit. Use riverside benches and a café stop so this remains a leisurely walk rather than a continuous march.' },
      { time: '16:40', end: '17:15', title: 'London Eye + Westminster blue hour', type: 'Scenic pause', location: 'Westminster Pier London', mode: 'walking', route: 'Photograph the London Eye, then cross Westminster Bridge for Big Ben and descend to Westminster Pier.', detail: 'Sunset is about 16:49. This positions you for blue-hour photographs and the later westbound boat without retracing the South Bank.' },
      {
        time: '17:31', end: '17:48', title: 'Night boat to Battersea', type: 'Must do', location: 'Battersea Power Station Pier', mode: 'transit',
        route: 'Board the current weekend RB6 westbound service at Westminster Pier. It continues beyond Battersea to Putney, so you can choose from several drop-off points.',
        detail: 'All stops through Battersea are in the Central zone and cost the same, so getting off early does not save money. On Sunday, current off-peak contactless/Oyster is cheapest. Earlier skyline landmarks are covered during the South Bank walk.',
        booking: 'uberBoat', cost: '£9.90 off-peak contactless · £11.70 online/app · £16.40 pier', arriveBy: '17:15 at Westminster Pier', startsAt: '17:31 current timetable',
        dropOptions: [
          { name: 'Millbank', time: '17:38', ride: '7 min', zone: 'Central', fare: '£9.90 / £11.70 / £16.40', note: 'Shortest ride; near Tate Britain and Pimlico. No cost saving.' },
          { name: 'Vauxhall', time: '17:42', ride: '11 min', zone: 'Central', fare: '£9.90 / £11.70 / £16.40', note: 'Fastest onward connection via the Victoria line.' },
          { name: 'Battersea Power Station', time: '17:48', ride: '17 min', zone: 'Central', fare: '£9.90 / £11.70 / £16.40', note: 'Recommended: best value for the same Central fare and direct Northern line afterward.', recommended: true },
          { name: 'Cadogan', time: '17:54', ride: '23 min', zone: 'Central + West', fare: '£11.40 / £13.50 / £17.70', note: 'Albert Bridge and King’s Road; nearest Tube is a long walk and the pier is not step-free.' },
          { name: 'Chelsea Harbour', time: '18:00', ride: '29 min', zone: 'Central + West', fare: '£11.40 / £13.50 / £17.70', note: 'Longer river time, but less convenient for the planned West End dinner.' },
          { name: 'St Mary’s Wandsworth', time: '18:07', ride: '36 min', zone: 'Central + West', fare: '£11.40 / £13.50 / £17.70', note: 'Primarily useful for local Wandsworth destinations.' },
          { name: 'Wandsworth Riverside Quarter', time: '18:14', ride: '43 min', zone: 'Central + West', fare: '£11.40 / £13.50 / £17.70', note: 'Not recommended for this itinerary; limited onward convenience and pier accessibility.' },
          { name: 'Putney', time: '18:21', ride: '50 min', zone: 'Central + West', fare: '£11.40 / £13.50 / £17.70', note: 'Longest ride, but takes the day far west and adds a lengthy return.' }
        ]
      },
      { time: '17:48', end: '18:35', title: 'Battersea riverside reset', type: 'Rest', location: 'Battersea Power Station', mode: 'walking', route: 'Walk the lit riverside around the Power Station and use the seating or a café.', detail: 'A short relaxed stop after the boat; do not turn this into another large attraction.' },
      { time: '18:35', end: '19:05', title: 'Battersea → West End', type: 'Tube', location: 'Leicester Square London', mode: 'transit', route: 'Walk to Battersea Power Station Underground station and take the Northern line direct to Leicester Square.', detail: 'This returns you toward dinner and the hostel without crossing back through east London.' },
      { time: '19:05', end: '21:30', title: 'Old London + dinner', type: 'Evening', location: "Neal's Yard London", mode: 'walking', route: 'Walk through Seven Dials and Neal’s Yard, then finish dinner near Covent Garden or Soho.', detail: 'Independent shops may be closed, so treat this as illuminated lanes, dinner and a relaxed final walk rather than shopping.' }
    ]
  },
  {
    date: '2026-10-26', city: 'London', kicker: 'Royal London + immersive art', focus: 'Westminster, royal parks, Covent Garden and FRAMELESS without rushing.',
    summary: 'A mostly walking royal route leads to a relaxed Covent Garden lunch, a pre-booking café pause and the full FRAMELESS visit at 16:00.',
    weather: { lat: 51.5072, lon: -0.1276, climate: 'Typical 8–14°C · sunset 16:47', fallback: 'Shorten St James’s Park and The Mall, but protect Westminster Abbey and the 16:00 FRAMELESS booking.' },
    alerts: ['FRAMELESS is the protected anchor: book 16:00, arrive at Marble Arch Place by 15:45 and keep the full two-hour visit.', 'Horse Guards, War Rooms, Camden, Kyoto Garden, Baker Street and the National Gallery interior have been removed to keep this day realistic.', 'Covent Garden is the seated lunch stop; leave by 14:15 for Marble Arch.'],
    budget: { stay: 0, food: 40, local: 9, sights: 58, flex: 15, shared: 0 },
    stops: [
      { time: '08:00', end: '08:35', title: 'Breakfast + depart', type: 'Food', location: 'Grounded London Aldgate', mode: 'walking', route: 'Breakfast close to the hostel, then walk to Tower Hill.', detail: 'Leave promptly enough to reach Westminster before 09:05.' },
      { time: '08:35', end: '09:05', title: 'Tube to Westminster', type: 'Tube', location: 'Westminster Underground Station', mode: 'transit', route: 'Take a westbound District or Circle line train directly from Tower Hill to Westminster.', detail: 'Use the same contactless payment method for every TfL journey.' },
      { time: '09:05', end: '09:15', title: 'Big Ben quick look', type: 'Photo stop', location: 'Big Ben London', mode: 'walking', route: 'Use Parliament Square for a quick exterior photograph, then cross to the Abbey entrance.', detail: 'Do not extend this stop because the Abbey queue time is fixed.' },
      { time: '09:15', end: '09:30', title: 'Westminster Abbey queue', type: 'Arrival buffer', location: 'Westminster Abbey', mode: 'walking', route: 'Join the timed-entry queue.', detail: 'Keep tickets downloaded and ready.', arriveBy: '09:15', startsAt: '09:30 ticket slot' },
      { time: '09:30', end: '11:00', title: 'Westminster Abbey', type: 'Booked', location: 'Westminster Abbey', mode: 'walking', route: 'Enter from the visitor entrance beside Parliament Square.', detail: 'Allow the complete 90-minute visit; there is no ceremony conflict in the revised plan.', booking: 'abbey', cost: 'check live price', arriveBy: '09:15', startsAt: '09:30 ticket slot' },
      { time: '11:00', end: '11:45', title: 'St James’s Park', type: 'Restful walk', location: "St James's Park London", mode: 'walking', route: 'Walk west through the park toward Buckingham Palace, pausing beside the lake.', detail: 'This is the main seated and green-space break before lunch.' },
      { time: '11:45', end: '12:15', title: 'Buckingham Palace', type: 'Landmark', location: 'Buckingham Palace London', mode: 'walking', route: 'Continue to the Victoria Memorial and palace forecourt.', detail: 'Exterior photographs only; no ceremony is assumed.' },
      { time: '12:15', end: '12:50', title: 'The Mall → Trafalgar Square', type: 'Walk', location: 'Trafalgar Square London', mode: 'walking', route: 'Walk east down The Mall through Admiralty Arch to Trafalgar Square.', detail: 'Treat Trafalgar Square as a short look rather than another long stop.' },
      { time: '12:50', end: '14:15', title: 'Covent Garden + Apple Market lunch', type: 'Market + food', location: 'Covent Garden London', mode: 'walking', route: 'Walk via the Strand and Southampton Street, then sit down for lunch around the Piazza.', detail: 'Monday traders differ from Saturday, but the market building, shops and atmosphere remain worthwhile.' },
      { time: '14:15', end: '14:50', title: 'Covent Garden → Marble Arch', type: 'Tube', location: 'Marble Arch London', mode: 'transit', route: 'Use Covent Garden or Holborn, then continue by Central line to Marble Arch.', detail: 'Allow interchange and lift time rather than planning to the fastest estimate.' },
      { time: '14:50', end: '15:35', title: 'Marble Arch café reset', type: 'Rest', location: 'Marble Arch London', mode: 'walking', route: 'Choose a café close to Marble Arch Place.', detail: 'Sit down, warm up, charge phones and use the toilets before the booking.' },
      { time: '15:45', end: '16:00', title: 'FRAMELESS arrival', type: 'Arrival buffer', location: 'FRAMELESS London', mode: 'walking', route: 'Walk to the entrance at Marble Arch Place.', detail: 'Have the booking ready before joining the queue.', arriveBy: '15:45', startsAt: '16:00 ticket slot' },
      { time: '16:00', end: '18:00', title: 'FRAMELESS', type: 'Must do', location: 'FRAMELESS London', mode: 'walking', route: 'Enter at Marble Arch Place.', detail: 'Protect the complete two-hour immersive-art visit. Confirm the 16:00 slot against the final Monday closing schedule.', booking: 'frameless', cost: 'check live price', arriveBy: '15:45', startsAt: '16:00 ticket slot' },
      { time: '18:00', end: '18:40', title: 'Oxford Street evening walk', type: 'Walk', location: 'Tottenham Court Road Station London', mode: 'walking', route: 'Walk east from Marble Arch toward Tottenham Court Road, browsing only if energy allows.', detail: 'This is a single eastbound line toward Outernet and Soho.' },
      { time: '18:40', end: '19:00', title: 'Outernet immersive walk-through', type: 'Free quick stop', location: 'Outernet London The Now Building', mode: 'walking', route: 'Enter The Now Building beside Tottenham Court Road station and watch one screen cycle.', detail: 'The public screen experiences are free; this is not the separate ticketed live venue.', cost: 'Free', startsAt: 'Free screens typically 10:00–23:30 Monday' },
      { time: '19:00', end: '21:15', title: 'Soho dinner', type: 'Evening', location: 'Soho London', mode: 'walking', route: 'Continue through Denmark Street into Soho and choose a relaxed vegetarian dinner.', detail: 'Return to the hostel after dinner; no additional attraction is planned.' }
    ]
  },
  {
    date: '2026-10-27', city: 'Edinburgh', kicker: 'Northbound', focus: 'Take the later train, settle in and enjoy a compact Old Town evening.',
    summary: 'The 11:00 train reaches Edinburgh around 15:00. Check in, stop for a snack, then keep the first evening close to the Old Town.',
    weather: { lat: 55.9533, lon: -3.1883, climate: 'Typical 6–12°C · sunset 16:43', fallback: 'Keep the snack and dinner, but shorten the outdoor Old Town walk if rain or wind is heavy.' },
    alerts: ['The London–Edinburgh train is already booked and excluded from the daily budget. Reach King’s Cross by 10:00 for the 11:00 service.', 'Lunch should be carried onto the train. The first Edinburgh food stop is a smaller snack after hostel check-in.', 'Calton Hill is intentionally moved to 30 October for a proper sunset visit.'],
    budget: { stay: 0, food: 38, local: 5, sights: 0, flex: 15, shared: 0 },
    stops: [
      { time: '08:00', end: '09:00', title: 'Breakfast + checkout', type: 'Food + prep', location: "Wombat's City Hostel London", mode: 'walking', route: 'Eat, finish packing and check out at Wombat’s.', detail: 'Keep train tickets and a packed lunch accessible.' },
      { time: '09:15', end: '10:00', title: 'Hostel → King’s Cross', type: 'Transfer', location: "King's Cross Station London", mode: 'transit', route: 'Walk to Aldgate East and use the Hammersmith & City line to King’s Cross St Pancras.', detail: 'The generous buffer protects against Tube delays and station navigation.' },
      { time: '10:00', end: '11:00', title: 'King’s Cross buffer', type: 'Station', location: "King's Cross Station London", mode: 'walking', route: 'Check the platform, collect food and board when announced.', detail: 'Download the booked LNER ticket before leaving the hostel.' },
      { time: '11:00', end: '15:00', title: 'London → Edinburgh', type: 'Prepaid', location: 'Edinburgh Waverley Station', mode: 'transit', route: 'Use the booked direct LNER service from London King’s Cross to Edinburgh Waverley.', detail: 'Eat lunch on the train and track the live platform and arrival time in the LNER or Trainline app.' },
      { time: '15:00', end: '15:35', title: 'Waverley → hostel', type: 'Transfer', location: 'Castle Rock Hostel Edinburgh', mode: 'walking', route: 'Walk uphill via Market Street and the Mound, or take a short taxi with luggage.', detail: 'Target arrival at Castle Rock Hostel by 15:35.' },
      { time: '15:35', end: '15:50', title: 'Check in + bags', type: 'Stay', location: 'Castle Rock Hostel Edinburgh', mode: 'walking', route: 'Check in and leave luggage in the room or storage.', detail: 'Keep this reset short but do not carry bags into the evening.' },
      { time: '15:50', end: '16:30', title: 'Grassmarket snack stop', type: 'Food + reset', location: 'Grassmarket Edinburgh', mode: 'walking', route: 'Walk a few minutes from the hostel to Grassmarket or West Bow.', detail: 'Choose an explicitly vegan snack or light meal for no egg ingredients, and sit down before continuing.' },
      { time: '16:30', end: '17:05', title: 'Victoria Street + Upper Royal Mile', type: 'Evening walk', location: 'Victoria Street Edinburgh', mode: 'walking', route: 'Walk up Victoria Street toward George IV Bridge and the upper Royal Mile.', detail: 'Keep this to architecture, photographs and atmosphere; the longer closes walk is on 30 October.' },
      { time: '17:15', end: '18:30', title: 'Magic Potions Tavern (Optional)', type: 'Optional', optionId: 'potions', location: 'Department of Magic Edinburgh', mode: 'walking', route: 'Walk to 9 Blair Street from the Royal Mile.', detail: 'Reserve a 75-minute table. Non-alcoholic potion choices are available; specify the group mix when booking.', booking: 'potions', cost: 'check live package' },
      { time: '18:45', end: '20:15', title: 'Soul Vegan dinner', type: 'Food', location: 'Soul Vegan Edinburgh', mode: 'walking', route: 'Walk toward West Richmond Street, or use a short bus/taxi if the group is tired.', detail: 'Fully vegan Malaysian cooking means no egg ingredients. Reserve for a larger group and reconfirm Tuesday hours.' },
      { time: '20:15', end: '20:45', title: 'Return to hostel', type: 'Walk', location: 'Castle Rock Hostel Edinburgh', mode: 'walking', route: 'Walk or take a short taxi back to Castle Rock Hostel.', detail: 'Finish early after the train journey.' }
    ]
  },
  {
    date: '2026-10-28', city: 'Highlands', kicker: 'Highlands I', focus: 'Forest, mountain water and Loch Ness before nightfall.',
    summary: 'A scenic but disciplined 260 km day. The last timed entry matters because Urquhart Castle closes at 17:00 in October.',
    weather: { lat: 57.2, lon: -3.8, climate: 'Typical 3–10°C · sunset about 16:40', fallback: 'In severe weather, skip Loch Morlich and use the direct A9/A82 route to Urquhart; follow Traffic Scotland warnings.' },
    alerts: ['The rental car is already booked and excluded from daily cost; only estimated fuel and parking remain.', 'Collect the car before 08:00 or move Pitlochry to a brief coffee stop.', 'You will drive after dark from Urquhart to Fort Augustus. Watch for deer and reduce speed.', 'Confirm the rental company accepts each driver’s licence and whether it requires an IDP.'],
    budget: { stay: 0, food: 40, local: 0, sights: 14, flex: 15, shared: 50 },
    stops: [
      { time: '08:00', end: '09:45', title: 'Edinburgh → Pitlochry', type: 'Drive', location: 'Pitlochry Scotland', mode: 'driving', route: 'M90 and A9 north; about 115 km. Add buffer for collection paperwork and city traffic.', detail: 'Photograph the car, fuel level and existing damage before departure.' },
      { time: '09:45', end: '10:30', title: 'Pitlochry coffee', type: 'Stop', location: 'Pitlochry Scotland', mode: 'walking', route: 'Park centrally and keep this to 45 min.', detail: 'Cafe Calluna or Jessie’s; opening hours can change seasonally.' },
      { time: '10:30', end: '12:15', title: 'Cairngorms → Loch Morlich', type: 'Drive', location: 'Loch Morlich Scotland', mode: 'driving', route: 'A9 to Aviemore, then B970 toward Glenmore. About 105 km.', detail: 'Stop only in safe signed lay-bys. Roads may be wet, frosty or foggy.' },
      { time: '12:15', end: '12:55', title: 'Loch Morlich', type: 'Nature', location: 'Loch Morlich Beach', mode: 'walking', route: 'Short lochside walk from the car park.', detail: 'Waterproof shoes. Leave early if visibility or road conditions deteriorate.' },
      { time: '13:05', end: '13:45', title: 'Quick Aviemore lunch', type: 'Food', location: 'Aviemore Scotland', mode: 'driving', route: 'Drive back toward Aviemore; choose a quick café with parking.', detail: 'Order efficiently to protect the castle slot.' },
      { time: '13:45', end: '15:15', title: 'Aviemore → Urquhart Castle', type: 'Drive', location: 'Urquhart Castle', mode: 'driving', route: 'A9 then A82 via Inverness and Drumnadrochit; about 75 km.', detail: 'Allow extra time through Inverness.' },
      { time: '15:15', end: '16:40', title: 'Urquhart Castle', type: 'Booked', location: 'Urquhart Castle', mode: 'walking', route: 'Use the visitor centre car park.', detail: 'October hours are 09:30–17:00. Reserve 15:00–15:30 and arrive before the ticket cutoff.', booking: 'urquhart', cost: '£14 current online reference' },
      { time: '16:40', end: '17:35', title: 'Loch Ness → Fort Augustus', type: 'Drive', location: 'Fort Augustus Scotland', mode: 'driving', route: 'A82 south along Loch Ness; about 45 km.', detail: 'Twilight fades quickly. Avoid unscheduled roadside stops after dark.' },
      { time: '17:35', end: '20:30', title: 'Check in + dinner', type: 'Stay', location: 'Fort Augustus Scotland', mode: 'walking', route: 'Park once and walk around the locks if conditions are safe.', detail: 'Beaufort House pizza or another open local option. Reserve because kitchens close earlier off-season.' }
    ]
  },
  {
    date: '2026-10-29', city: 'Highlands', kicker: 'Highlands II', focus: 'Glencoe’s drama, Rannoch Moor and a safe return.',
    summary: 'The route follows the A82 south and front-loads scenery into daylight. Keep the 18:00 rental return non-negotiable.',
    weather: { lat: 56.68, lon: -5.1, climate: 'Typical 4–10°C · sunset about 16:38', fallback: 'For amber/red weather warnings, take the safest direct return advised by Traffic Scotland and skip exposed walks.' },
    alerts: ['This is around 280 km and 4.5–5.5 hours of driving before stops.', 'Refuel before returning the car and retain the receipt.', 'Sunset is before 16:40; the final leg will be in darkness.'],
    budget: { stay: 0, food: 40, local: 0, sights: 0, flex: 15, shared: 45 },
    stops: [
      { time: '08:00', end: '09:10', title: 'Fort Augustus → Fort William', type: 'Drive', location: 'Fort William Scotland', mode: 'driving', route: 'A82 south, about 55 km.', detail: 'Leave with at least half a tank.' },
      { time: '09:10', end: '09:40', title: 'The Wildcat coffee', type: 'Coffee', location: 'The Wildcat Fort William', mode: 'walking', route: 'Use central parking and keep the stop compact.', detail: 'Plant-based café; verify seasonal opening.' },
      { time: '09:40', end: '10:30', title: 'Fort William → Glencoe', type: 'Drive', location: 'Glencoe Visitor Centre', mode: 'driving', route: 'A82 south along Loch Linnhe.', detail: 'Use official car parks, never the carriageway edge.' },
      { time: '10:30', end: '12:15', title: 'Glencoe', type: 'Nature', location: 'Glencoe Visitor Centre', mode: 'walking', route: 'Visitor centre plus one or two signed viewpoints.', detail: 'Choose low-level walks only. Mountain weather is not the same as the valley forecast.' },
      { time: '12:15', end: '13:00', title: 'Lunch', type: 'Food', location: 'Glencoe Cafe', mode: 'driving', route: 'Glencoe café or farm shop depending opening hours.', detail: 'Do not let lunch push the next stops into darkness.' },
      { time: '13:00', end: '14:15', title: 'Rannoch Moor', type: 'Scenic drive', location: 'Rannoch Moor Viewpoint A82', mode: 'driving', route: 'Continue south on A82. Stop only in marked lay-bys.', detail: 'Best wide landscape photographs of the day.' },
      { time: '14:15', end: '15:00', title: 'Tyndrum break (Optional)', type: 'Optional', optionId: 'tyndrum', location: 'The Real Food Cafe Tyndrum', mode: 'driving', route: 'Continue A82 to Tyndrum.', detail: 'Use only if running on time; otherwise continue south.' },
      { time: '15:00', end: '15:45', title: 'Loch Lomond short stop', type: 'Nature', location: 'Inveruglas Pyramid', mode: 'driving', route: 'A82 south to a safe signed lochside stop.', detail: 'Last useful daylight. Skip if roads are slow.' },
      { time: '15:45', end: '18:00', title: 'Return car in Edinburgh', type: 'Deadline', location: 'Edinburgh Waverley Station', mode: 'driving', route: 'Continue A82, then M8/M9 toward the confirmed rental branch. Use the rental location, not this generic pin.', detail: 'Refuel close to the branch, remove belongings, photograph the returned car and obtain a receipt.' },
      { time: '18:00', end: '18:30', title: 'Rental return → hostel', type: 'Transfer', location: 'Castle Rock Hostel Edinburgh', mode: 'transit', route: 'Walk or take a short taxi from the confirmed rental branch to Castle Rock Hostel.', detail: 'Drop day bags, change and rest after the long drive.' },
      { time: '20:00', end: '21:15', title: 'Dinner near the hostel', type: 'Food', location: 'Grassmarket Edinburgh', mode: 'walking', route: 'Choose a table around Grassmarket, West Bow or close to Castle Rock Hostel.', detail: 'Keep dinner convenient and reserve ahead for the group. Choose explicitly vegan dishes for no egg ingredients.' }
    ]
  },
  {
    date: '2026-10-30', city: 'Edinburgh', kicker: 'City details + sunset', focus: 'Castle silhouettes, secret closes and Calton Hill at golden hour.',
    summary: 'Photograph the castle from outside, move east through the hidden closes and finish the daylight on Calton Hill.',
    weather: { lat: 55.9533, lon: -3.1883, climate: 'Typical 6–11°C · sunset about 16:36', fallback: 'Keep Vennel and the castle exterior, but replace Calton Hill with the National Museum or a longer café stop in severe weather.' },
    alerts: ['Edinburgh Castle is exterior-only: no ticket, interior queue or two-hour visit is planned.', 'Reach Calton Hill by about 15:40 for the 16:36 sunset. Skip the climb in severe wind, ice or poor visibility.', 'The hidden-closes route progresses east and naturally finishes near the Calton Hill approach.'],
    budget: { stay: 0, food: 40, local: 5, sights: 0, flex: 15, shared: 0 },
    stops: [
      { time: '08:00', end: '08:50', title: 'Breakfast at Loudons', type: 'Food', location: 'Loudons New Waverley Edinburgh', mode: 'walking', route: 'Walk downhill from the hostel to New Waverley.', detail: 'Reserve for a larger group and keep breakfast relaxed.' },
      { time: '09:05', end: '09:30', title: 'Princes Street Gardens', type: 'Walk', location: 'Ross Fountain Edinburgh', mode: 'walking', route: 'Walk through the gardens toward Ross Fountain and the west side of Castle Rock.', detail: 'Use the low-angle castle views before climbing toward the Vennel.' },
      { time: '09:40', end: '10:00', title: 'The Vennel Viewpoint', type: 'Must see', location: 'The Vennel Viewpoint Edinburgh Castle', mode: 'walking', route: 'Use the Vennel steps from Grassmarket, then continue uphill toward Castlehill.', detail: 'The framed view from the steps remains one of the best castle photographs.' },
      { time: '10:10', end: '10:45', title: 'Edinburgh Castle exterior', type: 'Exterior only', location: 'Edinburgh Castle', mode: 'walking', route: 'Walk to Castlehill and the Esplanade.', detail: 'Photograph the gatehouse, Castle Rock and Esplanade views. No admission ticket or interior visit is planned.' },
      { time: '10:45', end: '11:15', title: 'Upper Royal Mile', type: 'Walk', location: 'Royal Mile Edinburgh', mode: 'walking', route: 'Walk east from Castlehill toward Lawnmarket and St Giles’ Cathedral.', detail: 'Pause for architecture and exterior photographs without turning this into a long shopping stop.' },
      { time: '11:20', end: '12:00', title: 'The Milkman', type: 'Coffee', location: 'The Milkman Edinburgh Cockburn Street', mode: 'walking', route: 'Walk down toward Cockburn Street.', detail: 'Use this as a proper seated reset; have a backup café if it is busy.' },
      { time: '12:00', end: '12:35', title: 'Cockburn Street + St Giles', type: 'Walk', location: 'Cockburn Street Edinburgh', mode: 'walking', route: 'Explore the colourful shopfronts, then return toward the Royal Mile and St Giles’ exterior.', detail: 'Keep shopping light so lunch remains on time.' },
      { time: '12:45', end: '13:45', title: 'Kalpna lunch', type: 'Food', location: 'Kalpna Restaurant Edinburgh', mode: 'walking', route: 'Walk south to Nicolson Street.', detail: 'Choose a dish explicitly marked vegan for no egg ingredients.' },
      { time: '13:55', end: '15:20', title: 'Hidden closes walk', type: 'Free', location: "Advocate's Close Edinburgh", mode: 'walking', route: 'Start at Advocate’s Close, then move east through Tweeddale Court, White Horse Close and Dunbar’s Close Garden.', detail: 'Expect steps and slick stone after rain. The route finishes toward the east side of the Old Town.' },
      { time: '15:20', end: '15:40', title: 'Walk to Calton Hill', type: 'Transfer', location: 'Calton Hill Edinburgh', mode: 'walking', route: 'Continue toward Regent Road and use the signed Calton Hill path.', detail: 'Allow enough time to climb without rushing before sunset.' },
      { time: '15:40', end: '16:55', title: 'Calton Hill sunset', type: 'Golden hour', location: 'Calton Hill Edinburgh', mode: 'walking', route: 'Use the main paths and remain on paved or firm surfaces.', detail: 'Sunset is around 16:36. Stay through early blue hour, but leave immediately if wind or footing feels unsafe.', arriveBy: '15:40', startsAt: 'Sunset about 16:36' },
      { time: '17:05', end: '17:30', title: 'St Andrew Square reset', type: 'Rest', location: 'St Andrew Square Edinburgh', mode: 'walking', route: 'Descend west toward St Andrew Square.', detail: 'Use the benches if dry or choose a nearby café for warmth.' },
      { time: '17:30', end: '18:25', title: 'Princes Street → Waterstones', type: 'Shopping', location: 'Waterstones Edinburgh West End', mode: 'walking', route: 'Walk Princes Street east to west and finish at Waterstones.', detail: 'Browse only as much as the group wants, then warm up indoors.' },
      { time: '18:40', end: '19:10', title: 'Grassmarket evening walk', type: 'Scenic pause', location: 'Grassmarket Edinburgh', mode: 'walking', route: 'Walk back toward the Old Town via Lothian Road.', detail: 'Pause for the illuminated castle view before dinner.' },
      { time: '19:15', end: '21:00', title: 'Hendersons vegan dinner', type: 'Food', location: 'Hendersons Restaurant Edinburgh', mode: 'walking', route: 'Walk toward Barclay Place near Tollcross, then return to the hostel after dinner.', detail: 'Choose dishes explicitly marked vegan; strict allergies require direct cross-contact confirmation.' }
    ]
  },
  {
    date: '2026-10-31', city: 'Edinburgh', kicker: 'Last light', focus: 'One last climb, village lanes and an airport buffer.',
    summary: 'A weather-led finale. Arthur’s Seat is optional; the 16:00 luggage deadline and 17:00 airport departure are fixed.',
    weather: { lat: 55.9533, lon: -3.1883, climate: 'Typical 6–11°C · sunrise 07:17 · sunset 16:35', fallback: 'Skip Arthur’s Seat for the National Museum, Camera Obscura or a long brunch; keep Dean Village only if paths are comfortable.' },
    alerts: ['Arthur’s Seat can be muddy, slippery and very windy. Do not summit in poor visibility or strong wind.', 'Lannan says Sunday is its busiest day and full selection is best before 10:00. The original midday plan may mean limited stock.', 'Halloween evening can increase city and airport traffic. Keep the 17:00 airport departure.'],
    budget: { stay: 0, food: 38, local: 8, sights: 0, flex: 18, shared: 0 },
    stops: [
      { time: '07:40', end: '10:15', title: 'Arthur’s Seat (Optional — weather permitting)', type: 'Optional', optionId: 'arthurs-seat', location: "Arthur's Seat Edinburgh", mode: 'walking', route: 'Walk or bus to Holyrood Park; use a route suited to the group’s fitness.', detail: 'Sunrise is 07:17. Carry water, warm layers and waterproof footwear; turn back if conditions deteriorate.' },
      { time: '10:35', end: '11:35', title: 'Black Rabbit vegan brunch', type: 'Food', location: 'Black Rabbit Edinburgh Brougham Street', mode: 'transit', route: 'Use a bus or taxi from Holyrood Park to Brougham Street after the hike, then continue north toward Dean Village.', detail: 'This fully vegan deli is egg-free by ingredients and currently opens Saturday 10:00–16:00. It is route-compatible with Tollcross and Bruntsfield; verify hours before departure.' },
      { time: '11:50', end: '12:40', title: 'Dean Village', type: 'Walk', location: 'Dean Village Edinburgh', mode: 'walking', route: 'Walk about 25 minutes north from Brougham Street through the West End, or use a short bus if the group needs a rest.', detail: 'Riverside path may be slick after rain.' },
      { time: '12:40', end: '14:20', title: 'Stockbridge + Lannan', type: 'Neighbourhood', location: 'Lannan Bakery Edinburgh', mode: 'walking', route: 'Walk the Water of Leith path where open, then Hamilton Place.', detail: 'Expect reduced selection after noon. Lannan is not a dedicated egg-free bakery, so ask staff about ingredients and cross-contact before ordering. If the croissant is a priority, check pre-order pickup.', cost: 'queue likely' },
      { time: '14:20', end: '15:30', title: 'Final souvenirs', type: 'Flexible', location: 'Royal Mile Edinburgh', mode: 'transit', route: 'Bus or walk back to Princes Street/Royal Mile.', detail: 'Skip if tired; leave room to repack.' },
      { time: '16:00', end: '17:00', title: 'Collect bags + depart', type: 'Deadline', location: 'Castle Rock Hostel Edinburgh', mode: 'walking', route: 'Be at the hostel by 16:00. Repack and leave no later than 17:00.', detail: 'Confirm the airport route and disruption before leaving.' },
      { time: '17:00', end: '18:00', title: 'Edinburgh Airport', type: 'Transfer', location: 'Edinburgh Airport', mode: 'transit', route: 'Airlink 100 from Waverley/Princes Street or tram; allow 35–45 min plus walking and waiting.', detail: 'Target terminal arrival by 17:45–18:00 for the 20:30 flight. Check in online as soon as the airline window opens.' }
    ]
  }
]

export const paceGuide = {
  '2026-10-24': { level: 'Comfortable', label: 'Recovery-first arrival', note: 'The shared itinerary begins at 17:00 after the later pair reaches Wombat’s, showers and eats. Everything stays close to the hostel.', action: 'Protect recovery time. Sky Garden is the only timed stop and the rest of the evening can disappear without affecting later days.', skip: [{ name: 'St Katharine Docks', reason: 'Skip first if the group is tired after Sky Garden.' }, { name: 'Tower exterior walk', reason: 'The full Tower visit and Tower Bridge are already covered on Sunday.' }, { name: 'Sky Garden', reason: 'Skip only if the shuttle or check-in delay makes the fixed ticket unrealistic.' }] },
  '2026-10-25': { level: 'Moderate', label: 'Linear river day', note: 'The route moves continuously west from Tower Bridge along the South Bank to Westminster and Battersea, with no Canary Wharf return loop.', action: 'Protect Borough Market before 16:00, the Tower booking and the 17:31 Westminster sailing.', skip: [{ name: 'Long café stop on South Bank', reason: 'Keep the river walk but reduce seated time if the morning runs late.' }, { name: 'Battersea riverside pause', reason: 'Go directly to the Northern line after leaving the boat.' }, { name: 'Globe exterior pause', reason: 'Walk past without stopping if the Tower opens later.' }] },
  '2026-10-26': { level: 'Moderate', label: 'Royal route + FRAMELESS', note: 'The removed optional branches create room for Westminster, Buckingham Palace, Covent Garden and a 45-minute Marble Arch reset before FRAMELESS.', action: 'Protect Westminster Abbey and the 16:00 FRAMELESS booking. Reduce outdoor pauses before shortening either ticketed visit.', skip: [{ name: 'Long St James’s Park pause', reason: 'Walk through with only a short lake-side stop.' }, { name: 'Trafalgar Square pause', reason: 'Use it as a pass-through on the way to Covent Garden.' }, { name: 'Oxford Street browsing', reason: 'Walk directly to Outernet and Soho after FRAMELESS.' }] },
  '2026-10-27': { level: 'Comfortable', label: 'Later train + Old Town', note: 'The 15:00 arrival supports a snack, a short Old Town walk, optional Potions and dinner without chasing sunset.', action: 'If the train is delayed, keep the hostel stop and dinner; shorten the outdoor walk before changing a paid Potions reservation.', skip: [{ name: 'Upper Royal Mile extension', reason: 'Go directly from the snack stop toward Blair Street.' }, { name: 'Magic Potions Tavern', reason: 'Skip if it is unbooked or changeable and the train is substantially delayed.' }, { name: 'Walk back to the hostel', reason: 'Use a short taxi after dinner if the group is tired.' }] },
  '2026-10-28': { level: 'High', label: 'Long driving day', note: 'This day has little slack before Urquhart Castle’s October closing time and ends with driving after dark.', action: 'Protect Urquhart Castle. The prepaid car hire is excluded from cost; fuel and parking remain.', skip: [{ name: 'Pitlochry long stop', reason: 'Reduce it to a 20-minute coffee pickup.' }, { name: 'Loch Morlich', reason: 'Skip the detour if more than 45 minutes behind.' }, { name: 'Fort Augustus evening walk', reason: 'Check in and eat if conditions are dark or wet.' }] },
  '2026-10-29': { level: 'High', label: 'Return deadline', note: 'Scenery is manageable, but the 18:00 car return is fixed and daylight ends before 16:40.', action: 'Keep Glencoe and the safe return; optional stops disappear as soon as roads slow down.', skip: [{ name: 'Tyndrum coffee', reason: 'First stop to remove.' }, { name: 'Loch Lomond photo stop', reason: 'Remove if it threatens fuel or return time.' }, { name: 'Second Glencoe viewpoint', reason: 'Use one excellent safe stop instead of several.' }] },
  '2026-10-30': { level: 'Moderate', label: 'Exterior castle + sunset', note: 'Removing the castle interior creates room for a relaxed café, hidden closes and Calton Hill at sunset.', action: 'Keep Vennel and the castle exterior. Treat Calton Hill as weather-dependent and preserve safe footing over the view.', skip: [{ name: 'Princes Street Gardens', reason: 'Shorten this before removing Vennel.' }, { name: 'Extended hidden-closes walk', reason: 'Use Advocate’s Close, White Horse Close and Dunbar’s Close if running late.' }, { name: 'Princes Street shopping', reason: 'Go directly from St Andrew Square toward Grassmarket and dinner.' }] },
  '2026-10-31': { level: 'Moderate', label: 'Weather-led', note: 'The schedule works, but Arthur’s Seat conditions and the 16:00 luggage deadline control the day.', action: 'Make the hike decision before leaving the hostel and protect the airport buffer.', skip: [{ name: 'Arthur’s Seat', reason: 'Skip in strong wind, poor visibility or slippery conditions.' }, { name: 'Final souvenirs', reason: 'Remove before shortening the airport buffer.' }, { name: 'Dean Village', reason: 'Skip if Lannan or a relaxed Stockbridge lunch matters more.' }] }
}

export const optionGroups = [
  {
    date: '2026-10-27', id: 'edinburgh-extra', title: 'Edinburgh evening extra', mode: 'multi', description: 'Choose this only if the group wants a reserved themed experience.',
    options: [
      { id: 'potions', name: 'Magic Potions Tavern', cost: null, costLabel: 'Check live package', duration: '75 min', walking: '15–18 min', setting: 'Indoor', bestFor: 'Interactive themed drinks', tradeoff: 'Reservation reduces flexibility after sunset' }
    ]
  },
  {
    date: '2026-10-29', id: 'highlands-extra', title: 'Highlands optional stop', mode: 'multi', description: 'Only select this when the road and return schedule are comfortably on time.',
    options: [
      { id: 'tyndrum', name: 'Tyndrum café break', cost: null, costLabel: 'Pay for order', duration: 'Up to 45 min', walking: 'Minimal', setting: 'Indoor', bestFor: 'Driver rest and hot food', tradeoff: 'First stop to remove if roads are slow' }
    ]
  },
  {
    date: '2026-10-31', id: 'hike-extra', title: 'Departure morning activity', mode: 'multi', description: 'Make the final decision using wind, visibility and path conditions.',
    options: [
      { id: 'arthurs-seat', name: 'Arthur’s Seat', cost: 0, duration: '2 hr 35 min', walking: 'High', setting: 'Exposed outdoors', bestFor: 'Panoramic views and a final hike', tradeoff: 'Skip in strong wind, poor visibility or slippery conditions' }
    ]
  }
]

export const bookings = [
  { id: 'tower', title: 'Tower of London', when: '25 Oct · earliest slot', deadline: 'Book when October slots open', price: '£37 reference', url: 'https://www.hrp.org.uk/tower-of-london/visit/tickets-and-prices/', note: 'Allow 2.5–3 hours and reconfirm Sunday opening.' },
  { id: 'uberBoat', title: 'Uber Boat · night skyline', when: '25 Oct · target 17:31 Westminster → Battersea', deadline: 'Reconfirm timetable before travel', price: '£9.90 Sunday contactless reference', url: 'https://www.thamesclippers.com/booking', note: 'All planned stops through Battersea are Central zone. Current alternatives: £11.70 online/app or £16.40 at the pier. River fares do not count toward TfL daily caps.' },
  { id: 'skyGarden', title: 'Sky Garden · free evening entry', when: '24 Oct · 18:00', deadline: 'Book when the three-week window opens', price: 'Free', url: 'https://skygarden.london/booking/book-a-free-ticket/', note: 'Weekend visit. Arrive for security by 17:40; the free ticket currently allows one hour inside.' },
  { id: 'abbey', title: 'Westminster Abbey', when: '26 Oct · 09:30', deadline: 'Book 6–8 weeks ahead', price: 'check live price', url: 'https://tickets.westminster-abbey.org/', note: 'Working church; check closures 48 hours before.' },
  { id: 'frameless', title: 'FRAMELESS · priority', when: '26 Oct · 16:00', deadline: 'Must book when slots open', price: 'check live price', url: 'https://frameless.com/tickets-and-prices/', note: 'Protected two-hour visit. Reach Marble Arch Place by 15:45 and reconfirm the final Monday closing time.' },
  { id: 'potions', title: 'Magic Potions Tavern (Optional)', when: '27 Oct · 17:15', deadline: 'Reserve early for a group', price: 'check package', url: 'https://www.departmentofmagic.com/potions', note: '75-minute booking; request alcoholic/non-alcoholic mix.' },
  { id: 'urquhart', title: 'Urquhart Castle', when: '28 Oct · 15:00/15:30', deadline: 'Book several weeks ahead', price: '£14 current online reference', url: 'https://www.historicenvironment.scot/visit-a-place/places/urquhart-castle/', note: 'October closing 17:00; protect this slot.' },
]

export const transportOptions = [
  {
    title: 'Heathrow → Wombat’s', best: 'Planned group transfer', winner: 'Pre-booked shuttle',
    options: [
      { name: 'Pre-booked shuttle', time: 'about 60–110 min after pickup', cost: 'use confirmed group quote', note: 'Door to door with luggage. Share the driver contact and flight details with all four travellers.' },
      { name: 'Elizabeth line backup', time: '75–95 min', cost: 'about £13–16', note: 'Use Whitechapel, then walk or make one local hop to Aldgate East if the shuttle fails.' },
      { name: 'Taxi / rideshare backup', time: '60–110 min', cost: 'often £70–120+', note: 'Traffic-sensitive emergency alternative; confirm that the vehicle fits four people and luggage.' }
    ]
  },
  {
    title: 'London daily travel', best: 'Lowest friction', winner: 'Contactless PAYG',
    options: [
      { name: 'Contactless', time: 'Tap and go', cost: 'Zone 1–2 cap reference £8.90', note: 'Each person needs a separate card/device. Always use the same one to receive capping.' },
      { name: 'Oyster', time: 'Setup required', cost: 'same PAYG structure', note: 'Useful if a foreign card has fees or is not accepted. Requires card/deposit logistics.' },
      { name: 'Paper tickets', time: 'Slowest', cost: 'usually worst value', note: 'Avoid for normal Tube/bus use.' }
    ]
  },
  {
    title: 'Edinburgh Airport', best: 'Compare on the day', winner: 'Tram or Airlink 100',
    options: [
      { name: 'Airlink 100', time: 'about 30–40 min', cost: '£6 current single fare', note: 'Frequent from Waverley Bridge; luggage racks and direct airport service.' },
      { name: 'Tram', time: 'about 30 min', cost: '£7.90 current single fare', note: 'Predictable and comfortable; use the nearest central stop and buy before boarding.' },
      { name: 'Taxi', time: 'about 25–40 min', cost: 'higher, shared by group', note: 'Can make sense for 3–4 people with luggage; traffic-sensitive.' }
    ]
  }
]

export const travelApps = [
  { name: 'Citymapper', tag: 'London navigation', priority: 'Essential', url: 'https://citymapper.com/', why: 'Compares Tube, bus, walking and mixed routes with live disruption-aware alternatives.', how: 'Save each day’s important journey, then tap GO for step-by-step navigation and get-off alerts. Star routes so they remain available with weak signal underground.' },
  { name: 'TfL Go', tag: 'Official London transport', priority: 'Essential', url: 'https://tfl.gov.uk/maps_/tfl-go', why: 'Official line status, live arrivals, station facilities, fare history and step-free routing.', how: 'Check Status before leaving each morning. Use the live map for closures and the step-free filter when carrying luggage; compare it with Citymapper before committing to a route.' },
  { name: 'Trainline', tag: 'UK rail tracking', priority: 'Recommended', url: 'https://www.thetrainline.com/information/apps', why: 'Shows live platforms, delays, calling points and alternatives across UK rail operators.', how: 'Search the already-booked King’s Cross → Edinburgh service and tap Track. Keep the actual ticket in the original LNER email/app or wallet rather than buying it again.' },
  { name: 'Google Maps', tag: 'Offline maps', priority: 'Essential', url: 'https://support.google.com/maps/answer/6291838?hl=en', why: 'Reliable saved places, walking directions and offline driving coverage in low-signal Highland areas.', how: 'Before departure, download London, Edinburgh and the full Highlands driving corridor. Offline mode supports driving but not live traffic or public-transport updates.' },
  { name: 'Met Office Weather', tag: 'Weather warnings', priority: 'Essential', url: 'https://weather.metoffice.gov.uk/weather-app', why: 'Official UK rain radar, hourly wind and rain forecasts, and severe-weather notifications.', how: 'Save London, Edinburgh, Aviemore, Fort Augustus and Glencoe. Check warnings and wind gusts each morning before hills, boats or Highland driving.' },
  { name: 'Traveline Scotland', tag: 'Scottish public transport', priority: 'Recommended', url: 'https://www.transport.gov.scot/our-approach/keep-scotland-moving/plan-your-journey/', why: 'Combines Scottish buses, coaches, rail, trams, subway and ferries with departures and disruption notices.', how: 'Use it for Edinburgh buses, airport alternatives and live departure boards. Set Castle Rock Hostel as the return destination.' },
  { name: 'Traffic Scotland', tag: 'Highlands road safety', priority: 'Essential', url: 'https://www.traffic.gov.scot/', why: 'Official incidents, roadworks, trunk-road cameras and weather-warning layers for the A9 and A82.', how: 'It is a mobile website, not an app. Add it to the home screen and check the planned route before collecting the car and again before leaving Fort Augustus.' },
  { name: 'Thames Clippers Tickets', tag: 'Night boat', priority: 'Recommended', url: 'https://www.thamesclippers.com/commuters/download-the-tickets-app', why: 'Official journey planning, ticket wallet and real-time boat tracking.', how: 'Track the target 17:31 Westminster service live. Current Sunday contactless is cheaper than an app single: tap in at Westminster and out at the chosen pier using the same card or device.' },
  { name: 'Splitwise', tag: 'Group expenses', priority: 'Useful', url: 'https://www.splitwise.com/', why: 'Tracks who paid for food, fuel, parking and shared bookings without settling after every purchase.', how: 'Create one UK trip group in GBP, add each payment when it happens and settle once or twice rather than daily.' },
  { name: 'Your airline app', tag: 'Flight check-in', priority: 'Essential', url: '', why: 'Provides the authoritative check-in window, boarding pass, terminal, gate and disruption notifications.', how: 'Add the booking reference, enable notifications and download the boarding pass to the phone wallet. Northbound’s reminder is a backup, not live airline status.' }
]

export const edinburghFoodAreas = [
  { name: 'Kalpna', area: 'Nicolson Street / Southside', assurance: 'Vegan dishes in vegetarian kitchen', strict: false, price: '££', hours: 'Official site currently lists daily service from 12:00', location: 'Kalpna Restaurant Edinburgh', url: 'https://www.kalpnarestaurant.co.uk/menus.html', best: 'Vegan thali or clearly identified vegan dishes', route: 'Selected for lunch on 30 October; also useful from the Southside on other days.', note: 'Choose a dish explicitly marked vegan for no egg ingredients; ask directly if cross-contact matters.' },
  { name: 'Soul Vegan', area: 'Nicolson Street / Southside', assurance: 'Fully vegan', strict: true, price: '££', hours: 'Tuesday 17:00–21:30; Wed–Sun lunch and dinner vary', location: 'Soul Vegan Edinburgh', url: 'https://soulvegan.uk/', best: 'Malaysian noodles, tofu and rice dishes', route: 'Selected for Tuesday dinner after Victoria Street.', note: 'Strong strict no-egg choice because the menu is fully plant-based; reconfirm the latest service hours.' },
  { name: 'Sora Diana', area: 'Southside / toward Morningside', assurance: 'Fully vegan', strict: true, price: '£££', hours: 'Official seasonal hours currently start from 16:00 most trip days', location: 'Sora Diana Edinburgh', url: 'https://www.thevegansora.com/sora-diana/', best: 'Vegan Italian dinner and desserts', route: 'Useful evening alternative from Nicolson Street or Morningside, but not the shortest Old Town route.', note: 'Fully vegan menu means no egg ingredients; reserve for a group.' },
  { name: 'Black Rabbit', area: 'Lothian Road / Tollcross / Bruntsfield', assurance: 'Fully vegan', strict: true, price: '£', hours: 'Tuesday–Sunday 10:00–16:00', location: 'Black Rabbit Edinburgh Brougham Street', url: 'https://www.blackrabbitedinburgh.co.uk/', best: 'Deli sandwiches, cakes and brunch', route: 'Selected for Saturday brunch before Dean Village.', note: 'One of the strongest daytime no-egg options near Lothian Road and north of Morningside.' },
  { name: 'Hendersons', area: 'Lothian Road / Tollcross / Bruntsfield', assurance: 'Vegan dishes in mixed vegetarian kitchen', strict: false, price: '££', hours: 'Daily 12:00–22:00; kitchen normally closed 16:00–17:00', location: 'Hendersons Restaurant Edinburgh', url: 'https://www.hendersonsrestaurant.com/menu-edinburgh', best: 'Seasonal vegan dinner near the day’s west-side route', route: 'Selected for Friday dinner after Grassmarket.', note: 'Order dishes marked vegan for no egg ingredients. The official menu warns that dairy and other allergens are handled in the kitchen.' },
  { name: 'Paradise Palms', area: 'Lothian Street / university quarter', assurance: 'Vegan food menu', strict: true, price: '££', hours: 'Food served daily; verify current kitchen hours', location: 'Paradise Palms Edinburgh', url: 'https://www.theparadisepalms.com/', best: 'Vegan Mexican food and a lively evening', route: 'Closer to the university than Lothian Road; useful after Nicolson Street.', note: 'The current official food menu is vegan, but this is a bar and music venue rather than a quiet café.' },
  { name: 'FacePlant Foods', area: 'Leith', assurance: 'Fully vegan', strict: true, price: '£', hours: 'Thursday–Sunday daytime; hours change seasonally', location: 'FacePlant Foods Leith Edinburgh', url: 'https://www.faceplantfoods.co.uk/our-place', best: 'Grilled cheeze, deli sandwiches and quick lunch', route: 'A deliberate Leith detour, not on the current sightseeing route.', note: 'Fully vegan and no egg ingredients; check same-week opening hours before travelling to Duke Street.' },
  { name: 'Morningside Larder', area: 'Morningside', assurance: 'Vegan on request in mixed kitchen', strict: false, price: '££', hours: 'Morning to mid-afternoon daily', location: 'Morningside Larder Edinburgh', url: 'https://edinburghlarder.co.uk/morningside-larder-cafe/', best: 'Neighbourhood breakfast when already in Morningside', route: 'Use only if visiting Morningside; it is not on the optimized city route.', note: 'The regular vegetarian breakfast includes egg. Request the vegan version explicitly; not suitable for strict egg allergy without direct confirmation.' }
]

export const prepTasks = [
  { group: 'Travel documents + organisation', items: ['Passport and confirmed UK visa or entry permission for every traveller', 'Travel insurance policy number and emergency-assistance phone number', 'Offline and printed copies of flights, hostels, rail, car hire and attraction confirmations', 'Driving licence, rental confirmation and any IDP required by the rental company', 'Emergency contacts, accommodation addresses and itinerary shared with someone at home', 'Separate cloud folder with encrypted document copies and one paper backup', 'Small document organiser for passports, receipts and physical tickets'] },
  { group: 'Anti-theft essentials', items: ['Cross-body day bag with lockable or inward-facing zips', 'Phone tether or wrist strap for crowded markets and transport', 'Small padlock for hostel locker plus one spare key or combination record', 'Luggage tracker in each main bag with fresh battery', 'Backup bank card stored separately from the daily wallet', 'Only a small amount of GBP cash in the daily wallet; split emergency cash', 'Compact cable lock only if useful for luggage storage; never attach bags where prohibited'] },
  { group: 'Power + tech', items: ['UK Type G travel adapter and compact multi-port USB charger', 'Airline-compliant power bank kept in hand luggage; verify the airline battery limit', 'Short and long charging cables plus one shared spare', 'Car USB charger and secure phone mount for Highlands navigation', 'Earbuds or headphones for audio guides and travel', 'Water-resistant phone pouch and resealable bags for cables', 'Download offline maps, tickets, playlists and essential phone numbers before departure'] },
  { group: 'Weather + water protection', items: ['Waterproof breathable shell with hood', 'Warm mid-layer, thermal base layer, compact gloves and warm hat', 'Water-resistant broken-in walking shoes with good grip', 'Compact umbrella for cities, but rely on the shell in Highland wind', 'Rain cover or dry liner for the day bag', 'Reusable water bottle and small thermos if useful', 'Microfibre cloth for glasses, camera and wet phone screens', 'Spare socks and resealable wet-item bag in the daypack'] },
  { group: 'Personal comfort + medicines', items: ['Regular medicines in original labelled packaging and carried in hand luggage', 'Copy of prescriptions and any required doctor letter', 'Small first-aid pouch with plasters, blister treatment and personal pain relief', 'Motion-sickness remedy only if normally suitable for you; ask a pharmacist if unsure', 'Earplugs, eye mask and lightweight sleepwear for hostels', 'Hand sanitiser, tissues, lip balm and moisturiser', 'Comfortable day socks and optional compression socks for flights', 'Enough medicine for the trip plus a small delay buffer'] },
  { group: 'Money + connectivity', items: ['Enable international card usage and understand foreign-transaction fees', 'Carry two payment methods; each London traveller needs a separate contactless card or device', 'Set up UK roaming or an eSIM before departure', 'Create the shared-expense group in GBP', 'Store bank freeze-card numbers somewhere accessible without the phone', 'Keep a small GBP cash backup for rural stops'] },
  { group: 'Still to book', items: ['Sky Garden 18:00 free ticket for 24 October', 'FRAMELESS 16:00 priority slot', 'Tower of London earliest Sunday slot', 'Westminster Abbey 09:30 entry', 'Confirm the 17:31 Westminster RB6 boat and compare Sunday contactless fare before buying', 'Urquhart Castle timed entry', 'Optional Magic Potions Tavern', 'Vegetarian dinner tables for the larger group'] },
  { group: '48 hours before', items: ['Complete airline check-in when it opens and save boarding passes offline', 'Check TfL, LNER and National Rail disruption', 'Check Met Office warnings and Traffic Scotland for the A9 and A82', 'Reconfirm attraction closures, market hours and restaurant reservations', 'Download every ticket and booking to each relevant traveller’s phone', 'Charge power banks and confirm they comply with the airline rules', 'Share flight, hostel and rental details with the whole group'] }
]

export const sources = [
  ['TfL fares and capping', 'https://tfl.gov.uk/fares/find-fares/tube-and-rail-fares'],
  ['TfL Heathrow Elizabeth line', 'https://tfl.gov.uk/modes/elizabeth-line/getting-to-and-from-heathrow-on-the-elizabeth-line'],
  ['Uber Boat weekend westbound timetable', 'https://www.thamesclippers.com/plan-your-journey/timetable/weekend-westbound'],
  ['Uber Boat official fares', 'https://www.thamesclippers.com/plan-your-journey/ticket-information'],
  ['Tower of London official', 'https://www.hrp.org.uk/tower-of-london/visit/opening-and-closing-times/'],
  ['Westminster Abbey official', 'https://www.westminster-abbey.org/visit-us'],
  ['Sky Garden booking and visitor hours', 'https://skygarden.london/booking/'],
  ['FRAMELESS official', 'https://frameless.com/opening-times/'],
  ['Outernet free entry official', 'https://www.outernet.com/faqs/is-outernet-london-free'],
  ['Borough Market official', 'https://boroughmarket.org.uk/visit-us/'],
  ['Covent Garden official hours', 'https://www.coventgarden.london/about/faqs'],
  ['LNER London–Edinburgh', 'https://www.lner.co.uk/routes/london-kings-cross-to-edinburgh-trains/'],
  ['Edinburgh Castle official', 'https://www.edinburghcastle.scot/plan-your-visit/opening-times/'],
  ['Urquhart Castle official', 'https://www.historicenvironment.scot/visit-a-place/places/urquhart-castle/'],
  ['Department of Magic official', 'https://www.departmentofmagic.com/potions'],
  ['Lannan official FAQ', 'https://www.lannanbakery.com/faq'],
  ['Kalpna official menu', 'https://www.kalpnarestaurant.co.uk/menus.html'],
  ['Soul Vegan official', 'https://soulvegan.uk/'],
  ['Sora Diana official', 'https://www.thevegansora.com/sora-diana/'],
  ['Black Rabbit official', 'https://www.blackrabbitedinburgh.co.uk/'],
  ['Hendersons official menu', 'https://www.hendersonsrestaurant.com/menu-edinburgh'],
  ['FacePlant Foods official', 'https://www.faceplantfoods.co.uk/our-place'],
  ['UK clock change', 'https://www.gov.uk/when-do-the-clocks-change'],
  ['Traffic Scotland', 'https://www.traffic.gov.scot/'],
  ['Edinburgh Airport tram', 'https://www.edinburghairport.com/transport-links/trams'],
  ['Airlink 100 official', 'https://airlink100.co.uk/useful-information/'],
  ['UK entry permission checker', 'https://www.gov.uk/check-uk-visa'],
  ['UK foreign travel checklist', 'https://www.gov.uk/guidance/foreign-travel-checklist'],
  ['UK hand-luggage electronics rules', 'https://www.gov.uk/hand-luggage-restrictions/electronic-devices-and-electrical-items'],
  ['NHS Fit for Travel medicines guidance', 'https://fitfortravel.nhs.uk/advice/general-travel-health-advice/travelling-with-medicines.aspx'],
  ['Open-Meteo weather data', 'https://open-meteo.com/'],
  ['Frankfurter exchange rates', 'https://frankfurter.dev/'],
  ['Wikimedia place photography', 'https://commons.wikimedia.org/']
]
