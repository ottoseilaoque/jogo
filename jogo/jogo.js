let vida = 50 //variavel global
let inventario = []//variavel global
let historia = 1
alert("Vamos começar a historia de Mahboubeh Barbari Yharfi")


let continuar = true

while (continuar != false) {
    let menu = (Number(prompt('O que deseja fazer: \n (1) Historia \n (2) Checar status \n (3) Desistir \n (4) Ultimo checkpoint')))
    switch (menu) {
        case 1:
            primeira()
            break
        case 2:
            segunda()
            break
        case 3:
            alert("Você desistiu de jogar")
            alert("Mesmo assim, obrigado por jogar")
            alert("Feito por: Otto Seibt Cambôa")
            continuar = false
            break
        case 4:
            alert("Você voltou ao ultimo checkpoint")
            alert("Você ganhou 1 de vida")
            vida += 1
            historia--
            inventario.pop()
            break

    }
    function segunda() {
        alert("Sua vida é: " + vida)
        alert("No seu inventario tem os itens: " + inventario)
        menu
    }

    function primeira() {


        if (historia == 1) {
            alert("Você é uma mulher iraniana chamada Mahboubeh Barbari Yharfi")
            alert("Você e sua filha acabarem de sair de seu pais de origem para morrar na alemanha")
            let pergunta1 = Number(prompt("Sua filha está na cozinha o que você quer fazer: \n(1) Comprimentar ela e sair \n(2) Tomar café com ela \n(3) Mandar ela lavar louça"))

            if (pergunta1 == 1) {
                alert("Você abraça a sua filha e a deseja um bom dia, pede para ela lavar a louça e você sai de casa")
                alert("Você ganhou 5 de vida")
                vida += 5
                historia++
            } else if (pergunta1 == 2) {
                alert("Você para e toma café da manha com ela, pede para ela lavar a louça e depois você sai de casa")
                alert("Você ganhou 10 de vida")
                vida += 10
                historia++
            } else {
                alert("Você nem deu bom dia para a sua filha e ja mandou ela lavar a louça")
                alert("Ela não gostou disso")
                alert("Você perdeu 10 de vida")
                vida -= 10
                historia++
            }
        }
        else if (historia == 2) {
            alert("Depois de você sair de casa, você começa a ir em direção ao ginasio")
            alert("No caminho você encontra um mendigo todo fudido")
            let pergunta2 = Number(prompt("No caminho você encontra um mendigo todo fudido o que você faz: \n(1) Dar dinheiro para ele \n(2) Chutar o mendigo \n(3) Ignorar ele e ir embora"))

            if (pergunta2 == 1) {
                alert("Você dá dinheiro para o mendigo ele está feliz e te da um presente")
                alert("Você ganhou 5 de vida ")
                alert("Você ganhou o item: empatia")
                inventario.push("empatia")
                vida += 5
                historia++
            }
            else if (pergunta2 == 2) {
                alert("Por algum motivo, você chutou o mendigo")
                alert("Quem faria isso ?")
                alert("Você perdeu 10 de vida")
                vida -= 10
                historia++
            }
            else {
                alert("Você ignorou o mendigo e continuo andando")
                inventario.push("ignorou o mendigo")
                historia++
            }
        }
        else if (historia == 3) {
            alert("Você chegou no ginasio")
            alert("Você encontra seu treinador")
            let pergunta3 = Number(prompt("Seu treinador pergunta o você quer fazer: \n(1) Levantar peso \n(2) Treinar golpes \n(3) Converçar com ele"))
            if (pergunta3 == 1) {
                alert("Você levanta peso")
                alert("Você ganhou 5 de vida")
                vida += 5
                historia++
            }
            else if (pergunta3 == 2) {
                alert("Você treina golpes")
                alert("Você ganhou 10 de vida")
                vida += 10
                historia++
            }
            else {
                alert("Você converçou com seu treinador")
                alert("Treinador: \n Seu desepenho nos ultimos dias está sendo muito bons Mahboubeh, continue sempre assim.")
                alert("Você ganhou o item: determinação")
                alert("Você ganhou 5 de vida")
                inventario.push("determinação")
                vida += 5
                historia++
            }

        }
        else if (historia == 4) {
            alert("Após o treino, você começa voltar para casa")
            alert("No caminho você encontra o mesmo mendigo de antes")
            alert("Só que destá vez ele está com outros 5 mendigos")
            if (inventario.includes("empatia")) {
                alert("O mendigo de antes te reconhece como a mulher de antes")
                alert("Ele o agradece por mais cedo")
                alert("Você ganhou 5 de vida")
                vida += 5
                historia++
            }

            else if (inventario.includes("ignorou o mendigo")) {
                alert("O mendigo de antes te reconhece como a mulher de antes")
                alert("Assim como você fez antes, ele e os outros mendigos te ignoram")
                vida -= 10
                inventario.splice(0, 1)
                historia++

            }
            else {
                alert("O mendigo te reconhece como a mulher que chutou ele")
                alert("O mendigo chefe manda os outros mendigo te chutarem por antes")
                alert("Você perdeu 10 de vida")
                vida -= 10
                historia++
            }
        }
        else if (historia == 5) {
            alert("Depois de encontrar os mendigos você volta para casa")
            alert("Quando você chega em casa, sua filha ainda não lavou a louça")
            let pergunta4 = Number(prompt("O que você faz: \n(1) lava a louça você mesmo \n(2) Castigo \n(3) Pergunta por que ela não lavou a louça"))
            if (pergunta4 == 1) {
                alert("Decepicionada com a sua filha, você começa a lavar a louça")
                alert("Você perdeu 2 de vida")
                vida -= 2
                historia++
            }
            else if (pergunta4 == 2) {
                alert("Após encontrar as louças ainda sujas, você entra no quarto de sua filha e a coloca de castigo e manda ela lavar a louça na hora")
                historia++
            }
            else {
                alert("Você entra no quarta de sua filha e pergunta por que ela não lavou a louça")
                alert("Filha: Me desculpa mãe, eu estava ocupada fazendo tarefas da escola, eu não tive tempo")
                let perguntaF = prompt("Filha: Você me perdoa ? (S/N)")
                if (perguntaF == "S") {
                    alert("Você decide perdoar a sua filha")
                    alert("Ela te da um abraço e vai lavar a louça depois disso")
                    alert("Você ganhou 20 de vida")
                    vida += 20
                    historia++
                }
                else {
                    alert("Você não perdoa a sua filha")
                    alert("Ela te manda a merda por não entender ela e você a coloca de castigo")
                    alert("Você perdeu 20 de vida")
                    vida -= 20
                    historia++
                }

            }

        }
        else if (historia == 6) {
            alert("Depois das louças, você decide tomar banho e ir dormir")
            alert("No dia seguinte você acorda com uma mensagem do seu treinador")
            alert("Treinador: \n Mahboubeh, você foi convidada a participar das olimpiadas de 2024, no time dos refugiados !")
            alert("Um representante do time vira amanha para te ver treinando e te convidar formalmente para as olimpiadas")
            alert("Use esse dia para descansar para mostrar seu treinamento totalemente descansada")
            let pergunta5 = Number(prompt("O que você deseja fazer hoje: \n(1) Descansar em casa \n(2) Sair para fazer alguma coisa \n(3) Ir treinar"))
            if (pergunta5 == 1) {
                alert("Você decide ficar em casa e descansar")
                alert("Você se senta no sofa e começa a assitir uma serie durante o dia interio")
                alert("Depois disso você vai para o quarto e começa a dormir")
                alert("Você ganhou o item: descanso")
                alert("Você ganhou 5 de vida")
                inventario.push("descanso")
                vida += 5
                historia++
            }
            else if (pergunta5 == 2) {
                alert("Você decide sair para fazer alguma coisa")
                alert("Você decide dar uma caminhada e tomar um café")
                alert("Depois do café você vai a um parque, o parque está praticamente vazio")
                alert("É apenas você e a natureza")
                alert("Você se deita na grama e apenas aprecia o momento")
                alert("Você cai no sono e acorda apenas quando está de noite, você volta para casa abraça a sua filha e vai dormir novamente")
                alert("Você ganhou o item: paz de espirito")
                inventario.push("paz de espirito")
                historia++

            }
            else {
                alert("Você decide ir treinar")
                alert("Você vai para o ginasio e treina a tarde inteira")
                alert("Depois do treino você vai para casa e vai dormir")
                alert("Você ganhou o item: cansaço")
                alert("Você perdeu 1 de vida")
                inventario.push("cansaço")
                vida -= 1
                historia++
            }
        }
        else if (historia == 7) {
            alert("No dia seguinte, você toma cafe da manha com sua filha e vai direto para o ginasio")
            alert("Lá você encontra o seu treinador e o representante do time de refugiados")
            if (inventario.includes("descanso")) {
                alert("O representante pede para você fazer uma demonstração de golpes com o seu treinador")
                alert("Como você estava descansada você executou os golpes corretamentes")
                alert("Você passou no teste")
                alert("Você ganhou 20 de vida")
                vida += 20
                historia++

            }
            else if (inventario.includes("paz de espirito")) {
                alert("O representante pede para você fazer uma demonstração de golpes com o seu treinador")
                alert("Como você alcansou a paz de espirito você executou os golpes com perfeição")
                alert("O representante praticamente implorou para você entrar no time")
                alert("Você passou no teste")
                alert("Você ganhou 30 de vida")
                vida += 30
                historia++
            }
            else {
                alert("O representante pede para você fazer uma demonstração de golpes com o seu treinador")
                alert("Como você estava cançada você não conseguiu executar os golpes corretamente")
                alert("Por isso você não foi aprovado para o time dos refugiados")
                alert("Esse é o fim")
                alert("Obrigado por jogar")
                alert("Feito por: Otto Seibt Cambôa")
                continuar = false

            }

        }
        else if (historia == 8) {
            alert("Os dias vão se passando deposi do teste")
            alert("Você continua treinando para as olimpiadas toda semana")
            let pergunta6 = Number(prompt("O que você quer focar nos treinos: \n(1) Defesa \n(2) Ataque"))
            if (pergunta6 == 1) {
                alert("Você decide focar na sua defesa")
                alert("Graças aos seus treinos de defesa e seus treinos de levantamento de peso, sua defesa fica extremamente eficaz")
                alert("Você se sente preparada para as olimpiadas de 2024")
                alert("Você ganhou o item: confiança")
                historia++
            }
            else {
                alert("Você decide focar na sua ofensiva")
                alert("Graças aos seus treinos de ataque e sus treinos de levantamento de peso, seus ataques ficam formidaveis")
                alert("Você se sente preparada para as olimpiadas de 2024")
                alert("Você ganhou o item: confiança")
                historia++
            }
        }
        else {
            alert("Depois de muito tempo treinando...")
            if (vida > 70 && inventario.includes("confiança")) {
                alert("Você finalmente chegou em paris para as olimpiadas")
                alert("Todo o seu esforço valeu a pena")
                alert("Pois você chegou aqui, parabens !")
                alert("Esse é o fim")
                alert("Obrigado por jogar")
                alert("Feito por: Otto Seibt Cambôa")
                continuar = false
            }
            else {
                alert("Por mais que você tenha passado no time, você não se classificou para as olimpiadas")
                alert("Todo o seu esforço foi em vão")
                alert("Esse é o fim")
                alert("Obrigado por jogar")
                alert("Feito por: Otto Seibt Cambôa")
                continuar = false
            }

        }
    }
}