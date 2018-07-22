const promise = require('promise');

module.exports = class user {
    createUser(obj) {
        return new promise((resolve, reject) => {
            connection.query('INSERT INTO Users SET ? ', obj, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results);
            });
        });
    }

    updateUser(obj) {
        return new promise((resolve, reject) => {
            connection.query(`UPDATE users SET UserName='${obj.UserName}',UserAddress='${obj.UserAddress}',
            StateId=${obj.StateId},CityId=${obj.CityId},DocumentType=${obj.DocumentType},DocumentId = '${obj.DocumentId}'
            where userid = ${obj.id}
            `, obj, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results);
            });
        });
    }

    deleteUser(id) {
        return new promise((resolve, reject) => {
            connection.query(`Update Users SET IsActive = 0 where UserId = ${id}`, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results);
            });
        });
    }
}