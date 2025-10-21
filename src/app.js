import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.js";
import eventoRoutes from "./routes/eventos.js";
import visitanteRoutes from "./routes/visitantes.js";
import dependenciaRoutes from "./routes/dependencias.js";
import registrosRouter from "./routes/registros.js";
import cursosRoutes from "./routes/cursos.js";
import adminRoutes from "./routes/admin.js";
import exportRoutes from "./routes/export.js";
import usuariosRoutes from "./routes/usuarios.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ========== FRONTEND CONFIG ==========
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// sirve el build de React/Vite
app.use(express.static(path.join(__dirname, "../ut-visitantes-web/dist")));

// rutas backend
app.use("/api/auth", authRoutes);
app.use("/api/eventos", eventoRoutes);
app.use("/api/visitantes", visitanteRoutes);
app.use("/api/dependencias", dependenciaRoutes);
app.use("/api/registros", registrosRouter);
app.use("/api/cursos", cursosRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/export", exportRoutes);
app.use("/api/usuarios", usuariosRoutes);

// fallback para SPA de React
app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve(__dirname, "../ut-visitantes-web/dist/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor corriendo en puerto ${PORT}`));
