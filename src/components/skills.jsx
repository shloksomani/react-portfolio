import React from "react";

class Skills extends React.Component {
	constructor() {
		super();
		this.state = {
			skillsWork: [
				{
					alt: 'HTML',
					src: 'https://img.icons8.com/color/240/000000/html-5--v1.png'
				},
				{
					alt: 'CSS',
					src: 'https://img.icons8.com/color/240/000000/css3.png'
				},
				{
					alt: 'JavaScript',
					src: 'https://img.icons8.com/color/240/000000/javascript--v1.png'
				},
				{
					alt: 'TypeScript',
					src: 'https://img.icons8.com/color/240/000000/typescript.png'
				},
				{
					alt: 'NodeJs',
					src: 'https://img.icons8.com/fluency/240/000000/node-js.png'
				},
				{
					alt: 'NPM',
					src: 'https://img.icons8.com/color/240/000000/npm.png'
				},
				{
					alt: 'Express',
					src: 'https://img.icons8.com/fluency/240/000000/express-js.png'
				},
				{
					alt: 'MySQL',
					src: 'https://img.icons8.com/fluency/240/000000/mysql-logo.png'
				},
				{
					alt: 'Sequelize',
					src: 'https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-icon.svg'
				},
				{
					alt: 'Heroku',
					src: 'https://img.icons8.com/color/240/000000/heroku.png'
				},
				{
					alt: 'JSON Web Token',
					src: 'https://img.icons8.com/color/240/000000/java-web-token.png'
				},
				{
					alt: 'GIT',
					src: 'https://img.icons8.com/color/240/000000/git.png'
				},
				{
					alt: 'GitHub',
					src: 'https://img.icons8.com/glyph-neue/256/000000/github.png'
				},
				{
					alt: 'React',
					src: 'https://img.icons8.com/office/480/000000/react.png'
				},
				{
					alt: 'MongoDB',
					src: 'https://img.icons8.com/color/240/000000/mongodb.png'
				},
				{
					alt: 'Visual Studio Code',
					src: 'https://img.icons8.com/color/240/000000/visual-studio-code-2019.png'
				},
				{
					alt: 'Linux',
					src: 'https://www.vectorlogo.zone/logos/linux/linux-icon.svg'
				},
				{
					alt: 'Ubuntu',
					src: 'https://www.vectorlogo.zone/logos/ubuntu/ubuntu-icon.svg'
				},
				{
					alt: 'Bash',
					src: 'https://img.icons8.com/color/240/000000/bash.png'
				},
			],
			skillsStudying: [
				{
					alt: 'AWS',
					src: 'https://img.icons8.com/color/240/000000/amazon-web-services.png'
				},
				{
					alt: 'Docker',
					src: 'https://img.icons8.com/color/240/000000/docker.png'
				},
				{
					alt: 'Ethereum',
					src: 'https://img.icons8.com/color/240/000000/ethereum.png'
				},
				{
					alt: 'Solidity',
					src: 'https://vectorwiki.com/images/Nth1M__solidity.svg'
				},
			]
		};
	}

	render() {
		return (
			<section id="skills" className="about-mf sect-pt4 route">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="box-shadow-full">
								<div className="row">
									<div >
										<div className="about-me pt-4 pt-md-0">
											<div className="title-box-2">
												<h5 className="title-left">Skills &#128200;</h5>
											</div>
											<h3>&#9874; What do i work with :</h3>
											<div className="skills-container">
												{this.state.skillsWork.map(skill => {
													return (
														<img
															className="skill-item"
															alt={ skill.alt }
															title={ skill.alt }
															src={ skill.src }
														/>
													)
												})
												}
											</div>
											<hr />
											<div className="title-box-2">
												<h3>&#128640; Soon :</h3>
											</div>
											<div className="skills-container">
												{this.state.skillsStudying.map(skill => {
													return (
														<img
															className="skill-item"
															alt={ skill.alt }
															title={ skill.alt }
															src={ skill.src }
														/>
													)
												})
												}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Skills;
