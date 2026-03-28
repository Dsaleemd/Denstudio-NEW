"use client";

import { useRef } from "react";
import Image from "next/image";

interface Review {
  name: string;
  text: string;
  image: string;
}

const reviews: Review[] = [
  {
    name: "Lula",
    text: "Jana worked thoroughly on my teeth. He was very gentle and made me feel at ease.",
    image: "/images/reviews/cards/lula.webp",
  },
  {
    name: "Harish",
    text: "Been seeing Jana regularly. The service he provides is always of the highest standard.",
    image: "/images/reviews/cards/harish.webp",
  },
  {
    name: "James",
    text: "What an incredible service from start to finish. My teeth and smile have been transformed!",
    image: "/images/reviews/cards/james.webp",
  },
  {
    name: "Melissa",
    text: "Dr. Jana is not only an incredibly skilled and knowledgeable dentist but also one of the kindest and most gracious people I\u2019ve ever met.",
    image: "/images/reviews/cards/melissa.webp",
  },
  {
    name: "Sri",
    text: "I booked in a consultation with Dr Jana to improve my smile. The service and professionalism was amazing.",
    image: "/images/reviews/cards/sri.webp",
  },
];

export default function ReviewCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -380 : 380,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Scroll buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 bg-white rounded-full shadow-md hidden md:flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
        aria-label="Scroll left"
      >
        <svg className="w-5 h-5 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 bg-white rounded-full shadow-md hidden md:flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
        aria-label="Scroll right"
      >
        <svg className="w-5 h-5 text-[#333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-12 pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pr-0 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {reviews.map((review) => (
          <div
            key={review.name}
            className="relative flex-shrink-0 w-[360px] h-[540px] rounded-[22px] overflow-hidden snap-start"
          >
            {/* Background image */}
            <Image
              src={review.image}
              alt={`${review.name} review`}
              fill
              className="object-cover"
              sizes="360px"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/45 z-[1]" />

            {/* Content at bottom with glassmorphism */}
            <div className="absolute bottom-0 left-0 w-full h-[34%] p-6 z-[2] backdrop-blur-[14px] flex flex-col justify-between">
              {/* Google logo + stars */}
              <div className="flex items-center gap-2">
                <Image
                  src="/images/reviews/google-logo.webp"
                  alt="Google"
                  width={22}
                  height={22}
                  className="opacity-90"
                />
                <span className="text-[#fbbc04] text-xl leading-none">★★★★★</span>
              </div>

              {/* Review text */}
              <p className="text-xs leading-[1.45] text-[#f2f2f2] flex-grow mt-2">
                {review.text}
              </p>

              {/* Author name */}
              <p className="text-[0.9rem] font-medium text-white mt-2">
                {review.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
