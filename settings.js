/*
===================================================================================================
π§ββοΈγ½οΈ πΏππΌπ πππΌπΏππ ππΌπ π π± πγ½οΈ
   ____                           _   _ _ _       
  / __ \                         | \ | (_) |      
 | |  | |_   _  ___  ___ _ __    |  \| |_| |_   _ 
 | |  | | | | |/ _ \/ _ \ '_ \   | . ` | | | | | |
 | |__| | |_| |  __/  __/ | | |  | |\  | | | |_| |
  \___\_\\__,_|\___|\___|_| |_|  |_| \_|_|_|\__,_|
                                                  
                                                  BY Hansamala
===================================================================================================
*/

const fs = require('fs')
const chalk = require('chalk')



//π if you need seen massage use " true "
global.READ_MASSAGE = 'false'
//π enable desable Girls Voice Reply
global.VOICE_REPLY =  'true'
// You Bots Owner Number 
global.owner = ['94740203415'] 
//π Your Caption ( Image Video )
global.cap = 'Β© πΆπ΄π½π΄ππ°ππ΄π³ π±π π³ππ°πΊ ππ·π°π³πΎπ Β²β°Β²Β³'
//π Do you want show time on your bio use "on" want desable use "off"
global.AUTO_BIO =  'off'
//π Inbox massage block PM block
global.INBOX_BLOCK =  'off'
//π Auto react 
global.AUTO_REACT =  'true'
//π Bad word Auto delete ( you must add bad words )
global.ANTI_BADWORD =  'true'
//π Your Bot Name
global.botnma =  'Η«α΄α΄α΄Ι΄ Ι΄ΙͺΚα΄' 
//π Your name
global.ownernma =  'HANSAMALA' 
//π Sticker package name
global.packname =  'π§ββοΈππ₯ππ ππππππ' 
//π Sticker Author Name
global.author =  '_HANSAMALA_' 
//π Kick And Auto Delete Group link Senders
global.antilink =  'false'
//π Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCK !!!'
//π Owner React Imoji
global.OWNER_REACT =  'πΌ'
global.BAD_KICK_MSG = '*Bad word detect !*'
//π URL.button 1 name
global.BUTTON1 = 'πΆπππππ'
//π URL button 2 name
global.BUTTON2 = 'πππππππ'
//π Button 1 url 
global.BUTTON1_URL = 'https://github.com/shashikabot/'
//π Button 2 url
global.BUTTON2_URL = 'https://youtube.com/@musicparadise5738'
//π Your Add Massage 
global.ADD_MSG = '*β Success add Group*' 
//π Your Kick Massage 
global.KICK_MSG = '*β Success Remove from Group*' 
//π Song Download Massage 
global.SONG_DOWN = '```β¬οΈ Downloading Your Song...π₯```' 
//π Song Uplode massage 
global.SONG_UP = '```β¬οΈ Uploding Your Song...π€```'
//π 212 Number block
global.NUMBER_212_BLOCK = 'true'
//π Menu imoji 
global.MENU_IMOJI = 'ποΈ|πͺ'
//π Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//π Removebg Api key
global.REMOVE_BG_API = ''
//π Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = process.env.SEX_VIDEO_DOWNLOAD || 'true'
//π Change Bot Language (English-' EN ', Sinhala , ' SI ' , Tamil - ' TL ')
global.LANG = 'EN'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://te.legra.ph/file/3e57249993356ba15109f.jpg`
//π Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || ``
//π Welcome Mesaage
global.WELCOME = process.env.WELCOME || ``
//π welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || ``
//π Goodbye message 
global.GOODBYE = process.env.GOODBYE || ``
//π Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || ``
//π Send Welcome ( true or false )
global.SEND_WELCOME = process.env.SEND_WELCOME || false
//π Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//π Desable PM Block
global.NO_BLOCK = ["94740203415"]







//MORE
global.zenzapi = '01ABEB1E11'
global.tiktokthub = 'https://i.ibb.co/z75q5tn/maxresdefault.jpg'
//other
global.pemilik = ['94740203415'] //Change  it , ΰΆΰΆΆΰΆ§ ΰΆΰ·ΰΆΈΰΆ­ΰ· ΰΆ±ΰΆΈΰ· ΰ·ΰ·ΰΆ±ΰ·ΰ· ΰΆΰΆ»ΰΆ±ΰ·ΰΆ±
global.premium = ['94740203415'] //Change it ΰΆΰΆΆΰΆ§ ΰΆΰ·ΰΆΈΰΆ­ΰ·ΰΆ±ΰΆΈΰ· ΰ·ΰ·ΰΆ±ΰ·ΰ· ΰΆΰΆ»ΰΆ±ΰ·ΰΆ± 
global.pengguna = '_Mr.Hansamala_' // Your name ΰΆΰΆΆΰ· ΰΆ±ΰΆΈ 
global.sessionName = 'session'
global.prefix = ['#','!','.'] 
global.sp = 'π΅'


global.mess = {
    success: 'β Done!',
    admin: '*Only admins can use this command !*',
    botAdmin: '*Please admin the bot first !*',
    owner: '*Sorry, this command is only for the owner !*',
    group: '*This command can only be used in groups !*',
    private: '*This command can only be used in Inbox !*',
    bot: '*This command can only be used by bot number !*',
    wait: '*β² Please Wait ...*',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    BLOCK_CMD_MSG : '*β οΈ This Command is Block By Owner*',
    BLOCK : '',
    UNBLOCK : '',
    KICK : '',
    ADD : '',
    LEAVE : '',
    PROMOTE : '',
    DEMOTE : ''
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    




//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

global.thumb = fs.readFileSync('https://te.legra.ph/file/8be699bf71bfa93acac3f.jpg')
global.alivelogo = `https://te.legra.ph/file/8be699bf71bfa93acac3f.jpg`
global.imgalive = fs.readFileSync('https://te.legra.ph/file/8be699bf71bfa93acac3f.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
