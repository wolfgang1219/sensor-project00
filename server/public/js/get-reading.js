const sensor =require("node-dht-sensor");
//将获取传感器的值封装在一个函数中，该函数是异步的，接收一个回调函数作为参数
const get_sensor_readings=(callback)=>{
	sensor.read(11,27,(err,temperature,humidity)=>{
		if(err)//如果有错误将err作为回调函数的参数
		{
			return callback(err);
		}
		//如果没有错误，将null作为回调函数的第一参数，表明没有错误，第二个和第三个参数就是温度与湿度
		callback(null,temperature,humidity);
	});
}


//将函数导出
module.exports=get_sensor_readings;