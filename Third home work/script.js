Array.prototype.myFilter = function (callBack, thisArgs) {
	let result = [];
	thisArgs = this;
    thisArgs.forEach( (element) => {
        if (callBack.call(thisArgs[element], element,thisArgs)) {
            result = [...result,element]
        }
    });  
  return result;
}

function createDebounceFunction(callback, timeInMs) {

    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { callback.apply(this, args); }, timeInMs);
    };
}
