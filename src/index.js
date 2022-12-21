module.exports = function toReadable (number) {
  const arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  const firstDigit = number.toString()[0];
  const secondDigit = number.toString()[1];
  const thirdDigit = number.toString()[2];

  if (number === 0) {
    return 'zero';
  } else if (number.toString().length === 1) {

    return arr[number - 1];
  } else if (number.toString().length === 2 && +secondDigit === 0) {
    return +firstDigit === 1 ? 'ten' : +firstDigit === 2 ? 'twenty' : +firstDigit === 3 ? 'thirty' : +firstDigit === 4 ? 'forty' : +firstDigit === 5 ? 'fifty' : +firstDigit === 8 ? 'eighty' : arr[firstDigit - 1] + 'ty'
  } else if (number.toString().length === 2 && number < 14) {
    
    return number === 10 ? arr[number - 1] : number === 11 ? 'eleven' : number === 12 ? 'twelve' : 'thirteen';
  } else if (number === 15) {
    return 'fifteen';
  } else if (number.toString().length === 2 && number < 20) {

    return number !== 18 ? arr[number - 11] + 'teen' : 'eighteen';
  } else if (number.toString().length === 2 && number < 30) {


    return number !== 20 ? 'twenty ' + arr[secondDigit - 1] : 'twenty';
  } else if (number.toString().length === 2 && number < 40) {


    return number !== 30 ? 'thirty ' + arr[secondDigit - 1] : 'thirty';
  } else if (number.toString().length === 2 && number < 60) {

    return +firstDigit === 4 ? 'forty ' + arr[secondDigit - 1] : number < 50 ? arr[firstDigit - 1] + 'ty ' + arr[secondDigit - 1] : number === 50 ? 'fifty' : 'fifty ' + arr[secondDigit - 1];
  } else if (number.toString().length === 2 && number < 80) {

    return arr[firstDigit - 1] + 'ty ' + arr[secondDigit - 1]
  } else if (number.toString().length === 2 && number < 90) {

    return number === 80 ? 'eighty' : 'eighty ' + arr[secondDigit - 1]
  } else if (number.toString().length === 2 && number < 100) {

    return arr[firstDigit - 1] + 'ty ' + arr[secondDigit - 1]

  } else if (number.toString().length === 3 && number < 1000) {
    if (+secondDigit + +thirdDigit === 0) {
        return arr[firstDigit - 1] + ' hundred';
    } else if (+secondDigit === 0) {
        return arr[firstDigit - 1] + ' hundred '  + arr[thirdDigit - 1];
    } else if (+thirdDigit === 0) {
        return +secondDigit === 1 ? arr[firstDigit - 1] + ' hundred ten' : +secondDigit === 2 ? arr[firstDigit - 1] + ' hundred twenty' : +secondDigit === 3 ? arr[firstDigit - 1] + ' hundred thirty' : +secondDigit === 4 ? arr[firstDigit - 1] + ' hundred forty' : +secondDigit === 5 ? arr[firstDigit - 1] + ' hundred fifty' : +secondDigit === 8 ? arr[firstDigit - 1] + ' hundred eighty' : arr[firstDigit - 1] + ' hundred ' + arr[secondDigit - 1] + 'ty' 
    } else if (+secondDigit === 1) {
        return +thirdDigit === 1 ? arr[firstDigit - 1] + ' hundred ' + 'eleven' : +thirdDigit === 2 ? arr[firstDigit - 1] + ' hundred ' + 'twelve' : +thirdDigit === 3 ? arr[firstDigit - 1] + ' hundred ' + 'thirteen' : +thirdDigit === 5 ? arr[firstDigit - 1] + ' hundred ' + 'fifteen' : +thirdDigit === 8 ? arr[firstDigit - 1] + ' hundred ' + 'eighteen' : arr[firstDigit - 1] + ' hundred ' + arr[thirdDigit - 1] + 'teen'
    } else if (+secondDigit === 2 || 3 || 4 || 5 || 8) {
        return +secondDigit === 2 ? arr[firstDigit - 1] + ' hundred ' + 'twenty ' + arr[thirdDigit - 1] : +secondDigit === 3 ? arr[firstDigit - 1] + ' hundred ' + 'thirty ' + arr[thirdDigit - 1] : +secondDigit === 4 ? arr[firstDigit - 1] + ' hundred ' + 'forty ' + arr[thirdDigit - 1] : +secondDigit === 5 ? arr[firstDigit - 1] + ' hundred ' + 'fifty ' + arr[thirdDigit - 1] : +secondDigit === 8 ? arr[firstDigit - 1] + ' hundred ' + 'eighty ' + arr[thirdDigit - 1] : arr[firstDigit - 1] + ' hundred ' + arr[secondDigit - 1] + 'ty ' + arr[thirdDigit - 1]
    }
  }
}
