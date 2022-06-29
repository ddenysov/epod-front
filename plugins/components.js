import Vue from 'vue';
import UiBuilder from '~/components/builder/UiBuilder';
import UiHeader from '~/components/ui/layout/UiHeader';
import UiFooter from '~/components/ui/layout/UiFooter';
import UiBody from '~/components/ui/layout/UiBody';
import UiHeroBanner from '~/components/ui/layout/UiHeroBanner';
import UiSection from '~/components/ui/section/UiSection';
import UiForm from '~/components/ui/form/UiForm';
import UiButton from '~/components/ui/form/UiButton';
import UiSelect from '~/components/ui/form/UiSelect';
import AppEvents from '~/components/app/events/AppEvents';
import AppEventPreview from '~/components/app/events/AppEventPreview';

Vue.component('UiBuilder', UiBuilder);

Vue.component('UiBody', UiBody);
Vue.component('UiHeader', UiHeader);
Vue.component('UiFooter', UiFooter);
Vue.component('UiSection', UiSection);

Vue.component('UiHeroBanner', UiHeroBanner);

Vue.component('UiForm', UiForm);
Vue.component('UiSelect', UiSelect);
Vue.component('UiButton', UiButton);

Vue.component('AppEvents', AppEvents);
Vue.component('AppEventPreview', AppEventPreview);
