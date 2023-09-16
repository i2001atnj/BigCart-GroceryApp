import { Image, TouchableOpacity } from "react-native";
import { add } from "../assets/icons/index";

const AddButton = ({ addFunction }) => {
  return (
    <TouchableOpacity onPress={addFunction}>
      <Image source={add} />
    </TouchableOpacity>
  );
};

export default AddButton;
