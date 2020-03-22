module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const turns =  2 ** disksNumber - 1;
    const seconds =  turns / (turnsSpeed / (60 * 60));

    return { turns, seconds };
}