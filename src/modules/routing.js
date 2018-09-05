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

router.get(`${dir}/api/getHomework/:homework`, async(req, res) => {
    const homework = await fetchHomework(req.params.homework);
    res.send(homework);
})

export const routing = router;