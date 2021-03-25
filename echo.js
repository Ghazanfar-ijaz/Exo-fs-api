/*
node echo.js hello hard fork
hello hard fork
Affiche à l'écran les strings passées en arguments.
*/

if (process.argv.length >= 3) {

  for (let i = 2; i < process.argv.length; i++) {
    console.log(`${process.argv[i]}`)
  }
}