function generateFideltyCard(data){
  const obj = JSON.parse(data);
  var background;
  switch(obj.cardData[0].backgroundColor){
    case "black": background = "blackBackground.svg"; break;
    case "white": background = "whiteBackground.svg"; break;
    case "gray": background = "grayBackground.svg"; break;
    case "blue": background = "blueBackground.svg"; break;
    case "light-blue": background = "light-blueBackground.svg"; break;
    case "red": background = "redBackground.svg"; break;
    case "purple": background = "purpleBackground.svg"; break;
    case "pink": background = "pinkBackground.svg"; break;
    case "yellow": background = "yellowBackground.svg"; break;
  }

  document.write('<body id="select" style="background-color: white;"> <div class="container"> <div style=" background-image: url('+ background +');border-style: solid; border-color: grey; border-width: 1px; box-shadow: 0 20px 30px 20px rgba(0, 0, 0, 0.15);" id="card"> <p class="hp" style="width: 158px;"> <span>Contrada Refenero</span> </p> <img style="width: 90px;" src="'+ obj.cardData[0].logo +'"> <h2 style="color:'+obj.cardData[0].primaryColor+'" id="getName" class="poke-name">'+obj.cardData[0].name + " "+ obj.cardData[0].surname+'</h2> <div class="types"> <svg id="barcode"></svg> </div> <div class="stats"> <div> <h3 style="color:'+obj.cardData[0].primaryColor+'">2023 - 2024</h3> <p>Anno di validita</p> </div> <div> <h3 style="color:'+obj.cardData[0].primaryColor+'" id="idCard">'+ obj.cardData[0].id +'</h3> <p style="color:'+obj.cardData[0].primaryColor+'">ID</p> </div> </div> </div> </div>  </body>');
  document.write('<style>* { padding: 0; margin: 0; box-sizing: border-box; font-family: "Poppins", sans-serif; } body { background-color: #eff3ff; } .container { width: 350px; position: absolute; transform: translate(-50%, -50%); top: 50%; left: 50%; } #card { position: relative; background-image: url("background1.svg"); width: 100%; padding: 30px 20px; border-radius: 10px; } #card img { display: block; width: 180px; max-height: 200px; position: relative; margin: 20px auto; } .hp { width: 80px; background-color: #ffffff; text-align: center; padding: 8px 0; border-radius: 30px; margin-left: auto; font-weight: 400; } .poke-name { text-align: center; font-weight: 600; } .types { display: flex; justify-content: space-around; margin: 20px 0 40px 0; } .hp span, .types span { font-size: 12px; letter-spacing: 0.4px; font-weight: 600; } .types span { padding: 5px 20px; border-radius: 20px; color: #ffffff; } .stats { display: flex; align-items: center; justify-content: space-between; text-align: center; } .stats p { color: #404060; } #btn { display: block; padding: 15px 60px; font-size: 18px; background-color: #101010; color: #ffffff; position: relative; margin: 30px auto; border: none; border-radius: 5px; } .button.dark-single { --background: none; --rectangle: #242836; --success: #4BC793; } .button.white-single { --background: none; --rectangle: #F5F9FF; --arrow: #275efe; --success: #275efe; --shadow: rgba(10, 22, 50, .1); } .button.dark { --background: #242836; --rectangle: #1C212E; --arrow: #F5F9FF; --text: #F5F9FF; --success: #2F3545; } .button { --background: #275efe; --rectangle: #184fee; --success: #4672f1; --text: #fff; --arrow: #fff; --checkmark: #fff; --shadow: rgba(10, 22, 50, .24); display: flex; overflow: hidden; text-decoration: none; -webkit-mask-image: -webkit-radial-gradient(white, black); background: var(--background); border-radius: 8px; box-shadow: 0 2px 8px -1px var(--shadow); transition: transform 0.2s ease, box-shadow 0.2s ease; } .button ul { margin: 0; padding: 16px 40px; list-style: none; text-align: center; position: relative; -webkit-backface-visibility: hidden; backface-visibility: hidden; font-size: 16px; font-weight: 500; line-height: 28px; color: var(--text); } .button ul li:not(:first-child) { top: 16px; left: 0; right: 0; position: absolute; } .button ul li:nth-child(2) { top: 76px; } .button ul li:nth-child(3) { top: 136px; } .button > div { position: relative; width: 60px; height: 60px; background: var(--rectangle); } .button > div:before, .button > div:after { content: ""; display: block; position: absolute; } .button > div:before { border-radius: 1px; width: 2px; top: 50%; left: 50%; height: 17px; margin: -9px 0 0 -1px; background: var(--arrow); } .button > div svg { display: block; position: absolute; width: 20px; height: 20px; left: 50%; top: 50%; margin: -9px 0 0 -10px; fill: none; z-index: 1; stroke-width: 2px; stroke: var(--arrow); stroke-linecap: round; stroke-linejoin: round; }</style>');


  JsBarcode("#barcode", obj.cardData[0].id, {
    format: "msi",
    lineColor: obj.cardData[0].primaryColor,
    width: 2,
    height: 50,
    background:	"rgb(255 255 255 / 0%)",
    displayValue: false,
  });

  var canvasPromise  = html2canvas(document.querySelector("#select"),
                      { allowTaint: true, useCORS: true}); 
  canvasPromise.then(function(canvas) {
    canvas.id = "mycanvas";
    document.body.appendChild(canvas);
    console.log(canvas); 
    document.getElementById("card").remove();
    console.log(canvas.toDataURL('image/png'));
    var link = document.createElement('a');
    link.download = 'fideltycard'+obj.cardData[0].name+"-"+obj.cardData[0].surname+'.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });

  }



/*
function download() {
	document.getElementById("buttonTop").style.visibility = "hidden";
	var canvasPromise  = html2canvas(document.querySelector("#select"),
                     { allowTaint: true, useCORS: true}); 
canvasPromise.then(function(canvas) {
	canvas.id = "mycanvas";
    console.log(canvas); 
    console.log(canvas.toDataURL('image/png'));
    var link = document.createElement('a');
    link.download = 'filename.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
	document.getElementById("buttonTop").style.visibility = "unset";
  });
}

document.write('<div id="buttonTop"style="background-color: white; position: fixed; margin-top: 50px; left: 50%; -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%);"> <a class="button loading" style="width: fit-content;"> <ul> <li><button onclick="download()" style="border-style: unset; background: none; color: white; font-size: 18px; cursor: pointer;"> Download </button></li> </ul> <div> <svg viewBox="0 0 24 24"><path d="M 4,12 C 4,12 12,20 12,20 C 12,20 20,12 20,12"></path></svg> </div> </a> </div>');
*/