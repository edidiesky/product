import bcrypt from "bcryptjs";
export const user = [
  {
    name: "Mellisa Daniel",
    username: "mellisa12",
    email: "mellisa@gmail.com",
    image:
      "https://avada.website/real-estate/wp-content/uploads/sites/176/2023/09/melissa-darmel-200x200.jpg",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "Laurel Deampson",
    username: "laurelDampson",
    email: "laurelDampson@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    image:
      "https://avada.website/real-estate/wp-content/uploads/sites/176/2023/08/emily-brown-200x200.jpg",
  },
];
