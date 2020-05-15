// The purpose of this file is to push dummy data to the firebase

import Organization from "../models/organization";
import { ORGANIZATIONS, RIGHTSCATEGORIES, SUBRIGHTS, LEARNMORES } from "./dummy-data.js";

function pushData() {
    for (var i = 0; i < LEARNMORES.length; i++) {
        pushLearnMores(LEARNMORES[i]);
    }
}

//pushData();

async function pushLearnMores(lmObject) {
    fetch('https://workers-rights-46c43.firebaseio.com/learn-moresTesting.json', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: lmObject.id,
            title: lmObject.title,
            image: lmObject.image,
            informationChunks: lmObject.informationChunks,
        }),
    });
}

async function pushSubrights(sbObject) {
    fetch('https://workers-rights-46c43.firebaseio.com/subrightsTesting.json', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: sbObject.id,
            categoryIds: sbObject.categoryIds,
            title: sbObject.title,
            img: sbObject.img,
            emoji: sbObject.emoji,
            learnMores: sbObject.learnMores,
            description: sbObject.description,
            organizations: sbObject.organizations
        }),
    });
}

async function pushOrganizations(orgObject) {
    fetch('https://workers-rights-46c43.firebaseio.com/organizationsTesting.json', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: orgObject.id,
            title: orgObject.title,
            image: orgObject.image,
            description: orgObject.description,
            link: orgObject.link,
            rights: orgObject.rights,
        }),
    });
}

async function pushRightsCategories(catObject) {
    fetch('https://workers-rights-46c43.firebaseio.com/rights-categoriesTesting.json', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: catObject.id,
            title: catObject.title,
            image: catObject.image,
            subtitle: catObject.subtitle,
            description: catObject.description,
        }),
    });
}