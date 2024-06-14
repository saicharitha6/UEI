// //+page.ts
// import type { RequestEvent } from '@sveltejs/kit';

// import ExcelJS from 'exceljs';

// export async function POST(request: RequestEvent): Promise<Response> {
//   const formData = JSON.parse(request.locals as string);
  
//   // Create Excel workbook
//   const workbook = new ExcelJS.Workbook();
//   const sheet = workbook.addWorksheet('Form Data');
  
//   // Add headers
//   sheet.addRow(['Field', 'Value']);
  
//   // Add form data to the sheet
//   Object.entries(formData).forEach(([field, value]) => {
//     sheet.addRow([field, value]);
//   });
  
//   // Generate Excel file buffer
//   const buffer = await workbook.xlsx.writeBuffer();
  
//   // Return Excel file as response
//   return {
//     status: 200,
//     headers: {
//       'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
//       'Content-Disposition': 'attachment; filename="form_data.xlsx"'
//     },
//     body: buffer
//   };
// }
