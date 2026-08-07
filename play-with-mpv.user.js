// ==UserScript==
// @name         一键唤起 MPV 播放器
// @namespace    https://greasyfork.org/scripts/587265
// @version      1.1.16
// @description  使用 mpv 外部播放器播放网页中的视频，play-with-mpv | play in mpv | Play online webpage videos on MPV，在网页右下角添加悬浮按钮，支持获取当前网页视频链接并唤起 MPV。配置支持跨网站全局同步，字幕自动翻译随面板语言自适应。
// @author       akFace
// @license      MIT
// @icon         data:image/x-icon;base64,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
// @match        *://*/*
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-end
// @grant        GM_registerMenuCommand
// @resource yt_dlp_supported_sites https://cdn.gh-proxy.org/https://github.com/akFace/play-with-mpv/raw/main/static/yt_dlp_supported_sites.json
// @grant GM_getResourceText
// @require      https://unpkg.com/pako@3.0.1/dist/browser/pako.umd.min.js
// @homepage     https://github.com/akFace/play-with-mpv
// @downloadURL  https://update.greasyfork.org/scripts/587265/%E4%B8%80%E9%94%AE%E5%94%A4%E8%B5%B7%20MPV%20%E6%92%AD%E6%94%BE%E5%99%A8%EF%BC%88%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE%E5%90%8C%E6%AD%A5%E7%89%88%EF%BC%89.user.js
// @updateURL    https://update.greasyfork.org/scripts/587265/%E4%B8%80%E9%94%AE%E5%94%A4%E8%B5%B7%20MPV%20%E6%92%AD%E6%94%BE%E5%99%A8%EF%BC%88%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE%E5%90%8C%E6%AD%A5%E7%89%88%EF%BC%89.meta.js
// ==/UserScript==

(function () {
  ("use strict");

  // 读取 yt-dlp 支持的网站列表 JSON 数据
  const jsonDataYtDlp = GM_getResourceText("yt_dlp_supported_sites");
  let yt_dlp_supported_sites = null;
  if (jsonDataYtDlp) {
    yt_dlp_supported_sites = JSON.parse(jsonDataYtDlp);
  }
  // 排除来自yt-dlp 支持的网站，直接使用插件解析方式
  const useScriptPars = ["xiaohongshu.com", "douyin.com", "v.qq.com"];
  // 用于保存嗅探到的真实视频源地址
  let interceptedVideoUrls = new Set();
  let interceptedSubtitleUrls = new Set(); // 新增：存储嗅探到的字幕

  // 语言字典定义
  const I18N = {
    zh: {
      playBtnText: "🎬 MPV",
      panelTitle: "⚡ MPV 解析配置",
      proxyToggle: "启用网络代理",
      proxyPlaceholder: "例如 http://127.0.0.1:7897",
      qualityLabel: "最高分辨率限制",
      noLimit: "不作限制 (最高画质)",
      syncTimeLabel: "同步网页视频进度 (时间)",
      sizeLabel: "按钮尺寸调节",
      opacityLabel: "贴边隐藏透明度", // 新增
      subToggle: "自动下载与加载字幕",
      subTranslate: "自动翻译外语为中文 (CC)",
      langLabel: "语言 / Language",
      supportedTips:
        "未检测到视频或该页面可能不支持 MPV 播放，确定要唤起播放器吗？",
      handleShowPlayButton: "显示播放按钮",
    },
    en: {
      playBtnText: "🎬 MPV",
      panelTitle: "⚡ MPV Configuration",
      proxyToggle: "Enable Proxy",
      proxyPlaceholder: "e.g. http://127.0.0.1:7897",
      qualityLabel: "Max Resolution Limit",
      noLimit: "No Limit (Best Quality)",
      syncTimeLabel: "Sync Video Progress (Time)",
      sizeLabel: "Button Size Adjustment",
      opacityLabel: "Edge Hide Opacity", // 新增
      subToggle: "Auto Download & Load Subs",
      subTranslate: "Auto Translate Subs to English (CC)",
      langLabel: "Language / 语言",
      supportedTips:
        "No video detected or this site may not support MPV playback. Are you sure to open the player?",
      handleShowPlayButton: "Show play button",
    },
  };

  // 获取浏览器默认语言
  function getBrowserDefaultLang() {
    const lang = navigator.language || navigator.userLanguage;
    return lang && lang.toLowerCase().startsWith("zh") ? "zh" : "en";
  }

  // 默认配置初始化
  const DEFAULT_SETTINGS = {
    proxyEnabled: false,
    networkProxy: "http://127.0.0.1:7897",
    quality: "2160",
    subEnabled: true,
    subTranslate: true,
    syncTime: false, // 是否同步时间
    btnSize: 40, // 按钮默认大小 (px)
    edgeOpacity: 0.5, // 贴边隐藏透明度
    positionSide: "right", // 记录在左侧还是右侧
    positionTop: -1, // 记录垂直 Y 轴位置
    lang: getBrowserDefaultLang(), // 默认语言自适应
  };

  function t(key) {
    const settings = getSettings();
    const lang = settings.lang || getBrowserDefaultLang();
    return I18N[lang][key] || I18N["en"][key] || key;
  }

  // 使用 GM_getValue 实现跨域全局配置读取
  function getSettings() {
    const saved = GM_getValue("mpv_player_settings", null);
    if (saved) {
      try {
        return Object.assign({}, DEFAULT_SETTINGS, JSON.parse(saved));
      } catch (e) {}
    }
    return Object.assign({}, DEFAULT_SETTINGS);
  }

  // 使用 GM_setValue 实现跨域全局配置写入
  function saveSettings(settings) {
    GM_setValue("mpv_player_settings", JSON.stringify(settings));
  }

  function compress(str) {
    return btoa(String.fromCharCode(...pako.gzip(str)));
  }

  // 创建 Trusted Types 策略
  let sanitizerPolicy;
  try {
    sanitizerPolicy = window.trustedTypes.createPolicy("playWithMpv", {
      createHTML: (string) => string,
      createScript: (input) => input,
    });
  } catch (error) {
    sanitizerPolicy = {
      createHTML: (string) => string,
      createScript: (input) => input,
    };
  }

  // 唤起 MPV 核心函数
  function openMpv(media) {
    const settings = getSettings();
    const proxyArg =
      settings.proxyEnabled && settings.networkProxy
        ? `--ytdl-raw-options="proxy=[${settings.networkProxy}]"`
        : "";
    const httpProxyArg =
      settings.proxyEnabled && settings.networkProxy
        ? `--http-proxy="${settings.networkProxy}"`
        : "";

    const qualityArg = settings.quality
      ? `--ytdl-format="bestvideo[height<=${settings.quality}]+bestaudio/best"`
      : "";

    const startTimeArg =
      settings.syncTime && media.time ? `--start="${media.time}"` : "";

    let args = [
      `"${media.video}"`,
      media.audio ? `--audio-file="${media.audio}"` : "",
      media.subtitle ? `--sub-file="${media.subtitle}"` : "",
      media.title ? `--force-media-title="${media.title}"` : "",
      media.origin ? `--http-header-fields="Origin: ${media.origin}"` : "",
      media.referrer ? `--http-header-fields="Referer: ${media.referrer}"` : "",
      media.referrer
        ? `--http-header-fields="referrer: ${media.referrer}"`
        : "",
      media.cookie ? `--http-header-fields="Cookie: ${media.cookie}"` : "",
      media.referrer ? `--referrer="${media.referrer}"` : "",
      media.ua ? `--user-agent="${media.ua}"` : "",
      startTimeArg,
      proxyArg,
      httpProxyArg,
      qualityArg,
      `--script-opts-append=ytdl_hook-ytdl_path=yt-dlp`,
      `--cookies=yes`,
    ];

    if (settings.subEnabled) {
      args.push(`--ytdl-raw-options-append=write-subs=`);
      args.push(`--ytdl-raw-options-append=write-auto-subs=`);

      if (settings.lang === "zh") {
        if (settings.subTranslate) {
          args.push(
            `--ytdl-raw-options-append=sub-langs="en-orig-zh-Hans,en-orig-zh-CN,en-orig-zh,auto-zh-Hans,auto-zh-CN,auto-zh,zh-Hans,zh-CN,zh,zh-TW,zh-HK"`
          );
        } else {
          args.push(
            `--ytdl-raw-options-append=sub-langs="zh-Hans,zh-CN,zh,zh-TW,zh-HK,en"`
          );
        }
      } else {
        if (settings.subTranslate) {
          args.push(
            `--ytdl-raw-options-append=sub-langs="zh-orig-en,auto-en,en"`
          );
        } else {
          args.push(
            `--ytdl-raw-options-append=sub-langs="en,en-US,en-GB,zh-Hans"`
          );
        }
      }
    }

    args = args.filter((item) => item !== "");
    console.log("MPV 启动参数：", args);
    window.open(`ush://MPV?${compress(args.join(" "))}`, "_self");
  }

  /**
   * 监听网页 URL 变化
   * @param {Function} callback - URL 发生变化时的回调函数，接收新的 URL 作为参数
   * @returns {Function} unobserve - 用于取消监听的函数
   */
  function watchUrlChange(callback) {
    let lastUrl = location.href;
    const handleUrlChange = () => {
      const currentUrl = location.href;
      if (currentUrl !== lastUrl) {
        lastUrl = currentUrl;
        callback(currentUrl);
      }
    };
    window.addEventListener("popstate", handleUrlChange);
    const originalPushState = history.pushState;
    history.pushState = function (...args) {
      const result = originalPushState.apply(this, args);
      handleUrlChange();
      return result;
    };
    const originalReplaceState = history.replaceState;
    history.replaceState = function (...args) {
      const result = originalReplaceState.apply(this, args);
      handleUrlChange();
      return result;
    };

    // 返回一个用于卸载监听的清理函数（可选）
    return function unobserve() {
      window.removeEventListener("popstate", handleUrlChange);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }

  async function interceptedVideo() {
    // 监听所有资源加载请求
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        const url = entry.name;
        checkAndSaveUrl(url);
      });
    });
    observer.observe({ entryTypes: ["resource"] });

    const originalFetch = window.fetch;
    window.fetch = async function (...args) {
      const url = args[0];
      if (typeof url === "string") checkAndSaveUrl(url);
      return originalFetch.apply(this, args);
    };

    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (method, url, ...args) {
      if (typeof url === "string") checkAndSaveUrl(url);
      return originalOpen.apply(this, [method, url, ...args]);
    };

    function checkAndSaveUrl(url) {
      const fileVideoExtensions = [
        ".m3u8",
        ".mpd",
        ".mp4",
        ".flv",
        ".mkv",
        ".webm",
        ".avi",
        ".mov",
        ".wmv",
        ".3gp",
        ".3gp2",
        ".ogg",
        ".ogv",
        ".m4s",
        ".f4v",
        ".acc",
        ".rmvb",
        ".image",
        ".m3u",
      ];
      const fileSubtitleExtensions = [".vtt", ".srt", ".ass", ".pgs"];

      // 排除关键词
      const excludeKey = [
        "/log",
        "/stat",
        "/report",
        "/ping",
        "/track",
        "/track_ua",
        "/analysis",
        "/console",
        "/preview",
        // --- 错误监控与反馈 ---
        "sentry",
        "bugsnag",
        "crash",
        "feedback",
        "monitor",
        "exception",
      ];

      try {
        const urlObj = new URL(url, window.location.href);
        const pathnameLower = urlObj.pathname.toLowerCase(); // 关键：只取路径部分并转小写

        // 1. 检查 pathname 是否以合法的视频格式结尾（允许后面带 ?query 参数）
        // 例如：/path/video.m3u8?token=123 的 pathname 是 /path/video.m3u8，完美匹配
        let matchedExt = fileVideoExtensions.find((ext) =>
          pathnameLower.endsWith(ext)
        );

        if (matchedExt) {
          const urlLower = urlObj.href.toLowerCase();
          let shouldExclude = false;

          // 2. 检查路径或参数中是否包含排除关键词
          for (const key of excludeKey) {
            const keyIndex = urlLower.indexOf(key.toLowerCase());
            const extIndex = urlLower.indexOf(matchedExt.toLowerCase());

            // 如果排除词存在，且出现在视频后缀的前面，则排除
            if (keyIndex !== -1 && keyIndex < extIndex) {
              shouldExclude = true;
              break;
            }
          }
          if (!shouldExclude) {
            interceptedVideoUrls.add(urlObj.href);
            // console.log("🎉 成功嗅探到真实视频流:", urlObj.href);
          }
        }

        if (fileSubtitleExtensions.some((ext) => pathnameLower.endsWith(ext))) {
          interceptedSubtitleUrls.add(urlObj.href);
          console.log("🎉 成功嗅探到字幕文件:", urlObj.href);
        }
      } catch (e) {}
    }
  }

  interceptedVideo();

  // 从上层页面接收数据到iframe，主要是视频源、标题、来源等信息
  let mediaData = null;

  /**
   * 向指定的 iframe 发送当前页面的标题
   * @param {HTMLIFrameElement} iframeElement - 目标 iframe DOM 元素
   * @param {string} [customTitle] - 可选，不传则默认取主页面的 document.title
   */
  function initSendIframeMessage(iframeElement, data) {
    function sendTitleToIframe(iframe, sendData) {
      if (!iframe || !iframe.contentWindow) {
        console.warn("目标 iframe 不存在或尚未加载完成");
        return;
      }

      // 执行发送
      iframe.contentWindow.postMessage(
        { type: "SET_DATA_PLAYER", data: sendData },
        "*"
      );
    }
    // 1. iframe 加载完成后发送一次
    iframeElement.addEventListener("load", () => {
      sendTitleToIframe(iframeElement, data);
    });

    // 2. 如果 iframe 已经加载完成了，立即发送一次
    if (
      iframeElement.contentDocument &&
      iframeElement.contentDocument.readyState === "complete"
    ) {
      sendTitleToIframe(iframeElement, data);
    } else {
      // 或者简单粗暴延时重试一次（应对部分动态渲染的页面）
      setTimeout(() => sendTitleToIframe(iframeElement, data), 1000);
    }
  }

  function handleIframeMessage() {
    window.addEventListener("message", (e) => {
      if (e.data && e.data.type === "SET_DATA_PLAYER") {
        mediaData = e.data.data;
      }
    });
  }

  // 初始化 iframe 设置和消息监听
  function initSetIframe() {
    // 监听页面消息，接收iframe传来的数据
    handleIframeMessage();
    setTimeout(() => {
      const iframes = document.querySelectorAll("iframe");
      if (iframes) {
        iframes.forEach((frame) => {
          const data = {
            title: document.title,
            origin: window.location.origin,
            referrer: window.location.origin + window.location.pathname,
          };
          initSendIframeMessage(frame, data);
          // 针对iframe的沙箱属性进行修改，允许跨域访问和脚本执行
          if (frame.getAttribute("sandbox")) {
            frame.setAttribute(
              "sandbox",
              "allow-popups allow-scripts allow-same-origin allow-top-navigation allow-forms"
            );
          }
        });
      }
    }, 1000);
  }

  // ==========================================
  // UI 渲染与样式美化
  // ==========================================
  let showContainer = null;
  function initUI() {
    if (document.getElementById("mpv-control-container")) return; // 避免重复创建

    const settings = getSettings();
    let currentSide = settings.positionSide || "right";

    // 创建右下角主容器
    const container = document.createElement("div");
    container.id = "mpv-control-container";

    // 根据持久化配置初始化布局位置
    let initialCssTop = "";
    let initialCssBottom = "bottom: 60px !important;";
    let initialCssSide = "right: 5px !important;";
    if (settings.positionTop !== undefined && settings.positionTop >= 0) {
      initialCssTop = `top: ${settings.positionTop * 100}% !important;`;
      initialCssBottom = "";
    }
    if (currentSide === "left") {
      initialCssSide = "left: 5px !important;";
    } else {
      initialCssSide = "right: 5px !important;";
    }

    container.style.cssText = `
        background: linear-gradient(135deg, #ff0055, #ff5500) !important;
        color: white !important;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        font-weight: bold !important;
        border: none !important;
        border-radius: 50px !important;
        box-shadow: 0 4px 15px rgba(255, 0, 85, 0.3) !important;
        cursor: pointer !important;
        position: fixed !important;
        ${initialCssBottom}
        ${initialCssTop}
        ${initialCssSide}
        z-index: 2147483647 !important;
        display: flex !important;
        align-items: center !important;
        transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
      `;

    // 1. 齿轮设置按钮
    const setBtn = document.createElement("button");
    setBtn.id = "mpv-set-btn";
    setBtn.innerHTML = sanitizerPolicy.createHTML("⚙️");
    setBtn.title = "点击设置，按住可拖拽位置";
    setBtn.style.cssText = `
        border: none !important;
        border-radius: 50% !important;
        background: rgba(255, 255, 255, 0.9) !important;
        color: #333 !important;
        box-shadow: 0 4px 15px rgba(0,0,0,0.15) !important;
        cursor: grab !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
        padding: 0 !important;
        margin: 0 !important;
      `;

    setBtn.addEventListener("mouseenter", () => {
      setBtn.style.transform = "rotate(45deg) scale(1.08)";
      setBtn.style.background = "#ffffff";
    });
    setBtn.addEventListener("mouseleave", () => {
      setBtn.style.transform = "rotate(0deg) scale(1)";
      setBtn.style.background = "rgba(255, 255, 255, 0.9)";
    });

    // 2. 播放主按钮
    const playBtn = document.createElement("button");
    playBtn.id = "mpv-float-btn";
    playBtn.style.cssText = `
        color: white !important;
        font-weight: bold !important;
        border: none !important;
        cursor: pointer !important;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
        user-select: none !important;
        white-space: nowrap !important;
        padding: 0;
        background: transparent !important;
      `;

    // --- 新增：倒计时隐藏逻辑与拖拽逻辑 ---
    let hideTimer = null;
    let isShowModel = false;
    const HIDE_TIME_OUT = 1500;

    // 拖拽相关状态
    let isDragging = false;
    let hasMoved = false;
    let startX, startY, initialLeft, initialTop;

    const hideContainer = () => {
      const s = getSettings();
      const opacity = s.edgeOpacity !== undefined ? s.edgeOpacity : 0.4;
      container.style.setProperty("opacity", opacity.toString(), "important");
      if (currentSide === "right") {
        container.style.setProperty(
          "transform",
          "translateX(calc(100% + -20px))",
          "important"
        );
      } else {
        container.style.setProperty(
          "transform",
          "translateX(calc(-100% + 20px))",
          "important"
        );
      }
    };

    showContainer = () => {
      container.style.setProperty("opacity", "1", "important");
      container.style.setProperty(
        "transform",
        "scale(1) translateX(0px)",
        "important"
      );
    };

    const startHideTimer = () => {
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        hideContainer();
      }, HIDE_TIME_OUT);
    };

    container.addEventListener("mouseenter", () => {
      if (isDragging) return;
      clearTimeout(hideTimer);
      showContainer();
    });

    container.addEventListener("mouseleave", () => {
      if (isShowModel || isDragging) return;
      container.style.setProperty(
        "transform",
        "scale(1) translateX(0)",
        "important"
      );
      startHideTimer();
    });

    startHideTimer();

    // =============== 拖拽实现 ===============
    function snapToEdge() {
      const rect = container.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // 保证在纵向视口内
      let targetTop = rect.top;
      if (targetTop < 0) targetTop = 0;
      if (targetTop + rect.height > viewportHeight)
        targetTop = viewportHeight - rect.height;

      container.style.setProperty(
        "top",
        `${(targetTop / viewportHeight) * 100}%`,
        "important"
      );
      container.style.setProperty("bottom", "auto", "important");

      // 根据当前位置计算靠左还是靠右
      const centerX = rect.left + rect.width / 2;
      if (centerX < viewportWidth / 2) {
        currentSide = "left";
        container.style.setProperty("left", "5px", "important");
        container.style.setProperty("right", "auto", "important");
      } else {
        currentSide = "right";
        container.style.setProperty("right", "5px", "important");
        container.style.setProperty("left", "auto", "important");
      }

      container.style.setProperty(
        "transform",
        "scale(1) translateX(0)",
        "important"
      );
      startHideTimer(); // 贴边后开始倒计时自动隐藏

      // 持久化记录停靠位置
      const s = getSettings();
      s.positionSide = currentSide;
      s.positionTop = targetTop / window.innerHeight;
      saveSettings(s);
    }

    function onDragStart(e) {
      if (e.type === "mousedown" && e.button !== 0) return; // 仅左键
      let clientX, clientY;
      if (e.type === "touchstart") {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      startX = clientX;
      startY = clientY;

      const rect = container.getBoundingClientRect();
      initialLeft = rect.left;
      initialTop = rect.top;
      hasMoved = false;

      // 拖拽时取消过渡动画
      container.style.setProperty("transition", "none", "important");

      document.addEventListener("mousemove", onDragMove);
      document.addEventListener("touchmove", onDragMove, { passive: false });
      document.addEventListener("mouseup", onDragEnd);
      document.addEventListener("touchend", onDragEnd);
    }

    function onDragMove(e) {
      let clientX, clientY;
      if (e.type === "touchmove") {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const dx = clientX - startX;
      const dy = clientY - startY;

      // 判断确实有移动才视为拖拽（防止轻微抖动误判）
      if (!hasMoved && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
        hasMoved = true;
        isDragging = true;
        // 清除默认的 right/bottom 样式以允许 top/left 自由生效
        container.style.setProperty("right", "auto", "important");
        container.style.setProperty("bottom", "auto", "important");
        setBtn.style.cursor = "grabbing";
      }

      if (hasMoved) {
        if (e.cancelable) e.preventDefault(); // 防止触屏滚动
        container.style.setProperty(
          "left",
          `${initialLeft + dx}px`,
          "important"
        );
        container.style.setProperty("top", `${initialTop + dy}px`, "important");
      }
    }

    function onDragEnd(e) {
      document.removeEventListener("mousemove", onDragMove);
      document.removeEventListener("touchmove", onDragMove);
      document.removeEventListener("mouseup", onDragEnd);
      document.removeEventListener("touchend", onDragEnd);

      setBtn.style.cursor = "grab";
      container.style.setProperty(
        "transition",
        "all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)",
        "important"
      );

      if (hasMoved) {
        snapToEdge();
        // 延时重置拖拽标记，拦截随后的点击事件
        setTimeout(() => {
          isDragging = false;
        }, 0);
      }
    }

    setBtn.addEventListener("mousedown", onDragStart);
    setBtn.addEventListener("touchstart", onDragStart, { passive: false });
    // ===========================================

    function updateButtonSizes(size) {
      setBtn.style.width = `${size}px`;
      setBtn.style.height = `${size}px`;
      setBtn.style.fontSize = `${size * 0.45}px`;

      playBtn.style.height = `${size}px`;
      playBtn.style.paddingLeft = `${size * 0.2}px`;
      playBtn.style.paddingRight = `${size * 0.4}px`;
      playBtn.style.fontSize = `${size * 0.34}px`;
    }

    updateButtonSizes(settings.btnSize);

    container.appendChild(setBtn);
    container.appendChild(playBtn);

    // 3. 设置弹窗
    const modal = document.createElement("div");
    modal.id = "mpv-settings-modal";
    modal.style.cssText = `
        position: absolute !important;
        bottom: calc(100% + 15px) !important;
        right: 5px !important;
        cursor: default !important;
        z-index: 2147483647 !important;
        width: 320px !important;
        max-height: 80vh !important;
        overflow-y: auto !important;
        background: rgba(255, 255, 255, 0.85) !important;
        backdrop-filter: blur(20px) !important;
        -webkit-backdrop-filter: blur(20px) !important;
        border: 1px solid rgba(255, 255, 255, 0.4) !important;
        border-radius: 20px !important;
        box-shadow: 0 10px 35px rgba(0,0,0,0.2) !important;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
        padding: 20px !important;
        display: none;
        flex-direction: column !important;
        gap: 15px !important;
        transition: all 0.3s ease !important;
        opacity: 0;
        transform: translateY(15px) scale(0.95);
        box-sizing: border-box !important;
        color: #333 !important;
      `;

    modal.innerHTML = sanitizerPolicy.createHTML(`
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(0,0,0,0.06); padding-bottom: 10px;">
          <div class="mpv-modal-title" style="font-size: 15px; font-weight: bold; color: #333; display: flex; align-items: center;">
            <span id="mpv-title" style="font-size: 16px; font-weight: bold; color: #1a1a1a; display: inline-block;"></span>
            <a style="font-size: 14px; color: #ff0055; text-decoration: none;display: flex; align-items: center; margin-left: 5px;" target="_blank" title="GitHub" href="https://github.com/akFace/play-with-mpv">
              <svg t="1731923678389" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5894" width="20" height="20">
                        <path d="M20.48 503.72608c0 214.4256 137.4208 396.73856 328.94976 463.6672 25.8048 6.5536 21.87264-11.8784 21.87264-24.33024v-85.07392c-148.93056 17.44896-154.86976-81.1008-164.94592-97.52576-20.23424-34.52928-67.91168-43.33568-53.69856-59.76064 33.91488-17.44896 68.48512 4.42368 108.46208 63.61088 28.95872 42.88512 85.44256 35.6352 114.15552 28.4672a138.8544 138.8544 0 0 1 38.0928-66.7648c-154.25536-27.60704-218.60352-121.77408-218.60352-233.79968 0-54.31296 17.94048-104.2432 53.0432-144.54784-22.36416-66.43712 2.08896-123.24864 5.3248-131.6864 63.81568-5.7344 130.00704 45.6704 135.168 49.68448 36.2496-9.78944 77.57824-14.9504 123.82208-14.9504 46.4896 0 88.064 5.3248 124.5184 15.23712 12.288-9.4208 73.80992-53.53472 133.12-48.128 3.15392 8.43776 27.0336 63.93856 6.02112 129.4336 35.59424 40.38656 53.69856 90.76736 53.69856 145.24416 0 112.18944-64.7168 206.4384-219.42272 233.71776a140.0832 140.0832 0 0 1 41.7792 99.9424v123.4944c0.86016 9.87136 0 19.6608 16.50688 19.6608 194.31424-65.49504 334.2336-249.15968 334.2336-465.5104C1002.57792 232.48896 782.66368 12.77952 511.5904 12.77952 240.18944 12.65664 20.48 232.40704 20.48 503.72608z" fill="#000000" opacity=".65" p-id="5895"></path>
                    </svg></a>
          </div>
          <span id="mpv-close-modal" style="cursor:pointer; font-size: 18px; color:#888; font-weight:bold; transition:color 0.2s;">&times;</span>
        </div>
        
        <!-- 代理设置 -->
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <label id="mpv-label-proxy" style="font-size: 13px; font-weight: 600; color: #333;"></label>
            <input type="checkbox" id="mpv-proxy-toggle" style="cursor: pointer; width: 38px; height: 18px; accent-color: #ff0055; color: #333;display: block;">
          </div>
          <input type="text" id="mpv-proxy-addr" style="
            width: 100%; padding: 8px 12px; border: 1px solid rgba(0,0,0,0.12); border-radius: 8px; 
            font-size: 12px; background: rgba(255,255,255,0.7); outline: none; transition: border-color 0.2s; box-sizing: border-box; color: #333; 
          " />
        </div>
  
        <!-- 画质设置 -->
        <div>
          <label id="mpv-label-quality" style="font-size: 13px; font-weight: 600; color: #333; display: block; margin-bottom: 6px;"></label>
          <select id="mpv-quality-select" style="
            width: 100%; padding: 8px 12px; border: 1px solid rgba(0,0,0,0.12); border-radius: 8px; 
            font-size: 13px; background: rgba(255,255,255,0.7); outline: none; cursor: pointer; box-sizing: border-box; color: #333;
          ">
            <option value="2160">4K Ultra HD (2160p)</option>
            <option value="1440">2K Quad HD (1440p)</option>
            <option value="1080">Full HD (1080p)</option>
            <option value="720">HD (720p)</option>
            <option value="" id="mpv-quality-unlimit"></option>
          </select>
        </div>
  
        <!-- 播放时间与大小控制 -->
        <div style="border-top: 1px solid rgba(0,0,0,0.06); padding-top: 12px; display: flex; flex-direction: column; gap: 10px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <label id="mpv-label-synctime" style="font-size: 13px; font-weight: 600; color: #333;"></label>
            <input type="checkbox" id="mpv-time-toggle" style="cursor: pointer; width: 38px; height: 18px; accent-color: #ff0055;display: block;">
          </div>
          
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <label id="mpv-label-size" style="font-size: 13px; font-weight: 600; color: #333;"></label>
              <span id="mpv-size-val" style="font-size: 11px; color: #ff0055; font-weight: bold;">44px</span>
            </div>
            <input type="range" id="mpv-size-slider" min="20" max="60" step="1" style="
              width: 100%; accent-color: #ff0055; height: 4px; background: rgba(0,0,0,0.1); border-radius: 2px; outline: none; cursor: pointer;
            ">
          </div>

          <!-- 新增透明度调节 -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <label id="mpv-label-opacity" style="font-size: 13px; font-weight: 600; color: #333;"></label>
              <span id="mpv-opacity-val" style="font-size: 11px; color: #ff0055; font-weight: bold;">0.4</span>
            </div>
            <input type="range" id="mpv-opacity-slider" min="0" max="1" step="0.1" style="
              width: 100%; accent-color: #ff0055; height: 4px; background: rgba(0,0,0,0.1); border-radius: 2px; outline: none; cursor: pointer;
            ">
          </div>
        </div>
  
        <!-- 字幕设置 -->
        <div style="display: flex; flex-direction: column; gap: 8px; border-top: 1px solid rgba(0,0,0,0.06); padding-top: 12px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <label id="mpv-label-sub" style="font-size: 13px; font-weight: 600; color: #333;"></label>
            <input type="checkbox" id="mpv-sub-toggle" style="cursor: pointer; width: 38px; height: 18px; accent-color: #ff0055;display: block;">
          </div>
          <div id="mpv-translate-wrap" style="display: flex; justify-content: space-between; align-items: center; padding-left: 10px; transition: opacity 0.2s;">
            <label id="mpv-label-translate" style="font-size: 12px; color: #666;"></label>
            <input type="checkbox" id="mpv-translate-toggle" style="cursor: pointer; width: 34px; height: 18px; accent-color: #ff0055;display: block;">
          </div>
        </div>
  
        <!-- 语言选择 -->
        <div style="border-top: 1px solid rgba(0,0,0,0.06); padding-top: 12px;">
          <label id="mpv-label-lang" style="font-size: 13px; font-weight: 600; color: #333; display: block; margin-bottom: 6px;"></label>
          <select id="mpv-lang-select" style="
            width: 100%; padding: 8px 12px; border: 1px solid rgba(0,0,0,0.12); border-radius: 8px; 
            font-size: 13px; background: rgba(255,255,255,0.7); outline: none; cursor: pointer; box-sizing: border-box; color: #333;
          ">
            <option value="zh">简体中文</option>
            <option value="en">English</option>
          </select>
        </div>
      `);

    const style = document.createElement("style");
    style.id = "mpv-settings-modal-style";
    style.innerHTML = sanitizerPolicy.createHTML(`
          #mpv-settings-modal input, #mpv-settings-modal select, #mpv-settings-modal button {
             -webkit-appearance: auto;
          }
      `);
    document.head.appendChild(style);

    // 将弹窗附加到 container 内，实现跟随
    container.appendChild(modal);
    // 最后将包含弹窗的 container 一并附加到 body
    document.body.appendChild(container);

    const proxyToggle = modal.querySelector("#mpv-proxy-toggle");
    const proxyAddrInput = modal.querySelector("#mpv-proxy-addr");
    const qualitySelect = modal.querySelector("#mpv-quality-select");
    const syncTimeToggle = modal.querySelector("#mpv-time-toggle");
    const sizeSlider = modal.querySelector("#mpv-size-slider");
    const sizeValDisplay = modal.querySelector("#mpv-size-val");
    const opacitySlider = modal.querySelector("#mpv-opacity-slider");
    const opacityValDisplay = modal.querySelector("#mpv-opacity-val");
    const subToggle = modal.querySelector("#mpv-sub-toggle");
    const translateToggle = modal.querySelector("#mpv-translate-toggle");
    const translateWrap = modal.querySelector("#mpv-translate-wrap");
    const langSelect = modal.querySelector("#mpv-lang-select");
    const closeBtn = modal.querySelector("#mpv-close-modal");

    function updateLanguageUI(langKey) {
      const text = I18N[langKey] || I18N["en"];

      playBtn.innerHTML = sanitizerPolicy.createHTML(text.playBtnText);
      modal.querySelector("#mpv-title").innerText = text.panelTitle;
      modal.querySelector("#mpv-label-proxy").innerText = text.proxyToggle;
      proxyAddrInput.placeholder = text.proxyPlaceholder;
      modal.querySelector("#mpv-label-quality").innerText = text.qualityLabel;
      modal.querySelector("#mpv-quality-unlimit").innerText = text.noLimit;
      modal.querySelector("#mpv-label-synctime").innerText = text.syncTimeLabel;
      modal.querySelector("#mpv-label-size").innerText = text.sizeLabel;
      modal.querySelector("#mpv-label-opacity").innerText = text.opacityLabel;
      modal.querySelector("#mpv-label-sub").innerText = text.subToggle;
      modal.querySelector("#mpv-label-translate").innerText = text.subTranslate;
      modal.querySelector("#mpv-label-lang").innerText = text.langLabel;
    }

    function loadUiFromSettings() {
      const s = getSettings();

      langSelect.value = s.lang;
      updateLanguageUI(s.lang);

      proxyToggle.checked = s.proxyEnabled;
      proxyAddrInput.value = s.networkProxy || "";
      proxyAddrInput.disabled = !s.proxyEnabled;
      proxyAddrInput.style.opacity = s.proxyEnabled ? "1" : "0.5";

      qualitySelect.value = s.quality || "";
      syncTimeToggle.checked = s.syncTime;

      sizeSlider.value = s.btnSize;
      sizeValDisplay.innerText = `${s.btnSize}px`;

      opacitySlider.value = s.edgeOpacity !== undefined ? s.edgeOpacity : 0.4;
      opacityValDisplay.innerText = `${opacitySlider.value}`;

      subToggle.checked = s.subEnabled;
      translateToggle.checked = s.subTranslate;
      translateToggle.disabled = !s.subEnabled;
      translateWrap.style.opacity = s.subEnabled ? "1" : "0.4";

      updateButtonSizes(s.btnSize);
    }

    function updateAndSave() {
      const currentSize = parseInt(sizeSlider.value, 10);
      sizeValDisplay.innerText = `${currentSize}px`;
      const currentOpacity = parseFloat(opacitySlider.value);
      opacityValDisplay.innerText = `${currentOpacity}`;
      const selectedLang = langSelect.value;

      const s = getSettings();
      s.proxyEnabled = proxyToggle.checked;
      s.networkProxy = proxyAddrInput.value.trim();
      s.quality = qualitySelect.value;
      s.syncTime = syncTimeToggle.checked;
      s.btnSize = currentSize;
      s.edgeOpacity = currentOpacity;
      s.subEnabled = subToggle.checked;
      s.subTranslate = translateToggle.checked;
      s.lang = selectedLang;

      saveSettings(s);

      // 如果当前是隐藏状态，立刻刷新透明度
      if (!isShowModel && container.style.opacity !== "1") {
        container.style.setProperty(
          "opacity",
          currentOpacity.toString(),
          "important"
        );
      }

      updateLanguageUI(selectedLang);
      updateButtonSizes(currentSize);

      proxyAddrInput.disabled = !s.proxyEnabled;
      proxyAddrInput.style.opacity = s.proxyEnabled ? "1" : "0.5";
      translateToggle.disabled = !s.subEnabled;
      translateWrap.style.opacity = s.subEnabled ? "1" : "0.4";
    }

    loadUiFromSettings();

    [
      proxyToggle,
      qualitySelect,
      syncTimeToggle,
      subToggle,
      translateToggle,
      langSelect,
    ].forEach((el) => {
      el.addEventListener("change", updateAndSave);
    });
    proxyAddrInput.addEventListener("input", updateAndSave);
    sizeSlider.addEventListener("input", updateAndSave);
    opacitySlider.addEventListener("input", updateAndSave);

    function showModal() {
      // --- 新增：根据当前按钮位置动态调整弹窗弹出方向，防止溢出屏幕 ---
      const rect = container.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      if (rect.top < viewportHeight / 2) {
        modal.style.setProperty("top", "calc(100% + 15px)", "important");
        modal.style.setProperty("bottom", "auto", "important");
      } else {
        modal.style.setProperty("bottom", "calc(100% + 15px)", "important");
        modal.style.setProperty("top", "auto", "important");
      }

      if (rect.left < viewportWidth / 2) {
        modal.style.setProperty("left", "5px", "important");
        modal.style.setProperty("right", "auto", "important");
      } else {
        modal.style.setProperty("right", "5px", "important");
        modal.style.setProperty("left", "auto", "important");
      }
      // -------------------------------------------------------------

      showContainer();
      isShowModel = true;
      loadUiFromSettings();
      modal.style.display = "flex";
      setTimeout(() => {
        modal.style.opacity = "1";
        modal.style.transform = "translateY(0px) scale(1)";
      }, 10);
    }

    function hideModal() {
      modal.style.opacity = "0";
      modal.style.transform = "translateY(15px) scale(0.95)";
      startHideTimer();
      isShowModel = false;
      setTimeout(() => {
        modal.style.display = "none";
      }, 300);
    }

    setBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (isDragging) return; // 拦截被判定为拖拽完成时的点击触发

      if (modal.style.display === "none" || modal.style.opacity === "0") {
        showModal();
      } else {
        hideModal();
      }
    });

    closeBtn.addEventListener("click", hideModal);

    document.addEventListener("click", (e) => {
      if (!modal.contains(e.target) && e.target !== setBtn) {
        hideModal();
      }
    });

    playBtn.addEventListener("click", handleMpvPlay);
  }

  // ==========================================
  // 网页顶部居中的透明 Loading
  // ==========================================
  function showLoading() {
    const existingContainer = document.getElementById(
      "custom-top-spinner-container"
    );
    if (existingContainer) existingContainer.remove();

    // 2. 动态注入 CSS 样式
    const styleId = "custom-top-spinner-styles";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = sanitizerPolicy.createHTML(`
          #custom-top-spinner-container {
              position: fixed;
              top: 12px;
              left: 50%;
              transform: translateX(-50%);
              background: transparent;
              z-index: 2147483647;
              display: flex;
              justify-content: center;
              align-items: center;
              pointer-events: none;
              opacity: 0;
              transition: opacity 0.3s ease;
          }
          #custom-top-spinner-container.fade-in { opacity: 1; }
          .custom-top-spinner  {
              width: 50px;
              aspect-ratio: 1;
              display: grid;
              border: 4px solid #0000;
              border-radius: 50%;
              border-color: #ccc #0000;
              animation: custom-top-spinner 1s infinite linear;
            }
          .custom-top-spinner::before,.custom-top-spinner::after  {
              content: ""; grid-area: 1/1; margin: 2px;
              border: inherit; border-radius: 50%;
            }
          .custom-top-spinner::before  {
              border-color: #f03355 #0000;
              animation: inherit;
              animation-duration: 0.5s;
              animation-direction: reverse;
            }
          .custom-top-spinner::after  { margin: 8px; }
          @keyframes custom-top-spinner  {
              100%  { transform: rotate(1turn); }
          }
      `);
      document.head.appendChild(style);
    }

    const container = document.createElement("div");
    container.id = "custom-top-spinner-container";
    container.innerHTML = sanitizerPolicy.createHTML(
      `<div class="custom-top-spinner"></div>`
    );
    document.body.appendChild(container);

    requestAnimationFrame(() => {
      container.classList.add("fade-in");
    });

    return {
      destroy: function () {
        if (container && container.parentNode) {
          container.style.opacity = "0";
          setTimeout(() => {
            container.remove();
          }, 300);
        }
      },
    };
  }

  // ==========================================
  // 核心嗅探与播放分流逻辑
  // ==========================================
  async function handleMpvPlay() {
    const hostname = window.location.hostname;
    const href = window.location.href;
    let title = mediaData && mediaData.title ? mediaData.title : document.title;
    const origin = (mediaData && mediaData.origin) || window.location.origin;
    const referrer =
      (mediaData && mediaData.referrer) ||
      window.location.origin + window.location.pathname;
    let media = {
      video: null,
      title: title,
      origin: origin,
      referrer: referrer,
      cookie: document.cookie,
      ua: navigator.userAgent,
      time: 0,
      audio: null,
      subtitle: null,
    };

    // 获取嗅探到的字幕（取最新的一条）
    if (interceptedSubtitleUrls.size > 0) {
      const subList = Array.from(interceptedSubtitleUrls);
      media.subtitle = subList[subList.length - 1];
      console.log("将嗅探到的字幕添加至 MPV:", media.subtitle);
    }

    const video = getBestVideo();
    if (video) {
      media.time = video.currentTime || 0;
      video.pause();
    }

    // 检查当前网站是否在 yt-dlp 支持的站点列表中
    const is_yt_dlp_supported_sites =
      yt_dlp_supported_sites &&
      yt_dlp_supported_sites.extractors?.some((site) =>
        hostname.includes(site.toLowerCase().split(":")[0])
      );

    const isUseScriptPars = useScriptPars.some((site) => href.includes(site));
    console.log("is_yt_dlp_supported_sites:", is_yt_dlp_supported_sites);
    if (
      !isUseScriptPars &&
      (hostname.includes("bilibili.com") ||
        hostname.includes("youtube.com") ||
        hostname.includes("youtu.be") ||
        is_yt_dlp_supported_sites)
    ) {
      media.video = window.location.href;
      openMpv(media);
      return;
    }

    if (video) {
      let videoUrl = video.currentSrc || video.src;
      if (!videoUrl) {
        const source = video.querySelector("source");
        if (source) videoUrl = source.src;
      }

      if (videoUrl && videoUrl.startsWith("http")) {
        media.video = videoUrl;
        openMpv(media);
        return;
      }
    }

    let TIME_OUT = 10; // 超时(秒)未检测到视频流直接打开网页链接
    const loadingInstance = showLoading();
    // 轮询读取视频流
    const loopLoadInterceptedVideoUrls = () => {
      const openMpvByVidelUrls = () => {
        const urlList = Array.from(interceptedVideoUrls);
        const targetUrl = urlList[urlList.length - 1];
        console.log("通过嗅探获取到真实视频流:", targetUrl);
        media.video = targetUrl;
        openMpv(media);
        loadingInstance.destroy();
      };
      if (interceptedVideoUrls.size > 0) {
        openMpvByVidelUrls();
        return;
      }
      const loopTimer = setTimeout(() => {
        TIME_OUT--;
        if (interceptedVideoUrls.size > 0) {
          clearInterval(loopTimer);
          openMpvByVidelUrls();
          return;
        } else {
          if (TIME_OUT <= 0) {
            console.log("未检测到直链，发送当前网页 URL 供 yt-dlp 强行解析");
            var userResponse = confirm(t(`supportedTips`));
            if (userResponse) {
              media.video = window.location.href;
              openMpv(media);
            }
            loadingInstance.destroy();
            clearInterval(loopTimer);
          } else {
            loopLoadInterceptedVideoUrls();
          }
        }
      }, 1000);
    };
    // 轮询读取视频流
    loopLoadInterceptedVideoUrls();
  }

  function getVideoArea(video) {
    return (
      video.offsetWidth * video.offsetHeight ||
      video.videoWidth * video.videoHeight ||
      0
    );
  }

  function getBestVideo() {
    const videos = Array.from(document.querySelectorAll("video"));
    if (videos.length === 0) return null;

    const playingVideos = videos.filter((v) => !v.paused && !v.ended);
    if (playingVideos.length > 0) {
      return playingVideos.reduce((best, current) =>
        getVideoArea(current) > getVideoArea(best) ? current : best
      );
    }
    return videos.reduce((best, current) =>
      getVideoArea(current) > getVideoArea(best) ? current : best
    );
  }

  // 结合监听 video 和 监听嗅探成功 两个条件，动态创建播放按钮
  async function initWhenReady() {
    if (document.getElementById("mpv-control-container")) return;
    const checkVideoBig = async () => {
      return new Promise((resolve) => {
        const timer = setTimeout(() => {
          const video = getBestVideo();
          const offsetHeight = video ? video.offsetHeight : 0;
          const screenHeight = window.screen.height;
          const videoPercent = (offsetHeight / screenHeight) * 100;
          const href = window.location.href;
          const isUseScriptPars = useScriptPars.some((site) =>
            href.includes(site)
          );
          const hasVideoUrl = interceptedVideoUrls.size > 0;
          // 视频高度占屏幕高度超过 23% 就显示按钮
          if (
            videoPercent >= 23 ||
            (video && isUseScriptPars) ||
            (hasVideoUrl && isUseScriptPars)
          ) {
            clearTimeout(timer);
            resolve(true);
          } else {
            resolve(false);
          }
        }, 2500);
      });
    };

    // 1. 如果有 video 标签，并且视频高度占屏幕高度超过 23%，直接初始化 UI
    if (await checkVideoBig()) {
      initUI();
      return;
    }
    // 2. 如果暂时没有 video，监听 DOM 变化
    const domObserver = new MutationObserver(async (mutations, obs) => {
      if (await checkVideoBig()) {
        initUI();
        obs.disconnect();
      }
    });
    domObserver.observe(document.body, { childList: true, subtree: false });
  }
  // 页面加载完成后再初始化 UI，避免与网页自身 JS 冲突
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initSetIframe();
      initWhenReady();
    });
  } else {
    initSetIframe();
    initWhenReady();
  }

  const unwatch = watchUrlChange((newUrl) => {
    console.log("检测到 URL 发生变化:", newUrl);
    interceptedVideoUrls.clear();
    interceptedSubtitleUrls.clear();
    initWhenReady();
  });

  // 如果不需要时，可以调用它来取消监听
  // unwatch();
  // 添加菜单命令，允许用户手动显示播放按钮
  // GM_registerMenuCommand(t("handleShowPlayButton"), () => {
  //   if (showContainer) {
  //     showContainer();
  //   } else {
  //     initUI();
  //   }
  // });
})();
