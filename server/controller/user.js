const router = require('express').Router();
const userDAL = require('./../dal/user');
let user = new userDAL();


/**
  curl -X POST \
  http://localhost:3000/api/user \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: cc918e8c-3bc6-dee1-01aa-b3e91a5dc886' \
  -d '{
	"UserName":"Sadhana Upadhyay",
	"UserAddress":"Kalyan east",
	"StateId":1,
	"CityId":1,
	"DocumentType":2,
	"DocumentId":"ACHPU7196C"
}'
 */
router.post('/', (req, res) => {
    let bodyJson = req.body;

    user.createUser(bodyJson).then(data => {
        res.json({ status: 200, data: data });
    }).catch(err => {
        res.json({ status: 500, error: err });
    })
})

/**
  curl -X PUT \
  http://localhost:3000/api/user \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: a76ea46b-455b-175f-e051-592017968ac6' \
  -d '{
	"id":1,
	"UserName":"Sadhana balwant Upadhyay",
	"UserAddress":"Kalyan east",
	"StateId":1,
	"CityId":1,
	"DocumentType":2,
	"DocumentId":"ACHPU7196C"
}'
 */
router.put('/', (req, res) => {
    let bodyJson = req.body;

    user.updateUser(bodyJson).then(data => {
        res.json({ status: 200, data: data });
    }).catch(err => {
        res.json({ status: 500, error: err });
    })
})


/**
  curl -X DELETE \
  http://localhost:3000/api/user/1 \
  -H 'cache-control: no-cache' \
  -H 'postman-token: b8adf728-ee1f-f65d-c407-1d3f2f95b508'
 */
router.delete('/:id', (req, res) => {
    let id = req.params.id

    user.deleteUser(id).then(data => {
        res.json({ status: 200, data: data });
    }).catch(err => {
        res.json({ status: 500, error: err });
    })
})

module.exports = router;