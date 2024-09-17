import React from 'react'
import "./About.css"
import Nav from '../navbar/Nav'
import Footer from '../footer/Footer'
function Education() {
  return (
    <div className='Education-container'>
		<Nav />
     <div className="container">
   	<main className="row">
		<section className="col">
			<header className="title">
				<h2>EDUCATION</h2>
			</header>
			<div className="contents">
				<div className="box">
					<h4>2019 - 2023</h4>
					<h3>Visvesvaraya Technological University</h3>
					<p>B.E. (Bachelor of Engineering) in Computer Science and Engineering.</p>
					<br />
					<span>Percentage: 75</span>
				</div>

				<div className="box">
					<h4>2018 - 2019</h4>
					<h3>Alva’s PU College, Moodbidri.</h3>
					<p>PCMB (Physics, Chemistry, Math, Biology)</p>
					<br />
					<span>Percentage: 72</span>
				</div>
			</div>
		</section>
		<section className="col">
			<header className="title">
				<h2>EXPERIENCE</h2>
			</header>

			<div className="contents">
				
				<div className="box">
					<h3>Full Stack Web Developer Trainee at Geekster</h3>
					<p>Solved 200+ DSA/Coding questions on geekster platform(HackerRank).</p>
					<p>Participated in various coding contests organized by the platform(HackerRank).</p>
					<p>created several projects with JavaScript, HTML, CSS, and React.</p>
				</div>

				<div className="box">
					<h3>INFOTRIXS | Java Developer | Intern</h3>
					<p>Learned about database and server connectivity Through a JPA Repository.</p>
					<p>Utilised the Thymeleaf plugin to generate a view.</p>
					<p>Worked on the Postman tools.</p>
				</div>
			</div>
		</section>
	</main>
</div>
<Footer/>
</div>
  )
}

export default Education
