
// Muhammad Rizky Ansari - Kelompok 5
// Test Case 1 Edit Employee

describe('TC-PIMEDT-01 : Test Login Sebagai Admin', () => {
  
  it('Test Login Sebagai Admin',() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    
    //Expected : Masuk Ke Dasboard Admin
    cy.url().should('include', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')    
  })
    
})

// Test Case 2 Edit Employee

describe('TC-PIMEDT-02 : Test Navigation Edit Employee', () => {
  
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    
    //Expected : Masuk Ke Dasboard Admin
    cy.url().should('include', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')
  })
  
  it('Test Navigation Edit Employee ', () => {  
    //Click Menu PIM  
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()

    //Expected : Navigate to Page List Employee
    cy.url().should('include', '/web/index.php/pim/viewEmployeeList')
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item').should('contain', 'Employee List')   

    //Search Employee By ID
    cy.get(':nth-child(2) > .oxd-input').type('123456')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})

    //Edit Employee Action
    //cy.get('.oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({multiple: true})
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
    
    //Check Navigation To Edit Personal Details
    cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('contain', 'Personal Details')
    cy.get(':nth-child(1) > .orangehrm-tabs-item').should('contain', 'Personal Details')

    //Edit Field Name
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear()
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Muhammad')
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear()
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Rizky')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear()
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Ansari 3')
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click({force: true})

    //Expected Result  :Berhasil Update Data Employee | Show Notification : Successfully Updated
    cy.get('.oxd-text--toast-message').should('contain', 'Successfully Updated')
    cy.get('.oxd-text--toast-title').should('contain', 'Success')

  })


})

// Test Case 3 Edit Employee

describe('TC-PIMEDT-03 : Test Edit Personal Details Null Update First Name', () => {
  
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    
    //Expected : Masuk Ke Dasboard Admin
    cy.url().should('include', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')
  })
  
  it('Test Edit Personal Details Null Update First Name ', () => {  
    //Click Menu PIM  
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()

    //Expected : Navigate to Page List Employee
    cy.url().should('include', '/web/index.php/pim/viewEmployeeList')
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item').should('contain', 'Employee List')   

    //Search Employee By ID
    cy.get(':nth-child(2) > .oxd-input').type('123456')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})

    //Edit Employee Action
    //cy.get('.oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({multiple: true})
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force: true})
    
    //Check Navigation To Edit Personal Details
    cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('contain', 'Personal Details')
    cy.get(':nth-child(1) > .orangehrm-tabs-item').should('contain', 'Personal Details')

    //Edit Field Name
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear()
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear()
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Rizky')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear()
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Ansari 3')
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click({force: true})

    //Expected Result  :Fail Update Data Employee : Field First Name Notification Required
    cy.get('.--name-grouped-field > :nth-child(1) > .oxd-text').should('contain', 'Required')
    

  })


})

// Test Case 4 Edit Employee

describe('TC-PIMEDT-04 : Test Edit Personal Details Null Update Last Name', () => {
  
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    
    //Expected : Masuk Ke Dasboard Admin
    cy.url().should('include', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')
  })
  
  it('Test Edit Personal Details Null Update Last Name ', () => {  
    //Click Menu PIM  
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()

    //Expected : Navigate to Page List Employee
    cy.url().should('include', '/web/index.php/pim/viewEmployeeList')
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item').should('contain', 'Employee List')   

    //Search Employee By ID
    cy.get(':nth-child(2) > .oxd-input').type('123456')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})

    //Edit Employee Action
    //cy.get('.oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({multiple: true})
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click({force: true})
    
    //Check Navigation To Edit Personal Details
    cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('contain', 'Personal Details')
    cy.get(':nth-child(1) > .orangehrm-tabs-item').should('contain', 'Personal Details')

    //Edit Field Name
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear()
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Muhammad')
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear()
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Rizky')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear()
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click({force: true})

    //Expected Result  :Fail Update Data Employee : Field First Name Notification Required
    cy.get('.--name-grouped-field > :nth-child(3) > .oxd-text').should('contain', 'Required')

  })


})


