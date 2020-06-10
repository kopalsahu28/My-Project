
const empDetails = (intialState = {}, action) => {
    switch (action.type) {
      case "EMP_DETAILS":
        return {
            ...intialState,
            userData : action.empData
        }
        case "ADD_EMP_DETAILS":
        return {
            ...intialState,
            userData: action.addedEmpData,
        }   
        case "REMOVE_EMP_DETAILS":
            return {
                ...intialState,
                userData: action.removeEmpData,
            } 
        case "EDIT_EMP_DETAILS":
            return {
                ...intialState,
                userData: action.editEmpData,
            }
      default:
        return intialState;
    }
  };
  
  export default empDetails;
  