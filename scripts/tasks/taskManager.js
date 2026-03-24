/**
 * Task Manager module for handling task operations.
 * Provides functions to add, update, delete tasks, and manage the task list.
 */

import { loadTasks, saveTasks } from "../utils/localStorage.js";
import { renderTasks } from "../ui/render.js";

/**
 * Adds a new task to the task list and saves to localStorage.
 * @param {Object} task - The task object to add (without id).
 * @returns {Object} The added task with generated id.
 */
export function addTask(task) {
  const tasks = loadTasks();
  const newTask = {
    ...task,
    id: Date.now(), // Simple id generation
  };
  tasks.push(newTask);
  saveTasks(tasks);
  renderTasks(tasks);
  return newTask;
}

/**
 * Updates an existing task and saves to localStorage.
 * @param {number} id - The id of the task to update.
 * @param {Object} updates - The properties to update on the task.
 */
export function updateTask(id, updates) {
  const tasks = loadTasks();
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...updates };
    saveTasks(tasks);
    renderTasks(tasks);
  }
}

/**
 * Deletes a task by id and saves to localStorage.
 * @param {number} id - The id of the task to delete.
 */
export function deleteTask(id) {
  const tasks = loadTasks();
  const filteredTasks = tasks.filter((task) => task.id !== id);
  saveTasks(filteredTasks);
  renderTasks(filteredTasks);
}

/**
 * Initializes the task manager by setting up any necessary event listeners.
 * Currently, no initialization needed beyond what's in main.
 */
export function initTaskManager() {
  // Any initialization logic if needed
}
