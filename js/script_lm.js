function toggleBurner(burnerId) {
    const burner = document.getElementById(`burner${burnerId}`);
    const button = document.getElementById(`button${burnerId}`);
    burner.classList.toggle('on');
    if (burner.classList.contains('on')) {
        burner.src = `images/burner${burnerId}onlm.png`;
        button.style.transform = `rotate(45deg)`;
    } else {
        button.style.transform = `rotate(0deg)`;
        burner.src = `images/burner${burnerId}offlm.png`;
    }
}