import src1 from "../assets/1.png";
import src2 from "../assets/2.png";
import src3 from "../assets/3.png";
import src4 from "../assets/4.png";
import src5 from "../assets/5.png";
import src6 from "../assets/6.png";

const initialState = {
    cards: [
        {
            id: 1,
            title: 'Kaktus Plants',
            price: 'IDR 85.000',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
            img: src1,
        },
        {
            id: 2,
            title: 'Landak Plants',
            price: 'IDR 105.000',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
            img: src2,
        },
        {
            id: 3,
            title: 'Kecubung Plants',
            price: 'IDR 85.000',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
            img: src3,
        },
        {
            id: 4,
            title: 'Kecubung Plants',
            price: 'IDR 85.000',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
            img: src4,
        },
        {
            id: 5,
            title: 'Kecubung Plants',
            price: 'IDR 85.000',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
            img: src5,
        },
        {
            id: 6,
            title: 'Areca Palm',
            price: 'IDR 85.000',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
            img: src6,
        },
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "REMOVE_PRODUCT":
            return {...state, cards: state.cards.filter(product => product.id !== action.id)}
        default:
            return state
    }
}
