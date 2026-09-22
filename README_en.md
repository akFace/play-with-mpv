# play-with-mpv — Play Web Videos with mpv

### [中文](https://github.com/akFace/play-with-mpv/blob/main/README.md) | English

> Note: This document was translated by `AI-translated` and may contain some inaccuracies.

- Use an external player to play videos from web pages. Supports **Windows, macOS, and Linux**.
- This tool obtains the original video URL by sniffing web resources and works together with `yt-dlp`, allowing it to support most video websites.
- **Important:** Because the tool obtains the original URL by sniffing web resources, **wait until the video has loaded and started playing on the web page before launching mpv**.
- Supports most video websites, some encrypted videos, and websites supported by [yt-dlp](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md).
- Some websites, including **Bilibili and YouTube**, support selecting video quality, video codec, and subtitles.
- Danmaku / bullet-comment loading: [>> How to load Danmaku?](https://github.com/akFace/play-with-mpv/issues/2)
- How to set cookies: [Method ① — Recommended](https://github.com/akFace/play-with-mpv/issues/1)
- [>> FAQ / Common Issues](https://github.com/akFace/play-with-mpv#%E7%9B%B8%E5%85%B3%E9%97%AE%E9%A2%98)

## 🧱 Installation

### 1. Install the mpv Player

- [Follow the installation guide](https://github.com/akFace/mpv.config) (**Skip this step if mpv is already installed.**)

### 2. Install the Tampermonkey Extension

- [Tampermonkey — Recommended BETA version](https://www.tampermonkey.net/index.php) (**Skip this step if it is already installed.**)

### 3. Install the Userscript

- The **stable version** is generally more reliable, while the **beta version** receives new features first and may contain bugs.
- [play-with-mpv — Stable version](https://greasyfork.org/zh-CN/scripts/587265)
- [play-with-mpv — Beta version](https://github.com/akFace/play-with-mpv/raw/refs/heads/test/play-with-mpv.user.js)
- If you encounter **"This script has not been executed yet"**, causing the button to not appear or work, [see the solution](https://github.com/akFace/play-with-mpv/issues/8).

### 4. Install and Configure the Scheme Handler

- Download [Scheme Handler cross](https://github.com/akFace/scheme-handler-cross), a cross-platform tool for launching media players through custom URI schemes.
- Make sure [yt-dlp](https://github.com/yt-dlp/yt-dlp/releases) is installed.
  - **Windows:** Download `yt-dlp.exe` and place it in the same directory as `mpv.exe`, i.e. the mpv installation directory.
  - **macOS / Linux:** Install `yt-dlp` using the appropriate method for your system.
- Open Scheme Handler and configure it as shown below. **Make sure `MPV` is uppercase.**
  - **Windows:** Select `mpv.exe` in the mpv installation directory.
  - **macOS:** Select `/Applications/mpv.app`.
  - **Linux:** Select `/bin/mpv`.

![Scheme Handler configuration](https://github.com/akFace/play-with-mpv/raw/main/images/Snipaste_2026-07-16_17-53-00.jpg)

After configuration:

- **Windows / Linux:** Scheme Handler can be closed.
- **macOS:** Scheme Handler needs to remain running in the background.

Then open a video page and try it out.

## Related Issues / FAQ

### Q: I see "This script has not been executed yet", so the button does not appear or work.

A: [See the solution](https://github.com/akFace/play-with-mpv/issues/8).

### Q: How to set cookies?

A: `--cookies-from-browser` is currently unavailable in the relevant workflow ([details](https://github.com/yt-dlp/yt-dlp/issues/7271)).

Possible solutions:

- [Method ① — Recommended](https://github.com/akFace/play-with-mpv/issues/1)
- [Method ②](https://github.com/yt-dlp/yt-dlp/issues/7271#issuecomment-1584404779)

### Q: Some websites cannot be played. What should I do?

A: Try several times. If it still does not work, the website may simply not be supported.

### Q: mpv cannot be launched.

A: Follow the installation and configuration instructions step by step and verify that each component is configured correctly.

### Q: Why does loading take a long time?

A: Loading speed depends on the website's response speed, your network connection, and the time required by `yt-dlp` to analyze the video URL.

### Q: There are two buttons on the page. Which one should I use?

A: Try the button **above the video** first. If playback fails, try the other button.

### Q: Why is the beta version of Tampermonkey recommended?

A: Some websites require the `GM_cookie` API to work correctly. At the time of writing, this API is available in the beta version of Tampermonkey.

## Preview

![Preview](https://github.com/akFace/play-with-mpv/raw/main/images/Snipaste_2026-07-16_17-37-57.jpg)

## Update the List of Websites Supported by yt-dlp (Development)

- Install [Python](https://www.python.org/downloads/).

- Install `yt-dlp`:

```sh
pip install yt-dlp
```

- Run the following command to automatically export the list to the `static` directory:

```sh
python get_yt_dlp_supported_sites.py
```

## User Notice & Disclaimer

- The userscript reads website cookies through `GM_cookie` and `document.cookie`.
- The userscript does **not** collect or store users' cookies. Cookies are only used as parameters passed to the player for authentication / verification-related operations. Operations performed inside the player are outside the author's responsibility.
- This repository is an open-source project. The author is not responsible for legal issues resulting from modifications or derivative works made by third parties.

## Related Repositories

- [mpv](https://mpv.io/)
- [mpv.net](https://github.com/mpvnet-player/mpv.net)
- [mpv-config](https://github.com/akFace/mpv.config)
- [yt-dlp](https://github.com/yt-dlp/yt-dlp)
- [external-player](https://github.com/LuckyPuppy514/external-player)
- [Scheme Handler cross](https://github.com/akFace/scheme-handler-cross)
