---
slug: diferenca-entre-o-foundation-4-e-o-twitter-bootstrap
title: Diferença entre o Foundation 4 e o Twitter Bootstrap 2.3
description: Diferença entre o Foundation 4 e o Twitter Bootstrap 2.3
tags: []
---

O **Foundation 4** e o **Twitter Bootstrap 2.3** são dois excelentes front-end frameworks, são tão bons que chega a ser complicado a decisão de escolher qual dos dois usar em um projeto web.

Neste artigo irei expor minha experiência em usar ambos frameworks, em projetos semelhantes, demonstrando a facilidade e dificuldade que encontrei em cada um.

<!--truncate-->

## Público Alvo

> “Sou programador, não designer”

Muitos programadores usam frameworks de front-end por não gostarem ou por não ter conhecimento design, então optam por utilizar algo já pronto e personalizar só o básico. Para estes casos, o indicado é o Bootstrap, pelos seguintes motivos:

- É mais rápido e fácil sair usando o Bootstrap, pois o Foundation precisa de um mínimo de conhecimento para tomar algumas decisões.
- A documentação do Bootstrap é mais organizada, ficando mais fácil de achar o que se precisa.
- É mais fácil achar conteúdo sobre o Bootstrap na internet.
- O Bootstrap possui muito mais templates disponíveis para se comprar, facilitando a vida do programador que quer comprar o design já pronto de seu projeto web.

## Quero utilizar SASS ou LESS

**SASS** e **LESS** são chamados de CSS preprocessor language, que são na verdade uma extensão do CSS com recursos mais avançados. O Bootstrap utiliza o LESS e o Foundation utiliza o SASS. Não vou entrar no mérito de qual é o melhor, pois não é o intuito deste artigo, mas é importante levar em consideração esta informação se você quiser personalizar seu front-end framework de forma integrada com o resto do projeto.

Se você quiser só o CSS final do seu front-end framework, tanto faz como ele foi construído, então não leve isso em consideração.

Dica: Se você quiser incluir seu próprio CSS, inclua no HTML depois do CSS do seu front-end framework, para que seu CSS sobrescreva o CSS do framework, quando necessário.

Alguns web frameworks favorecem mais um CSS preprocessor language que outros,como, por exemplo, o Ruby On Rails já vem integrado com o SASS, já o Yii Framework já vem integrado com o LESS, mas não quer dizer que ambos não possam trocar.

## Quero um design original

Normalmente quem usa o Bootstrap faz pouca mudança, por isso é muito fácil reconhecer um site feito com ele pela internet, acabou gerando uma identidade visual. Se você quiser fazer um site web com uma identidade visual única, você terá mais facilidade com o **Foundation**, por ser mais flexível. No próximo tópico é demonstrado a diferença técnica.

## Diferença técnica

### Grid

A grid é o grande chamativo dos front-end framework, é o responsável pela mágica da responsividade. Apesar de serem parecidos, ao se ter experiência com ambos, é fácil notar que o **Foundation** sai na frente.

No Bootstrap você só define uma divisão de coluna, já no Foundation há como definir a divisão para o layouts acima (large) e abaixo (small) de 768px, permitindo uma melhor personalização. No bootstrap há a divisão entre Default grid system e Fluid grid system, que no Foundation não há essa divisão, mas que não parece fazer falta.

Ambos permitem offset, e também aninhar as grids, mas o Foundation possui o large-centered e o small-centered que faz muita falta no Bootstrap.  Outra classe que também é muito útil que só tem no Foundation é o collapse, que junto com a classe row remove o espaçamento entre as colunas.

### Block Grid x Thumbnails

O Block Grid do Foundation possui a mesma finalidade que o Thumbnails do Bootstrap, que é separar blocos de conteúdos através de uma lista (`<ul>` e `<li>`) de forma responsiva. E novamente o **Foundation** leva a vantagem nesse aspecto, pois ele define a quebra de cada item através de classes na tag `<ul>`, ficando muito mais clean e fácil de definir via programação, além de poder definir quebras diferentes para layouts diferentes (com o large e small usado na grid).

### Tabelas

Neste quesito o **Bootstrap** ganha em disparada. O Foundation é totalmente intrusivo e já define a estilo diretamente para a tag table, que atrapalha a utilizar um estilo diferente. Já o Bootstrap possui a classe table, que é bem intuitiva e possui um estilo bem mais agradável, além possuir outras classes como table-bordered e table-striped que permite uma personalização mais flexível.

### Form

Ambos dão bastante atenção para o form, mas o **Bootstrap** é meu preferido.

O Bootstrap possui a classe form-horizontal que define um layout para que os labels fiquem alinhados horizontalmente com os inputs, já o Foundation tem a classe inline para alinhar o label ao input, mas é só um elemento enquanto o Boostrap cuida do form todo.

O Foundation já defini por padrão o tamanho de todos os inputs, sendo muito intrusivo, já o Boostrap só faz isso através da classe input-block-level, deixando-o mais flexivel.

O Foundation possui estilo para a tag `<fieldset>`, mas o Bootstrap possui a classe form-actions para os botões que dá um visual diferencial para o form. Outra vantagem do Bootstrap são as classes de validação, que são bem mais agradáveis e flexíveis.

### Reveal x Modal

O Reveal do Foundation empata com o Modal do Bootstrap, o Reveal possui tamanhos diferentes e um personalizado para vídeos, já o Modal tem um layout único, porém, eu particularmente tive problemas com form dentro do Reveal, mas não no Bootstrap, por isso decretei empate.

## Conclusão

Ambos são excelentes frameworks, cada um com sua particularidade, assim como cada projeto web possui sua particularidade. Não tentei ser imparcial, o intuito desse artigo foi mesmo demonstrar minha experiência pessoal e passar meu sentimento em usar cada um deles.

Não se preocupe em tomar uma decisão errada entre esses dois, ambos são excelentes e você ainda pode alterar os estilos que não lhe agradar. Eu não aconselho a usar ambos no mesmo projeto, apesar de você poder personalizar cada um, framework se utiliza apenas um em cada projeto.

Deixe sua opinião sobre ambos e sobre as comparações aqui feitas, seu comentário é sempre bem-vindo! 😄
