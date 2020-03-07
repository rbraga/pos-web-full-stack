const fs = require('fs');

// fs.writeFileSync('arquivo.txt', 'conteúdo a ser gravado');
fs.appendFileSync('arquivo.txt', '\nNovo conteúdo');