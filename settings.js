require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6281313306916"
global.namaowner = "Mbb Reall"
global.namaowner2 = "Mbb Reall"

//======== Setting Bot & Link ========//
global.namabot = "BOTZ MBB REAL" 
global.namabot2 = "BOTZ MBB REAL V1"
global.version = "v0.0.1"
global.foother = "Created By mbb"
global.waowner = "https://wa.me/6281313306916"
global.linkgc = 'https://shorturl.at/WJfql'
global.linkgc2 = "https://chat.whatsapp.com/EI3GsdPlJz37wWKJd3hx39"
global.linkqris = "https://telegra.ph/file/9fb584dac30b4d00e9a90.jpg"

//========== Setting Event ==========//
global.autoread = false
global.anticall = false
global.autoreadsw = false
global.owneroff = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 8500
global.delayjpm = 8000

//========== Setting Foto ===========//
global.imgreply = fs.readFileSync("./media/Reply.jpg")
global.imgmenu = fs.readFileSync("./media/Menu.jpg")
global.imgslide = fs.readFileSync("./media/Slide.jpg")

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi "Belum Tersedia"
global.dana = "083142687832"
global.gopay = "Belum Tersedia"
global.ovo = "Belum Tersedia"
global.qris = fs.readFileSync("./media/Qris.jpg")
                             
//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Done Bang ✅", 
"wait": "⏳Memproses . . .", 
"group": "Command Ini Hanya Untuk Didalam Grup", 
"private": "Command Ini Hanya Untuk Di Private Chat", 
"admin": "Command Ini Hanya Untuk Admin Grup", 
"adminbot": "Command Ini Dapat Di Gunakan Ketika Bot Menjadi Admin", 
"owner": "Maaf Command Ini Hanya Untuk Bang *Cima Reall.*"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})