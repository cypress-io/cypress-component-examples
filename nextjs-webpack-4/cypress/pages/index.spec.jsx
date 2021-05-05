import React from 'react'
import { mount } from '@cypress/react'
import IndexPage from '../../pages/index'

it('should work', () => {
  const el = document.createElement('noscript')
  el.id = '__next_css__DO_NOT_USE__'
  document.head.appendChild(el)
  console.log(el)
  
  mount(<IndexPage />)

  // cy.contains('Welcome to Next.js')
  // cy.get('[aria-label=search]').type('Cypress')
  // cy.contains('.search-text', 'You are searching for: Cypress')
})
