/**
 * Created by rafa on 12/27/14.
 */

require(["saySomething"], function(saySomething) {
    //This function is called when helper/HelloWorld.js is loaded.
    //If HelloWorld.js calls define(), then this function is not fired until
    //helloWorld's dependencies have loaded, and the util argument will hold
    //the module value for "".

    alert("HelloWorld!");

});