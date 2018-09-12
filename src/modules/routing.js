import config from 'config';
import fs from 'fs';
import util from 'util';
import { Router } from 'express';
import multer from 'multer';
import { fetchHomework, fetchAllHomeworks } from './index';

const dir = config.get('directory');
const readFile = util.promisify(fs.readFile);
const readdir = util.promisify(fs.readdir);
const upload = multer().array('file');

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

router.post(`${dir}/upload`, upload, async (req, res) => {
    try {
        const directories = await fetchAllHomeworks();
        const assignmentName = `assignment${directories.length + 1}`;
        fs.mkdirSync(`homeworks/${assignmentName}`);
        req.files.forEach(file => {
            fs.writeFileSync(`homeworks/${assignmentName}/${file.originalname}`, file.buffer);
        });
        res.redirect(dir);
    } catch (e) {
        throw e;
    }
});

router.get(`${dir}/viewHomework/:assignment/:file`, (req, res) => {
    const { assignment, file } = req.params;
    const homeworkPath = `homeworks/${assignment}/${file}`;
    res.sendFile(homeworkPath)
});

export const routing = router;