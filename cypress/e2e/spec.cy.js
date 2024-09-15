var CAMPO_CPF = '#mat-input-1';


describe('Suíte de testes do Integrado.', ()=>{
  it('Deve validar campos àrea do candidato e Inscreva-se.', ()=>{
    cy.visit('https://grupointegrado.br')
    cy.title().should('eq','Início | Centro Universitário Integrado' )
    cy.contains('Área do candidato').should('exist');
    cy.contains('Inscreva-se').should('exist')
  })

  it('Deve clicar na opção area do candiadto e validar a url', ()=>{
    cy.visit('https://grupointegrado.br')
    cy.title().should('eq','Início | Centro Universitário Integrado' )
    //INTERAGINDIO COM ELEMENTOS CLICK
    cy.contains('Área do candidato').should('exist').first().click();

    // VALIDANDO URL
    cy.url().should('eq','https://www.grupointegrado.br/#area-candidato')

  })

  it.only('Deve acessar a opção de graduação e informar CPF,DATA DE NASCIMENTO',()=>{
    cy.visit('https://portal.apprbs.com.br/ceigraduacao/login')
    cy.get('#mat-input-0').type('000-000-00.00');
    cy.get('#mat-input-1').type('13/07/2005')
    cy.contains('Acessar').should('exist').first().click()

    //validar mensagens de erro
    cy.get('.ps-notification-title').should('have.text','Não foi possivel fazer o login')
  })
})













describe('Suítes de testes magebit',()=>{
  it('Deve cessar a página Magebit',()=>{
    cy.visit('http://magento2-demo.magebit.com')
    cy.title().should('eq','Magento 2 Commerce (Enterprise) Demo - Magebit')
  })

  it.only('Deve acessar a página de cadastro e cadastrar',()=>{
    cy.visit('https://magento2-demo.magebit.com/customer/account/create/')
    cy.get('#firstname').type('juquinha')
    cy.get('#lastname').type('silva')
    cy.contains('Sign Up for Newsletter').should('exist').first().click()
    cy.get('#email_address').type('juquinha157@gmail.com')
    cy.get('#password').type('Juquinha@157')
    cy.get('#password-confirmation').type('Juquinha@157')
    cy.contains('Create an Account').should('exist').click()
  })
})



