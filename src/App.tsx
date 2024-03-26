import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Card from './components/Card';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card title="Bekir Asım Çelik" text="Bir şey demiyorum..." />
      <Card title="Sibel Yıldırım Çelik" text="Yeter artık uyuyun!" />
      <Card title="Zeynep Hanne Çelik" text="Anne, baba çok sıkıldım ya" />
      <Card title="Zümra Hera Çelik" text="Babba" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default App;
