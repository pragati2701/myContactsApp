import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Appbar, List, Portal, Dialog, Provider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Contacts from 'expo-contacts';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [dialogVisible, setDialogVisible] = useState(false);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
      });

      if (data.length > 0) {
        setContacts(data);
        setFilteredContacts(data);
      }
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    setDialogVisible(true);
  };

  return (
    <Provider>
      <SafeAreaProvider>
        <View style={{ flex: 1 }}>
          <Appbar.Header>
            <Appbar.Content title="Contacts App" />
          </Appbar.Header>

          <TextInput
            style={{ margin: 10, padding: 10, borderWidth: 1, borderRadius: 5 }}
            placeholder="Search contacts"
            value={searchQuery}
            onChangeText={handleSearch}
          />

          <FlatList
            data={filteredContacts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleContactClick(item)}>
                <List.Item
                  title={item.name}
                  description={item.phoneNumbers ? item.phoneNumbers[0].number : ''}
                />
              </TouchableOpacity>
            )}
          />

          <Portal>
            <Dialog visible={dialogVisible} onDismiss={() => setDialogVisible(false)}>
              <Dialog.Title>Contact Details</Dialog.Title>
              {selectedContact && (
                <Dialog.Content>
                  <Text>Name: {selectedContact.name}</Text>
                  <Text>Number: {selectedContact.phoneNumbers[0].number}</Text>
                </Dialog.Content>
              )}
              <Dialog.Actions>
                <TouchableOpacity onPress={() => setDialogVisible(false)}>
                  <Text>Dismiss</Text>
                </TouchableOpacity>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </SafeAreaProvider>
    </Provider>
  );
}
