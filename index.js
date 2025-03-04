import fs from 'fs';
import readlineSync from 'readline-sync';
import chalk from 'chalk';
import boxen from 'boxen';
import Table from 'cli-table3';

const dataFile = 'books.json';

function loadBooks() {
    if (!fs.existsSync(dataFile)) fs.writeFileSync(dataFile, '[]', 'utf-8');
    return JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
}

function saveBooks(books) {
    fs.writeFileSync(dataFile, JSON.stringify(books, null, 2), 'utf-8');
}

function listBooks() {
    const books = loadBooks();
    if (books.length === 0) {
        console.log(chalk.yellow('Tidak ada buku dalam perpustakaan.'));
        return;
    }
    const table = new Table({ head: [chalk.cyan('No'), chalk.cyan('Judul'), chalk.cyan('Penulis'), chalk.cyan('Tahun')], colWidths: [5, 30, 25, 10] });
    books.forEach((book, index) => table.push([index + 1, book.title, book.author, book.year]));
    console.log(table.toString());
}

function addBook() {
    const title = readlineSync.question(chalk.green('Masukkan judul buku: '));
    const author = readlineSync.question(chalk.green('Masukkan nama penulis: '));
    const year = readlineSync.question(chalk.green('Masukkan tahun terbit: '));
    const books = loadBooks();
    books.push({ title, author, year });
    saveBooks(books);
    console.log(chalk.blue('Buku berhasil ditambahkan!'));
}

function searchBook() {
    const query = readlineSync.question(chalk.green('Masukkan judul buku yang dicari: '));
    const books = loadBooks();
    const results = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
    if (results.length > 0) {
        console.log(chalk.blue('\nHasil Pencarian:'));
        results.forEach((book, index) => console.log(`${index + 1}. ${book.title} - ${book.author} (${book.year})`));
    } else {
        console.log(chalk.red('Buku tidak ditemukan!'));
    }
}

function deleteBook() {
    listBooks();
    const num = readlineSync.questionInt(chalk.green('Masukkan nomor buku yang ingin dihapus: ')) - 1;
    const books = loadBooks();
    if (num >= 0 && num < books.length) {
        console.log(chalk.red(Menghapus buku: ${books[num].title}));
        books.splice(num, 1);
        saveBooks(books);
    } else {
        console.log(chalk.red('Nomor buku tidak valid!'));
    }
}

function updateBook() {
    listBooks();
    const num = readlineSync.questionInt(chalk.green('Masukkan nomor buku yang ingin diupdate: ')) - 1;
    const books = loadBooks();
    if (num >= 0 && num < books.length) {
        const book = books[num];
        book.title = readlineSync.question(chalk.green(`Judul (${book.title}): `)) || book.title;
        book.author = readlineSync.question(chalk.green(`Penulis (${book.author}): `)) || book.author;
        book.year = readlineSync.question(chalk.green(`Tahun (${book.year}): `)) || book.year;
        saveBooks(books);
        console.log(chalk.blue('Buku berhasil diperbarui!'));
    } else {
        console.log(chalk.red('Nomor buku tidak valid!'));
    }
}

function showNewestBook() {
    const books = loadBooks().sort((a, b) => b.year - a.year);
    console.log(chalk.green(Buku terbaru: ${books[0].title} (${books[0].year}) oleh ${books[0].author}));
}

function showOldestBook() {
    const books = loadBooks().sort((a, b) => a.year - b.year);
    console.log(chalk.green(Buku tertua: ${books[0].title} (${books[0].year}) oleh ${books[0].author}));
}

function countBooks() {
    console.log(chalk.green(Total jumlah buku dalam perpustakaan: ${loadBooks().length}));
}

function recommendBook() {
    const books = loadBooks();
    if (books.length > 0) {
        const book = books[Math.floor(Math.random() * books.length)];
        console.log(chalk.green(Rekomendasi buku: ${book.title} (${book.year}) oleh ${book.author}));
    } else {
        console.log(chalk.yellow('Tidak ada buku untuk direkomendasikan.'));
    }
}
