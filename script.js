const storyData = {
    Prologo: {
        text: `<img src="bau.png" alt="Bau do tesouro." width="100">
        <br><br>
        Bem-vindo! Vamos embarcar em uma jornada em busca de um tesouro perdido.
        <br><br>
        Você sempre foi fascinado por histórias de tesouros perdidos e civilizações antigas. Crescendo nas ruas estreitas de Port Vaylen, escutou mercadores e marinheiros narrando seus feitos de aventureiros ousados, dizendo que cruzavam oceanos em busca de riquezas. Com o tempo, você aprendeu que a maioria desses contos era apenas isso: contos. Porém, algo em seu coração nunca desistiu de acreditar.
        
Foi assim que, em uma noite chuvosa, seu destino mudou. Enquanto vasculhava as prateleiras poeirentas de uma loja de antiguidades, você encontrou um pergaminho misterioso. Era velho, frágil, mas os símbolos gravados nele — uma mistura de runas antigas e mapas desenhados à mão — fizeram seu coração disparar. O dono da loja não fazia ideia do valor do achado. Com suas últimas moedas, comprou o pergaminho e correu para casa.

No silêncio de sua cabana, você desvendou o enigma inicial: ele apontava para um local conhecido como as Terras do Crepúsculo, uma região remota e traiçoeira. Diziam que ninguém que entrou lá retornou para contar a história. Ainda assim, as palavras do pergaminho eram claras:

"Nas Terras do Crepúsculo, o segredo do Tesouro de Zyron aguarda. Mas cuidado: riquezas e tristezas caminham lado a lado."

Você sabia que essa era a sua chance. Não havia como ignorar o chamado. Na manhã seguinte, com sua mochila pronta, partiu rumo ao desconhecido. Vamos<a data-target="InicioJornada">Começar a aventura</a>.
`,
        resetHistory: true,
    },
    InicioJornada: {
        text: `<img src="bau.png" alt="Bau do tesouro." width="100">
          <br><br>
          Após semanas de viagem, você chega à entrada da misteriosa região, o nome não faz jus à imponência do lugar. Montanhas escarpadas se erguem como muralhas contra o céu cinzento, enquanto um pântano se estende ao longo, coberto por uma névoa prateada que parece viva. O ar é pesado, úmido, e o silêncio é quebrado apenas pelo vento que sopra entre as pedras.

À sua frente, o pergaminho parece ganhar vida. Os símbolos brilham fracamente, indicando que você está no lugar certo. Um caminho sinuoso leva a uma bifurcação: à esquerda, uma trilha desaparece na escuridão dos pântanos; à direita, um portal luminoso está incrustado na montanha, emitindo um brilho inquietante.

O pergaminho se aquece em suas mãos, como se incentivando você a seguir em frente. Cada escolha parece perigosa, mas o tesouro está em algum lugar além desses desafios. 
<br>Agora você deve escolher qual o melhor caminho para seguir sua jornada, você pode <a data-target="PortalMontanha">seguir o portal da montanha</a> ou <a data-target="TrilhaPantano">entrar na trilha do pântano</a>.
`,
    },
    PortalMontanha: {
        text: `<img src="bau.png" alt="Bau do tesouro." width="100">
          <br><br>
          A luz do portal brilha mais intensamente à medida que você se aproxima. Sua superfície parece líquida, oscilando com reflexos prateados. Inscrições antigas cobrem a rocha ao redor, formando um aviso que você mal consegue traduzir: "Aquele que entra deve deixar a dúvida para trás."

Com um suspiro profundo, você atravessa o portal. O mundo ao seu redor muda instantaneamente. Você se vê em uma câmara circular, iluminada por chamas azuis que flutuam no ar. No centro, um pedestal de pedra sustenta um cálice dourado. No chão, porém, os ossos encontrados indicam que nem todos que chegaram aqui foram bem-sucedidos.

Um eco sussurra pelas paredes:
"Para sair, sacrifique algo de valor. O que oferece em troca da chave do tesouro?"

             E agora, o que você vai fazer? Sacrificar um bem valioso e <a data-target="Sacrificio">oferecer o amuleto de família como sacrifício</a> ou vai
             <a  data-target="DecisaoNegativa">recusar sacrificar algo e tenta encontrar outra saída</a>.`,
    },
    Sacrificio: {
        text: `<img src="bau.png" alt="Bau do tesouro." width="100">
          <br><br>
          Você coloca seu amuleto no pedestal, sentindo o peso da perda. Assim que o objeto toca a pedra, a sala se ilumina, e o cálice flutua, revelando uma chave dourada em seu interior. Uma porta se abre, levando você a um novo caminho.  


Você coloca o amuleto de sua família no pedestal, sentindo o peso do desapego. A luz do cálice muda para um tom dourado quente, e uma porta se abre. Dentro, você encontra uma sala cheia de moedas antigas, mas algo parece errado.
Uma inscrição na parede chama sua atenção:
 "A verdadeira riqueza não é ouro, mas o conhecimento que guia o caminho."
Você avança, mas sente que o sacrifício foi apenas o começo dos testes. Após muito procurar, nenhum outro fragmento foi encontrado.

        <a data-target="InicioJornada">Volte para o início e procure um novo caminho</a>.`,
        
    },
    DecisaoNegativa: {
        text: `<img src="bau.png" alt="Bau do tesouro." width="100">
          <br><br>
          Você recusa o sacrifício e tenta escapar pela sala. No entanto, o portal que o trouxe até aqui desaparece, e você está envolvido por uma escuridão sufocante.

"Ganância disfarçada de coragem," a voz ecoa ao longo. "Somente os que aceitam o custo podem avançar."

Sem saída e sem recursos, sua jornada termina aqui
<a data-target=""></a>.`,
    },
    TrilhaPantano: {
        text: `<img src="bau.png" alt="Bau do tesouro." width="100">
          <br><br>
          A trilha pelo pântano é escura e traiçoeira. A névoa densa parece viva, dificultando sua visão. Logo, você percebe sons de água se agitando ao seu redor. Homens-lagarto surgem das sombras, segurando lanças enferrujadas e cercando você. 
        Decida rápido, você irá<a data-target="LutaPantano">lutar contra os homens-lagarto</a> ou <a data-target="NegociacaoPantano">tentar negociar sua passagem com eles</a>.`,
    },
    LutaPantano: {
        text: `<img src="bau.png" alt="Bau do tesouro." width="100">
          <br><br>
          Você desembainha sua arma e enfrenta os homens-lagarto. A batalha é brutal, e suas habilidades são postas à prova. Apesar de sair vitorioso, você é gravemente ferido, e seu suprimento de energia está quase esgotado.

Enquanto recupera o fôlego, percebe um item brilhante que caiu de um dos homens-lagarto, um fragmento de cristal semelhante aos descritos no pergaminho. Este pode ser um dos fragmentos da chave! Você sente que ele é importante e o guarda, mas agora precisa decidir como seguir adiante. 
Você vai <a data-target="MontanhasGeladas">seguir para as montanhas com o fragmento</a> ou ficar e <a data-target="DescansoFatal">tentar descansar no pântano para recuperar forças</a>.`,
        
    },
    NegociacaoPantano: {
        text: `<img src="bau.png" alt="Bau do tesouro." width="100">
          <br><br>
          Você ergue as mãos, indicando que não quer lutar, e oferece parte de seus pertences aos homens-lagarto. Eles hesitam, mas aceitam sua oferta. Embora tenha sua vida poupada, você perde suprimentos essenciais para a jornada.

Ao continuar, encontra um caminho que leva diretamente às montanhas.  
Você junta suas coisa e decide<a data-target="MontanhasGeladas">seguir para as montanhas</a>.`,
        
    },
    DescansoFatal: {
        text: `<img src="bau.png" alt="Bau do tesouro." width="100">
          <br><br>
          Você decidiu parar para descansar e recuperar suas forças, no entanto, você subestimou os perigos do local. Enquanto repousa, criaturas famintas o atacam desprevinido, e por estar machucado você não tem forças para lutar. Infelizmente, você não tem chance contra eles e perde. Esse não era um bom lugar para descansar.

Sua jornada termina aqui <a data-target=""></a>.`,
        
    },
    MontanhasGeladas: {
        text: `<img src="bau.png" alt="Bau do tesouro." width="100">
          <br><br>
          O caminho até as montanhas é árduo, e o frio extremo começa a afetar seu corpo. Você chega a um portão de gelo com uma inscrição:

"Somente o calor da determinação pode abrir o caminho."

Ao lado do portão, há um braseiro vazio e um pequeno saco de pedras que podem servir como combustível. 
Você<a data-target="Tesouro">acende o braseiro e derrete o gelo</a> ou
<a data-target="PortaSegura">procura por uma entrada que seja mais segura</a>.`,

    },
    PortaSegura: {
        text: `<img src="bau.png" alt="Bau do tesouro." width="100">
          <br><br>
          Você acha que o braseiro não ira funcionar, então decide procurar uma forma mais segura de entrar, depois de muito procurar, você avista uma passagem, entretanto muito estreita e em um local de dificil acesso, sendo pperigoso, temendo por sua vida,
           você decide que tentara<a data-target="Tesouro">usar o braseiro</a>.`,
    },
    Tesouro: {
        text: `<img src="bau.png" alt="Bau do tesouro." width="100">
          <br><br>
          O braseiro ilumina o caminho, e você atravessa o portão. Dentro do templo, o ar parece vivo, preenchido por uma energia pulsante. No centro da sala principal, uma estátua colossal do Guardião Final o observa.

"Somente aquele que compreende o verdadeiro significado do sacrifício pode tocar o tesouro."

O guardião estende sua mão e exige que você faça uma escolha,<a data-target="VitoriaParcial">lutar contra ele com todas as suas forças</a> ou 
           tentar<a data-target="VitoriaCompleta">convence-lo de sua causa</a>.`,
        
    },

    VitoriaParcial: {
        text: `<img src="bau.png" alt="Bau do tesouro." width="100">
          <br><br>
          O combate é longo e exaustivo, mas você consegue derrotar o guardião. Com o último golpe, ele desaparece em uma nuvem de poeira dourada.

Você chega ao tesouro e descobre riquezas incalculáveis, mas também sente um peso em sua alma. O preço foi alto, e agora você entende por que tantas lendas falavam de tristeza junto à fortuna. Você realmente venceu? 
<a data-target=""></a>`,
       
    },
    VitoriaCompleta: {
        text: `<img src="bau.png" alt="Bau do tesouro." width="100">
          <br><br>
          Você fala ao guardião sobre sua jornada e sua determinação em usar o tesouro para um bem maior. Ele escuta atentamente e, com um gesto respeitoso, cede passagem.

O tesouro está à sua frente, mas sua verdadeira vitória foi provar que seu coração era puro. Com o tesouro em mãos, você retorna para casa, pronto para mudar o mundo. Parabéns você venceu! 
<a data-target=""></a>`,
       
    },
};

const app = document.getElementById("app");
const params = new URLSearchParams(window.location.search);
currentStep = params.get("step") || "Prologo";
let inventory = [];
let journeyHistory = [];


function saveProgress(step, choiceText) {
    if (storyData[step]?.resetHistory) journeyHistory = [];
    if (choiceText) journeyHistory.push(choiceText);

    localStorage.setItem("journeyHistory", JSON.stringify(journeyHistory));
    localStorage.setItem("lastStep", step);
    localStorage.setItem("inventory", JSON.stringify(inventory));

    const params = new URLSearchParams(window.location.search);
    params.set("step", step);
    window.history.pushState({}, "", "?" + params.toString());
}


function renderStory() {
    const step = storyData[currentStep];
    let output = `<p>${step.text}</p>`;

    if (step.reward) {
        output += `<p>Você recebeu: ${step.reward}</p>`;
        inventory.push(step.reward);
    }
    if (step.showHistory) {
        output += `<p><strong>Histórico:</strong><br>${journeyHistory.join("<br>")}</p>`;
    }
    if (step.choices) {
        step.choices.forEach((choice) => {
            output += `<a href="#" data-target="${choice.target}">${choice.text}</a><br>`;
        });
    }

    app.innerHTML = output;

    document.querySelectorAll("a").forEach((link) =>
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = link.dataset.target;
            saveProgress(target, link.textContent);
            currentStep = target;
            renderStory();
        })
    );
}

renderStory();
