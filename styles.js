import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  content: {
    flex: 1, // Take up full height of the screen
    justifyContent: 'center', // Center items vertically
    alignItems: 'center', // Center items horizontally
    backgroundColor: '#f8f8f8', // Light background color
    padding: 20, // Add padding to prevent content from sticking to edges
  },
  section: {
    width: '100%', // Ensure sections take full width of the screen
    marginBottom: 20, // Space between sections
    alignItems: 'center', // Center content horizontally within each section
    backgroundColor: '#ffffff', // White background for each section
    borderRadius: 15, // Rounded corners for each section
    padding: 20, // Padding inside the section for a clean look
    shadowColor: '#000', // Shadow effect for a card-like appearance
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  sectionHeader: {
    fontSize: 24, // Larger text for the header
    fontWeight: 'bold', // Make the header text bold
    marginBottom: 10, // Space between header and content
    color: '#333', // Dark text color for good readability
  },
  questionItem: {
    width: '100%', // Take full width of the screen
    borderWidth: 1, // Border around the text input
    borderColor: '#ccc', // Light border color
    borderRadius: 10, // Rounded corners for the text input
    padding: 10, // Add padding inside the text input
    fontSize: 16, // Font size for the text inside the input
    marginBottom: 20, // Space after the input box
    backgroundColor: '#fff', // White background for input
  },
  buttons: {
    width: '100%', // Ensure buttons span the full width
    alignItems: 'center', // Center the button horizontally
  },
  button: {
    backgroundColor: '#000', // Default black button color
    color: '#fff', // White text on the button
    paddingVertical: 12, // Vertical padding for the button
    paddingHorizontal: 20, // Horizontal padding for the button
    borderRadius: 8, // Rounded corners for the button
    marginBottom: 10, // Space between buttons
    alignItems: 'center', // Center text inside button
    justifyContent: 'center', // Center text inside button
  },
  buttonText: {
    color: '#fff', // White text on the button
    fontSize: 16, // Button text size
    textAlign: 'center', // Center the text inside the button
  },
  buttonHovered: {
    backgroundColor: '#007bff', // Change background to blue on hover (simulated with touch)
  },
  loginContainer: {
    flex: 1, // Take up full height of the screen
    justifyContent: 'center', // Center items vertically
    borderRadius: 15, // Rounded corners for the login
    alignItems: 'center', // Center items horizontally
    backgroundColor: '#f8f8f8', // Light background color for the page
    padding: 20, // Padding to avoid content sticking to edges
  },
  sectionHeader: {
    fontSize: 24, // Larger font size for the header
    fontWeight: 'bold', // Make header bold
    marginBottom: 20, // Space below the header
    color: '#333', // Dark color for the text
    textAlign: 'center', // Center align the header text
  },
  loginInput: {
    width: '100%', // Make input fields take full width
    padding: 12, // Padding inside input for better readability
    borderWidth: 1, // Border around the input field
    borderColor: '#ccc', // Light border color
    borderRadius: 15, // Rounded corners for input fields
    marginBottom: 20, // Space between input fields
    fontSize: 16, // Text size inside input
    backgroundColor: '#fff', // White background for inputs
  },
  button: {
    backgroundColor: '#000', // Black button color
    color: '#fff', // White text on the button
    paddingVertical: 12, // Vertical padding for the button
    paddingHorizontal: 20, // Horizontal padding for the button
    borderRadius: 15, // Rounded corners for the button
    marginBottom: 10, // Space between buttons
    alignItems: 'center', // Center text inside button
    justifyContent: 'center', // Center text inside button
  },
  link: {
    marginTop: 10, // Space between the button and the link
    color: '#007bff', // Blue color for the link
    fontSize: 16, // Font size for the link
    textAlign: 'center', // Center the link text
    borderRadius: 15, // Rounded corners for the link area
  },
  navbar: {
    width: '100%', // Ensure it spans the full width of the screen
    backgroundColor: '#white', // Dark background for the navbar
    paddingVertical: 10, // Vertical padding for spacing inside the navbar
    paddingHorizontal: 20, // Horizontal padding for spacing inside the navbar
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'center', // Center the navbar content horizontally
    alignItems: 'center', // Vertically center items within the navbar
    borderBottomLeftRadius: 10, // Rounded bottom-left corner for smooth design
    borderBottomRightRadius: 10, // Rounded bottom-right corner for smooth design
    marginTop: 20, // Add some space from the header
  },
  navLinks: {
    flexDirection: 'row', // Arrange the links and buttons horizontally
    justifyContent: 'space-evenly', // Evenly space out the buttons and links
    alignItems: 'center', // Vertically align the items in the center
    width: '100%', // Take up the full width of the navbar
  },
  link: {
    color: '#fff', // White color for the text
    fontSize: 16, // Font size for the links
    textAlign: 'center', // Center align the link text
    marginHorizontal: 15, // Space between links
  },
  button: {
    backgroundColor: '#007bff', // Blue color for the buttons
    color: '#fff', // White text on the buttons
    paddingVertical: 8, // Vertical padding for the button
    paddingHorizontal: 20, // Horizontal padding for the button
    borderRadius: 8, // Rounded corners for the buttons
    marginHorizontal: 5, // Space between buttons
  },
  searchBox: {
    flexDirection: 'row', // Make the input and icon align horizontally
    alignItems: 'center', // Vertically center the items in the row
    backgroundColor: '#fff', // White background for the search box
    borderRadius: 8, // Rounded corners for the search box
    paddingHorizontal: 10, // Horizontal padding inside the search box
    height: 40, // Set a height for the search box
    marginBottom: 15, // Add space after the search box
    shadowColor: '#000', // Shadow to give depth to the box
    shadowOffset: { width: 0, height: 2 }, // Shadow position
    shadowOpacity: 0.1, // Slight shadow opacity
    shadowRadius: 6, // Radius of the shadow
    elevation: 4, // For Android devices to enable shadow
  },
  searchInput: {
    flex: 1, // Take up available space
    fontSize: 16,
    paddingVertical: 0, // No vertical padding, to align the text properly
  },
  searchIcon: {
    marginLeft: 10, // Space between the input and the icon
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
});


// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   bodyHtmlRoot: {
//     height: '100%',
//     margin: 0,
//     fontFamily: 'Arial, sans-serif',
//   },
//     // container: {
//     //   flex: 1, // Ensures the entire screen space is used and avoids the navbar being out of line
//     //   backgroundColor: '#f8f8f8', // Optional background color for the whole screen
//     // },
//     // navbar: {
//     //   backgroundColor: '#f8f8f8',
//     //   padding: 10,
//     //   paddingTop: 20,
//     //   flexDirection: 'row', // Align items horizontally
//     //   justifyContent: 'space-between', // Spread the items apart (menu and buttons)
//     //   alignItems: 'center', // Vertically align items in the center
//     //   width: '100%', // Ensure the navbar takes the full width of the screen
//     //   borderBottomWidth: 1, // Optional, adds a thin border at the bottom
//     //   borderColor: '#ccc', // Optional, color of the border
//     // },
 
//     // navLinks: {
//     //   marginTop: 10,
//     //   width: '100%', // Ensure the links don't go out of bounds
//     // },
//     // link: {
//     //   fontSize: 16,
//     //   marginBottom: 5,
//     //   color: '#007BFF',
//     // },
  
//   navbar: {
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     position: 'absolute', // Use 'absolute' for a fixed position effect
//     height: '100%',
//     width: 120,
//     backgroundColor: 'black',
//     shadowColor: 'rgba(0, 0, 0, 0.1)',
//     shadowOffset: { width: 2, height: 0 },
//     shadowOpacity: 0.5,
//     shadowRadius: 5,
//     padding: 20,
//   },
//   navLinks: {
//     flexDirection: 'column',
//   },
//   navLink: {
//     textDecorationLine: 'none',
//     color: 'white',
//     paddingVertical: 10,
//     marginVertical: 5,
//     fontSize: 16,
//   },
//   menuButton: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     borderRadius: 5,
//   },
//   menuButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   navLinkHover: {
//     backgroundColor: '#0056b3',
//     borderRadius: 4,
//     transform: [{ translateY: -5 }],
//   },
//   profile: {
//     position: 'relative',
//     textAlign: 'left',
//   },
//   profileDetails: {
//     flexDirection: 'row',
//   },
//   profileImage: {
//     width: 35,
//     borderRadius: 20,
//     marginTop: 10,
//     cursor: 'pointer',
//   },
//   tooltip: {
//     position: 'absolute',
//     bottom: 60,
//     left: '50%',
//     transform: [{ translateX: -50 }],
//     width: 120,
//     backgroundColor: '#fff',
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 4,
//     shadowColor: 'rgba(0, 0, 0, 0.1)',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     padding: 10,
//     zIndex: 1000,
//   },
//   tooltipText: {
//     marginVertical: 5,
//   },
//   tooltipLink: {
//     color: '#0056b3',
//     textDecorationLine: 'none',
//   },
//   tooltipLinkHover: {
//     textDecorationLine: 'underline',
//   },
//   content: {
//     marginLeft: 170,
//     padding: 20,
//   },
//   section: {
//     width: '100%',
//     maxWidth: 800,
//     marginBottom: 20,
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 8,
//     shadowColor: 'rgba(0, 0, 0, 0.1)',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   sectionHeader: {
//     marginBottom: 10,
//     color: 'black',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   buttons: {
//     marginTop: 10,
//     flexDirection: 'row',
//     gap: 10,
//   },
//   button: {
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//     backgroundColor: 'black',
//     color: '#fff',
//     textAlign: 'center',
//   },
//   buttonHover: {
//     backgroundColor: '#0056b3',
//     transform: [{ translateY: -5 }],
//     shadowColor: 'rgba(0, 0, 0, 0.2)',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//   },
//   textarea: {
//     width: '100%',
//     padding: 10,
//     borderRadius: 5,
//     borderColor: '#ced4da',
//     borderWidth: 1,
//     textAlignVertical: 'top',
//     minHeight: 60,
//   },
//   commentSection: {
//     marginTop: 20,
//     display: 'none', // React Native doesn't support 'display: none'
//   },
//   commentSectionHeader: {
//     marginBottom: 10,
//     color: 'black',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   comment: {
//     backgroundColor: '#f8f9fa',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   iconButton: {
//     backgroundColor: 'transparent',
//     borderColor: 'transparent',
//     fontSize: 24,
//     color: 'black',
//   },
//   iconButtonHover: {
//     color: '#0056b3',
//   },
//   loginContainer: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     width: 300,
//     textAlign: 'center',
//   },
//   loginHeader: {
//     marginBottom: 20,
//     color: '#333',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   loginInput: {
//     width: '100%',
//     padding: 10,
//     marginVertical: 10,
//     borderWidth: 1,
//     borderColor: '#ced4da',
//     borderRadius: 5,
//   },
//   loginButton: {
//     width: '100%',
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: 'black',
//     color: '#fff',
//     textAlign: 'center',
//   },
//   loginButtonHover: {
//     backgroundColor: '#0056b3',
//   },
//   userList: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   userCard: {
//     backgroundColor: '#f9f9f9',
//     padding: 15,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//     textAlign: 'center',
//     marginBottom: 20,
//     width: '45%',
//   },
//   username: {
//     margin: 0,
//     fontSize: 24,
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   programme: {
//     fontSize: 16,
//     color: '#555',
//   },
//   searchBox: {
//     position: 'absolute',
//     top: 20,
//     right: 20,
//     marginBottom: 20,
//   },
//   searchInput: {
//     padding: 10,
//     width: 250,
//     borderRadius: 5,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     fontSize: 16,
//   },
//   questionItem: {
//     marginBottom: 20,
//     padding: 20,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     backgroundColor: '#f9f9f9',
//   },
//   commentTextarea: {
//     width: '100%',
//     padding: 10,
//     marginTop: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     textAlignVertical: 'top',
//     minHeight: 60,
//   },
//   submitComment: {
//     marginTop: 10,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     backgroundColor: 'black',
//     color: 'white',
//     borderRadius: 5,
//     textAlign: 'center',
//   },
//   submitCommentHover: {
//     backgroundColor: '#0056b3',
//   },
//   active: {
//     backgroundColor: '#0056b3',
//     color: 'white',
//     display: 'inline-block',
//   },
// });

// export default styles;
