/**
github repository link :    https://github.com/mdmonsuralamrana/assignment-js

 */




function kilometerToMeter(kilometer){
    var meter = 0 ;
    if( kilometer <= 0 ){
        return "You defined a negative or none number."
    }
    else{
        meter = kilometer * 1000 ;
    }
    
    return meter ;
}




function hotelCost (stayDay){

    var price = 0 ;
    if (stayDay <= 10){
        price = stayDay * 100
    }
    else if(stayDay <= 20){
        var firstPart = 10 * 100 ;
        var remaining = stayDay - 10 ;
        var secondPart = remaining * 80 ;
        price = firstPart + secondPart ;
    }
    else {
        var firstPart = 10 * 100 ;
        var secondPart = 10 * 80 ;
        var remaining = stayDay - 20 ;
        var thirdpart = remaining * 50 ;
        price = firstPart + secondPart + thirdpart ;
    }
    return price ;
}




 
function megaFriend (names){
    
    var largerName = names[0]
    if (names.length == 0 ){
        return "You undefined any array."
    }
    else{

        for (var i = 0 ; i < names.length ; i++){
            var element = names[i];
            if(element.length > largerName.length){
                largerName = element ;
            }
        }
    }


    return largerName ;
    
}




function budgetCalculator(watch, phone, laptop){

        var totalPrice = 0 ;
        var watchPrice = watch * 50 ;
        var phonePrice = phone * 100 ;
        var laptopPrice = laptop * 500 ;
        totalPrice = watchPrice + phonePrice + laptopPrice ;
    

    return totalPrice ;
}
