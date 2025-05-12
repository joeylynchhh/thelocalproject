'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type ArticleCardProps = {
  id: number;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  slug: string;
};

const ArticleCard = ({ id, title, category, image, excerpt, slug }: ArticleCardProps) => {
  return (
    <Link href={`/articles/${slug}`} className="article-card">
      <div className="article-image">
        <div className="image-placeholder" style={{backgroundColor: '#f0f0f0', height: '240px'}} />
        {/* In a real implementation, use:
        <Image 
          src={image} 
          alt={title} 
          width={400} 
          height={240} 
          layout="responsive" 
        /> */}
      </div>
      <div className="article-content">
        <div className="article-category">{category}</div>
        <h2 className="article-title">{title}</h2>
        <p className="article-excerpt">{excerpt}</p>
      </div>

      <style jsx>{`
        .article-card {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          transition: opacity 0.2s ease;
        }
        
        .article-card:hover {
          opacity: 0.9;
        }
        
        .article-image {
          margin-bottom: 1rem;
        }
        
        .article-category {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
          color: #666;
        }
        
        .article-title {
          font-size: 1.2rem;
          font-weight: 500;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }
        
        .article-excerpt {
          font-size: 0.9rem;
          line-height: 1.5;
          color: #666;
        }
      `}</style>
    </Link>
  );
};

export default ArticleCard; 