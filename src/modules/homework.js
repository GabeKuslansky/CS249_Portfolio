import fs from 'fs';
import util from 'util';
import { url } from 'inspector';
const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);

export async function fetchAllHomeworks() {
    const baseHomeworks = await readdir('./homeworks');
    const formattedHomeworks = [];
    for (const dir of baseHomeworks) {
        const files = await readdir(`./homeworks/${dir}`);
        const homeworks = [];
        files.forEach(x => {
            const homeworkObject = {
                filename: x,
                downloadLink: `./CS249/downloadHomework/${dir}/${x}`,
                viewLink: `../homeworks/${dir}/${x}`
            };
            homeworks.push(homeworkObject);
        });
        formattedHomeworks.push(homeworks);
    }
    return formattedHomeworks;
}
