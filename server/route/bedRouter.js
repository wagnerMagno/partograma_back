const express = require('express');
const router = express.Router();
const bedService = require('../service/bedService');

router.get('/bed/:id', async function (req, res, next) {
	try {
		const bed = await bedService.getById(req.params.id);
		res.json(bed);
	} catch (e) {
		next(e);
	}
});

router.post('/bed', async function (req, res, next) {
	try {
		const bed = req.body;
		const bedCriated = await bedService.createBed(bed);
		res.json(bedCriated);
	} catch (e) {
		next(e);
	}
});

router.put('/udate', async function (req, res, next) {
	try {
		const bed = req.body;
		const bedCriated = await bedService.udate(bed);
		res.json(bedCriated);
	} catch (e) {
		next(e);
	}
});

router.post('/bed/partograma', async function (req, res, next) {
	try {
		const obj = req.body;
		const objCriated = await bedService.insertPartograma(obj);
		res.json(objCriated);
	} catch (e) {
		next(e);
	}
});

router.get('/bed/partograma/:idBed', async function (req, res, next) {
	try {
		const list = await bedService.getPartogramaByIdBed(req.params.idBed);
		res.json(list);
	} catch (e) {
		next(e);
	}
});


module.exports = router;
