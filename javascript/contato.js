document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const sucesso = document.getElementById('sucesso');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                sucesso.style.display = 'block';
                form.reset();
            } else {
                alert("Erro ao enviar a mensagem.");
            }
        });
    });
});
