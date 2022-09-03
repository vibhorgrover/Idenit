Webcam.set({
  width: 350,
  height: 300,
 image_format:'png',
 png_quality: 90 
})

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
  Webcam.snap(function(data_uri){
    document.getElementById("Result").innerHTML = '<img id="Captured_image" src="'+data_uri+'" />';
  });  
}

console.log('ml5 version',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',ModelLoded)

function ModelLoded(){
console.log("ModelLoded")
}

function check(){
  img = document.getElementById("Captured_image")
  classifier.classify(img,gotResult)
}

function gotResult(error,results){
if(error){
  console.error(error)
}else{
  console.log(results);
document.getElementById("hhhhhhhh").innerHTML = results[0].label;
document.getElementById("bbbbbbbbb").innerHTML = results[0].confidence.toFixed(2);
}
}