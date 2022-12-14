import vue from '@vitejs/plugin-vue2'
import * as path from 'path'
import { UserConfigExport } from 'vite'

export default <UserConfigExport>{
    plugins: [
        vue(),
    ],
    server: {
        port: 10000,
    },
    envDir: './env',
    envPrefix: [ 'VUE_APP_' ],
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src'),
        },
    },
}
