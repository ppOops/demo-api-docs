
    
**简要描述：** 

- 语音群呼上传录音文件接口

**请求URL：** 
- ` http://api2.nxcloud.com/api/voiceSms/uploadVoiceFile `
  
**请求方式：**
- POST ，使用 http form 表单提交；
- Content-Type: application/x-www-form-urlencoded

**参数：** 

|参数名|必选|类型|说明|
|:----     |:---|:----- |-----              |
|appkey    |是  |string |   语音应用appkey   |
|secretkey |是  |string | 语音应用secretkey  |
|filename  |是  |string |      文件名称      |
|content   |是  |string |base64编码的文件内容(base64编码转换可查看最下方JAVA示例代码)|

 **返回示例**

``` 
 {
    "code": "success",
    "info":"http://xxxx.xxx/xxxx.mp3"
 }
```
``` 
 {
    "code": "102",
    "result":"当前账户或所属代理商账户已被停用"
 }
```

 **返回参数说明** 

|参数名|类型|说明|
|:-----  |:-----  |-----           |
|code |string  |success: 请求成功，其他：请求失败     |
|info |string  |上传成功的录音文件地址   |
|result |string  |失败结果说明     |

 **备注** 

- base64编码转换示例代码
```
package com;

import cn.hutool.core.codec.Base64;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class Test {

    public static void main(String[] args) {
        File f = new File("c:\\tmp\\2.m4a");
        System.out.println(file2Base64(f));
    }

    public static String file2Base64(File file) {
        if(file==null) {
            return null;
        }
        String base64 = null;
        FileInputStream fin = null;
        try {
            fin = new FileInputStream(file);
            byte[] buff = new byte[fin.available()];
            fin.read(buff);
            base64 = Base64.encode(buff);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (fin != null) {
                try {
                    fin.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return base64;
    }
}

```