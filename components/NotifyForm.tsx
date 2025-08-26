"use client";

import { useState } from "react";
import axios, { isAxiosError } from "axios";
import { slugify } from "@/lib/utils";
import { toast } from "sonner";

export default function NotifyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [notifyInfo, setNotifyInfo] = useState({
    email: "",
    phone: "",
  });
  const [processingRequest, setProcessingRequest] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessingRequest(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{10,12}$/;
    if (
      !emailRegex.test(notifyInfo.email) ||
      !phoneRegex.test(notifyInfo.phone)
    ) {
      toast.error("Please enter a valid email or phone number.");
      setProcessingRequest(false);
      return;
    }

    try {
      const updatedValues = {
        email: notifyInfo.email,
        phone: notifyInfo.phone,
        slug: slugify(notifyInfo.email || notifyInfo.phone),
      };
      await axios.post(`/api/potentialcustomer/`, updatedValues);

      setSubmitted(true);
      toast.success("Thank you! We’ll notify you when we launch.");
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.status === 400) {
          toast.error(error.response.data);
        } else {
          toast.error("An unexpected error occurred. Please try again.");
        }
      } else {
        toast.error("Your submission could not be created. Please try again.");
      }
      setSubmitted(false);
    } finally {
      setProcessingRequest(false);
    }
  };

  return !submitted ? (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto flex flex-col items-center"
    >
      <input
        id="phone"
        type="tel"
        placeholder="Enter your phone number"
        value={notifyInfo.phone}
        onChange={(e) =>
          setNotifyInfo({ ...notifyInfo, phone: e.target.value })
        }
        className="w-full px-4 py-3 rounded-lg border bg-white placeholder:text-slate-500 my-4 transition text-slate-900"
        required
      />

      <input
        id="email"
        type="email"
        placeholder="Enter your email address"
        value={notifyInfo.email}
        onChange={(e) =>
          setNotifyInfo({ ...notifyInfo, email: e.target.value })
        }
        className="w-full px-4 py-3 rounded-lg border bg-white placeholder:text-slate-500 mb-4 transition text-slate-900"
        required
      />

      <button
        type="submit"
        className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold py-3 rounded-lg transition mb-2 disabled:cursor-not-allowed cursor-pointer"
        disabled={processingRequest}
      >
        {processingRequest ? "Joining..." : "Join Waitlist"}
      </button>
    </form>
  ) : (
    <div className="text-white text-center font-semibold text-lg py-4">
      🎉 You&apos;re on the waitlist!
    </div>
  );
}
