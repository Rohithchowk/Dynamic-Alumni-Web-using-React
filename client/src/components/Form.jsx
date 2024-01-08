import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const [vision, setVision] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [awards, setAwards] = useState('');
  const [placement, setPlacement] = useState('');
  const [instHighlights, setInstHighlights] = useState('');
  const [infrastructure, setInfrastructure] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age, image, vision, affiliation, awards, placement, instHighlights, infrastructure }),
      });

      if (response.ok) {
        console.log('Data submitted successfully');
        navigate('/Home');
      } else {
        console.error('Error submitting data');
        // Handle error, maybe show a message to the user
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error, maybe show a message to the user
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Form Page</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <p style={styles.formDescription}>Enter the information related to your website's About us page</p>

        <label style={styles.label}>
          Institute Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{...styles.input,width:'800px'}} />
        </label>

        <label style={styles.label}>
          About Us Content:
          <textarea
            value={age}
            onChange={(e) => setAge(e.target.value)}
            style={{ ...styles.input, width: '800px', height: '200px', resize: 'none' }}
            maxLength={800}
          />
        </label>

        <label style={styles.label}>
          Logo URL:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} style={{...styles.input,width:'800px'}}/>
        </label>

        <label style={styles.label}>
          Vision & Mission:
          <textarea
            value={vision}
            onChange={(e) => setVision(e.target.value)}
            style={{ ...styles.input, width: '800px', height: '200px', resize: 'none' }}
            maxLength={800}
          />
        </label>

        <label style={styles.label}>
          Affiliations and Accreditations:
          <textarea
            value={affiliation}
            onChange={(e) => setAffiliation(e.target.value)}
            style={{ ...styles.input, width: '800px', height: '200px', resize: 'none' }}
            maxLength={800}
          />
        </label>

        <label style={styles.label}>
          Awards and Recognitions:
          <textarea
            value={awards}
            onChange={(e) => setAwards(e.target.value)}
            style={{ ...styles.input, width: '800px', height: '200px', resize: 'none' }}
            maxLength={800}
          />
        </label>

        <label style={styles.label}>
          Placement Highlights:
          <textarea
            value={placement}
            onChange={(e) => setPlacement(e.target.value)}
            style={{ ...styles.input, width: '800px', height: '200px', resize: 'none' }}
            maxLength={800}
          />
        </label>

        <label style={styles.label}>
          Institution Highlights:
          <textarea
            value={instHighlights}
            onChange={(e) => setInstHighlights(e.target.value)}
            style={{ ...styles.input, width: '800px', height: '200px', resize: 'none' }}
            maxLength={800}
          />
        </label>

        <label style={styles.label}>
          Describe Your Infrastructure:
          <textarea
            value={infrastructure}
            onChange={(e) => setInfrastructure(e.target.value)}
            style={{ ...styles.input, width: '800px', height: '200px', resize: 'none' }}
            maxLength={800}
          />
        </label>

        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '50px auto',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft:'-300px'
  },
  formDescription: {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#555',
    marginLeft:'300px'
  },
  label: {
    marginBottom: '15px',
    width: '100%',
    maxWidth: '500px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  submitButton: {
    backgroundColor: '#4A90E2',
    color: '#fff',
    padding: '12px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginLeft:'300px'
  },
};

export default FormPage;
