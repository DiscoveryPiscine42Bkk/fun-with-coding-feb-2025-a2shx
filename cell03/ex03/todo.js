window.onload = function() {
    loadTasks();
};

function getCookies() {
    const cookies = document.cookie.split('; ');
    const taskCookie = cookies.find(row => row.startsWith('tasks='));
    return taskCookie ? JSON.parse(decodeURIComponent(taskCookie.split('=')[1])) : [];
}

function setCookies(tasks) {
    document.cookie = `tasks=${encodeURIComponent(JSON.stringify(tasks))}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

function loadTasks() {
    const tasks = getCookies();
    const ftList = document.getElementById('ft_list');
    ftList.innerHTML = ''; // Clear the list before adding saved tasks
    tasks.forEach(task => createTaskElement(task));
}

function createTaskElement(taskText) {
    const task = document.createElement('div');
    task.className = 'todo';
    task.textContent = taskText;
    task.onclick = function () {
        if (confirm('Do you want to remove this task?')) {
            task.remove();
            saveTasks();
        }
    };
    document.getElementById('ft_list').prepend(task);
}

function addTask() {
    const taskText = prompt('Enter a new task:');
    if (taskText) {
        createTaskElement(taskText);
        saveTasks();
    }
}

function saveTasks() {
    const tasks = Array.from(document.getElementsByClassName('todo')).map(task => task.textContent);
    setCookies(tasks);
}

