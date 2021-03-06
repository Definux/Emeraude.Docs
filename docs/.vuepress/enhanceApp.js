import 'bootstrap/scss/bootstrap.scss';
import './styles/index.scss';
import BootstrapVue from "bootstrap-vue";

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    Vue.use(BootstrapVue);
}