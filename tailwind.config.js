module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './components/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'class',
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        darkgrey: '#222831', //darkModeで使用したい色を拡張定義
      },
      fontFamily: {
        noto: ["'Noto Sans JP', sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
