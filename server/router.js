var express = require("express")
var router = express.Router()

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
  console.log(req.session.user)
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

module.exports = router