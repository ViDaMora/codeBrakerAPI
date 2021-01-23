let cod;
exports.cod=cod;

exports.codeBreaker= async(req,res)=>{
try{
    console.log(cod + ""+ req.params.usercode)
    let result=""
    for (let index = 0; index < cod.length; index++) {
    const characterA = req.params.usercode.substr(index,1);
    const characterCod= cod.substr(index,1);
    if (characterA == characterCod) {
        result= result + "X" 
    }else{
        let find = cod.indexOf(characterA)
        if (find != -1) {
            result= result + "-"
        }
   }
}
    res.json(result);

}
catch(error){
    res.json(error);


}


}


exports.generate= async(req,res)=>{
    try{
        var numbers = [0,1,2,3,4,5,6,7,8,9];

        for (var i = numbers.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
        let randomCod = numbers.slice(0,4).join('');
        let cod = randomCod.toString()
        res.json(cod);
    
    }
    catch{
    
        res.json(error);
    }
    }
    


