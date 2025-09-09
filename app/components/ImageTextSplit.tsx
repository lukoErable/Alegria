// app/components/ImageTextSplit.tsx
"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface ImageTextSplitProps {
  imageUrl: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
  reverse?: boolean;
  children?: React.ReactNode;
  showContent?: boolean;
}

export function ImageTextSplit({
  imageUrl,
  title,
  description,
  buttonText,
  buttonLink = "#",
  onButtonClick,
  reverse = false,
  children,
  showContent = true,
}: ImageTextSplitProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const flexDirection = reverse ? "md:flex-row-reverse" : "md:flex-row";
  const backgroundPosition = reverse ? "bg-right" : "bg-left";

  // Effet parallax personnalisé pour mobile
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && window.innerWidth < 768) {
        const rect = imageRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        imageRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`flex flex-col bg-black ${flexDirection}`}>
      <div 
        ref={imageRef}
        className={`w-full md:w-1/2 min-h-[600px] md:min-h-[700px] bg-cover md:bg-contain md:bg-fixed bg-no-repeat relative overflow-hidden ${backgroundPosition}`}
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundColor: '#1a1a1a',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        aria-label={title}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

        <div className="w-full md:w-1/2 flex items-center justify-center bg-p-4 md:p-6">
          <div className={`${showContent ? 'p-6 md:p-20 max-w-lg' : ''} w-full`}>
            {showContent && (
              <>
                {title && (
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                    {title}
                  </h2>
                )}
                {description && (
                  <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base">{description}</p>
                )}
                {buttonText && (
                  onButtonClick ? (
                    <button
                      onClick={onButtonClick}
                      className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-transform duration-300 hover:scale-105"
                    >
                      {buttonText}
                    </button>
                  ) : (
                    <Link
                      href={buttonLink}
                      className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-transform duration-300 hover:scale-105"
                    >
                      {buttonText}
                    </Link>
                  )
                )}
              </>
            )}
            {children && (
              <div className={showContent ? "mt-8" : ""}>
                {children}
              </div>
            )}
          </div>
        </div>
    </section>
  );
}
