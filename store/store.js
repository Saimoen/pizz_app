import create from 'zustand'

export const useStore = create(
    (set) => ({

        // cart
        cart: {
            pizzas: []
        },

        // add Pizza in cart
        addPizza: (data) => set((state) => ({
            cart: {
                // [...] conserve les données précédentes/spreading
                pizzas: [...state.cart.pizzas, data]
            }
        })),


        // Remove pizza
        removePizza: (index) =>
            set((state) => ({
                cart: {
                    pizzas: state.cart.pizzas.filter((_, i) => i != index)
                }
            })),

        // reset Cart
        resetCart: () => {
            set(() => ({
                cart: {
                    pizzas: []
                }
            }))
        }
    })
)