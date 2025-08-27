import { marqueeImages } from "./Introsection";
import NotifyForm from "./NotifyForm";

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-primary text-white flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="flex items-center relative h-[60px] md:w-[150px] w-[100px]">
          <img
            src="/logo2.png"
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
            2025 Ghana Business Report
          </h1>

          <div className="flex flex-col items-center gap-3">
            <div className="flex -space-x-3">
              {marqueeImages.map((marquee) => (
                <img
                  key={marquee.alt}
                  src={marquee.src}
                  alt={marquee.alt}
                  className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                />
              ))}
            </div>
            <p className="text-slate-300 text-sm md:text-base">
              Join <span className="font-semibold text-white">800+</span> others
              already on the waitlist
            </p>
          </div>

          <NotifyForm />
        </div>
      </main>

      <footer className="px-6 py-6 border-t border-slate-600">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-400">
            <p>Copyright © 2025 Built Financial Technologies.</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://facebook.com/builtaccounting"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/facebook.png"
                className="w-6 h-6 cursor-pointer transition-all duration-200"
              />
            </a>

            <a
              href="https://x.com/built_africa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/twitter.png"
                className="w-6 h-6 cursor-pointer transition-all duration-200"
              />
            </a>

            <a
              href="https://instagram.com/builtaccounting"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/instagram.png"
                className="w-6 h-6 cursor-pointer transition-all duration-200"
              />
            </a>

            <a
              href="https://linkedin.com/company/built-accounting"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/linkedIn.png"
                className="w-6 h-6 cursor-pointer transition-all duration-200"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
