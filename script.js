const artScenes = [
  {
    title: 'Dawn Greenhouse',
    caption: 'Mist, brass frames, and pale morning roses held in a glass house.',
    palette: ['#f5f0e7', '#d9ead5', '#8ca88f', '#476356'],
    accents: [
      { x: 12, y: 10, r: 18, c: '#f7e6d2' },
      { x: 67, y: 18, r: 20, c: '#f2bda6' },
      { x: 32, y: 48, r: 34, c: '#8cbf9a' },
      { x: 76, y: 58, r: 28, c: '#f9d8c8' }
    ]
  },
  {
    title: 'Rain Patio Still Life',
    caption: 'Terracotta vessels and soft eucalyptus arranged after an evening shower.',
    palette: ['#f7efe6', '#ecd2be', '#ba7f64', '#6a8f71'],
    accents: [
      { x: 18, y: 18, r: 22, c: '#d79b76' },
      { x: 48, y: 26, r: 16, c: '#f0cfbb' },
      { x: 72, y: 42, r: 30, c: '#6a8f71' },
      { x: 35, y: 64, r: 26, c: '#476356' }
    ]
  },
  {
    title: 'Moonlit Shelf',
    caption: 'A quiet shelf scene with candlelight, ceramic, and trailing ivy.',
    palette: ['#f4efe8', '#d9e6df', '#a8b9af', '#243428'],
    accents: [
      { x: 14, y: 16, r: 14, c: '#f3dcbf' },
      { x: 42, y: 24, r: 24, c: '#b7cdb8' },
      { x: 66, y: 38, r: 26, c: '#8ca88f' },
      { x: 84, y: 72, r: 16, c: '#f2c6a8' }
    ]
  },
  {
    title: 'Wildflower Path',
    caption: 'Loose blooms, warm air, and the suggestion of a field beyond the frame.',
    palette: ['#f7f2ea', '#e9c7b1', '#c8d7b8', '#7d9b87'],
    accents: [
      { x: 16, y: 26, r: 28, c: '#e8ad8d' },
      { x: 44, y: 16, r: 20, c: '#c9dcbd' },
      { x: 70, y: 44, r: 32, c: '#7d9b87' },
      { x: 28, y: 68, r: 24, c: '#f2d6b8' }
    ]
  },
  {
    title: 'Moss & Linen Corner',
    caption: 'A grounded shelf vignette with linen textures and softened shadows.',
    palette: ['#f5f0e8', '#dde7d8', '#a2b99c', '#5e7464'],
    accents: [
      { x: 15, y: 20, r: 20, c: '#d7c2a5' },
      { x: 38, y: 28, r: 22, c: '#a2b99c' },
      { x: 65, y: 52, r: 30, c: '#5e7464' },
      { x: 82, y: 22, r: 14, c: '#f1d4c0' }
    ]
  },
  {
    title: 'Afternoon Window Bloom',
    caption: 'Sunlit petals framed by a quiet studio window and warm shadow.',
    palette: ['#f8f0e7', '#f0d0bc', '#d8e6c7', '#8aa18d'],
    accents: [
      { x: 18, y: 20, r: 18, c: '#f0d0bc' },
      { x: 50, y: 18, r: 24, c: '#d8e6c7' },
      { x: 72, y: 42, r: 28, c: '#8aa18d' },
      { x: 34, y: 66, r: 24, c: '#ba7f64' }
    ]
  }
];

const heroArt = document.getElementById('hero-art');
const seasonalImage = document.getElementById('seasonal-image');
const galleryGrid = document.getElementById('gallery-grid');
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');

function createSceneSvg(scene) {
  const width = 1200;
  const height = 1400;
  const [base, bloom, leaf, deep] = scene.palette;
  const accents = scene.accents
    .map(({ x, y, r, c }) => `<circle cx="${x}%" cy="${y}%" r="${r}" fill="${c}" opacity="0.86" />`)
    .join('');

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="${scene.title}">
      <defs>
        <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="${base}" />
          <stop offset="55%" stop-color="${bloom}" />
          <stop offset="100%" stop-color="#fffaf5" />
        </linearGradient>
        <linearGradient id="glass" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="rgba(255,255,255,0.78)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0.14)" />
        </linearGradient>
        <filter id="blur">
          <feGaussianBlur stdDeviation="42" />
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="url(#sky)" />
      <circle cx="210" cy="250" r="160" fill="${leaf}" opacity="0.28" filter="url(#blur)" />
      <circle cx="990" cy="340" r="220" fill="${deep}" opacity="0.16" filter="url(#blur)" />
      <rect x="86" y="320" width="1024" height="740" rx="68" fill="url(#glass)" stroke="rgba(71,99,86,0.18)" />
      <rect x="160" y="420" width="110" height="520" rx="55" fill="rgba(71,99,86,0.15)" />
      <rect x="320" y="360" width="94" height="620" rx="47" fill="rgba(186,127,100,0.16)" />
      <rect x="500" y="450" width="140" height="460" rx="70" fill="rgba(255,255,255,0.54)" />
      <rect x="688" y="390" width="108" height="560" rx="54" fill="rgba(71,99,86,0.12)" />
      <rect x="842" y="470" width="122" height="420" rx="61" fill="rgba(186,127,100,0.14)" />
      <circle cx="220" cy="900" r="180" fill="${leaf}" opacity="0.56" />
      <circle cx="390" cy="860" r="120" fill="${bloom}" opacity="0.68" />
      <circle cx="590" cy="760" r="160" fill="${deep}" opacity="0.24" />
      <circle cx="790" cy="820" r="138" fill="${leaf}" opacity="0.46" />
      <circle cx="950" cy="920" r="170" fill="${bloom}" opacity="0.58" />
      <path d="M180 1100 C260 980, 340 980, 430 1100 S590 1220, 660 1110 S820 980, 940 1110" fill="none" stroke="rgba(71,99,86,0.36)" stroke-width="16" stroke-linecap="round" />
      <path d="M140 1040 C260 930, 350 920, 460 1046 S620 1150, 720 1052 S900 932, 1040 1062" fill="none" stroke="rgba(186,127,100,0.28)" stroke-width="10" stroke-linecap="round" />
      ${accents}
    </svg>
  `;
}

function svgToDataUri(svg) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

if (heroArt) {
  heroArt.src = svgToDataUri(createSceneSvg(artScenes[0]));
}

if (galleryGrid) {
  artScenes.forEach((scene, index) => {
    const card = document.createElement('article');
    card.className = 'gallery-card reveal';
    card.style.animationDelay = `${index * 90}ms`;

    const image = document.createElement('div');
    image.className = 'gallery-image';
    image.style.backgroundImage = `url("${svgToDataUri(createSceneSvg(scene))}")`;
    image.style.backgroundSize = 'cover';
    image.style.backgroundPosition = 'center';

    const caption = document.createElement('div');
    caption.className = 'gallery-caption';
    caption.innerHTML = `<h3>${scene.title}</h3><p>${scene.caption}</p>`;

    card.append(image, caption);
    galleryGrid.append(card);
  });
}

if (seasonalImage) {
  seasonalImage.src = svgToDataUri(createSceneSvg({
    title: 'Spring Bouquet',
    caption: 'Peonies, ranunculus, rosemary, and mint arranged in a ceramic vase.',
    palette: ['#f8f1e9', '#f0d3bf', '#c9dfc4', '#6f8f77'],
    accents: [
      { x: 18, y: 24, r: 24, c: '#f0c1b0' },
      { x: 44, y: 34, r: 18, c: '#f3dcc7' },
      { x: 68, y: 24, r: 26, c: '#bfd7b8' },
      { x: 52, y: 60, r: 34, c: '#6f8f77' }
    ]
  }));
}

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement && siteNav.classList.contains('is-open')) {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
