import Image from 'next/image';

export default function TitleImage() {
	return (
		<div className="p-2 md:p-0 md:mr-6">
			<Image
				src="/titleimg.webp"
				width={1100}
				height={1100}
				alt="Game title image"
				// objectFit="cover"
				className="mt-0 rounded-3xl md:ml-8 mt-2"
			/>
		</div>
	);
}
