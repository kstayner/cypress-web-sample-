import LoginPage from '../pages/LoginPage'
import SecurePage from '../pages/SecurePage'

describe('Login Tests', () => {
    it('should not login with an invalid password', () => {
        LoginPage.visit()
        LoginPage.login('tomsmith', 'invalidpassword')
        SecurePage.flashAlert.should('include.text', 'Your password is invalid')
    })

    it('should not login with an invalid username', () => {
        LoginPage.visit()
        LoginPage.login('invaliduser', 'SuperSecretPassword')
        SecurePage.flashAlert.should('include.text', 'Your username is invalid')
    })

    it('should login with valid credentials', () => {
        LoginPage.visit()
        LoginPage.login('tomsmith', 'SuperSecretPassword!')
        SecurePage.flashAlert.should('include.text', 'You logged into a secure area')
    })
})
