/**
 * Modal Handlers module for managing modal dialogs.
 * Handles opening, closing, and form submissions for adding and editing task modals.
 */

import { addTask, updateTask, deleteTask } from "../tasks/taskManager.js";

/**
 * Initializes event listeners for modal buttons and forms.
 */
export function initModalHandlers() {
  // Add Task Button
  const addTaskBtn = document.getElementById("addTaskBtn");
  const addTaskModal = document.getElementById("add-task-modal");
  const closeAddModalBtn = document.getElementById("close-add-modal-btn");
  const addTaskForm = document.getElementById("add-task-form");

  // Task Edit Modal
  const taskModal = document.getElementById("task-modal");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const taskForm = document.getElementById("task-form");

  // Event listeners
  addTaskBtn.addEventListener("click", () => addTaskModal.showModal());
  closeAddModalBtn.addEventListener("click", () => addTaskModal.close());
  addTaskForm.addEventListener("submit", handleAddTaskSubmit);

  closeModalBtn.addEventListener("click", () => taskModal.close());
  taskForm.addEventListener("submit", handleTaskSubmit);

  // Close modals when clicking outside
  addTaskModal.addEventListener("click", (e) => {
    if (e.target === addTaskModal) addTaskModal.close();
  });
  taskModal.addEventListener("click", (e) => {
    if (e.target === taskModal) taskModal.close();
  });
}

/**
 * Opens the task edit modal and populates it with task data.
 * @param {Object} task - The task object to edit.
 */
export function openTaskModal(task) {
  const taskModal = document.getElementById("task-modal");
  const taskForm = document.getElementById("task-form");

  // Populate form
  document.getElementById("task-title").value = task.title;
  document.getElementById("task-desc").value = task.description;
  document.getElementById("task-status").value = task.status;

  // Store task id for update
  taskForm.dataset.taskId = task.id;

  taskModal.showModal();
}

/**
 * Handles submission of the add task form.
 * @param {Event} e - The submit event.
 */
function handleAddTaskSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const task = {
    title: formData.get("title"),
    description: formData.get("description"),
    status: formData.get("status"),
  };
  addTask(task);
  e.target.reset();
  document.getElementById("add-task-modal").close();
}

/**
 * Handles submission of the task edit form.
 * @param {Event} e - The submit event.
 */
function handleTaskSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const taskId = parseInt(e.target.dataset.taskId);
  const updates = {
    title: formData.get("title"),
    description: formData.get("description"),
    status: formData.get("status"),
  };
  updateTask(taskId, updates);
  document.getElementById("task-modal").close();
}
