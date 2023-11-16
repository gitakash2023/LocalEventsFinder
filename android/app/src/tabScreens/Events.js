import {View, Text, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const Events = () => {
  const [events, setEvents] = useState([]);
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
        setEvents(data);
      })
      .catch(error => {
        Alert.alert(error);
      });
  };
  useEffect(() => {
    retreiveEvents();
  });
  return (
    <View>
      <Text>Events</Text>
    </View>
  );
};

export default Events;
