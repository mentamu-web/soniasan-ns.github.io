require("dotenv").config();
const { google } = require("googleapis");
const config = require("./config");

// Google Sheets認証
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: config.googleServiceAccountEmail,
    private_key: config.googlePrivateKey,
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

// ヘッダー行を書き込む
async function writeHeaders() {
  await sheets.spreadsheets.values.update({
    spreadsheetId: config.spreadsheetId,
    range: "シート1!A1",
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          "Date",
          "曜日",
          "コース",
          "DAY",
          "タイトル",
          "目標Tips",
          "実施Tips",
          "Status",
          "学習時間（目標）",
          "学習時間（実績）",
          "メモ",
        ],
      ],
    },
  });
  console.log("ヘッダー書き込み完了！");
}

async function main() {
  try {
    await writeHeaders();
    console.log("完了！");
  } catch (error) {
    console.error("エラー:", error.message);
  }
}

main();
