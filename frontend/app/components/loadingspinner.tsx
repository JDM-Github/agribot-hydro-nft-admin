
export default function LoadingSpinner() {
    return <>
		<div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center min-h-screen">
			<div className="w-16 h-16 border-t-4 border-green-500 border-solid rounded-full animate-spin"></div>
		</div>
    </>
}