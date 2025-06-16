import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './marketplace.module.css';
import TrendingNow from '@modules/layout/templates/TrendingNow';
import { sql } from '@vercel/postgres';

// Define types for the data
interface TrendingArticle {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  hasVideo?: boolean;
}

interface Product {
  id: number;
  slug: string;
  title: string;
  brandName: string;
  image: string;
}

interface Brand {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
}

// Since this is a server component, we can fetch data directly
async function getTrendingArticles(): Promise<TrendingArticle[]> {
  const { rows } = await sql`
    SELECT 
      id,
      slug,
      title, 
      category,
      image,
      has_video as "hasVideo"
    FROM trending_articles 
    ORDER BY created_at DESC 
    LIMIT 5
  `;
  return rows;
}

async function getFeaturedProducts(): Promise<Product[]> {
  const { rows } = await sql`
    SELECT 
      id,
      slug,
      name as title,
      brand_name as "brandName",
      image_url as image
    FROM products
    WHERE is_featured = true
    ORDER BY featured_order
    LIMIT 12
  `;
  return rows;
}

async function getFeaturedBrands(): Promise<Brand[]> {
  const { rows } = await sql`
    SELECT 
      id,
      name,
      description,
      image_url as image
    FROM brands
    WHERE is_featured = true
    ORDER BY featured_order
    LIMIT 3
  `;
  return rows;
}

async function getFeaturedProjects(): Promise<Project[]> {
  const { rows } = await sql`
    SELECT 
      id,
      slug,
      title,
      subtitle,
      image_url as image,
      category
    FROM projects
    WHERE is_featured = true
    ORDER BY featured_order
    LIMIT 8
  `;
  return rows;
}

export default async function MarketplacePage() {
  // Fetch data in parallel
  const [
    trendingArticles,
    featuredProducts,
    featuredBrands,
    featuredProjects
  ] = await Promise.all([
    getTrendingArticles(),
    getFeaturedProducts(), 
    getFeaturedBrands(),
    getFeaturedProjects()
  ]);

  return (
    <div className={styles['marketplace-page']}>
      {/* Page Header */}
      <div className={styles['page-header']}>
        <h1>THE LOCAL MARKETPLACE</h1>
        
        <p className={styles['header-description']}>
          A curated selection, The Local Marketplace showcases the breadth and quality of local designers, makers and distributors working across Australia, New Zealand and North America.
        </p>
      </div>
      
      <div className={styles.horizontalLine} />
      
      <div className={styles.content}>
        {/* Rest of the JSX remains the same, but uses the fetched data */}
        {/* For example, the featured products section would map over featuredProducts: */}
        
        <div className={styles.featuredProductsSection}>
          <h2>FEATURED PRODUCTS</h2>
          
          <div className={styles.featuredProductsGrid}>
            {featuredProducts.map(product => (
              <Link key={product.id} href={`/marketplace/products/${product.slug}`} className={styles.productCard}>
                <div className={styles.productImage}>
                  <Image 
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={400}
                    layout="responsive"
                  />
                </div>
                <div className={styles.productInfo}>
                  <span className={styles.brandName}>{product.brandName}</span>
                  <h3>{product.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Brands Section */}
        <div className={styles.featuredBrandsSection}>
          <h2>FEATURED BRANDS AND DESIGNERS</h2>
          
          <div className={styles.brandsGrid}>
            {featuredBrands.map(brand => (
              <div key={brand.id} className={styles.brandCard}>
                <div className={styles.brandImage}>
                  <Image 
                    src={brand.image}
                    alt={brand.name}
                    width={600}
                    height={450}
                    layout="responsive"
                  />
                </div>
                <h3>{brand.name}</h3>
                <p>{brand.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className={styles.featuredProjectsGrid}>
          <h2>FEATURED PROJECTS</h2>
          <div className={styles.projectsGrid}>
            {featuredProjects.map(project => (
              <Link key={project.id} href={`/marketplace/projects/${project.slug}`} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={600} 
                    height={450} 
                    layout="responsive" 
                  />
                </div>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
              </Link>
            ))}
          </div>
        </div>

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

        <div className={styles.horizontalLine} />

        <TrendingNow 
          articles={trendingArticles}
          heading="TRENDING NOW"
        />
      </div>

      <div className={styles.divider} />
    </div>
  );
}