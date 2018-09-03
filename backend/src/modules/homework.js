import fs from 'fs';
import util from 'util';
const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);

export async function fetchAllHomeworks() {
    console.log('test');
    const homeworks = await readdir('./homeworks');
    console.log(homeworks);
    return homeworks;
}

export async function fetchHomework(filename) {
 const homework = await readFile(`./homeworks/${filename}.txt`);
 return homework;
}