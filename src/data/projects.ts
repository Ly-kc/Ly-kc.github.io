interface Project {
	name: string;
	description: string;
	time: string;
	link: string;
}

const projects: Project[] = [
	{
		name: "Pitorch",
		description: "The first AI framewrok designed by myself,</br> which is the final project of class 'Programming in Artificial Intelligence'.",
		time: "2024.01",
		link: "https://github.com/Ly-kc/Pitorch"
	},
]

export {projects, type Project}
