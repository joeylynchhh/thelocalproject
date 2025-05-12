import React from 'react';
import styles from './subscribe.module.css';
import Link from 'next/link';

export default function SubscribePage() {
  return (
    <div className={styles.container}>
      <div className={styles.publicationLabel}>PRINT PUBLICATION</div>
      
      <header className={styles.header}>
        <h1>SUBSCRIPTIONS</h1>
      </header>

      <section className={styles.description}>
        <p>
          Get The Local Project delivered straight to you with an annual subscription. Published three times a year, the Local Project print periodical is a curated insight into the latest architecture and design in Australia, New Zealand and North America.
        </p>
      </section>

      <div className={styles.divider}></div>

      {/* 12-Month Subscription */}
      <section className={styles.subscriptionSection}>
        <div className={styles.subscriptionContent}>
          <h2 className={styles.subscriptionTitle}>12-Month Subscription</h2>
          <div className={styles.subscriptionPrice}>$127.50 + SHIPPING</div>
          
          <div className={styles.subscriptionDescription}>
            <p>Three issues of The Local Project Publication delivered to your home or studio.</p>
          </div>
          
          <button className={styles.subscribeButton} type="button">SUBSCRIBE NOW</button>
        </div>
        
        <div className={styles.subscriptionImage}>
          {/* Replace with actual image when available */}
          <div className={styles.imagePlaceholder}>Stacked magazines</div>
        </div>
      </section>
      
      <div className={styles.divider}></div>
      
      {/* Gift Subscription */}
      <section className={styles.subscriptionSection}>
        <div className={styles.subscriptionContent}>
          <h2 className={styles.subscriptionTitle}>Gift Subscription</h2>
          <div className={styles.subscriptionPrice}>$127.50 + SHIPPING</div>
          
          <div className={styles.subscriptionDescription}>
            <p>Looking to gift The Local Project Publication? Our Gift Subscription includes three issues in a 12-month subscription delivered straight to friends, family or colleagues.</p>
          </div>
          
          <button className={styles.subscribeButton} type="button">GIFT NOW</button>
        </div>
        
        <div className={styles.subscriptionImage}>
          {/* Replace with actual image when available */}
          <div className={styles.imagePlaceholder}>Gift subscription</div>
        </div>
      </section>
      
      <div className={styles.divider}></div>

       {/* Subscription Help Section */}
       <section className={styles.helpSection}>
        <h3 className={styles.helpHeader}>SUBSCRIPTION HELP</h3>
        
        <div className={styles.helpGrid}>
          <div className={styles.helpItem}>
            <div className={styles.helpLabel}>CURRENT SUBSCRIBERS</div>
            <h4 className={styles.helpTitle}>Manage Subscription</h4>
            <button className={styles.helpButton} type="button">MANAGE</button>
          </div>
          
          <div className={styles.helpItem}>
            <div className={styles.helpLabel}>MISSING AN ISSUE?</div>
            <h4 className={styles.helpTitle}>Order a Back Issue</h4>
            <button className={styles.helpButton} type="button">VIEW ALL</button>
          </div>
          
          <div className={styles.helpItem}>
            <div className={styles.helpLabel}>SUBSCRIPTION HELP</div>
            <h4 className={styles.helpTitle}>Visit FAQs</h4>
            <button className={styles.helpButton} type="button">VISIT</button>
          </div>
        </div>
      </section>

      <div className={styles.divider}></div>
      
      {/* Back Issues Section */}
      <section className={styles.backIssuesSection}>
        <h3 className={styles.backIssuesHeader}>BACK ISSUES</h3>
        
        <div className={styles.issuesGrid}>
          {/* Row 1 */}
          <div className={styles.issueItem}>
            <div className={styles.issueImage}>
              <img src="/images/issues/issue-16.jpg" alt="Issue No. 16 Trio" />
            </div>
            <h4 className={styles.issueTitle}>Issue No. 16 Trio</h4>
            <Link href="/order/issue-16" className={styles.orderNowButton}>ORDER NOW</Link>
          </div>
          
          <div className={styles.issueItem}>
            <div className={styles.issueImage}>
              <img src="/images/issues/issue-15.jpg" alt="Issue No. 15 Trio" />
            </div>
            <h4 className={styles.issueTitle}>Issue No. 15 Trio</h4>
            <Link href="/order/issue-15" className={styles.orderNowButton}>ORDER NOW</Link>
          </div>
          
          <div className={styles.issueItem}>
            <div className={styles.issueImage}>
              <img src="/images/issues/issue-14.jpg" alt="Issue No. 14 Trio" />
            </div>
            <h4 className={styles.issueTitle}>Issue No. 14 Trio</h4>
            <Link href="/order/issue-14" className={styles.orderNowButton}>ORDER NOW</Link>
          </div>
          
          <div className={styles.issueItem}>
            <div className={styles.issueImage}>
              <img src="/images/issues/issue-13.jpg" alt="Issue No. 13 Trio" />
            </div>
            <h4 className={styles.issueTitle}>Issue No. 13 Trio</h4>
            <Link href="/order/issue-13" className={styles.orderNowButton}>ORDER NOW</Link>
          </div>

          {/* Row 2 */}
          <div className={styles.issueItem}>
            <div className={styles.issueImage}>
              <img src="/images/issues/issue-12.jpg" alt="Issue No. 12 Trio" />
            </div>
            <h4 className={styles.issueTitle}>Issue No. 12 Trio</h4>
            <Link href="/order/issue-12" className={styles.orderNowButton}>ORDER NOW</Link>
          </div>
          
          <div className={styles.issueItem}>
            <div className={styles.issueImage}>
              <img src="/images/issues/issue-11.jpg" alt="Issue No. 11 Trio" />
            </div>
            <h4 className={styles.issueTitle}>Issue No. 11 Trio</h4>
            <Link href="/order/issue-11" className={styles.orderNowButton}>ORDER NOW</Link>
          </div>
          
          <div className={styles.issueItem}>
            <div className={styles.issueImage}>
              <img src="/images/issues/issue-10.jpg" alt="Issue No. 10 Trio" />
            </div>
            <h4 className={styles.issueTitle}>Issue No. 10 Trio</h4>
            <Link href="/order/issue-10" className={styles.orderNowButton}>ORDER NOW</Link>
          </div>
          
          <div className={styles.issueItem}>
            <div className={styles.issueImage}>
              <img src="/images/issues/issue-9.jpg" alt="Issue No. 9 Trio" />
            </div>
            <h4 className={styles.issueTitle}>Issue No. 9 Trio</h4>
            <Link href="/order/issue-9" className={styles.orderNowButton}>ORDER NOW</Link>
          </div>

          {/* Row 3 */}
          <div className={styles.issueItem}>
            <div className={styles.issueImage}>
              <img src="/images/issues/issue-8.jpg" alt="Issue No. 8 Trio" />
            </div>
            <h4 className={styles.issueTitle}>Issue No. 8 Trio</h4>
            <Link href="/order/issue-8" className={styles.orderNowButton}>ORDER NOW</Link>
          </div>
          
          <div className={styles.issueItem}>
            <div className={styles.issueImage}>
              <img src="/images/issues/issue-7.jpg" alt="Issue No. 7 Trio" />
            </div>
            <h4 className={styles.issueTitle}>Issue No. 7 Trio</h4>
            <Link href="/order/issue-7" className={styles.orderNowButton}>ORDER NOW</Link>
          </div>
          
          <div className={styles.issueItem}>
            <div className={styles.issueImage}>
              <img src="/images/issues/issue-6.jpg" alt="Issue No. 6 Trio" />
            </div>
            <h4 className={styles.issueTitle}>Issue No. 6 Trio</h4>
            <Link href="/order/issue-6" className={styles.orderNowButton}>ORDER NOW</Link>
          </div>
          
          <div className={styles.issueItem}>
            <div className={styles.issueImage}>
              <img src="/images/issues/issue-5.jpg" alt="Issue No. 5 Trio" />
            </div>
            <h4 className={styles.issueTitle}>Issue No. 5 Trio</h4>
            <Link href="/order/issue-5" className={styles.orderNowButton}>ORDER NOW</Link>
          </div>

          {/* Row 4 */}
          <div className={styles.issueItem}>
            <div className={styles.issueImage}>
              <img src="/images/issues/issue-4.jpg" alt="Issue No. 4 Trio" />
            </div>
            <h4 className={styles.issueTitle}>Issue No. 4 Trio</h4>
            <Link href="/order/issue-4" className={styles.orderNowButton}>ORDER NOW</Link>
          </div>
          
          <div className={styles.issueItem}>
            <div className={styles.issueImage}>
              <img src="/images/issues/issue-3.jpg" alt="Issue No. 3 Trio" />
            </div>
            <h4 className={styles.issueTitle}>Issue No. 3 Trio</h4>
            <Link href="/order/issue-3" className={styles.orderNowButton}>ORDER NOW</Link>
          </div>
          
          <div className={styles.issueItem}>
            <div className={styles.issueImage}>
              <img src="/images/issues/issue-2.jpg" alt="Issue No. 2 Trio" />
            </div>
            <h4 className={styles.issueTitle}>Issue No. 2 Trio</h4>
            <Link href="/order/issue-2" className={styles.orderNowButton}>ORDER NOW</Link>
          </div>
          
          <div className={styles.issueItem}>
            <div className={styles.issueImage}>
              <img src="/images/issues/issue-1.jpg" alt="Issue No. 1 Trio" />
            </div>
            <h4 className={styles.issueTitle}>Issue No. 1 Trio</h4>
            <Link href="/order/issue-1" className={styles.orderNowButton}>ORDER NOW</Link>
          </div>
        </div>

        <div className={styles.viewMoreContainer}>
          <button className={styles.viewMoreButton} type="button">VIEW MORE</button>
        </div>
      </section>
      
      <div className={styles.divider}></div>
      
      
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