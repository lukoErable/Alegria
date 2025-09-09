// app/components/ImageTextSplit.tsx
"use client";
import Link from "next/link";

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
  const flexDirection = reverse ? "md:flex-row-reverse" : "md:flex-row";
  const backgroundPosition = reverse ? "bg-right" : "bg-left";

  return (
    <section className={`flex flex-col ${flexDirection}`}>
      <div 
        className={`w-full md:w-1/2 min-h-[400px] md:min-h-[600px]  bg-fit bg-fixed bg-no-repeat relative ${backgroundPosition}`}
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundColor: '#1a1a1a'
        }}
        aria-label={title}
      >
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

        <div className="w-full md:w-1/2 flex items-center justify-center bg-black">
          <div className={`${showContent ? 'p-10 md:p-20 max-w-lg' : ''} w-full`}>
            {showContent && (
              <>
                {title && (
                  <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                    {title}
                  </h2>
                )}
                {description && (
                  <p className="text-gray-300 mb-8">{description}</p>
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
