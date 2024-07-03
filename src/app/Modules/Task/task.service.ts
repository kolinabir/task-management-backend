import { TTask } from './task.interface';
import { Task } from './task.model';

const createNewTaskIntoDB = async (payload: TTask) => {
  const result = await Task.create(payload);
  return result;
};

const getAllTasksFromDB = async () => {
  const result = await Task.find();
  return result;
};

const getTaskByIdFromDB = async (id: string) => {
  const result = await Task.findById(id);
  return result;
};

const updateTaskByIdInDB = async (id: string, payload: TTask) => {
  const result = await Task.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteTaskByIdFromDB = async (id: string) => {
  const result = await Task.findByIdAndDelete(id);
  return result;
};

export const TaskServices = {
  createNewTaskIntoDB,
  getAllTasksFromDB,
  getTaskByIdFromDB,
  updateTaskByIdInDB,
  deleteTaskByIdFromDB,
};
