import './polyfills';
import Vue from 'vue';
import store from './store';
import router from './router';
import axios from 'axios';{{#modul}}
import { FRENCH } from '@ulaval/modul-components/dist/utils/i18n/i18n';
import ComponentsPlugin from '@ulaval/modul-components/dist/components';
import ComponentsFrenchPlugin from '@ulaval/modul-components/dist/lang/fr';
import DirectivesPlugin from '@ulaval/modul-components/dist/directives';
import UtilsPlugin, { UtilsPluginOptions } from '@ulaval/modul-components/dist/utils';
import DefaultSpritesPlugin from '@ulaval/modul-components/dist/utils/svg/default-sprites';
import svc from '@ulaval/modul-components/dist/services/component-meta-impl';
import '@ulaval/modul-components/dist/styles/main.scss';{{/modul}}

Vue.config.productionTip = false;

(Vue.prototype as any).$http = axios;
{{#modul}}
const utilsPluginOptions: UtilsPluginOptions = {
    httpPluginOptions: {
        protectedUrls: ['<url>'],
        authorizationFn: () => '<token>'
    },
    i18PluginOptions: {
        curLang: FRENCH
    }
};

Vue.use(ComponentsPlugin);
Vue.use(DirectivesPlugin);
Vue.use(UtilsPlugin, utilsPluginOptions);
Vue.use(ComponentsFrenchPlugin);
Vue.use(DefaultSpritesPlugin);
Vue.use(svc);{{/modul}}

const vue = new Vue({
    router,
    store,
    template: '<router-view></router-view>'
});

vue.$mount('#vue');
