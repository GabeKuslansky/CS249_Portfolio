import config from 'config';
import { fetchHomework, fetchAllHomeworks } from './index';
import { Router } from 'express';
const dir = config.get('directory');

const router = Router();

router.get(`${dir}/`, async(req, res) => {
    const homeworks = await fetchAllHomeworks();
    res.render('structure', {
        homeworks,
        title: `${homeworks.length} homeworks - CS249 Portfolio`
    });
});

router.get(`/api/downloadHomework/:assignment/:file`, async (req, res) => {
    const homework = await fetchHomework(req.params.assignment, req.params.file);
    res.download(homework, homework);
});

export const routing = router;