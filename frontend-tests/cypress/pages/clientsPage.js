/// <reference types="cypress" />

// elements
const titleOfClientPage = 'Testers Hotel'
const createClientButton = 'h2 > .btn'
const newClientName = ':nth-child(1) > input'
const newClientEmail = ':nth-child(2) > input'
const newClientTelephone = ':nth-child(3) > input'
const newClientSaveButton = 'a.btn:nth-child(2)'
// const errorMessage01 = 'div.error:nth-child(3)'
// const errorMessage02 = 'div.error:nth-child(4)'
// const errorMessage03 = 'div.error:nth-child(5)'
const clientOptionsNr3 = 'div.card:nth-child(3) > div:nth-child(3) > img:nth-child(1)'
const deleteButtonInsideClientOptionsNr3 ='.menu > a:nth-child(2)'

// functions
function checkTitleOfClientPage(cy){
    cy.title().should('eq', titleOfClientPage)
}

function createClient(cy, fakeName, fakeEmail, fakeTelephone, contentToConfirm){ 
    cy.get(createClientButton).click()
    cy.contains('New Client')
    cy.get(newClientName).type(fakeName)
    cy.get(newClientEmail).type(fakeEmail)
    cy.get(newClientTelephone).type(fakeTelephone)
    cy.get(newClientSaveButton).click()
    cy.contains(contentToConfirm)
}

function failToCreateClient(cy){
    cy.get(createClientButton).click()
    cy.contains('New Client')
    cy.get(newClientSaveButton).click()
    cy.contains('name must be set', { matchCase: false })
    cy.contains('email must be set', { matchCase: false })
    cy.contains('telephone must be set', { matchCase: false })
}

function deleteThirdClient(cy){
    cy.get(clientOptionsNr3).click()
    cy.get(deleteButtonInsideClientOptionsNr3).click()
    cy.contains('#3').should('not.exist')
}

// exports
module.exports = {
    checkTitleOfClientPage,
    createClient,
    failToCreateClient,
    deleteThirdClient
} 