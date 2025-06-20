import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '')

	return {
		plugins: [react()],
		define: {
			'import.meta.env': JSON.stringify(env),
		},
	}
})
