<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<header class="flex h-24 w-full justify-center md:justify-end">
	<nav class="flex items-center gap-x-6 px-12 py-8 md:gap-x-10">
		<a
			class="hover:border-primary hover:text-primary border-b-4 border-transparent py-2 text-sm font-black tracking-widest text-white uppercase transition-all duration-300 ease-in-out hover:border-b-4"
			href={resolve('/')}>Start</a
		>
		<a
			class="hover:border-primary hover:text-primary border-b-4 border-transparent py-2 text-sm font-black tracking-widest text-white uppercase transition-all duration-300 ease-in-out hover:border-b-4"
			href={resolve('/projects')}>Projects</a
		>
		<a
			class="hover:border-primary hover:text-primary border-b-4 border-transparent py-2 text-sm font-black tracking-widest text-white uppercase transition-all duration-300 ease-in-out hover:border-b-4"
			href={resolve('/speaker')}>Speaker</a
		>
		<a
			class="border-primary text-primary hover:bg-primary rounded-full border-4 px-4 py-2 text-sm font-black tracking-widest uppercase transition-all duration-300 ease-in-out hover:scale-110 hover:text-white"
			href={resolve('/contact')}>Contact</a
		>
	</nav>
</header>
