import React from "react";
import { Dialog,List,Snackbar, } from "react-native-paper";

const Component1 = () => {
    
    return (
    <>
        <Dialog>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
                <List.Item title="Item 1" />
                <List.Item title="Item 2" />
                <List.Item title="Item 3" />
                
                <Text>This is a Dialog component.</Text>
            </Dialog.Content>
        </Dialog>
        <Snackbar visible={true} onDismiss={() => {}}>
            This is a Snackbar message.
        </Snackbar>
    </>
  );
};

export default Component1;