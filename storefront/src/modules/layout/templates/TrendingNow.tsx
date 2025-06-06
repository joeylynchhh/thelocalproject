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
  image?: string;
}

interface TrendingNowProps {
  articles: TrendingArticle[];
  heading?: string;
}

/**
 * TrendingNow component displays a grid of trending articles
 * Matches the design from the sustainability page exactly
 */
const TrendingNow: React.FC<TrendingNowProps> = ({ 
  articles, 
  heading = "TRENDING NOW" 
}) => {
  return (
    <section className={styles.trendingNowSection}>
      <h3 className={styles.trendingNowHeading}>{heading}</h3>
      
      <div className={styles.trendingArticlesGrid}>
        {articles.map((article) => (
          <article key={article.id} className={styles.trendingArticle}>
            <Link href={`/articles/${article.slug}`} className={styles.articleLink}>
              <div className={styles.trendingImage}>
                {article.image ? (
                  <img 
                    src={article.image} 
                    alt="" 
                    className={styles.articleImg}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.trendingImagePlaceholder} />
                )}
                {article.hasVideo && (
                  <div className={styles.playButton}>
                    <span className={styles.playArrow}>▶</span>
                  </div>
                )}
              </div>
              <div className={styles.articleContent}>
                <div className={styles.trendingCategory}>{article.category}</div>
                <h4 className={styles.trendingTitle}>{article.title}</h4>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TrendingNow; 