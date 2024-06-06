const db = require('../config/config');
const Usuario = {};

Usuario.login = (user, result) => {
    const sql = `
    SELECT 
	    idUsuario, nombreUsuario
    FROM 
	    Usuarios
    WHERE
	    correoUsuario = ? AND claveUsuario = ?;
    `
    ;
    db.query(
        sql,
        [
            user.correoUsuario,
            user.claveUsuario,
        ],
        (err, res) => {
            if(err) {
                console.log('error: ', err);
                result(err, null);
            }
            else{
                console.log('Usuario encontrado: ', res);
                result(null, res, {message: 'Inicio de sesión exitoso'});
            }
        }
    )
};

module.exports = Usuario;