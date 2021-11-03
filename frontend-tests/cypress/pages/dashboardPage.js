/// <reference types="cypress" />

// Elements
const logoutButton = '.user > .btn'
const titleOfDashboardPage = 'Testers Hotel'
const viewClientsButton = '.blocks > :nth-child(2) > .btn'
const viewRoomsButton = 'div.block:nth-child(1) > a:nth-child(3)'


// Actions / functions
function checkTitleOfDashboardPage(cy){
    cy.title().should('eq', titleOfDashboardPage)
}

function performLogout(cy, contentToConfirm){
cy.get(logoutButton).click()
cy.contains(contentToConfirm)

}

function enterClientsFromDashboard(cy){
cy.get(viewClientsButton).click()
}

function enterRoomsFromDashboard(cy){
    cy.get(viewRoomsButton).click()
}

// Exports
module.exports = {
    checkTitleOfDashboardPage,
    performLogout,
    enterClientsFromDashboard,
    enterRoomsFromDashboard
}