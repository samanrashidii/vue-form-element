import type { App } from 'vue';
import { VueFormElement } from './components';

export default {
    install: (app: App) => {
        app.component('VueFormElement', VueFormElement)
    }
}

export { VueFormElement }