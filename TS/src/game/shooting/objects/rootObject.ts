import * as Phaser from "phaser";
export class RootObject {
    protected name:string;
    public rewind:integer;
    constructor(name?:string){
        this.rewind=1;
        this.name=name;
    }
    init(){

    }
    setUpdateMethod(f:(rew?:boolean)=>void){
        this.update=f;
    }
    
    setSize(w:integer,h:integer){
        
    }
    setPosition(x:integer,y:integer){
        
    }
    update(rew?:boolean){
        this.rewind=(rew==null||!rew)?1:-1;
    }
    remove(){
    }
}

