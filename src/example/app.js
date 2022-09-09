/* eslint-disable react/react-in-jsx-scope */
import { createRoot } from 'react-dom/client'
import { Header, Footer } from '../index'

const header = document.getElementById('header-container')
const headerRoot = createRoot(header)
headerRoot.render(<Header />)

const footer = document.getElementById('footer-container')
const footerRoot = createRoot(footer)
footerRoot.render(<Footer />)
