document.addEventListener('DOMContentLoaded', function () {
    const playPauseButton = document.getElementById('play-pause');
    const audio = document.getElementById('audio');
    const progressBar = document.getElementById('progress-bar');
    let isPlaying = false;

    // Play/Pause
    playPauseButton.addEventListener('click', function () {
        if (isPlaying) {
            audio.pause();
            playPauseButton.innerHTML = '<i class="ri-play-fill"></i>';
        } else {
            audio.play();
            playPauseButton.innerHTML = '<i class="ri-pause-fill"></i>';
        }
        isPlaying = !isPlaying;
    });

    // Atualiza a barra de progresso conforme o tempo da música
    audio.addEventListener('timeupdate', updateProgress);

    function updateProgress() {
        const { duration, currentTime } = audio;
        const percent = (currentTime / duration) * 100;
        progressBar.style.width = `${percent}%`;
    }

    // Permitir que o usuário avance o progresso da música clicando na barra
    document.getElementById('progress-container').addEventListener('click', function (event) {
        const width = this.clientWidth;
        const clickX = event.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
    });

    document.getElementById('prev').addEventListener('click', function () {
        // Logica para música anterior
    });

    document.getElementById('next').addEventListener('click', function () {
        // Logica para próxima música
    });
});
