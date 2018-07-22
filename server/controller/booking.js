const router = require('express').Router();
const bookingDAL = require('./../dal/booking');

let booking = new bookingDAL();

/**
  curl -X POST \
  http://localhost:3000/api/booking \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: a7e347bb-2fb8-c247-1a87-13ae8654bab2' \
  -d '{
	"RoomId":"2",
	"UserId":"2",
	"BookingFrom":"2018-07-20",
	"BookingTo":"2018-07-24"
}'
 */
router.post('/', (req, res) => {
    let bodyJson = req.body;

    booking.makeBooking(bodyJson).then(data => {
        res.json({ status: 200, data: data })
    }).catch(err => {
        res.json({ status: 500, error: err });
    });
});

module.exports = router;