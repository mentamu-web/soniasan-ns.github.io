require("dotenv").config();

module.exports = {
  // Notion
  notionApiKey: process.env.NOTION_API_KEY,
  notionLearningDbId: process.env.NOTION_LEARNING_DB_ID,

  // Google Sheets
  spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
  googleServiceAccountEmail: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  googlePrivateKey: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
};
