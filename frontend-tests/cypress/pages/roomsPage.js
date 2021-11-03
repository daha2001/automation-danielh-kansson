/// <reference types="cypress" />

// elements
const titleOfRoomsPage = 'Testers Hotel'
const createRoomButton = 'a.btn:nth-child(2)'
const createRoomSaveButton = 'a.btn:nth-child(2)'
const categoryField = 'div.field:nth-child(1) > select:nth-child(2)'
const createRoomNumberInputField = 'div.field:nth-child(2) > input:nth-child(2)'
const createRoomFloorInputField = 'div.field:nth-child(3) > input:nth-child(2)'
const createRoomPriceInputField = 'div.field:nth-child(5) > input:nth-child(2)'
const createRoomCheckbox = '.checkbox'
const createRoomFeatures = 'div.field:nth-child(6) > select:nth-child(2)'
const roomOptionsNr3 = 'div.card:nth-child(3) > div:nth-child(3) > img:nth-child(1)'
const deleteButtonInsideRoomOptionsNr3 = '.menu > a:nth-child(2)'

// functions
function checkTitleOfRoomsPage(cy){
    cy.title().should('eq', titleOfRoomsPage)
}

function failToCreateRoom(cy){
    cy.get(createRoomButton).click()
    cy.contains('New Room')
    cy.get(createRoomSaveButton).click()
    cy.contains('room number must be set', { matchCase: false })
    cy.contains('floor must be set', { matchCase: false })
    cy.contains('price must be a whole number', { matchCase: false })
}

function createRoom(cy, category, roomNumber, roomFloor, roomPrice, features, contentToConfirm){
    cy.get(createRoomButton).click()
    cy.contains('New Room')
    cy.get(categoryField).select(category)
    cy.get(createRoomNumberInputField).type(roomNumber)
    cy.get(createRoomFloorInputField).type(roomFloor)
    cy.get(createRoomCheckbox).click()
    cy.get(createRoomPriceInputField).type(roomPrice)
    cy.get(createRoomFeatures).select(features)
    cy.get(createRoomSaveButton).click()
    cy.contains(contentToConfirm)
}

function deleteRoom(cy){
    cy.get(roomOptionsNr3).click()
    cy.get(deleteButtonInsideRoomOptionsNr3).click()
    cy.contains('Room 99').should('not.exist')
}


module.exports = {
    checkTitleOfRoomsPage,
    failToCreateRoom,
    createRoom,
    deleteRoom
}
