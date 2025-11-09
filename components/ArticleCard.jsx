// import React from "react";
// import "./ArticleSection.css";
// import Image from "next/image";

// export default function ArticleCard({ article, isExternal, onClick }) {
//   return (
//     <div className="article-card">
//       <img src={article.image} alt={article.title} className="article-image" />
//       <div className="article-content">
//         {isExternal && <div className="platform-badge">{article.platform}</div>}
//         <h3 className="article-title">{article.title}</h3>
//         <p className="article-description">{article.summary}</p>
//         <div className="article-meta">
//           <span>{article.author}</span>
//           <span>•</span>
//           <span>{article.date}</span>
//           <span>•</span>
//           <span>{article.readTime}</span>
//         </div>
//         {isExternal ? (
//           <a
//             href={article.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn-read-more"
//           >
//             Read More
//           </a>
//         ) : (
//           <button className="btn-read-more" onClick={onClick}>
//             Read More
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
