import React from 'react';
import ContainerBlock from '../components/ContainerBlock';
import CharacterCarousel from '../components/CharacterCarousel';
import CharacterDetails from '../components/CharacterDetails';

export default function About() {
	return (
		<div className="bg-black">
			<ContainerBlock />
			<div className='h-[10vh] invisible'></div>
			<div className="w-5/6 mx-auto text-white">
				<div className="py-5 md:h-auto h-screen">
					<div className="text-4xl md:text-left text-center font-extrabold leading-none tracking-tight md:text-5xl text-[#faebd7]">
						Introduction
					</div>
					<div className="text-l text-justify md:py-6 py-10">
						<div>
							Visual narrative games are video games that focus on storytelling
							through visuals, using cutscenes, dialogue, and character
							interactions to advance the narrative. They are based on the
							visual novel genre of literature.{' '}
							<br className="block max-[400px]:hidden" />
							<br />
							<div className="hidden md:block">
								A notable example is &quot;
								<span className="italic">Ace Attorney</span>&quot;, a Japanese
								visual novel based game.
							</div>
						</div>
						<div>
							<div className="hidden md:block">
								Interactive storytelling is a form of digital entertainment in
								which the storyline is not predetermined.
							</div>{' '}
							<br className="md:block hidden" />
							<br className="block max-[400px]:hidden" />
							<div>
								The author creates the setting, characters, and situation which
								the narrative must address, but the user (also reader or player)
								experiences a unique story based on their interactions and
								choices.
							</div>
						</div>
					</div>
					<div className="font-bold text-xl shadow-[0_10px_30px_#03FCBA] py-6 m-4 text-center rounded-2xl transition-all duration-300 ease-out hover:animate-step-end hover:scale-[1.02]">
						Therefore, our goal was to produce a playable game which combines
						the above characteristics.
					</div>
				</div>
				<div className="py-6 mb-10">
					<div className="text-4xl md:text-left text-center font-extrabold leading-none tracking-tight md:text-5xl text-[#faebd7]">
						Features
					</div>
					<div className="text-base md:py-8 pt-20 flex flex-col md:space-y-5 space-y-10 md:text-left text-justify">
						<div>
							Implement branching storylines with weighted choices, ensuring
							player decisions have meaningful consequences on the narrative
							progression.
						</div>

						<div>
							Multiple decision points throughout the story, with many of them
							carrying weightage (consequences), and others with differing paths
							each time.
						</div>

						<div>
							The result of the game&apos;s climax would be the determination of
							all the weighted values, paths and decisions taken, with multiple
							story endings.
						</div>
					</div>
				</div>
				<div className="">
					<div className="text-4xl md:text-left text-center font-extrabold leading-none tracking-tight md:text-5xl text-[#faebd7]">
						Meet The Characters
					</div>
					<div className="flex md:flex-row flex-col">
						<CharacterCarousel />
						<CharacterDetails />
					</div>
				</div>
			</div>
		</div>
	);
}
