class Publisher {
  constructor(emitter){
	  this._emitter = emitter;
  }
  
  publish(channel, message){
	  this._emitter.emit(channel, message);
  }
  
};

module.exports = Publisher;