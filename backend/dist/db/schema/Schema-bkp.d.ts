import mongoose from "mongoose";
declare const Idea: mongoose.Model<{
    title: string;
    estimatedBudget: number;
    status: "done" | "pending" | "doing" | "cancelled";
    savings: mongoose.Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, {}, {}> & {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }>;
    expenses: mongoose.Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, {}, {}> & {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }>;
    totalSaved: number;
    totalSpent: number;
    remaining: number;
    description?: string | null;
    deadline?: NativeDate | null;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    title: string;
    estimatedBudget: number;
    status: "done" | "pending" | "doing" | "cancelled";
    savings: mongoose.Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, {}, {}> & {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }>;
    expenses: mongoose.Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, {}, {}> & {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }>;
    totalSaved: number;
    totalSpent: number;
    remaining: number;
    description?: string | null;
    deadline?: NativeDate | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
    collection: string;
}> & Omit<{
    title: string;
    estimatedBudget: number;
    status: "done" | "pending" | "doing" | "cancelled";
    savings: mongoose.Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, {}, {}> & {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }>;
    expenses: mongoose.Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, {}, {}> & {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }>;
    totalSaved: number;
    totalSpent: number;
    remaining: number;
    description?: string | null;
    deadline?: NativeDate | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    collection: string;
}, {
    title: string;
    estimatedBudget: number;
    status: "done" | "pending" | "doing" | "cancelled";
    savings: mongoose.Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, {}, {}> & {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }>;
    expenses: mongoose.Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, {}, {}> & {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }>;
    totalSaved: number;
    totalSpent: number;
    remaining: number;
    description?: string | null;
    deadline?: NativeDate | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    title: string;
    estimatedBudget: number;
    status: "done" | "pending" | "doing" | "cancelled";
    savings: mongoose.Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, {}, {}> & {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }>;
    expenses: mongoose.Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, {}, {}> & {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }>;
    totalSaved: number;
    totalSpent: number;
    remaining: number;
    description?: string | null;
    deadline?: NativeDate | null;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.MergeType<mongoose.DefaultSchemaOptions, {
    timestamps: true;
    collection: string;
}>> & Omit<{
    title: string;
    estimatedBudget: number;
    status: "done" | "pending" | "doing" | "cancelled";
    savings: mongoose.Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, {}, {}> & {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }>;
    expenses: mongoose.Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, {}, {}> & {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }>;
    totalSaved: number;
    totalSpent: number;
    remaining: number;
    description?: string | null;
    deadline?: NativeDate | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    title: string;
    estimatedBudget: number;
    status: "done" | "pending" | "doing" | "cancelled";
    savings: mongoose.Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, {}, {}> & {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }>;
    expenses: mongoose.Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, {}, {}> & {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }>;
    totalSaved: number;
    totalSpent: number;
    remaining: number;
    description?: string | null;
    deadline?: NativeDate | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    title: string;
    estimatedBudget: number;
    status: "done" | "pending" | "doing" | "cancelled";
    savings: mongoose.Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, {}, {}> & {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }>;
    expenses: mongoose.Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, unknown, {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, {}, {}> & {
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }>;
    totalSaved: number;
    totalSpent: number;
    remaining: number;
    description?: string | null;
    deadline?: NativeDate | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default Idea;
//# sourceMappingURL=Schema-bkp.d.ts.map