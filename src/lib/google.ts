import "server-only";
import { google, type sheets_v4, type drive_v3, type calendar_v3 } from "googleapis";
import { CRM_TABS, AJPDB_DRIVE_IDS } from "./crm-meta";

export { CRM_TABS, AJPDB_DRIVE_IDS };

export function getOAuth2Client(accessToken: string, refreshToken?: string) {
  const oauth2Client = new google.auth.OAuth2(
    process.env.AUTH_GOOGLE_ID,
    process.env.AUTH_GOOGLE_SECRET
  );
  oauth2Client.setCredentials({
    access_token: accessToken,
    refresh_token: refreshToken,
  });
  return oauth2Client;
}

export function getSheetsClient(accessToken: string, refreshToken?: string): sheets_v4.Sheets {
  return google.sheets({ version: "v4", auth: getOAuth2Client(accessToken, refreshToken) });
}

export function getDriveClient(accessToken: string, refreshToken?: string): drive_v3.Drive {
  return google.drive({ version: "v3", auth: getOAuth2Client(accessToken, refreshToken) });
}

export function getCalendarClient(accessToken: string, refreshToken?: string): calendar_v3.Calendar {
  return google.calendar({ version: "v3", auth: getOAuth2Client(accessToken, refreshToken) });
}

export async function readCrmTab(
  accessToken: string,
  tabName: string,
  refreshToken?: string,
  range: string = "A1:ZZ1000"
) {
  const sheets = getSheetsClient(accessToken, refreshToken);
  const result = await sheets.spreadsheets.values.get({
    spreadsheetId: AJPDB_DRIVE_IDS.crm_spreadsheet,
    range: `${tabName}!${range}`,
  });
  const rows = result.data.values || [];
  if (rows.length === 0) return { headers: [], rows: [] };
  const [headers, ...dataRows] = rows;
  return { headers, rows: dataRows };
}
