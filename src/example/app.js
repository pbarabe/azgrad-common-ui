import { createRoot } from 'react-dom/client'
import { Header, Footer } from '../index'

const header = document.getElementById('header_arizona')
const headerRoot = createRoot(header)
headerRoot.render(<Header />)

const footer = document.getElementById('footer')
const footerRoot = createRoot(footer)
footerRoot.render(<Footer />)
