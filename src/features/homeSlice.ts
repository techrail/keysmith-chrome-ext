import { createSlice, nanoid } from "@reduxjs/toolkit";
import contacts from "../components/Utils/contacts";
import favContacts from "../components/Utils/favContacts";
import icons from "../components/Utils/icons";

export interface ContactSlice {
  contacts: Array<{
    id: number | string
    mainText: string
    bottomText: string
  }>,
  favContacts: Array<{
    id: number | string
    mainText: string
    bottomText: string
  }>
  icons: Array<{
    id: number | string
    url: string
    icon: string
    name: string
    path: string
    route: string
  }>
}

const initialState: ContactSlice = {
  contacts,
  favContacts,
  icons,
};

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const contact = {
        id: nanoid(),
        mainText: action.payload.mainText,
        bottomText: action.payload.bottomText,
      };
      state.contacts.push(contact);
    },
    addfavContact: (state, action) => {
      const favContact = {
        id: nanoid(),
        mainText: action.payload.mainText,
        bottomText: action.payload.bottomText,
      };
      state.favContacts.push(favContact);
    },
    addIcon: (state, action) => {
      const icon = {
        id: nanoid(),
        url: action.payload.url,
        icon: action.payload.icon,
        name: action.payload.name,
        path: action.payload.path,
        route: action.payload.route,
      };
      state.icons.push(icon);
    },
  },
});


export const { addContact, addfavContact, addIcon } = contactSlice.actions;
export default contactSlice.reducer;