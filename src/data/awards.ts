interface Award {
	year: string;
	name: string;
	description: string;
}

const awards: Award[] = [
	{
		year: "2023, 2024",
		name: "Merit Student of Peking University",
		// description: "Top 15% in the class"
		description: ""
	},
	{
		year: "2023",
		name: "The Okamatsu Scholarship",
		description: ""
	},
	{
		year: "2023",
		name: "Huawei Scholarship",
		description: ""
	},
	{
		year: "2022",
		name: "Award for Academic Excellence of Peking University",
		description: ""
	},
	{
		year: "2022",
		name: "UBIQUANT Scholarship",
		description: ""
	},
];

export {awards, type Award}
