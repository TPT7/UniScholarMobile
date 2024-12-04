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
    width: '90%', // Reduce the container width to fit content better
    maxWidth: 400, // Set a maximum width for large screens
    padding: 20, // Padding around the content
    borderWidth: 1, // Smaller border width
    borderColor: '#ccc', // Border color
    borderRadius: 10, // Rounded corners for the container
    backgroundColor: '#fff', // Background color of the container
    alignItems: 'center', // Horizontally center the elements inside the container
    marginTop: 100, // Adds space at the top of the screen
    marginHorizontal: '5%', // Adds equal margin on both sides of the container
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  loginInput: {
    width: '100%', // Inputs should take full width of the container
    height: 40,
    borderColor: '#ccc', // Border color for input fields
    borderWidth: 1, // Smaller border for input fields
    borderRadius: 5, // Rounded corners for input fields
    marginBottom: 15, // Adds space below the input field
    paddingLeft: 10, // Padding inside the input field
  },
  link: {
    color: 'blue',
    marginTop: 15,
    textDecorationLine: 'underline',
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

