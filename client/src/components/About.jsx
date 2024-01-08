import React, { useEffect, useState } from 'react';
import NavBar from './Navbar';
import { Select, MenuItem } from '@mui/material';

const About = () => {
  const [userData, setUserData] = useState({});
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedContent, setSelectedContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/fetchUserData');
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error('Error fetching data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setSelectedContent(getContentForOption(selectedValue));
  };

  const getContentForOption = (option) => {
    switch (option) {
      case 'visionAndMission':
        return [<div style={styles.subContentContainer}>{userData.vision}</div>];
      case 'boardOfManagement':
        return ['Governing-Body', "President's Message", "Principal's Message", 'Institute Information'];
      case 'cbitatglance':
        const awardsLines = userData.awards.split('@');
        const placementsLines = userData.placement.split('@');
        const instHighlightsLines = userData.instHighlights.split('@');
        const infrastructureLines = userData.infrastructure.split('@');

        const awardsContent = awardsLines.map((line, index) => (
          <div key={`awards-${index}`} style={styles.listItem}>
            <span style={styles.bullet}></span>
            {line}
          </div>
        ));

        const placementsContent = placementsLines.map((line, index) => (
          <div key={`placements-${index}`} style={styles.listItem}>
            <span style={styles.bullet}></span>
            {line}
          </div>
        ));

        const instHighlightsContent = instHighlightsLines.map((line, index) => (
          <div key={`instHighlights-${index}`} style={styles.listItem}>
            <span style={styles.bullet}></span>
            {line}
          </div>
        ));

        const infrastructureContent = infrastructureLines.map((line, index) => (
          <div key={`infrastructure-${index}`} style={styles.listItem}>
            <span style={styles.bullet}></span>
            {line}
          </div>
        ));

        return [
          <div style={styles.subContentContainer}>
            <div>{userData.affiliation}</div>
            <div>
              <b>Awards:</b>
              <ul style={styles.listContainer}>{awardsContent}</ul>
            </div>
            <div>
              <b>Placements:</b>
              <ul style={styles.listContainer}>{placementsContent}</ul>
            </div>
            <div>
              <b>Institution Highlights:</b>
              <ul style={styles.listContainer}>{instHighlightsContent}</ul>
            </div>
            <div>
              <b>Infrastructure:</b>
              <ul style={styles.listContainer}>{infrastructureContent}</ul>
            </div>
          </div>,
        ];

      case 'Governing-Body':
        return ['Governing Body Content'];
      case "President's Message":
        return ["President's Message Content"];
      case "Principal's Message":
        return ["Principal's Message Content"];
      case 'Institute Information':
        return ['Institute Information Content'];
      default:
        return [];
    }
  };

  return (
    <div style={styles.container}>
      <NavBar />
      <div style={styles.contentContainer}>
        <h2 style={styles.heading}>About us</h2>
        <div style={styles.userDataContainer}>
          <p style={styles.userData}> {userData.name}</p>
          <p style={styles.userData}>{userData.age}</p>
          <img src={userData.image} alt="user" style={styles.userImage} />
        </div>
      </div>
      <div style={styles.sideContainer}>
        <div style={styles.tabContainer}>
          <h3>Explore us!!!</h3>
          <Select
            value={selectedOption}
            onChange={handleOptionChange}
            style={styles.dropdown}
            displayEmpty
          >
            <MenuItem disabled value="">
              Select an option
            </MenuItem>
            <MenuItem value="visionAndMission">Vision and Mission</MenuItem>
            <MenuItem value="boardOfManagement">Board of Management</MenuItem>
            <MenuItem value="cbitatglance">CBIT At a Glance</MenuItem>
          </Select>
        </div>
        {selectedContent.length > 0 && (
          <div style={styles.dropdownContent}>
            {selectedContent.map((item, index) => (
              <MenuItem key={index} style={styles.menuItem}>
                {item}
              </MenuItem>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '50px auto',
    width: '80%',
  },
  contentContainer: {
    width: '100%',
    marginBottom: '20px',
  },
  sideContainer: {
    width: '100%',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  userDataContainer: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f8f8f8',
    transition: 'background-color 0.3s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  userData: {
    fontSize: '18px',
    margin: '10px 0',
  },
  userImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
  },
  tabContainer: {
    marginBottom: '20px',
  },
  dropdown: {
    width: '100%',
    marginTop: '10px',
  },
  dropdownContent: {
    marginTop: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  menuItem: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
  selectedContentContainer: {
    marginTop: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    maxWidth: '800px',
    overflow: 'auto',
  },
  subContentContainer: {
    margin: '0px 3px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff',
    width: '900px',
    whiteSpace: 'pre-wrap',
  },
  listContainer: {
    padding: '0',
    listStyleType: 'none',
    marginLeft: '20px',
  },
  listItem: {
    margin: '5px 0',
    display: 'flex',
    alignItems: 'center',
  },
  bullet: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#4A90E2',
    marginRight: '10px',
    verticalAlign: 'middle',
  },
};

export default About;
