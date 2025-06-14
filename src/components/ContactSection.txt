"use client";
import React, { useState } from "react";
import SectionHead from "./SectionHead";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { setData } from "@/actions/contactForm";
import toast from "react-hot-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    website: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const now = new Date();
      const formattedDate = now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const formattedTime = now.toLocaleTimeString("en-IN", {
        timeZone: "IST",
        timeZoneName: "short",
      });

      const trimmedFormData = Object.fromEntries(
        Object.entries(formData).map(([key, value]) => [
          key,
          typeof value === "string" ? value.trim() : value,
        ])
      );

      const response = await setData({
        ...trimmedFormData,
        time: formattedTime,
        date: formattedDate,
      });
      console.log("result from sheet", response);
      toast.success("Thankyou! We Recieved your query");
      resetForm();
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error("Please Try Again After Sometime");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      website: "",
    });
  };

  return (
    <section
      id="contact"
      className="text-white scroll-mt-[80px] min-h-[60vh] mb-10"
    >
      <SectionHead>Contact Us</SectionHead>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="max-w-lg mx-auto flex flex-col gap-y-5 mt-8"
      >
        <Input
          required
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="bg-zinc-900 p-3 rounded-md outline-none "
        />
        <Input
          required
          name="email"
          type="text"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="bg-zinc-900 p-3 rounded-md outline-none"
        />
        <Input
          required
          name="phone"
          type="text"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="bg-zinc-900 p-3 rounded-md outline-none"
        />
        <Textarea
          required
          name="subject"
          typeof="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={(e) => handleChange(e)}
          className="bg-zinc-900 p-3 rounded-md outline-none"
        />
        <Input
          name="website"
          type="text"
          placeholder="Business Website"
          value={formData.website}
          onChange={handleChange}
          className="bg-zinc-900 p-3 rounded-md outline-none"
          required
        />

        <div className="flex gap-4 mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-blue-500 w-full hover:bg-purple-500 transition-all duration-200 ease-initial px-3 py-2 rounded-md text-white font-medium 
              ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
