import { dev } from '$app/env'

const localhost = 'http://localhost:3000'

export const hostname = dev ? localhost : import.meta.env.VITE_HOSTNAME || localhost
