import Input from "../Input";
import Button from "../Button";

const Experience = ({
  experienceData,
  handleInputChange,
  isEditMode,
  handleClick,
}) => {
  return experienceData.map((exp, index) => (
    <div key={index} className="form-container added-item">
      <Input
        name="company"
        placeholder="Company Name"
        value={exp.company}
        onChange={handleInputChange}
        index={index}
        section="experience"
        isEditMode={isEditMode}
      />
      <Input
        name="position"
        placeholder="Position"
        value={exp.position}
        onChange={handleInputChange}
        index={index}
        section="experience"
        isEditMode={isEditMode}
      />
      <Input
        name="responsibilities"
        placeholder="Responsibilities"
        value={exp.responsibilities}
        onChange={handleInputChange}
        index={index}
        section="experience"
        isEditMode={isEditMode}
      />
      <Input
        name="date"
        placeholder="Work Dates"
        value={exp.date}
        onChange={handleInputChange}
        index={index}
        section="experience"
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

export default Experience;
