

const sidebarConfig = [
    {
      title: "短信",
      path: "sms",
      children: [
        "短信计费标准",
        "短信下行发送",
        "短信回填率上报",
        "短信回执回调",
        "短信记录查询",
        "短信记录单条查询",
        "短信对账单报表",
      ],
    },
    {
      title: "语音",
      path: "voice",
      children: [
        "上传语音文件",
        "已上传录音文件查询",
        "发送语音群呼",
        "发送语音通知",
        "发送语音验证码",
        "语音验证码回填上报",
        "语音回执回调",
        "语音记录查询",
      ],
    },
    {
      title: "坐席",
      path: "nxphone",
      children: [
        "NXphone PC 使用说明",
        "NXphone Android 使用说明",
        "NXphone Android SDK 接入文档",
        "呼叫挂断原因解释",
        "话单CDR查询接口",
        "话单CDR回调接口说明(V1.0)",
        "坐席API调用接口说明(V1.0)",
        "根据orderid查询话单CDR接口",
        "坐席系统sip链接调用方式(推荐)",
        "号码脱敏处理",
        "修改话机密码接口",
        "查询审批单",
        "查询话机",
      ],
    },
    {
      title: "Flash Call",
      path: "flash-call",
      children: [
        "发送FlashCall验证请求",
        "查询单条记录",
        "查询某段时间内的所有记录",
        "上报FlashCall回填信息",
        "FlashCall回执回调",
      ],
    },
  ];

export const FileName2RoutePathMapping = {
  短信计费标准: "1-sms",
  短信下行发送: "2-sms",
  短信回填率上报: "3-sms",
  短信回执回调: "4-sms",
  上传语音文件: "1-voice",
  已上传录音文件查询: "2-voice",
  发送语音群呼: "3-voice",
};


export const RoutePath2FileNameMapping = (() => {
    return Object.keys(FileName2RoutePathMapping).reduce((calc, cur) => {
      calc[FileName2RoutePathMapping[cur]] = cur;
      return calc;
    }, {});
  })();


const buildpath = (parent = "", child = "") => {
  if (parent && !child) {
    return "/" + parent;
  }
  return "/" + parent + "/" + (FileName2RoutePathMapping[child] || '');
};

export const sidebarMenus = (() => {
    const buildSubItem = (parentPath, childrenMenus) => {
      return childrenMenus.map((menu) => ({
        title: menu,
        path: buildpath(parentPath, menu),
      }));
    };
  
    return sidebarConfig.map((item) => {
      const parentPath = item.path
      item.path = buildpath(parentPath);
      item.children = buildSubItem(parentPath, item.children);
      return item;
    });
  })();
