import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';

const login = (app, connection) => {
	app.post('/auth/login', async (req, res) => {
		const { email, password } = req.body;
		const token = uuid();
		const sql = `
                    INSERT INTO sessions 
                    ("userId", token) 
                    VALUES ($1, $2)`;

		try {
			const result = await connection.query(
				`SELECT * FROM users WHERE email = $1`,
				[email]
			);
			const user = result.rows[0];

			if (user && bcrypt.compareSync(password, user?.password)) {
				const session = await connection.query(
					`SELECT * FROM sessions WHERE "userId" = $1`,
					[user.id]
				);
				const activeSession = session.rows[0];

				if (activeSession)
					return res.send({
						name: user.name,
						token: activeSession.token,
					});

				await connection.query(sql, [user.id, token]);
				return res.send({ name: user.name, token });
			}
			res.sendStatus(401);
		} catch (err) {
			console.log(err);
			res.sendStatus(500);
		}
	});
};

export { login };
