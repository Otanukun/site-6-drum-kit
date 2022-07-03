//////////////////////////////////////////////////////
const finder = ((key, el) => {
    return el.dataset.key == key;
});
//////////////////////////////////////////////////////
const playS = (audio, block) => {
    audio.play();
    block.classList.add("playing");
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
        block.classList.remove("playing");
    }, 100);
}
//////////////////////////////////////////////////////
const audios = [...document.querySelectorAll('audio')];
const keysBlocks = [...document.querySelectorAll('.key')];
//////////////////////////////////////////////////////
window.addEventListener('keydown', (event) => {
    const { keyCode } = event;
    const finderWithKey = finder.bind(null, keyCode);
    const currentAudio = audios.find(finderWithKey);
    const currentBlock = keysBlocks.find(finderWithKey);
    currentAudio && playS(currentAudio, currentBlock);
});
//////////////////////////////////////////////////////