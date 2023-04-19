import bcrypt from "bcrypt";

export const hashedPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedpassword = await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.log(error);
  }
};
