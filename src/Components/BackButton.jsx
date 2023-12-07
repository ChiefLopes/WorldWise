import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from './Button';


const BackButton = () => {
    const move = useNavigate();
    
  return (
    <Button
      type="back"
      onClick={(e) => {
        //   Used the e.preventDefault function to stop the form action on the button so that the page won't auto-relaod when clicked
        e.preventDefault();
        move(-1);
      }}>
      &larr; Back
    </Button>
  );
}

export default BackButton