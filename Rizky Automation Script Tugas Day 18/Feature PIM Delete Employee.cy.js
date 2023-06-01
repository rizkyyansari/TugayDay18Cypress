// Muhammad Rizky Ansari - Kelompok 5
// Test Case 1 Delete Employee

describe('TC-PIMDEL-01 : Test Login Sebagai Admin', () => {
  
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
  
  // Test Case 2 Delete Employee
  
  describe('TC-PIMDEL-02 : Test Delete Single Data Employee Using Button Delete Selected', () => {
    
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      
      //Expected : Masuk Ke Dasboard Admin
      cy.url().should('include', '/web/index.php/dashboard/index')
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')
    })
    
    it('Test Select Single Delete Employee ', () => {  
      //Click Menu PIM  
      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
  
      //Expected : Navigate to Page List Employee
      cy.url().should('include', '/web/index.php/pim/viewEmployeeList')
      //cy.get('.--visited > .oxd-topbar-body-nav-tab-item').should('contain', 'Employee List')

      //Action Delete Employee
      cy.get(':nth-child(2) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force: true})
      //Validation : Show Button Delete Selected
      cy.get('.orangehrm-horizontal-padding > div > .oxd-button').should('contain', 'Delete Selected')        
      cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click({force: true})

      //Validation : Show Pop-Up Confirmation
      cy.get('.orangehrm-modal-header > .oxd-text').should('contain', 'Are you Sure')

      //Continue Action Delete Data Employee
      cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click({force: true})

      //Expected : Berhasil Hapus Data Employee | Show Notification : Successfully Deleted
      cy.get('.oxd-text--toast-title').should('contain', 'Success')
      cy.get('.oxd-text--toast-message').should('contain', 'Successfully Deleted')
      
    
    })

  })

  // Test Case 3 Delete Employee
  
  describe('TC-PIMDEL-03 : Test Delete Multi Select Data Employee Using Button Delete Selected', () => {
    
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      
      //Expected : Masuk Ke Dasboard Admin
      cy.url().should('include', '/web/index.php/dashboard/index')
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')
    })
    
    it('Test Select Multiselect Delete Employee ', () => {  
      //Click Menu PIM  
      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
  
      //Expected : Navigate to Page List Employee
      cy.url().should('include', '/web/index.php/pim/viewEmployeeList')
      //cy.get('.--visited > .oxd-topbar-body-nav-tab-item').should('contain', 'Employee List')

      //Action Delete Employee
      cy.get(':nth-child(2) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force: true})
      cy.get(':nth-child(3) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force: true})
      //Validation : Show Button Delete Selected
      cy.get('.orangehrm-horizontal-padding > div > .oxd-button').should('contain', 'Delete Selected')        
      cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click({force: true})

      //Validation : Show Pop-Up Confirmation
      cy.get('.orangehrm-modal-header > .oxd-text').should('contain', 'Are you Sure')

      //Continue Action Delete Data Employee
      cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click({force: true})

      //Expected : Berhasil Hapus Data Employee | Show Notification : Successfully Deleted
      cy.get('.oxd-text--toast-title').should('contain', 'Success')
      cy.get('.oxd-text--toast-message').should('contain', 'Successfully Deleted')
      
    
    })

  })

  // Test Case 4 Delete Employee
  
  describe('TC-PIMDEL-04 : Test Delete Select All List Data Employee Using Button Delete Selected', () => {
    
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      
      //Expected : Masuk Ke Dasboard Admin
      cy.url().should('include', '/web/index.php/dashboard/index')
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')
    })
    
    it('Test Select All Delete Employee ', () => {  
      //Click Menu PIM  
      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
  
      //Expected : Navigate to Page List Employee
      cy.url().should('include', '/web/index.php/pim/viewEmployeeList')
      //cy.get('.--visited > .oxd-topbar-body-nav-tab-item').should('contain', 'Employee List')

      //Action Delete Employee
      cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force: true})
      
      //Validation : Show Button Delete Selected
      cy.get('.orangehrm-horizontal-padding > div > .oxd-button').should('contain', 'Delete Selected')        
      cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click({force: true})

      //Validation : Show Pop-Up Confirmation
      cy.get('.orangehrm-modal-header > .oxd-text').should('contain', 'Are you Sure')

      //Continue Action Delete Data Employee
      cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click({force: true})

      //Expected : Berhasil Hapus Data Employee | Show Notification : Successfully Deleted
      cy.get('.oxd-text--toast-title').should('contain', 'Success')
      cy.get('.oxd-text--toast-message').should('contain', 'Successfully Deleted')
      
    
    })

  })

  // Test Case 4 Delete Employee
  
  describe('TC-PIMDEL-05 : Test Direct Delete Using Delete Button', () => {
    
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      
      //Expected : Masuk Ke Dasboard Admin
      cy.url().should('include', '/web/index.php/dashboard/index')
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain','Dashboard')
    })
    
    it('Test Direct Delete Delete Employee ', () => {  
      //Click Menu PIM  
      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
  
      //Expected : Navigate to Page List Employee
      cy.url().should('include', '/web/index.php/pim/viewEmployeeList')
      //cy.get('.--visited > .oxd-topbar-body-nav-tab-item').should('contain', 'Employee List')

      //Action Delete Employee
      cy.get(':nth-child(2) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click({force: true})
            
      //Validation : Show Pop-Up Confirmation
      cy.get('.orangehrm-modal-header > .oxd-text').should('contain', 'Are you Sure')

      //Continue Action Delete Data Employee
      cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click({force: true})

      //Expected : Berhasil Hapus Data Employee | Show Notification : Successfully Deleted
      cy.get('.oxd-text--toast-title').should('contain', 'Success')
      cy.get('.oxd-text--toast-message').should('contain', 'Successfully Deleted')
      
    
    })

  })