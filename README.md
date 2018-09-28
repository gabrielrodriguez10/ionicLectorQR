# ionicLectorQR

- Se deben ejecutar los pasos del proyecto1 de Ionic.

- Este proyecto ejecuta una aplicacion que se debe exportar en android studio, la cual permite leer codigos QR; por otro lado se manejan las paginas de la aplicacion de manera general modificando el homepage.

- Se instala la libreria Barcode scanller de la documentacion de Ionic https://ionicframework.com/docs/native/
    * ionic cordova plugin add phonegap-plugin-barcodescanner
    * npm install --save @ionic-native/barcode-scanner

- En el home.ts se agrega la validacion para hacer uso de la libreria nativa de lector de codigos QR
          
       scan(){
           if( !this.platform.is('cordova') ){
               console.log("en desktop");
               return;
           }
           this.barcodeScanner.scan().then( (barcodeData) => {
               console.log("result:", barcodeData.text );
               console.log("format:", barcodeData.format );
               console.log("cancelled:", barcodeData.cancelled );
           }, (err) => { console.error("Error: ", err ); });
       }

- En el archivo app.module.ts se agrega la libreria BarcodeScanner
    * import { BarcodeScanner } from '@ionic-native/barcode-scanner';
    * Se agrega BarcodeScanner en providers

- Permite crear la carpeta de android dentro del proyecto para posteriormente importar el proyecto en Android Studio
    * ionic cordova platform add android

- Construye el proyecto Android por medio de Ionic y Cordova
    * ionic cordova build android

- la construccion del proyecto para Android genera una carpeta llamada platforms la cual no se debe colocar en el archivo .gitignore
