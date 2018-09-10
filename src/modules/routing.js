import config from 'config';
import fs from 'fs';
import util from 'util';
import { Router } from 'express';
import multer from 'multer';
import { fetchHomework, fetchAllHomeworks } from './index';

const dir = config.get('directory');
const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);
const upload = multer({
    dest: `${dir}/upload`,
});

const router = Router();

router.get(`${dir}/`, async (req, res) => {
    const homeworks = await fetchAllHomeworks();
    res.render('structure', {
        homeworks,
        title: `${homeworks.length} homeworks - CS249 Portfolio`
    });
});

router.get(`${dir}/downloadHomework/:assignment/:file`, (req, res) => {
    const { assignment, file } = req.params;
    const filepath = `./homeworks/${assignment}/${file}`;
    res.download(filepath, file);
});

router.post(`${dir}/upload`, upload.array('file'), async (req, res) => {
    const directories = await fetchAllHomeworks();
    const assignmentName = `assignment${directories.length + 1}`;
    fs.mkdirSync(`homeworks/${assignmentName}`);
    req.files.forEach(file => {
        fs.writeFileSync(`homeworks/${assignmentName}/${file.originalname}`, file);
    });
    res.redirect(dir);
});

export const routing = router;