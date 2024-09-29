const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { translate } = require('./parser.js');

function readAndProcessFilesInDirectory(directory) {
    // Baca semua file dalam direktori
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error("Error reading directory:", err);
            return;
        }

        // Filter hanya file .bs
        const bsFiles = files.filter(file => path.extname(file) === '.bs');

        // Proses setiap file .bs
        bsFiles.forEach(file => {
            const filePath = path.join(directory, file);

            // Baca isi file
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.error(`Error reading file ${file}:`, err);
                    return;
                }

                // Konversi "print" menjadi "console.log"
                let processedData = translate(code);

                // Eksekusi kode yang telah diproses menggunakan vm
                try {
                    const script = new vm.Script(processedData);
                    script.runInThisContext();
                } catch (err) {
                    console.error(`Error executing file ${file}:`, err);
                }
            });
        });
    });
}

// Panggil fungsi ini dengan direktori yang berisi file .bs
readAndProcessFilesInDirectory('./src');

// Ekspor fungsi jika dibutuhkan untuk digunakan di file lain
module.exports = { readAndProcessFilesInDirectory };