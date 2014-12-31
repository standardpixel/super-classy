(function() {
  "use strict";

  var assert = require("assert");

  describe("events", function(){

    var SuperClassy = require("../index.js"),
        superClassy = new SuperClassy();

    it('should have all required functions', function(){
      assert.equal(typeof superClassy.on, "function", ["There is no 'on' function"]);
      assert.equal(typeof superClassy.once, "function", ["There is no 'once' function"]);
      assert.equal(typeof superClassy.fire, "function", ["There is no 'fire' function"]);
    });

    it('should fire a registered function', function(done){

      superClassy.on("test-1", function(e) {
        assert.equal(e.caller.foo, "bar", ["The event fired but returned an incorect argument"]);
        done();
      });

      superClassy.fire("test-1", {"foo":"bar"});
    });
  });
}());
