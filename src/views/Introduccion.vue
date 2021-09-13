<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    figure.mt-5
      img(src="@/assets/template/tema-0-1.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-a.color-acento-botones-invertido.p-4.p-md-3 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Con este componente de formación se podrán adquirir conocimientos para caracterizar el entorno de la organización mediante la identificación de los aspectos e impactos ambientales, de acuerdo con el procedimiento técnico y la normativa ambiental vigente, como los componentes ambientales, sus características, las normativas relacionadas, los procesos y procedimientos, además de las herramientas de apoyo que se podrán utilizar para hacer la evaluación ambiental como los diagramas de flujo, las matrices, las cartografías, entre otros.
            .col-lg-4.mb-4.mb-lg-0.align-self-center
              figure
                img(src="@/assets/template/tema-0-2.svg", alt="Texto que describa la imagen").px-5

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
