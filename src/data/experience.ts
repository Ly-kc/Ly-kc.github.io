interface Experience {
	period: string;
	organization: string;
	role: string;
	description: string;
	badge: string;
	logo: string;
	variant: "pku" | "ant";
}

const experiences: Experience[] = [
	{
		period: "2026.04 - Present",
		organization: "the Interactive Intelligence Lab at Ant Research",
		role: "Research Intern",
		description: "Research on interactive video generation models.",
		badge: "Ant",
		logo: "/logos/ant-group.svg",
		variant: "ant"
	},
	{
		period: "2025.09 - Present",
		organization: "Peking University",
		role: "Ph.D. Student",
		description: "School of Artificial Intelligence. Supervised by Prof. Baoquan Chen.",
		badge: "PKU",
		logo: "/logos/pku-seal.svg",
		variant: "pku"
	},
	{
		period: "2021.09 - 2025.07",
		organization: "Peking University",
		role: "B.S. Student",
		description: "Major in Information and Computing Science.",
		badge: "PKU",
		logo: "/logos/pku-seal.svg",
		variant: "pku"
	},
]

export { experiences, type Experience }
