document.addEventListener("DOMContentLoaded", function () {
  // Ano atual no footer
  document.getElementById("ano-atual").textContent = new Date().getFullYear();

  // Funcionalidade do FAQ
  const perguntas = document.querySelectorAll(".pergunta");

  perguntas.forEach((pergunta) => {
    const botao = pergunta.querySelector(".botao-pergunta");

    botao.addEventListener("click", () => {
      // Fecha todas as outras perguntas
      perguntas.forEach((item) => {
        if (item !== pergunta) {
          item.classList.remove("ativa");
        }
      });

      // Alterna a classe 'ativa' na pergunta clicada
      pergunta.classList.toggle("ativa");
    });
  });

  // Contador regressivo para a oferta
  const horasElem = document.createElement("span");
  const minutosElem = document.createElement("span");
  const segundosElem = document.createElement("span");

  let horas = 23;
  let minutos = 59;
  let segundos = 59;

  function atualizarContador() {
    segundos--;

    if (segundos < 0) {
      segundos = 59;
      minutos--;
    }

    if (minutos < 0) {
      minutos = 59;
      horas--;
    }

    if (horas < 0) {
      horas = 23;
    }

    const textoContador = `OFERTA VÁLIDA POR APENAS ${horas}h ${minutos}m ${segundos}s!`;

    const urgenciaSpan = document.querySelector(".urgencia span");
    if (urgenciaSpan) {
      urgenciaSpan.textContent = textoContador;
    }
  }

  // Atualiza o contador a cada segundo
  setInterval(atualizarContador, 1000);

  // Animação suave de scroll para os botões CTA
  const botoesCTA = document.querySelectorAll(".cta-button, .botao-comprar");

  botoesCTA.forEach((botao) => {
    botao.addEventListener("click", function (event) {
      // Se o clique for em um link, não impedir a navegação para o link
      // Apenas scroll para a seção de preço se estiver na mesma página
      if (
        this.getAttribute("href") &&
        this.getAttribute("href").startsWith("#")
      ) {
        event.preventDefault();

        // Scroll para a seção de preço
        const secaoPreco = document.querySelector(".preco");

        if (secaoPreco) {
          secaoPreco.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  });

  // === NOVAS ANIMAÇÕES DE SCROLL ===

  // Função para verificar se um elemento está visível na viewport
  function isElementInViewport(el, offset = 0) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight - offset && rect.bottom >= 0;
  }

  // Classes de elementos para animar
  const elementosParaAnimar = {
    fadeIn: document.querySelectorAll(".beneficio, .card-depoimento"),
    slideUp: document.querySelectorAll(".card-preco, .pergunta"),
    slideInLeft: document.querySelectorAll(
      ".hero h1, .descricao h2, .depoimentos h2, .faq h2"
    ),
    slideInRight: document.querySelectorAll(".cta-button, .destaque"),
    pulse: document.querySelectorAll(".botao-comprar, .tag-desconto"),
    flipIn: document.querySelectorAll(".avatar, .icone"),
    scaleIn: document.querySelectorAll(".valor-atual, .estrelas"),
  };

  // Configurar estilos iniciais para cada tipo de animação
  function configurarEstilosIniciais() {
    // Fade In (já existente mas melhorado)
    elementosParaAnimar.fadeIn.forEach((elemento) => {
      elemento.style.opacity = "0";
      elemento.style.transform = "translateY(30px)";
      elemento.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });

    // Slide Up
    elementosParaAnimar.slideUp.forEach((elemento) => {
      elemento.style.opacity = "0";
      elemento.style.transform = "translateY(50px)";
      elemento.style.transition = "opacity 1s ease, transform 1s ease";
    });

    // Slide In Left
    elementosParaAnimar.slideInLeft.forEach((elemento) => {
      elemento.style.opacity = "0";
      elemento.style.transform = "translateX(-50px)";
      elemento.style.transition = "opacity 1s ease, transform 1s ease";
    });

    // Slide In Right
    elementosParaAnimar.slideInRight.forEach((elemento) => {
      elemento.style.opacity = "0";
      elemento.style.transform = "translateX(50px)";
      elemento.style.transition = "opacity 1s ease, transform 1s ease";
    });

    // Pulse (começam visíveis, mas serão pulsados quando visíveis)
    elementosParaAnimar.pulse.forEach((elemento) => {
      elemento.style.transition = "transform 0.5s ease";
    });

    // Flip In
    elementosParaAnimar.flipIn.forEach((elemento) => {
      elemento.style.opacity = "0";
      elemento.style.transform = "rotateY(90deg)";
      elemento.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });

    // Scale In
    elementosParaAnimar.scaleIn.forEach((elemento) => {
      elemento.style.opacity = "0";
      elemento.style.transform = "scale(0.5)";
      elemento.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });
  }

  // Executar animações com base na visibilidade
  function executarAnimacoes() {
    // Fade In
    elementosParaAnimar.fadeIn.forEach((elemento) => {
      if (isElementInViewport(elemento, 100)) {
        elemento.style.opacity = "1";
        elemento.style.transform = "translateY(0)";
      }
    });

    // Slide Up
    elementosParaAnimar.slideUp.forEach((elemento) => {
      if (isElementInViewport(elemento, 100)) {
        elemento.style.opacity = "1";
        elemento.style.transform = "translateY(0)";
      }
    });

    // Slide In Left
    elementosParaAnimar.slideInLeft.forEach((elemento) => {
      if (isElementInViewport(elemento, 100)) {
        elemento.style.opacity = "1";
        elemento.style.transform = "translateX(0)";
      }
    });

    // Slide In Right
    elementosParaAnimar.slideInRight.forEach((elemento) => {
      if (isElementInViewport(elemento, 100)) {
        elemento.style.opacity = "1";
        elemento.style.transform = "translateX(0)";
      }
    });

    // Pulse - aplica um efeito de pulsação quando visível
    elementosParaAnimar.pulse.forEach((elemento) => {
      if (isElementInViewport(elemento, 150)) {
        elemento.classList.add("pulse-animation");
      }
    });

    // Flip In
    elementosParaAnimar.flipIn.forEach((elemento) => {
      if (isElementInViewport(elemento, 100)) {
        elemento.style.opacity = "1";
        elemento.style.transform = "rotateY(0)";
      }
    });

    // Scale In
    elementosParaAnimar.scaleIn.forEach((elemento) => {
      if (isElementInViewport(elemento, 100)) {
        elemento.style.opacity = "1";
        elemento.style.transform = "scale(1)";
      }
    });
  }

  // Efeito de paralaxe no fundo da seção hero
  function aplicarEfeitoParalaxe() {
    const hero = document.querySelector(".hero");
    const scrollPosition = window.scrollY;

    if (hero && scrollPosition <= hero.offsetHeight) {
      // Movimento do fundo em relação ao scroll
      hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
  }

  // Adicionar classe CSS para animação de pulso
  const style = document.createElement("style");
  style.textContent = `
    .pulse-animation {
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    }
    
    .destaque {
      animation: blink 1.5s infinite;
    }
    
    @keyframes blink {
      0% { opacity: 1; }
      50% { opacity: 0.7; }
      100% { opacity: 1; }
    }
  `;
  document.head.appendChild(style);

  // Efeito de contador crescente para números
  function iniciarContadorCreescente() {
    const precoPrincipal = document.querySelector(".preco-grande");

    if (
      precoPrincipal &&
      isElementInViewport(precoPrincipal, 200) &&
      !precoPrincipal.dataset.counted
    ) {
      const valorFinal = parseInt(precoPrincipal.textContent.match(/\d+/)[0]);
      let contador = 0;
      const duracao = 1500; // milissegundos
      const intervalo = 50; // milissegundos
      const incremento = Math.ceil(valorFinal / (duracao / intervalo));

      precoPrincipal.dataset.counted = true;

      const timer = setInterval(() => {
        contador = Math.min(contador + incremento, valorFinal);
        precoPrincipal.innerHTML = `R$ ${contador}<span>,00</span>`;

        if (contador >= valorFinal) {
          clearInterval(timer);
        }
      }, intervalo);
    }
  }

  // Centralização das funções de animação
  function animarAoScrollar() {
    executarAnimacoes();
    aplicarEfeitoParalaxe();
    iniciarContadorCreescente();
  }

  // Configurar animações iniciais
  configurarEstilosIniciais();

  // Executar a animação ao carregar a página e ao scrollar
  window.addEventListener("load", animarAoScrollar);
  window.addEventListener("scroll", animarAoScrollar);

  // Chamar a função imediatamente para animar elementos já visíveis
  setTimeout(animarAoScrollar, 100);
});
