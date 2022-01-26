<script context="module">
	import list from '~icons/uil/list-ol'
	import home from '~icons/uil/estate'
	import user from '~icons/uil/user-circle'
	import dumbbell from '~icons/uil/dumbbell'
	import settings from '~icons/uil/cog'
	import logout from '~icons/uil/signout'
	import left from '~icons/uil/arrow-left'
	import right from '~icons/uil/arrow-right'
	import up from '~icons/uil/arrow-up'
	import down from '~icons/uil/arrow-down'
	import plus from '~icons/uil/plus'
	import sync from '~icons/uil/sync'
	import collapseLeft from '~icons/uil/left-arrow-from-left'
	import layer from '~icons/uil/layer-group'
	import grids from '~icons/uil/grids'
	import users from '~icons/uil/users-alt'
	import profile from '~icons/uil/user-square'
	import calendar from '~icons/uil/calender'

	export const icons = {
		list,
		home,
		user,
		dumbbell,
		settings,
		logout,
		right,
		up,
		down,
		left,
		plus,
		sync,
		rows: grids,
		stack: layer,
		users,
		profile,
		calendar,
		'collapse-left': collapseLeft
	}
</script>

<script>
	export let icon = 'dumbbell'

	let classes = null
	export { classes as class }
</script>

<span class={classes}>
	<svelte:component this={icons[icon]} style="all: inherit;" />
</span>
