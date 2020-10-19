const myDictionary = new Map();
myDictionary.set('0', 'zero');
myDictionary.set('1', 'one');
myDictionary.set('2', 'two');
myDictionary.set('3', 'three');
myDictionary.set('4', 'four');
myDictionary.set('5', 'five');
myDictionary.set('6', 'six');
myDictionary.set('7', 'seven');
myDictionary.set('8', 'eight');
myDictionary.set('9', 'nine');
myDictionary.set('10', 'ten');
myDictionary.set('11', 'eleven');
myDictionary.set('12', 'twelve');
myDictionary.set('13', 'thirteen');
myDictionary.set('14', 'fourteen');
myDictionary.set('15', 'fifteen');
myDictionary.set('16', 'sixteen');
myDictionary.set('17', 'seventeen');
myDictionary.set('18', 'eighteen');
myDictionary.set('19', 'nineteen');
myDictionary.set('20', 'twenty');
myDictionary.set('30', 'thirty');
myDictionary.set('40', 'forty');
myDictionary.set('50', 'fifty');
myDictionary.set('60', 'sixty');
myDictionary.set('70', 'seventy');
myDictionary.set('80', 'eighty');
myDictionary.set('90', 'ninety');
myDictionary.set('100', 'hundred');



module.exports = function toReadable (number) {
  let result = '';
  let arrNumber = String(number).split('');

  if(arrNumber.length == 1) {
      return myDictionary.get(arrNumber[0]);
  }
  if(arrNumber.length == 2) {
      if((number > 10 && number <20) || arrNumber[1] == 0){
        return result = myDictionary.get(arrNumber[0] + arrNumber[1]);
      }
      else {
        return result = `${myDictionary.get(arrNumber[0]+'0')} ${myDictionary.get(arrNumber[1])}`;
      }
  }
  if(arrNumber.length == 3) {
    if(arrNumber[1] == '0'){ // 100, 200
        if(arrNumber[2] == '0')
            return result = `${myDictionary.get(arrNumber[0])} ${myDictionary.get('100')}`;
        else{
            return result = `${myDictionary.get(arrNumber[0])} ${myDictionary.get('100')} ${myDictionary.get(arrNumber[2])}`;
        }
    }

    if(arrNumber[2] == '0') { // оканчивается на 0 - 150, 250
        return result = `${myDictionary.get(arrNumber[0])} ${myDictionary.get('100')} ${myDictionary.get(arrNumber[1]+'0')}`;
    }

    if(myDictionary.get(arrNumber[1] + arrNumber[2]) != undefined) {
        return result = `${myDictionary.get(arrNumber[0])} ${myDictionary.get('100')} ${myDictionary.get(arrNumber[1] + arrNumber[2])}`;
    }

    return result = `${myDictionary.get(arrNumber[0])} ${myDictionary.get('100')} ${myDictionary.get(arrNumber[1]+'0')} ${myDictionary.get(arrNumber[2])}`;
  }
}
