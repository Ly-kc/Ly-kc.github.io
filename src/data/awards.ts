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
];

export {awards, type Award}
