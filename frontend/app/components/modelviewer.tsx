import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const ModelViewer = ({ modelPath }: { modelPath: string }) => {
	const { scene } = useGLTF(modelPath);

	return (
		<Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
			<ambientLight intensity={0.5} />
			<directionalLight position={[2, 5, 2]} intensity={1} />
			<primitive object={scene} scale={30} />
			<OrbitControls />
		</Canvas>
	);
};

export default ModelViewer;
