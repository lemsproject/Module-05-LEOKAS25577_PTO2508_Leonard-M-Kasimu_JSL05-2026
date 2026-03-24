/**
 * Task Element module for creating DOM elements representing tasks.
 * Provides a function to create a task card element with event listeners.
 */

import { openTaskModal } from "./modalHandlers.js";

/**
 * Creates a DOM element for a task card.
 * @param {Object} task - The task object containing id, title, description, status.
 * @returns {HTMLElement} The task element.
 */
export function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.dataset.id = task.id;

  taskDiv.innerHTML = `
    <h3 class="task-title">${task.title}</h3>
    <p class="task-description">${task.description}</p>
  `;

  // Add click event to open modal

  taskDiv.addEventListener("click", () => openTaskModal(task));

  return taskDiv;
}
