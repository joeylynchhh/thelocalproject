"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  
  // Define submenu items for each main navigation category
  const subMenus: Record<string, { label: string; href: string }[]> = {
    'publications': [
      { label: 'VIEW ALL', href: '/publications' },
      { label: 'MAGAZINE', href: '/publications/magazine' },
      { label: 'BOOKS', href: '/publications/books' },
      { label: 'SUBSCRIBE', href: '/publications/subscribe' },
      { label: 'ABOUT', href: '/publications/about' },
    ],
    'articles': [
      { label: 'VIEW ALL', href: '/articles' },
      { label: 'RESIDENTIAL', href: '/articles/residential' },
      { label: 'COMMERCIAL', href: '/articles/commercial' },
      { label: 'SUSTAINABILITY', href: '/articles/sustainability' },
      { label: 'PRINT FEATURES', href: '/articles/print-features' },
    ],
    'videos': [
      { label: 'VIEW ALL', href: '/videos' },
      { label: 'RESIDENTIAL', href: '/videos/residential' },
      { label: 'COMMERCIAL', href: '/videos/commercial' },
      { label: 'SUSTAINABILITY', href: '/videos/sustainability' },
    ],
    'marketplace': [
      { label: 'VIEW ALL', href: '/marketplace' },
      { label: 'PRODUCT DIRECTORY', href: '/marketplace/product-directory' },
      { label: 'BY ROOM', href: '/marketplace/by-room' },
      { label: 'BY BRAND', href: '/marketplace/by-brand' },
      { label: 'FEATURED', href: '/marketplace/featured' },
    ],
    'profiles': [
      { label: 'VIEW ALL', href: '/profiles' },
      { label: 'ARCHITECTURE', href: '/profiles/architecture' },
      { label: 'INTERIOR DESIGN', href: '/profiles/interior-design' },
      { label: 'PRODUCT DESIGN', href: '/profiles/product-design' },
      { label: 'LANDSCAPE ARCHITECTURE', href: '/profiles/landscape-architecture' },
      { label: 'PRODUCT DISTRIBUTION', href: '/profiles/product-distribution' },
      { label: 'ART & SCULPTURES', href: '/profiles/art-and-sculptures' },
    ],
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className={styles.announcementBar}>
        <p>Issue No. 17 now available to order</p>
      </div>
      
      <header className={styles.header}>
        <div className={styles.headerContent}>
          {/* Left Section */}
          <div className={styles.leftSection}>
            <Link href="/publications/subscribe" className={styles.subscribeButton}>
              SUBSCRIBE
            </Link>
            <button type="button" className={styles.searchButton} aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
          
          {/* Center Logo */}
          <div className={styles.centerLogo}>
            <Link href="/" className={styles.logo}>
              <div>THE</div>
              <h1>LOCAL PROJECT</h1>
            </Link>
          </div>
          
          {/* Right Section */}
          <div className={styles.rightSection}>
            <div className={styles.socialIcons}>
              <Link href="https://youtube.com" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="https://tiktok.com" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm10-9v5a4 4 0 0 1-4 4h-1v-2a6 6 0 0 0-6-6H7"></path>
                  <line x1="13" y1="5" x2="13" y2="19"></line>
                </svg>
              </Link>
              <Link href="https://facebook.com" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="https://pinterest.com" aria-label="Pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 11.5c0 .7.4 1.2 1 1.5v1m6-2.5a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0zm1 7L13 17l-2 3"></path>
                </svg>
              </Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
            <Link href="/cart" className={styles.cartButton}>
              CART
            </Link>
          </div>
        </div>
        
        {/* Main Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {Object.entries(subMenus).map(([key, items]) => (
              <li 
                key={key}
                className={styles.navItem}
                onMouseEnter={() => setActiveMenu(key)}
                onMouseLeave={(e) => {
                  // Check if we're not moving to the submenu
                  const relatedTarget = e.relatedTarget as HTMLElement;
                  if (!relatedTarget?.closest(`.${styles.navItem}`)) {
                    setActiveMenu(null);
                  }
                }}
              >
                <Link href={`/${key}`} className={styles.navLink}>
                  {key === 'publications' && 'PRINT PUBLICATION'}
                  {key === 'articles' && 'ARTICLES'}
                  {key === 'videos' && 'VIDEOS'}
                  {key === 'marketplace' && 'THE LOCAL MARKETPLACE'}
                  {key === 'profiles' && 'PROFILES'}
                </Link>
                {activeMenu === key && (
                  <div 
                    className={styles.submenu}
                  >
                    <ul className={styles.submenuList}>
                      {items.map((item) => (
                        <li key={`${key}-${item.label}`}>
                          <Link href={item.href} className={styles.submenuLink}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
            <li>
              <Link href="/advertise" className={styles.navLink}>ADVERTISE</Link>
            </li>
            <li>
              <Link href="/about" className={styles.navLink}>ABOUT</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
} 