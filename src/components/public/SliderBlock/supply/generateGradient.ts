export const generateGradient = ():string =>  {
    //create array
    let hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];

    function populate(a:string) {
        //create gradient color
        for (let i = 0; i < 6; i++) {
            let x = Math.round(Math.random() * 14);
            let y = hexValues[x];
            a += y;
        }
        return a;
    }

    let newColor1 = populate('#');
    let newColor2 = populate('#');

    //create random angle
    let angle:number = Math.round(Math.random() * 360);

    //return linear gradient color css
    return ("linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")")

}