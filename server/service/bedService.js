const bedData = require('../data/bedData');



exports.createBed = async function (bedyObj) {
	try {
		const bed = await bedData.createBed(bedyObj);
		
		if (bed) {
			return bed;
		}
	} catch (error) {
		throw new Error(error);
	}
};

exports.getById = async function (id) {
	try {
		return await bedData.getById(id);
	} catch (error) {
		throw new Error(error);
	}
};

exports.updateBed = async function (bed) {
	try {
		return await bedData.updateBed(bed);
	} catch (error) {
		throw new Error(error);
	}
};

exports.close = async function (bed) {
	try {
		return await bedData.close(bed);
	} catch (error) {
		throw new Error(error);
	}
};

exports.insertPartograma = async function (obj) {
	try {
		return await bedData.insertPartograma(obj);
	} catch (error) {
		throw new Error(error);
	}
};

exports.getPartogramaByIdBed = async function (obj) {
	try {
		return await bedData.getPartogramaByIdBed(obj);
	} catch (error) {
		throw new Error(error);
	}
};

