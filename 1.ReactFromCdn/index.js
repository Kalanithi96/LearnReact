function Header() {

	return (
		<div class="head">
			<header>
				<nav class="nav-bar">
					<h3>Greenier Reaction</h3>
					<ul class="nav-items">
						<li>About</li>
						<li>Pricing</li>
						<li>Contact</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}
function Footer() {

	return (
		<div>
			<footer>
				<h3>Powered by React</h3>
				<ul>
					<li>FB</li>
					<li>IN</li>
					<li>GIT</li>
					<li>SNP</li>
				</ul>
			</footer>
		</div>
	);
}

function Body(){

	return (
		<div>
			<h1>My First React Project</h1>
			<ol>
				<li>I am excited</li>
				<li>Hope to learn more</li>
				<li>I have used three components here</li>
			</ol>
		</div>
	);
}

ReactDOM.render(
	<div>
		<Header />
		<Body />
		<Footer />
	</div>,
	document.getElementById('root')
)