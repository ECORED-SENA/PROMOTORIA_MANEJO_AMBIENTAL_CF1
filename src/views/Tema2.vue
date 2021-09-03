<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Diagramas de flujo
    figure
      img(src="@/assets/template/tema-2-1.png", alt="Texto que describa la imagen")
    p.mt-5 Un diagrama de flujo es la representación gráfica de un proceso, la cual surge para tener una visión más amplia por medio de gráficos en los cuales se denotan los pasos que se deben seguir en un proceso. 
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-a.color-acento-contenido-invertido.p-4.p-md-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                .h4.mb-0 ¿Cuál es su importancia?
                p Radica en que facilita la manera de representar visualmente el flujo de datos de una información. Estos diagramas, sus diferentes características y etapas, permiten la comprensión de la temática de los impactos ambientales, de forma sencilla, clara, resumida, pero a la vez dando una visión global del contenido y la ruta que debe seguir en los diferentes procesos para realizar las mediciones de los impactos ambientales, y para ello se tiene en cuenta lo siguiente:
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-2-2.svg", alt="Texto que describa la imagen")
    TabsB.color-primario.mt-5
      .py-4.py-md-5(titulo="Diagrama horizontal" :icono="require('@/assets/template/tema-2-3.svg')")
        .row.px-5
          .col-12.col-lg-5
            .h4 Diagrama horizontal
            p.mt-4 Va de derecha a izquierda, según el orden de la lectura. 
          .col-8.col-lg-7.offset-2.offset-lg-0
            figure
              img(src="@/assets/template/tema-2-6.png", alt="Texto que describa la imagen")
      .py-4.py-md-5(titulo="Diagrama vertical" :icono="require('@/assets/template/tema-2-4.svg')")
        .row.px-5
          .col-12.col-lg-5
            .h4 Diagrama vertical
            p.mt-4 Va de arriba hacia abajo, como una lista ordenada.
          .col-8.col-lg-7.offset-2.offset-lg-0
            figure
              img(src="@/assets/template/tema-2-7.png", alt="Texto que describa la imagen").w-50.margin-0-auto
      .py-4.py-md-5(titulo="Diagrama panorámico" :icono="require('@/assets/template/tema-2-5.svg')")
        .row.px-5       
          .col-12.col-lg-5
            .h4 Diagrama vertical
            p.mt-4 Permiten ver el proceso entero en una sola hoja, usando el modelo vertical y el horizontal.
          .col-8.col-lg-7.offset-2.offset-lg-0
            figure
              img(src="@/assets/template/tema-2-8.png", alt="Texto que describa la imagen").w-75.margin-0-auto
    p.mt-5 Para realizar los diagramas de flujo, además hay que tener muy presente la siguiente simbología:
    .row.mt-5
      .col-6.col-lg-5.p-0.offset-3.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/diagrama_Flujo.svg", alt="Texto que describa la imagen")
      .col-12.col-lg-7.p-0.mt-4.mt-lg-0
        .tabla-a.color-acento-contenido 
          table
            thead.bg-acento-contenido
              tr
                th Función
                th Símbolo
            tbody
              tr.text-center
                td.bg-amarillo-claro.borde-blanco-bot Inicio o final del diagrama
                td 
                  figure
                    img(src="@/assets/template/tema-2-10.svg", alt="Texto que describa la imagen").w-50.margin-0-auto
              tr.text-center
                td.bg-amarillo-claro.borde-blanco-bot Realización de actividad
                td 
                  figure
                    img(src="@/assets/template/tema-2-11.svg", alt="Texto que describa la imagen").w-50.margin-0-auto
              tr.text-center
                td.bg-amarillo-claro.borde-blanco-bot Entrada/Salida
                td 
                  figure
                    img(src="@/assets/template/tema-2-12.svg", alt="Texto que describa la imagen").w-50.margin-0-auto
              tr.text-center
                td.bg-amarillo-claro.borde-blanco-bot Análisis de la situación y toma de decisión
                td 
                  figure
                    img(src="@/assets/template/tema-2-13.svg", alt="Texto que describa la imagen").w-50.margin-0-auto
              tr.text-center
                td.bg-amarillo-claro.borde-blanco-bot Documentación(generación, Consulta, etc)
                td 
                  figure
                    img(src="@/assets/template/tema-2-14.svg", alt="Texto que describa la imagen").w-50.margin-0-auto
              tr.text-center
                td.bg-amarillo-claro.borde-blanco-bot Bases de datos
                td 
                  figure
                    img(src="@/assets/template/tema-2-15.svg", alt="Texto que describa la imagen").w-25.margin-0-auto
              tr.text-center
                td.bg-amarillo-claro.borde-blanco-bot Conector fuera de página
                td 
                  figure
                    img(src="@/assets/template/tema-2-16.svg", alt="Texto que describa la imagen").w-25.margin-0-auto
              tr.text-center
                td.bg-amarillo-claro.borde-blanco-bot Preparación
                td 
                  figure
                    img(src="@/assets/template/tema-2-17.svg", alt="Texto que describa la imagen").w-50.margin-0-auto
              tr.text-center
                td.bg-amarillo-claro.borde-blanco-bot Conector
                td 
                  figure
                    img(src="@/assets/template/tema-2-18.svg", alt="Texto que describa la imagen").w-25.margin-0-auto
              tr.text-center
                td.bg-amarillo-claro.borde-blanco-bot Línea de flujo
                td 
                  figure
                    img(src="@/assets/template/tema-2-19.svg", alt="Texto que describa la imagen").w-50.margin-0-auto
    p.mt-5 De acuerdo con todo lo expuesto, se puede concluir que el diagrama de flujo servirá para visualizar las etapas de un proceso mediante una representación gráfica, le permitirá hacer un análisis claro y fácil de comprender, de los procedimientos que se necesitan para elaborar un proyecto.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({}),
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
