var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/version', function(req, res, next) {
  res.send({ 'version': '1.0.0' });
});

router.get('/echo', function(req, res, next) {
  res.send({ 'name': req.query.name });
});

// 新增的路由处理两数相加
router.get('/add', function(req, res, next) {
  // 获取传递的两个参数
  var num1 = parseFloat(req.query.num1) || 0;
  var num2 = parseFloat(req.query.num2) || 0;

  // 计算两数之和
  var sum = num1 + num2;

  // 返回结果
  res.send({ 'sum': sum });
});

module.exports = router;
