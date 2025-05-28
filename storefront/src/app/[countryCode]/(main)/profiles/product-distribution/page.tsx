import React from 'react';
import ProfileCard from '../../../../../modules/layout/templates/ProfileCard';
import styles from './product-distribution.module.css';
import Link from 'next/link';
import TrendingNow from '@modules/layout/templates/TrendingNow';

// Sample profile data - in a real app, this would come from an API or database
const profiles = [
  {
    id: 1,
    name: 'A Design Studio',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/a-design-studio.jpg',
    slug: 'a-design-studio'
  },
  {
    id: 2,
    name: 'Abode',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/abode.jpg',
    slug: 'abode'
  },
  {
    id: 3,
    name: 'Abodo',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/abodo.jpg',
    slug: 'abodo'
  },
  {
    id: 4,
    name: 'Acoufelt',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/acoufelt.jpg',
    slug: 'acoufelt'
  },
  {
    id: 5,
    name: 'Adam Kane Architects',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/adam-kane.jpg',
    slug: 'adam-kane-architects'
  },
  {
    id: 6,
    name: 'Agius Scorpo Architects',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/agius-scorpo.jpg',
    slug: 'agius-scorpo-architects'
  },
  {
    id: 7,
    name: 'AKI Design Studio',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/aki-design.jpg',
    slug: 'aki-design-studio'
  },
  {
    id: 8,
    name: 'Alana Cooke, Architecture, Interior Design.',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/alana-cooke.jpg',
    slug: 'alana-cooke'
  },
  {
    id: 9,
    name: 'Alex Earl',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/alex-earl.jpg',
    slug: 'alex-earl'
  },
  {
    id: 10,
    name: 'Alexander &CO.',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/alexander-and-co.jpg',
    slug: 'alexander-and-co'
  },
  {
    id: 11,
    name: 'Alexandra Buchanan Architecture',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/alexandra-buchanan.jpg',
    slug: 'alexandra-buchanan'
  },
  {
    id: 12,
    name: 'Alexandra Kidd Design',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/alexandra-kidd.jpg',
    slug: 'alexandra-kidd'
  },
  {
    id: 13,
    name: 'AM Architecture',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/am-architecture.jpg',
    slug: 'am-architecture'
  },
  {
    id: 14,
    name: 'anaca Studio',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/anaca-studio.jpg',
    slug: 'anaca-studio'
  },
  {
    id: 15,
    name: 'Andrew Burges Architects',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/andrew-burges.jpg',
    slug: 'andrew-burges'
  },
  {
    id: 16,
    name: 'Andrew Child Architecture',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/andrew-child.jpg',
    slug: 'andrew-child'
  },
  {
    id: 17,
    name: 'Anibou',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/anibou.jpg',
    slug: 'anibou'
  },
  {
    id: 18,
    name: 'Austin Maynard Architects',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/austin-maynard.jpg',
    slug: 'austin-maynard-architects'
  },
  {
    id: 19,
    name: 'B.E Architecture',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/be-architecture.jpg',
    slug: 'be-architecture'
  },
  {
    id: 20,
    name: 'BAINA',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/baina.jpg',
    slug: 'baina'
  },
  {
    id: 21,
    name: 'Bang & Olufsen',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/bang-olufsen.jpg',
    slug: 'bang-olufsen'
  },
  {
    id: 22,
    name: 'Baracco + Wright Architects',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/baracco-wright.jpg',
    slug: 'baracco-wright'
  },
  {
    id: 23,
    name: 'Basil Bangs',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/basil-bangs.jpg',
    slug: 'basil-bangs'
  },
  {
    id: 24,
    name: 'Baya',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/baya.jpg',
    slug: 'baya'
  },
  {
    id: 25,
    name: 'Bayley Ward',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/bayley-ward.jpg',
    slug: 'bayley-ward'
  },
  {
    id: 26,
    name: 'BC Stone',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/bc-stone.jpg',
    slug: 'bc-stone'
  },
  {
    id: 27,
    name: 'Ben Callery Architects',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/ben-callery.jpg',
    slug: 'ben-callery-architects'
  },
  {
    id: 28,
    name: 'Benn + Penna Architecture',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/benn-penna.jpg',
    slug: 'benn-penna-architecture'
  },
  {
    id: 29,
    name: 'Cantilever Interiors',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/cantilever.jpg',
    slug: 'cantilever-interiors'
  },
  {
    id: 30,
    name: 'Carole Whiting',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/carole-whiting.jpg',
    slug: 'carole-whiting'
  },
  {
    id: 31,
    name: 'Carr',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/carr.jpg',
    slug: 'carr'
  },
  {
    id: 32,
    name: 'Carter Williamson Architects',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/carter-williamson.jpg',
    slug: 'carter-williamson'
  },
  {
    id: 33,
    name: 'Chamberlain Architects',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/chamberlain.jpg',
    slug: 'chamberlain-architects'
  },
  {
    id: 34,
    name: 'Davidov Architects',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/davidov.jpg',
    slug: 'davidov-architects'
  },
  {
    id: 35,
    name: 'Decus Interiors',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/decus.jpg',
    slug: 'decus-interiors'
  },
  {
    id: 36,
    name: 'Doherty Design Studio',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/doherty.jpg',
    slug: 'doherty-design-studio'
  },
  {
    id: 37,
    name: 'Edition Office',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/edition-office.jpg',
    slug: 'edition-office'
  },
  {
    id: 38,
    name: 'Elenberg Fraser',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/elenberg-fraser.jpg',
    slug: 'elenberg-fraser'
  },
  {
    id: 39,
    name: 'Fiona Lynch',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/fiona-lynch.jpg',
    slug: 'fiona-lynch'
  },
  {
    id: 40,
    name: 'Flack Studio',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/flack-studio.jpg',
    slug: 'flack-studio'
  },
  {
    id: 41,
    name: 'Folk Architects',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/folk-architects.jpg',
    slug: 'folk-architects'
  },
  {
    id: 42,
    name: 'Grazia & Co',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/grazia.jpg',
    slug: 'grazia-and-co'
  },
  {
    id: 43,
    name: 'Golden',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/golden.jpg',
    slug: 'golden'
  },
  {
    id: 44,
    name: 'Hassell',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/hassell.jpg',
    slug: 'hassell'
  },
  {
    id: 45,
    name: 'Hecker Guthrie',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/hecker-guthrie.jpg',
    slug: 'hecker-guthrie'
  },
  {
    id: 46,
    name: 'Jardan',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/jardan.jpg',
    slug: 'jardan'
  },
  {
    id: 47,
    name: 'John Wardle Architects',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/john-wardle.jpg',
    slug: 'john-wardle-architects'
  },
  {
    id: 48,
    name: 'Kennedy Nolan',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/kennedy-nolan.jpg',
    slug: 'kennedy-nolan'
  },
  {
    id: 49,
    name: 'Koskela',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/koskela.jpg',
    slug: 'koskela'
  },
  {
    id: 50,
    name: 'Laminex',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/laminex.jpg',
    slug: 'laminex'
  },
  {
    id: 51,
    name: 'Living Edge',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/living-edge.jpg',
    slug: 'living-edge'
  },
  {
    id: 52,
    name: 'Lowe Furniture',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/lowe.jpg',
    slug: 'lowe-furniture'
  },
  {
    id: 53,
    name: 'Mafi',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/mafi.jpg',
    slug: 'mafi'
  },
  {
    id: 54,
    name: 'Mim Design',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/mim-design.jpg',
    slug: 'mim-design'
  },
  {
    id: 55,
    name: 'Mokum',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/mokum.jpg',
    slug: 'mokum'
  },
  {
    id: 56,
    name: 'Mud Australia',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/mud-australia.jpg',
    slug: 'mud-australia'
  },
  {
    id: 57,
    name: 'Muuto',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/muuto.jpg',
    slug: 'muuto'
  },
  {
    id: 58,
    name: 'Nau',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/nau.jpg',
    slug: 'nau'
  },
  {
    id: 59,
    name: 'Neometro',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/neometro.jpg',
    slug: 'neometro'
  },
  {
    id: 60,
    name: 'Nexus Designs',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/nexus.jpg',
    slug: 'nexus-designs'
  },
  {
    id: 61,
    name: 'Ownworld',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/ownworld.jpg',
    slug: 'ownworld'
  },
  {
    id: 62,
    name: 'Oblica',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/oblica.jpg',
    slug: 'oblica'
  },
  {
    id: 63,
    name: 'Quantum Timber Finishes',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/quantum.jpg',
    slug: 'quantum-timber-finishes'
  },
  {
    id: 64,
    name: 'Quince & Cook',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/quince-cook.jpg',
    slug: 'quince-cook'
  },
  {
    id: 65,
    name: 'Quinn Architecture',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/quinn.jpg',
    slug: 'quinn-architecture'
  },
  {
    id: 66,
    name: 'Quirk Architecture',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/quirk.jpg',
    slug: 'quirk-architecture'
  },
  {
    id: 67,
    name: 'Quay Furniture',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/quay.jpg',
    slug: 'quay-furniture'
  },
  {
    id: 68,
    name: 'SJB',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/sjb.jpg',
    slug: 'sjb'
  },
  {
    id: 69,
    name: 'Studio Bright',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/studio-bright.jpg',
    slug: 'studio-bright'
  },
  {
    id: 70,
    name: 'Smart Design Studio',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/smart-design.jpg',
    slug: 'smart-design-studio'
  },
  {
    id: 71,
    name: 'Spence & Lyda',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/spence-lyda.jpg',
    slug: 'spence-lyda'
  },
  {
    id: 72,
    name: 'Studio Esteta',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/studio-esteta.jpg',
    slug: 'studio-esteta'
  },
  {
    id: 73,
    name: 'Tait',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/tait.jpg',
    slug: 'tait'
  },
  {
    id: 74,
    name: 'Techne Architecture + Interior Design',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/techne.jpg',
    slug: 'techne'
  },
  {
    id: 75,
    name: 'Templeton Architecture',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/templeton.jpg',
    slug: 'templeton-architecture'
  },
  {
    id: 76,
    name: 'Thonet',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/thonet.jpg',
    slug: 'thonet'
  },
  {
    id: 77,
    name: 'Tom Fereday',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/tom-fereday.jpg',
    slug: 'tom-fereday'
  },
  {
    id: 78,
    name: 'Urban Couture',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/urban-couture.jpg',
    slug: 'urban-couture'
  },
  {
    id: 79,
    name: 'United Products',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/united-products.jpg',
    slug: 'united-products'
  },
  {
    id: 80,
    name: 'Uocmas',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/uocmas.jpg',
    slug: 'uocmas'
  },
  {
    id: 81,
    name: 'Valiant Hire',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/valiant.jpg',
    slug: 'valiant-hire'
  },
  {
    id: 82,
    name: 'Viabizzuno',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/viabizzuno.jpg',
    slug: 'viabizzuno'
  },
  {
    id: 83,
    name: 'Vola',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/vola.jpg',
    slug: 'vola'
  },
  {
    id: 84,
    name: 'Wowowa Architecture',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/wowowa.jpg',
    slug: 'wowowa-architecture'
  },
  {
    id: 85,
    name: 'Woods Bagot',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/woods-bagot.jpg',
    slug: 'woods-bagot'
  },
  {
    id: 86,
    name: 'Wyer & Co.',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/wyer.jpg',
    slug: 'wyer-and-co'
  },
  {
    id: 87,
    name: 'Workstead',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/workstead.jpg',
    slug: 'workstead'
  },
  {
    id: 88,
    name: 'X-Design Studio',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/x-design.jpg',
    slug: 'x-design-studio'
  },
  {
    id: 89,
    name: 'Xanthe Highfield',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/xanthe.jpg',
    slug: 'xanthe-highfield'
  },
  {
    id: 90,
    name: 'Xavier Furniture',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/xavier.jpg',
    slug: 'xavier-furniture'
  },
  {
    id: 91,
    name: 'Xenolith',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/xenolith.jpg',
    slug: 'xenolith'
  },
  {
    id: 92,
    name: 'Xilo',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/xilo.jpg',
    slug: 'xilo'
  },
  {
    id: 93,
    name: 'YSG Studio',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/ysg.jpg',
    slug: 'ysg-studio'
  },
  {
    id: 94,
    name: 'Yard Furniture',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/yard.jpg',
    slug: 'yard-furniture'
  },
  {
    id: 95,
    name: 'Yellow Diva',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/yellow-diva.jpg',
    slug: 'yellow-diva'
  },
  {
    id: 96,
    name: 'Youssofzay + Hart',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/youssofzay-hart.jpg',
    slug: 'youssofzay-hart'
  },
  {
    id: 97,
    name: 'Yulparitja Artists',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/yulparitja.jpg',
    slug: 'yulparitja-artists'
  },
  {
    id: 98,
    name: 'Zuster',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/zuster.jpg',
    slug: 'zuster'
  },
  {
    id: 99,
    name: 'Zaha Hadid Design',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/zaha-hadid.jpg',
    slug: 'zaha-hadid-design'
  },
  {
    id: 100,
    name: 'Zacariotto',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/zacariotto.jpg',
    slug: 'zacariotto'
  },
  {
    id: 101,
    name: 'Zampese Architecture',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/zampese.jpg',
    slug: 'zampese-architecture'
  },
  {
    id: 102,
    name: 'Zenith Interiors',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/zenith.jpg',
    slug: 'zenith-interiors'
  },
  {
    id: 103,
    name: '1+2 Architecture',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/1-2-architecture.jpg',
    slug: '1-2-architecture'
  },
  {
    id: 104,
    name: '2 Design Group',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/2-design-group.jpg',
    slug: '2-design-group'
  },
  {
    id: 105,
    name: '3 Monkeys Audiovisual',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/3-monkeys.jpg',
    slug: '3-monkeys-audiovisual'
  }
];

const categories = [
  'All Profiles',
  'Architecture',
  'Interior Design',
  'Product Design',
  'Landscape Architecture',
  'Product & Material Distribution',
  'Design & Construction',
  'Art & Sculpture'
];

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'Z', '0-9'];

export default function ProfilesPage() {
  const trendingArticles = [
    {
      id: 1,
      slug: 'seascape-patterson-associates',
      title: 'Seascape by Patterson Associates',
      category: 'BOOK FEATURE',
      image: '/images/trending/seascape.jpg'
    },
    {
      id: 2,
      slug: 'waiheke-house-cheshire-architects',
      title: 'A Process of Discovery – Waiheke House by Cheshire Architects',
      category: 'BOOK FEATURE • ISSUE 03 FEATURE • VIDEO FEATURE',
      image: '/images/trending/waiheke-house.jpg',
      hasVideo: true
    },
    {
      id: 3,
      slug: 'waimataruru-pac-studio',
      title: 'A Respectful Balance – Waimataruru by Pac Studio and Kristina Pickford Design',
      category: 'VIDEO FEATURE',
      image: '/images/trending/waimataruru.jpg',
      hasVideo: true
    },
    {
      id: 4,
      slug: 'palms-residence-olson-kundig',
      title: 'Forming Deep Connections – Palms Residence by Olson Kundig',
      category: 'VIDEO FEATURE',
      image: '/images/trending/palms-residence.jpg',
      hasVideo: true
    },
    {
      id: 5,
      slug: 'yukari-house',
      title: 'Yukari House by Tanev Muir Architects',
      category: 'VIDEO FEATURE',
      image: '/images/trending/yukari-house.jpg',
      hasVideo: true
    }
  ];

  // Get all profiles in one continuous list
  const allProfiles = [...profiles];
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>PROFILE DIRECTORY</h1>
        <nav className={styles.categoryNav}>
          {categories.map((category, index) => (
            <React.Fragment key={category}>
              <Link href="#" className={styles.categoryLink}>
                {category}
              </Link>
              {index < categories.length - 1 && <span className={styles.dot}>•</span>}
            </React.Fragment>
          ))}
        </nav>
      </div>
      
      <div className={styles.divider} />
      
      <div className={styles.jumpToSection}>
        <span className={styles.jumpToLabel}>JUMP TO:</span>
        <div className={styles.alphabetNav}>
          {alphabet.map((letter, index) => (
            <React.Fragment key={letter}>
              <Link href={`#${letter}`} className={styles.letterLink}>
                {letter}
              </Link>
              {index < alphabet.length - 1 && <span className={styles.letterSpace} />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className={styles.profileSection}>
        <div className={styles.profileGrid}>
          <div className={styles.letterCard} id="A">
            <h2>A</h2>
          </div>
          
          {/* A Design Studio */}
          {profiles.find(p => p.name === 'A Design Studio') && 
            <ProfileCard profile={profiles.find(p => p.name === 'A Design Studio')!} />}
          
          {/* Abode */}
          {profiles.find(p => p.name === 'Abode') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Abode')!} />}
          
          {/* Abodo */}
          {profiles.find(p => p.name === 'Abodo') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Abodo')!} />}
          
          {/* Acoufelt */}
          {profiles.find(p => p.name === 'Acoufelt') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Acoufelt')!} />}
          
          {/* Adam Kane Architects */}
          {profiles.find(p => p.name === 'Adam Kane Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Adam Kane Architects')!} />}
          
          {/* Agius Scorpo Architects */}
          {profiles.find(p => p.name === 'Agius Scorpo Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Agius Scorpo Architects')!} />}
          
          {/* AKI Design Studio */}
          {profiles.find(p => p.name === 'AKI Design Studio') && 
            <ProfileCard profile={profiles.find(p => p.name === 'AKI Design Studio')!} />}
          
          {/* Alana Cooke */}
          {profiles.find(p => p.name === 'Alana Cooke, Architecture, Interior Design.') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Alana Cooke, Architecture, Interior Design.')!} />}
          
          {/* Alex Earl */}
          {profiles.find(p => p.name === 'Alex Earl') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Alex Earl')!} />}
          
          {/* Alexander &CO. */}
          {profiles.find(p => p.name === 'Alexander &CO.') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Alexander &CO.')!} />}
          
          {/* Alexandra Buchanan Architecture */}
          {profiles.find(p => p.name === 'Alexandra Buchanan Architecture') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Alexandra Buchanan Architecture')!} />}
          
          {/* Letter B immediately after the last A profile */}
          <div className={styles.letterCard} id="B">
            <h2>B</h2>
          </div>
          
          {/* Austin Maynard Architects */}
          {profiles.find(p => p.name === 'Austin Maynard Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Austin Maynard Architects')!} />}
          
          {/* B.E Architecture */}
          {profiles.find(p => p.name === 'B.E Architecture') && 
            <ProfileCard profile={profiles.find(p => p.name === 'B.E Architecture')!} />}
          
          {/* BAINA */}
          {profiles.find(p => p.name === 'BAINA') && 
            <ProfileCard profile={profiles.find(p => p.name === 'BAINA')!} />}
          
          {/* Bang & Olufsen */}
          {profiles.find(p => p.name === 'Bang & Olufsen') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Bang & Olufsen')!} />}
          
          {/* Baracco + Wright Architects */}
          {profiles.find(p => p.name === 'Baracco + Wright Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Baracco + Wright Architects')!} />}
          
          {/* Rest of B profiles */}
          {profiles.find(p => p.name === 'Basil Bangs') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Basil Bangs')!} />}
          {profiles.find(p => p.name === 'Baya') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Baya')!} />}
          {profiles.find(p => p.name === 'Bayley Ward') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Bayley Ward')!} />}
          {profiles.find(p => p.name === 'BC Stone') && 
            <ProfileCard profile={profiles.find(p => p.name === 'BC Stone')!} />}
          {profiles.find(p => p.name === 'Ben Callery Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Ben Callery Architects')!} />}
          {profiles.find(p => p.name === 'Benn + Penna Architecture') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Benn + Penna Architecture')!} />}
          
          {/* Letter C immediately after the last B profile */}
          <div className={styles.letterCard} id="C">
            <h2>C</h2>
          </div>
          
          {/* C profiles */}
          {profiles.find(p => p.name === 'Cantilever Interiors') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Cantilever Interiors')!} />}
          {profiles.find(p => p.name === 'Carole Whiting') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Carole Whiting')!} />}
          {profiles.find(p => p.name === 'Carr') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Carr')!} />}
          {profiles.find(p => p.name === 'Carter Williamson Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Carter Williamson Architects')!} />}
          {profiles.find(p => p.name === 'Chamberlain Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Chamberlain Architects')!} />}
          
          {/* Letter D immediately after the last C profile */}
          <div className={styles.letterCard} id="D">
            <h2>D</h2>
          </div>
          
          {/* D profiles */}
          {profiles.find(p => p.name === 'Davidov Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Davidov Architects')!} />}
          {profiles.find(p => p.name === 'Decus Interiors') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Decus Interiors')!} />}
          {profiles.find(p => p.name === 'Doherty Design Studio') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Doherty Design Studio')!} />}
          {profiles.find(p => p.name === 'Dangar Barin Smith') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Dangar Barin Smith')!} />}
          {profiles.find(p => p.name === 'David Boyle Architect') && 
            <ProfileCard profile={profiles.find(p => p.name === 'David Boyle Architect')!} />}
          {profiles.find(p => p.name === 'Derlot') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Derlot')!} />}
          {profiles.find(p => p.name === 'Design by Them') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Design by Them')!} />}
          
          {/* Letter E immediately after the last D profile */}
          <div className={styles.letterCard} id="E">
            <h2>E</h2>
          </div>
          
          {/* E profiles */}
          {profiles.find(p => p.name === 'Edition Office') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Edition Office')!} />}
          {profiles.find(p => p.name === 'Elenberg Fraser') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Elenberg Fraser')!} />}
          {profiles.find(p => p.name === 'Eastop Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Eastop Architects')!} />}
          {profiles.find(p => p.name === 'Eckersley Garden Architecture') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Eckersley Garden Architecture')!} />}
          {profiles.find(p => p.name === 'Edra') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Edra')!} />}
          
          {/* Letter F immediately after the last E profile */}
          <div className={styles.letterCard} id="F">
            <h2>F</h2>
          </div>
          
          {/* F profiles */}
          {profiles.find(p => p.name === 'Fiona Lynch') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Fiona Lynch')!} />}
          {profiles.find(p => p.name === 'Flack Studio') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Flack Studio')!} />}
          {profiles.find(p => p.name === 'Folk Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Folk Architects')!} />}
          {profiles.find(p => p.name === 'Figr Architecture Studio') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Figr Architecture Studio')!} />}
          {profiles.find(p => p.name === 'Foolscap Studio') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Foolscap Studio')!} />}
          {profiles.find(p => p.name === 'Foomann Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Foomann Architects')!} />}
          {profiles.find(p => p.name === 'Freadman White') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Freadman White')!} />}
          
          {/* Letter G immediately after the last F profile */}
          <div className={styles.letterCard} id="G">
            <h2>G</h2>
          </div>
          
          {/* G profiles */}
          {profiles.find(p => p.name === 'Grazia & Co') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Grazia & Co')!} />}
          {profiles.find(p => p.name === 'Golden') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Golden')!} />}
          {profiles.find(p => p.name === 'Gardiner Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Gardiner Architects')!} />}
          {profiles.find(p => p.name === 'Glas') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Glas')!} />}
          {profiles.find(p => p.name === 'Grant Amon Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Grant Amon Architects')!} />}
          {profiles.find(p => p.name === 'Grimshaw') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Grimshaw')!} />}
          
          {/* Letter H immediately after the last G profile */}
          <div className={styles.letterCard} id="H">
            <h2>H</h2>
          </div>
          
          {/* H profiles */}
          {profiles.find(p => p.name === 'Hassell') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Hassell')!} />}
          {profiles.find(p => p.name === 'Hecker Guthrie') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Hecker Guthrie')!} />}
          {profiles.find(p => p.name === 'Handelsmann + Khaw') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Handelsmann + Khaw')!} />}
          {profiles.find(p => p.name === 'Hayball') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Hayball')!} />}
          {profiles.find(p => p.name === 'Heartly') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Heartly')!} />}
          
          {/* Letter I immediately after the last H profile */}
          <div className={styles.letterCard} id="I">
            <h2>I</h2>
          </div>
          
          {/* I profiles */}
          {profiles.find(p => p.name === 'Inglis Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Inglis Architects')!} />}
          {profiles.find(p => p.name === 'InForm') && 
            <ProfileCard profile={profiles.find(p => p.name === 'InForm')!} />}
          {profiles.find(p => p.name === 'Infinite Design Studio') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Infinite Design Studio')!} />}
          {profiles.find(p => p.name === 'Intermode') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Intermode')!} />}
          
          {/* Letter J immediately after the last I profile */}
          <div className={styles.letterCard} id="J">
            <h2>J</h2>
          </div>
          
          {/* J profiles */}
          {profiles.find(p => p.name === 'Jackson Clements Burrows') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Jackson Clements Burrows')!} />}
          {profiles.find(p => p.name === 'Jardan') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Jardan')!} />}
          {profiles.find(p => p.name === 'John Wardle Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'John Wardle Architects')!} />}
          {profiles.find(p => p.name === 'Jolson') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Jolson')!} />}
          {profiles.find(p => p.name === 'Juliette Arent Squadrito') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Juliette Arent Squadrito')!} />}
          
          {/* Letter K immediately after the last J profile */}
          <div className={styles.letterCard} id="K">
            <h2>K</h2>
          </div>
          
          {/* K profiles */}
          {profiles.find(p => p.name === 'Kennedy Nolan') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Kennedy Nolan')!} />}
          {profiles.find(p => p.name === 'Koskela') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Koskela')!} />}
          {profiles.find(p => p.name === 'Koichi Takada Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Koichi Takada Architects')!} />}
          {profiles.find(p => p.name === 'Kosloff Architecture') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Kosloff Architecture')!} />}
          {profiles.find(p => p.name === 'Krause Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Krause Architects')!} />}
          
          {/* Letter L immediately after the last K profile */}
          <div className={styles.letterCard} id="L">
            <h2>L</h2>
          </div>
          
          {/* L profiles */}
          {profiles.find(p => p.name === 'Laminex') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Laminex')!} />}
          {profiles.find(p => p.name === 'Lyn Gardener') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Lyn Gardener')!} />}
          {profiles.find(p => p.name === 'Luchetti Krelle') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Luchetti Krelle')!} />}
          {profiles.find(p => p.name === 'Luigi Rosselli Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Luigi Rosselli Architects')!} />}
          {profiles.find(p => p.name === 'Lume Architecture') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Lume Architecture')!} />}
          
          {/* Letter M immediately after the last L profile */}
          <div className={styles.letterCard} id="M">
            <h2>M</h2>
          </div>
          
          {/* M profiles */}
          {profiles.find(p => p.name === 'Mim Design') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Mim Design')!} />}
          {profiles.find(p => p.name === 'Molecule Studio') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Molecule Studio')!} />}
          {profiles.find(p => p.name === 'Madeleine Blanchfield Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Madeleine Blanchfield Architects')!} />}
          {profiles.find(p => p.name === 'Maker & Son') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Maker & Son')!} />}
          {profiles.find(p => p.name === 'Marston Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Marston Architects')!} />}
          
          {/* Letter N immediately after the last M profile */}
          <div className={styles.letterCard} id="N">
            <h2>N</h2>
          </div>
          
          {/* N profiles */}
          {profiles.find(p => p.name === 'Neometro') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Neometro')!} />}
          {profiles.find(p => p.name === 'Nexus Designs') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Nexus Designs')!} />}
          {profiles.find(p => p.name === 'Nightingale Housing') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Nightingale Housing')!} />}
          {profiles.find(p => p.name === 'Norm Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Norm Architects')!} />}
          {profiles.find(p => p.name === 'Northbourne Architecture + Design') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Northbourne Architecture + Design')!} />}
          
          {/* Letter O immediately after the last N profile */}
          <div className={styles.letterCard} id="O">
            <h2>O</h2>
          </div>
          
          {/* O profiles */}
          {profiles.find(p => p.name === 'Olaver Architecture') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Olaver Architecture')!} />}
          {profiles.find(p => p.name === 'Otomys') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Otomys')!} />}
          {profiles.find(p => p.name === 'Other Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Other Architects')!} />}
          {profiles.find(p => p.name === 'Owen Architecture') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Owen Architecture')!} />}
          {profiles.find(p => p.name === 'Ownworld') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Ownworld')!} />}
          {profiles.find(p => p.name === 'Oblica') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Oblica')!} />}
          
          {/* Letter P immediately after the last O profile */}
          <div className={styles.letterCard} id="P">
            <h2>P</h2>
          </div>
          
          {/* P profiles */}
          {profiles.find(p => p.name === 'Poliform') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Poliform')!} />}
          {profiles.find(p => p.name === 'Porters Paints') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Porters Paints')!} />}
          {profiles.find(p => p.name === 'Pandolfini Architects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Pandolfini Architects')!} />}
          {profiles.find(p => p.name === 'Pattern Studio') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Pattern Studio')!} />}
          {profiles.find(p => p.name === 'Penfold Projects') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Penfold Projects')!} />}
          
          {/* Letter Q immediately after the last P profile */}
          <div className={styles.letterCard} id="Q">
            <h2>Q</h2>
          </div>
          
          {/* Q profiles */}
          {profiles.find(p => p.name === 'Quantum Timber Finishes') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Quantum Timber Finishes')!} />}
          {profiles.find(p => p.name === 'Quince & Cook') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Quince & Cook')!} />}
          {profiles.find(p => p.name === 'Quinn Architecture') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Quinn Architecture')!} />}
          {profiles.find(p => p.name === 'Quirk Architecture') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Quirk Architecture')!} />}
          {profiles.find(p => p.name === 'Quay Furniture') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Quay Furniture')!} />}
          
          {/* Letter R immediately after the last Q profile */}
          <div className={styles.letterCard} id="R">
            <h2>R</h2>
          </div>
          
          {/* R profiles */}
          {profiles.find(p => p.name === 'Richards Stanisich') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Richards Stanisich')!} />}
          {profiles.find(p => p.name === 'Rob Mills Architecture & Interiors') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Rob Mills Architecture & Interiors')!} />}
          {profiles.find(p => p.name === 'Robson Rak') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Robson Rak')!} />}
          {profiles.find(p => p.name === 'Rogerseller') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Rogerseller')!} />}
          {profiles.find(p => p.name === 'Rolf Benz') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Rolf Benz')!} />}
          
          {/* Letter S immediately after the last R profile */}
          <div className={styles.letterCard} id="S">
            <h2>S</h2>
          </div>
          
          {/* S profiles */}
          {profiles.find(p => p.name === 'SJB') && 
            <ProfileCard profile={profiles.find(p => p.name === 'SJB')!} />}
          {profiles.find(p => p.name === 'Studio Bright') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Studio Bright')!} />}
          {profiles.find(p => p.name === 'Smart Design Studio') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Smart Design Studio')!} />}
          {profiles.find(p => p.name === 'Spence & Lyda') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Spence & Lyda')!} />}
          {profiles.find(p => p.name === 'Studio Esteta') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Studio Esteta')!} />}
          
          {/* Letter T immediately after the last S profile */}
          <div className={styles.letterCard} id="T">
            <h2>T</h2>
          </div>
          
          {/* T profiles */}
          {profiles.find(p => p.name === 'Tait') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Tait')!} />}
          {profiles.find(p => p.name === 'Techne Architecture + Interior Design') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Techne Architecture + Interior Design')!} />}
          {profiles.find(p => p.name === 'Templeton Architecture') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Templeton Architecture')!} />}
          {profiles.find(p => p.name === 'Thonet') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Thonet')!} />}
          {profiles.find(p => p.name === 'Tom Fereday') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Tom Fereday')!} />}
          
          {/* Letter U immediately after the last T profile */}
          <div className={styles.letterCard} id="U">
            <h2>U</h2>
          </div>
          
          {/* U profiles */}
          {profiles.find(p => p.name === 'Urban Couture') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Urban Couture')!} />}
          {profiles.find(p => p.name === 'United Products') && 
            <ProfileCard profile={profiles.find(p => p.name === 'United Products')!} />}
          {profiles.find(p => p.name === 'Uocmas') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Uocmas')!} />}
          
          {/* Letter V immediately after the last U profile */}
          <div className={styles.letterCard} id="V">
            <h2>V</h2>
          </div>
          
          {/* V profiles */}
          {profiles.find(p => p.name === 'Valiant Hire') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Valiant Hire')!} />}
          {profiles.find(p => p.name === 'Viabizzuno') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Viabizzuno')!} />}
          {profiles.find(p => p.name === 'Vola') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Vola')!} />}
          
          {/* Letter W immediately after the last V profile */}
          <div className={styles.letterCard} id="W">
            <h2>W</h2>
          </div>
          
          {/* W profiles */}
          {profiles.find(p => p.name === 'Wowowa Architecture') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Wowowa Architecture')!} />}
          {profiles.find(p => p.name === 'Woods Bagot') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Woods Bagot')!} />}
          {profiles.find(p => p.name === 'Wyer & Co.') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Wyer & Co.')!} />}
          {profiles.find(p => p.name === 'Workstead') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Workstead')!} />}
          
          {/* Letter X immediately after the last W profile */}
          <div className={styles.letterCard} id="X">
            <h2>X</h2>
          </div>
          
          {/* X profiles */}
          {profiles.find(p => p.name === 'X-Design Studio') && 
            <ProfileCard profile={profiles.find(p => p.name === 'X-Design Studio')!} />}
          {profiles.find(p => p.name === 'Xanthe Highfield') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Xanthe Highfield')!} />}
          {profiles.find(p => p.name === 'Xavier Furniture') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Xavier Furniture')!} />}
          {profiles.find(p => p.name === 'Xenolith') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Xenolith')!} />}
          {profiles.find(p => p.name === 'Xilo') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Xilo')!} />}
          
          {/* Letter Y immediately after the last X profile */}
          <div className={styles.letterCard} id="Y">
            <h2>Y</h2>
          </div>
          
          {/* Y profiles */}
          {profiles.find(p => p.name === 'YSG Studio') && 
            <ProfileCard profile={profiles.find(p => p.name === 'YSG Studio')!} />}
          {profiles.find(p => p.name === 'Yard Furniture') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Yard Furniture')!} />}
          {profiles.find(p => p.name === 'Yellow Diva') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Yellow Diva')!} />}
          {profiles.find(p => p.name === 'Youssofzay + Hart') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Youssofzay + Hart')!} />}
          {profiles.find(p => p.name === 'Yulparitja Artists') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Yulparitja Artists')!} />}
          
          {/* Letter Z immediately after the last Y profile */}
          <div className={styles.letterCard} id="Z">
            <h2>Z</h2>
          </div>
          
          {/* Z profiles */}
          {profiles.find(p => p.name === 'Zuster') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Zuster')!} />}
          {profiles.find(p => p.name === 'Zaha Hadid Design') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Zaha Hadid Design')!} />}
          {profiles.find(p => p.name === 'Zacariotto') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Zacariotto')!} />}
          {profiles.find(p => p.name === 'Zampese Architecture') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Zampese Architecture')!} />}
          {profiles.find(p => p.name === 'Zenith Interiors') && 
            <ProfileCard profile={profiles.find(p => p.name === 'Zenith Interiors')!} />}
          
          {/* 0-9 immediately after the last Z profile */}
          <div className={styles.letterCard} id="0-9">
            <h2>0-9</h2>
          </div>
          
          {/* 0-9 profiles */}
          {profiles.find(p => p.name === '1+2 Architecture') && 
            <ProfileCard profile={profiles.find(p => p.name === '1+2 Architecture')!} />}
          {profiles.find(p => p.name === '2 Design Group') && 
            <ProfileCard profile={profiles.find(p => p.name === '2 Design Group')!} />}
          {profiles.find(p => p.name === '3 Monkeys Audiovisual') && 
            <ProfileCard profile={profiles.find(p => p.name === '3 Monkeys Audiovisual')!} />}
        </div>
      </div>

      <div className={styles.divider} />

      {/* Community Section */}
      <div className={styles.communitySection}>
        <div className={styles.communityContent}>
          <h2>THE LOCAL PROJECT</h2>
          <h3>Community</h3>
          <p>Sign up to our mailing list for the best of local architecture, interiors and design delivered to your inbox.</p>
          
          <div className={styles.emailSignupContainer}>
            <div className={styles.emailSignup}>
              <input 
                type="email" 
                placeholder="Enter Your Email Here" 
                className={styles.emailInput}
              />
              <button type="submit" className={styles.submitArrow}>
                →
              </button>
            </div>
            
            <div className={styles.recaptcha}>
              <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      {/* Replace hard-coded trending section with TrendingNow component */}
      <TrendingNow 
        articles={trendingArticles} 
        heading="TRENDING NOW"
      />
    </div>
  );
} 