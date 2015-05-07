
function say_hello(name) {
    if (typeof name !== "string") {
        throw "This is not a string. It is a " + name.constructor.name + ".";
    }

    return "Hello, " + name;
}
