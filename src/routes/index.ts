import express from 'express';

const router = express.Router()


router.get('/', (req, res)=> {
    res.json({"text": 'Ola mundo 2'});
});

export default router;