const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1BUYzZCeDFoSWZnSGNZa1ZjbHcyNTFGZG8yMGplVElBMjF1WDdFT0RrVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVktrK2NFZW1JR2doQi8vWm5aRGJZL0hkZmk3QWQxOWFVZmdMRmo5UXZoVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSjR5dEd4bmJjY2JGdnVocmJLdU5lSHdrTEVpWFZoVnRKc20wQVhHT0VjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBVHVCMzZDY0I2TUU3TlNUWEpmQUd6OE1IaVA0bDBTdDNXR3MxbndaK0FVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFJZzVDNTlldEduU29ZZkVnbXY2RWtISVFwZGFabDFScjZzSDExc0JOMk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjV0Qk1laVpoeXAyTnJOWlhFbzRBR0hGYzJxUWdyNHZZZ3dacGhDQ2YveHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUpzVkVjd3U5R0VWN0VUdkdlSHBrNU9rNGtibXVCR25TazFoaEIrbUIxUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2FGay9ZZzlPR1lLZEdtSjFqdFNRajRrdTJ2VExka3J1ZHBJT0drelVIWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNrRG1iSTUraGc5SDNWbTUrRjJrMlZFTzhvanFyYkRkbmVOOU8vcXNZdzJoM2ttVllualFZck1DMWZsd2ZVbFRGckZ6YUpkVjZxd2ROTUVNOXVWOWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc4LCJhZHZTZWNyZXRLZXkiOiI2ZVY3QlFpcmZOSzU0Rm1KbDRzT09lU2JHdWdONEdQQTlOSFNmbUZybjh3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJFRElUSDEyMyIsIm1lIjp7ImlkIjoiMjM0ODE0NzM5NDIyNDoyNkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIxMTYwNDg2ODIyMjk4MDoyNkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05LZDF1WUNFTnZ4NHNRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkYrR1hveStiekNodjErVGxCeWRSVUVoZUxaRHdjdDFlYUVxR3NIOXBnQVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkJmTHBneXlOYldiWjBiMXdUdi9KUFhBdGRqRllxaU43S2c1c3FTdENpak9LTS8zaEZYVkl1MFhaeXNCcXE4ZVA0dFAwNER4ZmNyNzJaL1ZjNkRLOUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLK3JXd3JlRWxoYVN1WVF3NVFNSXFjL0xKVk9aMlVTdUJhajhXUUlqb3J6bXdQTENaUitNWG1nTkJiMU44eTlTK1pwYkVpaFIrS09ZQ25BZmRCQW5pZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNDczOTQyMjQ6MjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmZobDZNdm04d29iOWZrNVFjblVWQklYaTJROEhMZFhtaEtockIvYVlBRiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU0ODM5MjYxLCJsYXN0UHJvcEhhc2giOiIyRzRBbXUifQ==",
  START_IMG: process.env.START_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS EDITH-MD*",
  WELCOME: process.env.WELCOME || "false",
  ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
  PREFIX: process.env.PREFIX || ".",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  BOT_NAME: process.env.BOT_NAME || "kunlez107",
  STICKER_NAME: process.env.STICKER_NAME || "EDITH-MD",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "2348147394224",
  OWNER_NAME: process.env.OWNER_NAME || "kunlez107",
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Bandaheali*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *EDITH-MD*⚡",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  AUTO_REACT: process.env.AUTO_REACT || "false",
  ANTI_BAD: process.env.ANTI_BAD || "false",
  MODE: process.env.MODE || "public",
  ANTI_LINK: process.env.ANTI_LINK || "false",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  READ_CMD: process.env.READ_CMD || "false",
  DEV: process.env.DEV || "2348147394224",
  ANTI_VV: process.env.ANTI_VV || "false",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
  ANTI_DELETE: process.env.ANTI_DELETE || "false",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
};
