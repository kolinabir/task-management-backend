import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendRespone';
import { TaskServices } from './task.service';

const createNewTask = catchAsync(async (req, res) => {
  const result = await TaskServices.createNewTaskIntoDB(
    req.body,
    req?.user?.userId || '',
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task created successfully',
    data: result,
  });
});

const getAllTasks = catchAsync(async (req, res) => {
  const result = await TaskServices.getAllTasksFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All tasks fetched successfully',
    data: result,
  });
});

const getTaskById = catchAsync(async (req, res) => {
  const result = await TaskServices.getTaskByIdFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task fetched successfully',
    data: result,
  });
});

const updateTaskById = catchAsync(async (req, res) => {
  const result = await TaskServices.updateTaskByIdInDB(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task updated successfully',
    data: result,
  });
});

const deleteTaskById = catchAsync(async (req, res) => {
  const result = await TaskServices.deleteTaskByIdFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Task deleted successfully',
    data: result,
  });
});

export const TaskController = {
  createNewTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
};
