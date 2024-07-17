import { create } from "zustand"

const useConversation = create((set) => ({
    selectedConvo: null,
    setSelectedConvo: (selectedConvo) => set({ selectedConvo }),
    messages: [],
    setMessages: (messages) => set({ messages })
}))

export default useConversation