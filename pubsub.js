const EventEmitter = require('events');
let Publisher = require('./Publisher');
let Subcriber = require('./Subcriber');

let emitter = new EventEmitter();
emitter.setMaxListeners(0);

function create_publisher(){
	return new Publisher(emitter);
} 

function create_subcriber(){
	return new Subcriber(emitter);
}

module.exports = {
	create_publisher: create_publisher,
	create_subcriber: create_subcriber
}