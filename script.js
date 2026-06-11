const artScenes = [
  {
    title: 'Dawn Greenhouse',
    caption: 'Mist, brass frames, and pale morning roses held in a glass house.',
    photoUrl: buildPhotoUrl('greenhouse roses morning light botanical')
  },
  {
    title: 'Rain Patio Still Life',
    caption: 'Terracotta vessels and soft eucalyptus arranged after an evening shower.',
    photoUrl: buildPhotoUrl('terracotta eucalyptus still life garden patio')
  },
  {
    title: 'Moonlit Shelf',
    caption: 'A quiet shelf scene with candlelight, ceramic, and trailing ivy.',
    photoUrl: buildPhotoUrl('candlelit shelf ceramic ivy botanical')
  },
  {
    title: 'Wildflower Path',
    caption: 'Loose blooms, warm air, and the suggestion of a field beyond the frame.',
    photoUrl: buildPhotoUrl('wildflower path meadow blooms soft light')
  },
  {
    title: 'Moss & Linen Corner',
    caption: 'A grounded shelf vignette with linen textures and softened shadows.',
    photoUrl: buildPhotoUrl('moss linen corner botanical shelf still life')
  },
  {
    title: 'Afternoon Window Bloom',
    caption: 'Sunlit petals framed by a quiet studio window and warm shadow.',
    photoUrl: buildPhotoUrl('afternoon window bloom flowers sunlight')
  }
];

const heroArt = document.getElementById('hero-art');
const seasonalImage = document.getElementById('seasonal-image');
const galleryGrid = document.getElementById('gallery-grid');
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');
const aboutHeroArt = document.getElementById('about-hero-art');

const sceneLibrary = {
  'morning-practice': {
    title: 'Morning Practice',
    caption: 'A dawn routine with filtered light and soft leaves.',
    photoUrl: buildPhotoUrl('garden pruning morning light roses leaves')
  },
  'watering-cue': {
    title: 'Watering Cue',
    caption: 'Cool soil, dew, and a clear glass watering can.',
    photoUrl: buildPhotoUrl('watering can dewy greenery garden close up')
  },
  'styling-note': {
    title: 'Styling Note',
    caption: 'Terracotta, linen, and matte ceramics in one palette.',
    photoUrl: buildPhotoUrl('terracotta linen matte ceramics still life')
  },
  'process-reflection': {
    title: 'Process Reflection',
    caption: 'Sketches and notes arranged in an editorial workspace.',
    photoUrl: buildPhotoUrl('botanical notes sketchbook desk plants')
  },
  'design-reflection': {
    title: 'Design Reflection',
    caption: 'Soft editorial composition with botanical textures.',
    photoUrl: buildPhotoUrl('editorial floral composition soft textures')
  },
  'client-reflection': {
    title: 'Client Reflection',
    caption: 'A calming mood board in green, peach, and cream.',
    photoUrl: buildPhotoUrl('floral mood board green peach cream')
  }
};

function buildPhotoUrl(query) {
  return `https://source.unsplash.com/featured/1200x1400/?${encodeURIComponent(query)}`;
}

if (heroArt) {
  heroArt.src = artScenes[0].photoUrl;
}

if (aboutHeroArt) {
  aboutHeroArt.src = buildPhotoUrl('floral portrait botanical composition soft tones');
}

if (galleryGrid) {
  artScenes.forEach((scene, index) => {
    const card = document.createElement('article');
    card.className = 'gallery-card reveal';
    card.style.animationDelay = `${index * 90}ms`;

    const image = document.createElement('div');
    image.className = 'gallery-image';
    image.style.backgroundImage = `url("${scene.photoUrl}")`;
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
  seasonalImage.src = buildPhotoUrl('peonies ranunculus bouquet ceramic vase herbs');
}

document.querySelectorAll('[data-scene]').forEach((image) => {
  const scene = sceneLibrary[image.getAttribute('data-scene') || ''];
  if (!scene) {
    return;
  }

  image.src = scene.photoUrl;
});

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
