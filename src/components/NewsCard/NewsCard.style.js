import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'darkorange',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    marginTop: 3,
  },
  author: {
    marginTop: 5,
    fontStyle: 'italic',
    textAlign: 'right',
    fontSize: 10,
  },
  inner_container: {
    padding: 10,
  },
});
