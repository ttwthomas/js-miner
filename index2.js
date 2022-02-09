var myWorker = new Worker('worker.js');
myWorker.addEventListener('message', function(e) {
    console.log('msg from wrkr: ', e.data);
}, false);
myWorker.postMessage(123);