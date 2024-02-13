// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/workshop`

async function getAllWorkshops() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

async function createWorkshop(workshopFormData) {
  try {
    const res = await fetch(`${BASE_URL}/newWorkshop`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(workshopFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function showWorkshop(workshopId){
  try {
    const res = await fetch(`${BASE_URL}/${workshopId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}
async function deleteWorkshop(workshopId){
  try {
    const res = await fetch(`${BASE_URL}/${workshopId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function applyToWorkshop(workshopId){
  try {
    const res = await fetch(`${BASE_URL}/${workshopId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)    
  }
}

export {
  getAllWorkshops,
  createWorkshop,
  showWorkshop,
  deleteWorkshop,
  applyToWorkshop
}