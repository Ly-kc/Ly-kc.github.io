interface Award {
	year: string;
	name: string;
	description: string;
}

const awards: Award[] = [
	{
		year: "2025",
		name: "Peking University Outstanding Thesis Award",
		description: ""
	},
	{
		year: "2025",
		name: "Outstanding Graduate of Peking University",
		description: ""
	},
	{
		year: "2025",
		name: "Top1 paper in China3DV 2025",
		description: "Won the most votes <b>among 95 posters</b>"
	},
	{
		year: "2023, 2024",
		name: "Merit Student of Peking University",
		// description: "Top 15% in the class"
		description: "<b>Top 15%</b> in the class"
	},
	{
		year: "2023",
		name: "The Okamatsu Scholarship",
		description: "Peking University-level Scholarship"
	},
	{
		year: "2023",
		name: "Huawei Scholarship",
		description: "Peking University-level Scholarship"
	},
	{
		year: "2022",
		name: "Award for Academic Excellence of Peking University",
		description: "Peking University-level Aaward"
	},
	{
		year: "2022",
		name: "UBIQUANT Scholarship",
		description: "Peking University-level Scholarship"
	},
];

export {awards, type Award}
