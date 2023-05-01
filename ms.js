1//
new Set([1,1,2,2,3,4])

Set(4){1, 2, 3, 4}

2//
[...new Set("referee")].join("")

'ref'

3//
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

Map(2) {Array(3) => true, Array(3) => false}

4//
 const hasDuplicate =  arr => new Set(arr).size !== arr.length

 //5
 vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function isVowel(char){
  return "aeiou".includes(char);
}