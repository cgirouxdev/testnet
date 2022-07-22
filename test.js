function testBot(username, displayName) {
   return /(\[bot\]|-bot)$/i.test(username) || /\(bot\)$/i.test(displayName || '')
}

console.log('HELLO!');