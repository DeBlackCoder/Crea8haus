'use client';
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import './ArticleFullView.css';

const ArticleFullView = ({ article, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyCode = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fullview-overlay">
      <div className="fullview-container">
        <button onClick={onClose} className="back-btn">
          <ArrowLeft size={20} />
          Back to Articles
        </button>

        <h1 className="article-title-full">{article.title}</h1>

        <div className="author-section-full">
          <img src={article.author.avatar} alt={article.author.name} className="avatar-full" />
          <div>
            <div className="author-name-full">{article.author.name}</div>
            <div className="meta-full">
              <span>{article.date}</span> • <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        <img src={article.image} alt={article.title} className="main-image" />

        {article.content.sections.map((section, i) => (
          <div key={i} className="article-section">
            <h2 className="section-heading">{section.heading}</h2>
            {section.type === 'text' ? (
              <p className="section-text">{section.text}</p>
            ) : (
              <div className="code-block">
                <div className="code-header">
                  <span className="language">{section.language}</span>
                  <button onClick={() => copyCode(section.code, i)} className="copy-btn">
                    {copiedIndex === i ? 'Copied!' : 'Copy Code'}
                  </button>
                </div>
                <pre>{section.code}</pre>
                <p className="code-explanation">{section.explanation}</p>
              </div>
            )}
          </div>
        ))}

        <div className="footer">
          <button onClick={onClose} className="back-btn">
            <ArrowLeft size={20} /> Back to Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleFullView;
