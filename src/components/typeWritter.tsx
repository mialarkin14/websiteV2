import { TypeAnimation } from 'react-type-animation';

const TypeWriter = ({className, text, repeatT}: {className: string, text:string, repeatT:any}) => {
  return (
    <div className={className}>
      <TypeAnimation
        sequence={[
          text,
          1000,
          "",
        ]}
        speed={1}
        style={{ whiteSpace: 'pre-line', fontSize: '2em' }}
        repeat={repeatT}
        omitDeletionAnimation={true}
   
      />
    </div>
  );
};

export default TypeWriter;

