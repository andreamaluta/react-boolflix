import emojiFlags from "emoji-flags";

const langToCountry = {
    en: 'US',
    it: 'IT',
    fr: 'FR',
    de: 'DE',
    es: 'ES',
    pt: 'BR',
    zh: 'CN',
    ja: 'JP',
    ru: 'RU',
    ko: 'KR',
    nl: 'NL',
    sv: 'SE',
    pl: 'PL',
    ar: 'SA',
    tr: 'TR',
    hi: 'IN',
};

const languageToFlag = (language) => {
    if (Object.hasOwn(langToCountry, language)) {
        return emojiFlags.countryCode(langToCountry[language]).emoji
    } else {
        return '🌐'
    }
}

export default languageToFlag 