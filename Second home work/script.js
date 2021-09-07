const makeObjectDeepCopy = (obj) => {

    let cloneObject = Object.assign({}, obj);

    Object.keys(cloneObject).forEach(key => (
        cloneObject[key] =
        typeof obj[key] === "object" ? makeObjectDeepCopy(obj[key]) : obj[key])
    );

    if (Array.isArray(obj) && obj.length) {
        return (cloneObject.length = obj.length) && Array.from(cloneObject)
    } else if (Array.isArray(obj)) {
        return Array.from(cloneObject)
    } else {
        return cloneObject
    }
};




const error = (value) => { throw new Error(value) };

function selectFromInterval(array, firstValue, secondValue) {

    if (!Array.isArray(array)) {
        error('Not an array ');
    } else if (!Number.isInteger(firstValue) || !Number.isInteger(secondValue)) {
        error('Invalid number');
    } else if (secondValue < firstValue) {
        ([firstValue, secondValue] = [secondValue, firstValue])
    }
    array.every((element) => isNaN(element) ? error('Invalid number') : element);
    return array.filter(item => (firstValue <= item && item <= secondValue))
}




const myIterable = {
    from: 2,
    to: 6,
    [Symbol.iterator]: function () {
        const { from, to } = myIterable;
        if (from > to || isNaN(from) || isNaN(to)) {
            throw new Error('Error iteration')
        }
        return {
            fromValue: this.from,
            toValue: this.to,
            next() {
                if (this.fromValue <= this.toValue) {
                    return { done: false, value: this.fromValue++ };
                }
                else {
                    return { done: true };
                }
            }
        };
    }
};

for (let item of myIterable) {
}
