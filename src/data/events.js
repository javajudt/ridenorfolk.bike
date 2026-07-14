// Upcoming events & rides calendar.
// EDIT THIS LIST each week/month. Dates are ISO (YYYY-MM-DD). `register` links can
// point to a form, RSVP page, or be omitted. Later this can be sourced from Supabase.
export const events = [
  {
    date: '2026-07-14',
    endLabel: '',
    title: 'Chipotle Ride',
    type: 'Weekly ride',
    color: 'sunset',
    time: '5:00 & 5:30 pm rollout',
    location: 'Divots Downtown, 206 W Norfolk Ave',
    description: '14-mile loop of Norfolk. Two paces, no drop. Food & drinks at Divots after.',
    register: '',
  },
  {
    date: '2026-07-21',
    title: 'Chipotle Ride',
    type: 'Weekly ride',
    color: 'sunset',
    time: '5:00 & 5:30 pm rollout',
    location: 'Divots Downtown, 206 W Norfolk Ave',
    description: '14-mile loop of Norfolk. Two paces, no drop. Food & drinks at Divots after.',
    register: '',
  },
  {
    date: '2026-07-28',
    title: 'Chipotle Ride',
    type: 'Weekly ride',
    color: 'sunset',
    time: '5:00 & 5:30 pm rollout',
    location: 'Divots Downtown, 206 W Norfolk Ave',
    description: '14-mile loop of Norfolk. Two paces, no drop. Food & drinks at Divots after.',
    register: '',
  },
  {
    date: '2026-07-31',
    title: 'Full Moon Ride — Cowboy Trail',
    type: 'Full moon ride',
    color: 'trail',
    time: '6:45 pm meet · 7:00 pm roll',
    location: 'Broken Bridge parking lot (45th St)',
    description: '~14 mi round-trip to Battle Creek and back. Lights required. Refreshments at the turnaround. (Confirm exact date each month.)',
    register: '',
  },
  {
    date: '2026-08-04',
    title: 'Chipotle Ride',
    type: 'Weekly ride',
    color: 'sunset',
    time: '5:00 & 5:30 pm rollout',
    location: 'Divots Downtown, 206 W Norfolk Ave',
    description: '14-mile loop of Norfolk. Two paces, no drop. Food & drinks at Divots after.',
    register: '',
  },
  {
    date: '2026-08-15',
    title: 'Gravel Grind (example)',
    type: 'Race / event',
    color: 'sky',
    time: 'All day',
    location: 'Northeast Nebraska',
    description: 'Example of a summer race/event listing. Replace with real regional rides and races the group is attending.',
    register: '',
  },
];

// Helper: parse a YYYY-MM-DD as a local date (avoids timezone off-by-one).
export function parseDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

export function upcomingEvents(fromDate = new Date()) {
  const start = new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate());
  return events
    .filter((e) => parseDate(e.date) >= start)
    .sort((a, b) => parseDate(a.date) - parseDate(b.date));
}

export function formatDate(iso) {
  return parseDate(iso).toLocaleDateString('en-US', {
    weekday: 'short', month: 'short', day: 'numeric',
  });
}
