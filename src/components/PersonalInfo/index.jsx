import PropTypes from "prop-types";

import Input from "../Input";

const PersonalInfo = ({ formData, handleInputChange, isEditMode }) => {
  return (
    <div className="form-container">
      <div className="pair-container">
        <Input
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          isEditMode={isEditMode}
        />
        <Input
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          isEditMode={isEditMode}
        />
      </div>
      <Input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        isEditMode={isEditMode}
      />
      <Input
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleInputChange}
        isEditMode={isEditMode}
      />
      <hr />
    </div>
  );
};

PersonalInfo.propTypes = {
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  isEditMode: PropTypes.bool.isRequired,
};

export default PersonalInfo;
