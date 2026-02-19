type FooterProps = {
  t: (key: string) => string
}

const Footer = ({ t }: FooterProps) => {
  return <div className='text-center mt-30 mb-5'>{t('footer.text')}</div>
}
export default Footer
