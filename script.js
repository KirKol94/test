document.addEventListener('DOMContentLoaded', () => {
  const langRu = document.querySelector('.js-language-ru')
  const langEn = document.querySelector('.js-language-en')

  const changeLanguage = (lang1, lang2) => {
    lang1.addEventListener('click', e => {
      if (lang2.classList.contains('active')) {
        lang2.classList.remove('active')
        lang1.classList.add('active')
      }
      lang2.removeEventListener('click', changeLanguage)
    })
  }

  changeLanguage(langEn, langRu)
  changeLanguage(langRu, langEn)
})
