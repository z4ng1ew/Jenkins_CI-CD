function updateMessage() {
    const messages = [
        "Приложение работает отлично!",
        "Jenkins автоматизация работает!",
        "CI/CD pipeline успешно настроен!",
        "Время: " + new Date().toLocaleTimeString()
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').textContent = randomMessage;
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    updateMessage();
});
