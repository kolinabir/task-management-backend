import { User } from '../User/user.model';
import { TTask } from './task.interface';
import { Task } from './task.model';

const createNewTaskIntoDB = async (payload: TTask, userId: string) => {
  let userIdMongodb = null;
  const findUser = await User.findOne({ userId });
  if (findUser) {
    userIdMongodb = findUser._id;
  }
  const result = await Task.create({
    ...payload,
    assignedTo: userIdMongodb,
  });
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
