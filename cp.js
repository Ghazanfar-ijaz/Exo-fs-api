/*
Copie src.txt vers dst.txt.
Gestion d'erreur si pas le bon nombre d'arguments.
Gestion d'erreur si src.txt n'existe pas.
*/

const fs = require('fs')

// verfier la cmd line
if (process.argv.length !== 4) {
  console.log('usage: node cp.js src.txt dst.txt')
  process.exit(1)
}

// check if file exists
if (!fs.existsSync(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} does not exist`)
  process.exit(1)
}

const copy = fs.copyFileSync(process.argv[2], process.argv[3])

console.log(`${process.argv[2]} was copied to ${process.argv[3]}`)
