const raw = [
  {
    id: 'benin-2023',
    name: 'July 2023 Crusade — Republic of Benin',
    altPrefix: 'Benin Crusade 2023',
    folder: '/Photos/2023 july crusade republic of benin',
    files: [
      "PHOTO-2026-07-02-13-11-36.jpg", "PHOTO-2026-07-02-13-11-37 2.jpg",
      "PHOTO-2026-07-02-13-11-37.jpg", "PHOTO-2026-07-02-13-11-38.jpg",
      "PHOTO-2026-07-02-13-11-40.jpg", "PHOTO-2026-07-02-13-11-42 2.jpg",
      "PHOTO-2026-07-02-13-11-42.jpg", "PHOTO-2026-07-02-13-11-43.jpg",
      "PHOTO-2026-07-02-13-11-44.jpg", "PHOTO-2026-07-02-13-11-45.jpg",
      "PHOTO-2026-07-02-13-11-46.jpg", "PHOTO-2026-07-02-13-11-48.jpg",
      "PHOTO-2026-07-02-13-11-49 2.jpg", "PHOTO-2026-07-02-13-11-49.jpg",
      "PHOTO-2026-07-02-13-11-50 2.jpg", "PHOTO-2026-07-02-13-11-50 3.jpg",
      "PHOTO-2026-07-02-13-11-50.jpg", "PHOTO-2026-07-02-13-11-52.jpg",
    ],
  },
  {
    id: 'ejigbo-2024',
    name: 'Ejigbo Lagos — The Wonders of Jesus Power Crusade',
    altPrefix: 'Wonders of Jesus Power Crusade',
    folder: '/Photos/Ejigbo Lagos wonders of Jesus crusade may 2024',
    files: [
      "PHOTO-2026-07-02-13-22-06.jpg", "PHOTO-2026-07-02-13-22-07 2.jpg",
      "PHOTO-2026-07-02-13-22-07 3.jpg", "PHOTO-2026-07-02-13-22-07 4.jpg",
      "PHOTO-2026-07-02-13-22-07 5.jpg", "PHOTO-2026-07-02-13-22-07.jpg",
      "PHOTO-2026-07-02-13-22-08 2.jpg", "PHOTO-2026-07-02-13-22-08 3.jpg",
      "PHOTO-2026-07-02-13-22-08 4.jpg", "PHOTO-2026-07-02-13-22-08.jpg",
      "PHOTO-2026-07-02-13-22-09 2.jpg", "PHOTO-2026-07-02-13-22-09 3.jpg",
      "PHOTO-2026-07-02-13-22-09 4.jpg", "PHOTO-2026-07-02-13-22-09 5.jpg",
      "PHOTO-2026-07-02-13-22-09.jpg", "PHOTO-2026-07-02-13-22-10 2.jpg",
      "PHOTO-2026-07-02-13-22-10 3.jpg", "PHOTO-2026-07-02-13-22-10 4.jpg",
      "PHOTO-2026-07-02-13-22-10 5.jpg", "PHOTO-2026-07-02-13-22-10.jpg",
      "PHOTO-2026-07-02-13-22-11 2.jpg", "PHOTO-2026-07-02-13-22-11 3.jpg",
      "PHOTO-2026-07-02-13-22-11 4.jpg", "PHOTO-2026-07-02-13-22-11 5.jpg",
      "PHOTO-2026-07-02-13-22-11.jpg", "PHOTO-2026-07-02-13-22-12 2.jpg",
      "PHOTO-2026-07-02-13-22-12.jpg",
    ],
  },
  {
    id: 'fuel-outreach-2026',
    name: 'Fuel Outreach — Cars & Bikes, Igarra',
    altPrefix: 'Fuel Outreach 2026',
    folder: '/Photos/Jan 2026 fuel outreach for cars and bikes at igaraa',
    files: [
      "PHOTO-2026-07-02-13-07-24.jpg", "PHOTO-2026-07-02-13-07-25 2.jpg",
      "PHOTO-2026-07-02-13-07-25 3.jpg", "PHOTO-2026-07-02-13-07-25 4.jpg",
      "PHOTO-2026-07-02-13-07-25.jpg", "PHOTO-2026-07-02-13-07-26 2.jpg",
      "PHOTO-2026-07-02-13-07-26.jpg", "PHOTO-2026-07-02-13-07-27.jpg",
      "PHOTO-2026-07-02-13-07-28 2.jpg", "PHOTO-2026-07-02-13-07-28 3.jpg",
      "PHOTO-2026-07-02-13-07-28 4.jpg", "PHOTO-2026-07-02-13-07-28 5.jpg",
      "PHOTO-2026-07-02-13-07-28.jpg", "PHOTO-2026-07-02-13-07-29.jpg",
      "PHOTO-2026-07-02-13-07-30 2.jpg", "PHOTO-2026-07-02-13-07-30.jpg",
    ],
  },
];

const crusadeList = raw.map((c) => ({
  id: c.id,
  name: c.name,
  folder: c.folder,
  images: c.files.map((f, i) => ({
    src: `${c.folder}/${f}`,
    alt: `${c.altPrefix} — photo ${i + 1}`,
  })),
}));

export const crusadeMap = {};
crusadeList.forEach((c) => { crusadeMap[c.id] = c; });

export const crusades = crusadeList;
