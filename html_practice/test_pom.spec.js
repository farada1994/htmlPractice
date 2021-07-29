/// <reference types = "cypress" />
import {Murphelements, Diffselector, Vodsnpics} from './murphPOM'
// import Diffselector from './murphPOM'
describe ("the first few functionalities", () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/practice.html')
    })
    it('title test', () =>{
        const testTitle = new Murphelements()
        testTitle.visit()
        testTitle.textTest('h1')
        testTitle.errorCheck('h1')
    })
    it('testing difficulty selector', () => {
        const diffSelect = new Diffselector()
        diffSelect.visit()
        diffSelect.selecting("Medium")
        diffSelect.testReps(' Medium ')
        
    })
    it('testing video player and pic visibility', () => {
        const videoAndPicture = new Vodsnpics()
        videoAndPicture.visit()
        videoAndPicture.vod()
        videoAndPicture.pic()
    })
    it('mapped arrays should not be visible', () => {
        const h3Vis = new Murphelements()
        h3Vis.visit()
        h3Vis.invisCheck('h3')

    })
    it('invoke shenanigans', () => {
        const h2Vis = new Murphelements()
        h2Vis.visit()
        h2Vis.visCheck('h2')
        h2Vis.invokeHide('h2')
    })
    it('scrolling on the page', () => {
        cy.scrollTo('bottom', {duration: 1000})
        cy.scrollTo('top', {duration: 1000})
        cy.get('.vod').scrollIntoView({duration: 1000})
    })
})