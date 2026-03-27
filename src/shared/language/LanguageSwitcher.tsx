import { useState } from 'react'
import i18n from 'i18next'
import styles from './LanguageSwitcher.module.css'

import uzFlag from '../assets/uzFlag.webp'
import enFlag from '../assets/enFlag.webp'
import ruFlag from '../assets/ruFlag.webp'

const languages = [
    { code: 'uz', flag: uzFlag },
    { code: 'en', flag: enFlag },
    { code: 'ru', flag: ruFlag }
] as const

type Lang = typeof languages[number]['code']

export function LanguageSwitcher() {
    const [open, setOpen] = useState(false)

    const currentLang = (i18n.language || 'uz').split('-')[0] as Lang

    const changeLang = async (lang: Lang) => {
        await i18n.changeLanguage(lang)
        setOpen(false)
    }


    const currentFlag =
        languages.find((l) => l.code === currentLang)?.flag || uzFlag

    return (
        <div className={styles['lang-switcher']}>
            <button
                className={styles['lang-switcher__button']}
                onClick={() => setOpen(!open)}
            >
                <img src={currentFlag} width={20} height={14} alt="flag"/>
            </button>

            {open && (
                <div className={styles['lang-switcher__dropdown']}>
                    {languages.map((lang) => (
                        <div
                            key={lang.code}
                            onClick={() => changeLang(lang.code)}
                            className={`${styles['lang-switcher__item']} ${
                                currentLang === lang.code
                                    ? styles['lang-switcher__item--active']
                                    : ''
                            }`}
                        >
                            <img src={lang.flag} width={20} height={14} alt='flag'/>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}