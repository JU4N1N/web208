function limitarNumero(input) {
    if (input.value.length > 12) {
        input.value = input.value.slice(0, 12);
    }
}

function enviar(){
    const tel = document.getElementById('numTel').value.trim();
    const sms = encodeURIComponent(document.getElementById('mensaje').value.trim());
        if(tel ===   ''|| sms === ''){
            alert("Aquí no hay nada");
        }else{
            const linkApi = `https://api.whatsapp.com/send?phone=${tel}&text=${sms}`;
            open(linkApi);
        }
}
