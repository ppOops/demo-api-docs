---
title: Message
---
    
**简要描述：** 

- 短链接列表

**请求URL：** 
- `http://api.nxcloud.com/api/shortLink/shortLinks`
  
**请求方式：**
- POST ，参数不要传body,用form表单方式提交

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|appkey |是  |string | 短信应用appkey  |
|secretkey |是  |string | 短信应用secretkey  |
|url |是  |string |长连接(请使用原始长连接)|

 **返回示例**

``` 
 {
    "code": "0",
    "row": [
		{"short_link":"http://xxx/xxxxxx"},
		{"short_link":"http://xxx/xxxxx2"}
	]
}
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----|
|code |string   |结果编码 |
|row |array   | 诸多短链接 |

 **备注**

错误代码

|code|说明|
|:----- |-----|
|0 |请求成功  | 
|1 |应用不可用或key错误   |
|2 |参数错误或为空   |
|3 |余额不足   |
|9 |IP非法   |
|11 |邮箱格式有误|
|88 |请求失败  |
|99 |系统错误   |
