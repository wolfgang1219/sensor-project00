const get_sensor_readings=require("./get-reading");
const cached_readings={temperature:0,humidity:0};
//dht11数字温湿度传感器的采样周期要大于等于2秒
setInterval(()=>{
	get_sensor_readings((err,temperature,humidity)=>{
		if(err)
		{
			return console.error(err);
		}
		 //没有错误便将温湿度保存在缓存对象cached_readings中	
		 else
		 {
			cached_readings.temperature=temperature.toFixed(1);
			cached_readings.humidity=humidity.toFixed(1);
			}
	});
},2000);

//将温湿度导出
module.exports.get_temperature=()=>cached_readings.temperature;
module.exports.get_humidity=()=>cached_readings.humidity;
