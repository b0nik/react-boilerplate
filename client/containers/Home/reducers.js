const initialState={
    title:'hello, this is Bright homepage'
};

export default function (state=initialState, action) {
    switch (action.type){
        case "CHANGE":
            return action.payload;

        default:
            return state
    }
}
