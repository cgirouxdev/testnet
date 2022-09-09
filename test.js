function testBot(username, displayName) {
   return /(\[bot\]|-bot)$/i.test(username) || /\(bot\)$/i.test(displayName || 'HI!')
}


console.log('HELLO');
