//import uuid from 'uuid';
const initialState = {
    todo: [{
            id: 1,
            title: "read",
            isChecked: false
        },
        {
            id: 2,
            title: "write the homework",
            isChecked: false
        }
    ]

};

export default function reducer(state = initialState, action) {
    //change thr state base upon the action
    //console.log(action);
    let newState = {...state }; //using spred operator create the copy of state cariable in redux stateis immutablles
    /*
        function nextTodoID(todo) {
            const maxId = todo.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
            return maxId + 1;
        }
        */
    switch (action.type) {

        case "ADD":
            return {
                ...state,
                todo: [...state.todo, { title: action.payload, isChecked: true, id: action.pid }]
            }
            break;
        case "DELETE":
            return {
                todo: state.todo.filter((it) => {
                    return action.id !== it.id;
                }),
            }

            //const todos = state.todo.filter(
            //      (todo) => todo.id !== action.payload)
            /* return state.map(todo =>
                 (todo.id === action.payload) ? {...todo, isChecked: !todo.isChecked } :
                 todo
             );
             */
            //return {
            ///...state,
            //  todo: todos,
            //}

            //newState.todo = newState.todo.filter(todo => todo.id != action.payload);;
            break;
        case "EDITE":
            // newState.todo = action.payload;
            break;
        case "CHECKED":
            break;
    }
    return newState;
}