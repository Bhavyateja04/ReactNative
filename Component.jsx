import { View, Text, Image, StyleSheet, Button, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Person_2 from "./assets/apple.jpg";
import Person_3 from "./assets/banana.jpg";
import Person_4 from "./assets/beetroot.jpg";
import Person_5 from "./assets/Lemons.jpg";
import Person_6 from "./assets/dragon-fruit.jpg";
import Person_7 from "./assets/peach.jpg";
import Person_8 from "./assets/pineapple.jpg";
import Person_9 from "./assets/brocooli.jpg";
const Component = () => {
  const Results = useSafeAreaInsets();
  const MyData = [
    {
      id: 1,
      Img: Person_2,
      Name: "Puffer Fish",
      Msg: "Coming or not ?",
      Time: "10:30 AM",
    },
    {
      id: 2,
      Img: Person_3,
      Name: "Tulasi",
      Msg: "Mongo db Coupoun 50 % vachindi",
      Time: "11:00 AM",
    },
    {
      id: 3,
      Img: Person_4,
      Name: "Shriya",
      Msg: "React native course start avvali kada ?",
      Time: "12:00 PM",
    },
    {
      id: 4,
      Img: Person_5,
      Name: "Raji",
      Msg: "class ki vachesa call cheyyaku",
      Time: "1:00 PM",
    },
    {
      id: 5,
      Img: Person_6,
      Name: "Sista",
      Msg: "Jagaram Chesava ?",
      Time: "2:00 PM",
    },
    {
      id: 6,
      Img: Person_7,
      Name: "CR Garu",
      Msg: "Rey College ki vachava?",
      Time: "3:00 PM",
    },
    {
      id: 7,
      Img: Person_8,
      Name: "Annaya",
      Msg: "Tinnava?",
      Time: "4:00 PM",
    },
    {
      id: 8,
      Img: Person_9,
      Name: "Daddy",
      Msg: "Stop ki vasthara?",
      Time: "5:00 PM",
    },
  ];
  return (
    <>
      <View>
        <Text style={Mystyles.parent1}>WhatsApp</Text>
        <Button style={Mystyles.buttons} title="All" />
        <Button style={Mystyles.buttons} title="Unread" />
        <Button style={Mystyles.buttons} title="Groups" />
        <Button style={Mystyles.buttons} title="Contacts" />
        <FlatList
          data={MyData}
          renderItem={({ item }) => (
            <View style={Mystyles.parent}>
              <View style={Mystyles.Image_View}>
                <Image style={Mystyles.Image_Tag} source={item.Img} />
              </View>
              <View style={Mystyles.infoparent}>
                <Text style={Mystyles.SendName}>{item.Name}</Text>
                <Text style={Mystyles.LastMsg}>{item.Msg}</Text>
                <Text style={Mystyles.Time}>{item.Time}</Text>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

export default Component;

const Mystyles = StyleSheet.create({
  mytext: {
    backgroundColor: "yellow",
    color: "red",
    fontSize: 20,
    fontWeight: "900",
    width: "100%",
    height: "50%",
  },
  parent1: {
    backgroundColor: "white",
    width: "100%",
    fontSize: 30,
    fontWeight: "500",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  child: {
    color: "blue",
    fontSize: 30,
    height: "100%",
    backgroundColor: "green",
    width: "50%",
    height: "50%",
  },

  parent: {
    width: "100%",
    flexDirection: "row",
    marginVertical: 2,
    // backgroundColor:"#D9D9D9",
  },
  Image_View: {
    width: 100,
    height: 100,
  },
  Image_Tag: {
    width: "90%",
    height: "90%",
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 50,
  },
  infoparent: {
    justifyContent: "space-evenly",
    marginLeft: 10,
  },
  SendName: {
    fontSize: 16,
  },
  LastMsg: {
    fontSize: 12,
  },
  Time: {
    fontSize: 10,
    color: "gray",
    backgroundColor: "#D9D9D9",
    paddingHorizontal: 5,
    borderRadius: 5,
    marginLeft: 150,
    paddingHorizontal: 20,
  },
  buttons: {
    color:"Red",
    width:"20%",
    borderRadius:50,
    
  },
});
