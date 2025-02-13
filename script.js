function playAudio(index) {
    const audioFiles = [
        document.getElementById("audio1"),
        document.getElementById("audio2"),
        document.getElementById("audio3")
    ];
    
    audioFiles.forEach(audio => audio.pause()); // Остановить все аудио перед воспроизведением
    audioFiles[index].currentTime = 0;
    audioFiles[index].play();
}
