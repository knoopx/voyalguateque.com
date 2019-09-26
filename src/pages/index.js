import React from "react"

import Header from "../components/Header"
import Map from "../components/Map"
import AnchorLink from "../components/AnchorLink"

const NavItem = (props) => (
  <AnchorLink className="px-5 py-5 font-serif" {...props} />
)
const Heading = (props) => (
  <h1 className="z-10 mb-16 text-3xl font-bold font-serif" {...props} />
)

const Accomodation = ({ title, distance, url, children }) => {
  return (
    <a href={url} rel="nofollow" className="flex flex-col lg:w-1/2 p-4">
      <h2 className="z-10 text-lg font-medium">{title}</h2>
      <h5 className="z-10 mb-8 text-gray-600">(a {distance})</h5>
      <div className="z-0">{children}</div>
    </a>
  )
}

const Divider = ({ flip = false }) => {
  return (
    <img
      className="block mx-auto my-24"
      src={
        flip
          ? require("../images/fulleta esquerra.png")
          : require("../images/fulleta dreta.png")
      }
    />
  )
}

const Page = ({ data }) => (
  <div className="text-gray-800">
    <Header className="hidden lg:block">
      <div className="flex items-center justify-center">
        <NavItem href="#location">Localización</NavItem>
        <NavItem href="#transport">Transporte</NavItem>
        <AnchorLink href="#main">
          <img
            className="mt-1 mx-5"
            src={require("../../src/images/logo.png")}
          />
        </AnchorLink>
        <NavItem href="#accomodation">Alojamientos</NavItem>
        <NavItem href="#gifts">Regalo de boda</NavItem>
      </div>
    </Header>

    <div id="main" className="lg:pt-32 container">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="mb-8">
          <img src={require("../../src/images/corona.png")} />
        </div>
        <div className="md:w-7/12 leading-relaxed">
          <p>
            Será una celebración formal, pero no te esperes la gala de los
            Oscar. Ven preparado para bailar, beber, parlotear mucho, conocer
            gente de partes remotas del mundo y, sobre todo, comer como si no
            hubiera mañana. También traete una{" "}
            <span className="font-medium">chaqueta</span> para las horas de
            noche, pues en estos lares suele refrescar cuando cae el sol.
          </p>
          <p>
            Para poder organizar este fiestón como se debe, te pedimos que{" "}
            <span className="font-medium">
              confirmes tu asistencia lo antes posible
            </span>
            . También te agradecemos que nos avises si utilizarás el{" "}
            <span className="font-medium">transporte</span> de buses que Flavia
            y Juancho reservaron, o si vendrás en tu propio coche.
          </p>
        </div>
      </div>

      <Divider flip />

      <div id="location" className="min-h-screen">
        <Heading>Localización</Heading>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col">
            <dl className="mb-10">
              <dt>Lugar:</dt>
              <dd>El Folló</dd>
              <dt>Dirección:</dt>
              <dd>Masía El Folló 08593 Tagamanent, Barcelona</dd>
              <dt>Fecha:</dt>
              <dd>Viernes 29 de mayo de 2020</dd>
              <dt>Hora:</dt>
              <dd>18h</dd>
            </dl>

            <div>
              {/* <Map
                containerElement={
                  <div
                className="relative mb-8"
                style={{ paddingTop: "75%" }}
                  />
                }
                loadingElement={<div style={{ height: `100%` }} />}
                mapElement={<div className="absolute inset-0" />}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAO2fsSmo_oOJMjDRGxo2C2BMiv9EnhAoQ"
              /> */}
              <img
                className="hidden lg:block -ml-12 -mt-12"
                src={require("../images/flor google maps.png")}
              />
            </div>
          </div>
          <div>
            <img
              className="lg:-mt-32"
              src={require("../images/fotos localizacion.png")}
            />
          </div>
        </div>
      </div>

      <Divider />

      <div id="transport" className="min-h-screen">
        <Heading>Transporte</Heading>
        <div className="flex flex-wrap">
          <div className="md:w-1/2 mb-8 pr-16">
            <p>
              Si quieres evitar venir en coche, puedes llegar en taxi o en el
              servicio de bus que Flavia y Juancho reservaron. Si piensas usar
              este servicio de bus, necesitamos que lo confirmes.
            </p>
            <p>Punto de recogida para la ida:</p>
            <p>Regreso:</p>
          </div>

          <div className="flex justify-end md:w-1/2">
            <img
              className="md:-mt-24"
              src={require("../images/flor transporte.png")}
            />
          </div>
        </div>
      </div>

      <Divider flip />

      <div id="accomodation" className="min-h-screen">
        <Heading>Alojamientos</Heading>
        <div>
          <p className="lg:w-2/3 mb-12">
            El Folló se encuentra en un precioso espacio natural, concretamente
            en el Parque del Montseny. Si la mañana siguiente quieres
            despertarte en este maravilloso entorno, te recomendamos los
            siguientes alojamientos:
          </p>

          <div className="flex flex-wrap -m-4">
            <Accomodation
              title="Les Casetes del Congost en Tagamanent"
              distance="2,4km"
              url="http://www.lescasetesdelcongost.cat"
            >
              {/* En el mismo pueblo donde se celebra la boda */}
              <img
                className="pointer-events-none lg:-ml-16"
                src={require("../images/casetes del congost.png")}
              />
            </Accomodation>

            <Accomodation
              title="Hostal l'Esquella en Aiguafreda"
              distance="6km"
              url="https://www.booking.com/hotel/es/hostal-l-39-esquella.es.html"
            >
              <img
                className="pointer-events-none -mt-32"
                src={require("../images/hostal l'esquella.png")}
              />
            </Accomodation>

            <Accomodation
              title="Sono Apartamentos en La Garriga"
              distance="8,2km"
              url="https://www.sonoapartamentos.com"
            >
              <img
                className="pointer-events-none"
                src={require("../images/sono apartamentos.png")}
              />
            </Accomodation>

            <Accomodation
              title="Montanyà Hotel & Lodge en Seva"
              distance="12km"
              url="https://www.montanyahotel.com"
            >
              <img
                className="pointer-events-none -mt-20"
                src={require("../images/montanyà hotel.png")}
              />
            </Accomodation>
          </div>
        </div>
      </div>

      <Divider />

      <div id="gifts" className="min-h-screen">
        <Heading>Regalo de boda</Heading>

        <div className="flex flex-wrap lg:flex-no-wrap">
          <p className="order-2 lg:order-1 lg:w-2/3">
            Flavia y Juancho tienen la mayor parte de sus necesidades
            satisfechas, por lo cual no necesitan ningún tipo de bienes
            materiales. Además, están completamente aterrados ante la
            perspectiva del calentamiento global, por lo cual piden que no se
            les obsequie ningún tipo de artefacto, electrodoméstico y demás
            objetos que suelen regalarse para estas ocasiones. Sin embargo,
            disfrutan mucho viajando. Si quieres regalarles algo (lo cual no es
            necesario, pues tu presencia ya les sirve como regalo), puedes
            ayudarles con su viaje de novios:
          </p>
          <img
            className="z-0 order-1 h-32 lg:h-auto -mt-32 mb-8 ml-auto"
            src={require("../images/flors regalo de boda.png")}
          />
        </div>

        <p className="font-medium">
          <span className="numeric">ES12 3025 0001 1514 3360 1353</span>
          <br />
          Caixa d’Enginyers
        </p>
      </div>
    </div>
  </div>
)

export default Page
