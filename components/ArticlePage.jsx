'use client';
import React, { useState } from 'react';
import ArticleCard from './ArticleCard';
import ArticleFullView from './ArticleFullView';
import './ArticlesPage.css';
import ArticleData from './ArticleData'; // move your ArticleData object here

const ArticlesPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="articles-page">
      {!selectedArticle ? (
        <div className="articles-container">
          <div className="article-section">
            <h2 className="section-title">Web Articles</h2>
            <div className="articles-grid">
              {ArticleData.webArticles.map(article => (
                <ArticleCard 
                  key={article.id}
                  article={article}
                  isWebArticle={true}
                />
              ))}
            </div>
          </div>

          <div className="article-section">
            <h2 className="section-title">On-Site Articles</h2>
            <div className="articles-grid">
              {ArticleData.onsiteArticles.map(article => (
                <ArticleCard 
                  key={article.id}
                  article={article}
                  isWebArticle={false}
                  onReadMore={setSelectedArticle}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <ArticleFullView 
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </div>
  );
};

export default ArticlesPage;
