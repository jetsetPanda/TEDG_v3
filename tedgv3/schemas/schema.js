// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import post from './post'
import author from './author'

import aboutContent from './contentAbout'
import ourTeamContent from './contentOurTeam'
import ourTechnologyContent from "./contentOurTechnology"
import servicesContent from './contentServices'
import patientInfoContent from './contentPatientInfo'
import smileGalleryContent from "./contentSmileGallery";

import smileGalleryItems from "./smileGalleryItems";

import staffDirectory from './staffDirectory'

import servicesGeneral from './servicesGeneral'
import servicesCosmetic from './servicesCosmetic'
import servicesPediatric from "./servicesPediatric";
import servicesOrthodontics from "./servicesOrthodontics";
import servicesEndodontics from "./servicesEndodontics";
import servicesOralSurgery from "./servicesOralSurgery";
import servicesPeriodontics from "./servicesPeriodontics";
import servicesRestorative from "./servicesRestorative";

import technologyList from "./technologyList";
import servicesList from "./servicesList";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    author,
    aboutContent,
    ourTeamContent,
    ourTechnologyContent,
    patientInfoContent,
    smileGalleryContent,
    servicesContent,
    staffDirectory,
    servicesGeneral,
    servicesCosmetic,
    servicesPediatric,
    servicesOrthodontics,
    servicesPeriodontics,
    servicesEndodontics,
    servicesOralSurgery,
    servicesRestorative,
    technologyList,
    servicesList,
    smileGalleryItems,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
})
