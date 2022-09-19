**简要描述：** 

- 短信回填率上报接口

**请求URL：** 
- ` http://api2.nxcloud.com/api/smsdr/conversion `
  
**请求方式：**
- GET 
- 请求示例：
![postman examples](https://github.com/nxtele/http-api-document/blob/main/shortLink.jpg)

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|messageid |是  |string |短信提交时返回的消息ID   |
|phone |否  |string | 手机号码    |
|status     |否  |string | 10 表示回填成功(填其他值或者空字符串，都会被处理为未回填)    |


 **用户返回值**  
成功返回字符串：success  
失败返回字符串：fail

 **备注** 

- 如请求不带status，则默认为成功回填