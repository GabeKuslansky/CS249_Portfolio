import config from 'config';
import { fetchHomework, fetchAllHomeworks } from './index';
import { Router } from 'express';
const dir = config.get('directory');
console.log(dir);

const router = Router();

router.get(`${dir}/`, (req, res) => {
    res.send('hello');
});

router.get(`${dir}/api/getAllHomeworks`, async(req, res) => {
    const homeworks = await fetchAllHomeworks();
    res.send(homeworks);
    res.status(200);
});

router.get(`${dir}/api/getHomework/:homework`, async(req, res) => {
    const homework = await fetchHomework(req.params.homework);
    res.send(homework);
})

export const routing = router;