const router = require('express').Router();
const roomDal = require('./../dal/room');

let room = new roomDal();

/**
  curl -X POST \
  http://localhost:3000/api/room \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 323d67da-73be-e22b-a890-65db621e7c93' \
  -d '{
	"RoomTypeId":1,
	"HotelId":2,
	"FloorNo":11,
	"RoomNo":1104
}'
 */
router.post('/', (req, res) => {
    let bodyJson = req.body;

    room.createRoom(bodyJson).then(data => {
        res.json({ status: 200, data: data });
    }).catch(err => {
        res.json({ status: 500, error: err });
    });
});

/**
  curl -X GET \
  'http://localhost:3000/api/room/available?date_from=2018-07-21&date_to=2018-07-26' \
  -H 'cache-control: no-cache' \
  -H 'postman-token: 5ea2316b-fc27-8c0a-e1a8-f2c13c0cea1d'
 */
router.get('/available', (req, res) => {
    let queryString = req.query;

    room.getAvailableRoom(queryString).then(data => {
        res.json({ status: 200, data: data });
    }).catch(err => {
        res.json({ status: 500, error: err });
    });
});

module.exports = router;