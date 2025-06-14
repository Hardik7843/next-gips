/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

// const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_SHEET_CONTACT_FORM;
export async function setData(formData: any)
{
  // console.log("formData: ", formData)
  const response = await fetch('https://script.google.com/macros/s/AKfycbx4Da64w6aXKxmecQ8dbosNsHP6Y4omqjuEzyG8MtGOstmxQSFFDaOZEfkc9OSyz1xaBQ/exec', {
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
