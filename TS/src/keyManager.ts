export class KeyManager{
    static keyPre:boolean[]=Array<boolean>(256).fill(false);
    static keyNow:boolean[]=Array<boolean>(256).fill(false);
    static keyNext:boolean[]=Array<boolean>(256).fill(false);
    static key: { [key: string]: integer; } = {};

    static mousePre:boolean=false;
    static mouseNow:boolean=false;
    static mouseNext:boolean=false;

    static update(){
        KeyManager.keyPre=KeyManager.keyNow.slice(0, KeyManager.keyNow.length);
        KeyManager.keyNow=KeyManager.keyNext.slice(0, KeyManager.keyNext.length);
        KeyManager.mousePre=KeyManager.mouseNow;
        KeyManager.mouseNow=KeyManager.mouseNext;
    }

    static isPressed(keycode:number) {
        return KeyManager.keyNow[keycode];
    }
    static isPress(keycode:number) {
        return KeyManager.keyNow[keycode]&&!KeyManager.keyPre[keycode];
    }
    static onPressed(keycode:number) {
        return KeyManager.keyPre[keycode]&&KeyManager.keyNow[keycode];
    }
    static onReleased(keycode:number) {
        return KeyManager.keyPre[keycode]&&!KeyManager.keyNow[keycode];
    }

    static mouseDown() {
        return KeyManager.mouseNow;
    }
    static isDown() {
        return KeyManager.mouseNow&&!KeyManager.mousePre;
    }
    static onDown() {
        return KeyManager.mousePre&&KeyManager.mouseNow;
    }
    static onMouseReleased() {
        return KeyManager.mousePre&&!KeyManager.mouseNow;
    }

    static init(){
        for(let i=0;i<26;i++){
            KeyManager.key[String.fromCharCode(i+97)] = i+65; 
        }
        for(let i=0;i<10;i++){
            KeyManager.key[String.fromCharCode(i+48)] = i+48; 
        }
        KeyManager.key["space"] = 32; 
        KeyManager.key["enter"] = 13; 
        KeyManager.key["back_space"] = 8; 
        KeyManager.key["delete"] = 46; 
        KeyManager.key["shift"] = 16; 
        KeyManager.key["ctrl"] = 17; 
        KeyManager.key["alt"] = 18; 
        KeyManager.key["escape"] = 243; 
        KeyManager.key["left"] = 37; 
        KeyManager.key["up"] = 38; 
        KeyManager.key["right"] = 39; 
        KeyManager.key["down"] = 40; 

        document.addEventListener('keydown', (event) =>{
            KeyManager.keyNext[event.keyCode]=true;
            //console.log("press:"+event.keyCode);
        });
         
        document.addEventListener('keyup', (event) => {
            KeyManager.keyNext[event.keyCode]=false;
            //console.log("up:"+event.keyCode);
        });
        document.addEventListener('mousedown', (event) =>{
            KeyManager.mouseNext=true;
            //console.log("press:"+event.keyCode);
        });
         
        document.addEventListener('mouseup', (event) => {
            KeyManager.mouseNext=false;
            //console.log("up:"+event.keyCode);
        });
    }
}
