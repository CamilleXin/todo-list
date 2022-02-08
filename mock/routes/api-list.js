var express = require('express');
var main = require('../main.js');
var router = express.Router();

// get data
router.get('/', (req, res) => {
    res.json(main.getAllList());
});

router.post('/', (req, res) => {
    var data = req.body;
    main.insertData(data);
    res.status(200).json({
        status: 'SUCCESS'
    });
});

router.put('/', (req, res) => {
    var data = req.body;
    main.updateData(data);
    res.status(200).json({
        status: 'SUCCESS'
    });
});

router.delete('/:id', (req, res) => {
    main.deleteData(req.params.id);
    res.status(200).json({
        status: 'SUCCESS'
    });
});

module.exports = router;