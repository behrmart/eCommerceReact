describe('Funcionalidad de login', () => {
  it('Mi app carga leyendo Home en /', () => {
    // 1. Arrange:setup del estado de mi app 
    cy.visit('/')
    // 2. Act: interactuar con la app
    cy.get('h1').contains('Home')
    // 3. Accept: espero un resultado
  })
  it('Probar Login como CUSTOMER', () => {
    // 1. Arrange:setup del estado de mi app 
    cy.visit('/login')
    // 2. Act: interactuar con la app
    // cy.get('input[name="email"]').type('drstrange@marvel.com')
    // cy.get('input[name="password"]').type('multiverso')
    // cy.get('button[type="submit"]').click()
    cy.toLogin('drstrange@marvel.com', 'multiverso')
    cy.get('h1').contains('Home')
    // 3. Accept: espero un resultado
  })
  it('Probar Login como ADMIN', () => {
    // Interceptro lo uso para saber cuando una llmada a la API es resulta
    //puedo esperarl en otro momento con AWAIT ('@login')
    cy.intercept('POST', 'http://ecommerce-json-jwt.onrender.com/login').as('login') // sobrenombre
    // 1. Arrange:setup del estado de mi app 
    cy.visit('/login')
    // 2. Act: interactuar con la app
    // cy.get('input[name="email"]').type('superman@dc.com')
    // cy.get('input[name="password"]').type('superman')
    // cy.get('button[type="submit"]').click()
    cy.toLogin('superman@dc.com', 'superman')

    cy.wait('@login')
    cy.get('h1').contains('Home')
    // 3. Accept: espero un resultado

    // Si el tiempo de respuesta es mayor a los 4000ms error, para esto Cypress tiene "interceptor"
  })
})