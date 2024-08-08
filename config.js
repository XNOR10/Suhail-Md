const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="adithyashavinda10@gmail.com"
global.location="Asia/Colombo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fd251f1dcc5c1712693eb.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝗫.𝗡.𝗢.𝗥 - 𝗠𝗗" 


global.devs = "94703090240" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94703090240";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '4'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_21_08_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDg0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDcwLFxuICAgICAgICA4MixcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NixcbiAgICAgICAgNyxcbiAgICAgICAgMTI0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMzksXG4gICAgICAgIDM3LFxuICAgICAgICA2NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDkxLFxuICAgICAgICAxODUsXG4gICAgICAgIDg3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDYwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDYxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNixcbiAgICAgICAgNjIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjExLFxuICAgICAgICA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDkwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDc2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MixcbiAgICAgICAgMTA2LFxuICAgICAgICA1LFxuICAgICAgICA3NyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidmkxdTFpMGI0NGhYMERzQWRvM3RSVkJmL3dZT1JaQ01mOTJobHBZR1lRWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiclN2Y2F2SlhRVy10N1BFckZfdzMzd1wiLFxuICBcInBob25lSWRcIjogXCIyNmZlZjdkYi1kNDM3LTRiNzYtYTlmMC1mNWRmMTM3MjBkNzZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgMTE0LFxuICAgICAgODEsXG4gICAgICAyMjIsXG4gICAgICAxODgsXG4gICAgICA1NSxcbiAgICAgIDE1OSxcbiAgICAgIDE3OCxcbiAgICAgIDE1OCxcbiAgICAgIDE3MyxcbiAgICAgIDE0MCxcbiAgICAgIDYzLFxuICAgICAgMTg3LFxuICAgICAgMzEsXG4gICAgICAxMyxcbiAgICAgIDIyNCxcbiAgICAgIDIxMyxcbiAgICAgIDE5NCxcbiAgICAgIDEwNixcbiAgICAgIDE0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MCxcbiAgICAgIDE2MCxcbiAgICAgIDE3MCxcbiAgICAgIDExMCxcbiAgICAgIDExMSxcbiAgICAgIDE3MCxcbiAgICAgIDIyNixcbiAgICAgIDcxLFxuICAgICAgMjU0LFxuICAgICAgOTIsXG4gICAgICAxMzQsXG4gICAgICAxMixcbiAgICAgIDI1MyxcbiAgICAgIDE5NixcbiAgICAgIDM5LFxuICAgICAgNzIsXG4gICAgICAxNyxcbiAgICAgIDQ1LFxuICAgICAgMjI5LFxuICAgICAgMTIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjY4RVlRQVRYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcwMzA5MDI0MDo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlguTi5PLlJcIixcbiAgICBcImxpZFwiOiBcIjIxMzUxNjE0NTQxNDE1NDo1MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQVGZncHdCRU9MZzA3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitpQ3lzOVdQTW1KMFlxL2xscnREMXJlT0MrMjg5UFJsdjZoN2h1RkdMUnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVndjeEhDUFFEUmtUSnZaZ1N5dlhVQWpjK2dsT3htUHQzQlJFRE1OVXFiTEhuM285NTlOajFId3VuaFFXenlsaVhPNlhtRXFPYXljWnJjVFZzOXVGQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZzlYemc4SVNRTFpVUFNTZDlZcG9WV0VPZHVsNXFnYXlWV01KcFozeHJiSDdkVkJ2NVZGWTFHaFpFOEk3MGl3SWdNRnQ0S0ZMVnVCbDY0UHl3aG9oRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MDMwOTAyNDA6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMxMzQwNTNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "𝗫.𝗡.𝗢.𝗥 - 𝗠𝗗", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝗫.𝗡.𝗢.𝗥 - 𝗠𝗗 』```, //*『 ғᴏʟʟᴏᴡ  • 𝗫.𝗡.𝗢.𝗥 - 𝗠𝗗 』*\n https://linktr.ee/x.nor10", 
 
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝗫.𝗡.𝗢.𝗥 - 𝗠𝗗",
  ownername:process.env.OWNER_NAME|| "𝗫.𝗡.𝗢.𝗥",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝗫.𝗡.𝗢.𝗥"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
