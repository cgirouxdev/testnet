function testBot(username, displayName) {
   return /(\[bot\]|-bot)$/i.test(username) || /\(bot\)$/i.test(displayName || '')
}

console.log('ONE', testBot('[bot]', 'bot'));
console.log('TWO', testBot( '-bot', 'bot'));
console.log('THREE', testBot('(bot)', '(bot)'));