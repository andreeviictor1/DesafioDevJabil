
$(document).ready(function () {
    $("#loginBtn").click(function () {
        const email = $("#loginEmail").val();
        const senha = $("#loginSenha").val();

        $.ajax({
            url: "http://localhost:5227/api/Users/login",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ email: email, senha: senha }),
            success: function (response) {
                localStorage.setItem("token", response.token);
                $("#auth").hide();
                $("#userManagement").show();
            },
            error: function (xhr) {
                alert("Erro: " + xhr.responseJSON.title);
            }
        });
    });

    // Função para formatar e exibir os dados do usuário
    function displayUser(user) {
        const dataDeCadastro = new Date(user.dataDeCadastro);
        const dataFormatada = dataDeCadastro.toLocaleString('pt-BR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        return `
            <div class='alert alert-info'>
                ID: ${user.id}<br>
                Nome: ${user.nome}<br>
                Email: ${user.email}<br>
                Data de Cadastro: ${dataFormatada}<br>
            </div>`;
    }

    $("#getUsersBtn").click(function () {
        const token = localStorage.getItem("token");

        $.ajax({
            url: "http://localhost:5227/api/Users",
            type: "GET",
            headers: { Authorization: "Bearer " + token },
            success: function (users) {
                let userList = "<div class='list-group'>";
                users.forEach(user => {
                    userList += `<div class='list-group-item'>${displayUser(user)}</div>`;
                });
                userList += "</div>";
                $("#result").html(userList).show();
            },
            error: function (xhr) {
                alert("Erro ao obter usuários: " + xhr.responseJSON.title);
            }
        });
    });

    $("#getUserByIdBtn").click(function () {
        const userId = prompt("Digite o ID do usuário:");
        const token = localStorage.getItem("token");

        $.ajax({
            url: `http://localhost:5227/api/Users/${userId}`,
            type: "GET",
            headers: { Authorization: "Bearer " + token },
            success: function (user) {
                $("#result").html(displayUser(user)).show();
            },
            error: function (xhr) {
                alert("Erro ao obter usuário: " + xhr.responseJSON.title);
            }
        });
    });

    $("#registerShowBtn").click(function () {
        $("#auth").hide();
        $("#register").show();
    });

    $("#backToLoginBtn").click(function () {
        $("#register").hide();
        $("#auth").show();
    });

    $("#registerBtn").click(function () {
        const email = $("#registerEmail").val();
        const nome = $("#registerNome").val();
        const senha = $("#registerSenha").val();
    
        $.ajax({
            url: "http://localhost:5227/api/Users/register",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ nome: nome, email: email, senha: senha }),
            success: function (response) {
                alert("Usuário registrado com sucesso!");
                $("#register").hide();
                $("#auth").show(); // Volta ao login após registro
            },
            error: function (xhr) {
                let errorMessage = "Erro ao registrar usuário.";
                if (xhr.responseJSON && xhr.responseJSON.title) {
                    errorMessage = xhr.responseJSON.title; // Usa o título se disponível
                }
                alert(errorMessage);
            }
        });
    });
    

    $("#updateUserBtn").click(function () {
        const userId = prompt("Digite o ID do usuário a ser atualizado:");
        const nome = prompt("Digite o novo nome:");
        const email = prompt("Digite o novo email:");
        const senha = prompt("Digite a nova senha:");

        const token = localStorage.getItem("token");

        $.ajax({
            url: `http://localhost:5227/api/Users/${userId}`,
            type: "PUT",
            headers: { Authorization: "Bearer " + token },
            contentType: "application/json",
            data: JSON.stringify({ nome: nome, email: email, senha: senha }),
            success: function (response) {
                alert("Usuário atualizado com sucesso!");
            },
            error: function (xhr) {
                alert("Erro ao atualizar usuário: " + xhr.responseJSON.title);
            }
        });
    });

    $("#deleteUserBtn").click(function () {
        const userId = prompt("Digite o ID do usuário a ser deletado:");
        const token = localStorage.getItem("token");

        $.ajax({
            url: `http://localhost:5227/api/Users/${userId}`,
            type: "DELETE",
            headers: { Authorization: "Bearer " + token },
            success: function (response) {
                alert("Usuário deletado com sucesso!");
            },
            error: function (xhr) {
                alert("Erro ao deletar usuário: " + xhr.responseJSON.title);
            }
        });
    });
});
