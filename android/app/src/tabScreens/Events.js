import {
  View,
  Text,
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Events = () => {
  const [eventsData, setEventsData] = useState([]);

  const retreiveEvents = () => {
    firestore()
      .collection('events')
      // Filter results
      // .where('userId', '==', auth().currentUser.email)
      .get()
      .then(querySnapshot => {
        const data = [];
        querySnapshot.forEach(documentSnapshot => {
          const documentData = documentSnapshot.data();
          documentData.id = documentSnapshot.id;
          console.log({documentData});
          data.push(documentData);
        });
        console.log({data: data[0]});
        setEventsData(data);
      })
      .catch(error => {
        Alert.alert(error);
      });
  };
  useEffect(() => {
    retreiveEvents();
  }, []);
  return (
    <View>
      <Text>Events Screen</Text>
      <ScrollView>
        <FlatList
          data={eventsData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.eventContainer}>
              <Text>{item.eventName}</Text>
              <Text>{item.eventDescription}</Text>
              <Text>{item.eventDate}</Text>
              <Text>{item.ticketPrice}</Text>
              <Image source={{uri: item.imageUrl}} style={styles.eventImage} />
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  eventImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover', // Adjust the resizeMode based on your requirements
  },
});

export default Events;
