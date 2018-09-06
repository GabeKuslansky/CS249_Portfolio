import fs from 'fs';
import util from 'util';
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
                link: `../api/downloadHomework/${dir}/${x}`
            };
            homeworks.push(homeworkObject);
        });
        formattedHomeworks.push(homeworks);
    }
    return formattedHomeworks;
}
