import { appendToGoogleSheet, SPREADSHEET_ID } from "$lib/util/googlesheet.js";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    // TODO log the user in
    //   console.log(event);
    try {
      const data = await request.formData();
      const email = data.get("email");
      const organizationName = data.get("organizationName");
      const organizationType = data.get("organizationType");
      const website = data.get("website");
      const industryField = data.get("industryField");
      const contact1 = data.get("contact1");
      const contact2 = data.get("contact1");
      const ceoDetails = data.get("ceoDetails");
      const ueiAlliance = data.get("ueiAlliance");
      const termsAccepted = data.get("termsAccepted");
      const referral = data.get("referral");
      console.log({ email, organizationName, organizationType });
      await appendToGoogleSheet(
        {
          email,
          organizationName,
          organizationType,
          website,
          industryField,
          contact1,
          contact2,
          ceoDetails,
          ueiAlliance,
          termsAccepted,
          referral,
        },
        SPREADSHEET_ID,
        "1138178888"
      );
    } catch (error) {
      console.log(error);
    }
  },
};
