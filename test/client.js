(function() {
  "use strict";

  var assert = require("assert");

  describe("client functions", function(){

    var SuperClassy = require("../index.js"),
        superClassy,
        MockBrowser = require('mock-browser').mocks.MockBrowser,
        mock        = new MockBrowser(),
        doc         = mock.getDocument(),
        element;

    //
    // Make a new instance of SuperClassy and pass it a mock
    // window object
    //
    superClassy = new SuperClassy({
      "window" : {
        "document" : doc
      }
    });


    it("return an array", function(){
      element = superClassy.utils.get("body");
      assert.equal(typeof element, "object", ["Is not type of object"]);
      assert.equal(typeof element.length, "number", ["Is not a number"]);
    });
  });
}());
