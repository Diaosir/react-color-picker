const checkHex = (hex) => {
    const hexReg = /#([a-f0-9]{3}){1,2}\b/i; //check hex is valid
    return hexReg.test(hex);
}
const checkRgba = (rgba) => {
    return /^(rgb|RGB|rgba|RGBA)/.test(rgba);
}
/**
 * hex 转城 rgba
 */
export const hex2rgba = (hex) => {
    let r = 0, g = 0, b = 0, a = 1;
    if(!checkHex(hex)){
        return hex;
    }
    hex = hex.toLowerCase();
    if(hex.length == 4){
        hex = hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    }
    console.log("a:"+hex)
    r = parseInt("0x" + hex.slice(1,3));
    g = parseInt("0x" + hex.slice(3,5));
    b = parseInt("0x" + hex.slice(5,7));

    return "rgba("+ r + "," + g +"," + b + "," + a + ")";
}
/**
 * rga 转 hex
 */
const rgb2hex = (rgb) => {
    if(!checkRgba(rgb)){
        return rgb;
    }
    rgb = rgb.toLowerCase();
    let result = "#", hex = ""
    let rgbArr = rgb.replace(/(\(|\)|[rgba])*/g, "").split(",");
    rgbArr.forEach((item, index) => {
        if(index == 3){
            return 
        }
        hex = Number(item).toString(16);
        console.log(hex)
        hex = hex.length == 1 ? 0 + "" + hex : hex;
        result += hex;
    })
    console.log(result)
    return result;
}
export default {
    hex2rgba,
    rgb2hex,
    checkHex
}
