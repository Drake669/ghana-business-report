import { Button } from "@/components/ui/button";
import { Zap, Download } from "lucide-react";
import Image from "next/image";

export default function IntroSection() {
  return (
    <>
      <main className="flex flex-col items-center justify-center px-6 py-16 max-w-4xl mx-auto text-center">
        <div className="border-primary/30 border text-primary px-6 py-2 rounded-full text-sm font-medium mb-8 flex items-center gap-2">
          <Image
            src="/icon.ico"
            alt="Built Financial Technologies"
            width={16}
            height={16}
          />
          Brought to you by Built Financial Technologies
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-16">
          2025
          <br />
          Ghana Business Report
        </h1>

        <p className="text-lg text-slate-600 mb-12 max-w-2xl leading-relaxed">
          The complete roadmap to building a successful SME in
          <br />
          Ghana&apos;s booming $75 billion economy
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button className="text-white py-6 rounded-full flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Start your Journey Now
          </Button>
          <Button
            variant="outline"
            className="py-6 rounded-full flex items-center gap-2 border-primary text-primary"
          >
            <Download className="w-4 h-4" />
            Download Full Report
          </Button>
        </div>
      </main>

      <div className="relative overflow-hidden">
        <div className="marquee-container py-8">
          <div className="marquee-content">
            <MarqueeRow images={marqueeImages} />
            <MarqueeRow images={marqueeImages} />
          </div>
        </div>
      </div>
    </>
  );
}

const ImageCard = ({
  src,
  alt,
  rotation,
  zIndex,
}: {
  src: string;
  alt: string;
  rotation: string;
  zIndex: string;
}) => (
  <div
    className={`w-64 h-80 rounded-2xl overflow-hidden flex-shrink-0 relative ${zIndex} bg-white border border-gray-200 p-2 shadow-lg transform ${rotation}`}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover rounded-xl"
    />
  </div>
);

export const MarqueeRow = ({ images }: { images: typeof marqueeImages }) => (
  <div className="flex items-center gap-0">
    {images.map((image, index) => (
      <ImageCard
        key={`${image.src}-${index}`}
        src={image.src}
        alt={image.alt}
        rotation={image.rotation}
        zIndex={image.zIndex}
      />
    ))}
  </div>
);

export const marqueeImages = [
  {
    src: "/Smiling woman.jpg",
    alt: "Smiling woman",
    rotation: "rotate-3",
    zIndex: "z-10",
  },
  {
    src: "/Successful entrepreneur.jpg",
    alt: "Successful entrepreneur",
    rotation: "-rotate-3",
    zIndex: "z-20",
  },
  {
    src: "/Business owner in traditional attire.jpg",
    alt: "Business owner in traditional attire",
    rotation: "rotate-3",
    zIndex: "z-10",
  },
  {
    src: "/Celebrating entrepreneur.jpg",
    alt: "Celebrating entrepreneur",
    rotation: "-rotate-3",
    zIndex: "z-20",
  },
  {
    src: "/Confident business professional.jpg",
    alt: "Confident business professional",
    rotation: "rotate-3",
    zIndex: "z-10",
  },
  {
    src: "/Market entrepreneur.jpg",
    alt: "Market entrepreneur",
    rotation: "-rotate-3",
    zIndex: "z-20",
  },
  {
    src: "/Professional businesswoman.jpg",
    alt: "Professional businesswoman",
    rotation: "rotate-3",
    zIndex: "z-10",
  },
  {
    src: "/Market woman.jpg",
    alt: "Market woman",
    rotation: "-rotate-3",
    zIndex: "z-20",
  },
];
