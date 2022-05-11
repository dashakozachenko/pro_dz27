'use strict';

function counter (accum = 0) {

    const statistic = {
        increase: 0,
        decrease: 0,
        value: 0,
        getStatistic: 0
    };

    return {

        increase(num) {
            statistic.increase++;
            return accum += num;
        },

        decrease(num) {
            statistic.decrease++;
            return accum -= num;
        },

        value() {
            statistic.value++;
            return accum;
        },

        getStatistic() {
            statistic.getStatistic++;
            return statistic;
        },

        resetAccum() {
            return accum = 0;
        },

        resetStatistic() {
            for (const key in statistic) {
                statistic[key] = 0;
            }
            return statistic;
        },

        reset () {
            this.resetAccum()
            this.resetStatistic();
            return {
                accum,
                statistic
            }
        }
    };
}

const result = counter();
console.log(result.increase(1));
console.log(result.increase(1));
console.log(result.increase(1));
console.log(result.decrease(1));
console.log(result.decrease(1));
console.log(result.value());
console.log(result.getStatistic());
console.log(result.reset());












