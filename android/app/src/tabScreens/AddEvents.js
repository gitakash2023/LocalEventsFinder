import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  DatePickerAndroid,
  Image,
  Alert,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
const AddEventForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const isFormValid = () => {
    return (
      eventName.trim() !== '' &&
      eventDescription.trim() !== '' &&
      eventLocation.trim() !== '' &&
      eventDate.trim() !== '' &&
      ticketPrice.trim() !== '' &&
      organizer.trim() !== '' &&
      contactPhone.trim() !== ''
    );
  };

  const handleAddEvent = async () => {
    try {
      await firestore().collection('events').add({
        eventName: eventName,
        eventDescription: eventDescription,
        eventLocation: eventLocation,
        eventDate: eventDate,
        ticketPrice: ticketPrice,
        organizer: organizer,
        contactPhone: contactPhone,
      });

      Alert.alert('Success', 'Event added to Firestore!');
    } catch (error) {
      Alert.alert(
        'Error',
        'Error adding event to Firestore. Please try again.',
      );
    } finally {
      setEventName('');
      setEventDescription('');
      setEventLocation('');
      setEventDate('');
      setTicketPrice('');
      setOrganizer('');
      setContactPhone('');
    }
  };

  const handleCancelEventName = () => {
    setEventName('');
  };
  const handleCancelDescription = () => {
    setEventDescription('');
  };
  const handleCancelLocation = () => {
    setEventLocation('');
  };
  const handleCancelEventDate = () => {
    setEventDate('');
  };
  const handleCancelTcketPrice = () => {
    setTicketPrice('');
  };
  const handleCancelOrganizer = () => {
    setOrganizer('');
  };
  const handleCancelPhone = () => {
    setContactPhone('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.borderBox}>
          <View style={styles.inputFlex}>
            <View style={styles.inputIcon}>
              <Image
                source={require('../Image/event.png')}
                style={styles.icons}
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder=" Enter Event Name"
                //   placeholderTextColor="black"
                value={eventName}
                onChangeText={text => setEventName(text)}
              />
            </View>

            {eventName.length > 0 && (
              <View>
                <TouchableOpacity onPress={handleCancelEventName}>
                  <Image
                    source={require('../Image/cancel.png')}
                    style={styles.cancle}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>

        <View style={styles.borderBox}>
          <View style={styles.inputFlex}>
            <View style={styles.inputIcon}>
              <Image
                source={require('../Image/description.png')}
                style={styles.icons}
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder=" Enter Event Description"
                //   placeholderTextColor="black"
                value={eventDescription}
                onChangeText={text => setEventDescription(text)}
              />
            </View>

            {eventDescription.length > 0 && (
              <View>
                <TouchableOpacity onPress={handleCancelDescription}>
                  <Image
                    source={require('../Image/cancel.png')}
                    style={styles.cancle}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>

        <View style={styles.borderBox}>
          <View style={styles.inputFlex}>
            <View style={styles.inputIcon}>
              <Image
                source={require('../Image/eventlocation.png')}
                style={styles.icons}
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder=" Enter Event Location"
                //   placeholderTextColor="black"
                value={eventLocation}
                onChangeText={text => setEventLocation(text)}
              />
            </View>

            {eventLocation.length > 0 && (
              <View>
                <TouchableOpacity onPress={handleCancelLocation}>
                  <Image
                    source={require('../Image/cancel.png')}
                    style={styles.cancle}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        <View style={styles.borderBox}>
          <View style={styles.inputFlex}>
            <View style={styles.inputIcon}>
              <Image
                source={require('../Image/date.png')}
                style={styles.icons}
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder=" DD/MM/YY"
                //   placeholderTextColor="black"
                value={eventDate}
                onChangeText={text => setEventDate(text)}
              />
            </View>

            {eventDate.length > 0 && (
              <View>
                <TouchableOpacity onPress={handleCancelEventDate}>
                  <Image
                    source={require('../Image/cancel.png')}
                    style={styles.cancle}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        <View style={styles.borderBox}>
          <View style={styles.inputFlex}>
            <View style={styles.inputIcon}>
              <Image
                source={require('../Image/ticketprice.png')}
                style={styles.icons}
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder=" ticket Price"
                //   placeholderTextColor="black"
                value={ticketPrice}
                onChangeText={text => setTicketPrice(text)}
              />
            </View>

            {ticketPrice.length > 0 && (
              <View>
                <TouchableOpacity onPress={handleCancelTcketPrice}>
                  <Image
                    source={require('../Image/cancel.png')}
                    style={styles.cancle}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        <View style={styles.borderBox}>
          <View style={styles.inputFlex}>
            <View style={styles.inputIcon}>
              <Image
                source={require('../Image/organizer.png')}
                style={styles.icons}
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder=" organizer"
                //   placeholderTextColor="black"
                value={organizer}
                onChangeText={text => setOrganizer(text)}
              />
            </View>

            {organizer.length > 0 && (
              <View>
                <TouchableOpacity onPress={handleCancelOrganizer}>
                  <Image
                    source={require('../Image/cancel.png')}
                    style={styles.cancle}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        <View style={styles.borderBox}>
          <View style={styles.inputFlex}>
            <View style={styles.inputIcon}>
              <Image
                source={require('../Image/phone.png')}
                style={styles.icons}
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder=" Phone number"
                //   placeholderTextColor="black"
                value={contactPhone}
                onChangeText={text => setContactPhone(text)}
              />
            </View>

            {contactPhone.length > 0 && (
              <View>
                <TouchableOpacity onPress={handleCancelPhone}>
                  <Image
                    source={require('../Image/cancel.png')}
                    style={styles.cancle}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>

        <View style={{marginTop: 30}}>
          <Button
            title="Add Event"
            onPress={handleAddEvent}
            disabled={!isFormValid()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,

    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  inputFlex: {
    flexDirection: 'row',
  },
  inputContainer: {
    width: '100%',
  },
  borderBox: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 5,
    marginBottom: 20,
  },
  inputIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  input: {
    height: 40,
    width: 330,
    paddingHorizontal: 15,

    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '100',
  },
  cancle: {
    width: 20,
    height: 25,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  icons: {
    width: 20,
    height: 20,
    // marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  multilineInput: {
    height: 80,
  },
});

export default AddEventForm;
