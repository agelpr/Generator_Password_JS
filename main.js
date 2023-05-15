const passwordBox = document.getElementById("password");
const lenght = 20;
const upperCase = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnñopqrstuvwxyz";
const number = "0123456789"
const symbol = "!#$%&/()=?¡@*-+¡'}{[]_|"
const allChrs = upperCase + lowerCase + number + symbol;

    function generatePassword(){
        let password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += symbol[Math.floor(Math.random() * symbol.length)];

        while(lenght > password.length){
            password += allChrs[Math.floor(Math.random() * allChrs.length)];
        }
        passwordBox.value = password;
        }

        function copiarPassword(){
            passwordBox.select();
            document.execCommand("copy");
        }