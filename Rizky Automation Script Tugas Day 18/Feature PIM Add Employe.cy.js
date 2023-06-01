// Muhammad Rizky Ansari - Kelompok 5
// Test Case 1

describe('TC-PIMADD-01 : Test Login Sebagai Admin', () => {
  
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

// Test Case 2

describe('TC-PIMADD-02 : Test Navigasi Menu PIM', () => {
  
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    
    //Expected : Masuk Ke Dasboard Admin
    cy.url().should('include', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')
  })
  
  it('Test View Navigation View Employee List ', () => {
    //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()

    //Expected : Navigate to Page List Employee
    cy.url().should('include', '/web/index.php/pim/viewEmployeeList')
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item').should('contain', 'Employee List')    
  })


})

//Test Case 3

describe('TC-PIMADD-03 : Test Navigasi Add Employee', () => {
  
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    
    //Expected : Masuk Ke Dasboard Admin
    cy.url().should('include', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
  })  
  
  it('Test Navigation Add Employee', () => {
    cy.get('.orangehrm-header-container > .oxd-button').click()

    //Expected : Navigate to Page List Employee
    cy.url().should('include', '/web/index.php/pim/addEmployee')
    cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain', 'Add Employee')


    //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
    //cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Rizky')
    //cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Ansari')
    //cy.get('.oxd-button--secondary').click()

    //Validation
    
    //cy.get('.oxd-text--toast-title').should('contain', 'Success')
    //cy.get('.oxd-text--toast-message').should('contain', 'Successfully Saved')

})

})

// Test Case 4

describe('TC-PIMADD-04 : Test Add New Data Employee', () => {
  
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    
    //Expected : Masuk Ke Dasboard Admin
    cy.url().should('include', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()

    //Check Page Add Employee
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.url().should('include', '/web/index.php/pim/addEmployee')
    cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain', 'Add Employee')
  })    

  it('Test Fill Add New Data Employee', () => {
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Rizky')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Ansari')
    cy.get('.oxd-button--secondary').click()

    //Expected : Berhasil Menambahkan Data Employee
    cy.get('.oxd-text--toast-title').should('contain', 'Success')
    cy.get('.oxd-text--toast-message').should('contain', 'Successfully Saved')

    //Navigate to Personal Detail After Succes Add New Employee
    cy.get('.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6').should('contain', 'Personal Details')
    cy.get('.orangehrm-edit-employee-name > .oxd-text').should('contain', 'Rizky Ansari')

})

})

// Test Case 5

describe('TC-PIMADD-05 : Test Add New Data Employee With Same Employee ID', () => {
  
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    
    //Expected : Masuk Ke Dasboard Admin
    cy.url().should('include', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()

    //Check Page Add Employee
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.url().should('include', '/web/index.php/pim/addEmployee')
    cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain', 'Add Employee')
  })    

  it('Test Add New Data Employee : Case | Using The Same Employee ID', () => {
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Rizky')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Ansari')
    cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
    cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('123456')
    
    //Expected : Fail Add Employee With Notif : Employee Id already exists
    cy.get('.oxd-input-group > .oxd-text').should('contain', 'Employee Id already exists')
    
})

})

//Test Case 6

describe('TC-PIMADD-06 : Test Add New Data Employee With Null Input First Name', () => {
  
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    
    //Expected : Masuk Ke Dasboard Admin
    cy.url().should('include', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()

    //Check Page Add Employee
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.url().should('include', '/web/index.php/pim/addEmployee')
    cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain', 'Add Employee')
  })    

  it('Test Add New Data Employee : Case | Null Input First Name', () => {
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear()
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Ansari')
    cy.get('.oxd-button--secondary').click()    
    
    //Expected : Fail Add Employee With Notif : First Name Field Required
    cy.get('.--name-grouped-field > :nth-child(1) > .oxd-text').should('contain', 'Required')
    
})

})

//Test Case 7

describe('TC-PIMADD-07 : Test Add New Data Employee With Null Input Last Name', () => {
  
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    
    //Expected : Masuk Ke Dasboard Admin
    cy.url().should('include', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()

    //Check Page Add Employee
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.url().should('include', '/web/index.php/pim/addEmployee')
    cy.get('.orangehrm-card-container > .oxd-text--h6').should('contain', 'Add Employee')
  })    

  it('Test Add New Data Employee : Case | Null Input Last Name', () => {
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Rizky')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear()
    cy.get('.oxd-button--secondary').click()    
    
    //Expected : Fail Add Employee With Notif : Last Name Field Required
    cy.get('.--name-grouped-field > :nth-child(3) > .oxd-text').should('contain', 'Required')
    
})

})