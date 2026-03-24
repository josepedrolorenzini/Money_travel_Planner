import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI || "";
export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("✅ Connected with new credentials");
    }
    catch (err) {
        console.error("❌ Connection failed", err);
    }
};
//# sourceMappingURL=MongoDBconn.js.map