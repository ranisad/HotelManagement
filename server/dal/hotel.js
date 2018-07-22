// const connectionReg = require('./../coreDAL/index').MySqlConnection;
// const connection = connectionReg.getConnection();
const promise = require('promise');

module.exports = class Hotel {
    getHotel() {
        return new promise((resolve, reject) => {
            connection.query('select * from Hotel where IsActive = 1', (err, rows, field) => {
                if (err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    createHotel(obj) {
        return new promise((resolve, reject) => {
            connection.query('INSERT INTO Hotel SET ?', obj, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results);
            });
        });
    }

    updateHotel(obj){
        return new promise((resolve,reject)=>{
            connection.query(`UPDATE Hotel SET Name= '${obj.Name}',CityId=${obj.CityId},StateId=${obj.StateId},Address='${obj.Address}',CountryId=${obj.CountryId},Rating=${obj.Rating},HotelDesc='${obj.HotelDesc}' where id = ${obj.id}`,obj,(error, results, fields)=>{
                if (error)
                    reject(error);
                resolve(results);
            });
        });
    }

    deleteHotel(id){
        return new promise((resolve,reject)=>{
            connection.query(`Update Hotel set isActive = 0 WHERE Id =  ${id}`,(error, results, fields)=>{
                if (error)
                    reject(error);  
                resolve(results);
            });
        });
    }
}

