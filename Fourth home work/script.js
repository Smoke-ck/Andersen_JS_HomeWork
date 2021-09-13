function concatStrings(firstValue, separator = '') {
    const checkString = (element) => (typeof element !== "string" || undefined);
    
    separator = (checkString(separator) ? separator = "" : separator)
    firstValue = (checkString(firstValue) ? firstValue = "" : firstValue);

    const deepConcat = function (subValues) {
        if (checkString(subValues)) {
            return concatStrings(firstValue + '')
        } else {
            return concatStrings(firstValue.concat(separator, subValues), separator);
        }
    };
    deepConcat.toString = () => { return firstValue; };
    return deepConcat;
}


class Calculator {
    constructor(firstNumber, secondNumber) {
        this.checkNumber(secondNumber);
        this.checkNumber(firstNumber);

        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;

        this.setX = this.setX.bind(this);
        this.setY = this.setY.bind(this);
        this.logSum = this.logSum.bind(this);
        this.logDiv = this.logDiv.bind(this);
        this.logSub = this.logSub.bind(this);
        this.logMul = this.logMul.bind(this);

    }
    setX(number) {
        this.checkNumber(number);
        this.firstNumber = number;
    }
    setY(number) {
        this.checkNumber(number);
        this.firstNumber = number;
    }
    logSum() {
        return console.log(this.firstNumber + this.secondNumber);
    }
    logDiv() {
        this.secondNumber = (this.secondNumber == 0 ? this.error() : this.secondNumber);
        return console.log(this.firstNumber / this.secondNumber);
    }
    logSub() {
        return console.log(this.firstNumber - this.secondNumber);
    }
    logMul() {
        return console.log(this.firstNumber * this.secondNumber);
    }
    error() {
        throw new Error('Invalid Value')
    }
    checkNumber(value) { value = (!Number.isInteger(value) ? this.error() : value) }
}
