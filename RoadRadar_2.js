function roadRadar([speed, area]) {
    switch (area){
        case 'motorway':
            let motorwaySpeed=speed-130;
            if(motorwaySpeed<=0){
                break;
            }
            else if(motorwaySpeed<=20){
            console.log('speeding')
            }else if(motorwaySpeed<=40){
            console.log('excessive speeding')
            }else {
            console.log('reckless driving')
            }
            break;
        case 'interstate':
            let interstateSpeed=speed-90;
            if(interstateSpeed<=0){
                break;
            }
            else if(interstateSpeed<=20){
            console.log('speeding')
        }else if(interstateSpeed<=40){
            console.log('excessive speeding')
        }else {
            console.log('reckless driving')
        }
            break;
        case 'city':
            let citySpeed=speed-50;
            if(citySpeed<0){
                break;
            }
            else if(citySpeed<=20){
                console.log('speeding')
            }else if(citySpeed<=40){
                console.log('excessive speeding')
            }else {
                console.log('reckless driving')
            }
            break;
        case 'residential':
            let residentialSpeed=speed-20;
            if(residentialSpeed<=0){
                break;
            }
            else if(residentialSpeed<=20){
                console.log('speeding')
            }else if(residentialSpeed<=40){
                console.log('excessive speeding')
            }else {
                console.log('reckless driving')
            }
            break;
        default: break;

    }
}
roadRadar(['90', 'city']);