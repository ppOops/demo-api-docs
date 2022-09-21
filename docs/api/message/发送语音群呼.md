
    
**简要描述：** 

- 语音群呼接口

**请求URL：** 
- ` http://api.nxcloud.com/api/voiceSms/gpsend `
  
**请求方式：**
- POST ，以HTTP FORM 表单格式提交
- Content-Type: application/x-www-form-urlencoded

**参数：** 

|参数名|必选|类型|说明| 
|:----    |:---|:----- |-----   |
|appkey   |是|string |语音应用appkey  |
|secretkey   |是|string |语音应用secretkey  |
|phone   |是|string |手机号，可以上传多个，并且以逗号隔开(,)  |
|country_code   |是|string |国码（不带+号，纯国码数字即可） |
|show_phone   |是|string |想要显示的号码（填写任意位数的数字即可，实际显示号码可能会被修改）  |
|url   |是|string |语音文件url，从控制台获取 |
|task_time   |否|string |定时时间yyyy-MM-dd HH:mm:ss |
|time_zone   |否|string |时区（8、9、10.....），如果task_time传值，time_zone就必填，否则task_time失效 |
|sched_hangup   |否|string |定时接通后多少秒挂断(为0则不限制) |
|sms_appkey   |否|string |短信应用APPKEY |
|msg_content   |否|string |追加短信内容 |


 **返回示例**

``` 
{"result":"请求成功","messageid":"20d6c660bd664c65bef20026564b0b79","code":"0"}
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|result |string   |请求结果说明 |
|messageid |string   |系统返回的语音ID |
|code |string   |结果编码 |

 **备注** 

- 错误代码

|code|说明|
|:----- |-----|
|0 |请求成功  | 
|1 |应用不可用或key错误   |
|2 |参数错误或为空   |
|3 |余额不足   |
|4 |内容为空或包含非法关键词   |
|5 |内容过长   |
|6 |号码有误   |
|9|IP非法   |
|20|url不存在   |
|21|显示号码有误   |
|22|路由未开通   |
|23|国码有误   |
|88 |请求失败  |
|99 |系统错误   |
