// Site-wide constants — edit these to update contact info, links, etc.
export const site = {
  name: 'Ride Norfolk',
  domain: 'ridenorfolk.bike',
  tagline: 'Where Norfolk Rides.',
  description:
    'The go-to source for group bike rides, the Cowboy Trail, and cycling in Norfolk, Nebraska. All paces, no drop, always welcome.',
  email: 'hello@ridenorfolk.bike',
  stravaClubUrl: 'https://www.strava.com/clubs/ride-norfolk', // update with real club URL
  facebookUrl: '', // optional
  // Newsletter (Kit / ConvertKit) — paste your form action URL when ready
  kitFormAction: '', // e.g. https://app.kit.com/forms/XXXXXX/subscriptions
};

export const shop = {
  name: 'Norfork Bike',
  contact: 'Jason',
  address: '321 W Norfolk Ave, Suite 300, Norfolk, NE 68701',
  phone: '402-371-3325',
  phoneHref: 'tel:+14023713325',
  email: 'norforkbike@gmail.com',
  hours: 'Tue–Fri: 12–6 pm · Sat: 10 am–2 pm',
};

export const nav = [
  { label: 'Rides', href: '/rides/' },
  { label: 'Events', href: '/events/' },
  { label: 'Safety', href: '/safety/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];
