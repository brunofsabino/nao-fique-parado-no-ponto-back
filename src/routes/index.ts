import express from 'express';
import z from 'zod';

const router = express.Router()


router.get('/', (req, res)=> {
    res.json({"text": 'Ola mundo 23'});
});

router.get('/api/linhas', (req, res) => {
    const linesBusSchema = z.string();

    const result = linesBusSchema.safeParse(req.params);
    if(!result.success) {
        return res.json({ erros: "Dados invalidos"});
    }
})

export default router;