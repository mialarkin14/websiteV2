import { TypeAnimation } from 'react-type-animation';

const TypeWriter = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          `hi i'm mia!\ni'm a computer engineer\nwelcome to my website!`,
          1000,
          "",
        ]}
        speed={50}
        style={{ whiteSpace: 'pre-line', fontSize: '2em' }}
        repeat={Infinity}
      />
    </div>
  );
};

export default TypeWriter;