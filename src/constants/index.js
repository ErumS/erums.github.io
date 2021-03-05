import Spices from '../images/spiceMerge.png';
import FoldedTshirt from '../images/foldedMerge.png';
import FoldedTops from '../images/foldedTops.jpg';
import Books from '../images/books.jpg';
import Stationery from '../images/stationery.jpg';
import WomenWardrobe from '../images/womenWardrobe.jpg';
import MenWardrobe from '../images/menWardrobe.jpg';
import Spice from '../images/spices.jpg';
import Files from '../images/files.jpg';
import Makeup from '../images/makeup.jpg';
import PhuppiClientBefore1 from '../images/phuppi-client-before-1.png';
import PhuppiClientBefore2 from '../images/phuppi-client-before-2.png';
import PhuppiClientAfter1 from '../images/phuppi-client-after-1.png';
import PhuppiClientAfter2 from '../images/phuppi-client-after-2.png';

export const MENU = [
  {
    name: 'Home',
    url: '/',
    id: 'home',
  },
  {
    name: 'About Us',
    url: '/about-us/',
    id: 'about',
  },
  {
    name: 'Gallery',
    url: '/gallery/',
    id: 'gallery',
  },
  {
    name: 'Our Services',
    url: '/our-services/',
    id: 'services',
  },
  {
    name: 'Contact Us',
    url: '/contact-us/',
    id: 'contact',
  },
];

export const HOME_SLIDER = [
  {
    image: FoldedTshirt,
    text: "Getting organized is not a luxury, it's a way of life!",
    mobileImage: MenWardrobe,
  },
  {
    image: Spices,
    text: 'I am not liking my home after getting it organized - said no one ever!',
    mobileImage: Spice,
  },
  {
    image: Books,
    text: 'Invest you time for your peace of mind.',
  },
  {
    image: Stationery,
    text: 'A place for everything, and everything in its place!',
  },
];

export const GALLERY_IMAGES = [
  {
    image: PhuppiClientAfter1,
    beforeImage: PhuppiClientBefore1,
  },
  {
    image: PhuppiClientAfter2,
    beforeImage: PhuppiClientBefore2,
  },
  {
    image: 'https://i.pinimg.com/564x/5e/40/8e/5e408ebbd1513e3348c3691271797518.jpg',
    beforeImage:
      'https://i.pinimg.com/564x/0e/d9/d3/0ed9d31b93d8cb336467be2a8365f528.jpg',
  },
  {
    image: 'https://i.pinimg.com/564x/01/49/e3/0149e3d03ad851181002aac3317ba7dd.jpg',
    beforeImage:
      'https://i.pinimg.com/564x/7b/9f/a6/7b9fa6143c687672875275e2dc9924f1.jpg',
  },
  {
    image: 'https://i.pinimg.com/564x/f9/9f/91/f99f91ac18952672f09f312821fa8723.jpg',
    beforeImage:
      'https://i.pinimg.com/564x/c3/b5/07/c3b5075d553abb353fa30f88b433f6cc.jpg',
  },
  {
    image: 'https://i.pinimg.com/564x/eb/15/56/eb155657f89aeef2b29e79d9181eb7ed.jpg',
    beforeImage:
      'https://i.pinimg.com/564x/b3/4e/5e/b34e5e68395bcb5167987a24778ca378.jpg',
  },
  {
    image: WomenWardrobe,
  },
  {
    image: FoldedTops,
  },
  {
    image: MenWardrobe,
  },
  {
    image: Stationery,
  },
  {
    image: Books,
  },
  {
    image: Files,
  },
  {
    image: Makeup,
  },
];

export const GALLERY_VIDEOS = [
  'https://www.youtube.com/embed/Db0xGdz0PVM',
  'https://www.youtube.com/embed/z09aCzHdg3c',
  'https://www.youtube.com/embed/uIUA8wDBzV8',
  'https://www.youtube.com/embed/40pR-f1yu2w',
];

export const GALLERY_TESTIMONIALS = [
  {
    name: 'Client 1',
    text:
      'I am not liking my home after getting it organized - said no one ever! I am not liking my home after getting it organized - said no one ever!I am not liking my home after getting it organized - said no one ever! I am not liking my home after getting it organized - said no one ever!id no one ever! I am not liking my home after getting it organized - said no one ever!',
  },
  {
    name: 'Client 2',
    text: 'I am not liking my home after get',
  },
  {
    name: 'Client 3',
    text: 'I am not liking my home after getting it organized - said no one ever!',
  },
  {
    name: 'Client 4',
    text:
      'I am not liking my home after getting it organized - said no one ever! I am not liking my home after',
  },
];

export const SERVICES = [
  {
    name: 'Move-in-ready home',
    image: 'https://i.pinimg.com/564x/87/cc/2f/87cc2f65d3edf91356b6117a9465eca5.jpg',
    description:
      'Are you planning on shifting houses, but are dreaded with the thought of a lot of extra effort to be put in, in addition to all the work you already have on your plate? You can now sit back and relax, we can give you a move in ready, organized home with everything in its place! Just step in and enjoy your new home!',
  },
  {
    name: 'Wardrobes / closets',
    image: WomenWardrobe,
    description:
      'Do you always have nothing to wear, and no space for new clothes too? Well, you could learn to deal with both things with our help!',
  },
  {
    name: 'Kitchen',
    image: Spice,
    description:
      "No matter what you do, your kitchen must be the neatest place. If you find it cluttered, you won't be able to enjoy food. Do you enjoy going in your kitchen at all times? If not, we can help!",
  },
  {
    name: 'Office',
    image: 'https://i.pinimg.com/564x/64/c5/06/64c5062d7e1b78e6a2281bba36ef5a9d.jpg',
    description:
      "Do you have an office where you are not able to manage all the inventory, and not willing to hire an employee to take care of it? Well, maybe you don't need to hire! We can help set up better systems to help you manage that on your own!",
    pc: "'Writing from nowhere'",
    pcLink: 'https://in.pinterest.com/pin/457537643399170317/',
  },
  {
    name: 'Filing System',
    image: 'https://i.pinimg.com/564x/97/dd/4f/97dd4fe75944ca477369e89c0a37ec77.jpg',
    description:
      'In a workspace full of papers, do you find yourself not able to manage all files and important documents, and at times getting work delayed due to these petty problems? You deserve better than that! Let us help you create better filing systems for your work!',
    pc: 'CC | Le Blanc Orchid',
    pcLink: 'https://in.pinterest.com/pin/1477812367137135/',
  },
  {
    name: 'Books organization',
    image: Books,
    description:
      "We personally love books. And we wish no one has to deal with mismanagement of a lot of books. Just because you love reading, and you want to keep on buying books, doesn't mean you have to stop that just because your book space is a cluttered mess, with no space for new ones. Let us handle that space for you, because who doesn't want to love books!",
  },
  {
    name: 'Playroom',
    image: 'https://i.pinimg.com/564x/bf/0b/90/bf0b90f7796f23c60e09d6d418074626.jpg',
    description:
      "Do you constantly find yourself cleaning up your little one's stuff? What if you could enjoy that time for yourself instead? We'll be glad to make it a reality!",
    pc: 'R&R at Home',
    pcLink: 'https://in.pinterest.com/pin/6544361948256682/',
  },
  {
    name: 'Pantry',
    image: 'https://i.pinimg.com/564x/f9/e5/f6/f9e5f6d5b2bf264bc16ae8760d0e8696.jpg',
    description:
      'Pantry is the most visited space in any home, because foooood! Do you always find expired food items, because you did not know you had all that stuff already and bought all of it again? We might help change that too!',
    pc: 'Megan Mikkelsen | Detox by Design',
    pcLink: 'https://in.pinterest.com/pin/410390584800279527/',
  },
  {
    name: 'Store room / Attic / Basement',
    image: 'https://i.pinimg.com/564x/7b/a1/e2/7ba1e242c65d9e7f1693a255a5d0a47c.jpg',
    description:
      'These spaces are definitely made to house extra things you own. But do they always overflow? And worse, do you not have an idea of what they contain? Maybe you could turn it into a better space like a playroom or home office? Try us to get that dream true!',
    pc: 'Remodelaholic',
    pcLink: 'https://in.pinterest.com/pin/333618284876647719/',
  },
  {
    name: 'Garage',
    image: 'https://i.pinimg.com/564x/4d/16/09/4d16093056a000c89d3e314e80e77217.jpg',
    description:
      "Do you have so much stuff in garages, that you can't seem to even put your vehicles there? Well, that doesn't serve the purpose. Call us and we'll help change that!",
    pc: 'DIYnCrafts.Com',
    pcLink: 'https://in.pinterest.com/pin/7599893110845141/',
  },
  {
    name: 'Home Office / Work space',
    image: 'https://i.pinimg.com/564x/2c/49/15/2c49158f8fe37d368a2ceee19660e11e.jpg',
    description:
      'Do you have, or want to have a home office, or at least a workspace, but you are either not able to make the most of your space, or not able to figure out where to get that space in the house? We are here to help you make the most of your workspaces!',
    pc: 'Joyful Homemaking',
    pcLink: 'https://in.pinterest.com/pin/75224256265878905/',
  },
  {
    name: 'Paper organization (home and office)',
    image: 'https://i.pinimg.com/564x/e9/43/1e/e9431e48a854a4bdb9316c56e148bed6.jpg',
    description:
      'Paper and document mismanagement may lead to unprecedented problems and at times, calamities! You can count on us if you want all your personal documents to have a system and place of their own, and you never have to spend time searching for them again!',
    pc: 'Crazy Organized',
    pcLink: 'https://in.pinterest.com/pin/700661654498182425/',
  },
  {
    name: 'Warehouse',
    image: 'https://i.pinimg.com/564x/dc/df/6a/dcdf6ae7e9c2908df4c2254b5e16c84a.jpg',
    description:
      'Warehouses are a definite mess, especially if you do not have someone looking at the inventory all the time! Not handling them may lead to losses and problems unwelcomed! If you are facing mismanagement of your warehouses, we can help you manage it better! It is, after all, your living!',
    pc: 'Vendhq',
    pcLink: 'https://in.pinterest.com/pin/269441990196834783/',
  },
  {
    name: 'Art',
    image: Stationery,
    description:
      'Are you an artist, own a lot of stuff, and end up losing a lot of it, or not able to find the things at the right time and end up buying them repeatedly? We believe you change the world, so you should have your focus on your art, and not on constantly searching for stuff! Let us help you deal with it, once and for all!',
  },
  {
    name: 'Business store',
    image: 'https://i.pinimg.com/564x/53/fc/5e/53fc5e0125e6bc250c6264b4939812ba.jpg',
    description:
      'Have you set up a new store, and do not have time to plan out the layout with all the displays, inventories and customers at hand? Do not worry. Call us and get you stores organized perfectly!',
    pc: 'Next Luxury',
    pcLink: 'https://in.pinterest.com/pin/26458716550746968/',
  },
  {
    name: 'Salon / Studio',
    image: 'https://i.pinimg.com/564x/77/13/af/7713af2a6e38d0184d997046663016b5.jpg',
    description:
      'A salon or studio with a lot of incoming customers often look cluttered. But do you realize that customers would return only if they find the spaces clean, hygienic and attractive? If you are dealing with such a problem, talk to us!',
    pc: 'Dyerector',
    pcLink: 'https://in.pinterest.com/pin/533113674641699959/',
  },
  {
    name: 'Clinic / Laboratory',
    image: 'https://i.pinimg.com/564x/53/37/1a/53371a86b00dfa8921f280f29e0d8288.jpg',
    description:
      'A laboratory could easily become a mess. But if you do not have accurate systems in place, it could be a disorganized space. Do you end up in such situations? If yes, let us know if we can be of help!',
    pc: 'Design Ergonomics',
    pcLink: 'https://in.pinterest.com/pin/309552174383303480/',
  },
  {
    name: 'Bakers / Food outlets',
    image: 'https://i.pinimg.com/564x/2b/ef/61/2bef618ed9d829769fa044a06341320c.jpg',
    description:
      'A place of food needs to be a place of hygiene first. Do you find your packing and delivery stuff cluttered? Do you have difficulty in managing your customer records? We are here to make it a breeze!',
    pc: 'Polly Belem',
    pcLink: 'https://in.pinterest.com/pin/601019512759857029/',
  },
];

function addJSONLD() {
  return {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    'name': 'OrgaNice Spaces with Erum',
    'alternateName': 'Erum Sanwari, Professional Organizer',
    'url': 'https://www.organicespaceswitherum.com/',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Udaipur',
      'addressRegion': 'Rajasthan',
      'postalCode': '313001',
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+917014418191',
      'areaServed': 'IN',
      'availableLanguage': ['en', 'Hindi'],
    },
    'email': 'organicespaceswitherum@gmail.com',
    'founder': {
      name: 'Erum Sanwari',
      jobTitle: 'Business Owner',
    },
    'sameAs': [
      'https://instagram.com/organice_spaces_with_erum/',
      'https://www.facebook.com/OrgaNiceSpaceswithErum/',
      'https://www.organicespaceswitherum.com/',
      'https://www.youtube.com/channel/UCNI6087A5qkBrONd0xr8djA',
      'https://www.linkedin.com/company/organice-spaces-with-erum/?viewAsMember=true',
    ],
    'logo': {
      '@type': 'ImageObject',
      'url':
        'https://i.pinimg.com/originals/d3/44/44/d34444f61aa5477085e7a39d4501eb82.png',
    },
  };
}

function addJSONLDLocal() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'OrgaNice Spaces with Erum',
    'description':
      'We are a Professional Organizing company based in India, First Certified Professional Organizer in Udaipur, We provide Free Consultation, We provide Organization services for closet, kitchen, playroom, garage, attics, basement, ofiice organization, paper organization, home organization, home moving services, packing unpacking services, home office shifting',
    'image':
      'https://i.pinimg.com/originals/d3/44/44/d34444f61aa5477085e7a39d4501eb82.png',
    '@id': '',
    'url': 'https://www.organicespaceswitherum.com/',
    'telephone': '+917014418191',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '',
      'addressLocality': 'Udaipur',
      'addressRegion': 'Rajasthan',
      'postalCode': '313001',
      'addressCountry': 'IN',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '24.5854° N',
      'longitude': '73.7125° E',
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      'opens': '00:00',
      'closes': '23:59',
    },
    'sameAs': [
      'https://www.facebook.com/OrgaNiceSpaceswithErum/',
      'https://instagram.com/organice_spaces_with_erum/',
    ],
    'department': {
      '@type': 'ProfessionalService',
      'name': 'OrgaNice Spaces with Erum',
      'image':
        'https://i.pinimg.com/originals/d3/44/44/d34444f61aa5477085e7a39d4501eb82.png',
      'telephone': '+917014418191',
    },
  };
}

export { addJSONLD, addJSONLDLocal };
