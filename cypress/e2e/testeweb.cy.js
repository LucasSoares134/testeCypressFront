describe('Testes de validação do formulário de cadastro', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html');
  });

  it('Exibe todos os campos do formulário', () => {
    cy.get('input#name').should('exist');
    cy.get('input#email').should('exist');
    cy.get('input#password').should('exist');
    cy.get('input#confirmPassword').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('Exibe mensagem de erro quando o campo de nome está vazio', () => {
    cy.get('input#name').clear();
    cy.get('form').submit();
    cy.get('#message').should('contain', 'Por favor, corrija os campos em vermelho. Estão inválidos!');
  });

  it('Exibe mensagem de erro quando o campo de e-mail está vazio', () => {
    cy.get('input#email').clear();
    cy.get('form').submit();
    cy.get('#message').should('contain', 'Por favor, corrija os campos em vermelho. Estão inválidos!');
  });

  it('Exibe mensagem de erro quando um e-mail inválido é inserido', () => {
    cy.get('input#email').clear().type('emailinvalido');
    cy.get('form').submit();
    cy.get('#message').should('contain', 'Por favor, corrija os campos em vermelho. Estão inválidos!');
  });

  it('Exibe mensagem de erro quando o campo de senha está vazio', () => {
    cy.get('input#password').clear();
    cy.get('form').submit();
    cy.get('#message').should('contain', 'Por favor, corrija os campos em vermelho. Estão inválidos!');
  });

  it('Exibe mensagem de erro quando o campo de confirmação de senha está vazio', () => {
    cy.get('input#confirmPassword').clear();
    cy.get('form').submit();
    cy.get('#message').should('contain', 'Por favor, corrija os campos em vermelho. Estão inválidos!');
  });

  it('Exibe mensagem de erro quando as senhas não coincidem', () => {
    cy.get('input#password').clear().type('senha123');
    cy.get('input#confirmPassword').clear().type('senha456');
    cy.get('form').submit();
    cy.get('#message').should('contain', 'Por favor, corrija os campos em vermelho. Estão inválidos!');
  });

  it('Submissão bem-sucedida com todos os campos preenchidos corretamente', () => {
    cy.get('input#name').type('Fulano');
    cy.get('input#email').type('fulano@gmail.com.br');
    cy.get('input#password').type('senha123');
    cy.get('input#confirmPassword').type('senha123');
    cy.get('form').submit();
    cy.get('#message').should('contain', 'Cadastro realizado com sucesso!').and('have.css', 'color', 'rgb(0, 128, 0)');
  });

  it('Exibe mensagem de erro quando todos os campos estão vazios', () => {
    cy.get('form').submit();
    cy.get('#message').should('contain', 'Por favor, corrija os campos em vermelho. Estão inválidos!');
  });

  it('Exibe mensagem de erro quando um e-mail inválido é inserido', () => {
    cy.get('input#email').clear().type('emailinvalido');
    cy.get('form').submit();
    cy.get('#message').should('contain', 'Por favor, corrija os campos em vermelho. Estão inválidos!');
  });

  it('Exibe mensagem de erro quando as senhas não coincidem', () => {
    cy.get('input#password').clear().type('senha123');
    cy.get('input#confirmPassword').clear().type('senha456');
    cy.get('form').submit();
    cy.get('#message').should('contain', 'Por favor, corrija os campos em vermelho. Estão inválidos!');
  });
});
