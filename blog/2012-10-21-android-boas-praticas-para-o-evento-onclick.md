---
slug: android-boas-praticas-para-o-evento-onclick
title: Android – Boas Práticas para o evento onClick
description: Boas Práticas para o evento onClick no Android
tags: [mobile]
---

Nesta dica irei abordar sobre boas práticas (best practices) de como definir o evento `onClick` dos botões no Android.

<!--truncate-->

## Funciona, mas…

Vamos criar um botão simples em um layout xml da seguinte forma:

```xml
<Button
    android:id="@+id/btnMessage"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:layout_centerHorizontal="true"
    android:layout_centerVertical="true"
    android:onClick="btnMessageOnClick"
    android:text="Show Message"
/>
```

Note na linha 7 que foi adicionado a propriedade `android:onClick` com o valor `btnMessageOnClick`, ou seja, toda vez que o usuário clicar nesse botão, será executado o método `btnMessageOnClick()` da classe onde esse layout xml está referenciado. Com isso, o Activity que está utilizando este layout xml precisa deste método e faremos assim:

```java
public void btnMessageOnClick() {
    Toast.makeText(MainActivity.this, "Hello World",
        Toast.LENGTH_LONG).show();
}
```

Isso é o suficiente para que o botão funcione. Toda vez que o usuário clicar no botão, será exibido a mensagem `"Hello World"`. Funciona? Sim, mas…

- Se você tentar renomear (refactor) o método do evento `onClick` de forma automática, pelo menos no Eclipse, ele não irá renomear o método no layout xml, quebrando o código. Se você não corrigir, o erro só daria em tempo de execução.
- Em um aplicativo muito grande, se torna improdutivo dar manutenção nesses métodos, pois fica difícil localizar quais views que este método faz referência e vice versa.
- Se o nome do método não estiver bem explícito que é um evento `onClick` e está sendo referenciado em um layout xml, ou não houver um comentário especificando isso, o programador poderá não saber disso até que ocorra um erro.

## Boa Prática

Vamos agora adicionar o evento `onClick` para o botão de outra forma. Remova o atributo `android:onClick` do xml do botão, não há necessidade de fazer alguma referência do código no layout.

Remova o método `btnMessageOnClick()` e coloque este listener no lugar:

```java
private OnClickListener btnMessageOnClickListener = new OnClickListener() {
    @Override
    public void onClick(View v) {
        Toast.makeText(MainActivity.this, "Hello World",
            Toast.LENGTH_LONG).show();
    }
};
```

Agora só falta referenciar o botão ao seu listener, para isso basta colocar o seguinte código no método `onCreate()` ou `resume()` do `Activity/Fragment`:

```java
Button btnMessage = (Button) findViewById(R.id.btnMessage);
btnMessage.setOnClickListener(btnMessageOnClickListener);
```

Dica O método `findViewById()` pode retornar null caso não encontre a view procurada.

Agora está pronto seu evento `onClick`! Desta forma todos os problemas levantados no tópico anterior serão resolvidos com esta boa prática.

