function detectError(string) {
    let nums = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] == 0 || string[i] == 1) {
            nums.push(string[i]);
        }
    }
    if (nums.length === string.length) {
        return false;
    }
    return true;
}



module.exports = detectError;
