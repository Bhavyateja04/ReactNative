import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Person_2 from "./assets/image1.jpg";
import Person_3 from "./assets/image2.jpg";
import Person_4 from "./assets/image3.jpg";
import Person_5 from "./assets/image4.jpg";
import Person_6 from "./assets/image5.jpg";
import Person_7 from "./assets/image6.jpg";
import Person_8 from "./assets/image7.jpg";
import Person_9 from "./assets/image8.jpg";
import { Button, Dialog, Icon, Searchbar,List } from "react-native-paper";

const Component = () => {
  const insets = useSafeAreaInsets();

  const MyData = [
    {
      id: "1",
      Img: Person_2,
      Name: "Puffer Fish",
      Msg: "Coming or not ?",
      Time: "10:30 AM",
    },
    {
      id: "2",
      Img: Person_3,
      Name: "Tulasi",
      Msg: "Mongo db Coupoun 50 % vachindi",
      Time: "11:00 AM",
    },
    {
      id: "3",
      Img: Person_4,
      Name: "Shriya",
      Msg: "React native course start avvali kada ?",
      Time: "12:00 PM",
    },
    {
      id: "4",
      Img: Person_5,
      Name: "Raji",
      Msg: "class ki vachesa call cheyyaku",
      Time: "1:00 PM",
    },
    {
      id: "5",
      Img: Person_6,
      Name: "Sista",
      Msg: "Jagaram Chesava ?",
      Time: "2:00 PM",
    },
    {
      id: "6",
      Img: Person_7,
      Name: "CR Garu",
      Msg: "Rey College ki vachava?",
      Time: "3:00 PM",
    },
    {
      id: "7",
      Img: Person_8,
      Name: "Annaya",
      Msg: "Tinnava?",
      Time: "4:00 PM",
    },
    {
      id: "8",
      Img: Person_9,
      Name: "Daddy",
      Msg: "Stop ki vasthara?",
      Time: "5:00 PM",
    },
  ];

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.headerText}>WhatsApp</Text>

        <View style={styles.headerIcons}>
          <Icon source="qrcode-scan" size={24} color="black" />
          <Icon source="camera-outline" size={24} color="black" />
          <Icon source="dots-vertical" size={24} color="black" />
        </View>
      </View>
      <View>
        <Searchbar
          placeholder="Search or ask META AI"
          onChangeText={() => {}}
          value=""
          style={{ margin: 5 }}
        />
      </View>
      {/* Filter Tabs */}
      <View style={styles.filters}>
        <Button mode="outlined" style={styles.filterBtn}>
          All
        </Button>
        <Button mode="outlined" style={styles.filterBtn}>
          Unread
        </Button>
        <Button mode="outlined" style={styles.filterBtn}>
          Groups
        </Button>
        <Button mode="outlined" style={styles.filterBtn}>
          Contacts
        </Button>
      </View>
       <View>
        <Button mode ="elevated" onPress={() => {}} style={{margin:10}}>
         Archived
        </Button>
          {/* <Dialog>
            <Dialog.Content>
              <List.Item title="Item 1" />
              <List.Item title="Item 2" />
              <List.Item title="Item 3" />
              <Text>This is a Dialog component.</Text>
            </Dialog.Content>
          </Dialog> */}
        </View>
      <FlatList
        data={MyData}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Image source={item.Img} style={styles.avatar} />
            <View style={styles.content}>
              <View style={styles.topRow}>
                <Text style={styles.name}>{item.Name}</Text>
                <Text style={styles.time}>{item.Time}</Text>
              </View>
              <Text style={styles.message} numberOfLines={1}>
                {item.Msg}
              </Text>
            </View>
          </View>
        )}
      />
      <View style={styles.bottomBar}>
  <View style={styles.tabItem}>
    <Icon source="chat" size={26} color="#075E54" />
    <Text style={styles.activeTab}>Chats</Text>
  </View>

  <View style={styles.tabItem}>
    <Icon source="circle-slice-8" size={26} color="gray" />
    <Text style={styles.inactiveTab}>Updates</Text>
  </View>

  <View style={styles.tabItem}>
    <Icon source="account-group" size={26} color="gray" />
    <Text style={styles.inactiveTab}>Communities</Text>
  </View>

  <View style={styles.tabItem}>
    <Icon source="phone" size={26} color="gray" />
    <Text style={styles.inactiveTab}>Calls</Text>
  </View>
</View>
    </View>
  );
};

export default Component;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  /* Header */
  header: {
    height: 60,
    flexDirection: "row", // important
    alignItems: "center", // vertical center
    justifyContent: "space-between", // left title, right icons
    paddingHorizontal: 16,
  },

  headerText: {
    color: "#075E54",
    fontSize: 24,
    fontWeight: "700",
  },

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18, // spacing between icons
  },
  /* Chat Row */
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
    marginRight: 12,
  },

  content: {
    flex: 1,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  filters: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 8,
    // backgroundColor: "#075E54",
  },

  filterBtn: {
    borderRadius: 20,
    color: "white",
  },

  time: {
    fontSize: 12,
    color: "gray",
  },

  message: {
    fontSize: 14,
    color: "#555",
    marginTop: 3,
  },
  icons: {
    flexDirection: "column",
    gap: 10,
    color: "#075E54",
  },
  bottomBar:{
  height: 70,
  flexDirection: "row",
  justifyContent: "space-around",
  },
  inactiveTab:{
    fontSize: 12,
    color: "gray",
    justifyContent: "center",
  },
  activeTab:{
    fontSize: 12,
    color: "#075E54",
    fontWeight: "600",
    justifyContent: "center",

  }
});