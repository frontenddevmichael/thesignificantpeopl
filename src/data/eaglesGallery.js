const files = [
  'WhatsApp Image 2026-07-31 at 3.00.44 PM.jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.45 PM.jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.46 PM.jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.47 PM.jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.47 PM (1).jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.47 PM (2).jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.48 PM.jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.48 PM (1).jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.48 PM (2).jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.48 PM (3).jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.48 PM (4).jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.49 PM.jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.50 PM.jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.50 PM (1).jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.50 PM (2).jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.51 PM.jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.51 PM (1).jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.51 PM (2).jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.51 PM (3).jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.51 PM (4).jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.52 PM.jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.52 PM (1).jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.52 PM (2).jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.52 PM (3).jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.52 PM (4).jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.53 PM.jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.53 PM (1).jpeg',
  'WhatsApp Image 2026-07-31 at 3.00.53 PM (2).jpeg',
];

export const eaglesEvent = {
  id: 'eagles-of-destiny',
  name: 'The Eagles of Destiny Congress',
  month: 'August',
  venue: "Evang. Pelemo's Camp Ground, Ekpedo",
  scripture: 'Isaiah 40:31',
};

export const eaglesGalleryImages = files.map((file, i) => ({
  src: `/Photos/eagles-congress/${encodeURIComponent(file)}`,
  alt: `Eagles of Destiny Congress photo ${i + 1}`,
}));
