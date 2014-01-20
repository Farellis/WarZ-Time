$( document ).ready(function() {
    var heures;
    var minutes;
    var secondes;
    
    function updateTime() {
        calcTime(new Date);
        $('#time').html(heures+" : "+minutes+ " : "+secondes);
    }
    
    function calcTime(now) {
        if(now.getHours()%2 === 0) {
            heures = 12;
        } else {
            heures = 0;
        }
        var ms = now.getMinutes()*60000+now.getSeconds()*1000+now.getMilliseconds();
        var heures_sup = parseInt(ms/(300*1000));
        heures = heures + heures_sup;
        ms = ms - heures_sup*300*1000;
        minutes = parseInt(ms/(5*1000));
        ms = ms - minutes*5*1000;
        secondes = parseInt(ms/((5/60)*1000));
        
        if(heures < 10) {
            heures = 0+""+heures;
        }
        if(minutes < 10) {
            minutes = 0+""+minutes;
        }
        if(secondes < 10) {
            secondes = 0+""+secondes;
        }
    }    
    
    setInterval(updateTime, 1);
    
});