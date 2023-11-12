import Image from 'next/image';

export default function TitleImage() {
	return (
		<div className="w-full overflow-hidden flex justify-center">
			<Image
				src="/titleimg.webp"
				width={1000}
				height={900}
				alt="Game title image"
				className="rounded-3xl"
			/>
		</div>
	);
}
