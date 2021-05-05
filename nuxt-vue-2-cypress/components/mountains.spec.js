import { mount } from '@cypress/vue'
import Mountains from './mountains.vue'

describe('Mountains', () => {
  it('shows a load state', () => {
    mount(Mountains, {
      mocks: {
        $fetchState: {
          pending: true
        }
      }
    })

    cy.get('p').contains('Fetching mountains...')
  })

  it('shows a failed state', () => {
    mount(Mountains, {
      mocks: {
        $fetchState: {
          error: true
        }
      }
    })

    cy.get('p').contains('An error occurred :(')
  })

  it('shows a failed state', () => {
    mount(Mountains, {
      data() {
        return {
          mountains: [
            { title: 'Mt Everest' }
          ]
        }
      },
      mocks: {
        $fetchState: {}
      }
    })

    cy.get('li').contains('Mt Everest')
  })
})
