import { Facebook, Github, Instagram, TwitterIcon } from 'lucide-react'
import ContactForm from '../../components/ContactForm'
import './contact.css'

export default function ContactPage() {
    return (
        <div className='contact-page'>
            <div className='contact-header'>
                <h1>Let's Build Something Great.</h1>
                <p>
                    Ready to start a project? Need a consultation? Reach out to the Crea8haus team—we’re here to help you turn ideas into reality.
                </p>
            </div>

            <section className='contact-main'>
                <ContactForm />

                <div className='contact-details'>
                    <h2>Conatct Information</h2>
                    <p><strong>Email:</strong> contact@crea8haus.com</p>
                    <p><strong>Phone:</strong> +234 xx xxx xxxx</p>
                    <p><strong>Location:</strong>Port-Harcourt, Nigeria (Remote globally)</p>

                    <div className='socials-list'>
                        <a href="https://facebook.com/crea8haus" target="_blank" rel="noopener noreferrer">
                            <Facebook size={24} /> 
                        </a>
                        <a href="https://twitter.com/crea8haus" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon size={24} /> 
                        </a>
                        <a href="https://instagram.com/crea9haus" target='_blank'
                        rel='noopener noreferrer'>
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>
            </section>

        </div>
    )
}
