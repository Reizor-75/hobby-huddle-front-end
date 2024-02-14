// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/requests`

async function getAllRequests() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

async function getMyRequests() {
  try {
    const res = await fetch(`${BASE_URL}/myRequests`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

async function createRequest(requestFormData) {
  try {
    const res = await fetch(`${BASE_URL}/newRequest`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function updateRequest(requestFormData) {
  try {
    const res = await fetch(`${BASE_URL}/myRequests/${requestFormData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteRequest(requestId){
  try {
    const res = await fetch(`${BASE_URL}/${requestId}`, {
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

export {
  getAllRequests,
  getMyRequests,
  createRequest,
  updateRequest,
  deleteRequest,
}