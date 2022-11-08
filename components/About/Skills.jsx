import Image from "react-bootstrap/Image";

const Skills = () => {
  return (
    <div className="about-wrapper__skills-wrapper">
      <h3 className="about-wrapper__skills-title mt-5 mb-4">MY SKILLS</h3>
      <ul className="about-wrapper__skills-list">
        <li>
          <Image src="/icons/html5.png" alt="HTML5 icon" />
        </li>
        <li>
          <Image src="/icons/css3.png" alt="CSS3 icon" />
        </li>
        <li>
          <Image src="/icons/javascript.png" alt="Javascript icon" />
        </li>
        <li>
          <Image src="/icons/react.png" alt="React icon" />
        </li>
        <li>
          <Image src="/icons/nodejs.png" alt="Node icon" />
        </li>
        <li>
          <Image src="/icons/sql.png" alt="SQL icon" />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
