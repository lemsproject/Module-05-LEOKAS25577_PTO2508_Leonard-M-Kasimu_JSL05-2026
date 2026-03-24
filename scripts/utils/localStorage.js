/**
 * Utility module for handling localStorage operations for tasks.
 * Loads tasks from localStorage, falling back to initialData if none exist.
 * Provides functions to save and load tasks.
 */

import { initialData } from "../../initialData.js";

/**
 * Loads tasks from localStorage. If no tasks are stored, initializes with initialData.tasks.
 * @returns {Array} Array of task objects.
 */
export function loadTasks() {
  const storedTasks = localStorage.getItem("kanbanTasks");
  if (storedTasks) {
    return JSON.parse(storedTasks);
  }
  // Use initialData if no stored tasks
  return [...initialData.tasks];
}

/**
 * Saves the tasks array to localStorage.
 * @param {Array} tasks - Array of task objects to save.
 */
export function saveTasks(tasks) {
  localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
}
