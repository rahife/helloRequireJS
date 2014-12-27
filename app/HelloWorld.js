/**
 * Created by rafa on 12/27/14.
 */

require(["saySomething"], function(saySomething) {
    //This function is called when saySomething.js is loaded.
    //If saySomething.js calls define(), then this function is not fired until
    //saySomething's dependencies have loaded, and the util argument will hold
    //the module value for "".

    alert("HelloWorld!");
});