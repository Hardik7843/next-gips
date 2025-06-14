/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Input, Radio, DatePicker, Button, RadioChangeEvent } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { sendBookingEnquiry } from "@/actions/bookDemo";
import toast from "react-hot-toast";

type Course = "GNM" | "Paramedical";

interface FormData {
  name: string;
  phone: string;
  email: string;
  course: Course;
  dob: string; // formatted as "DD-MMM-YYYY"
  tenthPercent: string;
  twelfthPercent: string;
}

const CourseEnrollForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    course: "GNM",
    dob: "",
    tenthPercent: "",
    twelfthPercent: "",
  });

  const handleChange =
    (field: keyof FormData) =>
    (e: ChangeEvent<HTMLInputElement> | string | Dayjs | null): void => {
      const value =
        typeof e === "string"
          ? e
          : dayjs.isDayjs(e)
          ? e.format("DD-MMM-YYYY")
          : (e?.target as HTMLInputElement)?.value;

      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    };

  const handleChangeSubject = (e: RadioChangeEvent) => {
    setFormData((prev) => ({
      ...prev,
      course: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    toast.loading("Sending...", { id: "send" });
    try {
      toast.dismiss("send");
      const result = await sendBookingEnquiry(formData);
      console.log("✅ Submitted:", result);
      toast.success("Enquiry sent successfully!");
      // alert('Enrollment submitted!');
    } catch (err) {
      console.error("❌", err);
      toast.dismiss("send");
      toast.error("Failed to submit");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-15 lg:mt-25">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="text-sm">Full Name</label>
        <Input
          required
          value={formData.name}
          onChange={handleChange("name")}
          className="rounded-md"
        />

        <label className="text-sm">Phone Number</label>
        <Input
          required
          value={formData.phone}
          onChange={handleChange("phone")}
          className="rounded-md"
        />

        <label className="text-sm">Email</label>
        <Input
          required
          value={formData.email}
          onChange={handleChange("email")}
          className="rounded-md"
          type="email"
        />

        <label className="text-sm">Course</label>
        <Radio.Group
          value={formData.course}
          onChange={(e) => handleChangeSubject(e)}
          className="flex gap-4"
        >
          <Radio value="GNM">GNM</Radio>
          <Radio value="Paramedical">Paramedical</Radio>
        </Radio.Group>

        <label className="text-sm">Date of Birth</label>
        <DatePicker
          required
          format="DD-MMM-YYYY"
          disabledDate={(current) => current && current > dayjs().endOf("day")}
          value={formData.dob ? dayjs(formData.dob, "DD-MMM-YYYY") : null}
          onChange={handleChange("dob")}
          className="w-full"
        />

        <label className="text-sm">10th Percentage (%)</label>
        <Input
          required
          value={formData.tenthPercent}
          onChange={handleChange("tenthPercent")}
          className="rounded-md"
        />

        <label className="text-sm">12th Percentage (%)</label>
        <Input
          required
          value={formData.twelfthPercent}
          onChange={handleChange("twelfthPercent")}
          className="rounded-md"
        />

        <Button
          type="primary"
          htmlType="submit"
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          Enroll Now
        </Button>
      </form>
    </div>
  );
};

export default CourseEnrollForm;
