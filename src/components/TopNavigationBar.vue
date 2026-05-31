<script setup lang="ts">
const navItems = [
	{ title: "Home", shortTitle: "Home", href: "/#card-overview", icon: "mdi-home" },
	{ title: "Publications", shortTitle: "Pubs", href: "/#card-publications", icon: "mdi-bookshelf" },
	{ title: "Education", shortTitle: "Edu.", href: "/#card-education", icon: "mdi-timeline-text-outline" },
	{ title: "Awards", shortTitle: "Awards", href: "/#card-awards", icon: "mdi-license" },
	{ title: "Projects", shortTitle: "Projects", href: "/#card-projects", icon: "mdi-hammer-screwdriver" },
]
</script>

<template>
	<v-app-bar
	:border=10
	class="d-none d-md-block">
		<template #default>
			<v-spacer></v-spacer>
			<v-btn
			to="/#card-overview"
			class="mr-4 ml-4"
			rounded="0"
			variant="flat"
			:active="false"
			style="display: flex; align-items: center; height: 100%">
				<span style="font-size: 20px;">Yuzheng Liu</span>
			</v-btn>
			<v-divider vertical class="mr-8"></v-divider>
			<v-btn
			v-for="item in navItems"
			:key="item.title"
			:to="item.href"
			class="mr-4"
			:prepend-icon="item.icon"
			:active="false"
			>
				{{ item.title }}
			</v-btn>
			<v-spacer></v-spacer>
		</template>
	</v-app-bar>

	<v-bottom-navigation
	class="d-md-none mobile-navigation"
	grow
	mandatory
	>
		<v-btn
		v-for="item in navItems"
		:key="item.title"
		:to="item.href"
		:active="false"
		>
			<v-icon :icon="item.icon"></v-icon>
			<span>{{ item.shortTitle }}</span>
		</v-btn>
	</v-bottom-navigation>

</template>
