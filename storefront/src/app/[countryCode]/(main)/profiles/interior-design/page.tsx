import React from 'react';
import styles from './interior.module.css';
import ProfileCard from '@/components/shared/ProfileCard';
import Link from 'next/link';

// Sample profile data - in a real app, this would come from an API or database
const profiles = [
  {
    id: 1,
    name: 'A Design Studio',
    category: 'INTERIOR ARCHITECTURE',
    image: '/images/profiles/a-design-studio.jpg',
    slug: 'a-design-studio'
  },
  {
    id: 2,
    name: 'Abode',
    category: 'ARCHITECTS',
    image: '/images/profiles/abode.jpg',
    slug: 'abode'
  },
  {
    id: 3,
    name: 'Abodo',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/abodo.jpg',
    slug: 'abodo'
  },
  {
    id: 4,
    name: 'ARCHITECTS',
    category: 'INTERIOR ARCHITECTURE',
    image: '/images/profiles/acoufelt.jpg',
    slug: 'acoufelt'
  },
  {
    id: 5,
    name: 'Adam Kane Architects',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/adam-kane.jpg',
    slug: 'adam-kane-architects'
  },
  {
    id: 6,
    name: 'Agius Scorpo Architects',
    category: 'ARCHITECTS',
    image: '/images/profiles/agius-scorpo.jpg',
    slug: 'agius-scorpo-architects'
  },
  {
    id: 7,
    name: 'AKI Design Studio',
    category: 'INTERIOR ARCHITECTURE',
    image: '/images/profiles/aki-design.jpg',
    slug: 'aki-design-studio'
  },
  {
    id: 8,
    name: 'Alana Cooke, Architecture, Interior Design.',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/alana-cooke.jpg',
    slug: 'alana-cooke'
  },
  {
    id: 9,
    name: 'Alex Earl',
    category: 'ARCHITECTS',
    image: '/images/profiles/alex-earl.jpg',
    slug: 'alex-earl'
  },
  {
    id: 10,
    name: 'Alexander &CO.',
    category: 'INTERIOR ARCHITECTURE',
    image: '/images/profiles/alexander-and-co.jpg',
    slug: 'alexander-and-co'
  },
  {
    id: 11,
    name: 'Alexandra Buchanan Architecture',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/alexandra-buchanan.jpg',
    slug: 'alexandra-buchanan'
  },
  {
    id: 12,
    name: 'Alexandra Kidd Design',
    category: 'ARCHITECTS',
    image: '/images/profiles/alexandra-kidd.jpg',
    slug: 'alexandra-kidd'
  },
  {
    id: 13,
    name: 'AM Architecture',
    category: 'INTERIOR ARCHITECTURE',
    image: '/images/profiles/am-architecture.jpg',
    slug: 'am-architecture'
  },
  {
    id: 14,
    name: 'anaca Studio',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/anaca-studio.jpg',
    slug: 'anaca-studio'
  },
  {
    id: 15,
    name: 'Andrew Burges Architects',
    category: 'ARCHITECTS',
    image: '/images/profiles/andrew-burges.jpg',
    slug: 'andrew-burges'
  },
  {
    id: 16,
    name: 'Andrew Child Architecture',
    category: 'INTERIOR ARCHITECTURE',
    image: '/images/profiles/andrew-child.jpg',
    slug: 'andrew-child'
  },
  {
    id: 17,
    name: 'Anibou',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/anibou.jpg',
    slug: 'anibou'
  },
  {
    id: 18,
    name: 'Austin Maynard Architects',
    category: 'ARCHITECTS',
    image: '/images/profiles/austin-maynard.jpg',
    slug: 'austin-maynard-architects'
  },
  {
    id: 19,
    name: 'B.E Architecture',
    category: 'INTERIOR ARCHITECTURE',
    image: '/images/profiles/be-architecture.jpg',
    slug: 'be-architecture'
  },
  {
    id: 20,
    name: 'BAINA',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/baina.jpg',
    slug: 'baina'
  },
  {
    id: 21,
    name: 'Bang & Olufsen',
    category: 'ARCHITECTS',
    image: '/images/profiles/bang-olufsen.jpg',
    slug: 'bang-olufsen'
  },
  {
    id: 22,
    name: 'Baracco + Wright Architects',
    category: 'INTERIOR ARCHITECTURE',
    image: '/images/profiles/baracco-wright.jpg',
    slug: 'baracco-wright'
  },
  {
    id: 23,
    name: 'Basil Bangs',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/basil-bangs.jpg',
    slug: 'basil-bangs'
  },
  {
    id: 24,
    name: 'Baya',
    category: 'ARCHITECTS',
    image: '/images/profiles/baya.jpg',
    slug: 'baya'
  },
  {
    id: 25,
    name: 'Bayley Ward',
    category: 'INTERIOR ARCHITECTURE',
    image: '/images/profiles/bayley-ward.jpg',
    slug: 'bayley-ward'
  },
  {
    id: 26,
    name: 'BC Stone',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/bc-stone.jpg',
    slug: 'bc-stone'
  },
  {
    id: 27,
    name: 'Ben Callery Architects',
    category: 'ARCHITECTS',
    image: '/images/profiles/ben-callery.jpg',
    slug: 'ben-callery-architects'
  },
  {
    id: 28,
    name: 'Benn + Penna Architecture',
    category: 'INTERIOR ARCHITECTURE',
    image: '/images/profiles/benn-penna.jpg',
    slug: 'benn-penna-architecture'
  },
  {
    id: 29,
    name: 'Cantilever Interiors',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/cantilever.jpg',
    slug: 'cantilever-interiors'
  },
  {
    id: 30,
    name: 'Carole Whiting',
    category: 'ARCHITECTS',
    image: '/images/profiles/carole-whiting.jpg',
    slug: 'carole-whiting'
  },
  {
    id: 31,
    name: 'Carr',
    category: 'INTERIOR ARCHITECTURE',
    image: '/images/profiles/carr.jpg',
    slug: 'carr'
  },
  {
    id: 32,
    name: 'Carter Williamson Architects',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/carter-williamson.jpg',
    slug: 'carter-williamson'
  },
  {
    id: 33,
    name: 'Chamberlain Architects',
    category: 'ARCHITECTS',
    image: '/images/profiles/chamberlain.jpg',
    slug: 'chamberlain-architects'
  },
  {
    id: 34,
    name: 'Davidov Architects',
    category: 'INTERIOR ARCHITECTURE',
    image: '/images/profiles/davidov.jpg',
    slug: 'davidov-architects'
  },
  {
    id: 35,
    name: 'Decus Interiors',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/decus.jpg',
    slug: 'decus-interiors'
  },
  {
    id: 36,
    name: 'Doherty Design Studio',
    category: 'ARCHITECTS',
    image: '/images/profiles/doherty.jpg',
    slug: 'doherty-design-studio'
  },
  {
    id: 37,
    name: 'Edition Office',
    category: 'INTERIOR ARCHITECTURE',
    image: '/images/profiles/edition-office.jpg',
    slug: 'edition-office'
  },
  {
    id: 38,
    name: 'Elenberg Fraser',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/elenberg-fraser.jpg',
    slug: 'elenberg-fraser'
  },
  {
    id: 39,
    name: 'Fiona Lynch',
    category: 'ARCHITECTS',
    image: '/images/profiles/fiona-lynch.jpg',
    slug: 'fiona-lynch'
  },
  {
    id: 40,
    name: 'Flack Studio',
    category: 'INTERIOR ARCHITECTURE',
    image: '/images/profiles/flack-studio.jpg',
    slug: 'flack-studio'
  },
  {
    id: 41,
    name: 'Folk Architects',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/folk-architects.jpg',
    slug: 'folk-architects'
  },
  {
    id: 42,
    name: 'Grazia & Co',
    category: 'ARCHITECTS',
    image: '/images/profiles/grazia.jpg',
    slug: 'grazia-and-co'
  },
  {
    id: 43,
    name: 'Golden',
    category: 'INTERIOR ARCHITECTURE',
    image: '/images/profiles/golden.jpg',
    slug: 'golden'
  },
  {
    id: 44,
    name: 'Dangar Barin Smith',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/dangar-barin-smith.jpg',
    slug: 'dangar-barin-smith'
  },
  {
    id: 45,
    name: 'David Boyle Architect',
    category: 'ARCHITECTS',
    image: '/images/profiles/david-boyle.jpg',
    slug: 'david-boyle-architect'
  },
  {
    id: 46,
    name: 'Derlot',
    category: 'INTERIOR ARCHITECTURE',
    image: '/images/profiles/derlot.jpg',
    slug: 'derlot'
  },
  {
    id: 47,
    name: 'Design by Them',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/design-by-them.jpg',
    slug: 'design-by-them'
  },
  {
    id: 48,
    name: 'Eastop Architects',
    category: 'ARCHITECTS',
    image: '/images/profiles/eastop.jpg',
    slug: 'eastop-architects'
  },
  {
    id: 49,
    name: 'Eckersley Garden Architecture',
    category: 'INTERIOR ARCHITECTURE',
    image: '/images/profiles/eckersley.jpg',
    slug: 'eckersley-garden-architecture'
  },
  {
    id: 50,
    name: 'Edra',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/edra.jpg',
    slug: 'edra'
  },
  {
    id: 51,
    name: 'Figr Architecture Studio',
    category: 'ARCHITECTS',
    image: '/images/profiles/figr.jpg',
    slug: 'figr-architecture-studio'
  },
  {
    id: 52,
    name: 'Foolscap Studio',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/foolscap.jpg',
    slug: 'foolscap-studio'
  },
  {
    id: 53,
    name: 'Foomann Architects',
    category: 'ARCHITECTS',
    image: '/images/profiles/foomann.jpg',
    slug: 'foomann-architects'
  },
  {
    id: 54,
    name: 'Freadman White',
    category: 'ARCHITECTS',
    image: '/images/profiles/freadman-white.jpg',
    slug: 'freadman-white'
  },
  {
    id: 55,
    name: 'Gardiner Architects',
    category: 'ARCHITECTS',
    image: '/images/profiles/gardiner.jpg',
    slug: 'gardiner-architects'
  },
  {
    id: 56,
    name: 'Glas',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/glas.jpg',
    slug: 'glas'
  },
  {
    id: 57,
    name: 'Grant Amon Architects',
    category: 'ARCHITECTS',
    image: '/images/profiles/grant-amon.jpg',
    slug: 'grant-amon-architects'
  },
  {
    id: 58,
    name: 'Grimshaw',
    category: 'ARCHITECTS',
    image: '/images/profiles/grimshaw.jpg',
    slug: 'grimshaw'
  },
  {
    id: 59,
    name: 'Hassell',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/hassell.jpg',
    slug: 'hassell'
  },
  {
    id: 60,
    name: 'Hecker Guthrie',
    category: 'ARCHITECTS',
    image: '/images/profiles/hecker-guthrie.jpg',
    slug: 'hecker-guthrie'
  },
  {
    id: 61,
    name: 'Inglis Architects',
    category: 'ARCHITECTS',
    image: '/images/profiles/inglis.jpg',
    slug: 'inglis-architects'
  },
  {
    id: 62,
    name: 'InForm',
    category: 'ARCHITECTURE & CONSTRUCTION',
    image: '/images/profiles/inform.jpg',
    slug: 'inform'
  },
  {
    id: 63,
    name: 'Jackson Clements Burrows',
    category: 'ARCHITECTS',
    image: '/images/profiles/jcb.jpg',
    slug: 'jackson-clements-burrows'
  },
  {
    id: 64,
    name: 'Jardan',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/jardan.jpg',
    slug: 'jardan'
  },
  {
    id: 65,
    name: 'Kennedy Nolan',
    category: 'ARCHITECTS',
    image: '/images/profiles/kennedy-nolan.jpg',
    slug: 'kennedy-nolan'
  },
  {
    id: 66,
    name: 'Koskela',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/koskela.jpg',
    slug: 'koskela'
  },
  {
    id: 67,
    name: 'Laminex',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/laminex.jpg',
    slug: 'laminex'
  },
  {
    id: 68,
    name: 'Lyn Gardener',
    category: 'ARCHITECTS',
    image: '/images/profiles/lyn-gardener.jpg',
    slug: 'lyn-gardener'
  },
  {
    id: 69,
    name: 'Mim Design',
    category: 'ARCHITECTS',
    image: '/images/profiles/mim-design.jpg',
    slug: 'mim-design'
  },
  {
    id: 70,
    name: 'Molecule Studio',
    category: 'ARCHITECTS',
    image: '/images/profiles/molecule.jpg',
    slug: 'molecule-studio'
  },
  {
    id: 71,
    name: 'Neometro',
    category: 'ARCHITECTURE & DEVELOPMENT',
    image: '/images/profiles/neometro.jpg',
    slug: 'neometro'
  },
  {
    id: 72,
    name: 'Nexus Designs',
    category: 'ARCHITECTS',
    image: '/images/profiles/nexus.jpg',
    slug: 'nexus-designs'
  },
  {
    id: 73,
    name: 'Olaver Architecture',
    category: 'ARCHITECTS',
    image: '/images/profiles/olaver.jpg',
    slug: 'olaver-architecture'
  },
  {
    id: 74,
    name: 'Otomys',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/otomys.jpg',
    slug: 'otomys'
  },
  {
    id: 75,
    name: 'Poliform',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/poliform.jpg',
    slug: 'poliform'
  },
  {
    id: 76,
    name: 'Porters Paints',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/porters.jpg',
    slug: 'porters-paints'
  },
  {
    id: 77,
    name: 'Richards Stanisich',
    category: 'ARCHITECTS',
    image: '/images/profiles/richards-stanisich.jpg',
    slug: 'richards-stanisich'
  },
  {
    id: 78,
    name: 'Rob Mills Architecture & Interiors',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/rob-mills.jpg',
    slug: 'rob-mills'
  },
  {
    id: 79,
    name: 'SJB',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/sjb.jpg',
    slug: 'sjb'
  },
  {
    id: 80,
    name: 'Studio Bright',
    category: 'ARCHITECTS',
    image: '/images/profiles/studio-bright.jpg',
    slug: 'studio-bright'
  },
  {
    id: 81,
    name: 'Tait',
    category: 'ARCHITECTS',
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
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/urban-edge.jpg',
    slug: 'urban-edge-ceramics'
  },
  {
    id: 84,
    name: 'Vokes and Peters',
    category: 'ARCHITECTS',
    image: '/images/profiles/vokes-peters.jpg',
    slug: 'vokes-and-peters'
  },
  {
    id: 85,
    name: 'Wowowa Architecture',
    category: 'ARCHITECTS',
    image: '/images/profiles/wowowa.jpg',
    slug: 'wowowa'
  },
  {
    id: 86,
    name: 'Woods Bagot',
    category: 'ARCHITECTS',
    image: '/images/profiles/woods-bagot.jpg',
    slug: 'woods-bagot'
  },
  {
    id: 87,
    name: 'Zuster',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/zuster.jpg',
    slug: 'zuster'
  },
  {
    id: 88,
    name: '1+2 Architecture',
    category: 'ARCHITECTS',
    image: '/images/profiles/1-2-architecture.jpg',
    slug: '1-2-architecture'
  },
  {
    id: 89,
    name: 'Handelsmann + Khaw',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/handelsmann-khaw.jpg',
    slug: 'handelsmann-khaw'
  },
  {
    id: 90,
    name: 'Hayball',
    category: 'ARCHITECTS',
    image: '/images/profiles/hayball.jpg',
    slug: 'hayball'
  },
  {
    id: 91,
    name: 'Heartly',
    category: 'ARCHITECTS',
    image: '/images/profiles/heartly.jpg',
    slug: 'heartly'
  },
  {
    id: 92,
    name: 'Infinite Design Studio',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/infinite-design.jpg',
    slug: 'infinite-design'
  },
  {
    id: 93,
    name: 'Intermode',
    category: 'ARCHITECTS',
    image: '/images/profiles/intermode.jpg',
    slug: 'intermode'
  },
  {
    id: 94,
    name: 'John Wardle Architects',
    category: 'ARCHITECTS',
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
    category: 'ARCHITECTS',
    image: '/images/profiles/juliette-arent.jpg',
    slug: 'juliette-arent-squadrito'
  },
  {
    id: 97,
    name: 'Koichi Takada Architects',
    category: 'ARCHITECTS',
    image: '/images/profiles/koichi-takada.jpg',
    slug: 'koichi-takada-architects'
  },
  {
    id: 98,
    name: 'Kosloff Architecture',
    category: 'ARCHITECTS',
    image: '/images/profiles/kosloff.jpg',
    slug: 'kosloff-architecture'
  },
  {
    id: 99,
    name: 'Krause Architects',
    category: 'ARCHITECTS',
    image: '/images/profiles/krause.jpg',
    slug: 'krause-architects'
  },
  {
    id: 100,
    name: 'Luchetti Krelle',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/luchetti-krelle.jpg',
    slug: 'luchetti-krelle'
  },
  {
    id: 101,
    name: 'Luigi Rosselli Architects',
    category: 'ARCHITECTS',
    image: '/images/profiles/luigi-rosselli.jpg',
    slug: 'luigi-rosselli-architects'
  },
  {
    id: 102,
    name: 'Lume Architecture',
    category: 'ARCHITECTS',
    image: '/images/profiles/lume.jpg',
    slug: 'lume-architecture'
  },
  {
    id: 103,
    name: 'Madeleine Blanchfield Architects',
    category: 'ARCHITECTS',
    image: '/images/profiles/madeleine-blanchfield.jpg',
    slug: 'madeleine-blanchfield-architects'
  },
  {
    id: 104,
    name: 'Maker & Son',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/maker-son.jpg',
    slug: 'maker-son'
  },
  {
    id: 105,
    name: 'Marston Architects',
    category: 'ARCHITECTS',
    image: '/images/profiles/marston.jpg',
    slug: 'marston-architects'
  },
  {
    id: 106,
    name: 'Nightingale Housing',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/nightingale.jpg',
    slug: 'nightingale-housing'
  },
  {
    id: 107,
    name: 'Norm Architects',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
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
    category: 'ARCHITECTS',
    image: '/images/profiles/other-architects.jpg',
    slug: 'other-architects'
  },
  {
    id: 110,
    name: 'Owen Architecture',
    category: 'ARCHITECTS',
    image: '/images/profiles/owen.jpg',
    slug: 'owen-architecture'
  },
  {
    id: 111,
    name: 'Pandolfini Architects',
    category: 'ARCHITECTS',
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
    category: 'ARCHITECTURE & INTERIOR DESIGN',
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
    category: 'ARCHITECTS',
    image: '/images/profiles/rogerseller.jpg',
    slug: 'rogerseller'
  },
  {
    id: 116,
    name: 'Rolf Benz',
    category: 'ARCHITECTS',
    image: '/images/profiles/rolf-benz.jpg',
    slug: 'rolf-benz'
  },
  {
    id: 117,
    name: 'Smart Design Studio',
    category: 'ARCHITECTS',
    image: '/images/profiles/smart-design.jpg',
    slug: 'smart-design-studio'
  },
  {
    id: 118,
    name: 'Spence & Lyda',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
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
    category: 'ARCHITECTS',
    image: '/images/profiles/templeton.jpg',
    slug: 'templeton-architecture'
  },
  {
    id: 121,
    name: 'Thonet',
    category: 'ARCHITECTS',
    image: '/images/profiles/thonet.jpg',
    slug: 'thonet'
  },
  {
    id: 122,
    name: 'Tom Fereday',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/tom-fereday.jpg',
    slug: 'tom-fereday'
  },
  {
    id: 123,
    name: 'Utzon Architects',
    category: 'ARCHITECTS',
    image: '/images/profiles/utzon.jpg',
    slug: 'utzon-architects'
  },
  {
    id: 124,
    name: 'Vitrocsa',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/vitrocsa.jpg',
    slug: 'vitrocsa'
  },
  {
    id: 125,
    name: 'Vola',
    category: 'ARCHITECTS',
    image: '/images/profiles/vola.jpg',
    slug: 'vola'
  },
  {
    id: 126,
    name: 'Wyer & Co.',
    category: 'ARCHITECTS',
    image: '/images/profiles/wyer.jpg',
    slug: 'wyer-co'
  },
  {
    id: 127,
    name: 'Workstead',
    category: 'ARCHITECTS',
    image: '/images/profiles/workstead.jpg',
    slug: 'workstead'
  },
  {
    id: 128,
    name: 'Zaha Hadid Design',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/zaha-hadid.jpg',
    slug: 'zaha-hadid-design'
  },
  {
    id: 129,
    name: '2 Design Group',
    category: 'ARCHITECTS',
    image: '/images/profiles/2-design.jpg',
    slug: '2-design-group'
  },
  {
    id: 130,
    name: '3 Monkeys Audiovisual',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/3-monkeys.jpg',
    slug: '3-monkeys-audiovisual'
  },
  {
    id: 101,
    name: 'Ilanel Design Studio',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/ilanel.jpg',
    slug: 'ilanel-design-studio'
  },
  {
    id: 102,
    name: 'Inkerman Developments',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/inkerman.jpg',
    slug: 'inkerman-developments'
  },
  {
    id: 103,
    name: 'Ownworld',
    category: 'ARCHITECTS',
    image: '/images/profiles/ownworld.jpg',
    slug: 'ownworld'
  },
  {
    id: 104,
    name: 'Oblica',
    category: 'INTERIOR ARCHITECTURE',
    image: '/images/profiles/oblica.jpg',
    slug: 'oblica'
  },
  {
    id: 105,
    name: 'Quantum Timber Finishes',
    category: 'ARCHITECTS',
    image: '/images/profiles/quantum.jpg',
    slug: 'quantum-timber-finishes'
  },
  {
    id: 106,
    name: 'Quince & Cook',
    category: 'ARCHITECTS',
    image: '/images/profiles/quince-cook.jpg',
    slug: 'quince-cook'
  },
  {
    id: 107,
    name: 'Quinn Architecture',
    category: 'ARCHITECTS',
    image: '/images/profiles/quinn.jpg',
    slug: 'quinn-architecture'
  },
  {
    id: 108,
    name: 'Quirk Architecture',
    category: 'ARCHITECTS',
    image: '/images/profiles/quirk.jpg',
    slug: 'quirk-architecture'
  },
  {
    id: 109,
    name: 'Quay Furniture',
    category: 'ARCHITECTS',
    image: '/images/profiles/quay.jpg',
    slug: 'quay-furniture'
  },
  {
    id: 110,
    name: 'Urban Couture',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/urban-couture.jpg',
    slug: 'urban-couture'
  },
  {
    id: 111,
    name: 'United Products',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/united-products.jpg',
    slug: 'united-products'
  },
  {
    id: 112,
    name: 'Uocmas',
    category: 'ARCHITECTS',
    image: '/images/profiles/uocmas.jpg',
    slug: 'uocmas'
  },
  {
    id: 113,
    name: 'Valiant Hire',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/valiant.jpg',
    slug: 'valiant-hire'
  },
  {
    id: 114,
    name: 'Viabizzuno',
    category: 'ARCHITECTS',
    image: '/images/profiles/viabizzuno.jpg',
    slug: 'viabizzuno'
  },
  {
    id: 115,
    name: 'X-Design Studio',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/x-design.jpg',
    slug: 'x-design-studio'
  },
  {
    id: 116,
    name: 'Xanthe Highfield',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/xanthe.jpg',
    slug: 'xanthe-highfield'
  },
  {
    id: 117,
    name: 'Xavier Furniture',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/xavier.jpg',
    slug: 'xavier-furniture'
  },
  {
    id: 118,
    name: 'Xenolith',
    category: 'ARCHITECTS',
    image: '/images/profiles/xenolith.jpg',
    slug: 'xenolith'
  },
  {
    id: 119,
    name: 'Xilo',
    category: 'ARCHITECTS',
    image: '/images/profiles/xilo.jpg',
    slug: 'xilo'
  },
  {
    id: 120,
    name: 'YSG Studio',
    category: 'ARCHITECTS',
    image: '/images/profiles/ysg.jpg',
    slug: 'ysg-studio'
  },
  {
    id: 121,
    name: 'Yard Furniture',
    category: 'ARCHITECTURE & INTERIOR DESIGN',
    image: '/images/profiles/yard.jpg',
    slug: 'yard-furniture'
  },
  {
    id: 122,
    name: 'Yellow Diva',
    category: 'ARCHITECTS',
    image: '/images/profiles/yellow-diva.jpg',
    slug: 'yellow-diva'
  },
  {
    id: 123,
    name: 'Youssofzay + Hart',
    category: 'ARCHITECTS',
    image: '/images/profiles/youssofzay-hart.jpg',
    slug: 'youssofzay-hart'
  },
  {
    id: 124,
    name: 'Yulparitja Artists',
    category: 'ARCHITECTS',
    image: '/images/profiles/yulparitja.jpg',
    slug: 'yulparitja-artists'
  },
  {
    id: 125,
    name: 'Zacariotto',
    category: 'ARCHITECTS',
    image: '/images/profiles/zacariotto.jpg',
    slug: 'zacariotto'
  },
  {
    id: 126,
    name: 'Zampese Architecture',
    category: 'ARCHITECTS',
    image: '/images/profiles/zampese.jpg',
    slug: 'zampese-architecture'
  },
  {
    id: 127,
    name: 'Zenith Interiors',
    category: 'ARCHITECTS',
    image: '/images/profiles/zenith.jpg',
    slug: 'zenith-interiors'
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
          
          {/* Use the helper function for all profile cards */}
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
          
          {/* ... continue with other profiles ... */}
          
          {/* Fix all dividers */}
          <div className={styles.divider} />
          
          {/* Fix all playIcon divs */}
          <div className={styles.playButton}>
            <div className={styles.playIcon} />
          </div>
          
          {/* ... continue with the rest of the code ... */}
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