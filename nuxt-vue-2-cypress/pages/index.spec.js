import { mount } from '@cypress/vue'
import Index from './index.vue'

it('renders a message', () => {
  mount(Index)
  cy.get('a').contains('GitHub')
  cy.get('a').contains('Documentation')
})
