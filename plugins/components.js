import Vue from 'vue';
import UiBuilder from '~/components/builder/UiBuilder';
import UiHeader from '~/components/ui/layout/UiHeader';
import UiFooter from '~/components/ui/layout/UiFooter';
import UiBody from '~/components/ui/layout/UiBody';
import UiHeroBanner from '~/components/ui/layout/UiHeroBanner';
import UiSection from '~/components/ui/section/UiSection';
import AppEvents from '~/components/app/events/AppEvents';
import AppEventPreview from '~/components/app/events/AppEventPreview';

Vue.component('UiBuilder', UiBuilder);
Vue.component('UiBody', UiBody);
Vue.component('UiHeader', UiHeader);
Vue.component('UiFooter', UiFooter);
Vue.component('UiSection', UiSection);
Vue.component('UiHeroBanner', UiHeroBanner);
Vue.component('AppEvents', AppEvents);
Vue.component('AppEventPreview', AppEventPreview);
