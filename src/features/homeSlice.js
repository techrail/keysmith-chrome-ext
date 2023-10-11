import { createSlice, nanoid } from "@reduxjs/toolkit";
import contactsList from "../components/Utils/contactsList";
import FavContacts from "../components/Utils/FavContacts";
import AddIcons from "../components/Utils/AddIcons";


const initialState = {
  contacts: contactsList,
  Favcontacts: FavContacts,
  Addicons : AddIcons
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContacts: (state, action) => {
      const contact = {
        id: nanoid(),
        text: action.payload,
      };
      state.contacts.push(contact);
    },
    addfavContacts: (state, action) => {
      const favcontact = {
        id: nanoid(),
        text: action.payload,
      };
      state.contacts.push(favcontact);
    },
    addIcons: (state, action) => {
      const addIcon = {
        id: nanoid(),
        text: action.payload,
      };
      state.contacts.push(addIcon);
    },
  },
});

export const { contact,favcontact,addIcon } = contactSlice.actions;
export default contactSlice.reducer;
