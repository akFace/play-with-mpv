# play-with-mpv 使用 mpv 播放网页中的视频

- 使用外部播放器播放网页中的视频
- 支持大部分视频网站，部分加密视频
- [yt-dlp 支持的网站](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md)
- 本工具通过嗅探资源方式获取视频原始链接 + `yt-dlp` 配合，能够覆盖大部分视频网站
- [>>常见相关问题](https://github.com/akFace/play-with-mpv#%E7%9B%B8%E5%85%B3%E9%97%AE%E9%A2%98)

## 🧱 安装

### 1. 安装油猴插件

- [Tampermonkey](https://www.tampermonkey.net/index.php)

### 2. 安装油猴脚本

- [play-with-mpv](https://greasyfork.org/zh-CN/scripts/587265)

### 3. 安装 URL Scheme Handler

- 下载：[URL Scheme Handler](https://github.com/LuckyPuppy514/url-scheme-handler)

- 确保已经安装：[👉 yt-dlp ](https://github.com/yt-dlp/yt-dlp/releases)，进入下载`yt-dlp.exe`，放到`mpv.exe`同目录下，即：播放器安装目录

- 打开 URL Scheme Handler 并设置如图：注意 MPV 为大写
  ![image](https://github.com/akFace/picx-images-hosting/raw/master/Tools/Snipaste_2026-07-16_17-53-00.99u1oq1914.webp)

### 相关问题

- q: 为何 B 站无法加载最高画质？ a：由于`--cookies-from-browser`失效了（ [详情:issues](https://github.com/yt-dlp/yt-dlp/issues/7271)），解决办法：[查看](https://github.com/yt-dlp/yt-dlp/issues/7271#issuecomment-1584404779)
- q: 有些网站没办法播放？ a：多试几次，如果还是不行那也是无能为力，说明不支持！
- q：没办法唤起 mpv 播放器？a：请按照教程一步一步来！
- q：为何加载很慢？a：加载快慢与网站加载速度和网速以及 yt-dlp 解析速度有关

### 预览

![image](https://github.com/akFace/picx-images-hosting/raw/master/Tools/Snipaste_2026-07-16_17-37-57.1ziyeqyi5c.webp)

### 参考相关仓库

- [mpv](https://mpv.io/)
- [mpvnet](https://github.com/mpvnet-player/mpv.net)
- [mpv-config](https://github.com/akFace/mpv.config)
- [external-player](https://github.com/LuckyPuppy514/external-player)
- [URL Scheme Handler](https://github.com/LuckyPuppy514/url-scheme-handler)
