export class AmazonPage {

    public getUrl(){
        cy.visit('https://www.amazon.com/')
    }

    public verifyLogoPresent(){
        cy.get('#nav-logo-sprites').should('be.visible')
    }
}