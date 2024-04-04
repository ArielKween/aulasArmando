let idade = 18;
let paisPresentes = true;

console.log(`Pode viajar 1: ${((idade >= 18 || paisPresentes == true))}`);
console.log(`Pode viajar 2: ${((idade > 18 || paisPresentes == true))}`);
console.log(`Pode viajar 3: ${((idade > 18 || paisPresentes == false))}`);

let comprouBilhete = true;
console.log(`Pode viajar 4: ${((idade > 18 || paisPresentes == true) && comprouBilhete == false)}`);
console.log(`Pode viajar 5: ${((idade >= 18 || paisPresentes == false) && comprouBilhete == true)}`);
console.log(`Pode viajar 6: ${((idade >= 18 || paisPresentes == true) && comprouBilhete == true)}`);