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
