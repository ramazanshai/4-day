document.getElementById('calculate').addEventListener('click', function() {
    const pits = parseInt(document.getElementById('pits').value);
    const ballsPerPit = parseInt(document.getElementById('balls').value);

    const totalMoves = countMoves(pits, ballsPerPit);
    document.getElementById('result').innerText = `Общее количество ходов: ${totalMoves}`;
});

function countMoves(pits, ballsPerPit) {
    let totalMoves = 0;

    for (let i = 1; i <= pits; i++) {
        totalMoves += ballsPerPit; // Добавляем количество шариков в текущую лунку
    }

    return totalMoves; // Возвращаем общее количество ходов
}
