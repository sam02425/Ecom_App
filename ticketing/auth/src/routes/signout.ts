import expreess from 'express';

const router = expreess.Router();

router.post('/api/users/signout', (req, res) => {
    req.session = null;

    res.send({ message: 'Success' });
});

export { router as signoutRouter };
