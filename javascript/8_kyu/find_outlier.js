// You are given an array (which will have a length of at least 3, 
// but could be very large) containing integers. The array is either 
// entirely comprised of odd integers or entirely comprised of even 
// integers except for a single integer N. Write a method that takes 
// the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)


// // first attempt
// function findOutlier(integers){
//     num1 = integers[0] % 2 == 0
//     num2 = integers[1] % 2 == 0
//     num3 = integers[2] % 2 == 0
//     if (num1 && num2 && num3) {
//         even = true
//         i = 2
//         while (even) {
//             i += 1
//             even = (integers[i] % 2 == 0)
//         }
//         return integers[i]
//     } else if (!num1 && !num2 && !num3) {
//         odd = true
//         i = 2
//         while (odd) {
//             i += 1
//             odd = (integers[i] % 2 != 0)
//         }
//         return integers[i]
//     }
//     if (num1 == num2 && num1 != num3) {
//         return integers[2]
//     }
//     if (num1 == num3 && num1 != num2) {
//         return integers[1]
//     }
//     if (num2 == num3 && num2 != num1) {
//         return integers[0]
//     }

// } 


function findOutlier(integers){

    even = integers.filter(e => e % 2 == 0)
    odd = integers.filter(o => o % 2 != 0)
    return even.length == 1 ? even[0] : odd[0]

 }


arr = [3, 7, 160, 1719, 19, 11, 13, -21]
console.log(findOutlier(arr))




