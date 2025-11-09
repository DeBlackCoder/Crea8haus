'use client';
import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import './ArticleCard.css';

const ArticleCard = ({ article, isWebArticle, onReadMore }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="article-card"
      style={{
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        borderColor: isHovered ? '#444' : '#222'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="image-container">
        <img 
          src={article.image} 
          alt={article.title}
          className="article-image"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
      </div>

      <div className="article-content">
        {isWebArticle && (
          <div className="platform-badge">
            <ExternalLink size={16} />
            <span>{article.platform}</span>
          </div>
        )}

        <h3 className="article-title">{article.title}</h3>
        <p className="article-description">{article.description}</p>
        
        <div className="author-section">
          <img src={article.author.avatar} alt={article.author.name} className="avatar" />
          <div className="author-info">
            <div className="author-name">{article.author.name}</div>
            <div className="meta">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        {isWebArticle ? (
          <a 
            href={article.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`read-more-btn ${isHovered ? 'hovered' : ''}`}
          >
            Read More <ArrowRight size={16} />
          </a>
        ) : (
          <button 
            onClick={() => onReadMore(article)}
            className={`read-more-btn ${isHovered ? 'hovered' : ''}`}
          >
            Read More <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
