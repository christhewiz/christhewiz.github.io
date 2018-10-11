function assignGrade() {
    //capture a score from html
    var score = Number(document.project3.num1.value);
    if (score >= 90) //that's an A
    {
        return 'A';
    }
    else if (score >= 80) {
        return 'B';
    }
    else if (score >= 70) {
        return 'C';
    }
    else if (score >= 60) {
        return 'D';
    }
    else if (score >= 50) {
        return 'F+';
    }
}

function temperatureBug(){
    var temperature = Number(document.project4.num1.value);
    if (temperature >= 120){
        return "I'm pretty sure you live in the underworld.";
        document.getElementById('weather').src='img/underworld.jpg';
    }
    else if (temperature >= 80)
    {
        return 'Summer';
        document.getElementById('weather').src='img/summer.jpg';
    }
    else if (temperature >=60){
        return 'Fall'
        document.getElementById('weather').src='img/fall.jfif';
    }
    else if (temperature >=50 ){
        return 'Spring';
        document.getElementById('weather').src='img/spring.jpg';
    }
    else if (temperature >= 0){
        return 'Winter'
        document.getElementById('weather').src='img/winter.jpg';
    }
    else if (temperature <= 0){
        return 'Do you live in Antarctica?';
        document.getElementById('weather').src='img/antarctica.jfif';
    }
}
