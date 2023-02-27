const signUp = () => {
    // e.preventDefault();
    const inputName = document.getElementById("input_name");
    const inputEmail = document.getElementById("input_email");
    console.log(inputName.value)

    if(inputName.value === "" || inputEmail.value === "") {
        alert("Não foi possível concluir o seu cadastro");
    } else {
        alert("Cadastro efetuado com sucesso!");
    }
} 