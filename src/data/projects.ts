interface Project {
	name: string;
	description: string;
	time: string;
	link: string;
}

const projects: Project[] = [
	{
		name: "Pitorch",
		description: "The first AI framewrok designed by myself,</br>utilizing CUDA and C++ as the backend and Python as the frontend,</br> which is the final project of class 'Programming in Artificial Intelligence'.",
		time: "2024.01",
		link: "https://github.com/Ly-kc/Pitorch"
	},
	{
		name: "Segment Anything on BTCV",
		description: "Finetune SAM to conduct sementic segmentation on the BTCV dataset, </br> which is the final project of class <a href='https://youchengli.com/teaching/machine_learning_23_fall.html'>'Machine Learning'</a>.",
		time: "2024.01",
		link: "https://github.com/Ly-kc/SAM-ON-BTCV"
	},
	{
		name: "Course Resource Manager",
		description: "A course resource manager implemented using Qt,</br> which is the final project of class 'Practice of Programming in C&C++'.",
		time: "2022.06",
		link: "https://github.com/Ly-kc/Course_resource_manager"
	},
]

export {projects, type Project}
