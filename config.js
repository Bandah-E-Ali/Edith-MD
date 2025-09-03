const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ09GV1Rnd0o4b2pvaXF5Mng5dGNaYlJ3SlN0bTZPUnBRcEdkTXZERFVuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiay9WT1V1RU9IdUIxN0JHcFp0T0EvREhENGU1OTJsVFg4a3daSG5GTmhDMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5R1FZcno5cWhjc3pWTVpOeUNmd0tDOG1vR1FqSmVPa1p2RjBWZjFwOGs0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlam8wOXJBWEgvNUpqR3BqajJmWlZQcENDaEI5QkxmTEtSajRPc0Y2c1hBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVPMU5YVmZqejhwd1RkaVNqZlBzUUJJZ0pCdHo1S0xDZlJLbjFBODFzM0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImwrdVNHTzhCVU54WkNMMk1SdE0xNWVKVjJxOEVYdUIyeHJjT2lVNzNKR3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUFDM01BUUFPcDVycFBnUUtURHQyczVXazN4MWFWZU4vbmJYU2hmTlZHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTlCSUt4TURDY0VNbnpUbEpobFNUOXZzdURwb1BCS1dQbWhTekJ6ZlNRQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjIzYm1jQXd5aVptYm01dTNpeUdDck1aN2RkKzdSWnhGalgwV2N6N2NHWmtOMHYxQnkvekxOTDMrTDFuQ2UxMXk2NVFZSjdHUTdjMDk4UERsMVJFYWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDIsImFkdlNlY3JldEtleSI6IkVNZSsrWFRrYlp6ZlJuOWo0UGVYZVk1QVF6TjdsT2s1eTBvdzhtMEl3d2M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IlEySk03Tlo1IiwibWUiOnsiaWQiOiI5MjMzMjc1NDI1NjU6NUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjM2MTU1NjcyMjgxMTcyOjVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKL3hnNVFFRU1ESDRjVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOSmZJeS9NaVJjM1NESHU4bjRscW1NSEJ1Yy9TWWV5TnB6bmFZZnpaRkFNPSIsImFjY291bnRTaWduYXR1cmUiOiJsWk9oK0w4dXJoT2NCUGhrSERnbEQ2ZEFSc2NsMnltVXorKzc4SnVBZ04rMUExREl6cDVFTXQxZVlXY0Mrc2hIZ3J3UkNUcHZDTmJxZkxTWEhEV3BEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOVh1eFB1REY2Vk9uSEdydng0UGNuZGZZZUE3V2g4Tkk4NURtU0VlWWI0c01NT1MxQUU2d0QrcmtueGJEYmV4SFc1eDhGS2Z0M3pwaVh4MkdCWHdpaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzMjc1NDI1NjU6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUU1h5TXZ6SWtYTjBneDd2SitKYXBqQndiblAwbUhzamFjNTJtSDgyUlFEIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTY5MTQ2MjgsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSJ9",
  START_IMG: process.env.START_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS EDITH-MD*",
  WELCOME: process.env.WELCOME || "false",
  ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
  PREFIX: process.env.PREFIX || ".",
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  BOT_NAME: process.env.BOT_NAME || "EDITH-MD",
  STICKER_NAME: process.env.STICKER_NAME || "EDITH-MD",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923253617422",
  OWNER_NAME: process.env.OWNER_NAME || "Bandaheali",
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Bandaheali*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *EDITH-MD*⚡",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  AUTO_REACT: process.env.AUTO_REACT || "false",
  ANTI_BAD: process.env.ANTI_BAD || "false",
  MODE: process.env.MODE || "public",
 BOTMODE: process.env.BOTMODE || "button",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_MEDIA: process.env.ANTI_MEDIA || "false",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  READ_CMD: process.env.READ_CMD || "false",
  DEV: process.env.DEV || "923253617422",
  ANTI_VV: process.env.ANTI_VV || "false",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
};
