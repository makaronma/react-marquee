const text: string[] = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

const Marquee = () => {
  return (
    <div className="w-[60vw] h-[100px] border-yellow-300 border-2 relative">
      <div className="px-5 flex gap-10 animate-marquee absolute">
        {text.map((t) => (
          <div className="text-2xl" key={t}>
            {t}
          </div>
        ))}
        <div className="px-5 absolute left-full flex gap-10 bg-red-200">
          {text.map((t) => (
            <div className="text-2xl" key={t}>
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
