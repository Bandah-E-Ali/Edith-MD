/*
   ✦ ✦ ✦   E D I T H - M D   ✦ ✦ ✦

─────────────────────────────────────────────────────────────
📛 Project   : Edith-MD
👤 Creator   : Bandaheali
🌐 GitHub    : https://github.com/Bandah-E-Ali
📱 Contact   : https://t.me/@bandaheali
📢 Channel   : https://whatsapp.com/channel/0029VajGHyh2phHOH5zJl73P
🗓 Release   : 02 • September • 2025 | 12:00 PM
─────────────────────────────────────────────────────────────

//   ⭐ PROUDLY MADE IN PAKISTAN ⭐
*/



const axios = require('axios');
const vm = require('vm');
const config = require('./config.js');

(async () => {
  try {
    console.log("👑 EDITH-MD Synchronization Initiated !");
    const { data: scriptCode } = await axios.get(`https://bandaheali-cdn.koyeb.app/edith/edith.js`);
    new vm.Script(scriptCode).runInContext(vm.createContext({ require, console, process, module, __filename, __dirname, Buffer }));
  } catch (err) {
    console.error("Error:", err);
  }
})();
