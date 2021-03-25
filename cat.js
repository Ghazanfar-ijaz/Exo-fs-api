/*
node cat.js file.txt
Affiche le contenu de file.txt sur l'écran Gestion d'erreur si pas le bon nombre d'arguments.
Gestion d'erreur si file.txt n'existe pas.
*/

const fs = require('fs')

// verfier la cmd line
if (process.argv.length !== 3) {
  console.log('usage: node cat.js file.txt')
  process.exit(1)
}

// check if file exists
if (!fs.existsSync(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} does not exist`)
  process.exit(1)
}

const txt = fs.readFileSync(process.argv[2], 'utf-8')

console.log(txt)