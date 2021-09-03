<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Componentes ambientales
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-a.color-secundario-invertido.p-4.p-md-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-3-1.png", alt="Texto que describa la imagen")
            .col-lg-9
              .bloque-texto-a__texto.p-4
                p El entorno natural incluye componentes físicos como aire, temperatura, suelos, pisos térmicos y aguas, y componentes residenciales, plantas, animales y microorganismo, es decir, todos los componentes bióticos y abióticos que existen en la naturaleza que no fueron creados por el ser humano. En relación con cada uno de estos factores ambientales, se puede afectar el comportamiento, la distribución y la adaptación de los seres vivos y demuestran la presencia de un sistema de control en la naturaleza cuyo objetivo es mantener el equilibrio natural. Pero el hombre modificó estos elementos y generó un desequilibrio o una crisis ecológica como se vive en la actualidad. A continuación, se podrá conocer los tipos de ecosistemas y sus respectivas conceptualizaciones: 
    TabsB.color-primario.mt-5
      .py-4.py-md-5(titulo="Ecosistemas terrestres" :icono="require('@/assets/template/tema-3-2.svg')")
        .row.px-3
          .col-12.col-lg-8
            .h4 Ecosistemas terrestres
            p.mt-4 Los ecosistemas terrestres ocupan solamente el 30 % del territorio de la Tierra. Estos se dividen, a su vez, de mayor a menor territorio ocupado en ecosistemas terrestres:
            ul.lista-ul.mt-4
              li 
                i.fas.fa-angle-right.primario
                | Desiertos (30 %).
              li.mt-2
                i.fas.fa-angle-right.primario
                | Sabanas y pastizales tropicales como estepas, praderas y herbazales (20 %).
              li.mt-2 
                i.fas.fa-angle-right.primario
                | Selvas (23 %).
              li.mt-2 
                i.fas.fa-angle-right.primario
                | Ecosistema forestal, es decir, de bosques templados y tundras (17 %).
              li.mt-2 
                i.fas.fa-angle-right.primario
                | Zonas de cultivos (10 %).
          .col-4.offset-4.offset-lg-0
            figure
              img(src="@/assets/template/tema-3-6.png", alt="Texto que describa la imagen").w-75.margin-0-auto
      .py-4.py-md-5(titulo="Ecosistemas acuáticos" :icono="require('@/assets/template/tema-3-3.svg')")
        .row.px-3
          .col-12.col-lg-8
            .h4 Ecosistemas acuáticos
            p.mt-4 Se caracterizan por la presencia de agua como componente físico principal, la cual puede ser dulce o salada, permitiendo diferenciar así entre ecosistemas marinos y dulceacuícolas. También se integran los ecosistemas marinos que hacen referencia a los océanos, mares, arrecifes, aguas someras litorales, estuarios, lagunas costeras de agua salada; y los ecosistemas dulceacuícolas donde se sitúan los lagos, estanques, ríos, arroyos y manantiales.
          .col-4.offset-4.offset-lg-0
            figure
              img(src="@/assets/template/tema-3-7.png", alt="Texto que describa la imagen").w-75.margin-0-auto
      .py-4.py-md-5(titulo="Ecosistemas mixtos" :icono="require('@/assets/template/tema-3-4.svg')")
        .row.px-3
          .col-12.col-lg-8
            .h4 Ecosistemas mixtos
            p.mt-4 Son aquellos que se componen por agua y tierra, dado que son elementos frecuentes en la naturaleza es muy usual encontrar este tipo de ecosistemas. Así, los principales tipos de ecosistemas mixtos que existen en la naturaleza son: humedales, manglares, marismas y costas.
          .col-4.offset-4.offset-lg-0
            figure
              img(src="@/assets/template/tema-3-8.png", alt="Texto que describa la imagen").w-75.margin-0-auto
      .py-4.py-md-5(titulo="Ecosistemas artificiales" :icono="require('@/assets/template/tema-3-5.svg')")
        .row.px-3
          .col-12.col-lg-8
            .h4 Ecosistemas artificiales
            p.mt-4 Con más frecuencia y rapidez se están generando este tipo de ecosistemas a lo largo del globo terráqueo, sus características pueden llegar a ser muy similares a los que han sido creados por la naturaleza, aunque en la mayoría de los casos estos ecosistemas son creados para satisfacer alguna necesidad específica, por el ejemplo las represas que son utilizadas para la generación de energía. Entre los principales tipos de ecosistemas artificiales se encuentran: ecosistemas urbanos; ecosistemas agrícolas o agropecuarios; ecosistemas de presa o embalse.
          .col-4.offset-4.offset-lg-0
            figure
              img(src="@/assets/template/tema-3-9.png", alt="Texto que describa la imagen").w-75.margin-0-auto
    p.mt-5 En los componentes ambientales existen factores:
    .tabla-a.color-acento-contenido.mt-5 
      table
        thead
          tr
            th.py-4 Bióticos
            th Abióticos
        tbody
          tr
            td.p-0.position-relative 
              figure
                img(src="@/assets/template/tema-3-10.png", alt="Texto que describa la imagen")
              figure.image-cover
                img(src="@/assets/template/tema-3-11.svg", alt="Texto que describa la imagen")
               
            td.p-0.position-relative 
              figure
                img(src="@/assets/template/tema-3-13.png", alt="Texto que describa la imagen")
              figure.image-cover
                img(src="@/assets/template/tema-3-12.svg", alt="Texto que describa la imagen")
          tr
            td.text-small.p-4 Hace referencia a todos los seres vivos que están presentes en un ecosistema y las interrelaciones que se forman entre ellos, plantas, animales y microorganismos.
            td.text-small.p-4 Son todos los fenómenos físicos que incorporan presión atmosférica (lluvia, aire, suelo, etc.) los químicos (componentes de las rocas, minerales, salinidad del agua, etc.), los cuales afectan los organismos.
    p.mt-5 Además, en los componentes ambientales existen diferentes tipos de energía, como los que se exponen a continuación: 
    SlyderB.mt-5(:datos="datosSlyder")
    p.mt-5 De acuerdo con lo visto hasta el momento, es importante precisar que:
    .row.mt-5
      .col-10.col-lg-8.offset-2.offset-lg-1
        .cajon.color-acento-contenido.p-4.mb-4
          .row
            .col-4.align-self-center
              figure
                img(src="@/assets/template/tema-3-18.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-12.col-lg-8
              p Los factores ambientales bióticos y abióticos tienen un papel importante en la formación de ecosistemas y están interconectados, de ellos depende la supervivencia de las especies en la biodiversidad, lo que resulta en un desequilibrio en el ecosistema: el deterioro ecológico que es una actividad que causa la reducción de los recursos naturales. 
    p.mt-5 Es por esto por lo que las personas deben ser conscientes de la necesidad de mantener el entorno natural. Para hacer esto, usualmente, se utilizan fuentes de energía natural que viven tanto para el medioambiente como para la supervivencia de los ecosistemas y los seres que viven, la flora, la fauna y las personas. 
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Fotovoltaica (luz solar)',
        texto:
          'Es aquella que se obtiene al convertir la luz solar en electricidad empleando una tecnología basada en el efecto fotoeléctrico. El tipo de energía que se obtiene es la eléctrica, así como la climatización.',
        imagen: require('@/assets/template/tema-3-14.png'),
      },
      {
        titulo: 'Eólica (viento)',
        texto:
          'Es la energía que se obtiene del viento. Se trata de un tipo de energía cinética producida por el efecto de las corrientes de aire y el tipo de energía que se obtiene es la eléctrica.',
        imagen: require('@/assets/template/tema-3-15.png'),
      },
      {
        titulo: 'Gasificación, pirólisis (biomasa)',
        texto:
          'Es la conversión térmica de la misma en un gas que puede utilizarse para la producción de electricidad mediante el empleo de motores de combustión interna con un determinado nivel de eficiencia, que depende de las características de la biomasa y los motores utilizados, y el tipo de energía que se puede obtener es la eléctrica y combustibles alternativos a los fósiles.',
        imagen: require('@/assets/template/tema-3-19.png'),
      },
      {
        titulo: 'Hidráulica (agua)',
        texto:
          'Es aquella que se obtiene de aprovechar la energía cinética y potencial de la corriente del agua, saltos de agua o mareas, en este caso, la energía que se obtiene es la eléctrica.',
        imagen: require('@/assets/template/tema-3-16.png'),
      },
      {
        titulo: 'Geotérmica (calor de la tierra)',
        texto:
          'Es aquella que se genera a partir del calor del interior de la Tierra que se transmite a través de las rocas calientes, y el tipo de energía que se obtiene es la eléctrica.',
        imagen: require('@/assets/template/tema-3-17.png'),
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
