import s from '../../styles/Loader.module.css';

const Loader = ({
  color = '#5a4bda',
  scale = 0.8,
}: {
  color?: string;
  scale?: number;
}) => {
  return (
    <div className={s['loader-ring']} style={{ transform: `scale(${scale})` }}>
      {[1, 2, 3, 4].map((item) => {
        return (
          <div
            key={item}
            style={{
              borderColor: `${
                color || '#fff'
              } transparent transparent transparent`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Loader;
