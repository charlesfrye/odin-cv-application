import { useState } from "react";

import Button from "../Button";
import Education from "../Education";
import Experience from "../Experience";
import PersonalInfo from "../PersonalInfo";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    education: [],
    experience: [],
  });

  const [isEditMode, setIsEditMode] = useState(true);

  const addEducation = () => {
    setFormData((prevState) => ({
      ...prevState,
      education: [...prevState.education, { school: "", study: "", date: "" }],
    }));
  };

  const removeEducation = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      education: prevState.education.filter((_, i) => i !== index),
    }));
  };

  const addExperience = () => {
    setFormData((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        { company: "", position: "", responsibilities: "", date: "" },
      ],
    }));
  };

  const removeExperience = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      experience: prevState.experience.filter((_, i) => i !== index),
    }));
  };

  const handleInputChange = (event, index, section) => {
    const { name, value } = event.target;
    if (section === "education" || section === "experience") {
      const newData = [...formData[section]];
      newData[index][name] = value;
      setFormData((prevState) => ({ ...prevState, [section]: newData }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = () => {
    setIsEditMode(false);
    console.log(formData);
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  return (
    <div className="container">
      <PersonalInfo
        formData={formData}
        handleInputChange={handleInputChange}
        isEditMode={isEditMode}
      />

      <Education
        educationData={formData.education}
        handleInputChange={handleInputChange}
        isEditMode={isEditMode}
        handleClick={removeEducation}
      />

      <Experience
        experienceData={formData.experience}
        handleInputChange={handleInputChange}
        isEditMode={isEditMode}
        handleClick={removeExperience}
      />

      {isEditMode ? (
        <div className="pair-container">
          <Button label="Add Education" onClick={addEducation} />
          <Button label="Add Experience" onClick={addExperience} />
        </div>
      ) : null}

      {isEditMode ? (
        <Button label="Submit" onClick={handleSubmit} variant="main" />
      ) : (
        <Button label="Edit" onClick={handleEdit} variant="main" />
      )}
    </div>
  );
};

export default Form;
