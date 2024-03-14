# Zustand + React + TypeScript + Vite

Zustand es un manejador de estado para aplicaciones de Javascript en general, aunque también puede llegar a ser usando comúnmente con React y React Query. Este permite tener un estado centralizado y global similar a bibliotecas como Redux, MobX o similar a la API de React useContext, solo que con una configuración muy sencilla y teniendo estados que son hooks fáciles de integrar en tus aplicaciones de React. Además también puede funcionar con Typescript y no necesita de usar Providers.

### - install

```bash
npm install zustand
```

### - create store

`/store/countstore.ts`

```javascript
import {create} from 'zustand'

export const useCountStore = create((set, get) => ({
  count: 1,
  title: "Some store",
  increment: (value: number) => set( state => ({count: state.count + value})),
  })
)
```

### - import store

`/App.tsx`

```javascript
import { useCounterStore } from "./store/counterStore";
import {shallow} from 'zustand/shallow'

const values = useCounterStore((state) => ({
    counter: state.count,
    name: state.title,
    posts: state.posts,
  }), shallow)

  // *** shallow es un parametro de zstand para comparar dos objetos de estado

  const { increment, multiply, getPosts, clearStore } = useCounterStore()

  return (<> </>)
```