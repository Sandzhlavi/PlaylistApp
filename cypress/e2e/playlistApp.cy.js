describe('Playlist App Test Suite', () => {

    it('should filter tracks based on search input', () => {
        cy.visit('https://vite-react-alpha-lemon.vercel.app/');

        cy.get('input[type="text"]').type('Summer Breeze');
        cy.contains('Summer Breeze').should('be.visible');
    });

    it('should add the "Rainy Mood" track to the playlist by clicking Add', () => {
        cy.visit('https://vite-react-alpha-lemon.vercel.app/');
        cy.get('input[type="text"]').type('Rainy Mood');

        cy.get('input[type="checkbox"]').check();
        cy.get('button.MuiButtonBase-root.css-4adije').click();

        cy.get('p.MuiTypography-body1')
            .should('contain.text', 'Rainy Mood')

    });

    it('should add multiple tracks using checkboxes and "+" buton', () => {
        cy.visit('https://vite-react-alpha-lemon.vercel.app/');
        cy.get('input[type="text"]').type('A');

        cy.get('input[type="checkbox"]').eq(0).check();
        cy.get('input[type="checkbox"]').eq(1).check();

        cy.get('button').eq(0).click();
        cy.get('button').eq(1).click();

        cy.get('p.MuiTypography-body1')
            .should('contain.text', 'Autumn Leaves')
            .and('contain.text', 'Spring Dance');
    });
});


