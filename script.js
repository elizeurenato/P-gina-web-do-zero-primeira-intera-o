const botoes = document.querySelectorAll("button");

        botoes.forEach(botao => {
            let curtiu = false;

            botao.addEventListener("click", () => {
                let texto = botao.querySelector("span");
                if (curtiu === false) {
                    texto.textContent++;
                    curtiu = true;
                } else {
                    texto.textContent--;
                    curtiu = false;
                }
            });
        });