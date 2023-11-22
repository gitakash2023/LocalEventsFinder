import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Events = () => {
  const [eventsData, setEventsData] = useState([]);

  const retrieveEvents = () => {
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
          data.push(documentData);
        });
        setEventsData(data);
      })
      .catch(error => {
        Alert.alert(error);
      });
  };

  useEffect(() => {
    retrieveEvents();
  }, []);

  return (
    <View>
      <ScrollView>
        <FlatList
          data={eventsData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.eventContainer}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={styles.eventName}>
                    <Image
                      source={require('../Image/event.png')}
                      style={{height: 20, width: 20}}
                    />{' '}
                    {item.eventName}
                  </Text>
                </View>
                <View>
                  <Text style={styles.eventDate}>
                    <Image
                      source={require('../Image/date.png')}
                      style={{height: 20, width: 20}}
                    />{' '}
                    {item.eventDate}
                  </Text>
                </View>
              </View>

              <Image source={{uri: item.imageUrl}} style={styles.eventImage} />
              <View style={styles.eventDetails}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.eventDescription}>
                    <Image
                      source={require('../Image/description.png')}
                      style={{height: 20, width: 20}}
                    />{' '}
                    {item.eventDescription}
                  </Text>
                  <View>
                    <Text style={styles.organizer}>
                      <Image
                        source={require('../Image/organizer.png')}
                        style={{height: 20, width: 20}}
                      />{' '}
                      {item.organizer}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={styles.ticketPrice}>
                    <Image
                      source={require('../Image/ticketprice.png')}
                      style={{height: 20, width: 20}}
                    />{' '}
                    Rs {item.ticketPrice}
                  </Text>
                  <Text style={styles.eventLocation}>
                    <Image
                      source={require('../Image/location.png')}
                      style={{height: 20, width: 20}}
                    />{' '}
                    {item.eventLocation}
                  </Text>
                </View>
              </View>
              <Text style={styles.eventTypes}>
                Event Types: {item.eventTypes}
              </Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  eventContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  eventDetails: {
    marginTop: 10,
  },
  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  eventDescription: {
    fontSize: 16,
    color: 'black',
    marginBottom: 8,
  },
  eventDate: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  ticketPrice: {
    fontSize: 18,

    color: 'black',
    marginBottom: 8,
  },
  organizer: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  eventLocation: {
    fontSize: 16,

    color: '#555',
    marginBottom: 8,
  },
  eventTypes: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },

  eventImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 10,
  },
});

export default Events;
