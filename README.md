super-classy
============

A JS superclass with embedded utilities. Intended for projects where I would rather not have to rely on jquery or _

Extending it to add utilities and events to a class
---------------------------------------------------
``
function YourClass() {
  SuperClass.apply(this, arguments);
}
``

Creating an instance to use as a standalone set of utilities
------------------------------------------------------------
``
var superClassy = new SuperClassy();
``

Main interface methods
----------------------
   * **on(event name _string_), subscriber options (object)** : Subscribes to an event
   * **once** : Same as above but only fires once and unsubscribes
   * **fire(event name _string_), caller options (object)** : Fires an event

Client Utilities ([instance].utils)
-----------------------------------
   * **get(selector _string_, root _object_ optional)** : Gets a DOM element by selector. Returns a node-list even if only one element is found
   * **debounce(callback (function), wait (number in milliseconds), immediate (bool))** : Throttles calls for a specified number of milliseconds and fires the last requested
   * **request(uri (a URI for an API endpoint on the same domain or with propper CORS headers set), callback (function))** : An XHR wrapper
   * **parentHasClass(starting (element), className (class name to find), depth (how far should this function look))** : Looks in the passed element and it's parents for the class passed. Returns the element found with that class
   * **append(rootNode (element), html (string))** : appends HTML to an element
