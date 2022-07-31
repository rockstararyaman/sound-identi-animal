//https://teachablemachine.withgoogle.com/models/eyHTVW94U/

function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eyHTVW94U/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;

        img1 = document.getElementById('earing');

        if (results[0].label == "Barking") {
            img1.src = 'dog.png';
        } else if (results[0].label == "Meowing") {
            img1.src = 'cat.png'; 
        }
    }
} 