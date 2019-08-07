// Common string method

let email = 'mario@thenetninja@co.uk';

// Fungsi lastIndexOf untuk menemukan huruf keberapa dari string n terakhir
let result = email.lastIndexOf('n')
console.log(result)

// Method slice adalah memotong huruf berdasarkan jumlah yang ditentukan
let resultSlice = email.slice(0,5)
console.log(resultSlice)

let resultSubstr = email.substr(4,10)
console.log(resultSubstr)