Array.prototype.myFilter = function (callBack, thisArgs) {

    let context = this;
    let result = [];
    let object = Object(this);

    if (arguments.length > 1) {
        context = thisArgs;
    }
    for (let i = 0; i < context.length; i++) {
        const isAdd = callBack.call(context, context[i], i, object);
        if (i in object) {
            if (isAdd) {
                result = [...result, context[i]]
            }
        }
    }
    return result;
}




function createDebounceFunction(callback, timeInMs) {

    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { callback.apply(this, args); }, timeInMs);
    };
}