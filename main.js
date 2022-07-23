//https://teachablemachine.withgoogle.com/models/eyHTVW94U/

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/eyHTVW94U/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}