import React from 'react';
import styles from './about.module.css';

export default function PublicationsPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>PRINT PUBLICATIONS</h1>
        <p className={styles.subtitle}>
          The Local Project print publications are comprised of the magazine trio – The Local Project, The Commercial Project and The Local Marketplace – released together three times a year, and the hardcover book 10, featuring the best homes from the first 10 issues of The Local Project magazine. The magazines and the book are all printed on high-quality paper stock, designed to be enduring objects to be added to coffee table or library and enjoyed for years to come.
        </p>
      </section>

      {/* Publications Display - Updated to match reference */}
      <section className={styles.publicationsDisplay}>
        <div className={styles.publicationItem}>
          <img src="/images/publications/magazine-trio.jpg" alt="The Local Project Magazine Trio" />
        </div>
        <div className={styles.publicationItem}>
          <img src="/images/publications/local-project-cover.jpg" alt="The Local Project Magazine" />
        </div>
      </section>

      {/* Latest Issue Section */}
      <section className={styles.latestIssue}>
        <div className={styles.latestIssueHeader}>LATEST ISSUE</div>
        <h2 className={styles.issueTitle}>ISSUE NO. 17</h2>
        <h3 className={styles.issueSubtitle}>The March Issue</h3>
        
        <div className={styles.issueDescription}>
          <p>
            Issue No. 17 features work from JDA Co, WOJR, Luigi Rosselli Architects and Atelier Alwill, Flack Studio, SJB, Marmol Radziner, Shaun Lockyer Architects, OWIU Design, Gezellig Interiors and Architecture Bureau, JAM Architects and more.
          </p>
          
          <p>
            Featured on the cover, The House at Lizard Island by JDA Co is a contemporary sanctuary worthy of its awe-inspiring location. A robust blend of concrete, rosewood and copper, the luxury stay celebrates natural beauty at every turn. The issue also includes insights from Jeremy Bull and Blainey North, profiles on Kerstin Thompson, Kelly Wearstler, David Flack and George Livissianis, as well as the latest in style, design and luxury news.
          </p>
          
          <p>
            The Commercial Project features projects and profiles across the retail, lifestyle, hospitality, workplace and wellness sectors. The Local Marketplace is a comprehensive product and finishes guide and highlights designers, artists, makers and distributors across Australia, New Zealand and North America.
          </p>
        </div>
        
        <button type="button" className={styles.orderButton}>ORDER NOW</button>
      </section>

      {/* Books Display - Moved here to match reference image */}
      <section className={styles.booksDisplay}>
        <div className={styles.bookContainer}>
          <div className={styles.book}>
            <div className={styles.bookHeader}>THE</div>
            <div className={styles.bookTitle}>LOCAL PROJECT</div>
            <img src="/images/publications/city.jpg" alt="City" className={styles.bookImage} />
            <div className={styles.bookSubtitle}>CITY</div>
          </div>
          <div className={styles.book}>
            <div className={styles.bookHeader}>THE</div>
            <div className={styles.bookTitle}>LOCAL PROJECT</div>
            <img src="/images/publications/coast.jpg" alt="Coast" className={styles.bookImage} />
            <div className={styles.bookSubtitle}>COAST</div>
          </div>
          <div className={styles.book}>
            <div className={styles.bookHeader}>THE</div>
            <div className={styles.bookTitle}>LOCAL PROJECT</div>
            <img src="/images/publications/forest.jpg" alt="Forest" className={styles.bookImage} />
            <div className={styles.bookSubtitle}>FOREST</div>
          </div>
        </div>
      </section>

      {/* Habitats Section - Added to match reference */}
      <section className={styles.habitats}>
        <div className={styles.habitatsHeader}>BOOK</div>
        <h2 className={styles.habitatsTitle}>Habitats: City, Coast and Forest</h2>
        <div className={styles.habitatsContent}>
          <p>
            Introducing Habitats: City, Coast and Forest, the latest addition to The Local Project's collection of timeless publications.
          </p>
          <p>
            This trio of hardcover books features 600 pages of extraordinary homes from across Australia, New Zealand, North America and Canada. The collection masterfully captures the work of industry-leading design practices such as Smart Design Studio, Wardle, James Stockwell, Olson Kundig, Fearon Hay, Aires Mateus, Rob Mills Architecture & Interiors, Faulkner Architects and Atelier L'Abri.
          </p>
          <p>
            Each volume is a testament to a deeply considered architectural expression that goes beyond mere shelter and includes 10 such examples that demonstrate a harmonious connection with its natural surroundings.
          </p>
        </div>
        <button type="button" className={styles.orderButton}>ORDER NOW</button>
      </section>

      {/* Published Section - Updated to match reference exactly */}
      <section className={styles.publishedSection}>
        <div className={styles.publishedContent}>
          <div className={styles.publishedHeader}>ANNUAL SUBSCRIPTION</div>
          <h2 className={styles.publishedTitle}>PUBLISHED THREE<br/>TIMES A YEAR</h2>
          <p className={styles.publishedText}>
            Get The Local Project delivered straight to you with an annual subscription.
            Published three times a year, The Local Project print periodical is a curated insight into the latest architecture
            and design in Australia, New Zealand and North America.
          </p>
          <button type="button" className={styles.subscribeButton}>SUBSCRIBE NOW</button>
        </div>
        <div className={styles.publishedImage}>
          <img src="/images/publications/stacked-magazines.jpg" alt="Stacked magazines" />
        </div>
      </section>

      {/* After the Published Section */}
      <section className={styles.allBooksSection}>
        <div className={styles.allBooksHeader}>ALL BOOKS</div>
        
        <div className={styles.allBooksGrid}>
          <a href="/publications/habitats" className={styles.bookItem}>
            <div className={styles.bookItemImage}>
              <img src="/images/publications/forest.jpg" alt="Habitats: City, Coast and Forest" />
            </div>
            <h3 className={styles.bookItemTitle}>Habitats: City, Coast and Forest</h3>
            <div className={styles.bookItemOrder}>ORDER NOW</div>
          </a>
          
          <a href="/publications/10-celebrating" className={styles.bookItem}>
            <div className={styles.bookItemImage}>
              <img src="/images/publications/10-book.jpg" alt="10—Celebrating 10 Issues of The Local Project" />
            </div>
            <h3 className={styles.bookItemTitle}>10—Celebrating 10 Issues of The Local Project</h3>
            <div className={styles.bookItemOrder}>ORDER NOW</div>
          </a>
        </div>
      </section>

      {/* Bundles Section - Placed directly after All Books */}
      <section className={styles.bundlesSection}>
        <div className={styles.bundlesHeader}>BUNDLES</div>
        
        <p className={styles.bundlesDescription}>
          Elevate your collection with The Local Project magazines and books, offering an unparalleled journey into the world of contemporary architecture and design from Australia, New Zealand and North America.
        </p>
        
        <div className={styles.bundlesGrid}>
          <a href="#" className={styles.bundleItem}>
            <div className={styles.bundleItemImage}>
              <img src="/images/publications/bundle-1-3.jpg" alt="Issues No. 1 - 3" />
            </div>
            <div className={styles.bundleItemPrice}>$85.00</div>
            <h3 className={styles.bundleItemTitle}>Issues No. 1 - 3</h3>
            <div className={styles.bundleItemSubtitle}>3 ISSUE BUNDLE</div>
          </a>
          
          <a href="#" className={styles.bundleItem}>
            <div className={styles.bundleItemImage}>
              <img src="/images/publications/bundle-4-6.jpg" alt="Issues No. 4 - 6" />
            </div>
            <div className={styles.bundleItemPrice}>$85.00</div>
            <h3 className={styles.bundleItemTitle}>Issues No. 4 - 6</h3>
            <div className={styles.bundleItemSubtitle}>3 ISSUE BUNDLE</div>
          </a>
          
          <a href="#" className={styles.bundleItem}>
            <div className={styles.bundleItemImage}>
              <img src="/images/publications/bundle-7-9.jpg" alt="Issues No. 7 - 9" />
            </div>
            <div className={styles.bundleItemPrice}>$85.00</div>
            <h3 className={styles.bundleItemTitle}>Issues No. 7 - 9</h3>
            <div className={styles.bundleItemSubtitle}>3 ISSUE BUNDLE</div>
          </a>
          
          <a href="#" className={styles.bundleItem}>
            <div className={styles.bundleItemImage}>
              <img src="/images/publications/bundle-10-12.jpg" alt="Issues No. 10 - 12" />
            </div>
            <div className={styles.bundleItemPrice}>$85.00</div>
            <h3 className={styles.bundleItemTitle}>Issues No. 10 - 12</h3>
            <div className={styles.bundleItemSubtitle}>3 ISSUE BUNDLE</div>
          </a>
          
          {/* Second row of bundles */}
          <a href="#" className={styles.bundleItem}>
            <div className={styles.bundleItemImage}>
              <img src="/images/publications/bundle-13-15.jpg" alt="Issues No. 13 - 15" />
            </div>
            <div className={styles.bundleItemPrice}>$85.00</div>
            <h3 className={styles.bundleItemTitle}>Issues No. 13 - 15</h3>
            <div className={styles.bundleItemSubtitle}>3 ISSUE BUNDLE</div>
          </a>
          
          <a href="#" className={styles.bundleItem}>
            <div className={styles.bundleItemImage}>
              <img src="/images/publications/bundle-16-18.jpg" alt="Issues No. 16 - 18" />
            </div>
            <div className={styles.bundleItemPrice}>$85.00</div>
            <h3 className={styles.bundleItemTitle}>Issues No. 16 - 18</h3>
            <div className={styles.bundleItemSubtitle}>3 ISSUE BUNDLE</div>
          </a>
          
          <a href="#" className={styles.bundleItem}>
            <div className={styles.bundleItemImage}>
              <img src="/images/publications/bundle-special-1.jpg" alt="Special Edition Bundle" />
            </div>
            <div className={styles.bundleItemPrice}>$95.00</div>
            <h3 className={styles.bundleItemTitle}>Special Edition Bundle</h3>
            <div className={styles.bundleItemSubtitle}>3 ISSUE BUNDLE</div>
          </a>
          
          <a href="#" className={styles.bundleItem}>
            <div className={styles.bundleItemImage}>
              <img src="/images/publications/bundle-special-2.jpg" alt="Collector's Edition Bundle" />
            </div>
            <div className={styles.bundleItemPrice}>$110.00</div>
            <h3 className={styles.bundleItemTitle}>Collector's Edition Bundle</h3>
            <div className={styles.bundleItemSubtitle}>3 ISSUE BUNDLE</div>
          </a>
        </div>
      </section>

      {/* All Issues Section - Added after Bundles */}
      <section className={styles.allIssuesSection}>
        <div className={styles.allIssuesHeader}>ALL ISSUES</div>
        
        <div className={styles.allIssuesGrid}>
          <a href="#" className={styles.issueItem}>
            <div className={styles.issueItemImage}>
              <img src="/images/publications/issue-17-trio.jpg" alt="Issue No. 17 Trio" />
            </div>
            <h3 className={styles.issueItemTitle}>Issue No. 17 Trio</h3>
            <div className={styles.issueItemOrder}>ORDER NOW</div>
          </a>
          
          <a href="#" className={styles.issueItem}>
            <div className={styles.issueItemImage}>
              <img src="/images/publications/issue-16-trio.jpg" alt="Issue No. 16 Trio" />
            </div>
            <h3 className={styles.issueItemTitle}>Issue No. 16 Trio</h3>
            <div className={styles.issueItemOrder}>ORDER NOW</div>
          </a>
          
          <a href="#" className={styles.issueItem}>
            <div className={styles.issueItemImage}>
              <img src="/images/publications/issue-15-trio.jpg" alt="Issue No. 15 Trio" />
            </div>
            <h3 className={styles.issueItemTitle}>Issue No. 15 Trio</h3>
            <div className={styles.issueItemOrder}>ORDER NOW</div>
          </a>
          
          <a href="#" className={styles.issueItem}>
            <div className={styles.issueItemImage}>
              <img src="/images/publications/issue-14-trio.jpg" alt="Issue No. 14 Trio" />
            </div>
            <h3 className={styles.issueItemTitle}>Issue No. 14 Trio</h3>
            <div className={styles.issueItemOrder}>ORDER NOW</div>
          </a>
        </div>
      </section>
    </div>
  );
} 