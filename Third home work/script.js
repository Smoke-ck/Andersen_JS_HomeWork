Array.prototype.myFilter = function (callBack, thisArgs = this) {
	
 let result = thisArgs.reduce((total, element,index,thisArgs) => {
  if (callBack.call(index,element,thisArgs)) {
    total = [...total,element];
  }
  return total;
}, []);
  return result;
}


function createDebounceFunction(callback, timeInMs) {

    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { callback.apply(this, args); }, timeInMs);
    };
}
