document.addEventListener('DOMContentLoaded', () => {
  const lang_ru = document.querySelector('.js_language_ru')
  const lang_en = document.querySelector('.js_language_en')

  const changeLanguage = (lang1, lang2) => {
    lang1.addEventListener('click', e => {
      if (lang2.classList.contains('active')) {
        lang2.classList.remove('active')
        lang1.classList.add('active')
      }
      lang2.removeEventListener('click', changeLanguage)
    })
  }

  changeLanguage(lang_en, lang_ru)
  changeLanguage(lang_ru, lang_en)
})
