import { collection, addDoc } from "firebase/firestore";
import { firestore } from "./firebaseConfig"; 
//import { firestore } from '../firebase'; // Import Firestore
const orderRef = collection(firestore, "orders"); // Create a reference to the orders collection
const uploadCartItems = async (cart) => {
  try {
    for (let item of cart) {
      await addDoc(orderRef, {
        vegetableName: item.name,
        quantity: item.quantity,
        price: item.price,
        status: "pending", // Default status
      });
    }
    console.log("Cart items uploaded successfully!");
  } catch (error) {
    console.error("Error uploading cart items: ", error);
  }
};

export default uploadCartItems;