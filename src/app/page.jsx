'use client';

import { CTAButton, CustomPrimaryButton } from '@/components/customButtons';
import { ProductCard, ReviewCard, StatsCard } from '@/components/customCards';
import { ProductList } from '@/components/productList';
import { Avatar } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const sampleProducts = [
    {
      image: '/images/skincare2.jpg',
      title: 'Glow Hydration Serum',
      feature:
        'Locks in moisture and revives your skin’s natural radiance with hyaluronic acid.',
    },
    {
      image: '/images/skincare1.jpg',
      title: 'Youth Restore Cream',
      feature:
        'Reduces fine lines and wrinkles, leaving your skin feeling firmer and rejuvenated.',
    },
    {
      image: '/images/skincare3.png',
      title: 'Clear Skin Cleanser',
      feature:
        'Gently purifies and balances your skin while preventing breakouts.',
    },
    {
      image: '/images/skincare4.jpg',
      title: 'Radiance Boost Exfoliator',
      feature:
        'Uncover brighter, smoother skin with our gentle AHA & BHA exfoliating formula.',
    },
  ];

  const sampleStats = [
    {
      title: 'Brighter Skin',
      percentage: 87,
      description:
        'of Beautifies noticed visibly brighter skin after just 1 week of use.',
    },
    {
      title: 'Reduced Dryness',
      percentage: 92,
      description:
        'of Beautifies reported significant hydration and reduced dryness within 10 days.',
    },
    {
      title: 'Improved Texture',
      percentage: 85,
      description:
        'of Beautifies saw improvements in skin texture and reduced fine lines within 4 weeks.',
    },
  ];

  return (
    <React.Fragment>
      <div className="w-full min-h-screen flex flex-col">
        <header className="w-full min-h-screen 2xl:max-h-[110vh] flex flex-col lg:flex-row xl:justify-center px-5 gap-5 xl:px-20 xl:gap-10 pt-28 pb-10">
          <div className="flex flex-col w-full xl:w-2/5 gap-5">
            <div className="relative overflow-hidden rounded-xl">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src="/images/model2.png"
                className="rounded-xl w-full"
                alt="Model showcasing skincare"
              />
              <div className="absolute top-0 left-0 w-full 2xl:w-1/2 h-full flex flex-col text-white p-4 rounded-xl">
                <div className="mb-auto">
                  <p className="text-xl font-semibold">Azizah Sarah</p>
                  <p className="text-sm">Beautify user since 2020</p>
                </div>
                <p className="text-lg font-medium">
                  "Beautify has helped me effortlessly achieve a rosy, safe, and
                  radiant complexion at all times"
                </p>
              </div>
            </div>
            <div className="hidden xl:flex items-center gap-5">
              <div className="w-1/2 h-48 overflow-clip rounded-xl">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src="/images/skincare5.jpg"
                  alt="skincare"
                  className="rounded-xl"
                />
              </div>
              <div className="w-1/2 h-48 overflow-clip rounded-xl">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src="/images/skincare6.jpg"
                  alt="skincare"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full xl:w-3/5 gap-10">
            <div className="flex gap-5 h-2/5">
              <div className="relative w-1/2 max-h-80 overflow-hidden rounded-xl">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src="/images/skincare1.jpg"
                  className="rounded-xl w-full h-full"
                  alt="skincare model"
                />
                <div className="absolute top-0 left-0 w-full 2xl:w-1/2 h-full flex flex-col text-white p-4 rounded-xl">
                  <div className="mb-auto">
                    <p className="text-xl font-semibold">Coconut Face Mask</p>
                  </div>
                  <p className="font-semibold">
                    Experience the Significant Benefits of Our Products
                  </p>
                </div>
              </div>
              <div className="relative w-1/2 max-h-80 overflow-hidden rounded-xl">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src="/images/skincare2.jpg"
                  className="rounded-xl w-full h-full"
                  alt="skincare model"
                />
                <div className="absolute top-0 left-0 w-full 2xl:w-1/2 h-full flex flex-col text-white p-4 rounded-xl">
                  <div className="mb-auto">
                    <p className="text-xl font-semibold">Coconut Face Mask</p>
                  </div>
                  <p className="font-semibold">
                    Experience the Significant Benefits of Our Products
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full 2xl:w-5/6">
              <h1 className="text-5xl xl:text-6xl font-semibold mb-5">
                <span className="text-browncream">Empower Your Glow.</span>
                <br />
                Unlock radiant, healthy skin with our science-backed skincare
                solutions!
              </h1>
              <p className="text-xl">
                Your Skin Deserves the Best. Discover the perfect blend of
                nature and innovation for every skin type.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-5">
              <Link href="/signup">
                <CTAButton text="Shop Now" />
              </Link>
              <div className="hidden md:flex items-center">
                <Avatar name="sample1" src="/images/review1.jpg" size="md" />
                <Avatar name="sample2" src="/images/review2.jpg" size="md" />
                <Avatar name="sample3" src="/images/review3.jpg" size="md" />
              </div>
              <p className="hidden md:flex font-semibold text-xl gap-2">
                98,726<span className="font-normal">User reviews</span>
              </p>
            </div>
          </div>
        </header>
        <section className="w-full h-auto flex items-center justify-between bg-cream gap-12">
          <div className="hidden xl:h-full xl:flex xl:items-center">
            <img src="/images/vine_black_r.png" className="max-h-96" />
          </div>
          <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto py-20 px-5">
            <p className="text-xl xl:text-2xl leading-relaxed text-gray-700 text-center">
              Finding the perfect skincare product shouldn't feel like a gamble.
              With countless options promising miracles, it’s frustrating when
              results fall short. Many brands rely on generic formulas or load
              their products with harmful chemicals that irritate your skin
              rather than nurture it.
            </p>
            <h2 className="text-3xl xl:text-4xl font-semibold text-browncream text-center leading-snug">
              That's why we’ve revolutionized skincare with cutting-edge
              technology designed to deliver personalized solutions for every
              skin type.
            </h2>
          </div>
          <div className="hidden xl:h-full xl:flex xl:items-center">
            <img src="/images/vine_black_l.png" className="max-h-96" />
          </div>
        </section>
        <section className="w-full min-h-screen flex flex-col xl:flex-row items-center p-5 xl:p-20 gap-10">
          <div className="w-full flex flex-col gap-10">
            <h2 className="font-bold text-5xl text-gray-800 leading-snug">
              Our Solution:{' '}
              <span className="text-browncream">Innovation Meets Care</span>
            </h2>
            <ul className="w-full lg:w-3/4 flex flex-col gap-5">
              <li className="flex flex-col gap-2">
                <h3 className="text-3xl font-medium text-browncream">
                  Personalized Skincare, Simplified
                </h3>
                <p className="text-lg">
                  We understand that your skin is unique. Our carefully curated
                  products target specific skin concerns, making it easier to
                  find what works for you.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <h3 className="text-3xl font-medium text-browncream">
                  Gentle, Clean Formulas
                </h3>
                <p className="text-lg">
                  We prioritize gentle, plant-based ingredients proven to
                  nourish your skin without irritation. Every product is
                  dermatologically tested to ensure safety and effectiveness.
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <h3 className="text-3xl font-medium text-browncream">
                  Results That Go Beyond Skin Deep
                </h3>
                <p className="text-lg">
                  Our formulations focus on strengthening your skin’s natural
                  barrier, promoting long-lasting health and vitality.
                </p>
              </li>
            </ul>
          </div>
          <div className="w-full flex justify-center">
            <img
              src="/images/skincare4.jpg"
              className="w-full lg:w-3/4 rounded-xl"
              alt="Skin Care Example"
            />
          </div>
        </section>
        <section className="h-auto w-full flex flex-col md:flex-row justify-between p-10 xl:px-28 xl:pb-20 gap-5 xl:gap-20">
          {sampleStats.map((stats, index) => (
            <StatsCard key={index} stats={stats} />
          ))}
        </section>
        <section className="w-full h-auto flex flex-col items-center p-10 xl:p-20 gap-10">
          <h2 className="text-5xl font-bold text-center">
            Our Bestsellers,{' '}
            <span className="text-browncream">Tried and Loved</span>
          </h2>
          <div className="w-full h-auto flex flex-col items-center lg:hidden">
            <ProductList products={sampleProducts} />
          </div>
          <div className="hidden lg:flex gap-5 xl:gap-10">
            {sampleProducts.map((product, index) => (
              <motion.div
                key={index}
                className="w-full flex flex-col shadow-md p-5 gap-2 rounded-lg border hover:bg-cream hover:border-browncream transition duration-200"
              >
                <img
                  src={product['image']}
                  alt={product['title']}
                  className="rounded-lg mb-4 w-full object-cover h-64"
                />
                <h4 className="text-xl font-semibold">{product['title']}</h4>
                <p className="">{product['feature']}</p>
              </motion.div>
            ))}
          </div>
        </section>
        <section className="w-full h-auto flex flex-col items-center p-10 xl:p-20 gap-10">
          <h2 className="text-5xl font-bold text-center">
            What they said about us
          </h2>
          <div className="flex flex-col md:flex-row gap-5 xl:gap-10">
            <ReviewCard
              image="/images/review1.jpg"
              name="Lina S."
              rate="5"
              title="A game changer for my skincare routine!"
              review="I’ve struggled with sensitive, dry skin for years, and nothing seemed to work—until now. Your products are gentle yet so effective. My skin has never felt this good!"
            />
            <ReviewCard
              image="/images/review2.jpg"
              name="Rachel T."
              rate="5"
              title="Finally, a brand I can trust."
              review="The transparency about ingredients is amazing. I love knowing exactly what I’m putting on my skin, and the results speak for themselves."
            />
            <ReviewCard
              image="/images/review3.jpg"
              name="Diana P."
              rate="5"
              title="Goodbye breakouts, hello confidence!"
              review="The Clear Skin Cleanser has transformed my complexion. I’m glowing!"
            />
          </div>
        </section>
        <section className="bg-cream h-auto flex justify-between p-10 xl:p-20">
          <div className="w-full xl:w-1/2 flex flex-col gap-5">
            <h2 className="text-5xl font-semibold">Ready to Get Beautier?</h2>
            <p className="text-3xl">
              Say goodbye to skincare that doesn’t deliver. Experience real,
              lasting results with our innovative formulas.
            </p>
            <Link href="/signup" className="mt-5">
              <CTAButton text="Shop Now" />
            </Link>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
