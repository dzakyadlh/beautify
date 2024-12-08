import { CTAButton, CustomPrimaryButton } from '@/components/customButtons';
import { ProductCard, ReviewCard } from '@/components/customCards';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar/navbar';
import { Avatar } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <div className="w-full min-h-screen flex flex-col">
        <header
          data-aos="fade-up"
          className="w-full h-screen flex justify-center px-20 gap-10 pt-28 pb-10"
        >
          <div className="flex flex-col w-2/5 gap-5">
            <div className="relative">
              <img
                src="/images/model2.png"
                className="rounded-xl w-full"
                alt="Model showcasing skincare"
              />
              <div className="absolute top-0 left-0 w-1/2 h-full flex flex-col text-white p-4 rounded-xl">
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
          </div>
          <div className="flex flex-col w-3/5 gap-10">
            <div className="flex gap-5 h-2/5">
              <div className="relative w-1/2">
                <img
                  src="/images/skincare1.jpg"
                  className="rounded-xl w-full h-full"
                  alt="skincare model"
                />
                <div className="absolute top-0 left-0 w-1/2 h-full flex flex-col text-white p-4 rounded-xl">
                  <div className="mb-auto">
                    <p className="text-xl font-semibold">Coconut Face Mask</p>
                  </div>
                  <p className="font-semibold">
                    Experience the Significant Benefits of Our Products
                  </p>
                </div>
              </div>
              <div className="relative w-1/2">
                <img
                  src="/images/skincare2.jpg"
                  className="rounded-xl w-full h-full"
                  alt="skincare model"
                />
                <div className="absolute top-0 left-0 w-1/2 h-full flex flex-col text-white p-4 rounded-xl">
                  <div className="mb-auto">
                    <p className="text-xl font-semibold">Coconut Face Mask</p>
                  </div>
                  <p className="font-semibold">
                    Experience the Significant Benefits of Our Products
                  </p>
                </div>
              </div>
            </div>
            <div className="w-3/4">
              <h1 className="text-6xl font-semibold mb-5">
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
            <div className="flex items-center gap-5">
              <Link href="/signup">
                <CTAButton text="Shop Now" />
              </Link>
              <div className="flex items-center">
                <Avatar name="sample1" src="/images/review1.jpg" size="md" />
                <Avatar name="sample2" src="/images/review2.jpg" size="md" />
                <Avatar name="sample3" src="/images/review3.jpg" size="md" />
              </div>
              <p className="font-semibold text-xl">
                98,726{' '}
                <span className="font-normal text-sm"> User Reviews</span>
              </p>
            </div>
          </div>
        </header>
        <section
          data-aos="fade-up"
          className="w-full h-[60vh] flex justify-between bg-cream gap-12"
        >
          <img src="/images/vine_black_r.png" className="h-full" />
          <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto py-20">
            <p className="text-2xl leading-relaxed text-gray-700 text-center">
              Finding the perfect skincare product shouldn't feel like a gamble.
              With countless options promising miracles, it’s frustrating when
              results fall short. Many brands rely on generic formulas or load
              their products with harmful chemicals that irritate your skin
              rather than nurture it.
            </p>
            <h2 className="text-4xl font-semibold text-browncream text-center leading-snug">
              That's why we’ve revolutionized skincare with cutting-edge
              technology designed to deliver personalized solutions for every
              skin type.
            </h2>
          </div>
          <img src="/images/vine_black_l.png" className="h-full" />
        </section>

        <section
          data-aos="fade-up"
          className="w-full h-screen flex items-center p-20 gap-10"
        >
          <div className="w-full flex flex-col gap-10">
            <h2 className="font-bold text-5xl text-gray-800 leading-snug">
              Our Solution:{' '}
              <span className="text-browncream">Innovation Meets Care</span>
            </h2>
            <ul className="w-3/4 flex flex-col gap-5">
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
              className="w-3/4 rounded-xl"
              alt="Skin Care Example"
            />
          </div>
        </section>
        <section
          data-aos="fade-up"
          className="h-auto w-full flex justify-between px-28 pb-20 gap-20"
        >
          <div className="flex flex-col items-center gap-5 text-center rounded-lg border border-browncream p-10">
            <h2 className="text-3xl font-medium">Brighter Skin</h2>
            <p className="text-6xl font-bold text-browncream">87%</p>
            <p className="text-xl">
              of Beautifies noticed visibly brighter skin after just 1 week of
              use.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 text-center rounded-lg border border-browncream p-10">
            <h2 className="text-3xl font-medium">Reduced Dryness</h2>
            <p className="text-6xl font-bold text-browncream">92%</p>
            <p className="text-xl">
              of Beautifies reported significant hydration and reduced dryness
              within 10 days.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5 text-center rounded-lg border border-browncream p-10">
            <h2 className="text-3xl font-medium">Improved Texture</h2>
            <p className="text-6xl font-bold text-browncream">85%</p>
            <p className="text-xl">
              of Beautifies saw improvements in skin texture and reduced fine
              lines within 4 weeks.
            </p>
          </div>
        </section>
        <section
          data-aos="fade-up"
          className="w-full h-auto flex flex-col items-center p-20 gap-10"
        >
          <h2 className="text-5xl font-bold text-center">
            Our Bestsellers, Tried and Loved
          </h2>
          <div className="flex gap-10">
            <ProductCard
              image="/images/skincare2.jpg"
              title="Glow Hydration Serum"
              feature="Locks in moisture and revives your skin’s natural radiance with hyaluronic acid."
            />
            <ProductCard
              image="/images/skincare1.jpg"
              title="Youth Restore Cream"
              feature="Reduces fine lines and wrinkles, leaving your skin feeling firmer and rejuvenated."
            />
            <ProductCard
              image="/images/skincare3.png"
              title="Clear Skin Cleanser"
              feature="Gently purifies and balances your skin while preventing breakouts."
            />
            <ProductCard
              image="/images/skincare4.jpg"
              title="Radiance Boost Exfoliator"
              feature="Uncover brighter, smoother skin with our gentle AHA & BHA exfoliating formula."
            />
          </div>
        </section>
        <section className="w-full h-auto flex flex-col items-center p-20 gap-10">
          <h2 className="text-5xl font-bold text-center">
            What they said about us
          </h2>
          <div className="flex gap-10">
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
        <section
          data-aos="fade-right"
          className="bg-cream h-auto flex justify-between p-20"
        >
          <div className="w-1/2 flex flex-col gap-5">
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
