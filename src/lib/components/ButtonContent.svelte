<script>
	import Icon from '$lib/components/Icon.svelte'

	export let iconLeft = null
	export let iconRight = null

	const iconClasses = 'h-[1em] text-current'
</script>

<span class="grid grid-flow-col gap-2 place-items-center place-content-center">
	{#if iconLeft}
		<Icon icon={iconLeft} class={iconClasses} />
	{/if}
	<slot />
	{#if iconRight}
		<Icon icon={iconRight} class={iconClasses} />
	{/if}
</span>
