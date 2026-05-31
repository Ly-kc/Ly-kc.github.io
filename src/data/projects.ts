interface Project {
	name: string;
	description: string;
	time: string;
	link: string;
}

const projects: Project[] = [
	{
		name: "Pitorch",
		description: "A toy AI framework I built from scratch, using CUDA and C++ as the backend and Python as the frontend. Final project for 'Programming in Artificial Intelligence'.",
		time: "2024.01",
		link: "https://github.com/Ly-kc/Pitorch"
	},
	{
		name: "Segment Anything on BTCV",
		description: "Fine-tuned SAM for semantic segmentation on the BTCV dataset. Final project for <a href='https://youchengli.com/teaching/machine_learning_23_fall.html'>'Machine Learning'</a>.",
		time: "2024.01",
		link: "https://github.com/Ly-kc/SAM-ON-BTCV"
	},
	{
		name: "Course Resource Manager",
		description: "A course resource manager implemented with Qt. Final project for 'Practice of Programming in C&C++'.",
		time: "2022.06",
		link: "https://github.com/Ly-kc/Course_resource_manager"
	},
]

export {projects, type Project}
