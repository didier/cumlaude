<script>
	// import { fly } from 'svelte/transition'

	let show = true
</script>

{#if show}
	<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
		<!-- banner - start -->
		<div
			class="flex flex-wrap sm:flex-nowrap sm:justify-center sm:items-center bg-indigo-500 relative sm:gap-3 px-4 sm:pr-8 ms:px-8 py-3"
		>
			<div
				class="order-1 sm:order-none w-11/12 sm:w-auto max-w-screen-sm inline-block text-white text-sm md:text-base mb-2 sm:mb-0"
			>
				This is a section of some simple filler text, also known as placeholder text.
			</div>

			<a
				href="#"
				class="order-last sm:order-none w-full sm:w-auto inline-block bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 focus-visible:ring ring-indigo-300 text-white text-xs md:text-sm font-semibold text-center whitespace-nowrap rounded-lg outline-none transition duration-100 px-4 py-2"
				>Learn more</a
			>

			<!-- close button - start -->
			<div
				class="order-2 sm:order-none w-1/12 sm:w-auto flex justify-end items-start sm:absolute sm:right-0 sm:mr-1 xl:mr-3"
			>
				<button
					on:click={() => (show = !show)}
					type="button"
					class="text-white hover:text-indigo-100 active:text-indigo-200 transition duration-100"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-5 md:w-6 h-5 md:h-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<!-- close button - end -->
		</div>
		<!-- banner - end -->
	</div>
{/if}
