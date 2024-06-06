const Usuario = require('../model/usuario');
module.exports = {  
    login(req, res) {
        const user = req.body;
        Usuario.login(user, (err, data) => {
            if(err) {
                res.status(501).json({
                    success: false,
                    message: 'Error al iniciar sesión',
                    error: err
                });
            }
            return res.status(200).json({
                success: true,
                message: res.message,
                data: data //Datos del usuario
            });
        });
    },
}
