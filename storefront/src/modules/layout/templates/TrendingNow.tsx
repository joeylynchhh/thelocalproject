import React from 'react';
import Link from 'next/link';
import styles from './TrendingNow.module.css';

// Define types for trending articles
export interface TrendingArticle {
  id: string | number;
  slug: string;
  title: string;
  category: string;
  hasVideo?: boolean;
  image?: string; // URL to actual image if available
}

interface TrendingNowProps {
  articles: TrendingArticle[];
  heading?: string;
}

/**
 * TrendingNow component displays a grid of trending articles
 * Based on the design from the sustainability page
 */
const TrendingNow: React.FC<TrendingNowProps> = ({ 
  articles, 
  heading = "TRENDING NOW" 
}) => {
  return (
    <div className={styles.trendingNowSection}>
      <h3 className={styles.trendingNowHeading}>{heading}</h3>
      
      <div className={styles.trendingArticlesGrid}>
        {articles.map((article) => (
          <div key={article.id} className={styles.trendingArticle}>
            <Link href={`/articles/${article.slug}`}>
              <div className={styles.trendingImage}>
                {article.image ? (
                  <img src={article.image} alt={article.title} className={styles.articleImg} />
                ) : (
                  <div className={styles.trendingImagePlaceholder} />
                )}
                {article.hasVideo && (
                  <div className={styles.playButton}>
                    <span className={styles.playArrow}>▶</span>
                  </div>
                )}
              </div>
              <div className={styles.trendingCategory}>{article.category}</div>
              <h4 className={styles.trendingTitle}>{article.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNow; 