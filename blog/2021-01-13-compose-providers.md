---
slug: compose-providers
title: Como resolver o encadeamento de providers no React (Provider Hell)
description: Técnica para construir resolver o encadeamento de providers no React
tags: [Front-end, React]
---

Com a introdução do hook `useContext` ficou mais prático de trabalhar com estado global no React, sem a necessidade de usar vários consumers no JSX. Porém, ainda há a necessidade de declarar o Provider dentro JSX, então sem perceber podemos entrar no Provider Hell como este:

<!--truncate-->

```jsx
function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <SettingsProvider>
          <UserProvider>
            <MagicProvider>
              <LayoutProvider>
                <Header />
                <Body />
                <Footer />
              </LayoutProvider>
            </MagicProvider>
          </UserProvider>
        </SettingsProvider>
      </RouterProvider>
    </ThemeProvider>
  );
}
```

```jsx
const composeProviders = (...providers) => props =>
  providers.reduceRight(
    (children, Provider) =>
      <Provider {...props}>{children}</Provider>,
    props.children,
  );

export const AllProviders = composeProviders(
  ThemeProvider,
  RouterProvider,
  SettingsProvider,
  UserProvider,
  MagicProvider,
  LayoutProvider,
);
```

Agora é só substituir aquele Provider Hell pelo novo `AllProviders`:

```jsx
function App() {
  return (
    <AllProviders>
      <Header />
      <Body />
      <Footer />
    </AllProviders>
  );
}
```

Se quiser passar alguma propriedade para todos os providers, você pode passá-lo como propriedade do `AllProviders`:

```jsx
<AllProviders env="dev" baseUrl="/" >
  {/* ... */}
</AllProviders>
```

