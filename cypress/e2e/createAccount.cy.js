describe('Suíte de testes E2E Magento: create account', () => {
    it('Deve cessar a página Magebit', () => {
        cy.visit('http://magento2-demo.magebit.com')
        cy.title().should('eq', 'Magento 2 Commerce (Enterprise) Demo - Magebit')
        cy.contains('Create an Account').first().click()

    })

    it('Deve acessar a página de cadastro e cadastrar', () => {
        cy.visit('https://magento2-demo.magebit.com/customer/account/create/')
        cy.contains('Create New Customer Account').should('exist');
        cy.url().should('eq', 'https://magento2-demo.magebit.com/customer/account/create/')
        cy.get('#firstname').type('juquinha')
        cy.get('#lastname').type('silva')
        cy.contains('Sign Up for Newsletter').should('exist').first().click()
        cy.get('#email_address').type('juquinha157@gmail.com')
        cy.get('#password').type('Juquinha@157')
        cy.get('#password-confirmation').type('Juquinha@157')

        // submit forms
        cy.get('button[title="Create an Account"]').click()

        //APRESENTAR MENSAGEM SUCESSO
        cy.get('.message-succ ess').should('contain', 'Thank you for registering with Main Website Store')
    })
})

