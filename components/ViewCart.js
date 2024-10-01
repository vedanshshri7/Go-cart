import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Modal
} from "react-native";
import React, { useContext, useState } from "react";
import { CartItems } from "../Context";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import FinalCheckout from "./FinalCheckout";

import uploadCartItems from "../uploadCartItems";


const ViewCart = (props) => {
  const { cart, setCart } = useContext(CartItems);
  const [modal, setModal] = useState(false);
  const total = cart
    .map((item) => item.price * item.quantity) // Multiply by quantity
    .reduce((prev, curr) => prev + curr, 0);


  const VendorName = props.VendorName;


  const onPress = () => {
    setModal(false);
    setCart([]);
    // Add any additional logic for placing the order
  };

  const handleOrder = () => {
    uploadCartItems(cart);
  };


  const checkOut = () => (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.7)",
      }}
    >
      <Pressable
        onPress={() => setModal(false)}
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AntDesign
          style={{ paddingBottom: 10 }}
          name="closecircle"
          size={34}
          color="black"
        />
      </Pressable>

      <View
        style={{
          backgroundColor: "white",
          height: 400,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      >
        <Text
          style={{
            color: "black",
            textAlign: "center",
            paddingTop: 12,
            fontSize: 17,
            paddingBottom: 9,
            borderBottomColor: "#C0C0C0",
            borderBottomWidth: 0.8,
          }}
        >
          {VendorName}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderBottomColor: "#C0C0C0",
            borderBottomWidth: 0.8,
            padding: 10,
          }}
        >
          <MaterialIcons style={{}} name="timer" size={24} color="green" />
          <Text
            style={{
              color: "black",
              fontSize: 17,
              fontWeight: "600",
              marginLeft: 6,
            }}
          >
            Delivery in 2 hour 30 mins
          </Text>
        </View>
        <ScrollView>
          {cart.map((item, index) => (
            <FinalCheckout key={index} item={item} />
          ))}
          <View
            style={{
              borderBottomColor: "#D0D0D0",
              borderBottomWidth: 1,
            }}
          />

          <View
            style={{
              borderBottomColor: "#D0D0D0",
              borderBottomWidth: 3,
            }}
          />
        </ScrollView>


        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 14,
            padding: 10,
            shadowColor: "#686868",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 1,
            shadowRadius: 2,
            elevation: 5,
          }}
        >
          <Text
            style={{
              color: "#675DFF",
              fontWeight: "bold",
              paddingBottom: 3,
              fontSize: 17,
            }}
          >
            Grand Total
          </Text>
          <Text style={{ color: "#675DFF", fontSize: 17, fontWeight: "600" }}>
            {"₹"}{total}
          </Text>
        </View>

        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: "#675DFF",
            padding: 10,
            alignItems: "center",

          }}
          activeOpacity={0.9}
        >

          {/* 
          <Pressable style={{ color: "white", fontSize: 17, fontWeight: "700" }} onPress={handleOrder} >
            Place Order
          </Pressable> */}
          <Pressable onPress={handleOrder} >
          <Text style={{ color: "white", fontSize: 17, fontWeight: "700" }}  >
            Place Order
          </Text>
        </Pressable>

      </TouchableOpacity>
    </View>
    </View >
  );

return (
  <>
    <Modal
      animationType="slide"
      visible={modal}
      transparent={true}
      onRequestClose={() => setModal(false)}
    >
      {checkOut()}
    </Modal>
    <View>
      {total === 0 ? null : (
        <Pressable
          style={{
            position: "absolute",
            bottom: 30,
            left: 100,
            borderRadius: 6,
            backgroundColor: "#675DFF",
          }}
          onPress={() => setModal(true)}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              textAlign: "center",
              padding: 10,
              width: 180,
            }}
          >
            View Cart • {"₹"}{total}
          </Text>
        </Pressable>
      )}
    </View>
  </>
);
};

export default ViewCart;
