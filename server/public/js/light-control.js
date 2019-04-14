const Gpio = require('onoff').Gpio;

const led = new Gpio(17, 'out');
const light_control_on =()=>{
	led.writeSync(1);
	return 1
}
const light_control_off =()=>{
	led.writeSync(0);
	return 0
}
module.exports.on=light_control_on;
module.exports.off=light_control_off;