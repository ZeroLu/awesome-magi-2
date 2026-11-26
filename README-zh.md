![Awesome MAGI-2](assets/banner.svg)

# Awesome MAGI-2

**[English](README.md) · [简体中文](README-zh.md)**

> 从网上收集可追溯的 MAGI-2 视频提示词、输入素材和演示。按用途分类，区分原作者实测、官方示例和未跑过的原创模板。

在 Cyberbara 试用: [文生视频](https://cyberbara.com/ai-video-generator?entry=magi-2&utm_source=awesome-magi-2&utm_medium=github) · [首帧／首尾帧](https://cyberbara.com/ai-video-generator?entry=magi-2-frames&utm_source=awesome-magi-2&utm_medium=github) · [参考生视频](https://cyberbara.com/ai-video-generator?entry=magi-2-reference&utm_source=awesome-magi-2&utm_medium=github)

目录: [精选实测案例](#精选实测案例) · [官方文档与演示](#官方文档与演示) · [MAGI-2 Preview](#magi-2-preview) · [可复制原创模板](#可复制原创模板) · [资源与投稿](#资源与投稿)

## 精选实测案例

以下是发布者标明使用正式版 MAGI-2 运行、并公开了原提示词的案例。点击原文查看提示词和样片；素材仅链接原出处。

### 电影感与长镜头

| 案例 | 模式与时长 | 关注点 | 原提示词与结果 |
| --- | --- | --- | --- |
| 30 秒拉面摊一镜到底 | Text · 30 s | 用一个长镜头串起对话、上菜和经过的列车。 | [CreateVision](https://createvision.ai/magi-2#:~:text=One%20continuous%2030-second%20take%2C%20no%20cuts.) |
| 庭院三季延时 | First + last frame · 5 s | 固定机位，用两张首尾帧控制季节变化。 | [CreateVision](https://createvision.ai/magi-2#pin-the-first-and-last-frame) |

### 对白与短剧

| 案例 | 模式与时长 | 关注点 | 原提示词与结果 |
| --- | --- | --- | --- |
| 巴黎合照开口对话 | First frame · 8 s | 从一张照片开始，让两人按顺序对话。 | [CreateVision](https://createvision.ai/magi-2#dialogue-with-lip-sync-in-english-or-mandarin) |
| 普通话街头小吃 vlog | Text · 8 s | 摊主用普通话出镜，保留街道环境声。 | [CreateVision](https://createvision.ai/magi-2#:~:text=Vertical%20street-food%20video) |
| 今晚最后一碗 | Text · 5 s | 两段明确的镜头、单句对白，不加音乐。 | [Seadanse](https://seadanse.com/blog/how-to-use-magi-2#:~:text=Last%20bowl%20of%20the%20night) |

### 广告与商品演示

| 案例 | 模式与时长 | 关注点 | 原提示词与结果 |
| --- | --- | --- | --- |
| 护肤品口播与标签 | Image reference · 10 s | 以商品照约束瓶身，最后用特写展示标签。 | [CreateVision](https://createvision.ai/magi-2#product-shots-that-keep-the-label) |
| 把参考运镜转移到商品镜头 | Image + video reference · 6 s | 一份参考控制瓶身，另一份参考控制运镜。 | [CreateVision](https://createvision.ai/magi-2#borrow-the-camera-move-from-another-clip) |

### 社媒与 UGC

| 案例 | 模式与时长 | 关注点 | 原提示词与结果 |
| --- | --- | --- | --- |
| 客厅群舞 | Text · 10 s · 9:16 | 竖屏社媒视频，控制单一运镜和几个关键声音。 | [CircleAIDance](https://circleaidance.com/magi-2-ai-video-generator#:~:text=Five%20friends%2C%20one%20living-room%20dance) |

### 动作、动画与声音

| 案例 | 模式与时长 | 关注点 | 原提示词与结果 |
| --- | --- | --- | --- |
| BMX 高速动作测试 | Text · 6 s | 用短片检查高速跟拍、落地和触地音效。 | [CreateVision](https://createvision.ai/magi-2#:~:text=A%20BMX%20rider%20at%20a%20concrete%20skatepark) |
| 爵士三重奏同步测试 | Text · 8 s | 单次横移，配合可与画面对照的多段声音事件。 | [CreateVision](https://createvision.ai/magi-2#:~:text=A%20jazz%20trio%20in%20a%20small%20dim%20club) |

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

## 可复制原创模板

这些是本仓库原创，**未运行生成测试**，没有样片。参考素材请用你拥有或获授权的文件；上传后按平台显示的编号调整指代。

- [黎明渡轮](prompts/01-ferry-one-take.md) · Text-to-video · 12 s · 16:9 · sound on
- [钟表匠的倒计时](prompts/02-workshop-dialogue.md) · Text-to-video · 8 s · 16:9 · sound on
- [让灯塔明信片动起来](prompts/03-first-frame-lantern.md) · Image-to-video · 6 s · 3:4 · sound on
- [把两个暗房画面接成连续镜头](prompts/04-frames-darkroom.md) · First + last frames · 8 s · 16:9 · sound on
- [运镜参考商品展示](prompts/05-product-two-references.md) · Reference-to-video · 6 s · 9:16 · sound on
- [纸机器人与三段音效](prompts/06-animation-timing.md) · Text-to-video · 9 s · 16:9 · sound on

## 资源与投稿

- [Sand AI 发布说明](https://sand.ai/blog/magi-2/) · [原生 API](https://platform.sand.ai/docs/create-generation/) · [首尾帧 API（Ark 兼容）](https://platform.sand.ai/docs/ark-generations/)
- [Higgsfield 使用指南](https://higgsfield.ai/blog/higgsfield-magi-2) · [Kie API 示例](https://docs.kie.ai/market/magi-2/text-to-video)
- 参考素材数、提示词长度和音频选项以实际平台文档为准。不要把 Preview 结果当正式版结果。

欢迎 [投稿](CONTRIBUTING.md)。受版权保护的第三方提示词、图片和视频以原文链接为主，不纳入本仓库原创内容的 [MIT 许可](LICENSE)。
