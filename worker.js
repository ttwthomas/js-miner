self.addEventListener('message', function(e) {
    var i = 0;
    while(i < 1000){
        i++
        if (i%10 == 0 ){
            self.postMessage(i);
        }
    }
    self.close();
}, false);