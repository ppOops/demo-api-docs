**简要描述：** 
- 用于查询队列的实时状态

**请求URL：** 
- ` http://api.nxcloud.com/api/queue/state `
  
**请求方式：**
- POST 

**参数：** 

|参数名|必选|类型|说明|
|:----    |:---|:----- |-----   |
|appkey |是  |string |审批单应用appkey   |
|secretkey |是  |string | 审批单应用secretkey    |
|queueid     |是  |string | 队列id    |  

 **返回示例**

``` 
{
    "code": "0",
    "state": "1",
    "info": "success"
}
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----|-----                           |
|code |string   |0 表示成功，其他表示失败  |
|state |string   |状态值 0 未呼叫 1 开始呼叫 2 暂停 3 标注完成 4 标注取消  |  

 **备注** 
- 无