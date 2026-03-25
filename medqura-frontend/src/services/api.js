const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const apiCall = async (endpoint, method = 'GET', data = null) => {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'API request failed');
    }

    return await response.json();
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    throw error;
  }
};

// Demo API
export const demoAPI = {
  create: (data) => apiCall('/demos', 'POST', data),
  getAll: () => apiCall('/demos', 'GET'),
  getById: (id) => apiCall(`/demos/${id}`, 'GET'),
  updateStatus: (id, status) => apiCall(`/demos/${id}`, 'PATCH', { status }),
  delete: (id) => apiCall(`/demos/${id}`, 'DELETE'),
};

// Patient API
export const patientAPI = {
  create: (data) => apiCall('/patients', 'POST', data),
  getAll: (filters = {}) => {
    const params = new URLSearchParams(filters);
    return apiCall(`/patients?${params.toString()}`, 'GET');
  },
  getById: (id) => apiCall(`/patients/${id}`, 'GET'),
  update: (id, data) => apiCall(`/patients/${id}`, 'PATCH', data),
  addVitals: (id, vitals) => apiCall(`/patients/${id}/vitals`, 'POST', vitals),
};

// Analytics API
export const analyticsAPI = {
  getStats: () => apiCall('/analytics/stats', 'GET'),
  getPatientsByDepartment: () => apiCall('/analytics/patients-by-department', 'GET'),
  getDemoStatus: () => apiCall('/analytics/demo-status', 'GET'),
  getRecentDemos: () => apiCall('/analytics/recent-demos', 'GET'),
  getAppointmentStatus: () => apiCall('/analytics/appointment-status', 'GET'),
};

// Health Check
export const healthCheck = () => apiCall('/health', 'GET');
