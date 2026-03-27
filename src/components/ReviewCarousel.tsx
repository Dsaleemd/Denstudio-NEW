"use client";

import { useRef } from "react";

interface Review {
  name: string;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Sri",
    text: "I booked in a consultation with Dr Jana to improve my smile. The service and professionalism was amazing. He knew exactly what I needed and has a great aesthetic eye. Love the results, thanks doc.",
  },
  {
    name: "Harish",
    text: "Been seeing Jana regularly. The service he provides is always of the highest standard, he explains everything with complete clarity and I always leave satisfied with the results.",
  },
  {
    name: "James",
    text: "What an incredible service from start to finish. My teeth and smile have been transformed! Can\u2019t thank Dr Denzel enough for my new smile.",
  },
  {
    name: "Mayuran",
    text: "Had whitening here with great results \u2014 just two weeks and a huge change. Thanks Jana, will be back soon!",
  },
  {
    name: "Lula",
    text: "Jana worked thoroughly on my teeth. He was very gentle and made me feel at ease. Very personable and professional \u2014 highly recommend!",
  },
  {
    name: "Bavan",
    text: "5 stars all around \u2014 Dr Jana is great and I wouldn\u2019t go anywhere else. Thanks to the team for the great service.",
  },
  {
    name: "Hishanth",
    text: "Lives up to the great reviews \u2014 it was easy to book, the staff were professional and Dr Jana was very thorough and personable. Best dental experience I\u2019ve had.",
  },
  {
    name: "Diyar",
    text: "I have never received such excellent service at a dentist. The attention to detail from Dr Jana and the team was exceptional. I felt cared for and safe \u2014 and the results are amazing!",
  },
  {
    name: "Babac",
    text: "Dr Denzel is always professional, informative and calming. He ensures you fully understand everything and welcomes questions. Would definitely recommend.",
  },
  {
    name: "Vithya",
    text: "I saw Dr Jana Denzel for dental hygiene and whitening \u2014 incredible results. The service and professionalism were the best I\u2019ve had. Highly recommend!",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-star-gold"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
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
        <svg
          className="w-5 h-5 text-dark-grey"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 bg-white rounded-full shadow-md hidden md:flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
        aria-label="Scroll right"
      >
        <svg
          className="w-5 h-5 text-dark-grey"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {reviews.map((review) => (
          <div
            key={review.name}
            className="flex-shrink-0 w-[280px] snap-start bg-white rounded-2xl p-6 shadow-sm border border-light-grey/30"
          >
            <Stars />
            <p className="text-sm text-dark-grey leading-relaxed mb-4">
              &ldquo;{review.text}&rdquo;
            </p>
            <p className="text-sm font-semibold text-teal">{review.name}</p>
          </div>
        ))}
      </div>

      {/* Hide scrollbar for webkit */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
