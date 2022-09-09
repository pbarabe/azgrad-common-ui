/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

export function Logo (props) {
  let logo = ''

  switch (props.variant) {
    case 'full-blue':
      logo = new URL('./img/grad-lockup-full-blue.png', import.meta.url)
      break

    case 'full-white':
      logo = new URL('./img/grad-lockup-full-white.png', import.meta.url)
      break

    case 'blue':
    default:
      logo = new URL('./img/grad-lockup-blue.png', import.meta.url)
  }

  return (
    <img
      className={props.className || ''}
      alt={props.alt || 'Graduate College Logo'}
      title={props.title || 'University of Arizona Graduate College'}
      src={logo}
    />
  )
}
