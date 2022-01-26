import supabase from '$lib/db'
import { goto } from '$app/navigation'
import { writable } from 'svelte/store'
import { hostname } from '$lib/utils'

function createUserContext() {
	const { subscribe, set, update } = writable(null)

	function setAuthCookie(user) {
		fetch(`${hostname}/api/auth/cookie`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				event: user ? 'SIGNED_IN' : 'SIGNED_OUT',
				session: supabase.auth.session()
			})
		})
	}

	return {
		subscribe,
		update,
		isLoading: writable(true),
		set: (args) => {
			set(args)
			setAuthCookie(args)
		},
		logout: () => {
			supabase.auth.signOut().then(() => {
				setAuthCookie()
				goto('/')
			})
		},
		login: () => {
			supabase.auth.signIn({
				provider: 'github'
			})
		}
	}
}

export const user = createUserContext()
