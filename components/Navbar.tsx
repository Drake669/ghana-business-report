import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Built Logo"
            width={80}
            height={32}
            className="h-8 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-slate-600 hover:text-slate-800 transition-colors"
          >
            Registration
          </a>
          <a
            href="#"
            className="text-slate-600 hover:text-slate-800 transition-colors"
          >
            Tax & Compliance
          </a>
          <a
            href="#"
            className="text-slate-600 hover:text-slate-800 transition-colors"
          >
            Banking & Funding
          </a>
          <a
            href="#"
            className="text-slate-600 hover:text-slate-800 transition-colors"
          >
            Hiring
          </a>
          <a
            href="#"
            className="text-slate-600 hover:text-slate-800 transition-colors"
          >
            Permits
          </a>
          <a
            href="#"
            className="text-slate-600 hover:text-slate-800 transition-colors"
          >
            Resources
          </a>
        </nav>

        <Button className="text-white px-8 py-6 rounded-full">
          Get Started
        </Button>
      </div>
    </header>
  );
}
