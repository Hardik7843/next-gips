/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import SectionHead from "@/components/SectionHead"; // If you don't have this, replace with <h2>
import { TimePicker, DatePicker } from "antd";
import dayjs from "dayjs";
import { sendInvestorEnquiry } from "@/actions/joinus";

const InvestorForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    birthDate: "",
    city: "",
    pincode: "",
    alternatePhone: "",
    address: "",
    meetingDate: "",
    meetingTime: "",
    primaryContact: "",
    website: "",
    email: "",
    investmentAmount: "1-2 Lacs",
  });

  const [investmentAmount, setInvestmentAmount] = useState("");

  const formatIndianCurrency = (value: string) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, "");
    // Convert to number and format
    const number = parseInt(cleaned, 10);
    if (isNaN(number)) return "";

    return number.toLocaleString("en-IN");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const cleaned = raw.replace(/[^0-9]/g, ""); // only digits
    const formatted = formatIndianCurrency(cleaned);
    setInvestmentAmount(formatted);
  };

  const handleInvestmentChange = (value: string) => {
    if (value !== "Other") {
      setInvestmentAmount("");
    }
    setFormData((prev) => ({
      ...prev,
      investmentAmount: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

      console.log("formData: ", formData);

      const response = await sendInvestorEnquiry({
        ...trimmedFormData,
        time: formattedTime,
        date: formattedDate,
        investmentAmount:
          formData.investmentAmount !== "Other"
            ? formData.investmentAmount
            : investmentAmount,
      });
      console.log("Thankyou for joining us:", formData);
      toast.success("Thank you for showing interest in investing.");

      window.location.reload();
      setFormData({
        fullName: "",
        birthDate: "",
        city: "",
        pincode: "",
        alternatePhone: "",
        address: "",
        meetingDate: "",
        meetingTime: "",
        primaryContact: "",
        website: "",
        email: "",
        investmentAmount: "1-2 Lacs",
      });
    } catch (err) {
      console.error("Submission Error:", err);
      toast.error("Something went wrong. Please try again later.");
    }
    setIsSubmitting(false);
  };

  return (
    <section className="text-white px-8 py-12 max-w-3xl mx-auto">
      <SectionHead>Investor Interest Form</SectionHead>
      <p className="text-gray-300 mb-6">
        Please fill out the following details to express your interest in
        investing with us.
      </p>

      <form onSubmit={handleSubmit} className="grid gap-5">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="primaryContact">Primary Contact Number</Label>
          <Input
            name="primaryContact"
            type="tel"
            placeholder="Enter your main contact number"
            value={formData.primaryContact}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="birthDate">Date of Birth</Label>
          <DatePicker
            onChange={(date) => {
              if (date) {
                const formattedDate = dayjs(date).format("D MMMM YYYY");
                setFormData((prev) => ({
                  ...prev,
                  birthDate: formattedDate,
                }));
              }
            }}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              name="city"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="pincode">Pincode</Label>
            <Input
              name="pincode"
              type="number"
              placeholder="Enter your area pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="address">Full Address</Label>
          <Textarea
            name="address"
            placeholder="Enter your full residential address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="website">Give us your Business website</Label>
          <Input
            name="website"
            placeholder="Website"
            value={formData.website}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <Label htmlFor="alternatePhone">
            Alternate Contact Number{" "}
            <span className="text-gray-400">(Optional)</span>
          </Label>
          <Input
            name="alternatePhone"
            type="tel"
            placeholder="Enter alternate phone number"
            value={formData.alternatePhone}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="meetingDate">Preferred Meeting Date</Label>
            <DatePicker
              className="w-full"
              required
              onChange={(date) => {
                if (date) {
                  const formattedDate = dayjs(date).format("D MMMM YYYY");
                  setFormData((prev) => ({
                    ...prev,
                    meetingDate: formattedDate,
                  }));
                } else {
                  setFormData((prev) => ({
                    ...prev,
                    meetingDate: "",
                  }));
                }
              }}
            />
          </div>
          <div>
            <Label htmlFor="meetingTime">Preferred Meeting Time</Label>
            <TimePicker
              className="w-full "
              required
              use12Hours
              format="h:mm A"
              onChange={(time) => {
                if (time) {
                  const formattedTime = dayjs(time).format("hh:mm A [IST]");
                  setFormData((prev) => ({
                    ...prev,
                    meetingTime: formattedTime,
                  }));
                }
              }}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="investmentAmount">
            Amount You Are Willing to Invest
          </Label>
          <Select
            defaultValue="1-2 Lacs"
            value={formData.investmentAmount}
            onValueChange={handleInvestmentChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an amount" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-2 Lacs">1 - 2 Lacs INR</SelectItem>
              <SelectItem value="2-3 Lacs">2 - 3 Lacs INR</SelectItem>
              <SelectItem value="3-4 Lacs">3 - 4 Lacs INR</SelectItem>
              <SelectItem value="Other">Other Amount</SelectItem>
            </SelectContent>
          </Select>

          {formData.investmentAmount === "Other" && (
            <Input
              placeholder="Enter custom amount"
              value={investmentAmount}
              onChange={handleAmountChange}
              required
            />
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-green-600 hover:bg-green-700"
        >
          {isSubmitting ? "Submitting..." : "Submit Interest"}
        </Button>
      </form>
    </section>
  );
};

export default InvestorForm;
