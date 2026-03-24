import * as http from "node:http";
import { IncomingMessage, ServerResponse } from "node:http"; // Import the types
import * as dotenv from "dotenv";
import { connectDB } from "./db/MongoDBconn.js";
import { Idea, Category } from "./db/schema/money-travel.schema.model.js"; // Importamos tus modelos
dotenv.config();
connectDB();
const server = http.createServer(async (req, res) => {
    // Configuración de CORS y Headers base
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Content-Type", "application/json");
    const { method, url } = req;
    // --- 1. RUTA GET ---
    if (url === "/api/ideas" && method === "GET") {
        try {
            const ideas = await Idea.find();
            res.writeHead(200);
            return res.end(JSON.stringify(ideas, null, 2));
        }
        catch (error) {
            res.writeHead(500);
            return res.end(JSON.stringify({ message: "Error fetching ideas" }));
        }
    }
    // --- 2. RUTA POST ---
    if (url === "/api/post-ideas" && method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", async () => {
            try {
                const payLoad = JSON.parse(body);
                const newIdea = new Idea(payLoad);
                await newIdea.save();
                res.writeHead(201);
                return res.end(JSON.stringify({
                    message: "Idea created successfully",
                    idea: newIdea,
                }));
            }
            catch (error) {
                res.writeHead(400); // 400 es mejor para errores de cliente/datos
                return res.end(JSON.stringify({
                    message: "Error creating idea",
                    error: error.message,
                }));
            }
        });
        return; // IMPORTANTE: Evita que el código siga bajando al 404
    }
    // --- 3. RUTA 404 (Solo si no entró en ninguna de las anteriores) ---
    res.writeHead(404);
    res.end(JSON.stringify({
        message: "404 Not Found. Use http://localhost:3000/api/ideas",
    }));
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map