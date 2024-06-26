function FavoriteButton() {
	const handleFavorite = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
	};

	return (
		<div
			className="p-2 rounded-full bg-gray-500 bg-opacity-65 text-white cursor-pointer"
			onClick={handleFavorite}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 256 256"
				className="hover:text-red-500"
			>
				<path
					fill="currentColor"
					d="M240 98a57.63 57.63 0 0 1-17 41l-89.3 90.62a8 8 0 0 1-11.4 0L33 139a58 58 0 0 1 82-82.1l13 12.15l13.09-12.19A58 58 0 0 1 240 98"
				></path>
			</svg>
		</div>
	);
}

export default FavoriteButton;
