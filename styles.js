import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  content: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    backgroundColor: '#f8f8f8', 
    padding: 20, 
  },
  section: {
    width: '100%', 
    marginBottom: 20, 
    alignItems: 'flex-start', 
    backgroundColor: '#ffffff', 
    borderRadius: 15, 
    padding: 20, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  sectionHeader: {
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    color: '#333', 
  },
  questionItem: {
    width: '100%', 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 10, 
    padding: 10, 
    fontSize: 16, 
    marginBottom: 20, 
    backgroundColor: '#fff', 
  },
  buttons: {
    width: 'auto', // Adjust the width to fit the content
    alignItems: 'flex-start', // Align to the left
    borderRadius: 10,
    backgroundColor: 'black',
    padding: 5, // Add padding for better alignment
    marginVertical: 5, // Add some vertical margin for spacing
  },
  buttonText: {
    color: 'white', // White text color
    textAlign: 'left', // Align text to the left
  },
  
  buttonsHovered: {
    backgroundColor: '#007bff', 
  },
  loginContainer: {
    width: '90%', 
    maxWidth: 400, 
    padding: 20, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    alignItems: 'center', 
    borderRadius: 15, 
    backgroundColor: '#fff', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, 
    shadowRadius: 4, 
    elevation: 5, 
    marginTop: 220, 
    marginHorizontal: '5%', 
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  loginInput: {
    width: '100%', 
    height: 40,
    borderColor: '#ccc', 
    borderWidth: 1, 
    borderRadius: 10,
    marginBottom: 15, 
    paddingLeft: 10, 
  },
  link: {
    color: 'blue',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
  navbar: {
    width: '100%', 
    backgroundColor: 'white', 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 20, 
  },
  navLinks: {
    flexDirection: 'row', 
    justifyContent: 'space-evenly', 
    alignItems: 'center', 
    width: '100%', 
  },
  link: {
    color: '#fff', 
    fontSize: 16, 
    textAlign: 'center', 
    marginHorizontal: 15, 
  },
  button: {
    backgroundColor: '#007bff', 
    color: '#fff', 
    paddingVertical: 8, 
    paddingHorizontal: 20, 
    borderRadius: 8, 
    marginHorizontal: 5, 
  },
  searchBox: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    borderRadius: 8, 
    paddingHorizontal: 10, 
    height: 40, 
    marginBottom: 15, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 6, 
    elevation: 4, 
  },
  searchInput: {
    flex: 1, 
    fontSize: 16,
    paddingVertical: 0, 
  },
  searchIcon: {
    marginLeft: 10, 
  },
  userCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  programme: {
    fontSize: 16,
    color: '#666',
  },
  userList: {
    marginTop: 20,
  },
  signUpText: {
    marginTop: 16,
    color: 'blue',
    textAlign: 'center',
  },
});

