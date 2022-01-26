<script>
	import Button from './Button.svelte'

	import Logo from './Logo.svelte'
</script>

<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
	<div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
		<header
			class="flex justify-between items-center border-b py-4 mb-8 md:mb-12 xl:mb-16 sticky left-0 top-0 bg-white"
		>
			<!-- logo - start -->
			<Logo />
			<!-- logo - end -->

			<!-- nav - start -->
			<nav class="hidden lg:flex gap-12">
				<a href="#" class="text-indigo-500 text-lg font-semibold">Home</a>
				<a
					href="#"
					class="text-stone-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
					>Features</a
				>
				<a
					href="#"
					class="text-stone-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
					>Pricing</a
				>
				<a
					href="#"
					class="text-stone-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
					>About</a
				>
			</nav>
			<!-- nav - end -->

			<!-- buttons - start -->
			<Button href="#">Contact Sales</Button>

			<Button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					/>
				</svg>

				Menu
			</Button>
		</header>

		<section class="flex flex-col items-center">
			<!-- notice - start -->
			<div class="flex items-center bg-stone-50 text-stone-500 border rounded gap-2 p-2">
				<span
					class="bg-indigo-100 text-indigo-800 text-xs font-semibold leading-none rounded-full px-2 py-1 mt-0.5"
					>New</span
				>

				<span class="text-sm">This is a section of some simple filler text.</span>

				<a
					href="#"
					class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm font-bold transition duration-100"
					>More</a
				>
			</div>
			<!-- notice - end -->

			<div
				class="max-w-xl flex flex-col items-center text-center pt-8 lg:pt-32 pb-0 sm:pb-16 lg:pb-32"
			>
				<p class="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">
					Very proud to introduce
				</p>

				<h1 class="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
					Revolutionary way to build the web
				</h1>

				<p class="text-stone-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
					This is a section of some simple filler text, also known as placeholder text. It shares
					characteristics of real text.
				</p>

				<div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
					<a
						href="#"
						class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
						>Start now</a
					>

					<a
						href="#"
						class="inline-block bg-white hover:bg-stone-100 active:bg-stone-200 focus-visible:ring ring-indigo-300 border text-stone-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
						>Take tour</a
					>
				</div>
			</div>
		</section>
	</div>
</div>
