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
      <div
        style={{
          borderColor: `${color || '#fff'} transparent transparent transparent`,
        }}
      ></div>
      <div
        style={{
          borderColor: `${color || '#fff'} transparent transparent transparent`,
        }}
      ></div>
      <div
        style={{
          borderColor: `${color || '#fff'} transparent transparent transparent`,
        }}
      ></div>
      <div
        style={{
          borderColor: `${color || '#fff'} transparent transparent transparent`,
        }}
      ></div>
    </div>
  );
};

export default Loader;
