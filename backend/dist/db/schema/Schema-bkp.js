// src/models/Idea.ts
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // carga .env automáticamente
// Conexión (se ejecuta al importar este archivo o puedes moverla a server.ts)
mongoose
    .connect(process.env.MONGODB_URI || "")
    .then(() => console.log("→ Conectado a MongoDB"))
    .catch((err) => console.error("Error al conectar MongoDB:", err.message));
// 1. Sub-esquemas (transacciones simples)
const TransactionSchema = new mongoose.Schema({
    amount: { type: Number, required: true, min: 0 },
    description: { type: String, trim: true },
    date: { type: Date, default: Date.now },
    category: { type: String, trim: true }, // opcional
}, { _id: false });
// 2. Esquema principal de Idea
const IdeaSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    deadline: { type: Date },
    estimatedBudget: { type: Number, default: 0, min: 0 },
    totalSaved: { type: Number, default: 0, min: 0 },
    totalSpent: { type: Number, default: 0, min: 0 },
    remaining: { type: Number, default: 0, min: 0 },
    status: {
        type: String,
        enum: ["pending", "doing", "done", "cancelled"],
        default: "pending",
    },
    savings: [TransactionSchema],
    expenses: [TransactionSchema],
}, {
    timestamps: true, // crea createdAt y updatedAt automáticamente
    collection: "ideas", // nombre explícito de la colección
});
// 3. Virtuales básicos (se calculan al leer)
IdeaSchema.virtual("totalSaved").get(function () {
    return this.savings.reduce((sum, item) => sum + item.amount, 0);
});
IdeaSchema.virtual("totalSpent").get(function () {
    return this.expenses.reduce((sum, item) => sum + item.amount, 0);
});
IdeaSchema.virtual("remaining").get(function () {
    return this.totalSaved - this.totalSpent;
});
// 4. Modelo
const Idea = mongoose.model("Idea", IdeaSchema);
// Exportar solo el modelo (como en tu ejemplo)
export default Idea;
//# sourceMappingURL=Schema-bkp.js.map