import { mount } from '@cypress/vue';
import VApp from 'vuetify/lib/components/VApp'
import UsingVuetify from './UsingVuetify.vue';
import vuetify from '../plugins/vuetify';

function mountWithVuetify(Comp, options = {}) {
  return mount(Comp, {
    vuetify,
    ...options,
    attrs: {
      // class: 'v-application',
    },
    propsData: {
      ...options.propsData,
    }
  }) 
}

it('renders a message', () => {
  cy.viewport(500, 800)
  mountWithVuetify(UsingVuetify, {
    propsData: {
      cafeTitle: 'Cafe Badilico'
    }
  })

  cy.get('div').contains('Cafe Badilico');
});
