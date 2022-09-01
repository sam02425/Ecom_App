import expreess from 'express';

const router = expreess.Router();

router.post('/api/users/signout', (req, res) => {
    res.send('sign out');
    });

export { router as signoutRouter };
