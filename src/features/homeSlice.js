import { createSlice, nanoid } from "@reduxjs/toolkit";
import contactsList from "../components/Utils/contactsList";

const initialState = {
    contacts:contactsList,

}

export const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers:
    {
        addContacts: (state, action) => {
            const contact = {
                id: nanoid(),
                text: action.payload,
            }
            state.contacts.push(contact)
            
        }

    }

})

export const { contact } = contactSlice.actions
export default contactSlice.reducer