import React from 'react'
import { Button } from '../Button'

interface PresentationCardProps {
  onModal: () => void
}

const PresentationCard = ({ onModal }: PresentationCardProps) => {
  return (
    <div className="card">
      <div className="md:flex">
        <div className="pre-card-image">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQGf4Xv71Uw-Sg/profile-displayphoto-shrink_400_400/0/1619023258437?e=1646870400&v=beta&t=PbBrahKvaEFUocnrtZ29_dr0ubdeNrZWtBwxLHitpIg"
            alt="Workflow"
          />
        </div>
        <div className="card-content">
          <p className="title">Hola, Soy Shadito</p>
          <p className="subtitle">Desarrollador Apasionado</p>
          <p className="text-content">
            Habilidad para construir aplicaciones con operaciones de front-end y
            back-end
          </p>
          <div className="card-footer">
            <div>
              <Button
                primary
                size="medium"
                onClick={onModal}
                label="Contratar"
              />
              <Button size="medium" onClick={onModal} label="Obtener CV" />
            </div>
          </div>
        </div>
        <div className="post-card-image">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQGf4Xv71Uw-Sg/profile-displayphoto-shrink_400_400/0/1619023258437?e=1646870400&v=beta&t=PbBrahKvaEFUocnrtZ29_dr0ubdeNrZWtBwxLHitpIg"
            alt="Workflow"
          />
        </div>
      </div>
    </div>
  )
}

export default PresentationCard