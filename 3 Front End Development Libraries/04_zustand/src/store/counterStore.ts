import {create} from 'zustand'

interface Posts {
  id?: number
  title?: string
  body?: string
}

interface CounterState {
  count: number
  title: string
  // inc: () => void
  increment: (value: number) => void
  posts: Posts[]
  getPosts: () =>Promise<void>
  clearStore: () => void
  multiply: (value: number) => void
}


// *** create recibe dos valores create( (set, get)) => ({}) )
export const useCounterStore = create<CounterState>((set, get) => ({
  count: 1,
  title: "Some store",
  // inc: () => set((state) => ({count: state.count + 1 })),
  increment: (value: number) => set( state => ({count: state.count + value})),
  posts: [],
  getPosts: async () => { 
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const data = await res.json()
    // *** fetch en una linea ↓↓↓
    const data = await(await fetch('http://jsonplaceholder.typicode.com/posts')).json()
    // console.log(data)
    set( (state) => ({ ...state, posts: data}))
  },
  clearStore: () => set({}, true),
  multiply: (value: number) => {
    const count = get().count
    set({count: count * value})
  }
}))