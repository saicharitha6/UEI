import { GOOGLE_CLIENT_EMAIL } from "$env/static/private";
import { GoogleSpreadsheet } from "google-spreadsheet";
export const GOOGLE_SHEET_KEY =
  "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDL4ItmlUQhLQGH\nfTRBNT5W6zJElb2XoaFbeLmBmrNq2ixVpvkPg2Izx8eLJO4Y1ob6RAJKWiYi96g6\nfrgh5B2GhhvhVDWfTCHMjaodwRJ6H+tVW8A3WS4/GuaGVZSDO+jcO0Dk9bi/ft5n\nwbzNjjyOKFAZpkwYe6dBeBGMyfBrw/zM8RnX4xIMAh5jQ6rVn++PFyPErOfZKfkc\ndjB+4AHLxgsAQ46gd7EURIoKER01HR+MAwyCpskCj9/2p8jvDHl64t8YDGXsRr22\nmOso5Tp5/KEtiweHUSKiDgpzDAD6pbGjIbmPEgGyprxmAoZ+1feEwRs83ykujyYH\ntF++aXLPAgMBAAECggEARgb6CsHBdX2+dTnRrYYqw/MkQH+IcCFByaf1W+l1sAGB\nUeg4yxXPMMbxqL8GEzz4ftTGTqCZUdBsFa958pYmeBLvV52zj2Q4hcixAmhTPuRg\n0mBh7QDyTBWi0chqaws0aBToLNyj2Q6sOMpIXfh5n0CEhtLid1RdtjSWHpwsOu8o\nZtBQ6mQiPLqgY1+pyZWf7luVSWQF8y6ecJaNIfxThPUz9e8gj16H76eQ1SX7CtZ5\nqad8c8LdkqODme31gOvc2eSnKdpOuzNE7aeYh4dxWTHu1vJe9tCW0SnODUjxTBmb\nPa3cKkFL8P2nLCLIWGr8mARl0lGrWNoUwEaxg2zdpQKBgQD7fd7Cu/KtbENdokLK\nCIQ1vyBRuXwA4mgRNoSKDW6qBhzzSDBAEcR/TR3LCQHl60nqjAudk0Y1dhNcNR/u\nVdUwmkbwNXFDCwX1wILGSqjFwbrhCxL8xFp7B0Qo4KVwFB/Z6HwPlkTNrX1m92oc\n7M7Mdr2w7d2Q5/GUNCjNonUQVQKBgQDPiCom0EcFelBu1ofrL+hbMBtaV9OasSyY\nZYgjuj/w16NLKqKPbRCavPBYlkBWUfqYd7vomzeknmoCSWcP6IdyNSy8+KnJ6bhI\nFCY75Vx/z+FEHoUwi2QtADfhAJJPLbFd8CRfQlYerSvsvsE2Gh5bRK5Pq/zW2NCr\nsGBf8xbKkwKBgDKH5+pYuTn/NsnpgGH3tBjYfjXtfuzukNpkidzzNfkToV2Ac7Fr\n4H9zjzjsZmU8EW3/FZZjsQes4db1FaVduag6V2aMVmWSIXBvbddJyP9zHYl6ICaJ\njWSK4TcVbChI4t11yPeYydpJsZiuvbNyIVsTwKl8Ibir4e5VTJ2EtuDBAoGBAKxz\nrus/6bSAlnP0K0/hKIkV6bTiBIGoNrGQtVdS/q0o05WzoQ/kBoc+9831VRMl3kJy\nRKCe0tclmFu8GTtb86mQzFNfot+ZKrwimj7tcjb3TG6pme3j9uN6KfT735iSFLBF\nzEOoQR4OstBxFubZP16CLQMhnOH/my8ASqWQv+CnAoGBAKZywTQaWf3JOiaNoJAV\nwO6lupLmL/z0f/fv3KESD+7cLDnz3vkyXxO/aceNG+qL+m6bP0CA7oDM/EfF/2si\nrxvA//uO5Rk/Idza4bM7ClFc3mMjhhMTM3oE6qANM79LPbpa13X/+SxFjvj6xv1E\nJGu9Ax9twgUuLwfNuXPUvDzN\n-----END PRIVATE KEY-----\n";
export const SPREADSHEET_ID = "1f8DilIP7iXKy0lDGNQoBGvmwTgqiitSAOsI1TX5aO-Y"
export const appendToGoogleSheet = async (
    row: any,
    spreadsheet_id: string,
    sheet_id: string
  ) => {
    // Config variables
  
    // const SHEET_ID = String(process.env.CAREER_SHEET_ID);
    const CLIENT_EMAIL = String(GOOGLE_CLIENT_EMAIL);
    console.log({CLIENT_EMAIL});
    
    // console.log({ key: process.env.GOOGLE_SERVICE_PRIVATE_KEY });
    // const PRIVATE_KEY = String(process.env.GOOGLE_SERVICE_PRIVATE_KEY).replace(
    //   /\\n/g,
    //   "\n"
    // );
    // console.log({ PRIVATE_KEY });
  
    const doc = new GoogleSpreadsheet(spreadsheet_id);
    if (!row) return;
    if (!sheet_id) throw new Error("Sheet id required !");
    delete row.updated_at;
    delete row.id;
    const data = row as any;
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: GOOGLE_SHEET_KEY,
      });
      // loads document properties and worksheets
      await doc.loadInfo();
      const sheet = doc.sheetsById[sheet_id];
  
      return await sheet.addRow(data);
    } catch (e: any) {
      throw new Error(e);
    }
  };