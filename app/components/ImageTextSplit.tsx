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
  const textRef = useRef<HTMLDivElement>(null);
  const flexDirection = reverse ? "md:flex-row-reverse" : "md:flex-row";
  const backgroundPosition = reverse ? "md:bg-right md:bg-center" : "md:bg-left md:bg-center";

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        const scrolled = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        if (imageRef.current) {
          const rect = imageRef.current.getBoundingClientRect();
          const elementTop = rect.top + scrolled;
          
          const parallaxRate = 0.23; 
          const translateY = (scrolled - elementTop + windowHeight) * parallaxRate;
          
          imageRef.current.style.transform = `translateY(${translateY}px)`;
        }
        
        if (textRef.current) {
          const rect = textRef.current.getBoundingClientRect();
          const elementTop = rect.top + scrolled;
          
          const textParallaxRate = -0.1;
          const translateY = (scrolled - elementTop + windowHeight) * textParallaxRate;
          
          textRef.current.style.transform = `translateY(${translateY}px)`;
        }
      }
    };
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className={`flex flex-col bg-black ${flexDirection} gap-0`}>
      <div 
        ref={imageRef}
        className={`w-full md:w-1/2 min-h-screen md:min-h-[700px] bg-cover md:bg-cover bg-fixed bg-no-repeat relative transition-transform duration-75 ease-out md:bg-center image-section ${reverse ? 'reverse' : 'normal'} ${backgroundPosition}`}
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundColor: '#000000',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        aria-label={title}
      >
        <div 
          className="absolute inset-0 md:hidden"
          style={{
            background: 'radial-gradient(ellipse 100% 50% at center, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1))'
          }}
        ></div>
      </div>

        <div ref={textRef} className="w-full md:w-1/2 flex items-center justify-center transition-transform duration-75 ease-out">
          <div className={`${showContent ? 'p-6 md:p-20 max-w-lg z-10' : ''} w-full ${reverse ? 'text-right md:text-left' : 'text-left md:text-center'}`}>
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
                      className="inline-block px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 border border-gray-600"
                    >
                      {buttonText}
                    </button>
                  ) : (
                    <Link
                      href={buttonLink}
                      className="inline-block px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 border border-gray-600"
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
