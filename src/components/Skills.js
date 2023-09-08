import introPara from '../assets/introPara';
import devIcons from '../assets/icons/DevIcons';
import './Skills.css';

export default function Skills() {
  return (
    <section
      id='skills'
      className='skills-section'
    >
      <h1>About me</h1>
      <div className='about-me'>
        <p>{introPara}</p>
      </div>
      <div className='image-table'>
        {devIcons.map((skill) => (
          <div key={Math.random()}>
            <img src={skill.address} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
