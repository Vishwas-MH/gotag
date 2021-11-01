import testData from "../components/employeeCard/EmployeeCardList";

const managerReducer = (state = testData, action) => {
    switch (action.type) {
        case "addManager":
            {
                state = [...state, action.payload];
                return state;
            }
        case "editManager":
            {
                //console.log(state);
                const updateState = state.map(contact => contact.id === action.payload.id? 
                    action.payload : contact);
                state = updateState;
                return state;
            }
        default:
            return state;
    }
};

export default managerReducer;