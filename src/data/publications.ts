interface Publication {
	title: string;
	authors: string;
	time: string;
	img_path: string;
	description: string;
	submit_status: string;
	link: string;
	arxiv?: string;
	page?: string;
	code?: string;
	github_repo?: string;
	github_stars?: number;
	// # optioanl fields, key-value pairs of name-link
	other_links?: {
		[key: string]: string;
	};
}

const publications: Publication[] = [
	{
		title: "Lingbot-World-v2: Infinite Worlds with Versatile Interactions",
		authors: "<b>Robbyant Team</b>",
		time: "2026.7",
		// img_path: "/publications/SLAM3R.jpg",
		img_path: "/publications/world.gif",
		description: "LingBot-World-Infinity generates open-ended interactive worlds that remain visually coherent over long horizons while running in real time at 720p and 60 fps with sub-second control latency.",
		submit_status: "<span class='venue-chip'>Technical Report 2026</span>",
		link: "https://technology.robbyant.com/lingbot-world-v2",
		arxiv: "https://arxiv.org/abs/2607.07534",
		code: "https://github.com/robbyant/lingbot-world-v2",
		github_repo: "robbyant/lingbot-world-v2",
		github_stars: 522,
		page: "https://technology.robbyant.com/lingbot-world-v2"
	},
	{
		title: "SLAM3R: Real-Time Dense Scene Reconstruction from Monocular RGB Videos",
		authors: "<b>Yuzheng Liu</b>*, <a href='https://siyandong.github.io/'>Siyan Dong*†</a>, <a href='https://ffrivera0.github.io/'>Shuzhe Wang</a>, <a href='https://yd-yin.github.io/'>Yingda Yin</a>, <a href='https://yanchaoyang.github.io/'>Yanchao Yang†</a>, <a href='https://fqnchina.github.io/'>Qingnan Fan</a>, <a href='https://baoquanchen.info/'>Baoquan Chen†</a>",
		time: "2024.12",
		// img_path: "/publications/SLAM3R.jpg",
		img_path: "/publications/slam3r_wild.gif",
		description: "We design a real-time dense scene reconstruction system that regresses 3D points from video frames using feed-forward neural networks, without explicitly estimating camera parameters.",
		submit_status: "<span class='venue-highlight'>CVPR 2025 Highlight - Top 13.5%</span><span class='venue-secondary'>China3DV 2025, <b>Top1 paper</b></span>",
		link: "https://github.com/PKU-VCL-3DV/SLAM3R",
		arxiv: "https://arxiv.org/abs/2412.09401",
		code: "https://github.com/PKU-VCL-3DV/SLAM3R",
		github_repo: "PKU-VCL-3DV/SLAM3R",
		github_stars: 1190,
		other_links: {
			"机器之心(Chinese)": "https://mp.weixin.qq.com/s/fK5vJwbogcfwoduI9FuQ6w",
		}
	},
	{
		title: "SAI3D: Segment Any Instance in 3D Scenes",
		authors: "<a href='https://yd-yin.github.io/'>Yingda Yin*</a>, <b>Yuzheng Liu</b>*, <a href='https://youngxiao13.github.io/'>Yang Xiao*</a>, <a href='https://danielcohenor.com/'>Daniel Cohen-Or</a>, <a href='https://cs.stanford.edu/~jingweih/'>Jingwei Huang</a>, <a href='https://baoquanchen.info/'>Baoquan Chen†</a>",
		time: "2024.2",
		img_path: "/publications/SAI3D.jpg",
		description: "We introduce a zero-shot 3D instance segmentation approach that synergistically leverages geometric priors and semantic cues derived from Segment Anything Model (SAM).",
		submit_status: "<span class='venue-chip'>CVPR 2024</span><span class='venue-secondary'>3DV 2025 @ <b>Nectar Track Spotlight</b></span>",
		link: "https://github.com/yd-yin/SAI3D",
		arxiv: "https://arxiv.org/abs/2312.11557",
		page: "https://yd-yin.github.io/SAI3D/",
		code: "https://github.com/yd-yin/SAI3D"
	},

]


export {publications, type Publication}
