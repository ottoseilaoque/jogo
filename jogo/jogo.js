let vida = 50 //variavel global que declara a vida do jogador
let inventario = []//variavel global que guarda os itens do jogo
let historia = 1//variavel global que faz a historia do jogo andar
alert("Vamos começar a historia de Mahboubeh Barbari Yharfi")


let continuar = true

while (continuar != false) { //While para determinar quando o jogo acaba
    let menu = (Number(prompt('O que deseja fazer: \n (1) Historia \n (2) Checar status \n (3) Desistir \n (4) Ultimo checkpoint'))) // Faz uma pergunta ao jogador

    switch (menu) {
        case 1: //Primeira opção do menu
            primeira()
            break
        case 2: //Segunda opção do menu
            segunda() 
            break
        case 3: //Terceira opção do menu
            alert("Você desistiu de jogar")
            alert("Mesmo assim, obrigado por jogar")
            alert("Feito por: Otto Seibt Cambôa")
            continuar = false // Encerra o codigo
            break
        case 4: //Quarta opção do menu
            alert("Você voltou ao ultimo checkpoint")
            alert("Você ganhou 1 de vida")
            vida += 1 // Aumenta a vida do jogador
            historia-- // Diminue a variavel historia
            inventario.pop() //Remove um item do inventario
            break

    }
    function segunda() { //Essa função mostra os status do personagem, sua vida e seu inventario e retorna para o menu
        alert("Sua vida é: " + vida)
        alert("No seu inventario tem os itens: " + inventario)
        menu
    }

    function primeira() { // Essa função controla o decorrer da historia do jogo


        if (historia == 1) { // Verifica qual parte da historia será reproduzida
            alert("Você é uma mulher iraniana chamada Mahboubeh Barbari Yharfi")
            alert("Você e sua filha acabarem de sair de seu pais de origem para morrar na alemanha")
            let pergunta1 = Number(prompt("Sua filha está na cozinha o que você quer fazer: \n(1) Comprimentar ela e sair \n(2) Tomar café com ela \n(3) Mandar ela lavar louça")) // Faz uma pergunta ao jogador


            if (pergunta1 == 1) { // Primeira opção da primeira pergunta
                alert("Você abraça a sua filha e a deseja um bom dia, pede para ela lavar a louça e você sai de casa")
                alert("Você ganhou 5 de vida")
                vida += 5 // Aumenta a vida do jogador
                historia++ // Aumenta a variavel historia
            } else if (pergunta1 == 2) { // Segunda opção da primeira pergunta
                alert("Você para e toma café da manha com ela, pede para ela lavar a louça e depois você sai de casa")
                alert("Você ganhou 10 de vida")
                vida += 10 // Aumenta a vida do jogador
                historia++ // Aumenta a variavel historia
            } else { // Terceira opção da primeira pergunta
                alert("Você nem deu bom dia para a sua filha e ja mandou ela lavar a louça")
                alert("Ela não gostou disso")
                alert("Você perdeu 10 de vida")
                vida -= 10 // Diminue a vida do jogador
                historia++ // Aumenta a variavel historia
            }
        }
        else if (historia == 2) { // Verifica qual parte da historia sera reproduzida
            alert("Depois de você sair de casa, você começa a ir em direção ao ginasio")
            alert("No caminho você encontra um morador de rua")
            let pergunta2 = Number(prompt("O que você faz: \n(1) Dar dinheiro para ele \n(2) Chutar o morador de rua \n(3) Ignorar ele e ir embora")) // Faz uma pergunta ao jogador

            if (pergunta2 == 1) { // Primeira opção da segunda pergunta
                alert("Você dá dinheiro para o morador de rua ele está feliz e te da um presente")
                alert("Você ganhou 5 de vida ")
                alert("Você ganhou o item: empatia")
                inventario.push("empatia") // Coloca um item no inventario
                vida += 5 // Aumenta a vida do jogador
                historia++ // Aumenta a variavel da historia
            }
            else if (pergunta2 == 2) { // Segunda opção da segunda pergunta
                alert("Por algum motivo, você chutou o morador de rua")
                alert("Quem faria isso ?")
                alert("Você perdeu 10 de vida")
                vida -= 10 // Diminue a vida do jogador
                historia++ // Aumenta a variavel da historia
            }
            else { // Terceira opção da segunda pergunta
                alert("Você ignorou o morador de rua e continuo andando")
                inventario.push("ignorou o morador de rua") // Coloca um item no inventario
                historia++ // Aumenta a variavel da historia
            }
        }
        else if (historia == 3) {  // Verifica qual parte da historia sera reproduzida
            alert("Você chegou no ginasio")
            alert("Você encontra seu treinador")
            let pergunta3 = Number(prompt("Seu treinador pergunta o você quer fazer: \n(1) Levantar peso \n(2) Treinar golpes \n(3) Converçar com ele")) // Faz uma pergunta ao jogador

            if (pergunta3 == 1) { // Primeira opção da terceira pergunta
                alert("Você levanta peso")
                alert("Você ganhou 5 de vida")
                vida += 5 // Aumenta a vida do jogador
                historia++ // Aumenta a variavel da historia
            }
            else if (pergunta3 == 2) { // Segunda opção da terceira pergunta
                alert("Você treina golpes")
                alert("Você ganhou 10 de vida")
                vida += 10 // Aumenta a vida do jogador
                historia++ // Aumenta a variavel da historia
            }
            else { // Terceira opção da terceira pergunta
                alert("Você converçou com seu treinador")
                alert("Treinador: \n Seu desepenho nos ultimos dias está sendo muito bons Mahboubeh, continue sempre assim.")
                alert("Você ganhou o item: determinação")
                alert("Você ganhou 5 de vida")
                inventario.push("determinação") // Coloca um item no inventario
                vida += 5 // Aumenta a vida do jogador
                historia++ // Aumenta a variavel da historia
            }

        }
        else if (historia == 4) { // Verifica qual parte da historia sera reproduzida
            alert("Após o treino, você começa voltar para casa")
            alert("No caminho você encontra o mesmo morador de rua de antes")
            alert("Só que destá vez ele está com outros 5 moradores de rua")
            if (inventario.includes("empatia")) {
                alert("O morador de rua de antes te reconhece como a mulher de antes")
                alert("Ele o agradece por mais cedo")
                alert("Você ganhou 5 de vida")
                vida += 5 // Aumenta a vida do jogador
                historia++ // Aumenta a variavel historia
            }

            else if (inventario.includes("ignorou o morador de rua")) {
                alert("O morador de rua de antes te reconhece como a mulher de antes")
                alert("Assim como você fez antes, ele e os outros moradores de rua te ignoram")
                vida -= 10 // Diminue a vida do jogador
                inventario.splice(0, 1) // Remove um item do inventario
                historia++ // Aumenta a variavel historia

            }
            else {
                alert("O morador de rua te reconhece como a mulher que chutou ele")
                alert("Ele manda os outros moradores de rua te chutarem por antes")
                alert("Você perdeu 10 de vida")
                vida -= 10 // Diminue a vida do jogador
                historia++ // Aumenta a variavel historia
            }
        }
        else if (historia == 5) { // Verifica qual parte da historia sera reproduzida
            alert("Depois de encontrar os moradores rua você volta para casa")
            alert("Quando você chega em casa, sua filha ainda não lavou a louça")
            let pergunta4 = Number(prompt("O que você faz: \n(1) lava a louça você mesmo \n(2) Castigo \n(3) Pergunta por que ela não lavou a louça")) // Faz uma pergunta ao jogador
            if (pergunta4 == 1) {
                alert("Decepicionada com a sua filha, você começa a lavar a louça")
                alert("Você perdeu 2 de vida")
                vida -= 2 // Aumenta a vida do jogador
                historia++ // Aumenta a variavel historia
            }
            else if (pergunta4 == 2) {
                alert("Após encontrar as louças ainda sujas, você entra no quarto de sua filha e a coloca de castigo e manda ela lavar a louça na hora")
                historia++ // Aumenta a variavel historia
            }
            else {
                alert("Você entra no quarta de sua filha e pergunta por que ela não lavou a louça")
                alert("Filha: Me desculpa mãe, eu estava ocupada fazendo tarefas da escola, eu não tive tempo")
                let perguntaF = prompt("Filha: Você me perdoa ? (S/N)") // Faz uma pergunta ao jogador
                if (perguntaF == "S") { // Primeira opção da pergunta de sua filha
                    alert("Você decide perdoar a sua filha")
                    alert("Ela te da um abraço e vai lavar a louça depois disso")
                    alert("Você ganhou 20 de vida")
                    vida += 20 // Aumenta a vida do jogador
                    historia++ // Aumenta a variavel historia
                }
                else { // Segunda opção da pergunta da filha
                    alert("Você não perdoa a sua filha")
                    alert("Ela te manda a merda por não entender ela e você a coloca de castigo")
                    alert("Você perdeu 20 de vida")
                    vida -= 20 // Diminue a vida do jogador
                    historia++ // Aumenta a variavel historia
                }

            }

        }
        else if (historia == 6) { // Verifica qual parte da historia sera reproduzida
            alert("Depois das louças, você decide tomar banho e ir dormir")
            alert("No dia seguinte você acorda com uma mensagem do seu treinador")
            alert("Treinador: \n Mahboubeh, você foi convidada a participar das olimpiadas de 2024, no time dos refugiados !")
            alert("Um representante do time vira amanha para te ver treinando e te convidar formalmente para as olimpiadas")
            alert("Use esse dia para descansar para mostrar seu treinamento totalemente descansada")
            let pergunta5 = Number(prompt("O que você deseja fazer hoje: \n(1) Ir treinar  \n(2) Sair para fazer alguma coisa \n(3) Descansar em casa")) // Faz uma pergunta ao jogador
            if (pergunta5 == 1) { // primeira opção da quinta pergunta
                alert("Você decide ir treinar")
                alert("Você vai para o ginasio e treina a tarde inteira")
                alert("Depois do treino você vai para casa e vai dormir")
                alert("Você ganhou o item: cansaço")
                alert("Você perdeu 1 de vida")
                inventario.push("cansaço") // Coloca um item no inventario
                vida -= 1 // Diminue a vida do jogador
                historia++ // Aumenta a variavel historia
            }
            else if (pergunta5 == 2) { // segunda opção da quinta pergunta
                alert("Você decide sair para fazer alguma coisa")
                alert("Você decide dar uma caminhada e tomar um café")
                alert("Depois do café você vai a um parque, o parque está praticamente vazio")
                alert("É apenas você e a natureza")
                alert("Você se deita na grama e apenas aprecia o momento")
                alert("Você cai no sono e acorda apenas quando está de noite, você volta para casa abraça a sua filha e vai dormir novamente")
                alert("Você ganhou o item: paz de espirito")
                alert("Voce ganhou 20 de vida")
                inventario.push("paz de espirito") // Coloca um item no inventario
                vida += 20 // Aumenta a vida do jogador
                historia++ // Aumenta a variavel historia

            }
            else { // terceira opção da quinta pergunta
                alert("Você decide ficar em casa e descansar")
                alert("Você se senta no sofa e começa a assitir uma serie durante o dia interio")
                alert("Depois disso você vai para o quarto e começa a dormir")
                alert("Você ganhou o item: descanso")
                alert("Você ganhou 5 de vida")
                inventario.push("descanso") // Coloca um item no inventario
                vida += 5 // Aumenta a vida do jogador
                historia++ // Aumenta a variavel historia
            }
        }
        else if (historia == 7) { // Verifica qual parte da historia sera reproduzida
            alert("No dia seguinte, você toma cafe da manha com sua filha e vai direto para o ginasio")
            alert("Lá você encontra o seu treinador e o representante do time de refugiados")
            if (inventario.includes("descanso")) { // Verifica se o inventario tem um item especifico para progredir a historia
                alert("O representante pede para você fazer uma demonstração de golpes com o seu treinador")
                alert("Como você estava descansada você executou os golpes corretamentes")
                alert("Você passou no teste")
                alert("Você ganhou 20 de vida")
                vida += 20 // Aumenta a vida do jogador
                historia++ // Aumenta a variavel historia

            }
            else if (inventario.includes("paz de espirito")) { // Verifica se o inventario tem um item especifico para progredir a historia
                alert("O representante pede para você fazer uma demonstração de golpes com o seu treinador")
                alert("Como você alcansou a paz de espirito você executou os golpes com perfeição")
                alert("O representante praticamente implorou para você entrar no time")
                alert("Você passou no teste")
                alert("Você ganhou 30 de vida")
                vida += 30 // Aumenta a vida do jogador
                historia++ // Aumenta a variavel historia
            }
            else { // Verifica se o inventario tem um item especifico para progredir a historia
                alert("O representante pede para você fazer uma demonstração de golpes com o seu treinador")
                alert("Como você estava cançada você não conseguiu executar os golpes corretamente")
                alert("Por isso você não foi aprovado para o time dos refugiados")
                alert("Esse é o fim")
                alert("Obrigado por jogar")
                alert("Feito por: Otto Seibt Cambôa")
                continuar = false // Encerra o codigo

            }

        }
        else if (historia == 8) { // Verifica qual parte da historia sera reproduzida
            alert("Os dias vão se passando depos do teste")
            alert("Você continua treinando para as olimpiadas toda semana")
            let pergunta6 = Number(prompt("O que você quer focar nos treinos: \n(1) Defesa \n(2) Ataque")) // Faz uma pergunta ao jogador
            if (pergunta6 == 1) { // primeira opção da quinta pergunta
                alert("Você decide focar na sua defesa")
                alert("Graças aos seus treinos de defesa e seus treinos de levantamento de peso, sua defesa fica extremamente eficaz")
                alert("Você se sente preparada para as olimpiadas de 2024")
                alert("Você ganhou o item: confiança") 
                inventario.push("confiança") // Coloca um item no inventario
                historia++ // Aumenta a variavel historia
            }
            else { // segunda opção da sexta pergunta
                alert("Você decide focar na sua ofensiva")
                alert("Graças aos seus treinos de ataque e sus treinos de levantamento de peso, seus ataques ficam formidaveis")
                alert("Você se sente preparada para as olimpiadas de 2024")
                alert("Você ganhou o item: confiança")
                inventario.push("confiança") // Coloca um item no inventario
                historia++ // Aumenta a variavel historia
            }
        }
        else { // Verifica qual parte da historia sera reproduzida
            alert("Depois de muito tempo treinando...")
            if (vida > 70 && inventario.includes("confiança")) { // Verifica se o inventario tem um item especifico e se a vida está acima de 70 para progredir a historia
                alert("Você finalmente chegou em paris para as olimpiadas")
                alert("Todo o seu esforço valeu a pena")
                alert("Pois você chegou aqui, parabens !")
                alert("Esse é o fim")
                alert("Obrigado por jogar")
                alert("Feito por: Otto Seibt Cambôa")
                continuar = false // Encerra o codigo
            }
            else { // Verifica se o inventario tem um item especifico e se a vida está acima de 70 para progredir a historia
                alert("Por mais que você tenha passado no time, você não se classificou para as olimpiadas")
                alert("Todo o seu esforço foi em vão")
                alert("Esse é o fim")
                alert("Obrigado por jogar")
                alert("Feito por: Otto Seibt Cambôa")
                continuar = false // Encerra o codigo
            }

        }
    }
}
