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
}

const publications: Publication[] = [
	{
		title: "SLAM3R: Real-Time Dense Scene Reconstruction from Monocular RGB Videos",
		authors: "<b>Yuzheng Liu</b>*, <a href='https://siyandong.github.io/'>Siyan Dong*</a>, <a href='https://ffrivera0.github.io/'>Shuzhe Wang</a>, <a href='https://yanchaoyang.github.io/'>Yanchao Yang†</a>, <a href='https://fqnchina.github.io/'>Qingnan Fan</a>, <a href='https://baoquanchen.info/'>Baoquan Chen†</a>",
		time: "2024.12",
		img_path: "/publications/SLAM3R.jpg",
		description: "We design a real-time dense scene reconstruction system that regresses 3D points from video frames using feed-forward neural networks, without explicitly estimating camera parameters.",
		submit_status: "Arxiv 2024",
		link: "https://arxiv.org/abs/2412.09401",
		arxiv: "https://arxiv.org/abs/2412.09401",
		code: "https://github.com/PKU-VCL-3DV/SLAM3R"
	},
	{
		title: "SAI3D: Segment Any Instance in 3D Scenes",
		authors: "<a href='https://yd-yin.github.io/'>Yingda Yin*</a>, <b>Yuzheng Liu</b>*, <a href='https://youngxiao13.github.io/'>Yang Xiao*</a>, <a href='https://danielcohenor.com/'>Daniel Cohen-Or</a>, <a href='https://cs.stanford.edu/~jingweih/'>Jingwei Huang</a>, <a href='https://baoquanchen.info/'>Baoquan Chen†</a>",
		time: "2024.2",
		img_path: "/publications/SAI3D.jpg",
		description: "We introduce a zero-shot 3D instance segmentation approach that synergistically leverages geometric priors and semantic cues derived from Segment Anything Model (SAM).",
		submit_status: "CVPR 2024",
		link: "https://arxiv.org/abs/2312.11557",
		arxiv: "https://arxiv.org/abs/2312.11557",
		page: "https://yd-yin.github.io/SAI3D/",
		code: "https://github.com/yd-yin/SAI3D"
	},

]


export {publications, type Publication}
