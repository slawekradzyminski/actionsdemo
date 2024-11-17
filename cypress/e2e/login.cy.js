/// <reference types="cypress" />

describe('Localstack login tests', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8081')
    })
  
    it.skip('should successfully login', () => {
        // when
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('admin')
        cy.get('.btn-primary').click()

        // then
        cy.get('h1').should('contain.text', 'Hi Slawomir')
    })

    it.skip('should fail login', () => {
        // when
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('wrong')
        cy.get('.btn-primary').click()

        // then
        cy.get('.alert-danger').should('have.text', 'Invalid username/password supplied')
    })
  
  })
  