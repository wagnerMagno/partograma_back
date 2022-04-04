const database = require('../infra/database');


exports.createBed = function (bed) {
	return database.oneOrNone(`INSERT INTO public.bed( id_user, name_pacient, number, age, dum, medication, comorbidity, gesta, para, aborto)
	   VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`
		, [bed.id_user, bed.name_pacient, bed.number, bed.age, bed.dum, bed.medication, bed.comorbidity, bed.gesta, bed.para, bed.aborto]);
};

exports.getById = function (id) {
	return database.query(`SELECT * FROM bed INNER JOIN users ON (bed.id_user = users.id)  where bed.id_user = $1 and bed.is_active = $2`, [id, true]);
};


exports.updateBed = function (bed) {
	return database.oneOrNone(`UPDATE bed
	SET amount_baby=$1, bcf1=$2, bcf2=$3, bcf3=$4, du=$5, 
	afu=$6, apag_cervical=$7, presentation1=$8, presentation2=$9, presentation3=$10, 
	pa=$11, hgt=$12, complaint=$13
	WHERE id = $14`
		, [bed.amount_baby, bed.bcf1, bed.bcf2, bed.bcf3, bed.du, bed.afu, bed.apag_cervical, bed.presentation1, bed.presentation2, bed.presentation3, bed.pa, bed.hgt, bed.complaint, bed.id]);
};

exports.close = function (bed) {
	return database.oneOrNone(`UPDATE bed
	SET is_active=false, type_parto=$1, sex_baby=$2, indication=$3
	WHERE id = $4`
		, [bed.type_parto, bed.sex_baby, bed.indication, bed.id ]);
};

exports.insertPartograma = function (obj) {
	return database.oneOrNone(`INSERT INTO public.partogram(
		id_bed, dilation, contraction, fcf, start_tay, real_time, registration_time, handbag, la, oxytocin)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
		[obj.id_bed, obj.dilation, obj.contraction, obj.fcf, obj.start_tay, obj.real_time, obj.registration_time, obj.handbag, obj.la, obj.oxytocin])
}

exports.getPartogramaByIdBed = function (id) {
	return database.query(` SELECT * FROM partogram INNER JOIN bed ON (bed.id = partogram.id_bed) 
	where bed.id_user = $1`, [id])
}
