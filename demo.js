/* eslint-disable @typescript-eslint/no-unused-vars */
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    data.fullName,
    data.email,
    data.primaryContact,
    data.city,
    data.pincode,
    data.address,
    data.birthDate,
    data.website,
    data.alternatePhone,
    data.investmentAmount,
    data.meetingDate,
    data.meetingTime,
    data.date, // keep original
    data.time, // keep original
  ]);
  return ContentService.createTextOutput(
    JSON.stringify({ result: "success" })
  ).setMimeType(ContentService.MimeType.JSON);
}
