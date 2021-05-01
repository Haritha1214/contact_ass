



const IntialState=[
    {
        Id:0,
        Name:"Ammma",
        Phone:"8838928320"
    },
    {
        Id:2,
        Name:"Annnnnaaaa",
        Phone:"9940866311"
    },
    {
        Id:2,
        Name:"Hariii",
        Phone:"7010041125"
    },
    {
        Id:3,
        Name:"Paapuuu",
        Phone:"6380323294"
    },
];
 const contactReducer=(state=IntialState,action)=>{
    switch(action.type){
        case "ADD_CONTACT":
            state=[...state,action.payload]
            return state
        case "UPDATE_CONTACT":
            const contactUpdate = state.filter((contact) =>contact.Id === action.payload.Id? Object.assign(contact, action.payload): contact);
            state = contactUpdate;
            return state;
      case "DELETE_CONTACT":
        const contactFilter = state.filter((contact) =>
        contact.id !== action.payload && contact
      );
      state = contactFilter;
      return state;
        default:
            return state;
    }
 }

export default contactReducer;