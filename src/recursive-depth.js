module.exports = class DepthCalculator {
    calculateDepth(checkArray, stage = 0) {
        if (stage === 0) {
            this.deepCounter = 0;
            stage = 1;
        }
       
        if (checkArray.length === 0) {
            this.deepCounter = Math.max(this.deepCounter, stage);
        }

        checkArray.forEach(item => {
            if (Array.isArray(item)) {
                this.calculateDepth(item, stage + 1);
            } else {
                this.deepCounter = Math.max(this.deepCounter, stage);
            }
        })

        return this.deepCounter;
    }
};