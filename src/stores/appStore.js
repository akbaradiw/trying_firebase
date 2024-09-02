import { create } from "zustand"

export const useStore = create((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),

  userName: "mulyono",
  updateUserName: (userName) => set({ userName } ),

  data:{},
  getData: async(userName) => {
  const response = await fetch(`https://api.github.com/users/${userName}`)
  const data = await response.json()
  console.log(data)
  },
}));


