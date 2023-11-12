import React from 'react';

export default function Header() {
	return (
		<div className="h-[85vh] md:h-fit">
			<div className="text-3xl md:text-left text-center font-extrabold leading-none tracking-tight md:text-4xl text-[#faebd7]">
				Introduction
			</div>
			<div className="text-l text-justify md:py-6 py-10 px-10">
				<div>
					Visual narrative games are video games that focus on storytelling
					through visuals, using cutscenes, dialogue, and character interactions
					to advance the narrative. They are based on the visual novel genre of
					literature. <br />
					<br />
					<div className="hidden md:block">
						A notable example is &quot;
						<span className="italic">Ace Attorney</span>&quot;, a Japanese
						visual novel based game.
					</div>
				</div>
				<div>
					<div className="hidden md:block">
						Interactive storytelling is a form of digital entertainment in which
						the storyline is not predetermined.
					</div>{' '}
					<br />
					<br />
					<div>
						The author creates the setting, characters, and situation which the
						narrative must address, but the user (also reader or player)
						experiences <br /> a unique story based on their interactions and
						choices.
					</div>
				</div>
			</div>
			<div className="font-bold text-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] py-6 mx-4 mt-4 text-center">
				Therefore, our goal was to produce a playable game which combines the
				above characteristics.
			</div>
		</div>
	);
}
