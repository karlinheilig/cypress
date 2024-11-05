describe('pokemonbattle_avatar', function () {    
    it('e2e_Avatar_buying', function () {   
        cy.visit('https://pokemonbattle.ru/login');
        cy.get(':nth-child(1) > .auth__input').type('USERNAME',{force: true});
        cy.get('#password').type('PASSWORD',{force:true});
        cy.get('.auth__button').click({force: true});
        cy.wait(5000);
        cy.get('.header__container > .header__id').click({ force: true }); 
        cy.get('[href="/shop"]').click();                              
        cy.get('.available > button').first().click({ force: true });
        cy.get('.credit').type('4620869113632996');
        cy.get('.k_input_ccv').type('125');
        cy.get('.k_input_date').type('1225');
        cy.get('.k_input_name').type('NAME');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.contains('Покупка прошла успешно').should('be.visible');
    });
});
