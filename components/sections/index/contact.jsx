// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title.block'

import css from '../../../styles/sections/projects/featured.module.scss'

import form from '../../../styles/sections/index/forms.module.scss';
import button from '../../../styles/blocks/button.module.scss';
import { useState, useRef } from 'react';
import Badges from '../../utils/badge.list.util';

import ReCAPTCHA from "react-google-recaptcha";


export default function Contact() {
	const [isLoading, setIsLoading] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)
	const [didAttempt, setDidAttempt] = useState(false)

	const recaptchaRef = useRef();

	async function onSubmit(event) {
		event.preventDefault();
		const token = await recaptchaRef.current.executeAsync();
		recaptchaRef.current.reset();
		setIsLoading(true);

		try {
			const response = await fetch('/api/emails', {
				method: 'POST',
				body: JSON.stringify({
					name: event.target.name.value,
					email: event.target.email.value,
					message: event.target.message.value,
					token
				}),
			});

			setIsSuccess(response.status == 200)
		} catch (error) {
			setIsSuccess(false);
		} finally {
			setDidAttempt(true);
			setIsLoading(false);
		}
	}

	return (
		<Section id="contact" classProp={css.hasBg}>
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Contact Me"
					preTitle="Got a problem to solve?"
					subTitle="Let's bring your vision to life."
					badges={[
						{
							"key": "location-dot",
							"name": "Brisbane, Australia",
							"type": "fad"
						},
						{
							"key": "reply-clock",
							"name": "~7 hours response time",
							"type": "fad"
						}
					]}
				/>
				<form className={form.form} onSubmit={onSubmit}>
					<ul>
						<li>
							<input placeholder='Your name' type="text" id="name" name="name" required={true} />
						</li>
						<li>
							<input placeholder='Your email' type="email" id="email" name="email" required={true} />
						</li>
						<li>
							<textarea placeholder='Message' name="message" id="message" rows={8} required={true}></textarea>
						</li>
						<li>
							<ReCAPTCHA
								ref={recaptchaRef}
								sitekey='6LdySEMqAAAAAI7Ro6n9EoYG7Re44h7cTFYvfXLu'
								size='invisible' />
							<p style={{ fontSize: '.875rem' }}>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
						</li>
						<li>
							<span>

								<button style={isLoading ? { cursor: 'not-allowed', opacity: 0.5 } : {}} type="submit" className={`button ${button.primary}`} disabled={isLoading}>
									Send
								</button>
								{
									didAttempt && !isLoading ?
										<span style={{ gap: 0 }}>
											<Badges list={isSuccess ?
												[
													{
														"key": "check",
														"name": "Successfully sent email",
														"type": "fad"
													}
												] :
												[
													{
														"key": "circle-exclamation",
														"name": "Failed to send email",
														"type": "fad"
													}
												]
											} />
										</span> :
										<></>
								}
							</span>
						</li>
					</ul>
				</form>
			</Container>
			<div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
	)
}
