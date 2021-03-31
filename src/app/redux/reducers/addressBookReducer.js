import { addressBook } from "app/pages/home/constant";

export const addressBookReducer = (
  state = {
    addressBook: addressBook,
  },
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const filterBySearchInputAndGroup = (state, searchInput, group) => {
  return state.addressBook.addressBook.filter(address => {
    if (address.group.includes(group)) {
      if (address.name.toLowerCase().search(searchInput.toLowerCase()) !== -1)
        return true;
      else if (
        address.email.toLowerCase().search(searchInput.toLowerCase()) !== -1
      )
        return true;
      else if (address.phone.search(searchInput.toLowerCase()) !== -1)
        return true;
      else return false;
    }
  });
};
