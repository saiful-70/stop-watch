{

    let hour, minute, second, watchProgress, width;
    hour = document.getElementById('hour');
    minute = document.getElementById('minute');
    second = document.getElementById('second');
    watchProgress = document.getElementById('progress-bar');

    watchProgress.style.width = '40rem'
    width = parseInt(watchProgress.style.width);

    console.log(`Watch has started`);

    let watch = () => {
        let date = new Date();

        hour.textContent = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
        minute.textContent = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
        let sec = date.getSeconds();
        second.textContent = sec > 9 ? sec : '0' + sec;

        watchProgress.style.width = ((sec/60) * width) + 'rem';

    }

    setInterval(watch, 1000);

}


// For stopwatch
{

    let gets, stopwatchMinute, stopwatchSecond, stopwatchMilliSecond, start, pause, reset, stopWatchRunning = false;

    // gets = document.getElementById;

    stopwatchMinute = document.getElementById('stopwatchMinute');
    stopwatchSecond = document.getElementById('stopwatchSecond');
    stopwatchMilliSecond = document.getElementById('stopwatchMilliSecond');
    start = document.getElementById('btn-start');
    pause = document.getElementById('btn-pause');
    reset = document.getElementById('btn-reset');

    let sec = 0, timer = null;
    let second, minute;

    let getTime = (sec) => {
        second = parseInt(sec%60);
        minute = parseInt(sec/60);

        return {
            second,
            minute
        }
    }

    start.addEventListener('click', () => {
        if(!stopWatchRunning) {
            stopWatchRunning = true;
            timer = setInterval(() => {
                sec++;
            
                let {second, minute} =  getTime(sec);
            
                stopwatchSecond.textContent = second > 9 ? second : '0' + second;
                stopwatchMinute.textContent = minute > 9 ? minute : '0' + minute;
            }, 1000);
        }
    });

    pause.addEventListener('click', () => {
        stopWatchRunning = false;

        clearInterval(timer);
    });

    reset.addEventListener('click', () => {
        stopWatchRunning = false;

        clearInterval(timer);

        sec = 0, minute = 0;
        stopwatchSecond.textContent = '00';
        stopwatchMinute.textContent = '00';
        
    });

}