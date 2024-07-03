import { Schema, model } from 'mongoose';
import { TTask } from './task.interface';

const taskSchema = new Schema<TTask>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['completed', 'pending'],
    default: 'pending',
  },
  assignedTo: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
  },
});

export const Task = model<TTask>('Task', taskSchema);
