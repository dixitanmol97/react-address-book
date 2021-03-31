import { generateAddressID } from "app/pages/home/utils";

const addressBook = [
  {
    id: generateAddressID(),
    name: "Enakshi Mehra",
    phone: "9374134502",
    email: "enakshi48@yahoo.co.in",
    group: "Favourites",
    address: "Chapalfurt, WB 494 600",
    birth_day: "1990-12-14",
    photo: `bill-gates.jpeg`,
    dateCreated: new Date().toLocaleDateString(),
  },
  {
    id: generateAddressID(),
    name: "Devadatt Kaniyar",
    phone: "7500283517",
    email: "devadatt74@gmail.com",
    group: "Work",
    address: "West Devakberg, NL 872 861",
    birth_day: "1991-01-24",
    photo: `charlie.jpeg`,
    dateCreated: new Date().toLocaleDateString(),
  },
  {
    id: generateAddressID(),
    name: "Sheela Khan",
    phone: "6155925572",
    email: "sheela_Khan21@gmail.com",
    group: "Work",
    address: "Lake Jaya, NL 285 822",
    birth_day: "1984-06-12",
    photo: `elon-musk.jpeg`,
    dateCreated: new Date().toLocaleDateString(),
  },
  {
    id: generateAddressID(),
    name: "Karan Nair",
    phone: "6155925572",
    email: "karan99@yahoo.co.in",
    group: "Favourites",
    address: "Dhyaneshburgh, PY 886 773",
    birth_day: "1943-04-12",
    photo: `hazard.jpeg`,
    dateCreated: new Date().toLocaleDateString(),
  },
  {
    id: generateAddressID(),
    name: "Vaishvi Abbott",
    phone: "6155925572",
    email: "vaishvi85@gmail.com",
    group: "Work",
    address: "North Bhanumatiside, UK 604 941",
    birth_day: "1955-04-19",
    photo: `jack.jpeg`,
    dateCreated: new Date().toLocaleDateString(),
  },
  {
    id: generateAddressID(),
    name: "Chatura Joshi",
    phone: "6155925572",
    email: "chatura60@gmail.com",
    group: "Home",
    address: "Chapalfurt, WB 494 600",
    birth_day: "1988-08-22",
    photo: `mark.jpeg`,
    dateCreated: new Date().toLocaleDateString(),
  },
];

const groups = ["Work", "Home", "Favourites"];

export { addressBook, groups };
