import express from "express";
//
import homeController from "../controllers/homeController"
import usersController from "../controllers/usersController"

let router = express.Router();
let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);

    //API
    router.post('/api/login', usersController.handleLogin);
    router.get('/api/get-all-users', usersController.handleGetAllUsers);
    router.post('/api/create-new-user', usersController.handleCreateNewUsers);
    router.put('/api/edit-user', usersController.handleEditUsers);
    router.delete('/api/delete-user', usersController.handleDeleteUsers);
    router.get('/api/get-allcode', usersController.getAllCode);

    return app.use("/", router);
}
module.exports = initWebRoutes;