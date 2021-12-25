// What is an anagram? Well, two words are anagrams of each 
// other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word 
// from a list. You will be given two inputs a word and an array 
// with words. You should return an array of all the anagrams or 
// an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) =>
//  ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

// // // first attempt
// function anagrams(word, words) {
//     dict = {}
//     for (i = 0; i < word.length; i++) {
//         if (dict[word[i]] == undefined) {
//             dict[word[i]] = 1
//         } else {
//             dict[word[i]] += 1
//         }
//     }
//     arr = []
//     dict2 = {}
//     for (i = 0; i < words.length; i++) {
//         for (j = 0; j < words[i].length; j++) {
//             if (dict2[words[i][j]] == undefined) {
//                 dict2[words[i][j]] = 1
//             } else {
//                 dict2[words[i][j]] += 1
//             }
//         }
//         var keyValues = []
//         var keyValues2 = []
//         for (var key in dict) {
//             keyValues.push([ key, dict[key] ])
//         }
//         for (var key in dict2) {
//             keyValues2.push([ key, dict2[key] ])
//         }
//         if (JSON.stringify(keyValues.sort()) == JSON.stringify(keyValues2.sort())) {
//             arr.push(words[i])
//         }
//         dict2 = {}
//     }
//     return arr
// }

// optimized 
function anagrams(word, words) {
    word = word.split('').sort().join('');
    return words.filter(function(v) {return word == v.split('').sort().join('');});
  }

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) // => ['aabb', 'bbaa']

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))// => ['carer', 'racer']

console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']))// => []

