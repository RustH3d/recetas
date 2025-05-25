import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { clearUser } from '../utils/authStorage';

export default function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    await clearUser();
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
