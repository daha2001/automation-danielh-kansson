/// <reference types="cypress" />


const logOutButton = 'button.btn'


function logOut(cy){
    cy.get(logOutButton).click()
}


module.exports = {
    logOut
}
