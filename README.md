![Awesome MAGI-2](assets/banner.svg)

# Awesome MAGI-2

**[English](README.md) · [简体中文](README-zh.md)**

> A curated MAGI-2 video prompt library, with source videos, reference inputs, and reusable workflows. Published runs, official demos, and untested templates are kept separate.

Try on Cyberbara: [Text to Video](https://cyberbara.com/ai-video-generator?entry=magi-2&utm_source=awesome-magi-2&utm_medium=github) · [First Frame / First & Last](https://cyberbara.com/ai-video-generator?entry=magi-2-frames&utm_source=awesome-magi-2&utm_medium=github) · [References](https://cyberbara.com/ai-video-generator?entry=magi-2-reference&utm_source=awesome-magi-2&utm_medium=github)

Contents: [Published MAGI-2 examples](#published-magi-2-examples) · [Official recipes and showcases](#official-recipes-and-showcases) · [MAGI-2 Preview](#magi-2-preview) · [Copy-ready original templates](#copy-ready-original-templates) · [Resources and contributing](#resources-and-contributing)

## Published MAGI-2 examples

The publishers identify these examples as runs of the flagship MAGI-2 and show their submitted prompts. Open each source for the original prompt, output and any shared inputs; media stays with its owner.

### Cinematic & long takes

| Example | Mode & duration | What to look for | Prompt & result |
| --- | --- | --- | --- |
| 30-second ramen stall one-take | Text · 30 s | A long camera move with ordered dialogue, service actions, and a passing train. | [CreateVision](https://createvision.ai/magi-2#:~:text=One%20continuous%2030-second%20take%2C%20no%20cuts.) |
| Courtyard across three seasons | First + last frame · 5 s | Locked camera and a seasonal change across two supplied frames. | [CreateVision](https://createvision.ai/magi-2#pin-the-first-and-last-frame) |

### Dialogue & short drama

| Example | Mode & duration | What to look for | Prompt & result |
| --- | --- | --- | --- |
| Paris portrait brought to life | First frame · 8 s | Animate one photo into a short exchange with two distinct speakers. | [CreateVision](https://createvision.ai/magi-2#dialogue-with-lip-sync-in-english-or-mandarin) |
| Mandarin street-food vlog | Text · 8 s | An on-camera seller speaks Mandarin above a busy street sound bed. | [CreateVision](https://createvision.ai/magi-2#:~:text=Vertical%20street-food%20video) |
| Last bowl of the night | Text · 5 s | Two timed shots, a single spoken line, and no music. | [Seadanse](https://seadanse.com/blog/how-to-use-magi-2#:~:text=Last%20bowl%20of%20the%20night) |

### Advertising & product shots

| Example | Mode & duration | What to look for | Prompt & result |
| --- | --- | --- | --- |
| Skincare presenter and label | Image reference · 10 s | A product photo anchors the hands-on demo and the closing label shot. | [CreateVision](https://createvision.ai/magi-2#product-shots-that-keep-the-label) |
| Transfer a camera arc to a packshot | Image + video reference · 6 s | One reference controls the bottle, another the camera path. | [CreateVision](https://createvision.ai/magi-2#borrow-the-camera-move-from-another-clip) |
| Earbud case macro reveal | Text · 5 s · 16:9 | Test engraved lettering, a slow orbit, and a distinct opening sound. | [A.I. Creator U.](https://aicreatoru.com/blog/how-to-use-magi-2#magi-2-prompts-you-can-copy) |

### Social & UGC

| Example | Mode & duration | What to look for | Prompt & result |
| --- | --- | --- | --- |
| Living-room group dance | Text · 10 s · 9:16 | Vertical social video with a single camera move and distinct audio cues. | [CircleAIDance](https://circleaidance.com/magi-2-ai-video-generator#:~:text=Five%20friends%2C%20one%20living-room%20dance) |

### Motion, animation & sound

| Example | Mode & duration | What to look for | Prompt & result |
| --- | --- | --- | --- |
| BMX motion stress test | Text · 6 s | A short action diagnostic: follow-through, landing and a sound tied to contact. | [CreateVision](https://createvision.ai/magi-2#:~:text=A%20BMX%20rider%20at%20a%20concrete%20skatepark) |
| Jazz trio timing test | Text · 8 s | A single lateral dolly with multiple acoustic events to compare against the picture. | [CreateVision](https://createvision.ai/magi-2#:~:text=A%20jazz%20trio%20in%20a%20small%20dim%20club) |

## Official recipes and showcases

A documentation prompt is not a tested result. When a showcase does not disclose its original prompt, it is labeled as a demo instead.

- [Kie’s text-to-video request example](https://docs.kie.ai/market/magi-2/text-to-video): a two-shot setup with dialogue and ambience, with the original prompt in the payload.
- [Higgsfield prompt snippets](https://higgsfield.ai/magi-2-intro): short examples for camera direction, dialogue, and sound.
- [Sand AI flagship showcase](https://sand.ai/blog/magi-2/): a continuous take across five art styles and reference-driven character and scene consistency. Watch the demos; no full original prompt is reproduced here.
- [Creator’s 15-second camera-path study](https://www.reddit.com/r/HiggsfieldAI/comments/1y554oc/magi2_just_dropped_on_higgsfield_30s_clips_1080p/) ([original clip](https://x.com/pik_vik1/status/2125414890877637058)): a gray-box previs video guided the movement; the full prompt was not shared.

## MAGI-2 Preview

The August 2026 research release is not the November flagship. Sand AI’s [demo configurations](https://github.com/SandAI-org/MAGI-2-preview/blob/main/assets/demo_samples.json) use these three distinct prompts across five runs.

- [Forest to ocean in anime style](https://github.com/SandAI-org/MAGI-2-preview/blob/main/assets/sample_000.txt) · [first frame](https://github.com/SandAI-org/MAGI-2-preview/blob/main/assets/sample_000.jpeg)
- [Clay figure and the red ball](https://github.com/SandAI-org/MAGI-2-preview/blob/main/assets/sample_001.txt) · [first frame](https://github.com/SandAI-org/MAGI-2-preview/blob/main/assets/sample_001.jpeg)
- [Rainy café in structured JSON](https://github.com/SandAI-org/MAGI-2-preview/blob/main/assets/sample_enhanced_t2v.json) · T2V / JSON

## Copy-ready original templates

Original, **not rendered**. No outputs are claimed. For templates that require inputs, use media you own or have permission to use and adapt the reference labels to your provider.

- [Ferry at first light](prompts/01-ferry-one-take.md) · Text-to-video · 12 s · 16:9 · sound on
- [A watchmaker’s deadline](prompts/02-workshop-dialogue.md) · Text-to-video · 8 s · 16:9 · sound on
- [Animate a lighthouse postcard](prompts/03-first-frame-lantern.md) · Image-to-video · 6 s · 3:4 · sound on
- [Connect two darkroom frames](prompts/04-frames-darkroom.md) · First + last frames · 8 s · 16:9 · sound on
- [Motion-reference product reveal](prompts/05-product-two-references.md) · Reference-to-video · 6 s · 9:16 · sound on
- [Paper robot, three sound cues](prompts/06-animation-timing.md) · Text-to-video · 9 s · 16:9 · sound on

## Resources and contributing

- [Sand AI launch notes](https://sand.ai/blog/magi-2/) · [Native API](https://platform.sand.ai/docs/create-generation/) · [First/last frames via Ark compatibility](https://platform.sand.ai/docs/ark-generations/)
- [Sand AI’s pretraining probe](https://sand.ai/blog/magi-2/) (section 5): the Sudoku demo used the 480B pretraining checkpoint with prompt enhancement off. It is not a guarantee about the hosted model.
- [Higgsfield guide](https://higgsfield.ai/blog/higgsfield-magi-2) · [Kie API example](https://docs.kie.ai/market/magi-2/text-to-video)
- Input limits, audio controls and prompt syntax are provider-specific. Do not label Preview outputs as flagship results.

[Contributions](CONTRIBUTING.md) welcome. The repository’s [MIT license](LICENSE) does not apply to linked third-party prompts, images, or video.
