// Code your solution in this file!


const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers){
return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers){
return drivers.slice(-2);
}


const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier (num){
    return function (fare){
        return fare * num;
    }
}


const fareDoubler = function(createFareMultiplier){
    return createFareMultiplier * 2;
}

const fareTripler = function(createFareMultiplier){
    return createFareMultiplier * 3;
}

function selectDifferentDrivers(arrayOfDrivers,fn){
    return fn(arrayOfDrivers);
}