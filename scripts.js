// scripts.js - Main entry point for the Kanban Task Management application

import { loadTasks, saveTasks } from "./scripts/utils/localStorage.js";
import { renderTasks } from "./scripts/ui/render.js";
import { initModalHandlers } from "./scripts/ui/modalHandlers.js";
import { initTaskManager } from "./scripts/tasks/taskManager.js";

/**
 * Initializes the application by loading tasks from localStorage,
 * rendering them to the DOM, and setting up event handlers.
 */
function initApp() {
  const tasks = loadTasks();
  renderTasks(tasks);
  initModalHandlers();
  initTaskManager();
}

// Initialize the app when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initApp);
