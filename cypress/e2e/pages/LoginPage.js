class LoginPage {
    visit() {
        cy.visit('/login')
    }

    login(username, password) {
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('button[type="submit"]').click()
    }
}

export default new LoginPage()
