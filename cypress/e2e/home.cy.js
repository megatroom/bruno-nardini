describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should render titles', () => {
    cy.get('h1').first().should('have.text', "Nardini's Blog");
    cy.get('h1').eq(1).should('have.text', 'Publicações no Medium');
  });

  it('should render Nardini Academy section', () => {
    cy.get('#section-nardini-academy h2').should(
      'have.text',
      'React Profissional'
    );
  });
});
