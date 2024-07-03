import { Types } from 'mongoose';

export type TTask = {
  title: string;
  description: string;
  status: 'completed' | 'pending';
  assignedTo?: [Types.ObjectId];
};
