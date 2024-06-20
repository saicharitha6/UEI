// src/routes/api/submitForm.ts

import { json,type RequestHandler } from '@sveltejs/kit';
import fetch from 'node-fetch';

interface FormSubmitData {
  email: string;
  organizationName: string;
  organizationType: string;
  website: string;
  industryField: string;
  contact1: string;
  contact2: string;
  ceoDetails: string;
  ueiAlliance: string;
  logo:any;
  termsAccepted: string;
  referral: string;
  // Add more fields as needed
}

export async function submitForm(formData: FormSubmitData) {
  try {
    // Modify the URL to your Google Sheets endpoint
    const url = 'https://script.google.com/macros/s/AKfycbx1vwEBSUPu7BvchAP3UvIK04UYBqqYN3AV2GRULLIQN5oupbfZOBiFXFtzZ-zFFb_wMQ/exec';
    const headers = {
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify(formData);

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body,
    });

    if (!response.ok) {
      throw new Error('Failed to submit form data');
    }

    const responseData = await response.json(); // Assuming the response from Google Sheets API is JSON

    return { success: true, data: responseData };
  } catch (error) {
    console.error('Error submitting form:', error);
    throw new Error('Failed to submit form data');
  }
}

export const post: RequestHandler = async (request) => {
  try {
    const formData = request.locals as FormSubmitData;

    const response = await submitForm(formData);

    return json(response, { status: 200 });
  } catch (error) {
    console.error('Error in API:', error);
    return json({ error: error }, { status: 500 });
  }
};
