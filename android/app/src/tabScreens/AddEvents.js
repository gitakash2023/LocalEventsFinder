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
} from 'react-native';

const AddEventForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');

  const handleAddEvent = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.inputFlex}>
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
              <TouchableOpacity>
                <Image
                  source={require('../Image/cancel.jpg')}
                  style={styles.cancle}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={styles.inputFlex}>
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
              <TouchableOpacity>
                <Image
                  source={require('../Image/cancel.jpg')}
                  style={styles.cancle}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.inputFlex}>
          <View>
            <TextInput
              style={styles.input}
              placeholder=" Enter Event eventLocation"
              //   placeholderTextColor="black"
              value={eventLocation}
              onChangeText={text => setEventLocation(text)}
            />
          </View>

          {eventLocation.length > 0 && (
            <View>
              <TouchableOpacity>
                <Image
                  source={require('../Image/cancel.jpg')}
                  style={styles.cancle}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>

        <Button
          title="Add Event"
          onPress={handleAddEvent}
          style={{marginTop: '30'}}
        />
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
  input: {
    height: 40,
    width: 330,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  cancle: {
    width: 20,
    height: 20,
    marginTop: 10,
  },

  multilineInput: {
    height: 80,
  },
  datePicker: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
});

export default AddEventForm;
