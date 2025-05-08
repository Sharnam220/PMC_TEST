import mongoose from "mongoose"
import { TodoInterface } from "../interfaces/todo.interface"

const todoSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: false }
    }
)

export default mongoose.model<TodoInterface>("To-Do", todoSchema)