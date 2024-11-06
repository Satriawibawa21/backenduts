const express = require('express');
const router = express.Router();
const mahasiswaController = require('../controllers/mahasiswaControllers');

router.get('/mahasiswa', mahasiswaController.getAllMahasiswa);
router.post('/mahasiswa', mahasiswaController.createMahasiswa);
router.put('/mahasiswa/:npm', mahasiswaController.updateMahasiswa);
router.delete('/mahasiswa/:npm', mahasiswaController.deleteMahasiswa);

module.exports = router;