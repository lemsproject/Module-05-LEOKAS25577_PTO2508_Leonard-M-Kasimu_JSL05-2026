import {
  loadTasksFromStorage,
  saveTasksToStorage,
} from "./utils/localStorage.js";
import { renderTasks, renderTasks } from "./ui/render.js";
import {
  setupModalCloseHandler,
  setupNewTaskModalHandler,
} from "./ui/modalHandlers.js";

function initTaskBoard() {
  // Load tasks from local storage
  const tasks = loadTasksFromStorage();
  // Render tasks
  renderTasks(tasks);
  // Setup modal handlers
  setupModalCloseHandler();
  setupNewTaskModalHandler();
}
// Initialize the task board when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initTaskBoard);
