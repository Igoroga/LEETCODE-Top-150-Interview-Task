let s = [1,2,3,4,5,6,7,8]
// [1,2,2,2, , 6,7,8]
s.splice(2, 3, 2, 2)

console.log(s);