
QUnit.test( "hello world", function( assert ) {
    assert.ok( say_hello("World") == "Hello, World", "Passed!", "Epic Failure!" );
});

QUnit.test( "number is guarded", function( assert ) {
    assert.throws(
        function() {
            say_hello(3)
        },
        "This is not a string. It is a Number"
  );
});

QUnit.test( "object is guarded", function( assert ) {
    assert.throws(
        function() {
            say_hello({ name: "World" })
        },
        "This is not a string. It is a Object"
  );
});

QUnit.test( "date is guarded", function( assert ) {
    assert.throws(
        function() {
            say_hello(new Date())
        },
        "This is not a string. It is a Date"
  );
});
