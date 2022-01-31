function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    Classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dmB_i5TeP/', modelReady);
}

function modelReady(){
    Classifier.classify(gotResults);
}