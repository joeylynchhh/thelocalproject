import React from 'react';
import styles from './art.module.css';
import ProfileCard from '../../../../../modules/layout/templates/ProfileCard';
import Link from 'next/link';

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
    category: 'STUDIO PROFILE',
    image: '/images/profiles/cantilever.jpg',
    slug: 'cantilever-interiors'
  },
  {
    id: 30,
    name: 'Carole Whiting',
    category: 'COMPANY PROFILE',
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
    category: 'COMPANY PROFILE',
    image: '/images/profiles/davidov.jpg',
    slug: 'davidov-architects'
  },
  {
    id: 35,
    name: 'Decus Interiors',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/decus.jpg',
    slug: 'decus-interiors'
  },
  {
    id: 36,
    name: 'Doherty Design Studio',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/doherty.jpg',
    slug: 'doherty-design-studio'
  },
  {
    id: 37,
    name: 'Edition Office',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/edition-office.jpg',
    slug: 'edition-office'
  },
  {
    id: 38,
    name: 'Elenberg Fraser',
    category: 'COMPANY PROFILE',
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
    category: 'GALLERY PROFILE',
    image: '/images/profiles/flack-studio.jpg',
    slug: 'flack-studio'
  },
  {
    id: 41,
    name: 'Folk Architects',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/folk-architects.jpg',
    slug: 'folk-architects'
  },
  {
    id: 42,
    name: 'Grazia & Co',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/grazia.jpg',
    slug: 'grazia-and-co'
  },
  {
    id: 43,
    name: 'Golden',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/golden.jpg',
    slug: 'golden'
  },
  {
    id: 44,
    name: 'Dangar Barin Smith',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/dangar-barin-smith.jpg',
    slug: 'dangar-barin-smith'
  },
  {
    id: 45,
    name: 'David Boyle Architect',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/david-boyle.jpg',
    slug: 'david-boyle-architect'
  },
  {
    id: 46,
    name: 'Derlot',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/derlot.jpg',
    slug: 'derlot'
  },
  {
    id: 47,
    name: 'Design by Them',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/design-by-them.jpg',
    slug: 'design-by-them'
  },
  {
    id: 48,
    name: 'Eastop Architects',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/eastop.jpg',
    slug: 'eastop-architects'
  },
  {
    id: 49,
    name: 'Eckersley Garden Architecture',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/eckersley.jpg',
    slug: 'eckersley-garden-architecture'
  },
  {
    id: 50,
    name: 'Edra',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/edra.jpg',
    slug: 'edra'
  },
  {
    id: 51,
    name: 'Figr Architecture Studio',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/figr.jpg',
    slug: 'figr-architecture-studio'
  },
  {
    id: 52,
    name: 'Foolscap Studio',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/foolscap.jpg',
    slug: 'foolscap-studio'
  },
  {
    id: 53,
    name: 'Foomann Architects',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/foomann.jpg',
    slug: 'foomann-architects'
  },
  {
    id: 54,
    name: 'Freadman White',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/freadman-white.jpg',
    slug: 'freadman-white'
  },
  {
    id: 55,
    name: 'Gardiner Architects',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/gardiner.jpg',
    slug: 'gardiner-architects'
  },
  {
    id: 56,
    name: 'Glas',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/glas.jpg',
    slug: 'glas'
  },
  {
    id: 57,
    name: 'Grant Amon Architects',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/grant-amon.jpg',
    slug: 'grant-amon-architects'
  },
  {
    id: 58,
    name: 'Grimshaw',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/grimshaw.jpg',
    slug: 'grimshaw'
  },
  {
    id: 59,
    name: 'Hassell',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/hassell.jpg',
    slug: 'hassell'
  },
  {
    id: 60,
    name: 'Hecker Guthrie',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/hecker-guthrie.jpg',
    slug: 'hecker-guthrie'
  },
  {
    id: 61,
    name: 'Inglis Architects',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/inglis.jpg',
    slug: 'inglis-architects'
  },
  {
    id: 62,
    name: 'InForm',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/inform.jpg',
    slug: 'inform'
  },
  {
    id: 63,
    name: 'Jackson Clements Burrows',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/jcb.jpg',
    slug: 'jackson-clements-burrows'
  },
  {
    id: 64,
    name: 'Jardan',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/jardan.jpg',
    slug: 'jardan'
  },
  {
    id: 65,
    name: 'Kennedy Nolan',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/kennedy-nolan.jpg',
    slug: 'kennedy-nolan'
  },
  {
    id: 66,
    name: 'Koskela',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/koskela.jpg',
    slug: 'koskela'
  },
  {
    id: 67,
    name: 'Laminex',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/laminex.jpg',
    slug: 'laminex'
  },
  {
    id: 68,
    name: 'Lyn Gardener',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/lyn-gardener.jpg',
    slug: 'lyn-gardener'
  },
  {
    id: 69,
    name: 'Mim Design',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/mim-design.jpg',
    slug: 'mim-design'
  },
  {
    id: 70,
    name: 'Molecule Studio',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/molecule.jpg',
    slug: 'molecule-studio'
  },
  {
    id: 71,
    name: 'Neometro',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/neometro.jpg',
    slug: 'neometro'
  },
  {
    id: 72,
    name: 'Nexus Designs',
    category: 'GALLERY PROFILE',
    image: '/images/profiles/nexus.jpg',
    slug: 'nexus-designs'
  },
  {
    id: 73,
    name: 'Olaver Architecture',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/olaver.jpg',
    slug: 'olaver-architecture'
  },
  {
    id: 74,
    name: 'Otomys',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/otomys.jpg',
    slug: 'otomys'
  },
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

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0-9'];

export default function ProfilesPage() {
  // Get all profiles in one continuous list
  const allProfiles = [...profiles];
  
  // Helper function to safely find a profile
  const findProfile = (name: string) => {
    const profile = profiles.find(p => p.name === name);
    return profile ? <ProfileCard profile={profile} /> : null;
  };
  
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
          
          {/* A profiles */}
          {findProfile('A Design Studio')}
          {findProfile('Abode')}
          {findProfile('Abodo')}
          {findProfile('Acoufelt')}
          {findProfile('Adam Kane Architects')}
          {findProfile('Agius Scorpo Architects')}
          {findProfile('AKI Design Studio')}
          {findProfile('Alana Cooke, Architecture, Interior Design.')}
          {findProfile('Alex Earl')}
          {findProfile('Alexander &CO.')}
          {findProfile('Alexandra Buchanan Architecture')}
          {findProfile('Alexandra Kidd Design')}
          {findProfile('AM Architecture')}
          {findProfile('anaca Studio')}
          {findProfile('Andrew Burges Architects')}
          {findProfile('Andrew Child Architecture')}
          {findProfile('Anibou')}
          
          {/* Letter B immediately after the last A profile */}
          <div className={styles.letterCard} id="B">
            <h2>B</h2>
          </div>
          
          {/* B profiles */}
          {findProfile('Austin Maynard Architects')}
          {findProfile('B.E Architecture')}
          {findProfile('BAINA')}
          {findProfile('Bang & Olufsen')}
          {findProfile('Baracco + Wright Architects')}
          {findProfile('Basil Bangs')}
          {findProfile('Baya')}
          {findProfile('Bayley Ward')}
          {findProfile('BC Stone')}
          {findProfile('Ben Callery Architects')}
          {findProfile('Benn + Penna Architecture')}
          
          {/* Letter C immediately after the last B profile */}
          <div className={styles.letterCard} id="C">
            <h2>C</h2>
          </div>
          
          {/* C profiles */}
          {findProfile('Cantilever Interiors')}
          {findProfile('Carole Whiting')}
          {findProfile('Carr')}
          {findProfile('Carter Williamson Architects')}
          {findProfile('Chamberlain Architects')}
          
          {/* Letter D immediately after the last C profile */}
          <div className={styles.letterCard} id="D">
            <h2>D</h2>
          </div>
          
          {/* D profiles */}
          {findProfile('Davidov Architects')}
          {findProfile('Decus Interiors')}
          {findProfile('Doherty Design Studio')}
          {findProfile('Dangar Barin Smith')}
          {findProfile('David Boyle Architect')}
          {findProfile('Derlot')}
          {findProfile('Design by Them')}
          
          {/* Letter E immediately after the last D profile */}
          <div className={styles.letterCard} id="E">
            <h2>E</h2>
          </div>
          
          {/* E profiles */}
          {findProfile('Edition Office')}
          {findProfile('Elenberg Fraser')}
          {findProfile('Eastop Architects')}
          {findProfile('Eckersley Garden Architecture')}
          {findProfile('Edra')}
          
          {/* Letter F immediately after the last E profile */}
          <div className={styles.letterCard} id="F">
            <h2>F</h2>
          </div>
          
          {/* F profiles */}
          {findProfile('Fiona Lynch')}
          {findProfile('Flack Studio')}
          {findProfile('Folk Architects')}
          {findProfile('Figr Architecture Studio')}
          {findProfile('Foolscap Studio')}
          {findProfile('Foomann Architects')}
          {findProfile('Freadman White')}
          
          {/* Letter G immediately after the last F profile */}
          <div className={styles.letterCard} id="G">
            <h2>G</h2>
          </div>
          
          {/* G profiles */}
          {findProfile('Grazia & Co')}
          {findProfile('Golden')}
          {findProfile('Gardiner Architects')}
          {findProfile('Glas')}
          {findProfile('Grant Amon Architects')}
          {findProfile('Grimshaw')}
          
          {/* Letter H immediately after the last G profile */}
          <div className={styles.letterCard} id="H">
            <h2>H</h2>
          </div>
          
          {/* H profiles */}
          {findProfile('Hassell')}
          {findProfile('Hecker Guthrie')}
          {findProfile('Handelsmann + Khaw')}
          {findProfile('Hayball')}
          {findProfile('Heartly')}
          
          {/* Letter I immediately after the last H profile */}
          <div className={styles.letterCard} id="I">
            <h2>I</h2>
          </div>
          
          {/* I profiles */}
          {findProfile('Inglis Architects')}
          {findProfile('InForm')}
          {findProfile('Infinite Design Studio')}
          {findProfile('Intermode')}
          
          {/* Letter J immediately after the last I profile */}
          <div className={styles.letterCard} id="J">
            <h2>J</h2>
          </div>
          
          {/* J profiles */}
          {findProfile('Jackson Clements Burrows')}
          {findProfile('Jardan')}
          {findProfile('John Wardle Architects')}
          {findProfile('Jolson')}
          {findProfile('Juliette Arent Squadrito')}
          
          {/* Letter K immediately after the last J profile */}
          <div className={styles.letterCard} id="K">
            <h2>K</h2>
          </div>
          
          {/* K profiles */}
          {findProfile('Kennedy Nolan')}
          {findProfile('Koskela')}
          {findProfile('Koichi Takada Architects')}
          {findProfile('Kosloff Architecture')}
          {findProfile('Krause Architects')}
          
          {/* Letter L immediately after the last K profile */}
          <div className={styles.letterCard} id="L">
            <h2>L</h2>
          </div>
          
          {/* L profiles */}
          {findProfile('Laminex')}
          {findProfile('Lyn Gardener')}
          {findProfile('Luchetti Krelle')}
          {findProfile('Luigi Rosselli Architects')}
          {findProfile('Lume Architecture')}
          
          {/* Letter M immediately after the last L profile */}
          <div className={styles.letterCard} id="M">
            <h2>M</h2>
          </div>
          
          {/* M profiles */}
          {findProfile('Mim Design')}
          {findProfile('Molecule Studio')}
          {findProfile('Madeleine Blanchfield Architects')}
          {findProfile('Maker & Son')}
          {findProfile('Marston Architects')}
          
          {/* Letter N immediately after the last M profile */}
          <div className={styles.letterCard} id="N">
            <h2>N</h2>
          </div>
          
          {/* N profiles */}
          {findProfile('Neometro')}
          {findProfile('Nexus Designs')}
          {findProfile('Nightingale Housing')}
          {findProfile('Norm Architects')}
          {findProfile('Northbourne Architecture + Design')}
          
          {/* Letter O immediately after the last N profile */}
          <div className={styles.letterCard} id="O">
            <h2>O</h2>
          </div>
          
          {/* O profiles */}
          {findProfile('Olaver Architecture')}
          {findProfile('Otomys')}
          {findProfile('Other Architects')}
          {findProfile('Owen Architecture')}
          {findProfile('Ownworld')}
          {findProfile('Oblica')}
          
          {/* Letter P immediately after the last O profile */}
          <div className={styles.letterCard} id="P">
            <h2>P</h2>
          </div>
          
          {/* P profiles */}
          {findProfile('Poliform')}
          {findProfile('Porters Paints')}
          {findProfile('Pandolfini Architects')}
          {findProfile('Pattern Studio')}
          {findProfile('Penfold Projects')}
          
          {/* Letter Q immediately after the last P profile */}
          <div className={styles.letterCard} id="Q">
            <h2>Q</h2>
          </div>
          
          {/* Q profiles */}
          {findProfile('Quantum Timber Finishes')}
          {findProfile('Quince & Cook')}
          {findProfile('Quinn Architecture')}
          {findProfile('Quirk Architecture')}
          {findProfile('Quay Furniture')}
          
          {/* Letter R immediately after the last Q profile */}
          <div className={styles.letterCard} id="R">
            <h2>R</h2>
          </div>
          
          {/* R profiles */}
          {findProfile('Richards Stanisich')}
          {findProfile('Rob Mills Architecture & Interiors')}
          {findProfile('Robson Rak')}
          {findProfile('Rogerseller')}
          {findProfile('Rolf Benz')}
          
          {/* Letter S immediately after the last R profile */}
          <div className={styles.letterCard} id="S">
            <h2>S</h2>
          </div>
          
          {/* S profiles */}
          {findProfile('SJB')}
          {findProfile('Studio Bright')}
          {findProfile('Smart Design Studio')}
          {findProfile('Spence & Lyda')}
          {findProfile('Studio Esteta')}
          
          {/* Letter T immediately after the last S profile */}
          <div className={styles.letterCard} id="T">
            <h2>T</h2>
          </div>
          
          {/* T profiles */}
          {findProfile('Tait')}
          {findProfile('Techne Architecture + Interior Design')}
          {findProfile('Templeton Architecture')}
          {findProfile('Thonet')}
          {findProfile('Tom Fereday')}
          
          {/* Letter U immediately after the last T profile */}
          <div className={styles.letterCard} id="U">
            <h2>U</h2>
          </div>
          
          {/* U profiles */}
          {findProfile('Urban Couture')}
          {findProfile('United Products')}
          {findProfile('Uocmas')}
          
          {/* Letter V immediately after the last U profile */}
          <div className={styles.letterCard} id="V">
            <h2>V</h2>
          </div>
          
          {/* V profiles */}
          {findProfile('Valiant Hire')}
          {findProfile('Viabizzuno')}
          {findProfile('Vola')}
          
          {/* Letter W immediately after the last V profile */}
          <div className={styles.letterCard} id="W">
            <h2>W</h2>
          </div>
          
          {/* W profiles */}
          {findProfile('Wowowa Architecture')}
          {findProfile('Woods Bagot')}
          {findProfile('Wyer & Co.')}
          {findProfile('Workstead')}
          
          {/* Letter X immediately after the last W profile */}
          <div className={styles.letterCard} id="X">
            <h2>X</h2>
          </div>
          
          {/* X profiles */}
          {findProfile('X-Design Studio')}
          {findProfile('Xanthe Highfield')}
          {findProfile('Xavier Furniture')}
          {findProfile('Xenolith')}
          {findProfile('Xilo')}
          
          {/* Letter Y immediately after the last X profile */}
          <div className={styles.letterCard} id="Y">
            <h2>Y</h2>
          </div>
          
          {/* Y profiles */}
          {findProfile('YSG Studio')}
          {findProfile('Yard Furniture')}
          {findProfile('Yellow Diva')}
          {findProfile('Youssofzay + Hart')}
          {findProfile('Yulparitja Artists')}
          
          {/* Letter Z immediately after the last Y profile */}
          <div className={styles.letterCard} id="Z">
            <h2>Z</h2>
          </div>
          
          {/* Z profiles */}
          {findProfile('Zuster')}
          {findProfile('Zaha Hadid Design')}
          {findProfile('Zacariotto')}
          {findProfile('Zampese Architecture')}
          {findProfile('Zenith Interiors')}
          
          {/* 0-9 immediately after the last Z profile */}
          <div className={styles.letterCard} id="0-9">
            <h2>0-9</h2>
          </div>
          
          {/* 0-9 profiles */}
          {findProfile('1+2 Architecture')}
          {findProfile('2 Design Group')}
          {findProfile('3 Monkeys Audiovisual')}
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

      <div className={styles.trendingSection}>
        <h3 className={styles.trendingTitle}>TRENDING NOW</h3>
        
        <div className={styles.trendingGrid}>
          {/* Article 1 */}
          <div className={styles.trendingArticle}>
            <div className={styles.trendingImageContainer}>
              <img 
                src="/images/trending/seascape.jpg" 
                alt="Seascape by Patterson Associates" 
                className={styles.trendingImage} 
              />
              <div className={styles.playButton}>
                <div className={styles.playIcon} />
              </div>
            </div>
            <div className={styles.trendingMeta}>
              <span className={styles.trendingType}>BOOK FEATURE</span>
            </div>
            <h4 className={styles.trendingTitle}>Seascape by Patterson Associates</h4>
          </div>
          
          {/* Article 2 */}
          <div className={styles.trendingArticle}>
            <div className={styles.trendingImageContainer}>
              <img 
                src="/images/trending/waiheke-house.jpg" 
                alt="A Process of Discovery – Waiheke House by Cheshire Architects" 
                className={styles.trendingImage} 
              />
              <div className={styles.playButton}>
                <div className={styles.playIcon} />
              </div>
            </div>
            <div className={styles.trendingMeta}>
              <span className={styles.trendingType}>BOOK FEATURE • ISSUE 03 FEATURE • VIDEO FEATURE</span>
            </div>
            <h4 className={styles.trendingTitle}>A Process of Discovery – Waiheke House by Cheshire Architects</h4>
          </div>
          
          {/* Article 3 */}
          <div className={styles.trendingArticle}>
            <div className={styles.trendingImageContainer}>
              <img 
                src="/images/trending/waimataruru.jpg" 
                alt="A Respectful Balance – Waimataruru by Pac Studio and Kristina Pickford Design" 
                className={styles.trendingImage} 
              />
              <div className={styles.playButton}>
                <div className={styles.playIcon} />
              </div>
            </div>
            <div className={styles.trendingMeta}>
              <span className={styles.trendingType}>VIDEO FEATURE</span>
            </div>
            <h4 className={styles.trendingTitle}>A Respectful Balance – Waimataruru by Pac Studio and Kristina Pickford Design</h4>
          </div>
          
          {/* Article 4 */}
          <div className={styles.trendingArticle}>
            <div className={styles.trendingImageContainer}>
              <img 
                src="/images/trending/palms-residence.jpg" 
                alt="Forming Deep Connections – Palms Residence by Olson Kundig" 
                className={styles.trendingImage} 
              />
              <div className={styles.playButton}>
                <div className={styles.playIcon} />
              </div>
            </div>
            <div className={styles.trendingMeta}>
              <span className={styles.trendingType}>VIDEO FEATURE</span>
            </div>
            <h4 className={styles.trendingTitle}>Forming Deep Connections – Palms Residence by Olson Kundig</h4>
          </div>
          
          {/* Article 5 */}
          <div className={styles.trendingArticle}>
            <div className={styles.trendingImageContainer}>
              <img 
                src="/images/trending/yukari-house.jpg" 
                alt="Yukari House by Tanev Muir Architects" 
                className={styles.trendingImage} 
              />
              <div className={styles.playButton}>
                <div className={styles.playIcon} />
              </div>
            </div>
            <div className={styles.trendingMeta}>
              <span className={styles.trendingType}>VIDEO FEATURE</span>
            </div>
            <h4 className={styles.trendingTitle}>Yukari House by Tanev Muir Architects</h4>
          </div>
        </div>
      </div>
    </div>
  );
} 