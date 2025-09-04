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

    if (!notifyInfo.email && !notifyInfo.phone) {
      toast.error("Please enter either an email or phone number.");
      setProcessingRequest(false);
      return;
    }

    if (notifyInfo.email && !emailRegex.test(notifyInfo.email)) {
      toast.error("Please enter a valid email address.");
      setProcessingRequest(false);
      return;
    }

    if (notifyInfo.phone && !phoneRegex.test(notifyInfo.phone)) {
      toast.error("Please enter a valid phone number.");
      setProcessingRequest(false);
      return;
    }

    try {
      const updatedValues = {
        email: notifyInfo.email || "",
        phone: notifyInfo.phone || "",
        slug: slugify(notifyInfo.email || notifyInfo.phone),
      };

      const response = await axios.post(
        `/api/potentialcustomer/`,
        updatedValues
      );

      if (response.data.existing) {
        // User already exists
        toast.info(response.data.message);
        setSubmitted(true);
      } else {
        // New user successfully added
        toast.success(
          "Thank you! We've sent you a welcome email and added you to the waitlist."
        );
        setSubmitted(true);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.status === 400) {
          toast.error(error.response.data.error || error.response.data);
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
        required
        className="w-full px-4 py-3 rounded-lg border bg-white placeholder:text-slate-500 my-4 transition text-slate-900"
      />

      <input
        id="email"
        type="email"
        placeholder="Enter your email address"
        value={notifyInfo.email}
        onChange={(e) =>
          setNotifyInfo({ ...notifyInfo, email: e.target.value })
        }
        required
        className="w-full px-4 py-3 rounded-lg border bg-white placeholder:text-slate-500 mb-4 transition text-slate-900"
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
