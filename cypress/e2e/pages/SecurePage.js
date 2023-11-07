class SecurePage {
    get flashAlert() {
        return cy.get('#flash')
    }
}

export default new SecurePage()
