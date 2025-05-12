import React from 'react';
import styles from './magazine.module.css';

export default function MagazinePage() {
  // Sample magazine issues data - in a real app, this would come from an API or CMS
  const magazineIssues = [
    { id: 1, title: 'The Local Project Print Issue', image: '/images/magazine-1.jpg' },
    { id: 2, title: 'The Local Marketplace', image: '/images/magazine-2.jpg' },
    // Add more issues as needed
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>MAGAZINE</h1>
      </header>

      <section className={styles.description}>
        <p>
          Published three times a year, The Local Project print periodical showcases the latest architecture and design from Australia, New Zealand and North America.
        </p>
      </section>

      <section className={styles.magazineGrid}>
        <div className={styles.grid}>
          {magazineIssues.map((issue) => (
            <div key={issue.id} className={styles.magazineItem}>
              <div className={styles.magazineImage}>
                {/* Replace with actual images when available */}
                <div className={styles.imagePlaceholder}>{issue.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Featured Issue Section */}
      <section className={styles.featuredIssue}>
        <div className={styles.latestIssueLabel}>LATEST ISSUE</div>
        <h2 className={styles.issueTitle}>ISSUE NO. 17</h2>
        <h3 className={styles.issueSubtitle}>The March Issue</h3>
        
        <div className={styles.issueDescription}>
          <p>
            Issue No. 17 features work from JDA Co, WOWOWA, Luigi Rosselli Architects and Atelier Alwill, Flack Studio, SJB, Marmol Radziner, Shaun Lockyer Architects, OWIU Design, Gezellig Interiors and Architecture Bureau, JAM Architects and more.
          </p>
          
          <p>
            Featured on the cover, The House at Lizard Island by JDA Co is a contemporary sanctuary worthy of its awe-inspiring location. A robust blend of concrete, rosewood and copper, the luxury stay celebrates natural beauty at every turn. The issue also includes insights from Jeremy Bull and Blainey North, profiles on Kerstin Thompson, Kelly Wearstler, David Flack and George Livissianis, as well as the latest in style, design and luxury news.
          </p>
          
          <p>
            The Commercial Project features projects and profiles across the retail, lifestyle, hospitality, workplace and wellness sectors. The Local Marketplace is a comprehensive product and finishes guide and highlights designers, artists, makers and distributors across Australia, New Zealand and North America.
          </p>
        </div>
        
        <button className={styles.orderButton} type="button">ORDER NOW</button>
      </section>
      
      {/* Annual Subscription Section */}
      <section className={styles.subscriptionSection}>
        <div className={styles.subscriptionContent}>
          <div className={styles.subscriptionLabel}>ANNUAL SUBSCRIPTION</div>
          <h2 className={styles.subscriptionTitle}>PUBLISHED THREE TIMES A YEAR</h2>
          
          <div className={styles.subscriptionDescription}>
            <p>
              Get The Local Project delivered straight to you with an annual subscription.
            </p>
            <p>
              Published three times a year, The Local Project print periodical is a curated insight into the latest architecture and design in Australia, New Zealand and North America.
            </p>
          </div>
          
          <button className={styles.subscribeButton} type="button">SUBSCRIBE NOW</button>
        </div>
        
        <div className={styles.subscriptionImage}>
          {/* Replace with actual image when available */}
          <div className={styles.imagePlaceholder}>Stacked magazines</div>
        </div>
      </section>
      
      {/* Bundles Section */}
      <section className={styles.bundlesSection}>
        <div className={styles.bundlesHeader}>BUNDLES</div>
        
        <p className={styles.bundlesDescription}>
          Elevate your collection with The Local Project magazines and books, offering an unparalleled journey into the world of contemporary architecture and design from Australia, New Zealand and North America.
        </p>
        
        <div className={styles.bundlesGrid}>
          {/* First row */}
          <a href="#" className={styles.bundleItem}>
            <div className={styles.bundleItemImage}>
              <div className={styles.imagePlaceholder}>Issues No. 1 - 3</div>
            </div>
            <div className={styles.bundleItemPrice}>$85.00</div>
            <h3 className={styles.bundleItemTitle}>Issues No. 1 - 3</h3>
            <div className={styles.bundleItemSubtitle}>3 ISSUE BUNDLE</div>
          </a>
          
          <a href="#" className={styles.bundleItem}>
            <div className={styles.bundleItemImage}>
              <div className={styles.imagePlaceholder}>Issues No. 4 - 6</div>
            </div>
            <div className={styles.bundleItemPrice}>$85.00</div>
            <h3 className={styles.bundleItemTitle}>Issues No. 4 - 6</h3>
            <div className={styles.bundleItemSubtitle}>3 ISSUE BUNDLE</div>
          </a>
          
          <a href="#" className={styles.bundleItem}>
            <div className={styles.bundleItemImage}>
              <div className={styles.imagePlaceholder}>Issues No. 7 - 9</div>
            </div>
            <div className={styles.bundleItemPrice}>$85.00</div>
            <h3 className={styles.bundleItemTitle}>Issues No. 7 - 9</h3>
            <div className={styles.bundleItemSubtitle}>3 ISSUE BUNDLE</div>
          </a>
          
          <a href="#" className={styles.bundleItem}>
            <div className={styles.bundleItemImage}>
              <div className={styles.imagePlaceholder}>Issues No. 10 - 12</div>
            </div>
            <div className={styles.bundleItemPrice}>$85.00</div>
            <h3 className={styles.bundleItemTitle}>Issues No. 10 - 12</h3>
            <div className={styles.bundleItemSubtitle}>3 ISSUE BUNDLE</div>
          </a>
          
          {/* Second row */}
          <a href="#" className={styles.bundleItem}>
            <div className={styles.bundleItemImage}>
              <div className={styles.imagePlaceholder}>Issues No. 13 - 15</div>
            </div>
            <div className={styles.bundleItemPrice}>$85.00</div>
            <h3 className={styles.bundleItemTitle}>Issues No. 13 - 15</h3>
            <div className={styles.bundleItemSubtitle}>3 ISSUE BUNDLE</div>
          </a>
          
          <a href="#" className={styles.bundleItem}>
            <div className={styles.bundleItemImage}>
              <div className={styles.imagePlaceholder}>Issues No. 16 - 18</div>
            </div>
            <div className={styles.bundleItemPrice}>$85.00</div>
            <h3 className={styles.bundleItemTitle}>Issues No. 16 - 18</h3>
            <div className={styles.bundleItemSubtitle}>3 ISSUE BUNDLE</div>
          </a>
          
          <a href="#" className={styles.bundleItem}>
            <div className={styles.bundleItemImage}>
              <div className={styles.imagePlaceholder}>Special Edition Bundle</div>
            </div>
            <div className={styles.bundleItemPrice}>$95.00</div>
            <h3 className={styles.bundleItemTitle}>Special Edition Bundle</h3>
            <div className={styles.bundleItemSubtitle}>3 ISSUE BUNDLE</div>
          </a>
          
          <a href="#" className={styles.bundleItem}>
            <div className={styles.bundleItemImage}>
              <div className={styles.imagePlaceholder}>Collector's Edition Bundle</div>
            </div>
            <div className={styles.bundleItemPrice}>$110.00</div>
            <h3 className={styles.bundleItemTitle}>Collector's Edition Bundle</h3>
            <div className={styles.bundleItemSubtitle}>3 ISSUE BUNDLE</div>
          </a>
          
          {/* Third row */}
          <a href="#" className={styles.bundleItem}>
            <div className={styles.bundleItemImage}>
              <div className={styles.imagePlaceholder}>Architecture Bundle</div>
            </div>
            <div className={styles.bundleItemPrice}>$90.00</div>
            <h3 className={styles.bundleItemTitle}>Architecture Bundle</h3>
            <div className={styles.bundleItemSubtitle}>3 ISSUE BUNDLE</div>
          </a>
          
          <a href="#" className={styles.bundleItem}>
            <div className={styles.bundleItemImage}>
              <div className={styles.imagePlaceholder}>Interior Design Bundle</div>
            </div>
            <div className={styles.bundleItemPrice}>$90.00</div>
            <h3 className={styles.bundleItemTitle}>Interior Design Bundle</h3>
            <div className={styles.bundleItemSubtitle}>3 ISSUE BUNDLE</div>
          </a>
          
          <a href="#" className={styles.bundleItem}>
            <div className={styles.bundleItemImage}>
              <div className={styles.imagePlaceholder}>Australian Homes Bundle</div>
            </div>
            <div className={styles.bundleItemPrice}>$90.00</div>
            <h3 className={styles.bundleItemTitle}>Australian Homes Bundle</h3>
            <div className={styles.bundleItemSubtitle}>3 ISSUE BUNDLE</div>
          </a>
          
          <a href="#" className={styles.bundleItem}>
            <div className={styles.bundleItemImage}>
              <div className={styles.imagePlaceholder}>New Zealand Homes Bundle</div>
            </div>
            <div className={styles.bundleItemPrice}>$90.00</div>
            <h3 className={styles.bundleItemTitle}>New Zealand Homes Bundle</h3>
            <div className={styles.bundleItemSubtitle}>3 ISSUE BUNDLE</div>
          </a>
        </div>
      </section>
    </div>
  );
} 