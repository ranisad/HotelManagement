const promise = require('promise');

module.exports = class Booking {
    makeBooking(obj) {
        return new promise((resolve, reject) => {
            connection.query('INSERT into BookingDetail set ?', obj, (error, results, fields) => {
                if (error)
                    reject(error)
                resolve(results);
            })
        })
    }
}