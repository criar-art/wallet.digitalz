import pkg from '../../../package.json'

const appVersion: string = pkg.version

describe('Test render Home page pt-BR', () => {
  it('Render title app', () => {
    cy.visit('/')
    cy.contains('h1', 'Wallet Digitalz')
  })
  it('Render texts initial', () => {
    cy.contains('h2', 'Comece agora os seus registros')
    cy.contains('p', 'Este aplicativo é para ajudar a gerenciar seu dinheiro, despesas e investimentos')
  })
  it('Render text footer', () => {
    cy.contains('a', `2023 — Versão ${appVersion}`)
  })
})
