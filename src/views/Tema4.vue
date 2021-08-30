<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Fuentes de información o de documentación
    figure.mt-5
      img(src="@/assets/template/tema-4-1.png", alt="Texto que describa la imagen")
    p.mt-5 Se habla de estas fuentes para referirse al origen de una información en particular, es decir, el apoyo en el cual se puede acudir para su recuperación. En este sentido, las referencias pueden ser de un tipo muy diferente y proporcionar datos más o menos confiables que serán cruciales e influyen de manera decisiva en los resultados que se obtengan. Para ello, se cuenta con fuentes de información primaria, secundarias y terciarias: 
    SlyderB.mt-5(:datos="datosSlyder")    
    p.mt-5 De acuerdo con lo anterior, se pueden reconocer las fuentes confiables y relevantes, pues cada vez se hace más necesario que los estudios de gestión de la información sean exigentes, para que arrojen con ello, datos fidedignos. Además, se debe considerar que la toma de decisiones de las empresas y organizaciones requieren de una investigación cuidadosa para lograr sus objetivos. 

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Fuentes de información primaria',
        texto:
          'Contienen información original que ha sido publicada por primera vez y que no ha sido filtrada, interpretada o evaluada por nadie más. Son producto de una investigación o de una actividad creativa y componen la colección básica de una biblioteca y pueden encontrarse en soporte impreso o digital (Universidad Guadalajara, s.f.).<br><br>Entre los tipos más comunes se encuentran: libros, revistas científicas y de entretenimiento, periódicos, diarios, documentos oficiales de instituciones públicas, informes técnicos y de investigación de instituciones públicas o privadas, patentes, normas técnicas.',
        imagen: require('@/assets/template/tema-4-2.png'),
      },
      {
        titulo: 'Fuentes de información secundaria',
        texto:
          'Contienen información primaria, sintetizada y reorganizada. Están diseñadas para facilitar y maximizar el acceso a las fuentes primarias o a sus contenidos. Se utilizan cuando no se tiene acceso a la fuente primaria por una razón específica, cuando los recursos son limitados y cuando la fuente no es confiable (Universidad Guadalajara, s.f.)<br><br>Entre los tipos más comunes se encuentran: enciclopedias, antologías, directorios, libros o artículos que interpretan otros trabajos o investigaciones.',
        imagen: require('@/assets/template/tema-4-3.png'),
      },
      {
        titulo: 'Fuente de información terciaria',
        texto:
          'Son guías físicas o virtuales que contienen información sobre las fuentes secundarias y forman parte de la colección de referencia de una biblioteca, además facilitan el control y acceso a toda la gama de repertorios de referencia (Universidad Guadalajara, s.f.).<br><br>Entre los tipos más comunes se pueden encontrar: resúmenes, almanaques, bibliografías, cronologías, diccionarios y enciclopedias, directorios, libros de hechos y manuales.',
        imagen: require('@/assets/template/tema-4-4.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
