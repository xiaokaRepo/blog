---
title: 我的Mac工具清单
pubDate: 2024-06-01
categories: ['mac','工具']
description: ''
---
> 主要以小而美为主，1、尽量使用开源软件 2、尽量一个软件包含多个功能

![控制台](/images/CleanShot%202024-06-01%20at%2017.09.14@2x-zipic.png)
## 开机配置

### 1、启动台

```bash
# 设置列数
defaults write com.apple.dock springboard-columns -int 7

# 设置行数
defaults write com.apple.dock springboard-rows -int 7

# 重启 Dock 生效
killall Dock

# 恢复默认的列数和行数
defaults write com.apple.dock springboard-rows Default
defaults write com.apple.dock springboard-columns Default

# 重启 Dock 生效
killall Dock

```

### 2、取消4位密码限制

```bash

pwpolicy -clearaccountpolicies

```

### 3、允许安装任意来源的 App
```bash
sudo spctl --master-disable
```
> 系统偏好设置->安全性与隐私->点击左下角的小锁,选择任何来源
![](/images/CleanShot%202024-06-01%20at%2016.58.24@2x-zipic.png)

### 4、安装 Xcode Command Line Tools
```bash
xcode-select --install
```

### 5、HomeBrew
```bash
/bin/bash -c "$(curl -fsSL https://gitee.com/ineo6/homebrew-install/raw/master/install.sh)"

brew install cask

brew update

brew search keyword

brew uninstall keyword

brew list

```

### 6、键盘设置

设置三指拖移

![alt text](/images/CleanShot%202024-06-01%20at%2017.24.49@2x-zipic.png)


## 软件下载网站

* [appstorrent](https://appstorrent.ru/programs/)
* [macserialjunkie](https://www.macserialjunkie.com/forum/viewforum.php?f=9&sid=5f463e58099a5b4301d7beda193b5193)


## 系统工具

### 1、<a href="https://www.raycast.com">Raycast</a>

![alt text](/images/CleanShot%202024-06-01%20at%2017.33.25@2x-zipic.png)


**我的插件清单**

* Brew (https://raycast.com/nhojb/brew)
* Clean Keyboard (https://raycast.com/ike-gg/clean-keyboard)
* CleanShot X (https://raycast.com/Aayush9029/cleanshotx)
* Connect to VPN (https://raycast.com/rasmusbe/connect-to-vpn)
* Copy Path (https://raycast.com/koinzhang/copy-path)
* Google Gemini (https://raycast.com/EvanZhouDev/raycast-gemini)
* Installed Extensions (https://raycast.com/pernielsentikaer/installed-extensions)
* Kill Process (https://raycast.com/rolandleth/kill-process)
* ray.so (https://raycast.com/garrett/ray-so)
* Safari (https://raycast.com/loris/safari)
* Text Replacements (https://raycast.com/raycast/text-replacements)

### 2、<a href="https://www.keka.io/en/">keka压缩工具</a>

![alt text](/images/CleanShot2024-06-02at15.55.10-zipic.png)

### 3、<a href="https://bobtranslate.com">Bob翻译软件</a>

![alt text](/images/CleanShot2024-06-02at15.49.59-zipic.png)

### 4、<a href="https://rustdesk.com">rustdesk远程工具</a>
![alt text](/images/CleanShot2024-06-02at15.58.05-zipic.png)

### 5、<a href="https://cleanshot.com">CleanShot截图工具</a>
![alt text](/images/CleanShot2024-06-02at16.00.28-zipic.png)

### 6、<a href="https://apps.apple.com/cn/app/%E5%8F%B3%E9%94%AE%E5%8A%A9%E6%89%8B%E4%B8%93%E4%B8%9A%E7%89%88/id1555844307?mt=12">右键助手</a>
![alt text](/images/CleanShot2024-06-02at16.03.27-zipic.png)

### 7、<a href="https://zipic.5km.tech/#home">压图</a>
![alt text](/images/CleanShot2024-06-02at16.05.15-zipic.png)

### 8、<a href="https://icemenubar.app">菜单栏工具</a>
![alt text](https://github.com/jordanbaird/Ice/raw/main/Resources/rearranging.gif)

```bash
brew install jordanbaird-ice
```

## 开发工具

### 1、<a href="https://vfox.lhan.me">vfox</a>
> 多版本控制及团队环境管理工具。
```bash

# 安装vfox
brew install vfox

# 添加插件
vfox add nodejs

# 添加版本
vfox install nodejs@latest

# 设置全局
vfox use -g nodejs

```
### 2、<a href="https://code.visualstudio.com">vscode</a>

**我的插件**
* aura theme
* docker
* material icon theme
* GitHub Copilot


### 3、<a href="https://termius.com">termius</a>
![alt text](/images/CleanShot2024-06-02at15.51.55-zipic.png)


### 4、<a href="https://www.jetbrains.com">idea</a>
![alt text](/images/CleanShot2024-06-02at16.07.49-zipic.png)

## 网页插件

### 1、<a href="https://kaylees.site/index.html">Wipr</a>
![wipr](https://xiaoka-blog.s3.bitiful.net/blog/2024/06/af4e0418eac014dca9ed8fce0ba6965b.png)

### 2、<a href="">沉浸式翻译</a> 
![https://apps.apple.com/cn/app/%E6%B2%89%E6%B5%B8%E5%BC%8F%E7%BF%BB%E8%AF%91safari%E6%89%A9%E5%B1%95/id6447957425](https://xiaoka-blog.s3.bitiful.net/blog/2024/06/b4211b978154b8da1ba8484c82b6b6e4.png)

### 3、<a href="https://apps.apple.com/cn/app/tampermonkey/id1482490089?mt=12">tampermonkey</a>
![](https://xiaoka-blog.s3.bitiful.net/blog/2024/06/1cdc19480a277f4498942a12d61fe8db.png)

## 其他配置项

### 1、设置imac颜色主题

```bash
defaults write -g NSColorSimulateHardwareAccent -bool YES

defaults write -g NSColorSimulatedHardwareEnclosureNumber -int 7

```
![alt text](/images/CleanShot2024-06-02at16.11.10-zipic.png)

### 2、mac动态壁纸软件

[![alt](/images/CleanShot2024-06-02at16.13.21-zipic.png "dynamicwallpaper")](https://dynamicwallpaper.club/gallery?section=best)
