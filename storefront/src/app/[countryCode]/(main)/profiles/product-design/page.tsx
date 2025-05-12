import React from 'react';
import styles from './product-design.module.css';
import ProfileCard from '@/components/shared/ProfileCard';
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
    category: 'BRAND PROFILE',
    image: '/images/profiles/abodo.jpg',
    slug: 'abodo'
  },
  {
    id: 4,
    name: 'Acoufelt',
    category: 'INDUSTRIAL DESIGN',
    image: '/images/profiles/acoufelt.jpg',
    slug: 'acoufelt'
  },
  {
    id: 5,
    name: 'Adam Kane Architects',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/adam-kane.jpg',
    slug: 'adam-kane-architects'
  },
  {
    id: 6,
    name: 'Agius Scorpo Architects',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/agius-scorpo.jpg',
    slug: 'agius-scorpo-architects'
  },
  {
    id: 7,
    name: 'AKI Design Studio',
    category: 'FURNITURE & LIGHTING DESIGN',
    image: '/images/profiles/aki-design.jpg',
    slug: 'aki-design-studio'
  },
  {
    id: 8,
    name: 'Alana Cooke, Architecture, Interior Design.',
    category: 'INTERIOR & FURNITURE DESIGN',
    image: '/images/profiles/alana-cooke.jpg',
    slug: 'alana-cooke'
  },
  {
    id: 9,
    name: 'Alex Earl',
    category: 'SUSTAINABLE FURNITURE DESIGNER',
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
    category: 'BRAND PROFILE',
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
    category: 'INDUSTRIAL DESIGN',
    image: '/images/profiles/anaca-studio.jpg',
    slug: 'anaca-studio'
  },
  {
    id: 15,
    name: 'Andrew Burges Architects',
    category: 'FURNITURE & LIGHTING DESIGN',
    image: '/images/profiles/andrew-burges.jpg',
    slug: 'andrew-burges'
  },
  {
    id: 16,
    name: 'Andrew Child Architecture',
    category: 'INTERIOR & FURNITURE DESIGN',
    image: '/images/profiles/andrew-child.jpg',
    slug: 'andrew-child'
  },
  {
    id: 17,
    name: 'Anibou',
    category: 'SUSTAINABLE FURNITURE DESIGNER',
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
    category: 'BRAND PROFILE',
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
    category: 'INDUSTRIAL DESIGN',
    image: '/images/profiles/baracco-wright.jpg',
    slug: 'baracco-wright'
  },
  {
    id: 23,
    name: 'Basil Bangs',
    category: 'FURNITURE & LIGHTING DESIGN',
    image: '/images/profiles/basil-bangs.jpg',
    slug: 'basil-bangs'
  },
  {
    id: 24,
    name: 'Baya',
    category: 'INTERIOR & FURNITURE DESIGN',
    image: '/images/profiles/baya.jpg',
    slug: 'baya'
  },
  {
    id: 25,
    name: 'Bayley Ward',
    category: 'SUSTAINABLE FURNITURE DESIGNER',
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
    category: 'BRAND PROFILE',
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
    category: 'INDUSTRIAL DESIGN',
    image: '/images/profiles/carole-whiting.jpg',
    slug: 'carole-whiting'
  },
  {
    id: 31,
    name: 'Carr',
    category: 'FURNITURE & LIGHTING DESIGN',
    image: '/images/profiles/carr.jpg',
    slug: 'carr'
  },
  {
    id: 32,
    name: 'Carter Williamson Architects',
    category: 'INTERIOR & FURNITURE DESIGN',
    image: '/images/profiles/carter-williamson.jpg',
    slug: 'carter-williamson'
  },
  {
    id: 33,
    name: 'Chamberlain Architects',
    category: 'SUSTAINABLE FURNITURE DESIGNER',
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
    category: 'BRAND PROFILE',
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
    category: 'INDUSTRIAL DESIGN',
    image: '/images/profiles/elenberg-fraser.jpg',
    slug: 'elenberg-fraser'
  },
  {
    id: 39,
    name: 'Fiona Lynch',
    category: 'FURNITURE & LIGHTING DESIGN',
    image: '/images/profiles/fiona-lynch.jpg',
    slug: 'fiona-lynch'
  },
  {
    id: 40,
    name: 'Flack Studio',
    category: 'INTERIOR & FURNITURE DESIGN',
    image: '/images/profiles/flack-studio.jpg',
    slug: 'flack-studio'
  },
  {
    id: 41,
    name: 'Folk Architects',
    category: 'SUSTAINABLE FURNITURE DESIGNER',
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
    category: 'LANDSCAPE ARCHITECTURE',
    image: '/images/profiles/dangar-barin-smith.jpg',
    slug: 'dangar-barin-smith'
  },
  {
    id: 45,
    name: 'David Boyle Architect',
    category: 'ARCHITECTURE',
    image: '/images/profiles/david-boyle.jpg',
    slug: 'david-boyle-architect'
  },
  {
    id: 46,
    name: 'Derlot',
    category: 'FURNITURE & LIGHTING DESIGN',
    image: '/images/profiles/derlot.jpg',
    slug: 'derlot'
  },
  {
    id: 47,
    name: 'Design by Them',
    category: 'FURNITURE DESIGN',
    image: '/images/profiles/design-by-them.jpg',
    slug: 'design-by-them'
  },
  {
    id: 48,
    name: 'Eastop Architects',
    category: 'ARCHITECTURE',
    image: '/images/profiles/eastop.jpg',
    slug: 'eastop-architects'
  },
  {
    id: 49,
    name: 'Eckersley Garden Architecture',
    category: 'LANDSCAPE ARCHITECTURE',
    image: '/images/profiles/eckersley.jpg',
    slug: 'eckersley-garden-architecture'
  },
  {
    id: 50,
    name: 'Edra',
    category: 'FURNITURE DESIGN',
    image: '/images/profiles/edra.jpg',
    slug: 'edra'
  },
  {
    id: 51,
    name: 'Figr Architecture Studio',
    category: 'ARCHITECTURE',
    image: '/images/profiles/figr.jpg',
    slug: 'figr-architecture-studio'
  },
  {
    id: 52,
    name: 'Foolscap Studio',
    category: 'INTERIOR DESIGN',
    image: '/images/profiles/foolscap.jpg',
    slug: 'foolscap-studio'
  },
  {
    id: 53,
    name: 'Foomann Architects',
    category: 'ARCHITECTURE',
    image: '/images/profiles/foomann.jpg',
    slug: 'foomann-architects'
  },
  {
    id: 54,
    name: 'Freadman White',
    category: 'ARCHITECTURE',
    image: '/images/profiles/freadman-white.jpg',
    slug: 'freadman-white'
  },
  {
    id: 55,
    name: 'Gardiner Architects',
    category: 'ARCHITECTURE',
    image: '/images/profiles/gardiner.jpg',
    slug: 'gardiner-architects'
  },
  {
    id: 56,
    name: 'Glas',
    category: 'PRODUCT DESIGN',
    image: '/images/profiles/glas.jpg',
    slug: 'glas'
  },
  {
    id: 57,
    name: 'Grant Amon Architects',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/grant-amon.jpg',
    slug: 'grant-amon-architects'
  },
  {
    id: 58,
    name: 'Grimshaw',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/grimshaw.jpg',
    slug: 'grimshaw'
  },
  {
    id: 59,
    name: 'Hassell',
    category: 'BRAND PROFILE',
    image: '/images/profiles/hassell.jpg',
    slug: 'hassell'
  },
  {
    id: 60,
    name: 'Hecker Guthrie',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/hecker-guthrie.jpg',
    slug: 'hecker-guthrie'
  },
  {
    id: 61,
    name: 'Inglis Architects',
    category: 'INDUSTRIAL DESIGN',
    image: '/images/profiles/inglis.jpg',
    slug: 'inglis-architects'
  },
  {
    id: 62,
    name: 'InForm',
    category: 'SUSTAINABLE FURNITURE DESIGNER',
    image: '/images/profiles/inform.jpg',
    slug: 'inform'
  },
  {
    id: 63,
    name: 'Jackson Clements Burrows',
    category: 'INTERIOR & FURNITURE DESIGN',
    image: '/images/profiles/jcb.jpg',
    slug: 'jackson-clements-burrows'
  },
  {
    id: 64,
    name: 'Jardan',
    category: 'FURNITURE & LIGHTING DESIGN',
    image: '/images/profiles/jardan.jpg',
    slug: 'jardan'
  },
  {
    id: 65,
    name: 'Kennedy Nolan',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/kennedy-nolan.jpg',
    slug: 'kennedy-nolan'
  },
  {
    id: 66,
    name: 'Koskela',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/koskela.jpg',
    slug: 'koskela'
  },
  {
    id: 67,
    name: 'Laminex',
    category: 'BRAND PROFILE',
    image: '/images/profiles/laminex.jpg',
    slug: 'laminex'
  },
  {
    id: 68,
    name: 'Lyn Gardener',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/lyn-gardener.jpg',
    slug: 'lyn-gardener'
  },
  {
    id: 69,
    name: 'Mim Design',
    category: 'INDUSTRIAL DESIGN',
    image: '/images/profiles/mim-design.jpg',
    slug: 'mim-design'
  },
  {
    id: 70,
    name: 'Molecule Studio',
    category: 'SUSTAINABLE FURNITURE DESIGNER',
    image: '/images/profiles/molecule.jpg',
    slug: 'molecule-studio'
  },
  {
    id: 71,
    name: 'Neometro',
    category: 'INTERIOR & FURNITURE DESIGN',
    image: '/images/profiles/neometro.jpg',
    slug: 'neometro'
  },
  {
    id: 72,
    name: 'Nexus Designs',
    category: 'FURNITURE & LIGHTING DESIGN',
    image: '/images/profiles/nexus.jpg',
    slug: 'nexus-designs'
  },
  {
    id: 73,
    name: 'Olaver Architecture',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/olaver.jpg',
    slug: 'olaver-architecture'
  },
  {
    id: 74,
    name: 'Otomys',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/otomys.jpg',
    slug: 'otomys'
  },
  {
    id: 75,
    name: 'Poliform',
    category: 'BRAND PROFILE',
    image: '/images/profiles/poliform.jpg',
    slug: 'poliform'
  },
  {
    id: 76,
    name: 'Porters Paints',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/porters.jpg',
    slug: 'porters-paints'
  },
  {
    id: 77,
    name: 'Richards Stanisich',
    category: 'INDUSTRIAL DESIGN',
    image: '/images/profiles/richards-stanisich.jpg',
    slug: 'richards-stanisich'
  },
  {
    id: 78,
    name: 'Rob Mills Architecture & Interiors',
    category: 'SUSTAINABLE FURNITURE DESIGNER',
    image: '/images/profiles/rob-mills.jpg',
    slug: 'rob-mills'
  },
  {
    id: 79,
    name: 'SJB',
    category: 'INTERIOR & FURNITURE DESIGN',
    image: '/images/profiles/sjb.jpg',
    slug: 'sjb'
  },
  {
    id: 80,
    name: 'Studio Bright',
    category: 'FURNITURE & LIGHTING DESIGN',
    image: '/images/profiles/studio-bright.jpg',
    slug: 'studio-bright'
  },
  {
    id: 81,
    name: 'Tait',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/tait.jpg',
    slug: 'tait'
  },
  {
    id: 82,
    name: 'Techne Architecture + Interior Design',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/techne.jpg',
    slug: 'techne'
  },
  {
    id: 83,
    name: 'Urban Edge Ceramics',
    category: 'MATERIALS',
    image: '/images/profiles/urban-edge.jpg',
    slug: 'urban-edge-ceramics'
  },
  {
    id: 84,
    name: 'Vokes and Peters',
    category: 'ARCHITECTURE',
    image: '/images/profiles/vokes-peters.jpg',
    slug: 'vokes-and-peters'
  },
  {
    id: 85,
    name: 'Wowowa Architecture',
    category: 'ARCHITECTURE',
    image: '/images/profiles/wowowa.jpg',
    slug: 'wowowa'
  },
  {
    id: 86,
    name: 'Woods Bagot',
    category: 'ARCHITECTURE',
    image: '/images/profiles/woods-bagot.jpg',
    slug: 'woods-bagot'
  },
  {
    id: 87,
    name: 'Zuster',
    category: 'FURNITURE DESIGN',
    image: '/images/profiles/zuster.jpg',
    slug: 'zuster'
  },
  {
    id: 88,
    name: '1+2 Architecture',
    category: 'ARCHITECTURE',
    image: '/images/profiles/1-2-architecture.jpg',
    slug: '1-2-architecture'
  },
  {
    id: 89,
    name: 'Handelsmann + Khaw',
    category: 'INTERIOR DESIGN',
    image: '/images/profiles/handelsmann-khaw.jpg',
    slug: 'handelsmann-khaw'
  },
  {
    id: 90,
    name: 'Hayball',
    category: 'ARCHITECTURE',
    image: '/images/profiles/hayball.jpg',
    slug: 'hayball'
  },
  {
    id: 91,
    name: 'Heartly',
    category: 'INTERIOR DESIGN',
    image: '/images/profiles/heartly.jpg',
    slug: 'heartly'
  },
  {
    id: 92,
    name: 'Infinite Design Studio',
    category: 'INTERIOR DESIGN',
    image: '/images/profiles/infinite-design.jpg',
    slug: 'infinite-design'
  },
  {
    id: 93,
    name: 'Intermode',
    category: 'ARCHITECTURE',
    image: '/images/profiles/intermode.jpg',
    slug: 'intermode'
  },
  {
    id: 94,
    name: 'John Wardle Architects',
    category: 'ARCHITECTURE',
    image: '/images/profiles/john-wardle.jpg',
    slug: 'john-wardle-architects'
  },
  {
    id: 95,
    name: 'Jolson',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/jolson.jpg',
    slug: 'jolson'
  },
  {
    id: 96,
    name: 'Juliette Arent Squadrito',
    category: 'INTERIOR DESIGN',
    image: '/images/profiles/juliette-arent.jpg',
    slug: 'juliette-arent-squadrito'
  },
  {
    id: 97,
    name: 'Koichi Takada Architects',
    category: 'ARCHITECTURE',
    image: '/images/profiles/koichi-takada.jpg',
    slug: 'koichi-takada-architects'
  },
  {
    id: 98,
    name: 'Kosloff Architecture',
    category: 'ARCHITECTURE',
    image: '/images/profiles/kosloff.jpg',
    slug: 'kosloff-architecture'
  },
  {
    id: 99,
    name: 'Krause Architects',
    category: 'ARCHITECTURE',
    image: '/images/profiles/krause.jpg',
    slug: 'krause-architects'
  },
  {
    id: 100,
    name: 'Luchetti Krelle',
    category: 'INTERIOR DESIGN',
    image: '/images/profiles/luchetti-krelle.jpg',
    slug: 'luchetti-krelle'
  },
  {
    id: 101,
    name: 'Luigi Rosselli Architects',
    category: 'ARCHITECTURE',
    image: '/images/profiles/luigi-rosselli.jpg',
    slug: 'luigi-rosselli-architects'
  },
  {
    id: 102,
    name: 'Lume Architecture',
    category: 'ARCHITECTURE',
    image: '/images/profiles/lume.jpg',
    slug: 'lume-architecture'
  },
  {
    id: 103,
    name: 'Madeleine Blanchfield Architects',
    category: 'ARCHITECTURE',
    image: '/images/profiles/madeleine-blanchfield.jpg',
    slug: 'madeleine-blanchfield-architects'
  },
  {
    id: 104,
    name: 'Maker & Son',
    category: 'FURNITURE DESIGN',
    image: '/images/profiles/maker-son.jpg',
    slug: 'maker-son'
  },
  {
    id: 105,
    name: 'Marston Architects',
    category: 'ARCHITECTURE',
    image: '/images/profiles/marston.jpg',
    slug: 'marston-architects'
  },
  {
    id: 106,
    name: 'Nightingale Housing',
    category: 'ARCHITECTURE & DEVELOPMENT',
    image: '/images/profiles/nightingale.jpg',
    slug: 'nightingale-housing'
  },
  {
    id: 107,
    name: 'Norm Architects',
    category: 'ARCHITECTURE & DESIGN',
    image: '/images/profiles/norm-architects.jpg',
    slug: 'norm-architects'
  },
  {
    id: 108,
    name: 'Northbourne Architecture + Design',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/northbourne.jpg',
    slug: 'northbourne'
  },
  {
    id: 109,
    name: 'Other Architects',
    category: 'ARCHITECTURE',
    image: '/images/profiles/other-architects.jpg',
    slug: 'other-architects'
  },
  {
    id: 110,
    name: 'Owen Architecture',
    category: 'ARCHITECTURE',
    image: '/images/profiles/owen.jpg',
    slug: 'owen-architecture'
  },
  {
    id: 111,
    name: 'Pandolfini Architects',
    category: 'ARCHITECTURE',
    image: '/images/profiles/pandolfini.jpg',
    slug: 'pandolfini-architects'
  },
  {
    id: 112,
    name: 'Pattern Studio',
    category: 'INTERIOR DESIGN',
    image: '/images/profiles/pattern-studio.jpg',
    slug: 'pattern-studio'
  },
  {
    id: 113,
    name: 'Penfold Projects',
    category: 'LANDSCAPE DESIGN',
    image: '/images/profiles/penfold.jpg',
    slug: 'penfold-projects'
  },
  {
    id: 114,
    name: 'Robson Rak',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/robson-rak.jpg',
    slug: 'robson-rak'
  },
  {
    id: 115,
    name: 'Rogerseller',
    category: 'BATHROOM & KITCHEN',
    image: '/images/profiles/rogerseller.jpg',
    slug: 'rogerseller'
  },
  {
    id: 116,
    name: 'Rolf Benz',
    category: 'FURNITURE DESIGN',
    image: '/images/profiles/rolf-benz.jpg',
    slug: 'rolf-benz'
  },
  {
    id: 117,
    name: 'Smart Design Studio',
    category: 'ARCHITECTURE',
    image: '/images/profiles/smart-design.jpg',
    slug: 'smart-design-studio'
  },
  {
    id: 118,
    name: 'Spence & Lyda',
    category: 'FURNITURE & LIGHTING',
    image: '/images/profiles/spence-lyda.jpg',
    slug: 'spence-lyda'
  },
  {
    id: 119,
    name: 'Studio Esteta',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/studio-esteta.jpg',
    slug: 'studio-esteta'
  },
  {
    id: 120,
    name: 'Templeton Architecture',
    category: 'ARCHITECTURE',
    image: '/images/profiles/templeton.jpg',
    slug: 'templeton-architecture'
  },
  {
    id: 121,
    name: 'Thonet',
    category: 'FURNITURE DESIGN',
    image: '/images/profiles/thonet.jpg',
    slug: 'thonet'
  },
  {
    id: 122,
    name: 'Tom Fereday',
    category: 'PRODUCT DESIGN',
    image: '/images/profiles/tom-fereday.jpg',
    slug: 'tom-fereday'
  },
  {
    id: 123,
    name: 'Utzon Architects',
    category: 'ARCHITECTURE',
    image: '/images/profiles/utzon.jpg',
    slug: 'utzon-architects'
  },
  {
    id: 124,
    name: 'Vitrocsa',
    category: 'WINDOWS & DOORS',
    image: '/images/profiles/vitrocsa.jpg',
    slug: 'vitrocsa'
  },
  {
    id: 125,
    name: 'Vola',
    category: 'BATHROOM & KITCHEN',
    image: '/images/profiles/vola.jpg',
    slug: 'vola'
  },
  {
    id: 126,
    name: 'Wyer & Co.',
    category: 'LANDSCAPE DESIGN',
    image: '/images/profiles/wyer.jpg',
    slug: 'wyer-co'
  },
  {
    id: 127,
    name: 'Workstead',
    category: 'LIGHTING DESIGN',
    image: '/images/profiles/workstead.jpg',
    slug: 'workstead'
  },
  {
    id: 128,
    name: 'Zaha Hadid Design',
    category: 'PRODUCT DESIGN',
    image: '/images/profiles/zaha-hadid.jpg',
    slug: 'zaha-hadid-design'
  },
  {
    id: 129,
    name: '2 Design Group',
    category: 'ARCHITECTURE',
    image: '/images/profiles/2-design.jpg',
    slug: '2-design-group'
  },
  {
    id: 130,
    name: '3 Monkeys Audiovisual',
    category: 'SUSTAINABLE FURNITURE DESIGNER',
    image: '/images/profiles/3-monkeys.jpg',
    slug: '3-monkeys-audiovisual'
  },
  {
    id: 101,
    name: 'Ilanel Design Studio',
    category: 'BRAND PROFILE',
    image: '/images/profiles/ilanel.jpg',
    slug: 'ilanel-design-studio'
  },
  {
    id: 102,
    name: 'Inkerman Developments',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/inkerman.jpg',
    slug: 'inkerman-developments'
  },
  {
    id: 103,
    name: 'Ownworld',
    category: 'INDUSTRIAL DESIGN',
    image: '/images/profiles/ownworld.jpg',
    slug: 'ownworld'
  },
  {
    id: 104,
    name: 'Oblica',
    category: 'FURNITURE & LIGHTING DESIGN',
    image: '/images/profiles/oblica.jpg',
    slug: 'oblica'
  },
  {
    id: 105,
    name: 'Quantum Timber Finishes',
    category: 'INTERIOR & FURNITURE DESIGN',
    image: '/images/profiles/quantum.jpg',
    slug: 'quantum-timber-finishes'
  },
  {
    id: 106,
    name: 'Quince & Cook',
    category: 'SUSTAINABLE FURNITURE DESIGNER',
    image: '/images/profiles/quince-cook.jpg',
    slug: 'quince-cook'
  },
  {
    id: 107,
    name: 'Quinn Architecture',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/quinn.jpg',
    slug: 'quinn-architecture'
  },
  {
    id: 108,
    name: 'Quirk Architecture',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/quirk.jpg',
    slug: 'quirk-architecture'
  },
  {
    id: 109,
    name: 'Quay Furniture',
    category: 'BRAND PROFILE',
    image: '/images/profiles/quay.jpg',
    slug: 'quay-furniture'
  },
  {
    id: 110,
    name: 'Urban Couture',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/urban-couture.jpg',
    slug: 'urban-couture'
  },
  {
    id: 111,
    name: 'United Products',
    category: 'INDUSTRIAL DESIGN',
    image: '/images/profiles/united-products.jpg',
    slug: 'united-products'
  },
  {
    id: 112,
    name: 'Uocmas',
    category: 'FURNITURE & LIGHTING DESIGN',
    image: '/images/profiles/uocmas.jpg',
    slug: 'uocmas'
  },
  {
    id: 113,
    name: 'Valiant Hire',
    category: 'INTERIOR & FURNITURE DESIGN',
    image: '/images/profiles/valiant.jpg',
    slug: 'valiant-hire'
  },
  {
    id: 114,
    name: 'Viabizzuno',
    category: 'SUSTAINABLE FURNITURE DESIGNER',
    image: '/images/profiles/viabizzuno.jpg',
    slug: 'viabizzuno'
  },
  {
    id: 115,
    name: 'X-Design Studio',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/x-design.jpg',
    slug: 'x-design-studio'
  },
  {
    id: 116,
    name: 'Xanthe Highfield',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/xanthe.jpg',
    slug: 'xanthe-highfield'
  },
  {
    id: 117,
    name: 'Xavier Furniture',
    category: 'BRAND PROFILE',
    image: '/images/profiles/xavier.jpg',
    slug: 'xavier-furniture'
  },
  {
    id: 118,
    name: 'Xenolith',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/xenolith.jpg',
    slug: 'xenolith'
  },
  {
    id: 119,
    name: 'Xilo',
    category: 'INDUSTRIAL DESIGN',
    image: '/images/profiles/xilo.jpg',
    slug: 'xilo'
  },
  {
    id: 120,
    name: 'YSG Studio',
    category: 'FURNITURE & LIGHTING DESIGN',
    image: '/images/profiles/ysg.jpg',
    slug: 'ysg-studio'
  },
  {
    id: 121,
    name: 'Yard Furniture',
    category: 'INTERIOR & FURNITURE DESIGN',
    image: '/images/profiles/yard.jpg',
    slug: 'yard-furniture'
  },
  {
    id: 122,
    name: 'Yellow Diva',
    category: 'SUSTAINABLE FURNITURE DESIGNER',
    image: '/images/profiles/yellow-diva.jpg',
    slug: 'yellow-diva'
  },
  {
    id: 123,
    name: 'Youssofzay + Hart',
    category: 'COMPANY PROFILE',
    image: '/images/profiles/youssofzay-hart.jpg',
    slug: 'youssofzay-hart'
  },
  {
    id: 124,
    name: 'Yulparitja Artists',
    category: 'DESIGNER PROFILE',
    image: '/images/profiles/yulparitja.jpg',
    slug: 'yulparitja-artists'
  },
  {
    id: 125,
    name: 'Zacariotto',
    category: 'BRAND PROFILE',
    image: '/images/profiles/zacariotto.jpg',
    slug: 'zacariotto'
  },
  {
    id: 126,
    name: 'Zampese Architecture',
    category: 'STUDIO PROFILE',
    image: '/images/profiles/zampese.jpg',
    slug: 'zampese-architecture'
  },
  {
    id: 127,
    name: 'Zenith Interiors',
    category: 'INDUSTRIAL DESIGN',
    image: '/images/profiles/zenith.jpg',
    slug: 'zenith-interiors'
  },
  {
    id: 128,
    name: 'Zaha Hadid Design',
    category: 'FURNITURE & LIGHTING DESIGN',
    image: '/images/profiles/zaha-hadid.jpg',
    slug: 'zaha-hadid-design'
  },
  {
    id: 129,
    name: '2 Design Group',
    category: 'INTERIOR & FURNITURE DESIGN',
    image: '/images/profiles/2-design.jpg',
    slug: '2-design-group'
  },
  {
    id: 130,
    name: '3 Monkeys Audiovisual',
    category: 'SUSTAINABLE FURNITURE DESIGNER',
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
              {index < alphabet.length - 1 && <span className={styles.letterSpace}></span>}
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
          <ProfileCard profile={profiles.find(p => p.name === 'A Design Studio')} />
          
          {/* Abode */}
          <ProfileCard profile={profiles.find(p => p.name === 'Abode')} />
          
          {/* Abodo */}
          <ProfileCard profile={profiles.find(p => p.name === 'Abodo')} />
          
          {/* Acoufelt */}
          <ProfileCard profile={profiles.find(p => p.name === 'Acoufelt')} />
          
          {/* Adam Kane Architects */}
          <ProfileCard profile={profiles.find(p => p.name === 'Adam Kane Architects')} />
          
          {/* Agius Scorpo Architects */}
          <ProfileCard profile={profiles.find(p => p.name === 'Agius Scorpo Architects')} />
          
          {/* AKI Design Studio */}
          <ProfileCard profile={profiles.find(p => p.name === 'AKI Design Studio')} />
          
          {/* Alana Cooke */}
          <ProfileCard profile={profiles.find(p => p.name === 'Alana Cooke, Architecture, Interior Design.')} />
          
          {/* Alex Earl */}
          <ProfileCard profile={profiles.find(p => p.name === 'Alex Earl')} />
          
          {/* Alexander &CO. */}
          <ProfileCard profile={profiles.find(p => p.name === 'Alexander &CO.')} />
          
          {/* Alexandra Buchanan Architecture */}
          <ProfileCard profile={profiles.find(p => p.name === 'Alexandra Buchanan Architecture')} />
          
          {/* Letter B immediately after the last A profile */}
          <div className={styles.letterCard} id="B">
            <h2>B</h2>
          </div>
          
          {/* Austin Maynard Architects */}
          <ProfileCard profile={profiles.find(p => p.name === 'Austin Maynard Architects')} />
          
          {/* B.E Architecture */}
          <ProfileCard profile={profiles.find(p => p.name === 'B.E Architecture')} />
          
          {/* BAINA */}
          <ProfileCard profile={profiles.find(p => p.name === 'BAINA')} />
          
          {/* Bang & Olufsen */}
          <ProfileCard profile={profiles.find(p => p.name === 'Bang & Olufsen')} />
          
          {/* Baracco + Wright Architects */}
          <ProfileCard profile={profiles.find(p => p.name === 'Baracco + Wright Architects')} />
          
          {/* Rest of B profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'Basil Bangs')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Baya')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Bayley Ward')} />
          <ProfileCard profile={profiles.find(p => p.name === 'BC Stone')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Ben Callery Architects')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Benn + Penna Architecture')} />
          
          {/* Letter C immediately after the last B profile */}
          <div className={styles.letterCard} id="C">
            <h2>C</h2>
          </div>
          
          {/* C profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'Cantilever Interiors')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Carole Whiting')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Carr')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Carter Williamson Architects')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Chamberlain Architects')} />
          
          {/* Letter D immediately after the last C profile */}
          <div className={styles.letterCard} id="D">
            <h2>D</h2>
          </div>
          
          {/* D profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'Davidov Architects')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Decus Interiors')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Doherty Design Studio')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Dangar Barin Smith')} />
          <ProfileCard profile={profiles.find(p => p.name === 'David Boyle Architect')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Derlot')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Design by Them')} />
          
          {/* Letter E immediately after the last D profile */}
          <div className={styles.letterCard} id="E">
            <h2>E</h2>
          </div>
          
          {/* E profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'Edition Office')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Elenberg Fraser')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Eastop Architects')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Eckersley Garden Architecture')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Edra')} />
          
          {/* Letter F immediately after the last E profile */}
          <div className={styles.letterCard} id="F">
            <h2>F</h2>
          </div>
          
          {/* F profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'Fiona Lynch')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Flack Studio')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Folk Architects')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Figr Architecture Studio')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Foolscap Studio')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Foomann Architects')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Freadman White')} />
          
          {/* Letter G immediately after the last F profile */}
          <div className={styles.letterCard} id="G">
            <h2>G</h2>
          </div>
          
          {/* G profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'Grazia & Co')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Golden')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Gardiner Architects')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Glas')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Grant Amon Architects')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Grimshaw')} />
          
          {/* Letter H immediately after the last G profile */}
          <div className={styles.letterCard} id="H">
            <h2>H</h2>
          </div>
          
          {/* H profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'Hassell')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Hecker Guthrie')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Handelsmann + Khaw')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Hayball')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Heartly')} />
          
          {/* Letter I immediately after the last H profile */}
          <div className={styles.letterCard} id="I">
            <h2>I</h2>
          </div>
          
          {/* I profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'Inglis Architects')} />
          <ProfileCard profile={profiles.find(p => p.name === 'InForm')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Infinite Design Studio')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Intermode')} />
          
          {/* Letter J immediately after the last I profile */}
          <div className={styles.letterCard} id="J">
            <h2>J</h2>
          </div>
          
          {/* J profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'Jackson Clements Burrows')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Jardan')} />
          <ProfileCard profile={profiles.find(p => p.name === 'John Wardle Architects')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Jolson')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Juliette Arent Squadrito')} />
          
          {/* Letter K immediately after the last J profile */}
          <div className={styles.letterCard} id="K">
            <h2>K</h2>
          </div>
          
          {/* K profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'Kennedy Nolan')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Koskela')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Koichi Takada Architects')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Kosloff Architecture')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Krause Architects')} />
          
          {/* Letter L immediately after the last K profile */}
          <div className={styles.letterCard} id="L">
            <h2>L</h2>
          </div>
          
          {/* L profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'Laminex')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Lyn Gardener')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Luchetti Krelle')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Luigi Rosselli Architects')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Lume Architecture')} />
          
          {/* Letter M immediately after the last L profile */}
          <div className={styles.letterCard} id="M">
            <h2>M</h2>
          </div>
          
          {/* M profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'Mim Design')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Molecule Studio')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Madeleine Blanchfield Architects')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Maker & Son')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Marston Architects')} />
          
          {/* Letter N immediately after the last M profile */}
          <div className={styles.letterCard} id="N">
            <h2>N</h2>
          </div>
          
          {/* N profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'Neometro')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Nexus Designs')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Nightingale Housing')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Norm Architects')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Northbourne Architecture + Design')} />
          
          {/* Letter O immediately after the last N profile */}
          <div className={styles.letterCard} id="O">
            <h2>O</h2>
          </div>
          
          {/* O profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'Olaver Architecture')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Otomys')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Other Architects')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Owen Architecture')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Ownworld')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Oblica')} />
          
          {/* Letter P immediately after the last O profile */}
          <div className={styles.letterCard} id="P">
            <h2>P</h2>
          </div>
          
          {/* P profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'Poliform')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Porters Paints')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Pandolfini Architects')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Pattern Studio')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Penfold Projects')} />
          
          {/* Letter Q immediately after the last P profile */}
          <div className={styles.letterCard} id="Q">
            <h2>Q</h2>
          </div>
          
          {/* Q profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'Quantum Timber Finishes')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Quince & Cook')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Quinn Architecture')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Quirk Architecture')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Quay Furniture')} />
          
          {/* Letter R immediately after the last Q profile */}
          <div className={styles.letterCard} id="R">
            <h2>R</h2>
          </div>
          
          {/* R profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'Richards Stanisich')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Rob Mills Architecture & Interiors')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Robson Rak')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Rogerseller')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Rolf Benz')} />
          
          {/* Letter S immediately after the last R profile */}
          <div className={styles.letterCard} id="S">
            <h2>S</h2>
          </div>
          
          {/* S profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'SJB')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Studio Bright')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Smart Design Studio')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Spence & Lyda')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Studio Esteta')} />
          
          {/* Letter T immediately after the last S profile */}
          <div className={styles.letterCard} id="T">
            <h2>T</h2>
          </div>
          
          {/* T profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'Tait')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Techne Architecture + Interior Design')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Templeton Architecture')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Thonet')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Tom Fereday')} />
          
          {/* Letter U immediately after the last T profile */}
          <div className={styles.letterCard} id="U">
            <h2>U</h2>
          </div>
          
          {/* U profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'Urban Couture')} />
          <ProfileCard profile={profiles.find(p => p.name === 'United Products')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Uocmas')} />
          
          {/* Letter V immediately after the last U profile */}
          <div className={styles.letterCard} id="V">
            <h2>V</h2>
          </div>
          
          {/* V profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'Valiant Hire')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Viabizzuno')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Vola')} />
          
          {/* Letter W immediately after the last V profile */}
          <div className={styles.letterCard} id="W">
            <h2>W</h2>
          </div>
          
          {/* W profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'Wowowa Architecture')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Woods Bagot')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Wyer & Co.')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Workstead')} />
          
          {/* Letter X immediately after the last W profile */}
          <div className={styles.letterCard} id="X">
            <h2>X</h2>
          </div>
          
          {/* X profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'X-Design Studio')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Xanthe Highfield')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Xavier Furniture')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Xenolith')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Xilo')} />
          
          {/* Letter Y immediately after the last X profile */}
          <div className={styles.letterCard} id="Y">
            <h2>Y</h2>
          </div>
          
          {/* Y profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'YSG Studio')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Yard Furniture')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Yellow Diva')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Youssofzay + Hart')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Yulparitja Artists')} />
          
          {/* Letter Z immediately after the last Y profile */}
          <div className={styles.letterCard} id="Z">
            <h2>Z</h2>
          </div>
          
          {/* Z profiles */}
          <ProfileCard profile={profiles.find(p => p.name === 'Zuster')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Zaha Hadid Design')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Zacariotto')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Zampese Architecture')} />
          <ProfileCard profile={profiles.find(p => p.name === 'Zenith Interiors')} />
          
          {/* 0-9 immediately after the last Z profile */}
          <div className={styles.letterCard} id="0-9">
            <h2>0-9</h2>
          </div>
          
          {/* 0-9 profiles */}
          <ProfileCard profile={profiles.find(p => p.name === '1+2 Architecture')} />
          <ProfileCard profile={profiles.find(p => p.name === '2 Design Group')} />
          <ProfileCard profile={profiles.find(p => p.name === '3 Monkeys Audiovisual')} />
        </div>
      </div>

      <div className={styles.divider}></div>

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

      <div className={styles.divider}></div>

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
                <div className={styles.playIcon}></div>
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
                <div className={styles.playIcon}></div>
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
                <div className={styles.playIcon}></div>
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
                <div className={styles.playIcon}></div>
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
                <div className={styles.playIcon}></div>
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