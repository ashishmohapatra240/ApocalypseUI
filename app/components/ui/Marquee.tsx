import ReactMarquee from "react-fast-marquee";

export default function Marquee() {
  const items = Array(12).fill("COMING SOON");

  return (
    <div className="w-full fixed bottom-0 left-0 z-50 py-2 bg-white/10 text-white border-t border-white/20">
      <ReactMarquee speed={50} gradient={false}>
        {items.map((text, i) => (
          <div key={i} className="flex items-center gap-12 mx-6">
            <span className="font-mono uppercase text-sm font-medium">
              {text}
            </span>
            <div className="w-[6px] h-[6px] bg-white" />
          </div>
        ))}
      </ReactMarquee>
    </div>
  );
}
  