
describe("say_hello", function() {
    it( "should return 'Hello, World'", function() {
        expect( say_hello("World") ).toBe("Hello, World");
    });

    it( "should raise error on number", function() {
        expect( function() { say_hello(2) } ).toThrow("This is not a string. It is a Number.");
    });

    it( "should raise error on hash", function() {
        expect( function() { say_hello({ name: "World" }) } ).toThrow("This is not a string. It is a Object.");
    });

    it( "should raise error on date", function() {
        expect( function() { say_hello(new Date()) } ).toThrow("This is not a string. It is a Date.");
    });

});
