const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "94716088983"
global.ownername = "Vidun Dinsara"
global.ytname = "YT: AyushBotz.inc"
global.socialm = "GitHub: Ayushpandey023"
global.location = "Sri Lankan"

global.ownernumber = '94716088983'  //creator number
global.ownername = 'Vidun Dinsara' //owner name
global.botname = 'DARK-KHAN' //name of the bot

//sticker details
global.stickername = '💙𓆩‎✘DARK KHAN✘𓆪_✰'
global.packname = '© Generated By Dark Khan Bot'
global.author = 'Dark Khan'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Ayush inc."

//theme link
global.link = '' // if you want to send bot reply with group link then put your link here 🌿 
global.support = 'https://chat.whatsapp.com/DYp7FwfL9xsKURihcdT0l8'
//custom prefix
global.prefa = ['.'] //put here your fav prefix like +×÷= etc.

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = true //auto read messages
global.autobio = false //auto update bio
global.anti92 = true //auto block +92 
global.autoread_status = true //auto view status/story



//reply messages
global.mess = {
    done: 'Done!✅',
    pm: '*sorry!* Bot wont work in private \n\n https://chat.whatsapp.com/FoS7pSPtfMqBuoireK4aAJ',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
