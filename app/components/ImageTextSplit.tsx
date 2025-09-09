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

  // Effet parallax personnalisé pour mobile
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        const scrolled = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        // Effet parallax pour l'image
        if (imageRef.current) {
          const rect = imageRef.current.getBoundingClientRect();
          const elementTop = rect.top + scrolled;
          
          // Effet parallax plus subtil et fluide
          const parallaxRate = 0.2; // Réduit pour un effet plus doux
          const translateY = (scrolled - elementTop + windowHeight) * parallaxRate;
          
          imageRef.current.style.transform = `translateY(${translateY}px)`;
        }
        
        // Effet parallax inverse pour le texte (compensation)
        if (textRef.current) {
          const rect = textRef.current.getBoundingClientRect();
          const elementTop = rect.top + scrolled;
          
          // Effet parallax inverse pour maintenir l'alignement
          const textParallaxRate = -0.1; // Inverse et plus faible
          const translateY = (scrolled - elementTop + windowHeight) * textParallaxRate;
          
          textRef.current.style.transform = `translateY(${translateY}px)`;
        }
      }
    };

    // Démarrer l'effet immédiatement
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className={`flex flex-col bg-black ${flexDirection}`}>
      {/* Sur mobile: texte en premier, sur desktop: ordre selon reverse */}
      <div ref={textRef} className={`w-full md:w-1/2 flex items-center justify-center bg-p-4 md:p-6 transition-transform duration-75 ease-out ${reverse ? 'md:order-2' : 'md:order-1'}`}>
        <div className={`${showContent ? 'p-6 md:p-20 max-w-lg z-10' : ''} w-full`}>
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
      </div>

      {/* Image en second sur mobile, ordre selon reverse sur desktop */}
      <div 
        ref={imageRef}
        className={`w-full md:w-1/2 min-h-[600px] md:min-h-[700px] bg-cover md:bg-contain md:bg-fixed bg-no-repeat relative transition-transform duration-75 ease-out md:bg-center image-section ${reverse ? 'reverse' : 'normal'} ${backgroundPosition} ${reverse ? 'md:order-1' : 'md:order-2'}`}
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
    </section>
  );
}
