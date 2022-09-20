const sidebarConfig = [
  {
    title: "短信",
    path: "/sms",
    children: [
      { path: "/docs-v2/sms/sms01", title: "短信计费标准" },
      {
        path: "/docs-v2/sms/sms02",
        title: "短信下行发送",
      },
      "/docs-v2/sms/sms03",
      "/docs-v2/sms/sms04",
    ],
  },
  {
    title: "语音",
    path: "/voice",
    children: [
      "/docs-v2/voice/voice01",
      "/docs-v2/voice/voice02",
      "/docs-v2/voice/voice03",
    ],
  },
];


const resolvePathMenu = (path) => {
  const title = path.split("/").pop();
  return {
    path,
    title,
  };
};

const resolveMenu = (item) => {
  if (typeof item === "string") {
    return resolvePathMenu(item);
  } else if (Object.prototype.toString.call(item) === "[object Object]") {
    return item;
  } else {
    return;
  }
};

export const apiSidebar = sidebarConfig.map((item) => {
  return {
    title: item.title,
    path: item.path,
    children: item.children.map((menu) => resolveMenu(menu)),
  };
});

export const firstDoc = apiSidebar[0].children[0]
