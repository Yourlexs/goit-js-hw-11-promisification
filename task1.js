// !Задание №1

const delay = ms => {
    return Promise.resolve(
        setTimeout(() => {
            console.log(ms);
        }, ms)
    )
};

const logger = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger);
delay(1000).then(logger); 
delay(1500).then(logger);