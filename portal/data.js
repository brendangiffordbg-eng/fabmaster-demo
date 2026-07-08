// Demo dataset for the Fabmaster customer portal concept.
// The customer, assets, dates and dollar figures are fictional sample data,
// kept consistent with the portal mock on the pitch page (index.html).

const PORTAL = {
  today: '2026-07-07',

  customer: {
    name: 'Maple Creek Grain Ltd.',
    site: 'Main Elevator',
    program: 'Pro Maintenance Plan',
    memberSince: 'October 2024',
    rep: 'Ryan — 519.437.5297',
  },

  assets: [
    { id: 'FM-0417', name: 'Receiving Leg #1', type: 'Bucket elevator', area: 'Receiving pit', status: 'ok', statusLabel: 'Compliant', lastPMI: '2026-03-14', nextPMI: 'Aug 18, 2026', note: 'Vibration: normal. Belt tension within spec.', openRec: null },
    { id: 'FM-0418', name: 'Drag Conveyor — East', type: 'Drag conveyor', area: 'East gallery', status: 'due', statusLabel: 'PMI due Aug 2026', lastPMI: '2026-03-14', nextPMI: 'Aug 18, 2026', note: 'Chain wear at 60% — replacement planned post-harvest.', openRec: 'REC-121' },
    { id: 'FM-0419', name: 'Receiving Leg #2', type: 'Bucket elevator', area: 'Receiving pit', status: 'ok', statusLabel: 'Compliant', lastPMI: '2026-03-14', nextPMI: 'Aug 18, 2026', note: 'Belt tracking adjusted on site during spring PMI.', openRec: null },
    { id: 'FM-0420', name: 'Overhead Distributor', type: '8-duct distributor', area: 'Headhouse', status: 'ok', statusLabel: 'Compliant', lastPMI: '2026-03-14', nextPMI: 'Aug 18, 2026', note: 'Indexing verified. No abnormal wear.', openRec: null },
    { id: 'FM-0421', name: 'Catwalk & Fall Arrest — Tower B', type: 'Structure / access', area: 'Tower B', status: 'overdue', statusLabel: 'Action needed', lastPMI: '2025-10-03', nextPMI: 'Pending anchor work', note: 'Two tie-off anchors failed recertification — replacement quoted.', openRec: 'REC-118' },
    { id: 'FM-0422', name: 'Shipping Leg', type: 'Bucket elevator', area: 'Loadout', status: 'ok', statusLabel: 'Compliant', lastPMI: '2026-03-14', nextPMI: 'Aug 18, 2026', note: 'Head pulley lagging at 40% wear — monitoring.', openRec: 'REC-116' },
    { id: 'FM-0423', name: 'Drag Conveyor — West', type: 'Drag conveyor', area: 'West gallery', status: 'ok', statusLabel: 'Compliant', lastPMI: '2026-03-14', nextPMI: 'Aug 18, 2026', note: 'No findings at last PMI.', openRec: null },
    { id: 'FM-0424', name: 'Screw Auger — Bin Row A', type: 'U-trough auger', area: 'Bin row A', status: 'ok', statusLabel: 'Compliant', lastPMI: '2026-03-14', nextPMI: 'Aug 18, 2026', note: 'Hanger bearing replaced during spring PMI.', openRec: null },
    { id: 'FM-0425', name: 'Grain Dryer', type: 'Tower dryer', area: 'Dryer pad', status: 'due', statusLabel: 'Service due Sep 2026', lastPMI: '2026-03-14', nextPMI: 'Sep 2, 2026 (proposed)', note: 'Pre-season service recommended before fall drying.', openRec: 'REC-119' },
    { id: 'FM-0426', name: 'Dust Collection System', type: 'Cyclone + baghouse', area: 'Headhouse', status: 'ok', statusLabel: 'Compliant', lastPMI: '2026-03-14', nextPMI: 'Aug 18, 2026', note: 'Filters serviced. Airflow within spec.', openRec: null },
    { id: 'FM-0427', name: 'Catwalk & Ladders — Tower A', type: 'Structure / access', area: 'Tower A', status: 'ok', statusLabel: 'Compliant', lastPMI: '2026-03-14', nextPMI: 'Aug 18, 2026', note: 'Anchors certified to May 2027.', openRec: null },
    { id: 'FM-0428', name: 'Loadout Gantry & Spout', type: 'Structure', area: 'Loadout', status: 'ok', statusLabel: 'Compliant', lastPMI: '2026-03-14', nextPMI: 'Aug 18, 2026', note: 'Spout liner wear noted — plan replacement within two seasons.', openRec: null },
  ],

  // Each report carries an itemized `lines` list so the printable report
  // page (report.html) can render a full findings table. line.sev is one of
  // 'fixed' | 'low' | 'medium' | 'high'; the counts below are kept in sync
  // with the lines (findings === lines.length, correctedOnSite === # 'fixed').
  reports: [
    {
      id: 'RPT-2026-031', title: 'Spring 2026 Semi-Annual PMI', date: '2026-03-14',
      assetsInspected: 11, findings: 7, correctedOnSite: 3, crew: 'Fabmaster millwright crew (2)',
      summary: 'Full safety and wear inspection of all conveying and receiving equipment. Three minor items corrected on site; chain wear on FM-0418 flagged for post-harvest replacement.',
      highlights: ['FM-0418 drag chain at 60% wear — quote #1204 issued', 'FM-0419 belt tracking corrected on site', 'FM-0424 hanger bearing replaced on site', 'Vibration screening: all drives normal'],
      lines: [
        { asset: 'FM-0419', finding: 'Belt tracking off-centre', action: 'Corrected on site', sev: 'fixed' },
        { asset: 'FM-0424', finding: 'Hanger bearing worn — Bin Row A auger', action: 'Replaced on site', sev: 'fixed' },
        { asset: 'FM-0420', finding: 'Distributor indexing sensor loose', action: 'Tightened & retested on site', sev: 'fixed' },
        { asset: 'FM-0418', finding: 'Drag chain wear at 60%', action: 'Replace post-harvest · Quote #1204', sev: 'medium' },
        { asset: 'FM-0422', finding: 'Head pulley lagging at 40%', action: 'Monitor — re-check at next PMI', sev: 'low' },
        { asset: 'FM-0428', finding: 'Loadout spout liner wear', action: 'Plan replacement within two seasons', sev: 'low' },
        { asset: 'FM-0426', finding: 'Dust collector filter differential rising', action: 'Filters serviced; monitor airflow', sev: 'low' },
      ],
    },
    {
      id: 'RPT-2025-089', title: 'Fall 2025 Semi-Annual PMI', date: '2025-10-03',
      assetsInspected: 12, findings: 9, correctedOnSite: 4, crew: 'Fabmaster millwright crew (2)',
      summary: 'Pre-winter inspection including structural and fall-arrest review of both towers. Two tie-off anchors on Tower B failed recertification and were tagged out of service.',
      highlights: ['FM-0421 anchors failed recert — quote #1187 issued', 'Tower A anchors recertified to May 2027', 'Dryer pre-season service recommended for 2026'],
      lines: [
        { asset: 'FM-0421', finding: 'Two tie-off anchors failed recertification', action: 'Tagged out of service · Quote #1187', sev: 'high' },
        { asset: 'FM-0427', finding: 'Tower A fall-arrest anchors due recert', action: 'Recertified on site to May 2027', sev: 'fixed' },
        { asset: 'FM-0417', finding: 'Receiving leg belt tension low', action: 'Adjusted on site', sev: 'fixed' },
        { asset: 'FM-0423', finding: 'West drag conveyor guard fastener missing', action: 'Replaced on site', sev: 'fixed' },
        { asset: 'FM-0426', finding: 'Dust collection duct joint leaking', action: 'Sealed on site', sev: 'fixed' },
        { asset: 'FM-0425', finding: 'Dryer burner service overdue', action: 'Pre-season service recommended for 2026', sev: 'medium' },
        { asset: 'FM-0418', finding: 'Drag chain wear at ~50%', action: 'Monitor — re-check spring', sev: 'low' },
        { asset: 'FM-0422', finding: 'Head pulley lagging wear beginning', action: 'Monitor', sev: 'low' },
        { asset: 'FM-0428', finding: 'Loadout spout liner wear', action: 'Monitor', sev: 'low' },
      ],
    },
    {
      id: 'RPT-2025-027', title: 'Spring 2025 Semi-Annual PMI', date: '2025-03-21',
      assetsInspected: 12, findings: 11, correctedOnSite: 6, crew: 'Fabmaster millwright crew (3)',
      summary: 'First full spring cycle under the program. Guarding upgrades completed on both receiving legs; all findings closed before harvest.',
      highlights: ['Guard panels fabricated and installed on FM-0417 / FM-0419', 'Bin row A auger flighting repaired'],
      lines: [
        { asset: 'FM-0417', finding: 'Receiving leg guard panel gap', action: 'Guard panel fabricated & installed', sev: 'fixed' },
        { asset: 'FM-0419', finding: 'Receiving leg guard panel gap', action: 'Guard panel fabricated & installed', sev: 'fixed' },
        { asset: 'FM-0424', finding: 'Bin Row A auger flighting worn', action: 'Flighting repaired', sev: 'fixed' },
        { asset: 'FM-0420', finding: 'Distributor access cover loose', action: 'Refastened on site', sev: 'fixed' },
        { asset: 'FM-0426', finding: 'Dust collection filters at end of life', action: 'Filters replaced on site', sev: 'fixed' },
        { asset: 'FM-0422', finding: 'Shipping leg boot seal leaking dust', action: 'Reseated on site', sev: 'fixed' },
        { asset: 'FM-0418', finding: 'Drag chain wear at ~40%', action: 'Monitor', sev: 'low' },
        { asset: 'FM-0421', finding: 'Fall-arrest anchors due recert next cycle', action: 'Scheduled for fall recert', sev: 'medium' },
        { asset: 'FM-0425', finding: 'Dryer moisture sensor drift', action: 'Recalibrated; monitor', sev: 'low' },
        { asset: 'FM-0428', finding: 'Loadout gantry surface corrosion', action: 'Spot-treated; monitor', sev: 'low' },
        { asset: 'FM-0427', finding: 'Tower A ladder rung wear', action: 'Logged; monitor', sev: 'low' },
      ],
    },
    {
      id: 'RPT-2024-102', title: 'Baseline Inspection & Asset Tagging', date: '2024-10-17',
      assetsInspected: 12, findings: 14, correctedOnSite: 2, crew: 'Fabmaster millwright crew (3)',
      summary: 'Program onboarding: all 12 assets tagged FM-0417 through FM-0428, baseline condition documented with photos, and the inspection schedule established.',
      highlights: ['12 assets tagged and photographed', 'Baseline asset register issued'],
      lines: [
        { asset: 'FM-0417', finding: 'Baseline — guard gaps at receiving leg', action: 'Noted for spring guard upgrade', sev: 'low' },
        { asset: 'FM-0418', finding: 'Baseline — drag chain ~30% wear', action: 'Baseline logged; monitor', sev: 'low' },
        { asset: 'FM-0419', finding: 'Baseline — guard gaps at receiving leg', action: 'Noted for spring guard upgrade', sev: 'low' },
        { asset: 'FM-0420', finding: 'Baseline — distributor indexing within spec', action: 'No action', sev: 'low' },
        { asset: 'FM-0421', finding: 'Baseline — fall-arrest anchors present, recert due', action: 'Scheduled for recert', sev: 'medium' },
        { asset: 'FM-0422', finding: 'Baseline — head pulley lagging fair', action: 'Monitor', sev: 'low' },
        { asset: 'FM-0423', finding: 'Baseline — guard fastener missing', action: 'Replaced on site', sev: 'fixed' },
        { asset: 'FM-0424', finding: 'Baseline — auger flighting wear', action: 'Noted for spring repair', sev: 'low' },
        { asset: 'FM-0425', finding: 'Baseline — dryer service history unknown', action: 'Pre-season service recommended', sev: 'medium' },
        { asset: 'FM-0426', finding: 'Baseline — dust system functional, filters dirty', action: 'Filters serviced on site', sev: 'fixed' },
        { asset: 'FM-0427', finding: 'Baseline — Tower A ladders & cage sound', action: 'No action', sev: 'low' },
        { asset: 'FM-0428', finding: 'Baseline — loadout spout liner wear', action: 'Monitor', sev: 'low' },
        { asset: '—', finding: 'Baseline — no asset register on file', action: 'Register created & issued', sev: 'low' },
        { asset: '—', finding: 'Baseline — inspection schedule not established', action: 'Program schedule set', sev: 'low' },
      ],
    },
  ],

  pmis: [
    { when: 'Overdue', title: 'Anchor replacement & recert — Tower B', assets: ['FM-0421'], status: 'overdue', detail: 'Two tie-off anchors tagged out of service Oct 2025. Work is quoted (#1187) and awaiting approval — recommended before fall harvest.' },
    { when: 'Aug 18, 2026', title: 'Semi-Annual PMI — pre-harvest', assets: 'all', status: 'confirmed', detail: 'Full inspection of all 12 tagged assets, including vibration analysis on critical drives. Crew on site approx. two days.' },
    { when: 'Sep 2, 2026', title: 'Dryer pre-season service', assets: ['FM-0425'], status: 'proposed', detail: 'Burner, fans and safety-circuit service before the fall drying season. Proposed date — confirm with Ryan.' },
    { when: 'Nov 2026', title: 'Drag chain replacement — East conveyor', assets: ['FM-0418'], status: 'planned', detail: 'Chain and sprocket replacement scheduled for the post-harvest window, per quote #1204.' },
    { when: 'Mar 2027', title: 'Semi-Annual PMI — spring', assets: 'all', status: 'tentative', detail: 'Spring cycle of the Pro Maintenance Plan. Date confirmed in February.' },
  ],

  recommendations: [
    { id: 'REC-118', quote: '#1187', asset: 'FM-0421', title: 'Replace two tie-off anchors — Tower B', severity: 'high', status: 'open', amount: '$2,480', detail: 'Two roof-level tie-off anchors failed recertification and are tagged out of service. Replace and recertify before fall harvest so Tower B access is fully compliant.', action: 'Approve quote' },
    { id: 'REC-119', quote: '#1198', asset: 'FM-0425', title: 'Pre-season dryer service', severity: 'medium', status: 'open', amount: '$1,150', detail: 'Burner and fan service plus safety-circuit check before the fall drying season. Proposed for Sep 2, 2026.', action: 'Approve quote' },
    { id: 'REC-121', quote: '#1204', asset: 'FM-0418', title: 'Replace drag chain & sprockets — East conveyor', severity: 'medium', status: 'planned', amount: '$8,950', detail: 'Chain measured at 60% wear during the spring PMI. Replacement booked for the post-harvest window (Nov 2026) to avoid mid-season downtime.', action: 'View quote' },
    { id: 'REC-116', quote: null, asset: 'FM-0422', title: 'Monitor head pulley lagging — Shipping Leg', severity: 'low', status: 'monitor', amount: null, detail: 'Lagging at roughly 40% wear. No action needed yet — re-measured at every PMI; re-lag when wear passes 70%.', action: null },
    { id: 'REC-104', quote: '#1163', asset: 'FM-0424', title: 'Replace hanger bearing — Bin Row A auger', severity: 'medium', status: 'completed', amount: '$640', detail: 'Worn hanger bearing found during the spring PMI and replaced on site the same visit.', action: null, completed: '2026-03-14' },
  ],

  documents: [
    { name: 'Spring 2026 PMI Report', category: 'Inspection reports', date: '2026-03-14', type: 'PDF', size: '4.2 MB', reportId: 'RPT-2026-031' },
    { name: 'Fall 2025 PMI Report', category: 'Inspection reports', date: '2025-10-03', type: 'PDF', size: '5.1 MB', reportId: 'RPT-2025-089' },
    { name: 'Spring 2025 PMI Report', category: 'Inspection reports', date: '2025-03-21', type: 'PDF', size: '4.8 MB', reportId: 'RPT-2025-027' },
    { name: 'Baseline Asset Register', category: 'Program records', date: '2024-10-17', type: 'PDF', size: '2.9 MB' },
    { name: 'Asset Register (spreadsheet)', category: 'Program records', date: '2026-03-14', type: 'CSV', size: '18 KB' },
    { name: 'Fall-Arrest Anchor Certificates — Tower A', category: 'Certificates', date: '2025-10-03', type: 'PDF', size: '1.1 MB' },
    { name: 'Quote #1187 — Tower B anchor replacement', category: 'Quotes', date: '2025-10-10', type: 'PDF', size: '310 KB' },
    { name: 'Quote #1204 — East drag chain replacement', category: 'Quotes', date: '2026-03-14', type: 'PDF', size: '290 KB' },
    { name: 'Certificate of Insurance — Fabmaster Welding', category: 'Compliance', date: '2026-01-05', type: 'PDF', size: '220 KB' },
    { name: 'CWB Certification — Fabmaster Welding', category: 'Compliance', date: '2025-11-30', type: 'PDF', size: '180 KB' },
  ],
};
