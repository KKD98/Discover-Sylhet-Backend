var router = require('express-promise-router')();
const placeController = require("../Controller/placesController")
const imageController = require("../Controller/image")

router.route('/createPlace')
    .post(placeController.addPlaces)
router.route('/editPlace')
    .post(placeController.editplace)
router.route('/editstatus')
    .post(placeController.statusplace)
router.route('/users')
    .get(placeController.allPlace)
router.route('/allplaces')
    .get(placeController.allPlace)
router.route('/imageUpload')
    .post(imageController.imageUpload)



module.exports =router
