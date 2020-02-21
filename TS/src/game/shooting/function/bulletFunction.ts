export class BulletFunction{
    static outFrameUpdate(frameWidth:integer,frameHeight:integer,x:integer,y:integer,sizex?:number,sizey?:number):boolean{
        if(sizex==null)
            sizex=0;
        if(sizey==null)
            sizey=0;
        return (x+sizex/2<0||y+sizey/2<0||x-sizex/2>frameWidth||y-sizey/2>frameHeight);
    }
}