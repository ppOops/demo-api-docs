**简要描述：**
- 坐席测试  

**请求URL：**
-  `http://api2.nxcloud.com/opt/call/get`

**请求方式：**
-  GET
  ```
  GET http://api2.nxcloud.com/otp/call/get?requestId=ce21811804a449a08e07e61ba7c52824&appkey=aaa&appsecret=bbb 
   ```
**请求参数：**  

  |参数名|类型|说明|
  |:-----  |:-----|-----|
  |appkey |string   |牛信平台，flash call 应用的 app key |
  |secretkey |string   |牛信平台，flash call 应用的 secret key |
  |requestId |string   |调用发起 flash call 接口，返回的 requestId |  

**返回示例**
```
{
  "cdr": {
    "id": 44,
    "customerId": 1,
    "appId": 1,
    "msisdn": " 628618628952558",
    "callingNumber": "2150928922",
    "token": "8922",
    "requestId": "ce21811804a449a08e07e61ba7c52824",
    "ip": "127.0.0.1",
    "price": 0.0,
    "cost": 0.0,
    "gmtCreate": "2021-04-29T02:52:21.000+0000",
    "gmtModified": null,
    "callStartAt": null,
    "callEndAt": null,
    "callbackAt": null,
    "callStatus": 0
  },
  "code": "0"
}
```

**返回参数说明**

  |参数名|类型|说明|
  |:-----  |:-----|-----|
  |code |string   |结果编码，为0是成功，其他都是失败，具体参考失败代码表 |
  |cdr |json   |如果code不为0，代表失败；<br/>code为0，则为此次查询的记录； <br/> 如果值为 null，代表 requestId不正确； |  