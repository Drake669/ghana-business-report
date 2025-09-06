"use client";

import { FormEvent, useState } from "react";
import { Download, Mail } from "lucide-react";
import axios, { isAxiosError } from "axios";
import { slugify } from "@/lib/utils";
import { toast } from "sonner";

export default function ReportDownloadSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDownload = async (
    e: FormEvent<HTMLInputElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const updatedValues = {
        email,
        slug: slugify(email),
      };

      await axios.post(`/api/potentialcustomer/`, updatedValues);

      // Success → download PDF
      const link = document.createElement("a");
      link.href = "/ghana-business-report.pdf";
      link.download = "2025 Ghana Business Report.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success("Report downloaded successfully!");
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.status === 400) {
          toast.error(error.response.data.error);
        } else {
          toast.error("An unexpected error occurred. Please try again.");
        }
      } else {
        toast.error("Your request could not be completed. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="download"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4 mt-24"
    >
      <div className="w-full  mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-8 lg:p-12">
              <div className="relative w-full max-w-sm">
                <div className="absolute -top-12 -left-10 w-32 h-32 bg-blue-200 rounded-full opacity-40 blur-2xl"></div>
                <div className="absolute -bottom-16 -right-12 w-40 h-40 bg-indigo-300 rounded-full opacity-30 blur-3xl"></div>

                <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="h-3 w-20 bg-slate-200 rounded"></div>
                      <div className="h-3 w-10 bg-slate-200 rounded"></div>
                    </div>

                    <div className="grid grid-cols-6 gap-2 h-24 items-end">
                      {[40, 70, 55, 90, 60, 80].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className="bg-blue-500 rounded-md"
                        ></div>
                      ))}
                    </div>

                    <div className="flex items-center space-x-2">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="h-2 bg-slate-300 rounded w-full"
                        ></div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                      <div className="h-2 bg-slate-200 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white flex items-center p-8 lg:p-12">
              <div className="w-full max-w-md mx-auto">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                      Want a full detailed version of this report?
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
                          required
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
    </section>
  );
}
