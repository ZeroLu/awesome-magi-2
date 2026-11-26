Last updated on 2026-11-26

![Awesome MAGI-2](assets/banner.svg)

# Awesome MAGI-2 🎬

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE) [![GitHub stars](https://img.shields.io/github/stars/ZeroLu/awesome-magi-2?style=social)](https://github.com/ZeroLu/awesome-magi-2/stargazers)

| [English](./README.md) | [简体中文](./README-zh.md) |

> 精选 MAGI-2 提示词、生成技巧和参考资源，按场景分类，每条保留原作者出处。

在 Cyberbara 试用: [文生视频](https://cyberbara.com/ai-video-generator?entry=magi-2&utm_source=awesome-magi-2&utm_medium=github) · [首帧／首尾帧](https://cyberbara.com/ai-video-generator?entry=magi-2-frames&utm_source=awesome-magi-2&utm_medium=github) · [参考生视频](https://cyberbara.com/ai-video-generator?entry=magi-2-reference&utm_source=awesome-magi-2&utm_medium=github)

## 📖 目录

1. [电影风格](#1-电影风格)
2. [商业广告与品牌](#2-商业广告与品牌)
3. [UGC 风格](#3-ugc-风格)
4. [动漫与动画](#4-动漫与动画)
5. [短剧与网剧](#5-短剧与网剧)
6. [视觉特效与实验风格](#6-视觉特效与实验风格)
7. [资源](#7-资源)
8. [贡献](#8-贡献)
9. [Star 历史](#9-star-历史)

---

## 1. 电影风格

### 1.1. 雨夜咖啡馆双人对白

*两次硬切、固定人物轴线，普通话对白按角色分时。*

**提示词：**

~~~text
Duration: 20秒
Aspect ratio: 16:9
~~~

[查看作者完整原提示词](https://x.com/johnAGI168/status/2125480454518133081)

https://github.com/user-attachments/assets/14584e26-3e6b-469c-ac2a-703439d62958

*来源：[@johnAGI168 on X](https://x.com/johnAGI168/status/2125480417847353448)*

### 1.2. 30 秒拉面摊一镜到底

*用一个长镜头串起对话、上菜和经过的列车。*

**模式：** Text · 30 s

**提示词：**

[查看作者完整原提示词](https://createvision.ai/magi-2#:~:text=One%20continuous%2030-second%20take%2C%20no%20cuts.)

https://github.com/user-attachments/assets/3375ca70-f549-4709-9cae-23e6fcffe526

*来源：[CreateVision](https://createvision.ai/magi-2#:~:text=One%20continuous%2030-second%20take%2C%20no%20cuts.)*

### 1.3. 庭院三季延时

*固定机位，用两张首尾帧控制季节变化。*

**模式：** First + last frame · 5 s

**提示词：**

[查看作者完整原提示词](https://createvision.ai/magi-2#pin-the-first-and-last-frame)

https://github.com/user-attachments/assets/5e668b3d-a545-4f47-ae81-fea3b2698b0e

*来源：[CreateVision](https://createvision.ai/magi-2#pin-the-first-and-last-frame)*

### 1.4. 城市环绕一镜到底

**提示词：**

[查看作者完整原提示词](https://finance.sina.com.cn/cj/2026-11-25/doc-inizxaum9579112.shtml#:~:text=iPhone%E7%9B%B8%E6%9C%BA%E6%8B%8D%E6%91%84)

*来源：[Kazik / 数字生命卡兹克](https://finance.sina.com.cn/cj/2026-11-25/doc-inizxaum9579112.shtml#:~:text=iPhone%E7%9B%B8%E6%9C%BA%E6%8B%8D%E6%91%84)*

### 1.5. 纸飞机穿过连续空间

**提示词：**

[查看作者完整原提示词](https://finance.sina.com.cn/cj/2026-11-25/doc-inizxaum9579112.shtml#:~:text=%E4%B8%80%E6%9E%B6%E7%99%BD%E7%BA%B8%E9%A3%9E%E6%9C%BA)

*来源：[Kazik / 数字生命卡兹克](https://finance.sina.com.cn/cj/2026-11-25/doc-inizxaum9579112.shtml#:~:text=%E4%B8%80%E6%9E%B6%E7%99%BD%E7%BA%B8%E9%A3%9E%E6%9C%BA)*

## 2. 商业广告与品牌

### 2.1. 护肤品口播与标签

*以商品照约束瓶身，最后用特写展示标签。*

**模式：** Image reference · 10 s

**提示词：**

[查看作者完整原提示词](https://createvision.ai/magi-2#product-shots-that-keep-the-label)

https://github.com/user-attachments/assets/dcca41ab-fd13-4ea5-b9ab-2c4a5a86f4aa

*来源：[CreateVision](https://createvision.ai/magi-2#product-shots-that-keep-the-label)*

### 2.2. 把参考运镜转移到商品镜头

*一份参考控制瓶身，另一份参考控制运镜。*

**模式：** Image + video reference · 6 s

**提示词：**

[查看作者完整原提示词](https://createvision.ai/magi-2#borrow-the-camera-move-from-another-clip)

https://github.com/user-attachments/assets/6a65af40-9c10-4c31-9733-92753b75f240

*来源：[CreateVision](https://createvision.ai/magi-2#borrow-the-camera-move-from-another-clip)*

### 2.3. 耳机盒开盖特写

*测试小字标签、慢速环绕和同步开盖声。*

**模式：** Text · 5 s · 16:9

**提示词：**

[查看作者完整原提示词](https://aicreatoru.com/blog/how-to-use-magi-2#magi-2-prompts-you-can-copy)

https://github.com/user-attachments/assets/1394e2d6-5aaf-48b1-b0dc-ad093c5774fc

*来源：[A.I. Creator U.](https://aicreatoru.com/blog/how-to-use-magi-2#magi-2-prompts-you-can-copy)*

### 2.4. 竖屏冰咖啡广告

**提示词：**

[查看作者完整原提示词](https://seadanse.com/blog/magi-2-prompt-guide#prompt-3-a-vertical-iced-coffee-ad-in-916)

https://github.com/user-attachments/assets/1a61fd4c-b521-4afb-8eba-24be423cb0e4

*来源：[Seadanse](https://seadanse.com/blog/magi-2-prompt-guide#prompt-3-a-vertical-iced-coffee-ad-in-916)*

## 3. UGC 风格

### 3.1. 普通话街头小吃 vlog

*摊主用普通话出镜，保留街道环境声。*

**模式：** Text · 8 s

**提示词：**

[查看作者完整原提示词](https://createvision.ai/magi-2#:~:text=Vertical%20street-food%20video)

https://github.com/user-attachments/assets/1f0994c0-7d6e-417d-9758-dec8122dcd8f

*来源：[CreateVision](https://createvision.ai/magi-2#:~:text=Vertical%20street-food%20video)*

### 3.2. 客厅群舞

*竖屏社媒视频，控制单一运镜和几个关键声音。*

**模式：** Text · 10 s · 9:16

**提示词：**

[查看作者完整原提示词](https://circleaidance.com/magi-2-ai-video-generator#:~:text=Five%20friends%2C%20one%20living-room%20dance)

https://github.com/user-attachments/assets/5693cb0c-d05b-49be-960f-2eadea194d25

*来源：[CircleAIDance](https://circleaidance.com/magi-2-ai-video-generator#:~:text=Five%20friends%2C%20one%20living-room%20dance)*

## 4. 动漫与动画

### 4.1. 六张参考图的四镜头动画

*用同一个四镜头场景对比 MAGI-2 与 Seedance，注意两边分辨率不同。*

**提示词：**

[查看作者完整原提示词](https://grokvideomaker.com/magi-2-vs-seedance-2-5#:~:text=The%20exact%20prompt%20used%20for%20both)

https://github.com/user-attachments/assets/969f6d0b-fb49-4cd5-8733-cdfdf4849d9a

*来源：[@hype_boyo on X](https://x.com/hype_boyo/status/2125480141241622629)*

### 4.2. 多层剪纸动画

**提示词：**

[查看作者完整原提示词](https://finance.sina.com.cn/cj/2026-11-25/doc-inizxaum9579112.shtml#:~:text=%E5%A4%9A%E5%B1%82%E9%95%82%E7%A9%BA%E5%89%AA%E7%BA%B8)

*来源：[Kazik / 数字生命卡兹克](https://finance.sina.com.cn/cj/2026-11-25/doc-inizxaum9579112.shtml#:~:text=%E5%A4%9A%E5%B1%82%E9%95%82%E7%A9%BA%E5%89%AA%E7%BA%B8)*

## 5. 短剧与网剧

### 5.1. 秋日逆光韩语告白

*角色参考、韩语短句和定时起音组成完整短剧分镜。*

**提示词：**

~~~text
Duration：15秒
Aspect ratio：16:9横屏
~~~

[查看作者完整原提示词](https://x.com/johnAGI168/status/2125578676754366859)

https://github.com/user-attachments/assets/38440daf-eca8-40a9-850d-2abb5d866804

*来源：[@johnAGI168 on X](https://x.com/johnAGI168/status/2125578530272821680)*

### 5.2. 巴黎合照开口对话

*从一张照片开始，让两人按顺序对话。*

**模式：** First frame · 8 s

**提示词：**

[查看作者完整原提示词](https://createvision.ai/magi-2#dialogue-with-lip-sync-in-english-or-mandarin)

https://github.com/user-attachments/assets/a7e714dd-dbfb-494c-a796-a45df45bac64

*来源：[CreateVision](https://createvision.ai/magi-2#dialogue-with-lip-sync-in-english-or-mandarin)*

### 5.3. 今晚最后一碗

*两段明确的镜头、单句对白，不加音乐。*

**模式：** Text · 5 s

**提示词：**

[查看作者完整原提示词](https://seadanse.com/blog/how-to-use-magi-2#:~:text=Last%20bowl%20of%20the%20night)

https://github.com/user-attachments/assets/b78de4da-94db-43c6-bd5b-2c192f32ccf3

*来源：[Seadanse](https://seadanse.com/blog/how-to-use-magi-2#:~:text=Last%20bowl%20of%20the%20night)*

## 6. 视觉特效与实验风格

### 6.1. BMX 高速动作测试

*用短片检查高速跟拍、落地和触地音效。*

**模式：** Text · 6 s

**提示词：**

[查看作者完整原提示词](https://createvision.ai/magi-2#:~:text=A%20BMX%20rider%20at%20a%20concrete%20skatepark)

https://github.com/user-attachments/assets/65de7f92-d45f-43c2-8148-0b2098bffecc

*来源：[CreateVision](https://createvision.ai/magi-2#:~:text=A%20BMX%20rider%20at%20a%20concrete%20skatepark)*

### 6.2. 爵士三重奏同步测试

*单次横移，配合可与画面对照的多段声音事件。*

**模式：** Text · 8 s

**提示词：**

[查看作者完整原提示词](https://createvision.ai/magi-2#:~:text=A%20jazz%20trio%20in%20a%20small%20dim%20club)

https://github.com/user-attachments/assets/15a1590e-747c-4bfd-8e6e-792ab2673595

*来源：[CreateVision](https://createvision.ai/magi-2#:~:text=A%20jazz%20trio%20in%20a%20small%20dim%20club)*

### 6.3. 四秒猫咪与同期音效

**提示词：**

[查看作者完整原提示词](https://seadanse.com/blog/magi-2-prompt-guide#prompt-1-a-4-second-cat-with-one-sound-line)

https://github.com/user-attachments/assets/cd81c7f6-b877-427e-879b-168e513560c9

*来源：[Seadanse](https://seadanse.com/blog/magi-2-prompt-guide#prompt-1-a-4-second-cat-with-one-sound-line)*

## 7. 资源

### 官方文档与演示

文档样例不是实测记录；演示未公开原始提示词时，不把复刻文本冒充原文。

- [Kie 文生视频请求示例](https://docs.kie.ai/market/magi-2/text-to-video)：两段镜头、对白、环境声；原始提示词在请求示例中。
- [Higgsfield 提示示例](https://higgsfield.ai/magi-2-intro)：运镜、台词和声音的短示例。
- [Sand AI 正式版演示](https://sand.ai/blog/magi-2/)：跨五种画风的一镜到底，以及用参考图固定角色与场景。查看原片；原始提示词未在这里收录。
- [独立创作者的 15 秒一镜到底](https://www.reddit.com/r/HiggsfieldAI/comments/1y554oc/magi2_just_dropped_on_higgsfield_30s_clips_1080p/)（[原视频](https://x.com/pik_vik1/status/2125414890877637058)）：用灰盒预演视频做运镜参考；作者未公开完整提示词。



### MAGI-2 Preview

这是 2026 年 8 月的研究预览版，与 11 月正式版不同。官方 [演示配置](https://github.com/SandAI-org/MAGI-2-preview/blob/main/assets/demo_samples.json) 共有 5 种运行配置，对应以下 3 份提示词。

- [从森林到海岸的动画过渡](https://github.com/SandAI-org/MAGI-2-preview/blob/main/assets/sample_000.txt) · [首帧](https://github.com/SandAI-org/MAGI-2-preview/blob/main/assets/sample_000.jpeg)
- [黏土角色寻找红球](https://github.com/SandAI-org/MAGI-2-preview/blob/main/assets/sample_001.txt) · [首帧](https://github.com/SandAI-org/MAGI-2-preview/blob/main/assets/sample_001.jpeg)
- [雨天咖啡馆的结构化 JSON](https://github.com/SandAI-org/MAGI-2-preview/blob/main/assets/sample_enhanced_t2v.json) · T2V / JSON




### 资源与投稿

- [Sand AI 发布说明](https://sand.ai/blog/magi-2/) · [原生 API](https://platform.sand.ai/docs/create-generation/) · [首尾帧 API（Ark 兼容）](https://platform.sand.ai/docs/ark-generations/)
- [Sand AI 的预训练研究探针](https://sand.ai/blog/magi-2/)（第 5 节）：数独案例使用关闭提示增强的 480B 预训练模型，并非线上正式版能力保证。
- [Higgsfield 使用指南](https://higgsfield.ai/blog/higgsfield-magi-2) · [Kie API 示例](https://docs.kie.ai/market/magi-2/text-to-video)
- 参考素材数、提示词长度和音频选项以实际平台文档为准。不要把 Preview 结果当正式版结果。

欢迎 [投稿](CONTRIBUTING.md)。受版权保护的第三方提示词、图片和视频以原文链接为主，不纳入本仓库原创内容的 [MIT 许可](LICENSE)。

## 8. 贡献

欢迎[提交案例](CONTRIBUTING.md)，请附上原作者发布的完整提示词和成片。

## 9. Star 历史

[![Star History Chart](https://api.star-history.com/svg?repos=ZeroLu/awesome-magi-2&type=Date)](https://star-history.com/#ZeroLu/awesome-magi-2&Date)
