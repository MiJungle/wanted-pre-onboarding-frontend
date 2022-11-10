
//answer을 선택했을 때 type에 해당되는 숫자를 다 배열로 옮긴다
//result페이지에서는 숫자가 가장 빈번하게 있는 것을 type로 보여준다

// const answerStore = createStore(answerModifier)
const ADD = "question/ADD_TYPE"

export const addType = type => ({
    type: ADD,
    mbti: {
        ...type,
        type
    }
});

const initialState = [];

export default function types(state = initialState,action){
    switch (action.type) {
        case ADD:
            return state.concat(action.mbti)
    
    default: 
        return state;
    };
    
}

// const answerModifier = (state=answerArray, action) => {
    
//     const { answers } = state;
//     switch (action.type){
//         case (ADD):
//             return answers :[
//                 ...answers,
            
//             ]
//     }
// }

//adds numbers to array 

