<script>
	import { user } from '$lib/store/user'
	import Button from './Button.svelte'
	import Logo from './Logo.svelte'
</script>

<nav class="border-b border-stone-200 rounded-2xl bg-white py-4">
	<div class="wrapper grid items-end lg:grid-flow-col">
		<a href="/" class="col-span-full lg:col-span-auto"><Logo /></a>
		<div class="flex items-center gap-4 lg:gap-8 mt-8">
			<a href="/pricing">Pricing</a>
			<a href="/account">Account</a>
			<Button href={$user ? '/app' : '/login'} class="ml-auto"
				>{$user ? 'To the app' : 'Login'}</Button
			>
		</div>
	</div>
</nav>
