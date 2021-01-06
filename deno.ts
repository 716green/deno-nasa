const food = Deno.args[0]
// deno run deno.ts 'pterodactyl eggs'

const features: string[] = ['secure', 'modular', "typescript compatible"]
const runtime: string = "Deno"
const welcome = `Welcome to ${runtime}, the ${features.toString()} runtime!`
console.log(welcome)


if (food) {
  console.log(`🦕...Deno ate ${food} and is born!`)
} else {
  console.log('🥚 ...the egg needs more love')
}