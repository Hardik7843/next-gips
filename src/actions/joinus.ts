/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

// const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEET_CONTACT_FORM;
export async function sendInvestorEnquiry(formData: any)
{
  // console.log("formData: ", formData)
  const response = await fetch('https://script.google.com/macros/s/AKfycbwlpvCslHl-7Ive-77c48FiQ6AS56J_mjc_Y_ey-5I34_G345zgwnIZ7bNUFZHm8LUz_g/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
  // console.log("response: ", response)
  const result = await response.json();

  return result
}
