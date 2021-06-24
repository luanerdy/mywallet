const getEntries = (app, connection) => {
	app.get('/entries', async (req, res) => {
		const token = req.get('authorization')?.replace('Bearer ', '');
		const sql = `
                    SELECT * FROM entries 
                    WHERE "userId" = $1`;

		try {
			if (!token) return res.sendStatus(401);

			const session = await connection.query(
				`SELECT * FROM sessions WHERE token = $1`,
				[token]
			);
			const activeSession = session.rows[0];

			if (!activeSession) return res.sendStatus(401);

			const result = await connection.query(sql, [activeSession.userId]);
			const entries = result.rows.map((r) => {
				delete r.id;
				delete r.userId;
				return r;
			});
			const total =
				entries.reduce(
					(acc, cur) =>
						cur.type === 'income'
							? acc + cur.value
							: acc - cur.value,
					0
				);
			res.send({ total, entries });
		} catch (err) {
			console.log(err);
			res.sendStatus(500);
		}
	});
};

export { getEntries };
