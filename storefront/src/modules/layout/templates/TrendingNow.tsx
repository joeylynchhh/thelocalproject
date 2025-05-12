import React from 'react';

interface TrendingArticle {
  image: string;
  imageAlt: string;
  type: string;
  title: string;
  hasVideo?: boolean;
}

interface TrendingNowProps {
  articles: TrendingArticle[];
}

const TrendingNow: React.FC<TrendingNowProps> = ({ articles }) => {
  return (
    <div style={styles.trendingSection}>
      <h2 style={styles.trendingTitle}>TRENDING NOW</h2>
      
      <div style={styles.trendingGrid}>
        {articles.map((article, index) => (
          <div key={`trending-article-${article.title}-${index}`} style={styles.trendingArticle}>
            <div style={styles.trendingImageContainer}>
              {article.hasVideo && (
                <div style={styles.playButton}>
                  <span style={styles.playIcon}>▶</span>
                </div>
              )}
              <img 
                src={article.image} 
                alt={article.imageAlt} 
                style={styles.trendingImage} 
              />
            </div>
            <div style={styles.trendingMeta}>
              <span style={styles.trendingType}>{article.type}</span>
              <h4 style={styles.articleTitle}>{article.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline styles object
const styles = {
  trendingSection: {
    margin: '60px 0',
  },
  trendingTitle: {
    textAlign: 'center' as const,
    fontWeight: 'normal',
    letterSpacing: '1px',
    marginBottom: '40px',
    fontSize: '1.2rem',
    textTransform: 'uppercase' as const,
  },
  trendingGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '30px',
    margin: '0 20px',
  },
  trendingArticle: {
    display: 'flex',
    flexDirection: 'column' as const,
  },
  trendingImageContainer: {
    position: 'relative' as const,
    marginBottom: '15px',
    overflow: 'hidden',
    aspectRatio: '3/4',
  },
  trendingImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    transition: 'transform 0.3s ease',
  },
  playButton: {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60px',
    height: '60px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 2,
  },
  playIcon: {
    fontSize: '20px',
    color: '#000',
  },
  trendingMeta: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
  },
  trendingType: {
    fontSize: '0.7rem',
    color: '#666',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  },
  articleTitle: {
    fontSize: '0.9rem',
    fontWeight: 'normal',
    margin: 0,
    lineHeight: 1.4,
  },
};

// Add media queries for responsive grid
if (typeof window !== 'undefined') {
  if (window.matchMedia('(min-width: 640px)').matches) {
    styles.trendingGrid.gridTemplateColumns = 'repeat(2, 1fr)';
  }
  if (window.matchMedia('(min-width: 1024px)').matches) {
    styles.trendingGrid.gridTemplateColumns = 'repeat(5, 1fr)';
    styles.trendingGrid.margin = '0';
  }
}

export default TrendingNow; 