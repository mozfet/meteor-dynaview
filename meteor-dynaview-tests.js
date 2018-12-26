// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-dynaview.js.
import { name as packageName } from "meteor/meteor-dynaview";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-dynaview - example', function (test) {
  test.equal(packageName, "meteor-dynaview");
});
