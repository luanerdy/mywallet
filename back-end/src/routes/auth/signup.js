import bcrypt from 'bcrypt';

const signup = (app, connection) => {
    app.post('/auth/signup', async (req, res) => {
        const { name, email, password } = req.body;
        const hash = bcrypt.hashSync(password, 10);
        const sql = `
                    INSERT INTO users 
                    (name, email, password) 
                    VALUES ($1, $2, $3)`;

        try {
            const hasUser = await connection.query('SELECT * FROM users WHERE email = $1', [email]);
            if(hasUser.rows[0]) return res.sendStatus(409);
            
            await connection.query(sql, [name, email, hash]);
            res.sendStatus(201);
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
};

export { signup };
