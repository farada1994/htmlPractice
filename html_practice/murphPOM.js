/// <reference types = "cypress" />


class Murphelements {
    visit() {
        cy.visit('http://127.0.0.1:5500/practice.html')
    }

    textTest(value) {
        const mainTitle = Cypress.$(value).text()
        expect(mainTitle).to.equal(mainTitle)
        expect(mainTitle).to.deep.equal(mainTitle)
        expect(mainTitle).to.match(/^[A-Za-z\s]+$/)
        return this
        
        // .should('have.css','text-align', 'center')
    }
    invisCheck(value) {
        const invis = cy.get(value).should('not.be.visible')
        return this
    }
    visCheck(value) {
        const vis = cy.get(value).should('be.visible')
        return this
    }
    invokeHide(value) {
        cy.get(value).invoke('hide').should('be.hidden')
        return this
    }
    errorCheck(value) {
        const errorStuff = cy.get(value).should(($value) => {
            const stuffName = $value[0].className
            if (stuffName === '') {
                throw new Error(`Could not find the class in ${value}`)
            }
            else {
                console.log(`Class for ${value} exists: ${stuffName}`)
            }
        })
        return this
    }
    scrolling(value, value2) {
        cy.scrollTo(value, {duration: value2})
        return this
    }
    scrollonElement(value, value2) {
        const elementScroll = cy.get(value).scrollIntoView({duration: value2})
        return this
    }


}

class Diffselector {
    visit() {
        cy.visit('http://127.0.0.1:5500/practice.html')
    }
    selecting(value) {
        const wot = cy.get('.diff')
        .select(value).click
        return this

    }
    testReps(value) {
        cy.get('.reps').should('be.visible')
        cy.get('.workout__diff').children().should('have.html', value)
        return this
    }
}
class Vodsnpics {
    visit() {
        cy.visit('http://127.0.0.1:5500/practice.html')
    }
    vod() {
        const vid = cy.get('.vod').click
        return this
    }
    pic() {
        const picture = cy.get('img').should('be.visible')
        return this
    }

}

export {Murphelements, Diffselector, Vodsnpics}