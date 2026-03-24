/**
 * Render module for displaying tasks on the Kanban board.
 * Handles rendering tasks into their respective columns and updating column headers.
 */

import { createTaskElement } from "./taskElement.js";

/**
 * Renders all tasks to the board, grouping them by status.
 * Clears existing tasks and re-renders.
 * @param {Array} tasks - Array of task objects to render.
 */
export function renderTasks(tasks) {
  // Clear all columns
  const columns = document.querySelectorAll(".column-div");
  columns.forEach((column) => {
    const tasksContainer = column.querySelector(".tasks-container");
    tasksContainer.innerHTML = "";
  });

  // Group tasks by status
  const tasksByStatus = {
    todo: tasks.filter((task) => task.status === "todo"),
    doing: tasks.filter((task) => task.status === "doing"),
    done: tasks.filter((task) => task.status === "done"),
  };

  // Render tasks in each column
  Object.keys(tasksByStatus).forEach((status) => {
    const column = document.querySelector(
      `.column-div[data-status="${status}"]`,
    );
    const tasksContainer = column.querySelector(".tasks-container");
    const header = column.querySelector(".columnHeader");

    // Update header with count
    const statusText = status.charAt(0).toUpperCase() + status.slice(1);
    header.textContent = `${statusText} (${tasksByStatus[status].length})`;

    // Render each task
    tasksByStatus[status].forEach((task) => {
      const taskElement = createTaskElement(task);
      tasksContainer.appendChild(taskElement);
    });
  });
}
