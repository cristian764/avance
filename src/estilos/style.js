import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  numero: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2c3e50',
    backgroundColor: '#d1ecf1',
    padding: 10,
    borderRadius: 5,
  },
  imagen: {
    width: 200,
    height: 200,
    marginBottom: 15,
    resizeMode: 'contain',
    backgroundColor: '#f8d7da',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#dc3545',
  },
  smallImagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: '#d4edda',
    padding: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#ffeeba',
    padding: 10,
  },
});
