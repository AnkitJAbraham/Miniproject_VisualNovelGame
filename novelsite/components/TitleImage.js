import Image from 'next/image';

export default function TitleImage() {
	return (
		<div className="flex flex-col md:space-y-6 space-y-24">
			<div className="w-full overflow-hidden flex justify-center px-2 ">
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
