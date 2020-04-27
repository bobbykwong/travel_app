module.exports = (app, allModels) => {

    // *  =========================================
    // *  =========================================
    // *  =========================================
    // *  =========================================
    // *    ALL ROUTES FOR Travel App
    // *  =========================================
    // *  =========================================
    // *  =========================================


    // Login page
    const loginPage = require('./controllers/login')(allModels);

    app.get('/login', loginPage.loginPage);

    app.get('/authenticating', loginPage.login);

    // Registration page
    const registrationPage = require('./controllers/registration')(allModels);

    app.get('/registration', registrationPage.registrationPage);

    app.post('/registration', registrationPage.register);

    // Home page
    const homePage = require('./controllers/home')(allModels);

    app.get('/', homePage.homePage);
};