'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './by-room.module.css';

// Article type definition
type Article = {
  id: number;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  slug: string;
  featured?: boolean;
};

export default function ArticlesPage() {
  // Mock data based on the website content - expanded with additional projects
  const articles: Article[] = [
    {
      id: 1,
      title: "Hodgson House by BassamFellows",
      category: "PROJECT FEATURE, BOOK EXTRACT",
      image: "/images/hodgson-house.jpg",
      excerpt: "Hodgson House by BassamFellows is stunningly featured in Art in Residence by Nicole England, an exploration into how art and personal collections infuse life into thoughtfully designed spaces.",
      slug: "hodgson-house-bassamfellows",
      featured: true
    },
    {
      id: 2,
      title: "Grove House by Cadence & Co",
      category: "PROJECT FEATURE",
      image: "/images/grove-house.jpg",
      excerpt: "Grove House in Sydney demonstrates Cadence & Co's ability to balance seclusion with connection and heritage with modernity, creating a refined home that embraces contemporary family life.",
      slug: "grove-house-cadence-co"
    },
    {
      id: 3,
      title: "10 St Ninians by Curatd",
      category: "PROJECT FEATURE",
      image: "/images/st-ninians.jpg",
      excerpt: "In Melbourne's Brighton, 10 St Ninians pairs refined simplicity with bayside living, showcasing custom design details like curved joinery and Iver's Brunswick hardware to create a calm, cohesive atmosphere.",
      slug: "10-st-ninians-curatd"
    },
    {
      id: 4,
      title: "Portsea Beach House by Studio Esteta",
      category: "PROJECT FEATURE",
      image: "/images/portsea-beach-house.jpg",
      excerpt: "Portsea Beach House by Studio Esteta is a refined coastal retreat that balances sophistication with relaxed living, featuring natural materials and thoughtful spatial planning.",
      slug: "portsea-beach-house-studio-esteta"
    },
    {
      id: 5,
      title: "Laminex's New Colour Collection",
      category: "PRODUCT FEATURE",
      image: "/images/laminex-colour.jpg",
      excerpt: "Laminex introduces a refreshed colour palette that responds to evolving design trends while maintaining timeless appeal for contemporary Australian interiors.",
      slug: "laminex-new-colour-collection"
    },
    // Additional projects - Row 2
    {
      id: 6,
      title: "Coogee Cove by Kate Lawrence Interiors",
      category: "PROJECT FEATURE",
      image: "/images/coogee-cove.jpg",
      excerpt: "Coogee Cove by Kate Lawrence Interiors showcases elegant coastal design with refined materials and thoughtful spatial planning.",
      slug: "coogee-cove-kate-lawrence"
    },
    {
      id: 7,
      title: "DoubleTree by Hilton Hobart's Super-Durable Dekton Façade",
      category: "PROJECT FEATURE",
      image: "/images/doubletree-hilton.jpg",
      excerpt: "The DoubleTree by Hilton Hobart features an innovative and durable Dekton façade that combines aesthetics with practical performance.",
      slug: "doubletree-hilton-dekton-facade"
    },
    {
      id: 8,
      title: "Coastal Pavilion by Studio Jackson Scott",
      category: "PROJECT FEATURE",
      image: "/images/coastal-pavilion.jpg",
      excerpt: "Coastal Pavilion by Studio Jackson Scott embraces its oceanfront setting with a thoughtful design that balances openness with privacy.",
      slug: "coastal-pavilion-jackson-scott"
    },
    {
      id: 9,
      title: "Northcote Residence by Melanie Beynon Architecture",
      category: "PROJECT FEATURE",
      image: "/images/northcote-residence.jpg",
      excerpt: "Northcote Residence by Melanie Beynon Architecture transforms a heritage home with contemporary interventions that respect its historical context.",
      slug: "northcote-residence-beynon"
    },
    {
      id: 10,
      title: "Armadale Residence by Pleysier Perkins",
      category: "PROJECT FEATURE",
      image: "/images/armadale-residence.jpg",
      excerpt: "Armadale Residence by Pleysier Perkins balances heritage details with modern living requirements in this thoughtful renovation.",
      slug: "armadale-residence-pleysier-perkins"
    },
    // Additional projects - Row 3
    {
      id: 11,
      title: "Bondi Beach House by Alexander &CO.",
      category: "PROJECT FEATURE",
      image: "/images/bondi-beach-house.jpg",
      excerpt: "Bondi Beach House by Alexander &CO. celebrates coastal living with a refined palette and thoughtful spatial planning.",
      slug: "bondi-beach-house-alexander-co"
    },
    {
      id: 12,
      title: "Woollahra Terrace by Porebski Architects",
      category: "PROJECT FEATURE",
      image: "/images/woollahra-terrace.jpg",
      excerpt: "Woollahra Terrace by Porebski Architects reimagines a heritage terrace for contemporary living while preserving its historical character.",
      slug: "woollahra-terrace-porebski"
    },
    {
      id: 13,
      title: "Hawthorn House by Edition Office",
      category: "PROJECT FEATURE",
      image: "/images/hawthorn-house.jpg",
      excerpt: "Hawthorn House by Edition Office explores materiality and light in this thoughtfully designed Melbourne residence.",
      slug: "hawthorn-house-edition-office"
    },
    {
      id: 14,
      title: "Palm Beach House by Richards Stanisich",
      category: "PROJECT FEATURE",
      image: "/images/palm-beach-house.jpg",
      excerpt: "Palm Beach House by Richards Stanisich creates a serene coastal retreat with a sophisticated material palette and considered detailing.",
      slug: "palm-beach-house-richards-stanisich"
    },
    {
      id: 15,
      title: "Toorak Residence by Hecker Guthrie",
      category: "PROJECT FEATURE",
      image: "/images/toorak-residence.jpg",
      excerpt: "Toorak Residence by Hecker Guthrie exemplifies refined luxury with its thoughtful material selection and elegant proportions.",
      slug: "toorak-residence-hecker-guthrie"
    },
    // Additional projects - Row 4
    {
      id: 16,
      title: "Paddington Terrace by Smac Studio",
      category: "PROJECT FEATURE",
      image: "/images/paddington-terrace.jpg",
      excerpt: "Paddington Terrace by Smac Studio transforms a narrow Sydney terrace into a light-filled contemporary home.",
      slug: "paddington-terrace-smac"
    },
    {
      id: 17,
      title: "Bronte House by Tobias Partners",
      category: "PROJECT FEATURE",
      image: "/images/bronte-house.jpg",
      excerpt: "Bronte House by Tobias Partners responds to its coastal context with a design that embraces views while providing privacy and shelter.",
      slug: "bronte-house-tobias-partners"
    },
    {
      id: 18,
      title: "Malvern East by Flack Studio",
      category: "PROJECT FEATURE",
      image: "/images/malvern-east.jpg",
      excerpt: "Malvern East by Flack Studio showcases bold material choices and thoughtful spatial planning in this Melbourne residence.",
      slug: "malvern-east-flack-studio"
    },
    {
      id: 19,
      title: "Darling Point Apartment by Arent&Pyke",
      category: "PROJECT FEATURE",
      image: "/images/darling-point.jpg",
      excerpt: "Darling Point Apartment by Arent&Pyke demonstrates how thoughtful interior design can transform a compact space into a sophisticated home.",
      slug: "darling-point-arent-pyke"
    },
    {
      id: 20,
      title: "Mosman House by Mathieson Architects",
      category: "PROJECT FEATURE",
      image: "/images/mosman-house.jpg",
      excerpt: "Mosman House by Mathieson Architects balances minimalist design with warmth through careful material selection and considered detailing.",
      slug: "mosman-house-mathieson"
    }
  ];

  // Products data based on both images
  const products = [
    {
      id: 1,
      name: "Welles",
      designer: "GABRIEL SCOTT",
      image: "/images/products/welles-pendant.jpg",
      slug: "welles-gabriel-scott"
    },
    {
      id: 2,
      name: "Titus Lounge Chair",
      designer: "VINCENT SHEPPARD",
      image: "/images/products/titus-lounge-chair.jpg",
      slug: "titus-lounge-chair-vincent-sheppard"
    },
    {
      id: 3,
      name: "Dawn Pendant",
      designer: "STUDIO ENTI",
      image: "/images/products/dawn-pendant.jpg",
      slug: "dawn-pendant-studio-enti"
    },
    {
      id: 4,
      name: "Trilogy Horizontal Pendant",
      designer: "ARTICOLO LIGHTING",
      image: "/images/products/trilogy-horizontal-pendant.jpg",
      slug: "trilogy-horizontal-pendant-articolo"
    },
    {
      id: 5,
      name: "L'Art de Vivre Coffee Table",
      designer: "FOMU",
      image: "/images/products/lart-de-vivre-coffee-table.jpg",
      slug: "lart-de-vivre-coffee-table-fomu"
    },
    {
      id: 6,
      name: "Ria Dining Armchair",
      designer: "FAST",
      image: "/images/products/ria-dining-armchair.jpg",
      slug: "ria-dining-armchair-fast"
    },
    {
      id: 7,
      name: "Yuki Border",
      designer: "INAX",
      image: "/images/products/yuki-border.jpg",
      slug: "yuki-border-inax"
    },
    {
      id: 8,
      name: "Mindo 106 3 Seater Sofa",
      designer: "TRIT HOUSE",
      image: "/images/products/mindo-106-sofa.jpg",
      slug: "mindo-106-sofa-trit-house"
    },
    {
      id: 9,
      name: "Salon Sofa",
      designer: "BASSAMFELLOWS",
      image: "/images/products/salon-sofa.jpg",
      slug: "salon-sofa-bassamfellows"
    },
    {
      id: 10,
      name: "Sequence Round Table",
      designer: "COCO FLIP",
      image: "/images/products/sequence-round-table.jpg",
      slug: "sequence-round-table-coco-flip"
    },
    // Adding products from the second image
    {
      id: 11,
      name: "Torii Chair",
      designer: "MAST FURNITURE",
      image: "/images/products/torii-chair.jpg",
      slug: "torii-chair-mast-furniture"
    },
    {
      id: 12,
      name: "Tidal Chair",
      designer: "TAIT",
      image: "/images/products/tidal-chair.jpg",
      slug: "tidal-chair-tait"
    },
    {
      id: 13,
      name: "Shogun Table Lamp",
      designer: "ARTEMIDE",
      image: "/images/products/shogun-table-lamp.jpg",
      slug: "shogun-table-lamp-artemide"
    },
    {
      id: 14,
      name: "Index Sideboard",
      designer: "TIM WEBBER",
      image: "/images/products/index-sideboard.jpg",
      slug: "index-sideboard-tim-webber"
    },
    {
      id: 15,
      name: "Dipping Pendant Light",
      designer: "MARSET",
      image: "/images/products/dipping-pendant-light.jpg",
      slug: "dipping-pendant-light-marset"
    },
    {
      id: 16,
      name: "Alpaca Throw Rug in Olive",
      designer: "IN BED",
      image: "/images/products/alpaca-throw-rug.jpg",
      slug: "alpaca-throw-rug-in-bed"
    },
    {
      id: 17,
      name: "Zaza Sofa",
      designer: "KING",
      image: "/images/products/zaza-sofa.jpg",
      slug: "zaza-sofa-king"
    },
    {
      id: 18,
      name: "Beam Sofa",
      designer: "MAST FURNITURE",
      image: "/images/products/beam-sofa.jpg",
      slug: "beam-sofa-mast-furniture"
    },
    {
      id: 19,
      name: "Falper Ciotola Benchmount Bowl",
      designer: "FALPER",
      image: "/images/products/falper-ciotola-bowl.jpg",
      slug: "falper-ciotola-bowl"
    },
    {
      id: 20,
      name: "Ginger",
      designer: "MARSET",
      image: "/images/products/ginger-pendant.jpg",
      slug: "ginger-marset"
    }
  ];

  // Featured articles
  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  // Categories for the tabs
  const categories = [
    "Architecture and Interior Design",
    "Product Design",
    "News and Events",
    "Project Galleries"
  ];

  // State for showing/hiding filters
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      {/* Page Header - Outside container for full-width centering */}
      <div className={styles.pageHeader}>
        <div className={styles.topLabel}>THE LOCAL MARKETPLACE</div>
        <h1 className={styles.pageTitle}>ROOM</h1>
      </div>

      {/* Main Content Container */}
      <div className={styles.container}>
        <div className={styles.categoryNav}>
          {categories.map((category, index) => (
            <React.Fragment key={`category-${category}`}>
              <Link href="#" className={styles.categoryLink}>
                {category}
              </Link>
              {index < categories.length - 1 && <span className={styles.dotSeparator}>•</span>}
            </React.Fragment>
          ))}
        </div>
        
        <div className={styles.contentContainer}>
          <div className={styles.sidebar}>
            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>ARTICLE TYPE</h3>
              <ul className={styles.filterList}>
                <li className={styles.filterItem}>All Articles</li>
                <li className={styles.filterItem}>Architecture and Interior Design</li>
                <li className={styles.filterItem}>Product Design</li>
                <li className={styles.filterItem}>News and Events</li>
                <li className={styles.filterItem}>Project Galleries</li>
                <li className={styles.filterItem}>
                  Print Publication Articles
                  <span className={styles.dropdownArrow}>▼</span>
                </li>
              </ul>
            </div>
            
            <div className={styles.divider} />
            
            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>TOPIC</h3>
              <ul className={styles.filterList}>
                <li className={styles.filterItem}>Residential Design</li>
                <li className={styles.filterItem}>Furniture Designs</li>
                <li className={styles.filterItem}>Product and Material Design</li>
                <li className={styles.filterItem}>Profile Features</li>
                <li className={styles.filterItem}>Garden and Landscape Design</li>
                <li className={styles.filterItem}>Commercial Design</li>
                <li className={styles.filterItem}>Hospitality Design</li>
                <li className={styles.filterItem}>Art & Sculpture</li>
              </ul>
            </div>
            
            <div className={styles.divider} />
            
            <div className={styles.filterSection}>
              <h3 className={styles.filterTitle}>LOCATION</h3>
              <ul className={styles.filterList}>
                <li className={styles.filterItem}>
                  Australia
                  <span className={styles.dropdownArrow}>▼</span>
                </li>
                <li className={styles.filterItem}>
                  New Zealand
                  <span className={styles.dropdownArrow}>▼</span>
                </li>
                <li className={styles.filterItem}>North America</li>
              </ul>
            </div>
            
            {/* Hidden but preserved original filters */}
            <div style={{ display: 'none' }}>
            </div>
          </div>
          
          <div className={styles.mainContent}>
            {/* Featured Articles Section - Hidden but preserved */}
            <div className={styles.featuredArticles} style={{ display: 'none' }}>
              {featuredArticles.map(article => (
                <div key={`featured-${article.id}`} className={styles.featuredArticle}>
                  <div className={styles.featuredImage}>
                    <div className={styles.imagePlaceholder} style={{backgroundColor: '#f0f0f0', height: '400px'}} />
                  </div>
                  <div className={styles.featuredContent}>
                    <div className={styles.articleCategory}>{article.category}</div>
                    <h2 className={styles.featuredTitle}>{article.title}</h2>
                    <p className={styles.featuredExcerpt}>{article.excerpt}</p>
                    <Link href={`/articles/${article.slug}`} className={styles.readMore}>
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Articles Grid - Visible and styled like the image */}
            <div className={styles.articlesGrid}>
              {products.map((product) => (
                <div key={product.id} className={styles.articleCard}>
                  <Link href={`/marketplace/products/${product.slug}`}>
                    <div className={styles.articleImage}>
                      <div className={styles.imagePlaceholder} />
                    </div>
                    <div className={styles.articleInfo}>
                      <div className={styles.articleCategory}>{product.designer}</div>
                      <h2 className={styles.articleTitle}>{product.name}</h2>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Load More Button - Hidden but preserved */}
            <div className={styles.loadMore} style={{ display: 'none' }}>
              <button type="button" className={styles.loadMoreButton}>Load More</button>
            </div>

            {/* Filters Container - Hidden but preserved */}
            <div className={styles.filtersContainer} style={{ display: 'none' }}>
              <div className={styles.filtersHeader}>
                <h3>Filter Articles</h3>
                <button 
                  type="button" 
                  className={styles.toggleFilters}
                  onClick={() => setShowFilters(!showFilters)}
                >
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>
              </div>
              {showFilters && (
                <div className={styles.filtersContent}>
                </div>
              )}
            </div>

            {/* Newsletter Signup - Hidden but preserved */}
            <div className={styles.newsletterSignup} style={{ display: 'none' }}>
              <h3>THE LOCAL PROJECT Community</h3>
              <p>Sign up to our mailing list for the best of local architecture, interiors and design delivered to your inbox.</p>
              <div className={styles.signupForm}>
                <input type="email" placeholder="Your email address" />
                <button type="button">Subscribe</button>
              </div>
            </div>

            {/* Trending Section - Hidden but preserved */}
            <div className={styles.trendingSection} style={{ display: 'none' }}>
              <h4>Trending now</h4>
              <ul>
                <li><Link href="/articles/seascape-patterson-associates">Book Feature Seascape by Patterson Associates</Link></li>
                <li><Link href="/articles/waiheke-house-cheshire-architects">Book Feature • Issue 03 Feature • Video Feature A Process of Discovery – Waiheke House by Cheshire Architects</Link></li>
                <li><Link href="/articles/waimataruru-pac-studio">Video Feature A Respectful Balance – Waimataruru by Pac Studio and Kristina Pickford Design</Link></li>
                <li><Link href="/articles/palms-residence-olson-kundig">Video Feature Forming Deep Connections – Palms Residence by Olson Kundig</Link></li>
                <li><Link href="/articles/yukari-house-tanev-muir">Video Feature Yukari House by Tanev Muir Architects</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 
