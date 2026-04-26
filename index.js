/*
   ✦ ✦ ✦   E D I T H - M D   ✦ ✦ ✦

─────────────────────────────────────────────────────────────
📛 Project   : Edith-MD
👤 Creator   : Bandaheali
🌐 GitHub    : https://github.com/Bandah-E-Ali
📱 Contact   : https://t.me/@bandaheali
📢 Channel   : 
🗓 Release   : 12 • Aprail • 2026 | 12:00 PM
─────────────────────────────────────────────────────────────
 
//   ⭐ PROUDLY MADE IN PAKISTAN ⭐
*/

// Bnao Dost Aur Dushman Ko Dhnwan Tb Hoja Asli Ke Pehchan
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const config = require("./settings"); 

const LOCAL_FILE = path.join(__dirname, "cdn-edith.js");

(async () => {
  try {
    const url = `${config.CDN}/bandaheali/edith.js`;
    
    const { data } = await axios.get(url, {
      timeout: 15000
    });

    if (!data) throw new Error("Empty script received");
    fs.writeFileSync(LOCAL_FILE, data);
    if (require.cache[require.resolve(LOCAL_FILE)]) {
      delete require.cache[require.resolve(LOCAL_FILE)];
    }

    require(LOCAL_FILE);

  } catch (err) {
    console.error("❌ CDN Loader Error:", err.message);
    if (fs.existsSync(LOCAL_FILE)) {
      
      require(LOCAL_FILE);
    }
  }
})();
