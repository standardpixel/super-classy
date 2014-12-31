(function() {
  "use strict";

  var assert = require("assert");

  describe("processTemplate function", function(){

    var SuperClassy = require("../index.js"),
    superClassy = new SuperClassy();

    it('should build a template', function(){
      assert.equal(superClassy.processTemplate("i am a {thing}", {"thing":"test"}), "i am a test", ["The template did not process as expected"]);
    });
  });
}());
