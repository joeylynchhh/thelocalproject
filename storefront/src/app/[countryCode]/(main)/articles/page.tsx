'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './articles.module.css';
import ArticleCard from '../../../../modules/articles/components/ArticleCard';
import ArticleFilters from '../../../../modules/articles/components/ArticleFilters';

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
  // Mock data based on the website content
  const articles: Article[] = [
    {
      id: 1,
      title: "Gaggenau's New Generation of Cooling",
      category: "NEWS FEATURE",
      image: "/images/gaggenau-cooling.jpg",
      excerpt: "Gaggenau's latest innovation thoughtfully reimagines the professional-grade, home fridge-freezer with groundbreaking technology and a seamless elevation of integrated kitchen aesthetics.",
      slug: "gaggenau-new-generation-cooling",
      featured: true
    },
    {
      id: 2,
      title: "New Piece: Redefining Modular Living",
      category: "BRAND FEATURE",
      image: "/images/new-piece-modular.jpg",
      excerpt: "Burgeoning Australian brand New Piece brings a fresh perspective to creative interiors with design-led furniture collections that offer functionality with a playful yet refined aesthetic.",
      slug: "new-piece-redefining-modular-living"
    },
    {
      id: 3,
      title: "Hodgson House by BassamFellows",
      category: "PROJECT FEATURE, BOOK EXTRACT",
      image: "/images/hodgson-house.jpg",
      excerpt: "Hodgson House by BassamFellows is stunningly featured in Art in Residence by Nicole England, an exploration into how art and personal collections infuse life into thoughtfully designed spaces.",
      slug: "hodgson-house-bassamfellows",
      featured: true
    },
    {
      id: 4,
      title: "In focus: Hanna Home",
      category: "ISSUE 17 FEATURE",
      image: "/images/hanna-home.jpg",
      excerpt: "Australian homewares brand Hanna Home's range supports human connection and helps create spaces imbued with togetherness and warmth.",
      slug: "in-focus-hanna-home"
    },
    {
      id: 5,
      title: "Grove House by Cadence & Co",
      category: "PROJECT FEATURE",
      image: "/images/grove-house.jpg",
      excerpt: "Grove House in Sydney demonstrates Cadence & Co's ability to balance seclusion with connection and heritage with modernity, creating a refined home that embraces contemporary family life.",
      slug: "grove-house-cadence-co"
    },
    {
      id: 6,
      title: "10 St Ninians by Curatd",
      category: "PROJECT FEATURE",
      image: "/images/st-ninians.jpg",
      excerpt: "In Melbourne's Brighton, 10 St Ninians pairs refined simplicity with bayside living, showcasing custom design details like curved joinery and Iver's Brunswick hardware to create a calm, cohesive atmosphere.",
      slug: "10-st-ninians-curatd"
    },
    {
      id: 7,
      title: "Portsea Beach House by Studio Esteta",
      category: "PROJECT FEATURE",
      image: "/images/portsea-beach-house.jpg",
      excerpt: "Portsea Beach House by Studio Esteta is a refined coastal retreat that balances sophistication with relaxed living, featuring natural materials and thoughtful spatial planning.",
      slug: "portsea-beach-house-studio-esteta"
    },
    {
      id: 8,
      title: "Artedomus' New Sydney Showroom",
      category: "NEWS FEATURE",
      image: "/images/artedomus-showroom.jpg",
      excerpt: "Artedomus unveils their new Sydney showroom, a sophisticated space that showcases their premium stone, tile, and architectural surfaces in an immersive environment.",
      slug: "artedomus-new-sydney-showroom"
    },
    {
      id: 9,
      title: "Laminex's New Colour Collection",
      category: "PRODUCT FEATURE",
      image: "/images/laminex-colour.jpg",
      excerpt: "Laminex introduces a refreshed colour palette that responds to evolving design trends while maintaining timeless appeal for contemporary Australian interiors.",
      slug: "laminex-new-colour-collection"
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
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>ARTICLES</h1>
      
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
              <li className={styles.filterItem}>Print Publication Articles</li>
            </ul>
          </div>
          
          <div className={styles.filterSection}>
            <h3 className={styles.filterTitle}>TOPIC</h3>
            <ul className={styles.filterList}>
              <li className={styles.filterItem}>Residential Design</li>
              <li className={styles.filterItem}>Furniture Designs</li>
            </ul>
          </div>
          
          {/* Hidden but preserved original filters */}
          <div style={{ display: 'none' }}>
            <ArticleFilters />
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
            {articles.map((article) => (
              <div key={article.id} className={styles.articleCard}>
                <Link href={`/articles/${article.slug}`}>
                  <div className={styles.articleImage}>
                    <div className={styles.imagePlaceholder} />
                  </div>
                  <div className={styles.articleInfo}>
                    <div className={styles.articleCategory}>{article.category}</div>
                    <h2 className={styles.articleTitle}>{article.title}</h2>
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
                <ArticleFilters />
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
  );
} 