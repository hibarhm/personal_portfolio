"use client";

import { useState, useRef, useEffect } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  descriptionClassName,
  stack,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  stack?: Array<{ category: string; items: { name: string; logo: string }[] }>;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

  const [copied, setCopied] = useState(false);
  const [stackVisible, setStackVisible] = useState(false);
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (id !== 2) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStackVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (stackRef.current) observer.observe(stackRef.current);
    return () => observer.disconnect();
  }, [id]);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        `row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 ${
          id === 5 ? "md:col-span-6 lg:col-span-5" : ""
        }`,
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-100"} `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
            id === 1 ? "justify-start" : ""
          )}
        >
          <div className={cn(
            id === 1 && descriptionClassName ? descriptionClassName : "font-poppin lg:text-6xl md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10"
          )}>
            {description}
          </div>
          {id === 1 && <div style={{height: '2rem'}}></div>}
          {Array.isArray(title) && id === 1 ? (
            title.map((paragraph, idx) =>
              paragraph ? (
                <p key={idx} style={{ marginBottom: '1.5rem' }}>
                  {paragraph}
                </p>
              ) : null
            )
          ) : (
            <div
              className={cn(
                "font-poppin z-10",
                id === 5
                  ? "text-4xl lg:text-2.3xl text-left w-50"
                  : id === 1
                  ? "text-xs lg:text-sm font-normal"
                  : "text-lg lg:text-3xl max-w-50"
              )}
            >
              {title}
            </div>
          )}

          {/* Animated Tech Stack for grid id 2 */}
          {id === 2 && stack && (
            <div className="space-y-6 mt-6" ref={stackRef}>
              {stack.map((group, idx) => (
                <div key={group.category} className={stackVisible ? "animate-fade-in-up" : "opacity-0"}>
                  <h3 className="text-lg font-bold mb-2 text-poppins text-blue-400">{group.category}</h3>
                  <ul className="flex flex-wrap gap-3">
                    {group.items.map((item, i) => (
                      <li
                        key={item.name}
                        className={stackVisible ? "rounded-lg bg-transparent shadow transition-all duration-500 hover:scale-110 animate-fade-in" : "opacity-0"}
                        style={stackVisible ? { animationDelay: `${i * 0.1 + idx * 0.2}s`, animationFillMode: 'both' } : {}}
                      >
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="w-12 h-12 object-contain mb-1"
                          style={{ display: 'block', margin: '0 auto' }}
                        />
                        <span className="block text-center text-base text-white mt-1">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}>
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "hibaraheem10@gmail.com"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
