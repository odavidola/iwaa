import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const WeekView = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const handleDayPress = (day) => {
    setSelectedDay(day); // Set the selected day
  };

  const renderContent = () => {
    switch (selectedDay) {
      case 'Mon':
        return <Text>Content for Monday</Text>;
      case 'Tue':
        return <Text>Content for Tuesday</Text>;
      case 'Wed':
        return <Text>Content for Wednesday</Text>;
      case 'Thu':
        return <Text>Content for Thursday</Text>;
      case 'Fri':
        return <Text>Content for Friday</Text>;
      case 'Sat':
        return <Text>Content for Saturday</Text>;
      case 'Sun':
        return <Text>Content for Sunday</Text>;
      default:
        return <Text>Select a day to see content</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {days.map((day) => (
          <Button key={day} title={day} onPress={() => handleDayPress(day)} />
        ))}
      </View>
      <View style={styles.content}>
        {renderContent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  header: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default WeekView;
