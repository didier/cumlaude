<script>
	import ButtonContent from './ButtonContent.svelte'

	/**
	 * @type {String} The link which will be opened when the button is clicked.
	 */
	export let href = null

	/**
	 * @type {String} The icon which will be displayed on the left side of the button.
	 */
	export let iconLeft = null

	/**
	 * @type {String} The icon which will be displayed on the right side of the button.
	 */
	export let iconRight = null

	/**
	 * @type {Boolean} Whether or not the button is secondary.
	 */
	export let secondary = false
	/**
	 * @type {Boolean} Whether or not the button is secondary.
	 */
	export let tertiary = false

	/**
	 * @type {String} The classes to apply to the button.
	 */
	let classes = ''
	export { classes as class }
</script>

{#if href}
	<a {href} class="button {classes}" class:secondary class:tertiary>
		<ButtonContent {iconLeft} {iconRight}>
			<slot />
		</ButtonContent>
	</a>
{:else}
	<button on:click {href} class="button {classes}" class:secondary class:tertiary>
		<ButtonContent {iconLeft} {iconRight}>
			<slot />
		</ButtonContent>
	</button>
{/if}
