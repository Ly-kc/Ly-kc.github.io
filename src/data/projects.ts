import type { Publication } from "./publications"

type Project = Publication

const projects: Project[] = [
  {
    title: "UniSpark: Exploring Hybrid Attention for Multimodal Understanding and Generation",
    authors: "Jiancheng Pan*, <b>Yuzheng Liu*</b>, Hengyuan Cao*, Qiyuan Zhang*, et al.",
    time: "2026.11",
    img_path: "/projects/unispark/seq11_01.png",
    img_alt: "UniSpark interleaved generation of a parrot spreading its wings and a rose blooming",
    preview_sequences: [
      {
        frames: [
          "/projects/unispark/seq11_01.png",
          "/projects/unispark/seq11_02.png",
          "/projects/unispark/seq11_03.png",
          "/projects/unispark/seq11_04.png",
        ],
        alt: "Four generated frames of a green parrot spreading and folding its wings",
        caption: "Interleaved generation · Parrot",
      },
      {
        frames: [
          "/projects/unispark/seq08_01.jpg",
          "/projects/unispark/seq08_02.jpg",
          "/projects/unispark/seq08_03.jpg",
          "/projects/unispark/seq08_04.jpg",
        ],
        alt: "Four generated frames of a pink rose opening from a bud into full bloom",
        caption: "Interleaved generation · Rose",
      },
    ],
    description: "We present UniSpark-9B, a unified multimodal model that combines full attention and GatedDeltaNet linear attention in a Mixture-of-Transformer-Experts backbone. By coupling autoregressive text prediction with visual flow matching, it supports visual understanding, image generation, interleaved text–image generation, and video generation.",
    submit_status: "<span class='venue-chip'>Technical Report 2026</span>",
    link: "https://lucaria-academy.github.io/UniSpark/",
    arxiv: "https://arxiv.org/abs/2611.16517",
    page: "https://lucaria-academy.github.io/UniSpark/",
  },
	{
		title: "LingBot-World-v2: Infinite Worlds with Versatile Interactions",
		authors: "<b>Robbyant Team</b>",
		time: "2026.7",
		img_path: "/publications/world.gif",
		description: "LingBot-World-Infinity generates open-ended interactive worlds that remain visually coherent over long horizons while running in real time at 720p and 60 fps with sub-second control latency.",
		submit_status: "<span class='venue-chip'>Technical Report 2026</span>",
		link: "https://technology.robbyant.com/lingbot-world-v2",
		arxiv: "https://arxiv.org/abs/2607.07534",
		code: "https://github.com/robbyant/lingbot-world-v2",
		github_repo: "robbyant/lingbot-world-v2",
		github_stars: 1909,
		page: "https://technology.robbyant.com/lingbot-world-v2"
	},
]

export { projects, type Project }
