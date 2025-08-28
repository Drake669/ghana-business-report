"use client";

import { FormEvent, useState } from "react";
import { Download, FileText, Mail } from "lucide-react";

export default function ReportDownloadSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDownload = async (
    e: FormEvent<HTMLInputElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      // Here you would typically trigger the actual download
      alert("Report download link sent to your email!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4 mt-24">
      <div className="w-full  mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-8 lg:p-12">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-100 rounded-full opacity-60"></div>
                <div className="absolute -bottom-12 -right-6 w-32 h-32 bg-indigo-100 rounded-full opacity-40"></div>

                {/* Main illustration */}
                <div className="relative z-10">
                  {/* Book/Report illustration */}
                  <div className="w-80 h-60 perspective-1000">
                    <div className="relative transform-style-preserve-3d rotate-y-12 rotate-x-3">
                      {/* Book cover */}
                      <div className="absolute inset-0 bg-white border-4 border-slate-300 rounded-r-lg shadow-2xl">
                        <div className="p-8 h-full flex flex-col items-center justify-center">
                          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                            <FileText className="w-8 h-8 text-white" />
                          </div>
                          <div className="space-y-2 w-full">
                            <div className="h-2 bg-slate-200 rounded w-3/4 mx-auto"></div>
                            <div className="h-2 bg-slate-200 rounded w-1/2 mx-auto"></div>
                            <div className="h-2 bg-slate-200 rounded w-2/3 mx-auto"></div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-0 bg-slate-50 border-r-4 border-slate-200 rounded-r transform translate-x-1 -translate-y-1 shadow-xl -z-10">
                        <div className="p-4 space-y-1 mt-8">
                          {[...Array(12)].map((_, i) => (
                            <div
                              key={i}
                              className="h-1 bg-slate-300 rounded w-full opacity-60"
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white flex items-center p-8 lg:p-12">
              <div className="w-full max-w-md mx-auto">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                      There&apos;s more. Want a detailed version of this report?
                    </h1>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-slate-300">
                        Enter email address
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your.email@example.com"
                          className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          onKeyDown={(e) =>
                            e.key === "Enter" && handleDownload(e)
                          }
                        />
                      </div>
                    </div>

                    <button
                      onClick={handleDownload}
                      disabled={!email || isSubmitting}
                      className="w-full bg-secondary hover:bg-secondary/90 disabled:bg-slate-600 disabled:cursor-not-allowed cursor-pointer text-primary font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Preparing Download...
                        </>
                      ) : (
                        <>
                          <Download className="w-5 h-5" />
                          Download Report
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
