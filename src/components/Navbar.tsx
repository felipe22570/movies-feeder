function Navbar() {
	return (
		<div className="navbar">
			<div className="navbar fixed w-full top-0 px-10 bg-base-100 z-50">
				<div className="flex-1">
					<a className="btn btn-ghost text-xl">MoviesFeeder</a>
				</div>
				<div className="flex-none">
					<ul className="menu menu-horizontal px-1">
						<li>
							<a>Favorites</a>
						</li>
						<li>
							<details>
								<summary> Parent </summary>
								<ul className="p-2 bg-base-100 rounded-t-none">
									<li>
										<a>Link 1</a>
									</li>
									<li>
										<a>Link 2</a>
									</li>
								</ul>
							</details>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
