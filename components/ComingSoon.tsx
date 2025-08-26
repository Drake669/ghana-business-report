import NotifyForm from "@/components/NotifyForm";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F7F7F7] via-[#F2F6FF] to-[#E6F2FF] px-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center">
        <img
          src="/built-logo.png"
          alt="Ghana Business Report"
          className="w-20 h-20 mb-4"
        />
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1A237E] mb-2 text-center">
          Ghana Business Report
        </h1>
        <p className="text-[#3B3B3B] text-lg md:text-xl mb-6 text-center">
          We’re building the future of business intelligence in Ghana.
          <br />
          <span className="text-[#FFB300] font-semibold">Coming Soon!</span>
        </p>

        <NotifyForm />

        <div className="mt-6 text-sm text-[#757575] text-center">
          &copy; {new Date().getFullYear()} Ghana Business Report. <br />
          By{" "}
          <a
            href="https://built.africa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFB300] underline"
          >
            Built Financial Technologies
          </a>
        </div>
      </div>
    </div>
  );
}
