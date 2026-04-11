<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>Rede Social Java</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<style>
body{
    background: #f2f2f2;
}
.post{
    background: #fff;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 15px;
}
.profile-img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
</style>
</head>

<body>

<div class="container mt-4">

    <h3>Mini Rede Social</h3>

    <!-- FORM -->
    <div class="post">
        <form action="post" method="post">
            <textarea name="post" class="form-control mb-2" placeholder="O que você está pensando?" required></textarea>
            <button class="btn btn-primary w-100">Publicar</button>
        </form>
    </div>

    <!-- POSTS -->
    <%
        java.util.List<String> posts = (java.util.List<String>) request.getAttribute("posts");
        if (posts != null) {
            for (String p : posts) {
    %>
        <div class="post">
            <div class="d-flex align-items-center mb-2">
                <img src="https://via.placeholder.com/40" class="profile-img me-2">
                <strong>Usuário</strong>
            </div>

            <p><%= p %></p>
        </div>
    <%
            }
        }
    %>

</div>

</body>
</html>