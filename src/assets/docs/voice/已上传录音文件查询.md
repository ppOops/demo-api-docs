
    
**简要描述：** 

- 对用户提供获取语音文件url

**请求URL：** 
- ` http://api.nxcloud.com/api/voiceSms/getUserFileUrl `
  
**请求方式：**
- POST 

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|account |是  |string |登录用户名   |
|password |是  |string | 密码    |
|page     |是  |int | 当前页    |
|page_size |是  |int | 每页显示条数    |
|startTime |否  |string | 开始时间(yyyy-MM-dd)    |
|endTime   |否  |string | 结束时间(yyyy-MM-dd)    |
|queryName |否  |string | 查询的文件名    |

 **返回示例**

``` 
  {
    "code": "success",
    "info": {
        "total": 3,
        "pageSize": 2,
        "page": 1,
        "rows": [
            {
                "gmt_create": "2019-05-28 20:05:32",
                "file_name": "录音 (1).mp3",
                "url": "https://nxcloudhk.oss-cn-hongkong.aliyuncs.com/voice_group/1559045130474.mp3"
            },
            {
                "gmt_create": "2019-05-28 20:04:32",
                "file_name": "录音 (2).mp3",
                "url": "https://nxcloudhk.oss-cn-hongkong.aliyuncs.com/voice_group/1559045070373.mp3"
            }
        ]
    }
  }
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|gmt_create |string   |该语音文件创建的时间  |
|file_name |string   |该语音文件的名字  |
|url |string   |该语音文件的URL地址  |

 **备注** 

失败参数:

```
	{
		"code": "failed",
		"info": "必填参数请完整填写"
	}
```	
	
		{
			"code": "failed",
			"info": "请正确填写分页参数"
		}
```
	{
		"code": "failed",
		"info": "账号或密码有误"
	}
```