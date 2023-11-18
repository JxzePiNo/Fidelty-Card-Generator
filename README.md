# Fidelty-Card-Generator

<h2>Introduzione</h2>
The fidelityCardGenerator library is a simple yet powerful tool for generating customized loyalty cards using JSON data. 

This documentation will guide you through the necessary steps to integrate fidelityCardGenerator into your HTML page and generate loyalty cards. Please follow the instructions below carefully.

<h2>Prerequisiti</h2>
Make sure you have downloaded the script.js file provided with the library.<br>
Make sure you have downloaded the relevant backgrounds you want to use for the loyalty cards.<br>

<h2>Installazione</h2>
To use FidelityCardGenerator, you need to have both the script and downloaded backgrounds in the same folder.
Subsequently, it's necessary to include the Font link inside the head section, and the script.js and other libraries we will use within the body of your HTML document:<br>

```html
<head>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet"/>
</head>

<body>
  <script src="https://cdn.jsdelivr.net/jsbarcode/3.3.20/JsBarcode.all.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
  <script src="script.js"></script>
<body>
```

A complete example of correct usage is as follows:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Abbonamento Contrada Refenero </title>
    <!-- Google Fonts -->
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
      rel="stylesheet"/>
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/jsbarcode/3.3.20/JsBarcode.all.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script src="script.js"></script>
    <script>
      var fidelityCardData = '{"cardData" : [' + '{'+
        '"name":"Iacopo" , '+
        '"surname":"Paolucci", '+
        '"id":"00002", '+
        '"backgroundColor":"light-blue", '+
        '"primaryColor":"#000000", '+
        '"logo":"logoRefenero.png" }]}';
      window.onload = generateFideltyCard(fidelityCardData);</script>
  </body>
</html>

```

Finally, to generate the card, simply call the function. ``` generateFideltyCard(fidelityCardData) ``` using the onload method of the windows object.  
``` html
<script>
  window.onload = generateFideltyCard(fidelityCardData);
</script>
```


<h2>Tabella parametri JSON</h2>

| **Parameter**   | **Expected**                                                              |
|-----------------|---------------------------------------------------------------------------|
| name            | "Mario"                                                                   |
| surname         | "Rossi"                                                                   |
| id              | "123456"                                                                  |
| backgroundColor | "white"/"black"/"gray"/"blue"/"light-blue"/"red"/"purple"/"pink"/"yellow" |
| primaryColor    | "#000000"                                                                 |
| logo            | "logoFactory.png"                                                         |



<img src="/result/result.jpeg" alt="image" 
        width="500" 
        height="auto" 
        style="display: block; margin: 0 auto" />
