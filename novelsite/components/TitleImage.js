import Image from 'next/image';

export default function TitleImage() {
	return (
		<div className="flex flex-col justify-around space-y-6">
			<div className="w-full overflow-hidden flex justify-center px-2 md:mt-0 -mt-32">
				<Image
					src="/titleimg.webp"
					width={1000}
					height={900}
					alt="Game title image"
					className="rounded-3xl"
				/>
			</div>
			<div className="text-xl md:text-2xl text-center md:pb-10">
				Presenting .... our Miniproject !<br/>
				Done as part of our BTech Degree at RSET, Kochi
			</div>
		</div>
	);
}
