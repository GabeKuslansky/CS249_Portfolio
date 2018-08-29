const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);

export async function retrieveAllHomeworks() {
    const homeworks = await readdir('./homeworks');
    return homeworks;
}

export async function retrieveHomework(filename) {
 const homework = await readFile(`./homeworks/${filename}`);
 return homework;
}