"use client"; // important so framer motion works in App Router

import { motion } from "framer-motion";
import Hero from '@/components/Hero';
import SubAbout from '@/components/SubAbout';
import React from 'react';
import ProfileArticleCard from '@/components/ProfileArticleCard';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Page = () => {
  return (
    <>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        <Hero />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.2 }}
      >
        <SubAbout />
      </motion.div>

      <motion.section
        className="article-section"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.4 }}
      >
        <h2>Featured Insights & Stories</h2>
        
        <motion.div 
          className="article-grid"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.6 }}
        >
          <ProfileArticleCard />
          <ProfileArticleCard />
          <ProfileArticleCard />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.8 }}
        >
          <Link href={'/article'} className='articlelink'>
            View all Articles
          </Link>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Page;
