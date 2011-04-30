greeters = {};

greeters.GermanGreeter = function() { };

greeters.GermanGreeter.prototype.greet = function(name) {
	return "Guten Tag " + name + "!";
};

greeters.GermanGreeter.prototype.farewell = function(name) {
	return "Auf Wiedersehen " + name + "!";
};

(function(module){

	module.EnglishGreeter = function(){
		return {
			greet: function(name){
				return "Hello " + name + "!";
			},

			farewell: function(name){
				return "Goodbye " + name + "!";
			}			
		};
	};

})(greeters);


(function(module){

	self = function(){};
	
	self.prototype.greet = function(name){
		return "Bonjour " + name + "!";
	};

	self.prototype.farewell = function(name){
		return "Au revoir " + name + "!";
	};			

	module.FrenchGreeter = self;
})(greeters);


var sample = {};
(function($, module){

	module.Sample = function(){
		return {
			jqueryVersion: function(){
				return $().jquery;
			},
			addDivToBody: function(){
				$('body').append($('<div id="new_node">hi</div>'));
			},
			addEventToNewDiv: function(){
				$('body').append($('<div id="event_node">hi</div>'));
				$('#event_node').click(function(){
					alert("doing click stuff");
					$('body').append($('<div>You clicked it'));					
				});
			},
			eventNodeClickCallback: function(){
				alert("doing click stuff");
				$('body').append($('<div>You clicked it'));
			}
		};
	};

})(jQuery, sample);







