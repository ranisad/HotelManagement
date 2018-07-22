const router = require('express').Router();
const HotelDAL = require('./../dal/hotel');

let hotel = new HotelDAL();

/**
  curl -X GET \
  http://localhost:3000/api/hotel \
  -H 'cache-control: no-cache' \
  -H 'postman-token: dae76d01-6bb1-b447-7110-8d44df27388e'
 */
router.get('/', (requestA, response) => {
    hotel.getHotel().then(data => {
        response.json({ status: 200, data: data });
    }).catch(err => {
        response.json({ status: 500, error: err });
    });
});

/**
  curl -X POST \
  http://localhost:3000/api/hotel \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: b816b07d-5a92-eeaa-c1c7-63750bfbc83f' \
  -d '{
	"Name":"Sun Sea",
	"CityId":1,
	"StateId":1,
	"Address":"3162,hwllo dshjd",
	"CountryId":1,
	"Rating":3,
	"HotelDesc":"647 gsdh dshajkd"
}'
 */
router.post('/', (req, res) => {
    let bodyJson = req.body;

    hotel.createHotel(bodyJson).then(data => {
        res.json({ status: 200, data: data });
    }).catch(err => {
        res.json({ status: 500, error: err });
    });
});


/**
  curl -X PUT \
  http://localhost:3000/api/hotel \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ed790241-503f-ced6-b6ab-2e7066cc2ae2' \
  -d '{
	"id":"1",
	"Name":"Sun Sea 1",
	"CityId":1,
	"StateId":1,
	"Address":"3162,hwllo dshjd",
	"CountryId":1,
	"Rating":3,
	"HotelDesc":"647 gsdh dshajkd"
}'
 */
router.put('/', (req, res) => {
    let bodyJson = req.body;

    hotel.updateHotel(bodyJson).then(data => {
        res.json({ status: 200, data: data });
    }).catch(err => {
        res.json({ status: 500, error: err });
    });
});


/**
  curl -X DELETE \
  http://localhost:3000/api/hotel/1
 */
router.delete('/:id', (req, res) => {
    let id = req.params.id;

    hotel.deleteHotel(id).then(data => {
        res.json({ status: 200, data: data });
    }).catch(err => {
        res.json({ status: 500, error: err });
    });
})

module.exports = router;