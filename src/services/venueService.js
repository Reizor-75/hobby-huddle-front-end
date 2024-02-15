// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/venues`

async function getAllVenues() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function create(venueFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(venueFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteVenue(venueId) {
  try {
    const res = await fetch(`${BASE_URL}/${venueId}`, {
      method: 'DELETE',
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function update(venueFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${venueFormData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(venueFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function addPhoto(photoData) {
  try {
    const photoFormData = new FormData()
    photoFormData.append('photo', photoData)
    const venueId = tokenService.getUserFromToken().profile
    const res = await fetch(`${BASE_URL}/${venueId}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoFormData,
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

export { 
  getAllVenues,
  create,
  deleteVenue,
  update,
  addPhoto
}