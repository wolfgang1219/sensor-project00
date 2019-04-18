const Gpio = require('onoff').Gpio;
const fan = new Gpio(22, 'out');
const fan_control_on =()=>{
  fan.writeSync(1);
  return 1
}
const fan_control_off =()=>{
  fan.writeSync(0);
  return 0
}

module.exports.on=fan_control_on;
module.exports.off=fan_control_off;