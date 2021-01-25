let cod;

let codeBreaker = async (req, res) => {
    try {
        let result = ""
        for (let index = 0; index < this.cod.length; index++) {
            const characterA = req.params.usercode.substr(index, 1);
            const characterCod = this.cod.substr(index, 1);
            if (characterA == characterCod) {
                result = result + "X"
            } else {
                let find = this.cod.indexOf(characterA)
                if (find != -1) {
                    result = result + "-"
                }
            }
        }
        res.json(result);
    }
    catch (error) {
        res.json(error);

    }
}

let generate = async (req, res) => {
    try {
        var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (var i = numbers.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
        let randomCod = numbers.slice(0, 4).join('');
        let cod = randomCod.toString()
        this.cod = cod;
        let result = cod;
        res.json(result);
    }
    catch {
        res.json(error);
    }
}

module.exports = {codeBreaker, generate}

