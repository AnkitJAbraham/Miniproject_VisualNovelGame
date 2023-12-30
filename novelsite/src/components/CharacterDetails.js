import React from 'react';

export default function CharacterDetails() {
	return (
		<div className="container mx-auto my-8 rounded-lg shadow-md">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="mb-4">
					<h2 className="text-2xl font-bold mb-2 text-[#FF0054]">Main Characters</h2>
					<ul className="list-disc pl-4 flex flex-col gap-6 mt-6">
						<li>
							<span className="font-bold text-xl text-[#03FCBA]">Antonio:</span> The title
							character, a wealthy Venetian merchant.
						</li>
						<li>
							<span className="font-bold text-xl text-[#03FCBA]">Bassanio:</span>{' '}
							Antonio&apos;s friend, who seeks a loan from him to court the
							wealthy heiress Portia.
						</li>
						<li>
							<span className="font-bold text-xl text-[#03FCBA]">Portia:</span> A wealthy
							heiress, and the object of Bassanio&apos;s affections.
						</li>
						<li>
							<span className="font-bold text-xl text-[#03FCBA]">Shylock:</span> A Jewish
							moneylender in Venice, and the antagonist of the play.
						</li>
						<li>
							<span className="font-bold text-xl text-[#03FCBA]">Jessica:</span> Shylock&apos;s
							daughter, who elopes with Lorenzo.
						</li>
						<li>
							<span className="font-bold text-xl text-[#03FCBA]">Lorenzo:</span> A friend of
							Antonio and Bassanio, who elopes with Jessica.
						</li>
					</ul>
				</div>

				<div className="mb-4">
					<h2 className="text-2xl font-bold mb-2 text-[#FF0054]">Side Characters</h2>
					<ul className="list-disc pl-4 flex flex-col gap-6 mt-6">
						<li>
							<span className="font-bold text-xl text-[#03FCBA]">Gratiano:</span> A friend of
							Antonio and Bassanio, and later husband to Nerissa.
						</li>
						<li>
							<span className="font-bold text-xl text-[#03FCBA]">Nerissa:</span> Portia&apos;s
							maid and confidante, later wife to Gratiano.
						</li>
						<li>
							<span className="font-bold text-xl text-[#03FCBA]">Launcelot Gobbo:</span>{' '}
							Shylock&apos;s servant, later working for Bassanio.
						</li>
						<li>
							<span className="font-bold text-xl text-[#03FCBA]">Old Gobbo:</span> Launcelot
							Gobbo&apos;s father.
						</li>
						<li>
							<span className="font-bold text-xl text-[#03FCBA]">Prince of Morocco:</span> A
							suitor to Portia.
						</li>
						<li>
							<span className="font-bold text-xl text-[#03FCBA]">Prince of Arragon:</span>{' '}
							Another suitor to Portia.
						</li>
						<li>
							<span className="font-bold text-xl text-[#03FCBA]">Salerio and Solanio:</span>{' '}
							Friends of Antonio and Bassanio.
						</li>
						<li>
							<span className="font-bold text-xl text-[#03FCBA]">Balthazar:</span>{' '}
							Portia&apos;s servant.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
