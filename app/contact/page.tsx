"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-black mb-6">
            Let's build something extraordinary.
          </h1>
          <p className="text-gray-500 text-lg mb-12 max-w-xl">
            Reach out to discuss your next architectural project, request a consultation, or simply learn more about our master planning process.
          </p>
        </motion.div>

        <motion.form 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          onSubmit={handleSubmit} 
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors bg-transparent"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors bg-transparent"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">Project Details</label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors bg-transparent resize-none"
              placeholder="Tell us about your vision, site location, and timeline..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="bg-black text-white px-10 py-4 font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : status === "success" ? "Message Sent" : "Submit Inquiry"}
          </button>

          {status === "error" && (
            <p className="text-red-500 text-sm mt-4">Something went wrong. Please try again.</p>
          )}
          {status === "success" && (
            <p className="text-green-600 text-sm mt-4">Thank you. We will be in touch shortly.</p>
          )}
        </motion.form>
      </div>
    </div>
  );
}