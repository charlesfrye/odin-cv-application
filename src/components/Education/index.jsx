import Input from "../Input";
import Button from "../Button";

const Education = ({
  educationData,
  handleInputChange,
  isEditMode,
  handleClick,
}) => {
  return educationData.map((edu, index) => (
    <div key={index} className="form-container added-item">
      <Input
        name="school"
        placeholder="School Name"
        value={edu.school}
        onChange={handleInputChange}
        index={index}
        section="education"
        isEditMode={isEditMode}
      />
      <Input
        name="study"
        placeholder="Title of Study"
        value={edu.study}
        onChange={handleInputChange}
        index={index}
        section="education"
        isEditMode={isEditMode}
      />
      <Input
        name="date"
        placeholder="Date of Study"
        value={edu.date}
        onChange={handleInputChange}
        index={index}
        section="education"
        isEditMode={isEditMode}
      />
      {isEditMode ? (
        <Button
          label="Remove"
          variant="danger"
          onClick={() => handleClick(index)}
        />
      ) : null}
      <hr />
    </div>
  ));
};

export default Education;
