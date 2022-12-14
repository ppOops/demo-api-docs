**简要描述：** 

``` js
export default {
  name: 'MyComponent',
  // ...
}
```

- 下行短信接口

**请求URL：** 
- ` http://api2.nxcloud.com/api/sms/mtsend `
  
**请求方式：**
- POST ，以HTTP FORM 表单格式提交
- Content-Type: application/x-www-form-urlencoded（不支持json格式）
- curl 示例 （使用-d参数以后，HTTP 请求会自动加上标头Content-Type : application/x-www-form-urlencoded。并且会自动将请求转为 POST 方法，因此可以省略-X POST。）
```
curl -d "appkey=1&secretkey=2&phone=123&content=abc" http://api2.nxcloud.com/api/sms/mtsend
```
- 请求示例参考[HTTP表单方式提交](https://github.com/nxtele/http-api-document/wiki/HTTP表单方式提交)、[C#请求短信接口代码示例](https://github.com/nxtele/http-api-document/wiki/C%23-短信发送接入代码示例)
![postman example](./md-test-image.png "Dingtalk_2021062417\1539.jpg")


**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|appkey   |是|string |短信应用appkey  |
|secretkey   |是|string |短信应用secretkey  |
|phone   |是|string |被叫号码(国码+手机号，比如：8615088888888),可以多个并且以","英文逗号隔开。如果是验证码通道的短信应用，不允许一次性提交超过5个号码  |
|content   |是|string |短信内容,必须做urlencode(UTF-8)，内容最长1000个字符 |
|source_address   |否|string |sourceaddress/sender  |
|sys_messageid   |否|string |用户自定义messageid，长度为10-50位之间，类型【0-9a-zA-Z-】 |
|short_link   |否|string |短链，数据来自于短链列表；如果此处赋值，短信内容里面必须包含#1#才能起作用，请注意  |
|linkVerbose   |否|string |该参数设定的为是否收集用户点击行为，若选择收集用户点击行为，则可在控制台中查看点击了该短链接的号码信息。参数：1：收集；0：不收集。默认为收集|
|dr_url   |否|string |dr推送地址（如同时在短信应用上也配置有dr推送地址，优先推送dr给本接口配置的地址） ；（如果手机号码多于一个，此字段不生效，请联系noc，设置到具体的短信应用上） |
|ext   |否|string |透传字段，该字段为自定义信息，在回执中会原样返回，仅支持http请求 |
<!--|opt_entity_id   |否|string |实体编号，当发送91方向的短信时需要填写 |
|opt_template_id   |否|string |模板编号，当发送91方向的短信时需要填写 |
|opt_header_id   |否|string |发件人编号，当发送91方向的短信时需要填写 |
|task_time   |否|string |定时时间yyyy-MM-dd HH:mm:ss（时区为GMT+8） |  -->
 **返回示例**

``` 
{"result":"请求成功","messageid":"20d6c660bd664c65bef20026564b0b79","code":"0"}
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|result |string   |请求结果说明 |
|messageid |string   |系统返回的短信ID |
|code |string   |结果编码 |

 **备注** 

-HTTP 错误代码

|code|说明|
|:----- |-----|
|0 |请求成功  | 
|1 |应用不可用或key错误   |
|2 |参数错误或为空   |
|3 |余额不足   |
|4 |内容为空或包含非法关键词   |
|5 |内容过长   |
|6 |号码有误   |
|7 |群发号码数量不得超过50000个   |
|8 |sourceaddress必须为1-20位数字或英文字母   |
|9|IP非法   |
|88 |请求失败  |
|99 |系统错误   |

-SMPP 提交短信错误代码

|code|说明|
|:----- |-----|
|10  [0x0000000A] |sourceaddress (sender) 错误 |
|81  [0x00000051]|号码错误  |
|103 [0x00000067]|余额不足|
|260 [0x00000104] |内容为空或包含非法关键词  |
|69 |提交失败，未知错误（投诉我们，我们查看日志）   |