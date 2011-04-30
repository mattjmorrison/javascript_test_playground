TestCase("EnglishGreeterTests", {
	testGreet: function() {
	  var greeter = new greeters.EnglishGreeter();
	  assertEquals("Hello World!", greeter.greet("World"));
	},
	testFarewell: function() {
		var greeter = new greeters.EnglishGreeter();
		assertEquals("Goodbye World!", greeter.farewell("World"));
	}
});

TestCase("FrenchGreeterTests", {
	testGreet: function() {
	  var greeter = new greeters.FrenchGreeter();
	  assertEquals("Bonjour World!", greeter.greet("World"));
	},
	testFarewell: function() {
		var greeter = new greeters.FrenchGreeter();
		assertEquals("Au revoir World!", greeter.farewell("World"));
	}
});

TestCase("GermanGreeterTests", {
	testGreet: function() {
	  var greeter = new greeters.GermanGreeter();
	  assertEquals("Guten Tag World!", greeter.greet("World"));
	},
	testFarewell: function() {
		var greeter = new greeters.GermanGreeter();
		assertEquals("Auf Wiedersehen World!", greeter.farewell("World"));
	}
});


TestCase("TestSample", {
	testJQueryVersion: function(){
		var thing = new sample.Sample();
		assertEquals("1.5.2", thing.jqueryVersion());
	},
	testAppendingNode: function(){
		var thing = new sample.Sample();
		thing.addDivToBody();
		assertEquals("hi", $('#new_node').html());
	},
	testEventOnNode: function(){
		var thing = new sample.Sample();
		thing.addEventToNewDiv();
		assertSame(thing.eventNodeClickCallback, $('#event_node').data('events')['click']);
	}
});
