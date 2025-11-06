import "./profilecard.css";

export default function ProfileArticleCard() {
  return (
    <div className="profile-card">
      <div className="profile-top">
        <img src="/images/background.jpg" alt="Author" className="profile-img" />
        <div className="profile-info">
          <h3 className="name">Evelyn Hart</h3>
          <p className="role">Brand & UX Strategist</p>
        </div>
      </div>

      <p className="article-preview">
        Design is not just visual. It's experience, perception, and story.
        At Crea8haus, we craft identities that speak with clarity and meaning.
      </p>

      <a href="/articles/evelyn-ux-story" className="read-more">
        Read Article →
      </a>
    </div>
  );
}
