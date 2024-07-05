import { TypeAnimation } from 'react-type-animation';

const TypeWriter = () => {
  return (
    <div className="typeWrite">
      <TypeAnimation
        sequence={[
          `hi i'm mia\n welcome to my website!`,
          1000,
          "",
        ]}
        speed={1}
        style={{ whiteSpace: 'pre-line', fontSize: '2em' }}
        repeat={Infinity}
        omitDeletionAnimation={true}
      />
    </div>
  );
};

export default TypeWriter;