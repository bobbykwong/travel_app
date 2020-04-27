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


    // Home page
    const homePage = require('./controllers/home')(allModels);

    app.get('/', homePage.homePage);
};