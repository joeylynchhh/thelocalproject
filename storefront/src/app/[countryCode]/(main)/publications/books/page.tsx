import React from 'react';
import styles from './books.module.css';
import Link from 'next/link';

export default function BooksPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>BOOKS</h1>
      </header>

      <section className={styles.description}>
        <p>
          Published intermittently, The Local Project hardcover books showcase the latest architecture and design from Australia, New Zealand, North America and Canada.
        </p>
      </section>

      {/* Featured Book Section */}
      <section className={styles.featuredBook}>
        <div className={styles.bookLabel}>BOOK</div>
        
        <div className={styles.bookContent}>
          <div className={styles.bookInfo}>
            <h2 className={styles.bookTitle}>Habitats: City, Coast and Forest</h2>
            
            <div className={styles.bookDescription}>
              <p>
                Embark on a journey through the heartlands of design with Habitats: City, Coast and Forest. This trio of hardcover books features 600+ pages of extraordinary homes from across Australia, New Zealand, North America and Canada. From sun-drenched coastlines to mist-shrouded forests, explore how each locale whispers its own narrative into the structures that rise from its soil. The latest addition to The Local Project's collection of timeless publications is a testament to a deeply considered form of architectural expression that goes beyond mere shelter, creating a harmonious extension of the habitat itself.
              </p>
            </div>
            
            <button className={styles.orderButton} type="button">ORDER NOW</button>
          </div>
          
          <div className={styles.bookImage}>
            {/* Replace with actual image when available */}
            <div className={styles.imagePlaceholder}>Habitats book cover</div>
          </div>
        </div>
      </section>
      
      {/* 10 Celebrating Section */}
      <section className={styles.celebratingSection}>
        <div className={styles.celebratingLabel}>10—CELEBRATING 10 ISSUES OF THE LOCAL PROJECT</div>
        
        <div className={styles.celebratingContent}>
          <div className={styles.celebratingInfo}>
            <h2 className={styles.celebratingTitle}>10—Celebrating 10 Issues of The Local Project</h2>
            
            <div className={styles.celebratingDescription}>
              <p>
                Introducing 10, a hardcover book featuring the best homes from the first 10 issues of The Local Project magazine. Including projects by John Wardle Architects, Peter Stutchbury Architecture, Durbach Block Jaggers, Chenchow
              </p>
            </div>
            
            <button className={styles.orderButton} type="button">ORDER NOW</button>
          </div>
          
          <div className={styles.celebratingImage}>
            {/* Replace with actual image when available */}
            <div className={styles.imagePlaceholder}>10 book cover</div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className={styles.partnersSection}>
        <h3 className={styles.partnersHeader}>PRINCIPAL PARTNERS</h3>
        
        <div className={styles.principalPartnersGrid}>
          <Link href="/partners/artedomus" className={styles.partnerLogo}>
            <img src="/images/partners/artedomus.svg" alt="Artedomus" />
          </Link>
          <Link href="/partners/fisher-paykel" className={styles.partnerLogo}>
            <img src="/images/partners/fisher-paykel.svg" alt="Fisher & Paykel" />
          </Link>
        </div>
        
        <h3 className={styles.partnersHeader}>SUPPORTING PARTNERS</h3>
        
        <div className={styles.supportingPartnersGrid}>
          <Link href="/partners/king" className={styles.partnerLogo}>
            <img src="/images/partners/king.svg" alt="King" />
          </Link>
          <Link href="/partners/laminex" className={styles.partnerLogo}>
            <img src="/images/partners/laminex.svg" alt="Laminex" />
          </Link>
          <Link href="/partners/blum" className={styles.partnerLogo}>
            <img src="/images/partners/blum.svg" alt="Blum" />
          </Link>
          <Link href="/partners/elton-group" className={styles.partnerLogo}>
            <img src="/images/partners/elton-group-1.svg" alt="Elton Group" />
          </Link>
          <Link href="/partners/elton-group" className={styles.partnerLogo}>
            <img src="/images/partners/elton-group-2.svg" alt="Elton Group" />
          </Link>
          <Link href="/partners/brickworks" className={styles.partnerLogo}>
            <img src="/images/partners/brickworks.svg" alt="Brickworks" />
          </Link>
        </div>
      </section>
    </div>
  );
} 