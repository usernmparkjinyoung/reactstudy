import { createStore } from 'redux';

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const toggleSwitch = () => ({ type : TOGGLE_SWITCH });
const increase = difference => ({ type : INCREASE, difference });
const decrease = () => ({ type : DECREASE })

const initialState = {
    toggle: false, 
    counter: 0
};

function reducer(state = initialState, action){
    switch(action.type){
        case TOGGLE_SWITCH:
            return {
                ...state,
                toggle: !state.toggle
            }
        case INCREASE: 
            return {
                ...state,
                counter: state.counter + action.difference
            }
        case DECREASE: 
            return {
                ...state,
                counter: state.counter - 1
            }
        default: 
            return state;
    }
}

const store = createStore(reducer);

divToggle.onClick = () => { 
    store.dispatch(toggleSwitch);
}

btnIncrease.onClick = () => {
    store.dispatch(increase());
}

btnDecrease.onClick = () => {
    store.dispatch(decrease());
}

const render = () => {
    const state = store.getState(); // 현재 상태를 불러옵니다 

    if(state.toggle){
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }
    // 카운터 처리 
    counter.innerText = state.counter;
}

render();
store.subscribe(render);