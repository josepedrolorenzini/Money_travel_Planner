import { Schema } from "mongoose";
export declare const Category: import("mongoose").Model<{
    name: string;
}, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    name: string;
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    name: string;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    name: string;
}, import("mongoose").Document<unknown, {}, {
    name: string;
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    name: string;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    name: string;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Idea: import("mongoose").Model<{
    title: string;
    estimatedBudget: number;
    status: "done" | "pending" | "doing" | "cancelled";
    savings: import("mongoose").Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
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
    expenses: import("mongoose").Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
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
    description?: string | null;
    deadline?: NativeDate | null;
} & import("mongoose").DefaultTimestampProps, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    title: string;
    estimatedBudget: number;
    status: "done" | "pending" | "doing" | "cancelled";
    savings: import("mongoose").Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
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
    expenses: import("mongoose").Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
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
    description?: string | null;
    deadline?: NativeDate | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
    toJSON: {
        virtuals: true;
    };
    toObject: {
        virtuals: true;
    };
}> & Omit<{
    title: string;
    estimatedBudget: number;
    status: "done" | "pending" | "doing" | "cancelled";
    savings: import("mongoose").Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
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
    expenses: import("mongoose").Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
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
    description?: string | null;
    deadline?: NativeDate | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    toJSON: {
        virtuals: true;
    };
    toObject: {
        virtuals: true;
    };
}, {
    title: string;
    estimatedBudget: number;
    status: "done" | "pending" | "doing" | "cancelled";
    savings: import("mongoose").Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
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
    expenses: import("mongoose").Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
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
    description?: string | null;
    deadline?: NativeDate | null;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    title: string;
    estimatedBudget: number;
    status: "done" | "pending" | "doing" | "cancelled";
    savings: import("mongoose").Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
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
    expenses: import("mongoose").Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
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
    description?: string | null;
    deadline?: NativeDate | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, import("mongoose").MergeType<import("mongoose").DefaultSchemaOptions, {
    timestamps: true;
    toJSON: {
        virtuals: true;
    };
    toObject: {
        virtuals: true;
    };
}>> & Omit<{
    title: string;
    estimatedBudget: number;
    status: "done" | "pending" | "doing" | "cancelled";
    savings: import("mongoose").Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
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
    expenses: import("mongoose").Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
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
    description?: string | null;
    deadline?: NativeDate | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, unknown, {
    title: string;
    estimatedBudget: number;
    status: "done" | "pending" | "doing" | "cancelled";
    savings: import("mongoose").Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
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
    expenses: import("mongoose").Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
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
    description?: string | null;
    deadline?: NativeDate | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>, {
    title: string;
    estimatedBudget: number;
    status: "done" | "pending" | "doing" | "cancelled";
    savings: import("mongoose").Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
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
    expenses: import("mongoose").Types.DocumentArray<{
        date: NativeDate;
        amount: number;
        description?: string | null;
        category?: string | null;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, unknown, {
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
    description?: string | null;
    deadline?: NativeDate | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=money-travel.schema.model.d.ts.map