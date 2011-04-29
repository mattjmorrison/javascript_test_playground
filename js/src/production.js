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








