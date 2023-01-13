module.exports = function toReadable (number) {
    const ones = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
     6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven',12: 'twelve', 13: 'thirteen', 14: 'fourteen', 
     15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen' };
    const tens = { 1: 'ten', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety' };
    let firstSymbol = number.toString()[0] 
    let secondSymbol = number.toString()[1]
    let thirdSymbol = number.toString()[2]
    let lastTwoChars = number.toString().slice(1)

    if (number <= 19) {
        return ones[number]
    } else if (number > 19 && number < 100) {
        if (number % 10 === 0) {
        return tens[firstSymbol] 
        } else {
        return tens[firstSymbol] + ' ' + ones[secondSymbol]
        }
    } else if (number > 99 && number % 100 === 0) {
        return ones[firstSymbol] + ' hundred'
    } else if (number > 99 && number % 10 === 0) {
        return ones[firstSymbol] + ' hundred ' + tens[secondSymbol]
    } else if (number % 100 < 10) {
        return ones[firstSymbol] + ' hundred ' + ones[thirdSymbol]
    } else if (number > 100 && number % 100 < 20 && number % 100 > 10) {
        return ones[firstSymbol] + ' hundred ' + ones[lastTwoChars]
    } else {
        return ones[firstSymbol] + ' hundred ' + tens[secondSymbol] + ' ' + ones[thirdSymbol]
    }
};
