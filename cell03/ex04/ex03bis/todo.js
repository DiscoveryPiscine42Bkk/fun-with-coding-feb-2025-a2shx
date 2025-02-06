$(document).ready(function() {
    loadTasks();

    $('#add_task').click(function() {
        const taskText = prompt('Enter a new task:');
        if (taskText) {
            createTaskElement(taskText);
            saveTasks();
        }
    });
});

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
    $('#ft_list').empty(); 
    tasks.forEach(task => createTaskElement(task));
}

function createTaskElement(taskText) {
    const task = $('<div></div>')
        .addClass('todo')
        .text(taskText)
        .click(function() {
            if (confirm('Do you want to remove this task?')) {
                $(this).remove();
                saveTasks();
            }
        });
    $('#ft_list').prepend(task);
}

function saveTasks() {
    const tasks = $('.todo').map(function() {
        return $(this).text();
    }).get();
    setCookies(tasks);
}