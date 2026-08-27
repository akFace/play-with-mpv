# play-with-mpv 使用 mpv 播放网页中的视频

- 使用外部播放器播放网页中的视频，支持 Windows、macOS、Linux
- 本工具通过嗅探资源方式获取视频原始链接 + `yt-dlp` 配合，能够覆盖大部分视频网站
- 注：由于是通过嗅探方式获取原始链接，**请先等待网页视频加载播放后再唤起 mpv 播放器**
- 支持大部分视频网站，部分加密视频 以及 [yt-dlp 支持的网站](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)
- 部分网站（B 站/YouTube）支持选择画质、视频编码、字幕
- 弹幕加载方案：[>>如何加载弹幕？](https://github.com/akFace/play-with-mpv/issues/2)
- B 站加载最高画质方案：[方法 ① 推荐](https://github.com/akFace/play-with-mpv/issues/1)
- [>>常见相关问题](https://github.com/akFace/play-with-mpv#%E7%9B%B8%E5%85%B3%E9%97%AE%E9%A2%98)

## 🧱 安装

### 1. 安装 mpv 播放器

- [前往按教程下载安装](https://github.com/akFace/mpv.config) （**已安装的可跳过此步骤**）

### 2. 安装油猴插件

- [Tampermonkey-推荐 BETA 版本](https://www.tampermonkey.net/index.php)（**已安装的可跳过此步骤**）

### 3. 安装油猴脚本

- [play-with-mpv](https://greasyfork.org/zh-CN/scripts/587265)

### 4. 安装 Scheme Handler

- 下载：[Scheme Handler cross](https://github.com/akFace/scheme-handler-cross) 跨平台唤起播放器协议

- 确保已经安装：[👉 yt-dlp ](https://github.com/yt-dlp/yt-dlp/releases)，windows 用户进入下载`yt-dlp.exe`，放到`mpv.exe`同目录下，即：播放器安装目录，macOS、Linux 用户可自行搜索安装教程

- 打开 Scheme Handler 并设置如图：**注意 MPV 为大写**，Windows 系列选择播放器安装目录下的`mpv.exe`，macOS 系统选择 `/Applications/mpv.app`，Linux 系统选择`/bin/mpv`
  ![image](https://github.com/akFace/play-with-mpv/raw/main/images/Snipaste_2026-07-16_17-53-00.jpg)
- 设置完毕，Windows 端可关掉 Scheme Handler，打开视频页面试试吧

### 相关问题

- q: B 站如何加载最高画质？ a：由于`--cookies-from-browser`失效了（ [详情:issues](https://github.com/yt-dlp/yt-dlp/issues/7271)），解决办法：[方法 ① 推荐](https://github.com/akFace/play-with-mpv/issues/1)，[方法 ②](https://github.com/yt-dlp/yt-dlp/issues/7271#issuecomment-1584404779)
- q: 有些网站没办法播放？ a：多试几次，如果还是不行那也是无能为力，说明不支持！
- q：没办法唤起 mpv 播放器？a：请按照教程一步一步来！
- q：为何加载很慢？a：加载快慢与网站加载速度和网速以及 yt-dlp 解析速度有关
- q：页面上出现两个按钮时该用哪个？a：优先使用视频上方的，如果无法播放再点另一个
- q：为何更推荐 beta 版油猴？ a：部分网站需要调用`GM_cookie`才能正常播放，只有 beta 版的油猴才有这个 API

### 预览

![image](https://github.com/akFace/play-with-mpv/raw/main/images/Snipaste_2026-07-16_17-37-57.jpg)

### 更新导出 yt-dlp 支持的网站（开发用）

- install 👉 [python](https://www.python.org/downloads/)
- install yt-dlp 👇

```sh
pip install yt-dlp
```

- 执行命令，自动导出到 static 文件夹 👇

```sh
python get_yt_dlp_supported_sites.py
```

### 用户须知&免责声明

- 插件会读取网站的 cookie，`GM_cookie`和`document.cookie`
- 插件不会收集用户的 cookie，只用于传参给播放器校验操作，播放器内进行相关操作与本人无关
- 本仓库为开源项目，其他第三方用户进行二次改造所造成的相关法律问题与本人无关

### 参考相关仓库

- [mpv](https://mpv.io/)
- [mpvnet](https://github.com/mpvnet-player/mpv.net)
- [mpv-config](https://github.com/akFace/mpv.config)
- [yt-dlp](https://github.com/yt-dlp/yt-dlp)
- [external-player](https://github.com/LuckyPuppy514/external-player)
- [Scheme Handler cross](https://github.com/akFace/scheme-handler-cross)
