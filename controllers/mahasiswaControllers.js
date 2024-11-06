const db = require('../config/firebase');
const { ref, set, get, update, remove, push } = require('firebase/database');

// Create - Menambah data mahasiswa baru
const createMahasiswa = async (npm, nama, kelas) => {
    try {
        const mahasiswaRef = ref(db, 'mahasiswa/' + npm);
        await set(mahasiswaRef, {
            npm: npm,
            nama: nama,
            kelas: kelas
        });
        return { success: true, message: 'Data mahasiswa berhasil ditambahkan' };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

// Read - Mengambil semua data mahasiswa
const getAllMahasiswa = async () => {
    try {
        const mahasiswaRef = ref(db, 'mahasiswa');
        const snapshot = await get(mahasiswaRef);
        if (snapshot.exists()) {
            return { success: true, data: snapshot.val() };
        } else {
            return { success: true, data: null, message: 'Tidak ada data mahasiswa' };
        }
    } catch (error) {
        return { success: false, message: error.message };
    }
};

// Read - Mengambil data mahasiswa berdasarkan NPM
const getMahasiswaByNPM = async (npm) => {
    try {
        const mahasiswaRef = ref(db, 'mahasiswa/' + npm);
        const snapshot = await get(mahasiswaRef);
        if (snapshot.exists()) {
            return { success: true, data: snapshot.val() };
        } else {
            return { success: false, message: 'Mahasiswa tidak ditemukan' };
        }
    } catch (error) {
        return { success: false, message: error.message };
    }
};

// Update - Mengupdate data mahasiswa
const updateMahasiswa = async (npm, updateData) => {
    try {
        const mahasiswaRef = ref(db, 'mahasiswa/' + npm);
        await update(mahasiswaRef, updateData);
        return { success: true, message: 'Data mahasiswa berhasil diupdate' };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

// Delete - Menghapus data mahasiswa
const deleteMahasiswa = async (npm) => {
    try {
        const mahasiswaRef = ref(db, 'mahasiswa/' + npm);
        await remove(mahasiswaRef);
        return { success: true, message: 'Data mahasiswa berhasil dihapus' };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

module.exports = {
    createMahasiswa,
    getAllMahasiswa,
    getMahasiswaByNPM,
    updateMahasiswa,
    deleteMahasiswa
}; 