// The regular rides. Edit here to update details site-wide.
export const rides = [
  {
    slug: 'chipotle',
    name: 'The Chipotle Ride',
    kicker: 'Signature weekly ride',
    cadence: 'Every Tuesday · riding season',
    distance: '14-mile loop of Norfolk',
    start: 'Divots Downtown, 206 W Norfolk Ave',
    color: 'sunset',
    summary:
      'Our signature social ride and the heart of the group. A 14-mile loop of Norfolk with two rollouts so every pace has a home. Afterward we gather for food and drinks downtown.',
    groups: [
      { time: '5:00 pm', label: 'Easy group', pace: '8–10 mph', note: 'No-drop and beginner-friendly. Avoids the Prospect Ave hills via Pasewalk Ave.' },
      { time: '5:30 pm', label: 'Faster group', pace: '13–16 mph', note: 'For riders comfortable holding a steadier pace on the full route.' },
    ],
    after: 'Food & drinks at Divots Downtown afterward — park bikes in back (enter from the alley).',
    bring: ['Helmet', 'Water bottle', 'A bike in good working order'],
  },
  {
    slug: 'full-moon',
    name: 'Full Moon Ride',
    kicker: 'Monthly night ride',
    cadence: 'Monthly, around the full moon',
    distance: '~14 miles round-trip on the Cowboy Trail',
    start: 'Broken Bridge parking lot (north of the Cowboy Trail on 45th St)',
    color: 'trail',
    summary:
      'Once a month we ride the Cowboy Trail under a full moon out to Battle Creek and back. Self-supported and no-drop, with refreshments at the turnaround. A second full moon in a month is a "Blue Moon" ride.',
    schedule: [
      { time: '6:45 pm', label: 'Meet at the Broken Bridge trailhead parking lot' },
      { time: '7:00 pm', label: 'Roll out — Norfolk to Battle Creek (7 mi). Slower riders leave ~30 min earlier.' },
      { time: '8–9 pm', label: 'Refreshments in Battle Creek (nachos, burgers, pizza)' },
      { time: '9:00 pm', label: 'Ride back — Battle Creek to Norfolk (7 mi)' },
    ],
    after: 'This is a self-supported, no-drop ride. Slower riders to the front, faster riders to the back, so the group stays together.',
    bring: ['Charged headlight & taillight', 'Helmet', 'Spare inner tube', 'Bike lock', 'Water', 'Tires 38mm (1.5") or wider'],
  },
  {
    slug: 'weekend',
    name: 'Weekend Rides',
    kicker: 'Impromptu',
    cadence: 'Saturdays & Sundays, weather & interest permitting',
    distance: 'Varies',
    start: 'Announced by text / newsletter',
    color: 'sky',
    summary:
      'As the weather warms up, impromptu weekend rides pop up. Saturday mornings tend to be faster road rides; Sunday afternoons lean toward gravel and trail. Reply to the newsletter or text a few days ahead if you are interested.',
    groups: [
      { time: 'Sat AM', label: 'Breakfast road ride', pace: '16+ mph', note: 'Faster-paced. Often ends with breakfast.' },
      { time: 'Sun PM', label: 'Gravel / trail ride', pace: '~14 mph', note: 'Relaxed exploring on gravel and trail.' },
    ],
    after: 'These are set up ad hoc — the best way to hear about them is the newsletter and Strava.',
    bring: ['Helmet', 'Water', 'Snacks for longer routes'],
  },
];

export const getRide = (slug) => rides.find((r) => r.slug === slug);
