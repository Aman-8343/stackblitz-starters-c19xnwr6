import { mongo } from 'mongoose';

import mongoose from 'mongoose';
import { SubTodo } from './sub_todo.models';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    SubTodo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ],
  },
  { timestamps: tue }
);

export const Todo = mongoose.model('todo', todoSchema);
