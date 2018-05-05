
let counter = 10
let direction = true

function onChange(){
    if(direction){
        counter ++;
        if(counter > 50){
            direction = false
        }
    }
    else{
        counter --;
        if(counter < 1){
            direction = true
        }
    }

    //postMessage("我从worker中来的: " + counter)
    postMessage({
        radius: counter
    })
}

setInterval(() => onChange(), 100)