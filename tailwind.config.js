module.exports = {
    theme: {
        container: {
          center: true,
        },
        fontFamily:{
            'sans':['Domine','Helvetica','Arial']
        }
      },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.pug',
      './src/**/*.md'
    ],
  },
}
