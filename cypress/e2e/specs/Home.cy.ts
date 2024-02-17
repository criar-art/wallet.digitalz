import pkg from '../../../package.json'

const appVersion: string = pkg.version

describe('Test render Home page pt-BR', () => {
  it('Render title app', () => {
    cy.visit('/')
    cy.clearLocalStorage()
    cy.contains('h1', 'Wallet Digitalz')
  })
  it('Render texts initial', () => {
    cy.contains('h2', 'Comece agora os seus registros')
    cy.contains('p', 'Simplifique o controle das suas finanças, mantendo o domínio sobre suas despesas e investimentos de forma conveniente e eficaz.')
  })
  it('Render text footer', () => {
    cy.contains('a', `2024 — Versão ${appVersion}`)
  })
})
