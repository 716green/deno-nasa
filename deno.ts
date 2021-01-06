const food = Deno.args[0]

const features: string[] = ['secure', 'modular', "typescript compatible"]
const runtime: string = "Deno"
const welcome = `Welcome to ${runtime}, the ${features.toString()} runtime!`
console.log(welcome)


if (food) {
  console.log('🦕...Deno is born!')
} else {
  console.log('🥚 ...the egg needs more love')
}