let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • *GOPAY [081327206078]*
│ • *Telkomsel [081216795577]*
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
