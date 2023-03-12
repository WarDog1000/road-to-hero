/* **********     Curso JavaScript: 50. Sets - #jonmircha     ********** */

const set = new Set([1, 2, 3, 3, true, false, "hola", "Hola", true, false]);
console.log(set);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(3);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add("hola");
set2.add("Hola");
set2.add({});
set2.add([1]);
set2.add([1]);
console.log(set2);
console.log(set2.size);

console.log(`Recorriendo set`);
for (item of set) {
  console.log(item);
}

console.log(`Recorriendo set2`);
console.log(set2.forEach((item) => console.log(item)));

let arr = Array.from(set2);
console.log(arr);

set2.delete(1);
console.log(set2);
console.log(set2.has("hola"));
console.log(set2.has(1));

set2.clear();

console.log(set2);
