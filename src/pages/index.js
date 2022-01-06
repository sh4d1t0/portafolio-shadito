import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <div className="max-w-md mx-auto overflow-hidden md:max-w-full">
        <div className="md:flex">
          <div className="md:shrink-0 md:hidden">
            <img
              className="h-48 w-48 object-cover md:h-full md:w-full rounded-full"
              src="https://media-exp1.licdn.com/dms/image/C5603AQGf4Xv71Uw-Sg/profile-displayphoto-shrink_400_400/0/1619023258437?e=1646870400&v=beta&t=PbBrahKvaEFUocnrtZ29_dr0ubdeNrZWtBwxLHitpIg"
              alt="Workflow"
            />
          </div>
          <div className="flex-auto p-6 lg:p-8 self-center">
            <div className="uppercase tracking-wide text-sm font-semibold text-blue-500">
              Hola, Soy Shadito
            </div>
            <div className="mt-1 text-lg leading-tight font-medium text-black">
              Desarrollador Apasionado
            </div>
            <div className="mt-2 text-gray-500">
              Habilidad para construir aplicaciones con operaciones de front-end
              y back-end
            </div>
            <div className="grid grid-cols-1 gap-4 py-8 justify-center">
              <div className="col-start-1 space-x-6 text-center">
                <button className="px-3 py-2 rounded-full bg-sky-500 hover:bg-sky-400 active:bg-sky-600 focus:outline-none focus:ring focus:ring-sky-300">
                  Contratar
                </button>
                <button className="px-3 py-2 rounded-full bg-sky-500 hover:bg-sky-400 active:bg-sky-600 focus:outline-none focus:ring focus:ring-sky-300">
                  Obtener CV
                </button>
              </div>
            </div>
          </div>
          <div className="flex-auto md:shrink-0 hidden md:inline-flex">
            <img
              className="object-cover md:w-64 lg:w-72 xl:w-96 rounded-full"
              src="https://media-exp1.licdn.com/dms/image/C5603AQGf4Xv71Uw-Sg/profile-displayphoto-shrink_400_400/0/1619023258437?e=1646870400&v=beta&t=PbBrahKvaEFUocnrtZ29_dr0ubdeNrZWtBwxLHitpIg"
              alt="Workflow"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
