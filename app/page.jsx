import Hero from '@/components/Hero';
import SubAbout from '@/components/SubAbout';
import React from 'react';
import ProfileArticleCard from '@/components/ProfileArticleCard';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <Hero />
      <SubAbout />
      <section className="article-section">
        <h2>Featured Insights & Stories</h2>
        <div className="article-grid">
          <ProfileArticleCard />
          <ProfileArticleCard />
          <ProfileArticleCard />
        </div>

        <Link href={'/article'} className='articlelink'>
          View all Articles
        </Link>
      </section>
    </>
  );
};

export default Page;
