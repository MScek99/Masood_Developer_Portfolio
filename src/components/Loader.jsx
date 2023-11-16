import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='items-center justify-center rounded-full w-14 h-14 
      bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin'>
      </span>
      <p
        style={{
          fontSize: 14,
          color: "violet",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;