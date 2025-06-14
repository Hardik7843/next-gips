/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

// const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEET_CONTACT_FORM;
export async function sendBookingEnquiry(formData: any) {
  // console.log("formData: ", formData)
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbz6hDMVahsUWjfCaNGwO0n-xJmm_F6TxCYA6NUEqnpmPCGNOoT7BcLLmryS2m2dXtJEwg/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );
  // console.log("response: ", response)

  // const result = await response.json();
  console.log("response: ", response.statusText);
  return;
}
