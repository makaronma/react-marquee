import { useEffect, useRef, useState } from "react";

const text: string[] = ["one", "two", "three", "four", "ten"];

const Marquee = () => {
  const [numOfCopy, setNumOfCopy] = useState<number>(1);
  const mainDivRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mainDiv = mainDivRef.current;
    const container = containerRef.current;
    if (!mainDiv || !container) return;
    setNumOfCopy(Math.floor(container.getBoundingClientRect().width / mainDiv.getBoundingClientRect().width) + 1)
  }, []);

  return (
    <>
    <div className="w-[60vw] h-[100px] border-yellow-300 border-2 relative" ref={containerRef}>
      <div className="px-5 flex gap-10 animate-marquee absolute" ref={mainDivRef}>
        {text.map((t) => (
          <div className="text-2xl" key={t}>
            {t}
          </div>
        ))}
        {[...new Array(numOfCopy)].map((c, index) => (
          <div key={`copy-${index}`}
            className={`px-5 absolute left-full flex gap-10 ${index%2===0?'bg-red-200':'bg-green-200'} `}
            style={{
              left: `${100 * (index + 1)}%`,
            }}
          >
            {text.map((t) => (
              <div className="text-2xl" key={t}>
                {t}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    {/* <input type="text" className="border-2 border-black" /> */}
    </>
  );
};

export default Marquee;
