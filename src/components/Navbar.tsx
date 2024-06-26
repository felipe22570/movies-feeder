function Navbar() {
	return (
		<div className="navbar bg-base-100 sticky top-0 z-50 lg:px-10">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a>Item 1</a>
						</li>
						<li>
							<a>Parent</a>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<a href="/" className="btn btn-ghost text-xl">
					MoviesFeeder
				</a>
			</div>
			<div className="navbar-end hidden lg:flex">
				<ul className="menu menu-horizontal px-1 items-center">
					<li>
						<a>Item 1</a>
					</li>
					<li>
						<details>
							<summary>Parent</summary>
							<ul className="p-2">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<a href="/login" className="btn ml-5">
							Login
						</a>
					</li>
				</ul>
			</div>
			<div className="navbar-end lg:hidden">
				<a href="/login" className="btn ml-5">
					Login
				</a>
			</div>
		</div>
	);
}

export default Navbar;
