import { Schema, model } from "mongoose";

// --- 1. CATEGORIES (Colección Independiente) ---
// Estas son globales: 'Transporte', 'Comida', 'Vuelos', etc.
const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true, trim: true },
});

export const Category = model("Category", CategorySchema);

// --- 2. PLACE SCHEMA (Sub-documento) ---
const PlaceSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    dailyBudget: { type: Number, min: 0, default: 0 }, // cuánto gastas por día
    plannedDays: { type: Number, min: 0, default: 0 }, // días ideales
  },
  {
    _id: false,
    timestamps: true,
  },
);

export const Place = model("Place", PlaceSchema);

// --- 2. TRANSACTION SCHEMA (Sub-documento) ---
const TransactionSchema = new Schema(
  {
    amount: { type: Number, required: true, min: 0 },
    description: String,
    category: { type: String, trim: true }, // Referencia al nombre de la categoría
    date: { type: Date, default: Date.now },
  },
  { _id: false },
);

// --- 3. IDEA SCHEMA (Colección Principal) ---
const IdeaSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    deadline: { type: Date },
    estimatedBudget: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ["pending", "doing", "done", "cancelled"],
      default: "pending",
    },
    savings: [TransactionSchema],
    places: [PlaceSchema], // Array de subdocumentos de lugares
    expenses: [TransactionSchema],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

// Virtuals para cálculos automáticos
IdeaSchema.virtual("totalSaved").get(function () {
  return this.savings.reduce((sum, s) => sum + (s.amount || 0), 0);
});

IdeaSchema.virtual("totalSpent").get(function () {
  return this.expenses.reduce((sum, e) => sum + (e.amount || 0), 0);
});

IdeaSchema.virtual("remaining").get(function () {
  const saved = this.savings.reduce((sum, s) => sum + (s.amount || 0), 0);
  const spent = this.expenses.reduce((sum, e) => sum + (e.amount || 0), 0);
  return saved - spent;
});

export const Idea = model("Idea", IdeaSchema);
