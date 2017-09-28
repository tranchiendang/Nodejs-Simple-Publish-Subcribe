const EventEmitter = require('events');

class Subcriber extends EventEmitter{
  constructor(emitter){
	  super();
	  this._emitter = emitter;
  }
  
  subcribe(channel){
	  let _this = this;
	  this._emitter.on(channel, function(message){
		  _this.emit('message', channel, message);
	  })
  }
  
};

module.exports = Subcriber;