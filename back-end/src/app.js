import { customExpress } from './config/customExpress.js';
import { routes } from './routes/routes.js';

const port = process.env.PORT || 4000;
const app = customExpress();
routes(app);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
