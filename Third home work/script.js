Array.prototype.myFilter = function (callBack, thisArgs = this) {
  
 return thisArgs.reduce((acc,element,index,array) => callBack(element,index.array) 
	?  [...acc,element]
        : acc ,  
	[]);
}


function createDebounceFunction(callback, timeInMs) {

    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { callback.apply(this, args); }, timeInMs);
    };
}
