let db = require("../database/models");
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const Op=db.Sequelize.Op

const usersController = {
    'create': async (req, res)=>{
        db.Country.findAll()
        .then((country)=>{
            res.render('./users/register',{country})
        })
        // res.render('./users/register', {
        //     country: await db.Country.findAll()
        // })
    },

    'store':async (req, res)=>{
        await db.User.create({
            fullName: req.body.name,
            userName: req.body.user,
            email: req.body.email,
            adress: req.body.address,
            phoneNumber: req.body.tel,
            password: bcrypt.hashSync(req.body.pass, 10),
            birthdayDate: req.body.birth_date,
            image: req.file?.filename || 'imagen.png',
            countries_id: req.body.country
        });
        res.redirect("/")


        // let country = await db.Country.findAll()
        // .then(country => {
        //     data = JSON.parse(JSON.stringify(country));
        //     return data;
        // })
        // const resultValidation = validationResult(req);
        // // return res.send(resultValidation);
        // // if (resultValidation.errors.length > 0) {
        // //     return res.render('./users/register', {
        // //         errors : resultValidation.mapped(),
        // //         country
        // //     });
        // // }
        // if (!resultValidation.isEmpty()){
        //     return res.render('./users/register', {
        //         country,
        //         errors : resultValidation.mapped(),
        //         oldData: req.body
        //     });

        //     // return res.send(resultValidation);

        //     // return res.send({
        //     //     body: req.body,
        //     //     file: req.file
        //     // });
        // }else{
        //     // db.User.findOne(
        //     //     {
        //     //         where: {
        //     //             email: req.body.email
        //     //         }
        //     //     }
        //     // )
        //     // .then(user => {
        //     //     let emailInDB = JSON.parse(JSON.stringify(user));
    
        //     //     if(emailInDB) {
        //     //         return res.render('./users/register', {
        //     //             country,
        //     //             errors: {
        //     //                 email: {
        //     //                     msg: 'El email ingresado ya se encuentra registrado'
        //     //                 }
        //     //             },
        //     //             oldData: req.body
        //     //         });
        //     //     }
    
        //     //     db.User.create(
        //     //         {
        //     //             fullName: req.body.name,
        //     //             userName: req.body.user,
        //     //             email: req.body.email,
        //     //             adress: req.body.address,
        //     //             phoneNumber: req.body.tel,
        //     //             password: bcrypt.hashSync(req.body.pass, 10),
        //     //             birthdayDate: req.body.birth_date,
        //     //             image: req.file?.filename || 'imagen.png',
        //     //             countries_id: req.body.country
        //     //         }
        //     //     )
        //     //     .then(()=> {
        //     //         return res.redirect('/')})
        //     //     .catch(error => res.send(error))
        //     // })
        //     await db.User.create({
        //         fullName: req.body.name,
        //         userName: req.body.user,
        //         email: req.body.email,
        //         adress: req.body.address,
        //         phoneNumber: req.body.tel,
        //         password: bcrypt.hashSync(req.body.pass, 10),
        //         birthdayDate: req.body.birth_date,
        //         image: req.file?.filename || 'imagen.png',
        //         countries_id: req.body.country
        //     });
        //     res.redirect("/")
        // }
    },

    'login': (req, res) =>{
        res.render('./users/login');
    },

    'loginProcess': async (req, res) => {
        await db.User.findOne(
            {
                where: {
                    email: req.body.email
                }
            }
        )
        .then(user => {
            let usuarioJson = JSON.parse(JSON.stringify(user))

            userToLogin = usuarioJson;
        
            if(userToLogin) {
                // return res.send(userToLogin);
                let passwordValidate = bcrypt.compareSync(req.body.password, userToLogin.password);
                    if(passwordValidate) {
                        // Guarda todos los datos del usuario en una variable de session
                        // primero quitar el atributo password del objeto
                        delete userToLogin.password;
                        req.session.userLogged = userToLogin;
                        return res.redirect('/users/profile');
                    }
                    return res.redirect("/users/login")
                    // return res.send('Contraseña Inconrrecta');
            }
            return res.redirect("/users/login")
            // return res.send('No se encuentra un usuario con el email ingresado');
        })
    },

    'profile': (req, res) =>{
        res.render('./users/profile', {
            user: req.session.userLogged
        });
    },

    'logout': (req, res) =>{
        req.session.destroy();
        return res.redirect('/');
    },

    'edit': async(req, res)=>{
        const user= await db.User.findByPk(req.params.id);
        res.render('./users/editUser',{
            user,
            country: await db.Country.findAll()
        })
    },

    'update':async (req, res)=>{
        const user= await db.User.findByPk(req.params.id);
        await user.update({
            fullName: req.body.name,
            userName: req.body.user,
            email: req.body.email,
            adress: req.body.addres,
            phoneNumber: req.body.tel,
            birthdayDate: req.body.birth_date,
            image: req.file?.filename || user.image,
            countries_id: req.body.country
        });
        await user.save()
        res.redirect("/admin/listusers")
    },

    'delete' : async (req, res) => {
        const user = await db.User.findByPk(req.params.id);
        await db.User.destroy({where: {id:user.id},force: true})
        await res.redirect("/admin/listusers")
    },

    // edit: function(req, res){
    //     let idUser = req.params.idUSer
    //     let userToEdit = userDataBase[idUser];
    //     res.render('/userEdit', userToEdit)
    // },
    // TODO: crear metodo para hacer el proceso de login//
}
module.exports = usersController;