import { TypeAnimation } from 'react-type-animation';

const TypeWriter = ({text}: {text:string}) => {
  return (
    <div className="typeWrite">
      <TypeAnimation
        sequence={[
          text,
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

