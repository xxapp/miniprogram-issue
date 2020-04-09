## 重现环境
* macOS Mojave 10.14.4
* nodejs v10.13.0
* npm 6.9.0

## 重现步骤

``` bash
git clone git@github.com:xxapp/miniprogram-issue.git
cd miniprogram-issue
npm install

# 修改 build.js 的 appid 和 privateKeyPath 配置

node build.js

# 扫描 destination.jpg 二维码
```

## 问题

扫码后一直卡在小程序启动页面

## 对照说明

1. 使用开发者 IDE 预览可以正常打开小程序
1. 使用 miniprogram-ci，将 pages/index/index.json 中的 "../../components/list" 改为 "../../components/list/index" 也可以正常打开小程序
