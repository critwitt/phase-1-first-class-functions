function receivesAFunction (callback) {
    return callback();
}

function returnsANamedFunction () {
    const namedFunction = (param) => console.log("My name is mud");
    return namedFunction
}

function returnsAnAnonymousFunction () {
    return () => console.log("Anonymous Hippopotamus!")
}