export const getCrbyCode = (code: string,price:string|number) => {
    let _price= parseInt(price.toString())
    switch (code) {
        case "qa":
            return _price + " ر.ق";
        case "jo":
            return (_price / 4.5).toFixed(2) + " د.أ "
        case "kw":
            return  (_price / 12.3).toFixed(2) +"د.ك";
        case "ae":
            return  (_price) +" د.ا " 
        case "sa":
            return  (_price ) +" ر.س "
    }
}