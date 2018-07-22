const promise = require('promise');


module.exports = class room {
    createRoom(obj) {
        return new promise((resolve, reject) => {
            connection.query('INSERT INTO Room SET ? ', obj, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results);
            });
        });
    }

    getAvailableRoom(obj) {
        return new promise((resolve, reject) => {
            connection.query(`call GetAvailableRoom(?,?);`, [obj.date_from, obj.date_to], (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results[0]);
            })
        })
    }
}