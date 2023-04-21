import pkg from '../../../package.json'

const appVersion: string = pkg.version

describe('Test render register basic', () => {
  it('Render a investiment basic', () => {
    cy.visit('/')
    cy.get('[aria-label="New register"]').click()
    cy.get('[aria-label="Select type register"]').type('Investimento', { force: true })
    cy.get('.v-select__content .v-list-item:nth-of-type(1)').click({ force: true })
    cy.get('[aria-label="Name of register"]').type('Open Source', { force: true })
    cy.get('[aria-label="Value of register"]').type(1000000, { force: true })
    cy.get('[aria-label="Description of register"]').type('Investiment in community open source', { force: true })
    cy.get('[aria-label="Create register"]').click()
  })
  it('Render a expense basic', () => {
    cy.get('[aria-label="New register"]').click()
    cy.get('[aria-label="Select type register"]').type('Entrada', { force: true })
    cy.get('.v-select__content .v-list-item:nth-of-type(2)').click({ force: true })
    cy.get('[aria-label="Name of register"]').type('Freelance Vue', { force: true })
    cy.get('[aria-label="Value of register"]').type(10000, { force: true })
    cy.get('[aria-label="Description of register"]').type('Create a application with Vue', { force: true })
    cy.get('[aria-label="Create register"]').click()
  })
  it('Render a investiment basic', () => {
    cy.get('[aria-label="New register"]').click()
    cy.get('[aria-label="Select type register"]').type('Despesa', { force: true })
    cy.get('.v-select__content .v-list-item:nth-of-type(3)').click({ force: true })
    cy.get('[aria-label="Name of register"]').type('Pizzas', { force: true })
    cy.get('[aria-label="Value of register"]').type(1000, { force: true })
    cy.get('[aria-label="Description of register"]').type('Bought a lot pizza for kill the hungry', { force: true })
    cy.get('[aria-label="Create register"]').click()
  })
})
