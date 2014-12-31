(function() {
  "use strict";

  var assert = require("assert");

  describe("superClassy module", function(){

    var SuperClassy = require("../index.js"),
        superClassy;

    it('constructor should be a function', function(){
      assert.equal(typeof SuperClassy, "function", ["The superClassy module is not loaded"]);
    });

    it('should instantiate as an object', function(){
      superClassy = new SuperClassy();
      assert.equal(typeof superClassy, "object", ["The superClassy module did not instantiate"]);
    });

    it('should have a utils object', function(){
      assert.equal(typeof superClassy.utils, "object", ["No utils object found as a property"]);
    });
  });
}());
