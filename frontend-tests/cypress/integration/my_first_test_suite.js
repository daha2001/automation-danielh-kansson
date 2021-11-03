/// <reference types="cypress" />

import * as targets from '../targets/targets'
import * as indexFunctions from '../pages/indexPage'
import * as clientPageFunctions from '../pages/clientsPage'
import * as dashboardPageFunctions from '../pages/dashboardPage'
import * as logOutButtonFunctions from '../pages/logOutPage'
import * as roomsPageFunctions from '../pages/roomsPage'

// test suite
describe('test suite', function(){

    // open website and log in before each test case
    this.beforeEach(() => {
        cy.visit(targets.base_url) 
        indexFunctions.checkTitleOfIndexPage(cy)
        indexFunctions.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
    })

    // logout after each test case
    this.afterEach(()=>{
        logOutButtonFunctions.logOut(cy)
    })

        // test case 01
        it ('Create a client', function(){
            dashboardPageFunctions.enterClientsFromDashboard(cy)
            clientPageFunctions.checkTitleOfClientPage(cy)
            clientPageFunctions.createClient(cy, targets.fakeName, targets.fakeEmail, targets.fakeTelephone, 'Clients') 
        })

        // test case 02
        it ('Fail to create a client', function(){
                dashboardPageFunctions.enterClientsFromDashboard(cy)
                clientPageFunctions.checkTitleOfClientPage(cy)
                clientPageFunctions.failToCreateClient(cy)
        })

        // test case 03
        it ('Delete the third client', function(){
            dashboardPageFunctions.enterClientsFromDashboard(cy)
            clientPageFunctions.checkTitleOfClientPage(cy)
            clientPageFunctions.deleteThirdClient(cy)
        })

        // test case 04
        it ('Fail to create a room', function(){
            dashboardPageFunctions.enterRoomsFromDashboard(cy)
            roomsPageFunctions.checkTitleOfRoomsPage(cy)
            roomsPageFunctions.failToCreateRoom(cy)
        })

        // test case 05
        it ('Create and delete room', function(){
            dashboardPageFunctions.enterRoomsFromDashboard(cy)
            roomsPageFunctions.checkTitleOfRoomsPage(cy)
            roomsPageFunctions.createRoom(cy, targets.category, targets.roomNumber, targets.roomFloor, targets.roomPrice, targets.features, 'Rooms')
            roomsPageFunctions.deleteRoom(cy)
        })

})