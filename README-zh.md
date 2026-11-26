![Awesome MAGI-2](assets/banner.svg)

# Awesome MAGI-2

**[English](README.md) · [简体中文](README-zh.md)**

> 从网上收集可追溯的 MAGI-2 视频提示词、输入素材和演示。按用途分类，区分原作者实测与官方演示。

在 Cyberbara 试用: [文生视频](https://cyberbara.com/ai-video-generator?entry=magi-2&utm_source=awesome-magi-2&utm_medium=github) · [首帧／首尾帧](https://cyberbara.com/ai-video-generator?entry=magi-2-frames&utm_source=awesome-magi-2&utm_medium=github) · [参考生视频](https://cyberbara.com/ai-video-generator?entry=magi-2-reference&utm_source=awesome-magi-2&utm_medium=github)

目录: [X 创作者精选](#x-创作者精选) · [精选实测案例](#精选实测案例) · [官方文档与演示](#官方文档与演示) · [MAGI-2 Preview](#magi-2-preview) · [资源与投稿](#资源与投稿)

## X 创作者精选

只收录作者已经公开提示词和成片的案例。GitHub README 无法加载 X 官方播放器；点击下方「站内播放页」可在本仓库的 GitHub Pages 直接播放，不用下载。

### 雨夜咖啡馆双人对白

两次硬切、固定人物轴线，普通话对白按角色分时。

[站内播放页](https://zerolu.github.io/awesome-magi-2/#rainy-cafe) · [原作者提示词](https://x.com/johnAGI168/status/2125480454518133081) · [@johnAGI168 on X](https://x.com/johnAGI168/status/2125480417847353448)

### 秋日逆光韩语告白

角色参考、韩语短句和定时起音组成完整短剧分镜。

[站内播放页](https://zerolu.github.io/awesome-magi-2/#golden-hour) · [原作者提示词](https://x.com/johnAGI168/status/2125578676754366859) · [@johnAGI168 on X](https://x.com/johnAGI168/status/2125578530272821680)

### 六张参考图的四镜头动画

用同一个四镜头场景对比 MAGI-2 与 Seedance，注意两边分辨率不同。

[站内播放页](https://zerolu.github.io/awesome-magi-2/#ink-animation) · [原作者提示词](https://grokvideomaker.com/magi-2-vs-seedance-2-5#:~:text=The%20exact%20prompt%20used%20for%20both) · [@hype_boyo on X](https://x.com/hype_boyo/status/2125480141241622629)

## 精选实测案例

以下是发布者标明使用正式版 MAGI-2 运行、并公开了原提示词的案例。点击原文查看提示词和样片；素材仅链接原出处。


### 1. 电影感与长镜头

#### 1.1. 30 秒拉面摊一镜到底

- **模式:** Text · 30 s
- **看点:** 用一个长镜头串起对话、上菜和经过的列车。
- **原作者提示词／样片:** [CreateVision](https://createvision.ai/magi-2#:~:text=One%20continuous%2030-second%20take%2C%20no%20cuts.)

#### 1.2. 庭院三季延时

- **模式:** First + last frame · 5 s
- **看点:** 固定机位，用两张首尾帧控制季节变化。
- **原作者提示词／样片:** [CreateVision](https://createvision.ai/magi-2#pin-the-first-and-last-frame)

### 2. 对白与短剧

#### 2.1. 巴黎合照开口对话

- **模式:** First frame · 8 s
- **看点:** 从一张照片开始，让两人按顺序对话。
- **原作者提示词／样片:** [CreateVision](https://createvision.ai/magi-2#dialogue-with-lip-sync-in-english-or-mandarin)

#### 2.2. 普通话街头小吃 vlog

- **模式:** Text · 8 s
- **看点:** 摊主用普通话出镜，保留街道环境声。
- **原作者提示词／样片:** [CreateVision](https://createvision.ai/magi-2#:~:text=Vertical%20street-food%20video)

#### 2.3. 今晚最后一碗

- **模式:** Text · 5 s
- **看点:** 两段明确的镜头、单句对白，不加音乐。
- **原作者提示词／样片:** [Seadanse](https://seadanse.com/blog/how-to-use-magi-2#:~:text=Last%20bowl%20of%20the%20night)

### 3. 广告与商品演示

#### 3.1. 护肤品口播与标签

- **模式:** Image reference · 10 s
- **看点:** 以商品照约束瓶身，最后用特写展示标签。
- **原作者提示词／样片:** [CreateVision](https://createvision.ai/magi-2#product-shots-that-keep-the-label)

#### 3.2. 把参考运镜转移到商品镜头

- **模式:** Image + video reference · 6 s
- **看点:** 一份参考控制瓶身，另一份参考控制运镜。
- **原作者提示词／样片:** [CreateVision](https://createvision.ai/magi-2#borrow-the-camera-move-from-another-clip)

#### 3.3. 耳机盒开盖特写

- **模式:** Text · 5 s · 16:9
- **看点:** 测试小字标签、慢速环绕和同步开盖声。
- **原作者提示词／样片:** [A.I. Creator U.](https://aicreatoru.com/blog/how-to-use-magi-2#magi-2-prompts-you-can-copy)

### 4. 社媒与 UGC

#### 4.1. 客厅群舞

- **模式:** Text · 10 s · 9:16
- **看点:** 竖屏社媒视频，控制单一运镜和几个关键声音。
- **原作者提示词／样片:** [CircleAIDance](https://circleaidance.com/magi-2-ai-video-generator#:~:text=Five%20friends%2C%20one%20living-room%20dance)

### 5. 动作、动画与声音

#### 5.1. BMX 高速动作测试

- **模式:** Text · 6 s
- **看点:** 用短片检查高速跟拍、落地和触地音效。
- **原作者提示词／样片:** [CreateVision](https://createvision.ai/magi-2#:~:text=A%20BMX%20rider%20at%20a%20concrete%20skatepark)

#### 5.2. 爵士三重奏同步测试

- **模式:** Text · 8 s
- **看点:** 单次横移，配合可与画面对照的多段声音事件。
- **原作者提示词／样片:** [CreateVision](https://createvision.ai/magi-2#:~:text=A%20jazz%20trio%20in%20a%20small%20dim%20club)

### 更多作者实测

- [城市环绕一镜到底](https://finance.sina.com.cn/cj/2026-11-25/doc-inizxaum9579112.shtml#:~:text=iPhone%E7%9B%B8%E6%9C%BA%E6%8B%8D%E6%91%84) · Kazik / 数字生命卡兹克
- [纸飞机穿过连续空间](https://finance.sina.com.cn/cj/2026-11-25/doc-inizxaum9579112.shtml#:~:text=%E4%B8%80%E6%9E%B6%E7%99%BD%E7%BA%B8%E9%A3%9E%E6%9C%BA) · Kazik / 数字生命卡兹克
- [多层剪纸动画](https://finance.sina.com.cn/cj/2026-11-25/doc-inizxaum9579112.shtml#:~:text=%E5%A4%9A%E5%B1%82%E9%95%82%E7%A9%BA%E5%89%AA%E7%BA%B8) · Kazik / 数字生命卡兹克
- [四秒猫咪与同期音效](https://seadanse.com/blog/magi-2-prompt-guide#prompt-1-a-4-second-cat-with-one-sound-line) · Seadanse
- [竖屏冰咖啡广告](https://seadanse.com/blog/magi-2-prompt-guide#prompt-3-a-vertical-iced-coffee-ad-in-916) · Seadanse

## 官方文档与演示

文档样例不是实测记录；演示未公开原始提示词时，不把复刻文本冒充原文。

- [Kie 文生视频请求示例](https://docs.kie.ai/market/magi-2/text-to-video)：两段镜头、对白、环境声；原始提示词在请求示例中。
- [Higgsfield 提示示例](https://higgsfield.ai/magi-2-intro)：运镜、台词和声音的短示例。
- [Sand AI 正式版演示](https://sand.ai/blog/magi-2/)：跨五种画风的一镜到底，以及用参考图固定角色与场景。查看原片；原始提示词未在这里收录。
- [独立创作者的 15 秒一镜到底](https://www.reddit.com/r/HiggsfieldAI/comments/1y554oc/magi2_just_dropped_on_higgsfield_30s_clips_1080p/)（[原视频](https://x.com/pik_vik1/status/2125414890877637058)）：用灰盒预演视频做运镜参考；作者未公开完整提示词。

## MAGI-2 Preview

这是 2026 年 8 月的研究预览版，与 11 月正式版不同。官方 [演示配置](https://github.com/SandAI-org/MAGI-2-preview/blob/main/assets/demo_samples.json) 共有 5 种运行配置，对应以下 3 份提示词。

- [从森林到海岸的动画过渡](https://github.com/SandAI-org/MAGI-2-preview/blob/main/assets/sample_000.txt) · [首帧](https://github.com/SandAI-org/MAGI-2-preview/blob/main/assets/sample_000.jpeg)
- [黏土角色寻找红球](https://github.com/SandAI-org/MAGI-2-preview/blob/main/assets/sample_001.txt) · [首帧](https://github.com/SandAI-org/MAGI-2-preview/blob/main/assets/sample_001.jpeg)
- [雨天咖啡馆的结构化 JSON](https://github.com/SandAI-org/MAGI-2-preview/blob/main/assets/sample_enhanced_t2v.json) · T2V / JSON


## 资源与投稿

- [Sand AI 发布说明](https://sand.ai/blog/magi-2/) · [原生 API](https://platform.sand.ai/docs/create-generation/) · [首尾帧 API（Ark 兼容）](https://platform.sand.ai/docs/ark-generations/)
- [Sand AI 的预训练研究探针](https://sand.ai/blog/magi-2/)（第 5 节）：数独案例使用关闭提示增强的 480B 预训练模型，并非线上正式版能力保证。
- [Higgsfield 使用指南](https://higgsfield.ai/blog/higgsfield-magi-2) · [Kie API 示例](https://docs.kie.ai/market/magi-2/text-to-video)
- 参考素材数、提示词长度和音频选项以实际平台文档为准。不要把 Preview 结果当正式版结果。

欢迎 [投稿](CONTRIBUTING.md)。受版权保护的第三方提示词、图片和视频以原文链接为主，不纳入本仓库原创内容的 [MIT 许可](LICENSE)。
