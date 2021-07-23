/// <reference types = "cypress" />


describe ("the first few functionalities", () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/practice.html')
    })
    it('title test', () =>{
        cy.get('h1').should('have.text', "Welcome to the Murph challange").should('have.css','text-align', 'center')
    })
    it('testing difficulty selector', () => {
        cy.get('.diff').select("Hard").click

        cy.get('.reps').should('be.visible')
        cy.get('.workout__diff').children().should('have.html', ' Hard ')
    })
    it('testing video player', () => {
        cy.get('.vod').click
    })
    it('testing picture visibility', () => {
        cy.get('img').should('be.visible')
    })
    it('mapped arrays should not be visible', () => {
        cy.get('h3').should('not.be.visible')
    })
    it('explicit assertion test', () => {
        const labelText = Cypress.$('.diffLabel').text()
        expect(labelText).to.equal(labelText)
        expect(labelText).to.deep.equal("Choose a difficulty level")
        expect(labelText).to.match(/level$/)
    })
    it('throw error', () => {
        cy.get('.title').should(($h1) => {
            const headerName = $h1[0].className

            if (!headerName.match(/title/)) {
                throw new Error(`Could not find the page title in ${headerName}`)
            }
        })
    })
})