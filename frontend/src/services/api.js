const baseUrl = 'http://localhost:3000';

const headers = {
  'Content-Type': 'application/json'
};

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  }
  return response.json();
};

// Admin APIs
export const addGroceryItem = async (item) => {
  const response = await fetch(`${baseUrl}/admin/add`, {
    method: 'POST',
    headers,
    body: JSON.stringify(item)
  });
  return handleResponse(response);
};

export const getGroceryItems = async () => {
  const response = await fetch(`${baseUrl}/admin/view`, { headers });
  return handleResponse(response);
};

export const updateGroceryItem = async (id, data) => {
  const response = await fetch(`${baseUrl}/admin/update/${id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(data)
  });
  return handleResponse(response);
};

export const removeGroceryItem = async (id) => {
  const response = await fetch(`${baseUrl}/admin/remove/${id}`, {
    method: 'DELETE',
    headers
  });
  return handleResponse(response);
};

export const updateInventory = async (id, inventory) => {
  const response = await fetch(`${baseUrl}/admin/manage/${id}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({ inventory })
  });
  return handleResponse(response);
};

// User APIs
export const getUserGroceryItems = async () => {
  const response = await fetch(`${baseUrl}/user/view`, { headers });
  return handleResponse(response);
};

export const bookGroceryItems = async (items) => {
  const response = await fetch(`${baseUrl}/user/book`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ items })
  });
  return handleResponse(response);
};
