import {FaGithub} from 'react-icons/fa'
function Footer() {
    const footerYear = new Date().getFullYear()
    return(
        <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
            <div>
            <FaGithub className='inline pr-2 text-4xl'/>
                <p>Copyright &copy; {footerYear} All rights Reserved</p>
            </div>
        </footer>
    )
}
export default Footer