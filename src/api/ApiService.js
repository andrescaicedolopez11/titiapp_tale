import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mock.apidog.com/m1/', 
  headers: {
    'Content-Type': 'application/json',
  },
});


// EndPoint Docentes
export const getDocentes = () => api.get('982903-968444-default/docentes');
export const postDocente = (docente) => api.post('982903-968444-default/docentes', docente);
export const putDocente = (id, docente) => api.put(`982903-968444-default/docentes/${id}`, docente);
export const deleteDocente = (id) => api.delete(`982903-968444-default/docentes/${id}`);

// EndPoints Estudiantes
export const getEstudiantes = () => api.get('983115-968659-default/estudiantes');
export const postEstudiante = (estudiante) => api.post('983115-968659-default/estudiantes', estudiante);
export const putEstudiante = (id, estudiante) => api.put(`983115-968659-default/estudiantes/${id}`, estudiante);
export const deleteEstudiante = (id) => api.delete(`983115-968659-default/estudiantes/${id}`);

export default api;
