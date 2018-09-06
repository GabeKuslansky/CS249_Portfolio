import config from 'config';
import fs from 'fs';
import util from 'util';
import { Router } from 'express';
import { fetchHomework, fetchAllHomeworks } from './index';

const dir = config.get('directory');
const readFile = util.promisify(fs.readFile);

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

export const routing = router;