function decimalToBinary(N) {
    let binaryArr = [];
    let num = N;
    while (num > 0) {
        num /= 2;
        if (Number.isInteger(num)) {
            binaryArr.push(0);
        } else {
            binaryArr.push(1);
            num = Math.floor(num);
        }
    }
    return binaryArr.reverse().join("");
}

console.log("this is the binary", decimalToBinary(10));

function binaryToDecimal(string) {
    let binaryArr = string.split("");
    binaryArr.reverse().map((val, i, arr) => {
        arr[i] = +arr[i];
    });
    let num = 0;
    for (var i = 0; i < binaryArr.length; i++) {
        num += binaryArr[i] * Math.pow(2, [i]);
    }
    return num.toString();
}

console.log("this is the decimal", binaryToDecimal("1010"));
