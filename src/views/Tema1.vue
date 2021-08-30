<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 	Normativa ambiental
    .row.mt-5
      .col-12.col-lg-7
        p ¿Sabía que las normas ambientales son reglamentos aplicables a cualquier tipo de organización? Y tienen como finalidad, garantizar una mínima repercusión negativa en el medioambiente. Además, es importante precisar que todas las normas hacen parte de un sistema de gestión el cual tiene como punto básico las políticas y la normatividad del país. 
        p.mt-3 Teniendo en cuenta lo anterior, es importante señalar que la normatividad ambiental en Colombia, es expedida por diferentes organismos o entidades ambientales, entre los cuales se encuentran: 
        ul.lista-ul.mt-4
          li 
            i.fas.fa-angle-right
            | Congreso de la República.
          li 
            i.fas.fa-angle-right
            | Ministerio de Ambiente y Desarrollo Sostenible.
          li 
            i.fas.fa-angle-right
            | Corporación Autónoma Regional.
          li 
            i.fas.fa-angle-right
            | Instituto de Hidrología, Meteorología y Estudios Ambientales – Ideam.
          li 
            i.fas.fa-angle-right
            | Las secretarías de ambiente de cada ciudad o municipio.
      .col-6.col-lg-5.offset-3.offset-lg-0
        figure 
          img(src="@/assets/template/tema-1-1.png", alt="Texto que describa la imagen") 
    .row.mt-5
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-acento-contenido.p-4.mb-4
          .row
            .col-3.align-self-center
              figure
                img(src="@/assets/template/tema-1-2.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-12.col-lg-9
              p Todos ellos buscan asegurar la conservación y preservación de los recursos naturales por medio de normativas ambientales.
              p.mt-3.mb-0 Para dar contexto al tema, es fundamental conocer los tipos de normativa en materia ambiental, sus respectivos conceptos y su correspondiente intención, además se podrá acceder a cada una de estas en el material complementario.
    .titulo-segundo.mt-5
      #t_1_1.h4 1.1  Normas ambientales
    p.mt-4 Son aplicables a cualquier empresa sin importar el tamaño, el tipo y su naturaleza, además se utilizan los aspectos ambientales a sus actividades, productos y servicios, que la organización determina que puede controlar o influir considerando la perspectiva del ciclo de vida, como la:
    .row.mt-5
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-primario.p-4.mb-4.text-center          
          p.mb-0 #[strong Norma ISO 14001: 2015], en donde se dan lineamientos del Sistema de Gestión Ambiental.
    .titulo-segundo.mt-5
      #t_1_2.h4 1.2  Tratados internacionales
    p.mt-4 Son un acuerdo entre dos o más países que quedan por escrito y están regulados por las normas del derecho internacional, dentro de las cuales se pueden encontrar: 
    .row.mt-5
      .col-10.offset-1
        .row
          .col-12.col-lg-5.mx-lg-5.borde-gris-2-bot.pb-4
            .row(style="margin-left: -40px")
              .col-3
                figure
                  img(src="@/assets/template/tema-1-3.svg", alt="Texto que describa la imagen")
              .col-9
                p.mb-0 Convenio sobre Diversidad Biológica
          .col-12.col-lg-5.borde-gris-2-bot.pb-4.mt-4.mt-lg-0
            .row(style="margin-left: -40px")
              .col-3
                figure
                  img(src="@/assets/template/tema-1-4.svg", alt="Texto que describa la imagen")
              .col-9
                p.mb-0 Convención Marco de Naciones Unidas sobre Cambio Climático y el Protocolo de Kyoto.
        .row.mt-5
          .col-12.col-lg-5.mx-lg-5.borde-gris-2-bot.pb-5
            .row(style="margin-left: -40px")
              .col-3
                figure
                  img(src="@/assets/template/tema-1-5.svg", alt="Texto que describa la imagen")
              .col-9
                p.mb-0 Convención sobre Comercio Internacional de Especies Amenazadas de Flora y Fauna Silvestre.
          .col-12.col-lg-5.borde-gris-2-bot.pb-5.mt-4.mt-lg-0
            .row(style="margin-left: -40px")
              .col-3
                figure
                  img(src="@/assets/template/tema-1-6.svg", alt="Texto que describa la imagen")
              .col-9
                p.mb-0 Convención de Estocolmo sobre Contaminantes Orgánicos Persistentes.
        .row.mt-5
          .col-12.col-lg-5.mx-lg-5.pb-5
            .row(style="margin-left: -40px")
              .col-3
                figure
                  img(src="@/assets/template/tema-1-7.svg", alt="Texto que describa la imagen")
              .col-9
                p.mb-0 Convenio de Viena para la Protección de la Capa de Ozono y el Protocolo de Montreal.
          .col-12.col-lg-5.pb-5.mt-4.mt-lg-0
            .row(style="margin-left: -40px")
              .col-3
                figure
                  img(src="@/assets/template/tema-1-8.svg", alt="Texto que describa la imagen")
              .col-9
                p.mb-0 Protocolo de Montreal para Proteger la Capa de ozono de la Tierra, con la META de Eliminar el Uso de Sustancias que Agotan la Capa de Ozono (SAO).
    .titulo-segundo.mt-5
      #t_1_3.h4 1.3  Leyes ambientales
    p.mt-5 Corresponden a los principios y normas que buscan la protección, conservación, recuperación del medioambiente y preservación de los recursos naturales, a saber: 
    .row.mt-5
      .col-10.col-lg-8.offset-1.offset-lg-2
        LineaTiempoB.color-acento-contenido(:datos="datosLineaTiempoB")
    .titulo-segundo.mt-5
      #t_1_4.h4 1.4  Decretos ambientales
    p.mt-5 Tienen como propósito velar por la recuperación, conservación, protección, manejo, uso y aprovechamiento de los recursos naturales renovables de la nación. Destina como un servicio público la salud y el saneamiento ambiental. Estos decretos son:
    .row.mt-5
      .col-10.offset-1
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Decreto 1076 de 2015")
            .col-3.col-lg-2.col-xl-1.align-self-center
              figure.mb-0
                img(src="@/assets/template/tema-1-14.svg", alt="Texto que describa la imagen")
            .col-9.col-lg-10
              p.mb-0.mt-3 Decreto único reglamentario del sector ambiente desarrollo sostenible que tiene como propósito general describir la estructura general administrativa del sector.
          .row(numero="2" titulo="Decreto ley 2811 de 1974")
            .col-3.col-lg-2.col-xl-1.align-self-center
              figure.mb-0
                img(src="@/assets/template/tema-1-15.svg", alt="Texto que describa la imagen")
            .col-9.col-lg-10
              p.mb-0.mt-3 Código Nacional de los Recursos Naturales Renovables RNR y no Renovables y de Protección al Medio Ambiente. 
          .row(numero="3" titulo="Decreto 1753 de 1994")
            .col-3.col-lg-2.col-xl-1.align-self-center
              figure.mb-0
                img(src="@/assets/template/tema-1-16.svg", alt="Texto que describa la imagen")
            .col-9.col-lg-10
              p.mb-0.mt-3 Define la Licencia Ambiental – LA. Naturaleza, modalidad y efectos; contenido, procedimientos, requisitos y competencias para el otorgamiento de LA.
          .row(numero="4" titulo="Decreto 2150 de 1995 y sus normas reglamentarias")
            .col-3.col-lg-2.col-xl-1.align-self-center
              figure.mb-0
                img(src="@/assets/template/tema-1-17.svg", alt="Texto que describa la imagen")
            .col-9.col-lg-10
              p.mb-0.mt-3 Reglamenta la licencia ambiental y otros permisos. Define los casos en que se debe presentar Diagnóstico Ambiental de Alternativas, Plan de Manejo Ambiental y Estudio de Impacto Ambiental. Suprime la licencia ambiental ordinaria. 
          .row(numero="5" titulo="Decreto 3930/2010")
            .col-3.col-lg-2.col-xl-1.align-self-center
              figure.mb-0
                img(src="@/assets/template/tema-1-18.svg", alt="Texto que describa la imagen")
            .col-9.col-lg-10
              p.mb-0.mt-3 Fija las zonas en las que se prohibirá o condicionarán la descarga de aguas residuales o residuos líquidos o gaseosos, provenientes de fuentes industriales o domésticas, urbanas o rurales, en las aguas superficiales, subterráneas o marinas.
    .titulo-segundo.mt-5
      #t_1_5.h4 1.5  Resoluciones ambientales
    p.mt-5 Son los lineamientos que la autoridad señala para la elaboración y ejecución de los estudios que deben ser presentados ante la autoridad competente.
    .row.mt-5
      .col-6
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg-verde-claro")
          .row(titulo="Resolución 1402 de 2006")
            p Reglamenta aspectos del Decreto 4741 de 2005 frente a los residuos o desechos peligrosos en Colombia
          div(titulo="Resolución 1362 de 2007")
            p Expide los requisitos y procedimientos para realizar el Registro de GENERADORES de residuos Desechos Peligrosos en Colombia
          div(titulo="Resolución 1652 de 2007")
            p Regula la prohibición en Colombia de fabricar e importar equipos y productos que contengan sustancias agotadoras de la capa de ozono conforme al Protocolo de Montreal. 
          div(titulo="Resolución 2115 de 2007")
            p Por medio de la cual se señalan características, instrumentos básicos y frecuencias del sistema de control y vigilancia para la calidad del agua para consumo humano.
          div(titulo="Resolución 1297 de 2010")
            p Regula los sistemas de recolección selectiva y la gestión ambiental de las pilas para controlar su impacto en el ambiente.
          div(titulo="Resolución 1508 de 2010")
            p Por la cual se establece el procedimiento para el recaudo de los recursos provenientes de las medidas adoptadas por la Comisión de Regulación de Agua Potable y Saneamiento Básico para promover el uso eficiente y ahorro del agua potable y desestimular su uso excesivo y su respectivo giro al Fondo Nacional Ambiental (Fonam). 
          div(titulo="Resolución 1511 de 2010")
            p Define los sistemas de recolección selectiva y la gestión ambiental que se debe dar a los residuos de bombillas para prevenir y controlar la degradación del ambiente en Colombia.
          div(titulo="Resolución 3017 de 2010")
            p Por la cual se actualiza la codificación de las infracciones de tránsito, de conformidad con lo establecido en la Ley 1383 de 2010, se adopta el Manual de Infracciones y se dictan otras disposiciones.
          div(titulo="Resolución 222 de 2011")
            p Por la cual se establecen requisitos para la gestión ambiental integral de equipos y desechos que consisten, contienen o están contaminados con Bifenilos Policlorados (PCB). 
      .col-6
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg-verde-claro")
          .row(titulo="Resolución 361 de 2011")            
            p Modifica la Resolución 362 de 2009 sobre los planes de devolución posconsumo de baterías que usan plomo ácido. 
          div(titulo="Resolución 631 de 2015")
            p Reglamenta los parámetros y los valores límites máximos permisibles sobre los vertimientos puntuales a cuerpos de aguas superficiales y sistemas de alcantarillados públicos, no aplica para los vertimientos en aguas marinas o suelos
          div(titulo="Resolución 668 de 2016")
            p Expide el reglamento para el uso racional y eficiente de las bolsas plásticas en Colombia. 
          div(titulo="Resolución 1741 de 2016")
            p Modifica la Resolución 222 de 2011 frente a los requisitos para la gestión ambiental de equipos y desechos de PBC en Colombia. 
          div(titulo="Resolución 472 de 2017")
            p Se reglamenta la gestión integral de los residuos de la construcción y demolición la cual aplica para todas las personas naturales y jurídicas que hagan generación, recolección, transporte, almacenamiento y disposición de obras civiles u otras actividades en Colombia. 
          div(titulo="Resolución 2254 de 2017")
            p La cual hace referencia de la nueva norma de calidad del aire como parte de la estrategia del gobierno nacional para proteger la salud de los colombianos. 
          div(titulo="Resolución 1257 de 2018")
            p Establece el contenido y la estructura de los programas para el uso eficiente y ahorro de agua, el cual aplica para las autoridades ambientales y proyectos que obtengan una concesión de aguas
          div(titulo="Resolución 1111 de 2013")
            p Contiene el Reglamento de Protección y Control de la Calidad del Aire, en el Decreto-Ley 3570 de 2011 y en el Decreto 2223 de 2013. 
    p.mt-5 Son los lineamientos que la autoridad señala para la elaboración y ejecución de los estudios que deben ser presentados ante la autoridad competente.
    .row.mt-5
      .col-10.offset-1
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Política ambiental")
            .col-3.col-lg-2.col-xl-1.align-self-center
              figure.mb-0
                img(src="@/assets/template/tema-1-19.svg", alt="Texto que describa la imagen")
            .col-9.col-lg-10
              p.mb-0.mt-3 Es la gestión pública o privada de los asuntos ambientales, internacionales, nacionales, regionales y locales. 
          .row(numero="2" titulo="Ordenamiento ambiental ")
            .col-3.col-lg-2.col-xl-1.align-self-center
              figure.mb-0
                img(src="@/assets/template/tema-1-21.svg", alt="Texto que describa la imagen")
            .col-9.col-lg-10
              p.mb-0.mt-3 Es la distribución de los usos del territorio de acuerdo con sus características.
          .row(numero="3" titulo="Evaluación de impacto ambiental ")
            .col-3.col-lg-2.col-xl-1.align-self-center
              figure.mb-0
                img(src="@/assets/template/tema-1-22.svg", alt="Texto que describa la imagen")
            .col-9.col-lg-10
              p.mb-0.mt-3 Son las acciones que permiten determinar los efectos de las diferentes actividades desarrolladas dentro de los planes y proyectos de una organización sobre el medioambiente.
          .row(numero="4" titulo="Contaminación")
            .col-3.col-lg-2.col-xl-1.align-self-center
              figure.mb-0
                img(src="@/assets/template/tema-1-23.svg", alt="Texto que describa la imagen")
            .col-9.col-lg-10
              p.mb-0.mt-3 Es el estudio, control y tratamiento de los efectos provocados por las sustancias y formas de energía al medioambiente. 
          .row(numero="5" titulo="Vida silvestre")
            .col-3.col-lg-2.col-xl-1.align-self-center
              figure.mb-0
                img(src="@/assets/template/tema-1-24.svg", alt="Texto que describa la imagen")
            .col-9.col-lg-10
              p.mb-0.mt-3 Es el estudio y conservación de los seres vivos en su medio y así como sus relaciones.
          .row(numero="6" titulo="Educación ambiental")
            .col-3.col-lg-2.col-xl-1.align-self-center
              figure.mb-0
                img(src="@/assets/template/tema-1-25.svg", alt="Texto que describa la imagen")
            .col-9.col-lg-10
              p.mb-0.mt-3 Es el cambio de actitud frente al medio biofísico y hacia la comprensión de los problemas ambientales.
          .row(numero="7" titulo="Paisaje")
            .col-3.col-lg-2.col-xl-1.align-self-center
              figure.mb-0
                img(src="@/assets/template/tema-1-26.svg", alt="Texto que describa la imagen")
            .col-9.col-lg-10
              p.mb-0.mt-3 Interrelación de factores bióticos, estéticos y culturales que favorecen el medioambiente.
    p.mt-5 De acuerdo con lo anterior, se puede comprender que:
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-a.color-secundario-invertido.p-4.p-md-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-1-27.svg", alt="Texto que describa la imagen")
            .col-lg-9
              .bloque-texto-a__texto.p-4
                p Los impactos ambientales deben examinarse a la luz de la normatividad ambiental que busca proteger, precisamente, el ambiente, evitando la contaminación, preservando tanto la biodiversidad como los recursos naturales y con ello cualquier acción que los afecte de manera negativa; sobre todo, porque la industria es uno de los responsables de la contaminación y la afectación de ecosistemas. Por esto, la actividad e impacto de dichas empresas está controlada y supervisada por los entes ambientales de los gobiernos. 
            


</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: 'Ley 23 de 1973',
        texto:
          'Principios fundamentales sobre prevención y control de la contaminación del aire, agua y suelo y otorgó facultades al Presidente de la República para expedir el Código de los Recursos Naturales.',
        icono: require('@/assets/template/tema-1-9.svg'),
      },
      {
        titulo: 'Ley 29 de 1992',
        texto:
          'Por medio de la cual se aprueba el “Protocolo de Montreal relativo a las Sustancias Agotadoras de la Capa de ozono”, suscrito en Montreal el 16 de septiembre de 1987, con sus enmiendas adoptadas en Londres el 29 de junio de 1990 y en Nairobi el 21 de junio de 1991.',
        icono: require('@/assets/template/tema-1-10.svg'),
      },
      {
        titulo: 'Ley 99 de 1993',
        texto:
          'Por la cual se crea el Ministerio del Medio Ambiente, se reordena el sector público encargado de la gestión y conservación del medio ambiente y los recursos naturales renovables, se organiza el Sistema Nacional Ambiental, SINA, y se dictan otras disposiciones. ',
        icono: require('@/assets/template/tema-1-11.svg'),
      },
      {
        titulo: 'Ley 388 de 1997',
        texto:
          'Ordenamiento Territorial Municipal y Distrital y Planes de Ordenamiento Territorial.',
        icono: require('@/assets/template/tema-1-12.svg'),
      },
      {
        titulo: 'Ley 491 de 1999',
        texto:
          'Define el Seguro Ecológico y delitos contra los recursos naturales y el ambiente y se modifica el Código Penal.',
        icono: require('@/assets/template/tema-1-13.svg'),
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
