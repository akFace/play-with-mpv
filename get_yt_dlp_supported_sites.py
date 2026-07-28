import os
import json
import yt_dlp

# 创建 static 目录
os.makedirs("static", exist_ok=True)

# 获取 yt-dlp 支持的所有解析器名称
extractors = yt_dlp.extractor.gen_extractors()
extractor_list = [e.IE_NAME for e in extractors if hasattr(e, 'IE_NAME')]

# 构造一个结构化的字典
data = {
    "total_count": len(extractor_list),
    "extractors": sorted(extractor_list)
}

file_path = os.path.join("static", "yt_dlp_supported_sites.json")

# 写入到 static 目录下的 json 文件
with open(file_path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

print(f"成功导出 {len(extractor_list)} 个支持的解析器/网站到 {file_path}")