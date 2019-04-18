const express = require("express")
const router = express.Router()
const get_cached_readings = require("./public/js/get_cached_readings");
const light_control=require("./public/js/light-control");
const fan_control=require("./public/js/fan-control");

router.get('/', function (req, res) {
  // 重定向到登录页
  res.redirect('/Login')
})

router.get('/index', function(req, res){
  if(req.session.user)
    res.render('index.html')
  else
    res.send('请先登录后再进行操作!')
})

router.get('/Login', function(req, res){
  //console.log(req.session.user)
  res.render('Login.html');
})

router.post('/Login', function(req, res){
  // 1. 获取表单数据
  // 2. 查询数据库用户名密码是否正确
  // 3. 发送响应数据
  var body = req.body
  if (body.username === 'admin' && body.password === 'admin') {
    // 登录成功，使用 Session 记录用户的登陆状态
    req.session.user = true

    res.status(200).json({
      err_code: 0,
      message: 'OK'
    })
    }
  else
    {
      // 邮箱或者昵称已存在
      return res.status(200).json({
        err_code: -1,
        message: 'Email or nickname aleady exists.'
      })
    }
})


router.get("/temperature", function(req, res){
  var my_temperature = get_cached_readings.get_temperature();
  console.log(my_temperature);
  if(my_temperature > 30)
  {
    fan_control.on()
  }
  else
  {
    fan_control.off()
  }

  if(req.session.user)
    res.json({val:my_temperature});
  else
    res.send('请先登录后再进行操作!')
})

router.get("/humidity", function(req, res){
  var my_humidity = get_cached_readings.get_humidity();
  //console.log(my_humidity);
  if(req.session.user)
    res.json({val:my_humidity})
  else
    res.send('请先登录后再进行操作!') 
})

router.get("/on", function(req, res){
  if(req.session.user)
  {
    light_control.on();
    res.send("light is on")
    console.log("light is on");
  }
  else
    res.send('请先登录后再进行操作!') 
})

router.get("/off", function(req, res){
  if(req.session.user)
  {
    light_control.off();
    res.send("light is off");
    console.log("light is off");
  }
  else
    res.send('请先登录后再进行操作!')  
})

module.exports = router