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
  ActivityIndicator,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import DropDownPicker from 'react-native-dropdown-picker';
import storage from '@react-native-firebase/storage';
import DatePicker from 'react-native-datepicker';
import {launchImageLibrary} from 'react-native-image-picker';

const AddEventForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');

  const [ticketPrice, setTicketPrice] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [loading, setLoading] = useState(false);
  //   img and date picker
  const [imageUri, setImageUri] = useState(null);
  const [eventDate, setEventDate] = useState('');
  //    dropdown start
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(['italy', 'spain', 'finland']);
  const [items, setItems] = useState([
    {label: 'Spain', value: 'spain'},

    {label: 'Italy', value: 'italy'},

    {label: 'Finland', value: 'finland'},
  ]);
  // end

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
  const handlePickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
      },
      response => {
        if (!response.didCancel) {
          setImageUri(response.uri);
        }
      },
    );
  };

  const uploadImage = async () => {
    if (!imageUri) {
      return null; // No image selected
    }

    const fileName = imageUri.substring(imageUri.lastIndexOf('/') + 1);
    const reference = storage().ref(`images/${fileName}`);

    try {
      await reference.putFile(imageUri);
      const downloadUrl = await reference.getDownloadURL();
      return downloadUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };

  const handleAddEvent = async () => {
    try {
      setLoading(true);
      await firestore().collection('events').add({
        eventName: eventName,
        eventDescription: eventDescription,
        eventLocation: eventLocation,
        eventDate: eventDate,
        ticketPrice: ticketPrice,
        organizer: organizer,
        contactPhone: contactPhone,
        imageUrl: imageUri,
        eventDate: eventDate,
      });

      Alert.alert('Success', 'Event added to Firestore!');
    } catch (error) {
      Alert.alert(
        'Error',
        'Error adding event to Firestore. Please try again.',
      );
    } finally {
      setLoading(false);
      setEventName('');
      setEventDescription('');
      setEventLocation('');
      setEventDate('');
      setTicketPrice('');
      setOrganizer('');
      setContactPhone('');
      setImageUri(null);
      setEventDate('');
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
      <TouchableOpacity onPress={handlePickImage}>
        <View style={styles.imagePickerContainer}>
          {imageUri ? (
            <Image source={{uri: imageUri}} style={styles.imagePreview} />
          ) : (
            <Text style={styles.imagePickerText}>Pick an Image</Text>
          )}
        </View>
      </TouchableOpacity>

      {/* Date Picker */}
      <DatePicker
        style={styles.input}
        date={eventDate}
        mode="date"
        placeholder="Select Event Date"
        format="YYYY-MM-DD"
        minDate={new Date().toISOString().split('T')[0]}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
        }}
        onDateChange={date => setEventDate(date)}
      />

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
            <Image source={require('../Image/date.png')} style={styles.icons} />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder=" DD/MM/YY"
              keyboardType="numeric"
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
              placeholder=" Ticket Price"
              keyboardType="numeric"
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
              placeholder=" Organizer"
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
              keyboardType="numeric"
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
      {/* start dropdown */}
      <View>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          theme="DARK"
          multiple={false}
          //   mode="BADGE"
          //   badgeDotColors={[
          //     '#e76f51',
          //     '#00b4d8',
          //     '#e9c46a',
          //     '#e76f51',
          //     '#8ac926',
          //     '#00b4d8',
          //     '#e9c46a',
          //   ]}
        />
      </View>
      {/* end dropdown */}

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={{marginTop: 20}}>
          {isFormValid() && (
            <Button
              title="Add Event"
              onPress={handleAddEvent}
              disabled={!isFormValid()}
            />
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,

    flex: 1,

    // alignItems: 'center',
    // justifyContent: 'center',
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
  imagePickerContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
  },
  imagePickerText: {
    fontSize: 18,
    color: '#333',
  },
});

export default AddEventForm;
