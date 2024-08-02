const delayGenerator = (ms: number) => {
    if (ms && ms > 0) {
        var timer: ReturnType<typeof setTimeout>;
        return function (callback: Function, ...args: any[]) {
            clearTimeout(timer);
            timer = setTimeout(callback.bind(null, ...args), ms);
        };
    } else {
        return (callback: Function, ...args: any[]) => callback.apply(null, args);
    }
}

export {delayGenerator};